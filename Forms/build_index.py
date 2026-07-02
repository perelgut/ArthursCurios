#!/usr/bin/env python3
"""
build_index.py — one-time / re-runnable indexer for the LitRPG Story Bible.

Scans the StoryBible markdown files, finds every `## Entry` heading, classifies
it by its OWN metadata strip (Role / Type / Groups) rather than by which file it
sits in, captures the entry body, and writes Forms/bible_data.js (window.BIBLE).

It also flags anomalies: an entry whose declared type belongs in a different
file than the one it was found in (i.e. something filed in the wrong place).

Re-run this whenever Story Bible entries are added or moved:
    python3 build_index.py
"""

import os, re, json, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
BIBLE_DIR = os.environ.get("BIBLE_DIR") or os.path.normpath(os.path.join(HERE, "..", "StoryBible"))
OUT = os.environ.get("BIBLE_OUT") or os.path.join(HERE, "bible_data.js")

# Files that hold typed entries, and the canonical home for each type.
SCAN_FILES = ["03_Characters.md", "04_Worldbuilding.md"]
EXPECTED_FILE = {
    "Protagonist": "03_Characters.md",
    "Supporting Character": "03_Characters.md",
    "Antagonist": "03_Characters.md",
    "Sentient Object": "03_Characters.md",
    "Setting": "04_Worldbuilding.md",
    "Item": "04_Worldbuilding.md",
    "Culture": "04_Worldbuilding.md",
    "Lore": "04_Worldbuilding.md",
}
WORLD_TYPES = ["Setting", "Item", "Culture", "Lore"]


def parse_meta(strip):
    """Parse a '**Field:** value • **Field:** value' metadata strip into a dict."""
    fields = {}
    if not strip:
        return fields
    for part in re.split(r"•", strip):  # bullet •
        m = re.match(r"\s*\*\*(.+?):\*\*\s*(.*)", part.strip())
        if m:
            fields[m.group(1).strip()] = m.group(2).strip()
    return fields


def classify(fields):
    """Return (type, subtype) from a metadata field dict."""
    groups = fields.get("Groups", "")
    role = fields.get("Role", "")
    typ = fields.get("Type", "")
    if "Sentient Object" in groups:
        return "Sentient Object", ""
    if role:
        if "Protagonist" in role:
            return "Protagonist", ""
        if "Supporting" in role:
            return "Supporting Character", ""
        if "Antagonist" in role:
            return "Antagonist", ""
        return "Character", ""
    if typ:
        m = re.match(r"([A-Za-z]+)(?:\s*/\s*[A-Za-z]+)?\s*(?:\((.*?)\))?", typ)
        base = m.group(1) if m else typ
        subtype = (m.group(2) if m and m.group(2) else "").strip()
        for t in WORLD_TYPES:
            if base.startswith(t):
                return t, subtype
        return base, subtype
    return "Unknown", ""


def parse_file(fname):
    path = os.path.join(BIBLE_DIR, fname)
    out = []
    if not os.path.exists(path):
        return out
    with open(path, "rb") as fh:
        text = fh.read().decode("utf-8", errors="replace")
    lines = text.split("\n")
    n = len(lines)
    i = 0
    while i < n:
        m = re.match(r"^##\s+(.+?)\s*$", lines[i])
        if m and not lines[i].startswith("###"):
            name = m.group(1).strip()
            # metadata strip = first non-blank line after the heading that starts with **
            j = i + 1
            while j < n and lines[j].strip() == "":
                j += 1
            meta_line = lines[j].strip() if (j < n and lines[j].lstrip().startswith("**")) else ""
            # body runs until the next ## heading
            k = i + 1
            body = []
            while k < n and not re.match(r"^##\s+", lines[k]):
                body.append(lines[k])
                k += 1
            fields = parse_meta(meta_line)
            typ, subtype = classify(fields)
            out.append({
                "type": typ,
                "subtype": subtype,
                "name": name,
                "file": fname,
                "meta": meta_line,
                "fields": fields,
                "body": "\n".join(body).strip(),
            })
            i = k
            continue
        i += 1
    return out


def main():
    entries = []
    for f in SCAN_FILES:
        entries.extend(parse_file(f))

    anomalies = []
    for e in entries:
        exp = EXPECTED_FILE.get(e["type"])
        if exp and exp != e["file"]:
            anomalies.append({
                "name": e["name"], "type": e["type"],
                "foundIn": e["file"], "expected": exp,
            })

    # counts per known type (stable order for the dashboard)
    order = ["Protagonist", "Supporting Character", "Antagonist",
             "Sentient Object", "Setting", "Item", "Culture", "Lore"]
    counts = {t: 0 for t in order}
    for e in entries:
        counts[e["type"]] = counts.get(e["type"], 0) + 1

    # duplicate names (same name appearing under more than one entry)
    byname = {}
    for e in entries:
        byname.setdefault(e["name"], []).append(e)
    duplicates = []
    for name, es in byname.items():
        if len(es) > 1:
            duplicates.append({
                "name": name,
                "types": sorted({x["type"] for x in es}),
                "files": sorted({x["file"] for x in es}),
            })

    data = {
        "generated": datetime.datetime.now().isoformat(timespec="seconds"),
        "counts": counts,
        "anomalies": anomalies,
        "duplicates": duplicates,
        "entries": entries,
    }
    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write("// Auto-generated by build_index.py — do not edit by hand.\n")
        fh.write("window.BIBLE = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")

    print("Wrote", os.path.relpath(OUT, HERE))
    print("Entries:", len(entries))
    for t in order:
        if counts.get(t):
            print(f"  {t}: {counts[t]}")
    other = sorted({e['type'] for e in entries} - set(order))
    for t in other:
        print(f"  [{t}]: {sum(1 for e in entries if e['type']==t)}")
    if anomalies:
        print("ANOMALIES (entry in unexpected file):")
        for a in anomalies:
            print("  - '%s' is %s but in %s (expected %s)" % (a["name"], a["type"], a["foundIn"], a["expected"]))
    else:
        print("No file-placement anomalies found.")
    if duplicates:
        print("Duplicate names (same name, multiple entries):")
        for d in duplicates:
            print("  - '%s' as %s" % (d["name"], ", ".join(d["types"])))


if __name__ == "__main__":
    main()
