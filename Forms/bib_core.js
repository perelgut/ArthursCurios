/* bib_core.js — shared helpers + styles for the Story Bible browser
   (index.html hub, list.html, entry.html). Loads after bible_data.js. */
window.BIB = (function () {
  "use strict";

  var TYPES = ["Protagonist", "Supporting Character", "Sentient Object",
               "Setting", "Item", "Culture", "Lore"];
  var FORM = {
    "Protagonist": "protagonist.html", "Supporting Character": "supporting_character.html",
    "Sentient Object": "sentient_object.html", "Setting": "setting.html",
    "Item": "item.html", "Culture": "culture.html", "Lore": "lore.html"
  };
  var BLURB = {
    "Protagonist": "POV leads", "Supporting Character": "POV / support cast",
    "Sentient Object": "The Shop, the Ledger", "Setting": "Places",
    "Item": "Significant objects", "Culture": "Peoples, factions, folklore",
    "Lore": "Rules, history, magic"
  };

  function data() { return window.BIBLE || { entries: [], counts: {}, anomalies: [], duplicates: [], generated: "(no index)" }; }
  function qs(name) { return new URLSearchParams(location.search).get(name); }
  function byType(t) { return data().entries.filter(function (e) { return e.type === t; }); }
  function get(i) { var e = data().entries; i = parseInt(i, 10); return (i >= 0 && i < e.length) ? e[i] : null; }
  function indexOf(entry) { return data().entries.indexOf(entry); }

  function esc(s) { return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function mdInline(s) {
    return esc(s)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1<\/a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1<\/strong>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2<\/em>")
      .replace(/`([^`]+)`/g, "<code>$1<\/code>");
  }
  function mdBlock(text) {
    if (!text) return "<p class='muted'>(no body text)</p>";
    var lines = text.split("\n"), out = [], list = null, tbl = null;
    function closeList() { if (list) { out.push("<ul>" + list.join("") + "<\/ul>"); list = null; } }
    function closeTable() {
      if (tbl) {
        var rows = tbl.filter(function (r) { return !/^\s*\|?[\s:|-]+\|?\s*$/.test(r); });
        var html = "<table>" + rows.map(function (r, ri) {
          var cells = r.replace(/^\||\|$/g, "").split("|").map(function (c) { return c.trim(); });
          var tag = ri === 0 ? "th" : "td";
          return "<tr>" + cells.map(function (c) { return "<" + tag + ">" + mdInline(c) + "<\/" + tag + ">"; }).join("") + "<\/tr>";
        }).join("") + "<\/table>";
        out.push(html); tbl = null;
      }
    }
    for (var i = 0; i < lines.length; i++) {
      var ln = lines[i];
      if (/^\s*<!--/.test(ln)) continue;
      if (/^\s*\|.*\|\s*$/.test(ln)) { (tbl = tbl || []).push(ln.trim()); continue; } else { closeTable(); }
      if (/^####\s+/.test(ln)) { closeList(); out.push("<h5>" + mdInline(ln.replace(/^####\s+/, "")) + "<\/h5>"); }
      else if (/^###\s+/.test(ln)) { closeList(); out.push("<h4>" + mdInline(ln.replace(/^###\s+/, "")) + "<\/h4>"); }
      else if (/^>\s?/.test(ln)) { closeList(); out.push("<blockquote>" + mdInline(ln.replace(/^>\s?/, "")) + "<\/blockquote>"); }
      else if (/^[-*]\s+/.test(ln)) { (list = list || []).push("<li>" + mdInline(ln.replace(/^[-*]\s+/, "")) + "<\/li>"); }
      else if (ln.trim() === "") { closeList(); }
      else { closeList(); out.push("<p>" + mdInline(ln) + "<\/p>"); }
    }
    closeList(); closeTable();
    return out.join("\n");
  }

  function injectStyle() {
    if (document.getElementById("bib-style")) return;
    var css = [
      "*{box-sizing:border-box}",
      "body{margin:0;font-family:Georgia,'Times New Roman',serif;background:#1a1714;color:#efe7da;line-height:1.55}",
      ".wrap{max-width:880px;margin:0 auto;padding:40px 24px 90px}",
      "a{color:#c8923d}",
      "a.back{text-decoration:none;font-size:14px;display:inline-block;margin-bottom:8px}",
      "h1{font-size:30px;margin:6px 0 4px;color:#f3e9d8}",
      ".sub{color:#b9ab95;margin:0 0 8px;font-style:italic}",
      ".totals{color:#8d8170;font-size:13px;margin:0 0 26px}",
      ".muted{color:#8d8170}",
      ".grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}",
      ".tcard{background:#262019;border:1px solid #3a3128;border-radius:10px;padding:16px 18px}",
      ".tcard h2{margin:0 0 2px;font-size:19px;color:#e8b765;display:flex;justify-content:space-between;align-items:baseline;gap:10px}",
      ".tcard .count{font-size:13px;color:#1a1714;background:#c8923d;border-radius:20px;padding:1px 10px;font-weight:bold;min-width:26px;text-align:center}",
      ".tcard .count.zero{background:#3a3128;color:#9b8e78}",
      ".tcard p{margin:2px 0 12px;font-size:13.5px;color:#b9ab95}",
      ".tcard .btns{display:flex;gap:8px}",
      ".btn{font-family:inherit;font-size:14px;border-radius:7px;padding:7px 14px;border:1px solid #c8923d;background:#c8923d;color:#1a1714;cursor:pointer;font-weight:bold;text-decoration:none;display:inline-block}",
      ".btn.ghost{background:transparent;color:#c8923d}",
      ".btn:hover{filter:brightness(1.08)}",
      ".tools{display:flex;gap:10px;align-items:center;margin:0 0 18px;flex-wrap:wrap}",
      "input.q{flex:1;min-width:200px;background:#15120f;border:1px solid #443a2d;border-radius:6px;color:#f1ead8;padding:9px 11px;font-family:inherit;font-size:15px}",
      ".row{display:block;background:#221d17;border:1px solid #3a3128;border-radius:9px;padding:13px 16px;margin:0 0 10px;text-decoration:none;color:#efe7da;transition:border-color .12s,transform .12s}",
      ".row:hover{border-color:#c8923d;transform:translateX(2px)}",
      ".row h3{margin:0 0 3px;font-size:17px;color:#e8b765}",
      ".row .line{font-size:13px;color:#b9ab95}",
      ".badges{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 0}",
      ".badge{font-size:11px;border-radius:20px;padding:2px 10px;background:#332a20;color:#cdbfa8;border:1px solid #443a2d}",
      ".badge.warn{background:#5a2d22;color:#f0c9bd;border-color:#8a4636}",
      ".strip{font-size:13.5px;color:#b9ab95;margin:0 0 14px;line-height:1.5}",
      ".body{font-size:15px;color:#ddd0b9;line-height:1.65}",
      ".body h4{font-size:15px;color:#e8b765;margin:16px 0 4px}",
      ".body h5{font-size:13px;color:#cdbfa8;margin:12px 0 4px}",
      ".body p{margin:8px 0}",
      ".body blockquote{margin:10px 0;padding:6px 12px;border-left:3px solid #c8923d;background:#1d1813;color:#c9bca6}",
      ".body ul{margin:8px 0 8px 18px;padding:0}",
      ".body table{border-collapse:collapse;margin:10px 0;font-size:13px;width:100%}",
      ".body th,.body td{border:1px solid #3a3128;padding:5px 9px;text-align:left}",
      ".body th{background:#2a231b;color:#e8b765}",
      ".body code{background:#332a20;padding:1px 5px;border-radius:3px;font-family:Menlo,Consolas,monospace;font-size:12px}",
      ".panel{margin-top:24px;padding:14px 16px;border-radius:8px;font-size:13.5px}",
      ".panel.ok{background:#1f261d;border-left:3px solid #6f9f54;color:#cfe0bf}",
      ".panel.warn{background:#2a1f1a;border-left:3px solid #c8923d;color:#e7d3b3}",
      ".panel.dup{background:#221d17;border-left:3px solid #7a93b8;color:#cdd6e6}",
      ".panel ul{margin:6px 0 0;padding:0 0 0 18px}",
      ".note{margin-top:24px;padding:14px 16px;background:#221d17;border-left:3px solid #c8923d;border-radius:4px;font-size:13px;color:#cdbfa8}",
      "nav.pager{display:flex;justify-content:space-between;margin:22px 0 0;gap:10px}"
    ].join("\n");
    var s = document.createElement("style"); s.id = "bib-style"; s.textContent = css; document.head.appendChild(s);
  }
  injectStyle();

  return { TYPES: TYPES, FORM: FORM, BLURB: BLURB, data: data, qs: qs, byType: byType, get: get, indexOf: indexOf, esc: esc, mdInline: mdInline, mdBlock: mdBlock };
})();
