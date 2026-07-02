# LitRPG Writing

Working folder for a LitRPG novel-in-progress (working title TBD) centered on Stepan Novacek, the inherited curio shop, and a fairy princess trapped as a tomcat. Planned as the first book of a series.

---

## How to bring Claude back up to speed in a new conversation

Two options, in increasing order of permanence:

1. **One-time, paste at conversation start:**
   > Load the LitRPG project. Read `README.md` first, then `Project_Notes.md`, then any StoryBible files relevant to what we're doing. Honor the hard rules from both files. Use `[Inference]` / `[Unverified]` / `[Speculation]` labels per my user preferences.

2. **Permanent, via Claude app Projects feature:** paste the **Project Instructions** block at the bottom of this README into the Project's custom-instructions field. Then every conversation rooted in the Project starts with that context already in place.

---

## Folder structure

```
C:\Users\perel\Projects\LitRPG\
├── README.md                                this file
├── Project_Notes.md                         working notes & operating rules (newest at top)
├── Series_Ideas_Parking_Lot.md              far-future "don't lose this" ideas, not yet on any outline
├── Claudes_Advice_to_a_LitRPG_Writer.md     condensed craft advice (append over time)
├── LitRPG_Series_Template.docx              one-page planning template (System Spec / Arc / Voice)
├── Stepan Store Ch 1.docx                   author's draft — private unless pointed at
├── Chapters\                                prose master files (Chapter_NN.md + generated .docx)
└── StoryBible\
    ├── 0_Braindump.md                       initial seed / story summary
    ├── 01_Genre_Style.md                    (empty — paste from Sudowrite)
    ├── 02_Synopsis.md                       Sudowrite synopsis (populated)
    ├── 03_Characters.md                     POV + supporting; metadata strip + stat blocks
    ├── 04_Worldbuilding.md                  typed entries (Setting / Item / Culture / Lore)
    ├── 05_Outline.md                        (empty — paste from Sudowrite)
    ├── 06_Sentient_Objects.md               object-specific depth; cross-linked to 03_Characters.md
    ├── 07_Secrets.md                        author-only; reveals readers eventually learn
    └── 08_System_Spec.md                    locked store-credit / progression rules (canon)
```

---

## Conventions

**Markdown heading levels**

- `#` file title (one per file)
- `##` major entry (per character, per worldbuilding entry, etc.)
- `###` subsection within an entry
- `####` rarely needed

**Character metadata strip** — single line directly under `## Name`:

```
**Role:** [Protagonist (POV) | Supporting Character (POV) | Antagonist | ...] • **Gender:** ... • **First Appearance:** Book X, Ch. Y • **Aliases:** ... • **Groups:** ...
```

**Character stat block** — bulleted list under `### Stats / Class / Magic_Level / Store_Credits`, AD&D 3–18 scale, six classic stats (Strength, Intelligence, Wisdom, Dexterity, Constitution, Charisma). Stats cap at 18 except **Strength**, which continues in `18/+NN` notation to `18/+99` (see `08_System_Spec.md` §3).

**Progression-tracking fields (guardian/bloodline characters)** — characters who earn on the two tracks carry extra fields under the same heading: a **Magic** block (Magic Level, Magic XP, characteristic points allocated, known spells) and a **Steward** block (Steward Level, Shop SP, Steward stat gains, earning notes). Currently only Stepan has these. Sentient objects that grow (e.g. the Shop) carry a **Shop progression** block (Shop Level, Restoration). All defined in `08_System_Spec.md`.

**Worldbuilding entry metadata strip:**

```
**Type:** [Setting | Item | Culture | Lore] (optional subtype) • **First Appearance:** ... • **Related:** ...
```

**Templates intentionally differ between Protagonist and Supporting characters.** Antagonist template TBD when the first antagonist is named.

**Sentient objects use a custom stat scheme** (Influence / Memory / Reach / Will, each 1–10), adopted 2026-06-24 and defined in `StoryBible/06_Sentient_Objects.md`. The AD&D six-stat scale is deprecated for objects (still used for human/animal characters).

---

## Hard rules (operating constraints)

These persist across conversations. Also captured at the top of `Project_Notes.md` for permanence.

1. **Prince is never called "Princess" anything** in any drafted prose, dialogue tag, narration, summary, or AI-assisted continuation. The only safe place for her real name and title is `StoryBible/07_Secrets.md`. *In-world reason:* identity exposure makes her transformation permanent. *Drafting reason:* the secret is the engine of her tension. **Amendment (2026-06-25):** a **gender-neutral** royal honorific — *"Your Highness"* or *"Your Majesty"* — **may** be spoken sarcastically by Stepan (or others who don't know her identity) toward the cat; applied as a joke to "a cat" it is not identity exposure, and it is how Stepan arrives at the name **Prince**. Still forbidden everywhere: *Princess, Princess Aya, Aya, Stronghome,* and any address marking her as female or as a princess.

2. **Stepan begins the story with zero awareness that magic is real or that he has magical potential.** Interior monologue reaches for mundane explanations first; the bloodline framing arrives late, well after he accepts that magic exists.

3. **Label unverified content** with `[Inference]`, `[Unverified]`, or `[Speculation]`. For LLM-behavior claims, use `[Inference]` with a note about observed patterns. Never present generated or speculated content as fact.

4. **Don't paraphrase or reinterpret user input** unless asked. When the user states a canonical fact about characters, plot, or rules, treat it as authoritative and write it into the relevant file.

5. **Author's draft prose is private by default.** `Stepan Store Ch 1.docx` (and any future `.docx` in the project root) is not to be opened, summarized, or analyzed unless explicitly requested.

---

## Currently open work (snapshot)

*Update this section as the project moves. It will get stale quickly — that's fine. (Last refreshed 2026-06-25.)*

- **Populated:** `02_Synopsis.md` (full), `03_Characters.md` (Stepan, Danica, Shop, Prince, Ledger), `04_Worldbuilding.md` (~15 entries — Settings, Items incl. the Walking Cane, Cultures, Lore), `06_Sentient_Objects.md`, `07_Secrets.md`, `08_System_Spec.md` (two-track progression locked).
- **Still empty / thin:** `01_Genre_Style.md` (empty) and `05_Outline.md` (empty — the natural home for Chapter 2 scene planning, next up).
- **Progression system locked (2026-06-25):** two tracks — **Magic XP** (casting → level, +1 stat + spell, doubles forever) and **Shop SP** (stewardship → Steward standing + Store upgrades). The **Shop levels as its own second body**. Full rules in `08_System_Spec.md`; decisions logged in `Project_Notes.md`.
- **Open confirmations** (flagged in `08`/`Project_Notes`): Shop's own curve numbers (proposed), web-cleaning SP question, optional Constitution Steward gain, cosmology reveal timing.
- **Character housekeeping pending:** `Knows / Doesn't Know` sections are empty for all characters — highest value to fill for Stepan and Prince before drafting Ch. 2 (Hard Rule 2 boundary).
- The System Spec section of `LitRPG_Series_Template.docx` and the template's Series Arc Checkpoints are still unfilled (craft-advice item 1).

---

## Project Instructions

*Copy the block below verbatim into the Claude app's Project-level custom instructions / system prompt field, if available. This sets Claude up correctly for every conversation rooted in this Project.*

```
You are working with the user on a LitRPG novel project (first book of a planned series). The working folder is C:\Users\perel\Projects\LitRPG.

At the start of every conversation, read README.md and Project_Notes.md before doing substantive work. Honor the hard rules from both files.

HARD RULES:

1. The fairy princess character is referred to ONLY as Prince or Cat in any drafted prose, dialogue tag, narration, summary, or AI continuation. Never Princess, Princess Aya, Aya, Stronghome, or any feminine/identity-revealing address. EXCEPTION (amended 2026-06-25): Stepan and other characters who do not know her identity MAY sarcastically address the cat with a gender-neutral royal honorific — "Your Highness" or "Your Majesty" — which is how Stepan arrives at the name "Prince"; this is not identity exposure. Her real name and title belong only in StoryBible/07_Secrets.md.

2. Stepan Novacek begins the story unaware that magic is real and that he has any magical potential. His interior monologue reaches for mundane explanations first. The bloodline framing arrives late.

3. Label unverified content with [Inference], [Unverified], or [Speculation]. For LLM-behavior claims, use [Inference] with a note about observed patterns. Never present generated content as fact.

4. Do not paraphrase or reinterpret the user's input unless asked. When the user states a canonical fact, write it into the relevant Story Bible or Project_Notes.md file.

5. Treat author draft prose (any .docx in the project root) as private by default. Open only when explicitly directed.

FILE LAYOUT:
- Project_Notes.md — running working notes and decisions; newest at top.
- StoryBible/03_Characters.md — characters with metadata strip + stat block. Human/animal characters use the AD&D scale (3–18); sentient objects use the custom scheme (Influence/Memory/Reach/Will, 1–10).
- StoryBible/04_Worldbuilding.md — entries typed as Setting, Item, Culture, or Lore.
- StoryBible/06_Sentient_Objects.md — object-specific depth (origin of sentience, voice guide, custom stats); cross-linked with 03_Characters.md.
- StoryBible/07_Secrets.md — author-only reveals.
- StoryBible/08_System_Spec.md — locked, canonical store-credit / progression rules. Load-bearing for series consistency.
- Other StoryBible files — see headers; some are still empty placeholders.
- LitRPG_Series_Template.docx — one-page planning template (System Spec, Series Arc, Voice).
- Claudes_Advice_to_a_LitRPG_Writer.md — condensed craft advice, appendable.

GENRE: LitRPG fantasy with magic, leveling, sentient objects, and an XP-like store-credit-for-stewardship progression mechanic. The system spec is the load-bearing document for series consistency; respect what's in it even when the immediate prose would benefit from bending the rules.

OUTPUT FORMATTING: In conversation, follow user preferences for concise prose with minimal headers and lists. Document files use full Markdown structure. No emojis unless requested.
```
