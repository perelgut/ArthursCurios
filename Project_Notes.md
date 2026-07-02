# Project Notes

Running notes on decisions, seeds, and recurring beats that aren't quite Story Bible material but need to persist across sessions. Most recent at top.

**Standing convention (2026-06-25):** A `Project_Diary.md` (forward-chronological) tracks every session's discussions and decisions. Claude keeps it **up to date silently** — appending a dated block each working session — and does **not** report on it unless explicitly asked.

**Standing convention (2026-06-26) — punctuation:** Use **spaced en-dashes ( – )** in the prose, **never em-dashes ( — )**. House style. Applies to new drafting/editing going forward; existing chapters not retro-converted unless asked.

## 2026-06-26 — Canon change: Stepan is single, not a widower; Prince fully neutralized to "it"

- **Stepan: widower → single.** No dead wife in canon. He's a solitary, never-partnered (or simply unattached) man. Author flagged possible future light touches – "my last girlfriend," "my first girlfriend," "my, ummm, friend" – but **timing matters; these may never be used. Not inserted now.**
  - **Edits made:** `Chapter_05.md` – "the years since **his wife died**" → "the years since **anyone last needed him**." `Chapter_06.md` – "retired, **widowed**, four days the keeper" → "retired, **alone**, four days the keeper." `02_Synopsis.md` – "a solitary sixty-eight-year-old **widower**" → "…**man**." (`Ch6` "wife"→"friends" dialogue line was already done by the author.)
  - **DOCX SYNC OWED:** the `.docx` reference copies of Ch5 and Ch6 still carry the old wording (`wife died` / `widowed`). Author to mirror those two one-word changes in the docx, or re-export from the updated `.md`.
- **Prince neutralized to "it" in `03_Characters.md`.** All she/her **and** the masculine he/his (Physical Description) → it/its across Personality, Motivations, Internal Conflict, Strengths, Weaknesses, Character Arc, Physical Description, Dialogue Style. Also fixed a **Hard Rule 1 leak**: "If **the fairy** is ever freed…" → "If **whatever is trapped in this form** is ever freed…". (The "Gender: Confused" metadata value left as-is – it's the running joke, not a leak.) `07_Secrets.md` still holds the true she/her – unchanged by design.
- **BROWSER REFRESH OWED:** `Forms/bible_data.js` is generated from `03/04`; it still shows the old Prince text (she/her/fairy) until you run `python build_index.py`. Run it to refresh the Story Bible browser.

## 2026-06-26 — Magic-Missile economy, Ledger scope, Ch7 vs the finale

- **Magic Missile recharge = over time, fatigue-variable** (`CANON`, `08` §3). Casting spends a charge; it returns on the clock, faster when Stepan is rested, slower when he's tired/run-down. At L1 the reserve is ~one shot and the **HUD gives no clean "ready" ping**, so he often can't be sure a missile is back — the engine for the finale's eyes-shut, fire-on-faith beat.
- **Cane as melee last-resort** (`CANON`, `08` §5; planted late-Book-1 beat). At **0 missiles** Stepan swings the cane and finds it hits **far harder than it should — and doesn't jolt him** (unlike the early static zaps). The "why" (clean channeling for the bloodline-bearer) is left open as a thread.
- **The Ledger ≠ the Shop.** The Ledger **records the whole situation** — every party to a consequential event (goblins, the breach, the Shop weakening/healing, other people present, bloodline or not), e.g. **Danica at the finale** (`CANON`, `08` §4 + `06`). Recording ≠ serving/crediting: it can write a non-bloodline person into a night without ever paying them SP/XP. Reconciles "skritching for both" with "the Shop never served her line."
- **Ch7 stays simple** — first **bigger goblin**, first **Magic Missile** (one-shot kill, +5 XP → 16/20, still L1), Prince plugs the corpse, then **plug the hole** via a stewardship favour (reseat the rotted **ward-board**; Prince's reluctant near-confession). **No Danica, no impossible-witnessed.** Contain, not seal — the patch is what fails at Ch10.
- **Ch10 finale (the double reveal), beats locked** in `05`: recharge scene → goblin attack → blind Magic Missile saves Danica → Danica **glowing + her own HUD** (proposed silver-white vs his amber) → **Stepan teaches her Status/Clear** (role reversal, pays off Ch6 gag) → **Ledger writes for both** → cleric-bloodline pivot to Book 2.
- **Stepan voice (early):** **child-with-a-new-gadget** about the HUD/Ledger — checks them constantly, *Status* for no reason, re-reads after every event; settles later (noted in `03`).
- **Casting mechanic locked:** Magic Missile is **aimed by pointing the cane** — cane = direction, intent = trigger; no incantation, no gesture (`08` §5). Enables the eyes-shut finale shot.
- **Ch7 missile does *not* widen the breach** — it just kills the bigger goblin. After the cast he's **dry** (recharge) and unaware.
- **Ch7 Shop level-up = an ice-cream maker** (self-directed Shop whimsy, "just there"). Reading-nook-with-armchairs was the alt — **parked for a later Shop level.**
- **Goblin tiers (`04` + `08` §2):** small = 2 XP (Ch5); **bigger goblin = 5 XP** (Ch7, just bigger, no armour); **armoured warrior = two-stage: 5 XP destroy armour, 8 XP kill** (Ch8, the first real fighter; signals organization behind the leak).
- **Ch8 set-piece RESOLVED 2026-06-26 (full beat):** missile **blows armour + stuns (+5)** → goblin enrages, rushes → Stepan throws the **cone** (falls short) → goblin **slips on the ice cream** → Stepan realizes he's **out of shots** → desperation **cane-swing to the head = kill (+8)**, **faint staff-glow**; Stepan shaken at killing **by his own hand**. **Ch8 ends there.** First appearance of the **cane-as-weapon** (moved up from "late Book 1"). **⚠ XP flag:** +13 takes him 16→29, crossing 20 → **Magic L2** (2nd spell + stat) — embrace or tune; a 2nd spell may soften the Ch10 finale.
- **Ch7 scenes 4–6 refined:** bigger goblin **too big for Prince** → Prince **instructs Stepan** to plug the gap with the body (yuck + monster-horror + sapient-kill guilt, then relief as it eases); ward-board reseating = **next step in redemption**, ending on the **Ledger nib scratching**; then a *blurp* and the **ice-cream maker** is suddenly there, churning at perfect temp.
- **L2 spell = Reflect Ward** (defensive; raised around himself, not aimed): turns an incoming blow back on the attacker — a strike that would fell Stepan fells the goblin. **Health is narrative, not hard HP** (the ward scales to the blow). Proposed **limit** (flag): cast on Magic Missile's recharge economy, raised before the blow, **collapses after one reflection**. Non-offensive → keeps the Ch10 finale's "out of shots" tension. Name provisional. (`08` §3)
- **Constitution +2** beyond Ch6's +1: **+1 from the Ch7 ward-board (Shop mission-service grant)** and **+1 from Magic L2 (Ch8)** → **CON 8 → 9 → 10.** New canon mechanic: the **Shop can grant a characteristic point (usually CON) for significant mission service** — the lever for Stepan getting **healthier and eventually younger** over the series (de-aging, `08` §6). Author seed: that renewal sets up **personal/relational tension with Danica** down the line *(filed here; promote to `07` when it's closer to the page)*.

## 2026-06-26 — Charges, cane→staff, and the Ch8–10 restructure

- **Spell charges = magic level** (L1: 1, L2: 2, …), shared across Magic Missile / Reflect Ward; recover over time (fatigue-variable); a **level-up refills** the pool. Finale beat: the armour-shot levels him to L2 mid-fight (refill to 2), and **panicked, he never notices he still holds a missile** and casts Reflect Ward instead. (`08` §3)
- **Cane → staff:** the cane is becoming a true staff (exceptional hardness, strikes far harder than its mass warrants), and **Danica's unintended, accidental cleric blessing jump-starts it** (pulse → Stepan → cane → killing blow). This also *resolves* the planted "something helped" thread — the something is her. (`08` §5; `04` Walking Cane)
- **Finale combat confirmed:** Magic Missile (armour, +5) → L2 → **Reflect Ward** rebounds the warrior's blow and drives it back → cane + Danica-pulse **kill (+10 XP, was 8)** → Magic XP 31. CON → 10.
- **Ch7 reward upgraded:** the rune/board/cork work earns **+7 SP** (Steward SP 22, still L4) and pushes the **Shop to Level 3**, which **restores the goblin-smashed shelf + the snow-globe** (and adds the ice-cream maker). Shelf-restoration beat added to `Chapter_07.md`.
- **Back-half restructure:** **Ch8 = recovery** (shortest chapter — sleep, windows, dusting, hiding the Ledger, inventorying shelves; no monsters). **Ch9 = the second mousehole** (breakfast; Danica spots a bigger hole; light mouse-proofing banter; shared ice cream she assumes Stepan made; ends on a cold breeze from the second breach). **Ch10 = the warrior finale + Danica reveal** (supersedes the blind-missile sketch; ice-cream-slip gag retired).
- **Resolved 2026-06-26:** **Arthur → Ch11 epilogue** — a flashback set **7+ years pre-arrival (maybe much more)**; content still to develop. **Book 1 = Ch0–Ch10 main arc + Ch11 epilogue.** **Cane before the blessing** = tough wood, some latent power (the zaps), *not* weapon-grade; **after** = weapon-grade functions emerge **gradually.**
- **Book 2 cold-open seed (NOT Book 1):** after the Ch10 reveal Danica leaves, **stunned** — and is back at the shop door **early the next morning, banging, demanding answers Stepan doesn't have.** That's where Book 2 opens; Ch10 just ends on the discovery/threat, not the morning after.
- **Ch10 reveal terms (locked 2026-06-26):** cleric reveal **explicit/total**; Danica **glows silver-white** while charging the staff; her power is a **divine aura, not a game-HUD**; she **never played the "Dungeon games"** (Grovesend/Ingersoll either), so Stepan's terms (Status, Charisma, levels) don't land — she ends **sitting, stunned.** Arthur **held for the Ch11 epilogue.** Steward **L5 crosses mid-fight** (+1 Charisma) → reason to dig out the hidden Ledger → it's been writing about her.

---

## Post-Book To-Do (pre-publication checklist)
*Things to handle once Book 1 is drafted. Newest items can be appended; renumber freely.*

1. **Substantive human editing for copyright.** Edit and make real, substantial human changes throughout — the book should reflect genuine human authorship, not untouched AI text. This aligns with current guidance that purely AI-generated text generally isn't eligible for copyright protection (it's the *human* authorship that's protected).
2. **Make the LitRPG systems clear.** Ensure the book itself plainly establishes and explains the mechanics (the two tracks, Shop SP / Restoration, Magic XP & levels, the cane, the stat scheme, etc.) — both for the reader and to support the copyright claim over the **original game-style systems**.
3. **Register an ISBN — in Canada (free).** ISBNs are issued at no cost in Canada (Library and Archives Canada). Do it here rather than paying elsewhere.
4. **Register copyright in Canada (~CA$63 online).** Be **very clear about AI-written vs human-written** material in the application.
5. **Register copyright in the US (~US$45).** Same: be **very clear about human vs AI** authorship.

`[Inference / not legal advice]` Fees, forms, and AI-disclosure requirements change and differ by country — confirm the current amounts and rules at filing time (or with a professional). Claude isn't a lawyer.

### Copyright submission strategy (claimed vs disclaimed)
```
[ Full Book Submission ]
   |- Original LitRPG Mechanics & Outlines   -> fully claimed
   |- Human-Edited & Rewritten Prose         -> fully claimed
   |- Raw AI Text (left unchanged)           -> explicitly disclaimed
```
- **Claim explicitly:** the original **plot outline**, the **character sheets**, the **system mechanics**, the **compilation**, and the **extensive text editing / revision**.
- **Note:** the **final compiled product** — all the text brought together **with the (AI-generated) cover art** — is itself a **compilation** that can be protected/registered, even where individual raw-AI components are disclaimed.

### Amazon KDP publishing assets
*Beyond the raw text and a cover, KDP needs specific formats:*

- **Cover.** eBook (Kindle): a flat **JPEG or TIFF**. Paperback / hardcover: a single **wrap-around PDF** (front + spine + back), sized to the **exact final page count** — generate a template with the **KDP Cover Calculator** (https://kdp.amazon.com/cover-calculator).
- **Interior manuscript.** eBook: **do not upload a PDF** (it renders badly on Kindle) — convert the final `.docx` to **EPUB**, or upload the `.docx` directly. Print: a **PDF is required**, to lock page layout, page numbers, and the **LitRPG stat blocks** in place.
- **Front matter.** The opening page(s) must carry: **title, author name, publication year, country of manufacture,** and a **copyright notice disclosing the hybrid creation** — e.g. *"Portions of this text were generated with AI assistance and extensively revised by the human author."*
- **ISBN.** Amazon supplies a **free ISBN for the paperback**; Kindle eBooks don't legally require one. `[Inference]` Cross-ref item 3: registering **your own** free Canadian ISBN gives portable ownership across retailers, vs. relying on Amazon's paperback ISBN (which ties the edition to Amazon) — decide which before publishing.

*(KDP asset guidance per author's research; verify against current KDP requirements at upload time.)*

### Editions — offer both (Amazon Print on Demand)
Amazon prints paperbacks **on demand** (no inventory to hold). Offer **both** editions — LitRPG readers heavily consume eBook *and* print. On the **KDP Dashboard** (https://kdp.amazon.com/), each book project has separate layout blocks:

- **eBook (Kindle):** upload the text file (**EPUB** or `.docx`) + a single **flat front-cover image (JPEG)**.
- **Paperback:** upload an **interior PDF** (forces the formatting, margins, and LitRPG stat blocks to print exactly) + a **wrap-around cover PDF** (back cover + spine + front cover merged into one wide asset).

---

## 2026-06-26 — Ch6 author edits: "wife"→"friends"; Prince reads the Ledger

- **Prince reads the Ledger when Stepan isn't around `CANON`** — consults the shop's book in the guardian's absence, stays current, withholds. Recorded in `03` (Prince → Knows/Doesn't Know). Consistent with Ch0 (cat reads the fading entries) and Ch4 (notices it updating for Stepan).
- **"wife" → "friends" (Ch6 author edit).** Mirrored the line in `Chapter_06.md`. **⚠ Scope question (pending):** is Stepan still a **widower**? `02_Synopsis` calls him a "solitary widower" and **Ch5** says "the years since his wife died." If the widower backstory is being dropped, update those; if it stands, the Ch6 "friends" line is fine on its own. Awaiting author's call. *(NB: Ch6 also adds a Prince-reads-the-Ledger beat in the prose; sync `Chapter_06.md` to the docx when convenient — author has the exact wording.)*
- `[Aside]` The `03` **Prince** entry uses she/her throughout (author-facing), now **surfaced by the browser index** — offered to neutralize to "it" to match the prose rule. Author's call.

---

## 2026-06-26 — Ch7 direction: Magic Missile one-shot + goblin disposal + the Danica question

- **Magic Missile = one-shot kill `CANON`.** Stepan has **no idea** what the spell does and **fears his little "zap" will only annoy** the bigger goblin; in fact a single Magic Missile **drops it cold** (+5 XP). The gap between his fear and the spell's power *is* the scene. Magic XP **11 → 16** (still L1; L2 at 20).
- **Goblin-corpse disposal `CANON`:** dead goblins are **shoved back through the gap** — and it's **purposeful**, not just tidying: (1) the body **plugs the hole**, a grim stopgap that slows the leak (toward "contain, don't seal"); (2) it's a **warning to the next goblin** that this door kills. Prince handles the small ones; the **bigger Ch7 goblin is too heavy for a cat**, so **Stepan has to shove it back himself, Prince insisting** — a real beat (the squeamish man doing brutal guardian work). Explains the clear floor / Danica's obliviousness. **⚠ Reconcile Ch6:** its line currently credits *the shop* with clearing the Ch5 body — change to *Prince shoved it back through the gap* (offered; author reading Ch6 now).
- **OPEN — does Danica witness the impossible in Ch7?** Author deciding. **Claude's rec: keep it hidden a while longer.** (a) preserves the "crazy writer" cover and the comedy of her obliviousness; (b) keeps the big fight **Stepan + Prince solo**, so his terror→triumph lands harder; (c) protects the **Ch10 double-reveal** (magic is real *and* she's a cleric line) — if she learns magic's real now, Ch10 is only half as big. **Optional middle path:** a *partial glimpse* in the aftermath (a scorch, the cold, Stepan rattled) that deepens her suspicion without disclosure.

---

## 2026-06-26 — Chapter 6 "Status" drafted

- **Chapter 6 written** (`Chapters/Chapter_06.md` + `.docx`, 6 scenes, ~2,100 words). The L1 payoff: Ledger wakes & recognizes him ("appalling Constitution") → amber **HUD** (stat block, **Con 7→8**, Magic Missile) → he fights the popup, learns **"Status" / "Clear"** (said firmly) → Danica "Clear *what*?" gag with a **first unbidden pop** (the "0 casts" nag) + writer cover → bloodline whisper ("not entirely mine to have") + he **chooses to stay** → night: the gap a hand's-breadth wide, a **scout** (a single pale eye) watches; he loads Magic Missile. Ends poised for Ch7.
- **First chapter in the overt LitRPG register** (HUD shows numbers) — and **first chapter written en-dash-only** per the new house style (verified: 0 em-dashes).
- **Ledger updated:** Magic L1 exposed, **Con 8**, Magic Missile (I) known but **not yet cast**; XP 11/20, Steward L4/SP 15, Restoration 19 (unchanged — no fight in Ch6). ~24,700 words across Ch0–6.
- **Ch7 owes:** the greater incursion → **Magic Missile, ZAP** → contain the leak; Restoration jump → Shop level-up / room unlock; possibly the non-human customer.

---

## 2026-06-26 — Magic interface design locked (Ledger + HUD) for Ch6

- **Two surfaces, refined (08 §4/§8):** the **Ledger** *recognizes and records* the guardian's changes in its dry voice (it observes; it doesn't run the magic) and keeps the SP/Restoration tallies. The **magic system** lives in a personal **HUD** — **floating amber text**, only Stepan can see it — summoned with **"Status"** and dismissed with **"Clear"**, each said **firmly** (won't fire on a mutter or in ordinary speech). Others can't see his HUD — **Danica included, for now** (seed: her own lineage is dormant). The **system can also push the HUD up unbidden**, forcing him to "Clear" it — a recurring comedy engine (a public "Clear! Clear! Clear!" set-piece with baffled onlookers is a later payoff).
- **Ch6 = the payoff** (cashes in the L1 held from Ch5): Ledger wakes & recognizes him ("appalling Constitution") → amber HUD appears (stat block, **Con 7→8**, **Magic Missile**) → he fights the popup and learns Status/Clear (dread→agency) → **"can you see this?"** Danica gag (she can't; writer-cover) → bloodline starts to whisper + he chooses to stay → leak widens, a scout appears (loads Ch7). Breakout in `05_Outline.md`.
- Defaults I'll run with unless told otherwise: bloodline = **hint only** in Ch6; leak escalation = **scout glimpse** (save the fight for Ch7); non-human customer still held.

---

## 2026-06-26 — Chapter 5 "The Account" drafted

- **Chapter 5 written** (`Chapters/Chapter_05.md` + `.docx`, 6 scenes, ~2,370 words — tight/fast). Order (per author): treads/competence → the gap is a *way through* → the goblin kill (3 zaps, grim, not a brawl) → emotional crash (not physical — goblins are real, his role, taking a life) → the only chair is the counter → he finds the **Ledger** → the Account reveal (his deeds recorded; his work mends the shop). First appearance of **Ledger entries in prose** — locked the typographic convention: *italic, dry, parenthetical asides* (e.g., "*A nail, reseated. (The first thing he has put right.)*"), incl. one entry on the goblin and one noting the fractional discount ("not of the house").
- **Confirmed mechanics:** goblin zaps **2 XP each**; **+6 XP → Magic XP 11, crossing Magic L1 silently** (payoff held for Ch6); **+1 SP defense spillover**; treads **+3 SP**.
- **Ledgers updated:** Stepan — Magic **L1** (11 XP; +1 Constitution & Magic Missile **pending the Ch6 exposure beat**), Steward **L4** (SP 15). Shop **Restoration 19** (still Shop L1; next threshold expected at the Ch7 climax).
- Verified: no Princess/Aya/Stronghome, cat never she/her, no system numbers in prose, present tense.
- **Ch6 owes:** the **exposure beat** (interface, Magic Missile, +1 Con — Stepan "meets his characteristics"), the leak escalation, and (optionally) the non-human customer. Running total Ch0–5 ≈ **22,600 words**.
- ~~New small canon (unnamed): Stepan's **late wife** referenced in prose~~ **REVERSED 2026-06-26** — Stepan is single, never widowed. See the 2026-06-26 entry below.

---

## 2026-06-26 — Book 1 remaining arcs mapped (Ch5–10) + Danica canon

Full map in `05_Outline.md` ("Book 1 — Remaining Arcs & Event Map"). Engine: the **mousehole = an interdimensional leak** (unifies cosmology + goblins + Arthur).

- **Locked:** Magic **L1 by Ch5–6** (crisis pulled forward) → grants Magic Missile + **first stat point to Constitution** + the exposure beat (interface; he meets his characteristics; moves exposure earlier than the old ~L3). **Contain (not seal)** the leak. **Ledger discovery** = Shop-track exposure (he learns his work restores the Shop).
- **Causal chain:** small goblins through the leak → cane zaps drive Magic XP 5→10 → **L1 + Magic Missile** → greater goblin → **Magic Missile ZAP** → contain. Big defense → SP/XP spillover → Shop level-up / room unlock.
- **DANICA — new canon:** a **different bloodline that generates clerics** (divine), NOT Stepan's line; **the Shop does not serve/restore her**. Stats raised now for the reveal: **Strength 17, Wisdom 17** (`03`). Reveal lands **just before the end of Ch10** = Book 1→2 pivot. Secret in `07_Secrets.md`; corrected the old "second bloodline = Danica" note in `08` §2 (she's a *separate* lineage, not a Shop co-earner).
- **Arthur:** the leak reframes his "fantastical journeys" — he left *through* a breach; Book 1 ends on "Arthur may be alive, out there."
- Note: `03` Danica stats updated; the `Forms/bible_data.js` browser index still shows old 15/14 until `build_index.py` is re-run.
- **Open:** L1 in Ch5 vs Ch6; what the Ch7 Restoration jump unlocks; how overt the Arthur-alive clue gets in Book 1.

---

## 2026-06-26 — Story Bible browser v2: hub → list → per-item pages (full bodies)

Reworked the `Forms/` browser to the author's preferred model: a hub with two buttons per type (**Show** / **Add**), a **list page** per type, and a **page per item**.

- New files: `bib_core.js` (shared helpers, markdown-lite renderer, injected theme), `list.html` (`?type=X` → all entries of that type, with search), `entry.html` (`?i=N` → one entry's full text + prev/next within type). `index.html` rebuilt as the hub (per-type counts + Show/Add buttons + duplicates/anomalies panels). The 7 add-forms are unchanged (the hub/list "Add new" buttons point at them).
- **`bible_data.js` now carries FULL entry bodies** (Stepan ≈ 9,000 chars, not a summary). Generated by running the indexer against clean staged copies of 03 & 04 — necessary because the shell still served stale 217/333-byte copies of those two files, and the previously-edited `build_index.py` *also* read stale in the shell (ran a fresh copy instead). On the real machine, plain `python build_index.py` works and is the refresh path.
- Index stats: 25 entries (2 Protagonist, 1 Supporting, 2 Sentient Object, 9 Setting, 5 Item, 3 Culture, 3 Lore), **0 file anomalies**, one intentional shared name (Arthur's Curios → Sentient Object / Setting / Culture).
- Note: file deletion had to be enabled for the folder to remove staging artifacts (`_idxsrc/`, `run_index.py`).

---

## 2026-06-26 — Story Bible browser: Forms now Browse-all + dashboard + indexer

- Extended the `Forms/` web tool so each type page now toggles **✎ Add new** ↔ **📚 Browse all (N)**. Added: `Forms/build_index.py` (scans 03 & 04, classifies every entry by its own Role/Type/Groups — *not* by filename — captures body, flags wrong-file anomalies + shared names, writes `Forms/bible_data.js`); shared `Forms/bible.js` (tab toggle, search, light-markdown renderer, file/anomaly badges); all 7 forms wired (added missing `data-type` to protagonist/supporting/object); `index.html` rebuilt as a dashboard (per-type counts, duplicates panel, anomalies panel, refresh note).
- **Initial `bible_data.js` was hand-built** (25 entries: 2 Protagonist, 1 Supporting, 2 Sentient Object, 9 Setting, 5 Item, 3 Culture, 3 Lore; one intentional shared name "Arthur's Curios" across 3 types; 0 anomalies) because the **bash sandbox was serving stale/truncated copies of 03 & 04** (file-tools see them fine). It carries metadata + one-line summaries; running `python build_index.py` on the real machine regenerates it with **full bodies**.
- **⚠ Hard Rule 1 leak found & fixed:** `04_Worldbuilding.md` Bloodline entry named **"Princess Aya"** in 3 places (Related, Manifestations, Who-Knows) and used she/her — replaced with **"Prince (the Cat)"** / neutral. The indexer deliberately never scans `07_Secrets.md`, so secrets stay out of the web view.

---

## 2026-06-25 — Chapter 0 "Trapped in a Cat" (author prequel) revised & aligned

- Author wrote a **prequel, Chapter 0**, and asked for a voice-aligning pass. Revised and saved as `Chapters/Chapter_00.md` + `.docx` (~3,900 words, all cat-POV, set in the 7-year gap). **Accepted** — it reframes the book's open as dramatic irony (reader knows the cat is sapient/trapped from page one).
- **Voice/canon fixes made:** past → **present tense**; cat → **"it"** in narration (and the cat's one self-reference "he" → "I"); **"ambulance took Arthur away" → Arthur geared up and walked out** (author confirmed: he disappeared on a chosen journey); **dropped the wall-key** by the locked door (conflicted with Stepan's inherited key + the keyless door). Verified: no Princess/Aya/Stronghome, cat never "she/her," he/his = Arthur only, no system numbers, present tense.
- **Body vs. spirit (author, for the record → `07` only):** the body is a **tomcat (male)**; the trapped spirit is **female** (Aya). Hence masculine surface address is safe; feminine is the danger.
- **New canon recorded:** Goblins as a real invasion threat (`04`); the Shop **weakens without a Keeper**, ≥2 prior bloodlines, and **food-as-language** kibble/salmon carrot-stick (`06`); Arthur's witnessed gear-up departure (`04`); Chapter 0 added to `05`.
- **Author-only seeds flagged (`07`):** the **presence behind the locked door** ("a second, smaller shadow"); the **blood-thread "message"** in the study. Both load-bearing, meanings TBD.
- Running total **~20,250 words** across Ch0–4. Ch0 title "Trapped in a Cat" (author's).

---

## 2026-06-25 — Chapter 4 "A Work of Fiction" drafted (8 scenes)

- **Chapter 4 written** as `Chapters/Chapter_04.md` + `.docx` (~3,650 words). **Opens in Prince's POV** (book's first non-Stepan POV); Hard Rule 1 held inside its head (cat = "it," identity oblique, the strictly identity-neutral "isn't entirely a cat" hint planted). Beats all landed: bloodline d'oh + Ledger confirmation; the writer cover ("you are research"); dinner-theft zap; Danica inside (door sticks for her, then yields); failed show-off zap → the mouse → squeamish-Stepan-on-a-chair → cane fires on the mouse ("static electricity?"); the repairs; the fish dinner → rant → **the naming** ("From Annoying Cat to Prince. Because you're being a royal pain in the ass") with the identity-neutral terror-flash; overnight hazelnut button; morning-after close on the shared fix-it list (mirroring the List of Oddities). Prince's baseboard-sniff (mouse entry) planted at the very end.
- **Verified:** no Princess/Aya/Stronghome; cat never gendered (stays "it"/"Prince"); "Your Highness" used once (permitted); no system numbers in prose; present tense.
- **Progression logged:** Magic XP 3→**5** (dinner + mouse zaps); Steward SP 6→**11** (L3); Shop Restoration 6→**16**, **Shop Level 0→1** (hazelnut). SP and Restoration have **diverged** (full-value healing vs Stepan's 40% share). Deferred SP: three more stair treads (Ch5) + the mouse entry point (Prince must sniff it out).
- Running total **~16,300 words** across Ch1–4.
- Working title **"A Work of Fiction"** (from the writer cover) — author may rename.

---

## 2026-06-25 — Chapter 3 "Call it Static" drafted + SP/Restoration tracking confirmed

- **Chapter 3 written** as `Chapters/Chapter_03.md` + `Chapter_03.docx` (7 scenes, ~3,030 words, established voice). Verified: Hard Rule 1 clean (no Princess/Aya/Stronghome; cat never "she/her"; **"Your Highness" used once, now permitted**), no system numbers in prose, present tense, beat #1 mutual-perplexity in, the study "milk" crack, the Scene-7 button with the cat's missed freeze.
- **Progression logged (silent):** Ch3 events added to Stepan's `03` log → **Steward SP 6 (L2), Magic XP 3.** **Shop Restoration** counter started in the Arthur's Curios entry → **6** (equals SP for now; diverges in Ch4).
- **Mechanics confirmed (author) and written to `08` §2:** guardian's **initial fraction = ~40%** (rises with involvement; 100% for his own work); **Shop Restoration = full work value**, so it outpaces Stepan's SP once helpers work. Track both meters.
- **Ch4 overnight-Shop-upgrade idea** noted to design after Ch3: tip Restoration over the (TBD ~15) threshold via the Ch4 repair burst so the Shop self-upgrades overnight; implies getting Danica out, Stepan eating (shares the fish — cat wants it cooked), early exhausted sleep. To be worked out next.

---

## 2026-06-25 — Chapter 4 full scene breakout (7 scenes)

Upgraded the Ch4 notes into a 7-scene breakout in `05_Outline.md`. New bridge from author: Ch3 ended **just before lunch**; Ch4 opens at the lunch break with **Stepan's "I'm a novelist" cover story** (lets him talk to/about the cat without seeming mad) and the **cat's POV inner monologue** working out the bloodline → Arthur "d'oh."

- **Scenes:** (1) cat-POV d'oh; (2) Stepan's writer cover; (3) Ledger confirmation + dinner-theft zap (+1 XP); (4) Danica comes inside (Shop-accepts-her beat; static-demo comedy; cat commentary; writer cover used); (5) the repairs (fractional SP table); (6) wind-down — Danica out, cooks & shares the fish, early sleep; (7) **overnight: the Shop's first self-directed upgrade.**
- **Threshold set ~15 Restoration**; Ch4 repairs push Restoration to ~16 → fires the overnight upgrade. Projected end-Ch4: Steward SP 11 (L3), Magic XP 4, Restoration 16.
- **First-upgrade pick (author's call):** recommend the **hazelnut button** on the coffee monolith (already seeded in `04`), alt = upgraded stair / a small new space.

**Author refinements (2026-06-25):**
- **Naming LANDS in Ch4, Scene 6.** Trigger: a mealtime rant; Stepan's line — *"From Annoying Cat to Prince. Because you're being a royal pain in the ass."* Cat freezes in terror, then stalks out tail-high, presenting its backside. From here it's **Prince**; Hard Rule 1 fully live.
- **Overnight upgrade = hazelnut button** (confirmed). Politics: Stepan dislikes flavoured coffee (allows this one "isn't bad"); **hazelnut is Danica's favourite**; Prince takes a little. [Inference] Shop producing Danica's favourite = it anticipating her. (Recorded in `04` coffeemaker entry.)
- **Secret-hint (Ch4):** plant that the cat has a deep, dangerous secret and "isn't exactly a cat" — **strictly identity-neutral** (nothing pointing to/away from gender, species-of-origin, rank, status). Woven into the cat-POV opening and the naming-terror beat.
- **Silence rule:** Stepan must **not respond to the cat while Danica is present**; the cat exploits this (heckling he can't answer) — comedy of the enforced straight face.

- **Ch4 now ends next morning (Scene 8 added; 8 scenes total).** Abbreviated awakening → downstairs (no stubbed toes, no collapsed steps — the work held) → Stepan finishing breakfast, Prince demanding more bacon → Danica returns with parts for the other stair treads, expecting to watch Stepan do the work → he finds the new button and offers "Hazelnut, if you like that crap" (delights Danica, sets Prince off — silence rule still in force) → ends at the table planning groceries/stairs and starting a shared fix-it list. Closing symmetry: private List of Oddities (denial) → shared fix-it list (acceptance). Hazelnut payoff now inside Ch4; Shop Level 0→1.

- **POV CONFIRMED:** Ch4 opens in **Prince's POV** (first non-Stepan POV; embraced for freshness).
- **Mouse beat added (Scene 4):** the demo-zap on the cat **fails** (cane won't perform on command); then a **mouse** appears, squeamish Stepan ends up **on a chair**, Danica says "it's only a mouse," and the cane **fires on the mouse** — startling both — "static electricity?" (+1 XP; optional +1 SP/Restoration as Shop-defense). Point: the cane fires in genuine need, not on command; Danica now witnesses the magic. End-Ch4 Magic XP now **5**.

**Ch4 outline is fully locked — ready to draft on request.**

---

## 2026-06-25 — Chapter 4 early notes + SP/Shop-upgrade watch *(superseded by the full breakout above)*

Author brainstormed Ch4 (captured in `05_Outline.md` as a provisional stub):

- **Cat's "d'oh":** it deduces Stepan must be bloodline (he can *hear* it) → connects to "uncle" Arthur (blood relatives) → confirms via the Ledger updating for Stepan + a comedic dinner-theft zap (+1 XP). *(This resolves the Ch3 open thread; the deduction opens Ch4.)*
- **Danica comes inside** to assess the rotten step and lay in supplies; finds more repairs; Stepan starts learning to fix things himself. Open beat: does the Shop accept her?
- **Fractional SP (per §2/§7):** stair-tread replacement 5 SP (Stepan keeps 2); next fix 3 SP (Stepan keeps 1); Stepan's own fixes 1 SP each. Non-bloodline Danica earns nothing; guardian gets a fraction; Stepan full credit for his own.
- **Comedy:** Stepan tries to demo "static electricity" on the cat for Danica (she thinks it's cruel / the cane may not fire); the cat narrates for Stepan-only (the fish; "stop staring at Danica").

**STANDING WATCH (author SIDENOTE):** keep an eye on SP toward the **first real Shop upgrade.** Projected: Steward SP ≈6 (end Ch3) → ≈12 (end Ch4, Steward L3); Shop Restoration ≈6 → ≈17.

**Two decisions to confirm:**
1. **Restoration = full work value** (Danica's physical repairs heal the building fully even though Stepan only *earns* a fraction of the SP)? [Inference] yes — confirm.
2. **First Shop-upgrade threshold:** lower the Shop's L1 from ~25 to **~15 restoration** so the Ch4 repair burst tips the Shop into its first self-directed upgrade (late Ch4/early Ch5)? Once set, start tracking Restoration in `03`/`06` alongside SP.

---

## 2026-06-25 — Hard Rule 1 AMENDED (gender-neutral honorific permitted)

Author chose option (a): **Hard Rule 1 is amended** so Stepan (and others ignorant of her identity) **may sarcastically call the cat "Your Highness" or "Your Majesty"** — gender-neutral honorifics that don't expose her as a princess or female. This is the path to the **Prince** naming. Still forbidden: Princess / Princess Aya / Aya / Stronghome / any feminine or identity-revealing address; narration never calls her "she"/"Princess."

Updated in: `README.md` (hard-rules section **and** the Project Instructions block), `Project_Notes.md` (the 2026-06-24 rule entry), `07_Secrets.md`, `05_Outline.md` (naming note flipped to resolved).

**⚠ ACTION FOR AUTHOR:** the **live Project custom-instructions in the Claude app still contain the old rule** (with "Your Highness" forbidden) — Claude cannot edit that field. Re-paste the updated Project Instructions block from `README.md` into the app's Project settings so the live system prompt matches.

---

## 2026-06-25 — Chapter 3 decisions (title, naming held, Danica, rotten tread) + ⚠ Hard Rule 1 conflict (RESOLVED, see above)

- **Title locked: "Call it Static"** (rhymes with the slogan tee and Stepan's denial; avoids giving away the arc).
- **Naming held — not in Ch3.** Ch3 ends on the cusp (denial broken, cat still unnamed). Outline now 7 scenes.
- **⚠ HARD RULE 1 CONFLICT — unresolved.** Author's intended path to the name: the cat's imperious demands wear on Stepan until he says **"Yes, Your Highness" / "No, sorry, Your Highness,"** then renames Cat → Prince. **But "Your Highness" is on Hard Rule 1's forbidden list.** Awaiting author choice: (a) amend Rule 1 to allow Stepan's sarcastic, gender-neutral spoken "Your Highness"; or (b) use "Your Majesty" instead (already used in Ch2 Sc3, rule-safe) → then "Prince." Do not write "Your Highness" into prose until resolved.
- **Naming gate unchanged:** still requires mutual acknowledgment of the telepathy first; the honorific path comes after.
- **New Ch3 Scene 5 — Danica calls:** offers a grocery run; Stepan declines because the shop is already stocked, which **surprises Danica** (outside corroboration of the Shop's magic, paralleling his growing recognition); he asks about a carpenter for the rotten tread and asks her to bring **fresh fish for the cat**.
- **Rotten stair tread:** Stepan does a stopgap re-nail (still part of the 3 SP) but the wood is rotting; full replacement is beyond him → a **deferred larger SP job** and the Danica hook.

---

## 2026-06-25 — Chapter 3 scene breakout proposed (6 scenes)

- Claude drafted a **6-scene outline for Chapter 3** in `05_Outline.md` (working title TBD; spine = **disbelief that the cat is talking telepathically**). Beats: plan the repairs → floorboard (+1 SP) → stairs + cane zap (+2 SP, +1 XP) → The Complaint Department opens (exhaustion/hip) → study & dust (≤1 SP; nothing useful, no mold/gold) → "Call it static" button where Stepan tests the cat aloud and it answers.
- **Telepathy escalates in three beats** (echo → responsive → tells-him-things) so the denial breaks by the chapter button.
- **Projected silent progression:** +4 SP, +1 XP → end-of-chapter SP 6 (Steward L2), XP 3. *Will be logged to `03` only when the prose is written.*
- **Open decisions for author:** (1) naming boundary — end Ch3 on the cusp with naming opening Ch4 *(recommended)*, or push to a 7th scene and name "Prince" as the Ch3 climax; (2) optional "complication worthy of more SP" (a rotten stair tread); (3) working title.

---

## 2026-06-25 — Story Bible entries from Chapter 2

Added/updated after the Ch2 draft:

- **Goblin-King Mug (`04`)** — new Properties note: keeps coffee perfect indefinitely (Shop magic; Stepan thinks "thermal mug").
- **Stepan (`03`)** — biographical fact: has never owned a cat (lacks the small instincts the tom exploits).
- **New Item (`04`):** the **"Call it Magic, Call it Luck" T-shirt** — recurring slogan-object motif, companion to the mug.
- **New Setting (`04`):** **The Upstairs Bathroom** — completes the upstairs room set (bedroom/study/locked room).
- **New Shop behavior (`06`):** **manifesting transient objects** — conjures and withdraws objects as needed (the appearing/vanishing toaster), distinct from the self-tidying of permanent kitchenware. Reusable deniable-magic device.
- Deliberately NOT entered (kept lean): cat bowls; specific foods (covered by larder hospitality); the floorboard/stair-tread/non-slip-strip (tracked as SP to-dos in `03`).

---

## 2026-06-25 — Chapter 2 prose drafted

- **Chapter 2 "Settling In" written** as `Chapters/Chapter_02.md` + generated `Chapter_02.docx` (same pair pattern as Ch1). Seven scenes, ~3,700 words, present tense / close third in the established voice.
- Verified: **Hard Rule 1 clean** (no Prince/Princess/feminine address; cat stays "it / the cat / Annoying Cat"; Stepan's joke is gender-neutral "Your Majesty," not "Highness"); **no system numbers leaked** into prose (SP/XP stay invisible per §4); the monolith (not Keurig) is used; the slogan tee, the deniable rationalizations, the telepathic "Ouch!" (blamed on his own voice), and the closing 10-item List of Oddities all land as outlined.
- Prose matches the `03` progression log exactly (nail = Ch1; dishes + kitchen spark = Ch2 Sc4; stairway bolt = Ch2 Sc6).

---

## 2026-06-25 — Chapter 2 ends at Scene 7; cat-frustration + naming → Chapter 3

- **Chapter 2 closes on Scene 7** (the List of Oddities) — author decision. Rationale: the list is the turn from dismissing to documenting; rhymes with Ch1's close (asleep → awake/cataloguing); and it gives the **Prince renaming** its own room in Ch3 to build to the mutual-acknowledgment trigger.
- **Chapter 3 (title TBD)** stubbed in `05`: the cat-is-talking arc, Stepan's frustration, and the renaming. Hard Rule 1 goes live the moment "Prince" is first spoken.

---

## 2026-06-25 — Chapter 2 outline (sc. 1–7) + naming trigger + progression tracking

- **Chapter 2 "Settling In," scenes 1–7 outlined** in `05_Outline.md` (author beats; scenes 8+ to come).
- **"Keurig" dropped (canon):** the coffee maker is the **monolith**, full stop (resolves the Ch2 Sc5 slip against the locked `04` entry).
- **Prince naming trigger — CANON refinement:** the cat is named **Prince only when he and Stepan mutually acknowledge the telepathic ("psionic") chats.** Until then: **Cat / Annoying Cat.** (Refines the earlier "held for a later scene.") First telepathy crack already drafted-in-outline: the cat's *"Ouch!"* in Ch2 Sc6, which Stepan hears but blames on his own voice.
- **Progression tracking lives in Stepan's `03` entry** now (author asked for it "kept safe"): a running **Progression log** of every SP/XP event. Current silent totals — **Shop SP 2** (nail + dishes → Steward L1, invisible), **Magic XP 2** (two cane discharges → still Novice, L1 at 10).
- **Small new canon to formalize later:** Stepan has never had a cat before; the goblin-king mug keeps coffee magically hot (not a thermal mug); the **slogan-tee motif** ("Call it Magic, Call it Luck") alongside the mug.
- **Stepan's List of Oddities** (Ch2 Sc7) recorded in `05` — now **10 items** (added: luggage that moves/unpacks itself; the iron key warm-at-shop/cold-at-locked-room). **Three deliberate omissions** mark his denial boundary: the telepathic "Ouch!" (not ready), the never-cooling coffee (he thinks "great thermal mug"), and the easing hip (felt as a good night's sleep). Each held as a later reveal.
- **New Sc7 beat:** sitting on the bed, Stepan muses it's an **excellent bed** because **"The Complaint Department"** (his hip) has been quiet — the restorative effect leaking in as comfort, not magic. Hip is **a long way from healed**; real easing is a **happy surprise saved for later**.

---

## 2026-06-25 — Shop SP earning surface + the Shop as a second body + cosmology

Builds on the same-day two-track lock below. Written into `08_System_Spec.md` §2–§3, `03_Characters.md` (Stepan + Arthur's Curios), `06_Sentient_Objects.md`, `07_Secrets.md`.

**Shop SP earning (Steward track) — locked numbers:**

- Minor fix = **1 SP**, capped **10 SP/day** (the early-game brake: a few days of nails caps out, forcing bigger work).
- Notable job = **lump sum** (clean the windows inside + out = **10 SP**), separate from the minor daily cap.
- **First-of-a-kind pays big** (first sale = many SP); **routine repeats pay 0** unless particularly notable.
- **First entry** into a newly unlocked room pays once (rooms unlock at level milestones).
- **Cross-track defense spillover:** an act that defends the Shop can feed both tracks — rat killed with Magic Missile = **5 XP** *and* the Shop offers **2 SP**. Keep spillover **small and controlled** (SP side is a fraction of the XP side) so combined growth stays smooth.
- **Spiderwebs:** minor Shop cleaning; if they have spiders, clearing them = **2 XP** (micro-defense, magic track, accrues silently pre-exposure). OPEN: does the web-cleaning also pay minor SP? Not pinned.

**Steward stat gains:** +1 **Charisma at L5 and L7** (presence/authority). Optional Constitution point floated, not locked. Stacks into the same capped stat block as Magic.

**The Shop is a second progression body — locked:**

- **Two separate numbers:** Stepan's **Steward level** (his standing) vs the **Shop level** (the building's restored capability). Coupled (his work heals it) but tracked separately; can diverge.
- **Self-directed:** the Shop is sentient enough to grow on its own and **manifest upgrades unbidden** (snack-bar at Shop L6) as well as on Stepan's direction. Self-vs-directed ratio is a drafting lever; its agency is canon.
- **Gentle/bounded curve:** "won't require millions." [Speculation] Proposed thresholds (25/60/120/200…, per-level cost capping ~150–200) so the *building* visibly transforms across Book 1 while the *man* is still low-level. TUNE FREELY.
- Fueled by **cumulative restoration** (same deeds that pay SP heal the building) + a bonus when Stepan deliberately directs a change. Not a currency he spends.

**Shop cosmology — NEW CANON (author):** the Shop is **ancient but decayed through neglect**, and holds a **place in the multiverse: defending order by *encapsulating* chaos rather than eliminating it. It's all about balance.** A containment vessel, not a weapon; the curio "junk" is partly a containment array; stewardship is cosmic load-bearing work. **Author-only / reader-secret** (Hard Rule 2) — full statement in `07_Secrets.md`, cross-ref in `06`. Stepan learns it late. [Inference] leans the Shop's origin-of-sentience toward "bound/bestowed" rather than "accreted," but origin still unchosen.

**Open / to confirm:**

- Shop's own curve numbers (proposed only).
- Web-cleaning: 2 XP only, or also minor SP?
- Constitution as a second Steward stat gain (Charisma is locked).
- Reveal timing for the cosmology (candidate: at/after ledger-discovery + first non-human customer).

---

## 2026-06-25 — Two-track progression LOCKED (resolves the 2026-06-24 split)

Author locked the two experience systems and their curves this session. Written into `08_System_Spec.md` §2–§4, §7, §8 and into Stepan's `03_Characters.md` stat block.

**Magic XP** — earned by *casting*. 1 cane-zap on Prince = 1 XP; 10 zaps = magic L1. Curve is **pure doubling, forever** (cumulative to L*n* = 10 × 2^(n-1); L10 = 5,120, L20 = 5,242,880). No tail cap — this is the deliberate brake against godlike power. **XP per cast scales with spell level**, so high levels are only reachable by casting high-level magic. Each level grants **+1 characteristic point + one spell**. Surfaces *outside* the Ledger, "when he says something."

**Shop SP** — earned by *stewardship*. Reseating a finishing nail = 1 SP. Curve **doubles to 1,024 at L11, then flat 1,024/level forever** (cost to L*n* = 2^(n-1) for n≤11, else 1,024; L10 cumulative = 1,023, L20 = 11,263). This is the AD&D geometric-then-arithmetic shape, so stewardship always stays reachable while raw magic chokes itself. SP **absorbs the old "Store Credit"** — the single-economy model in earlier 08 drafts is superseded.

**Stat cap:** all stats cap at 18 **except Strength**, which continues in `18/+NN` notation (`+01…`) to **`18/+99`** — homage to old-D&D exceptional Strength. Allocation is an authorial lever (it's a novel). [Inference] +99 is effectively unreachable given the curve; treat as series-spanning aspiration.

**Hired-worker rule (extends §7):** non-relative labor on the Shop earns the worker nothing but credits **Stepan a fraction** of the SP. A **blood-relative** worker earns SP **in their own right** → seeds multi-guardian / second-bloodline (Danica, far-future, contingent on her arc).

**Sequencing (Hard Rule 2):** the magic interface (spell-offer / +1-stat prompt) stays **dormant** until Stepan suspects magic is real. Early zaps accrue Magic XP **silently**; early chapters run on the quiet Ledger (Shop SP) alone.

**Spell acquisition — two phases (locked 2026-06-25):**

- **Pre-exposure: no choice.** Stepan just *gets* Magic Missile at L1; no menu, no interface. The cane becomes "surprisingly deadly in the right (wrong?) circumstances."
- **Exposure beat (~L3, author tentative):** acquisition becomes a choice via an in-world interface — a section of the curios **glows** and reveals a shelf of selectable spell-books (floating spell-book / HUD), one being **"Learn About Your Magical Experience"** (the in-world primer that finally explains the system to him).

**New prose beat to plant (drafting seed):** after 3–4 L1 "zaps" where Prince shrugs off Magic Missile (magic resistance), the cat **dodges** and the missile **cracks a door / wall** — the reveal that the "harmless" cat-zap spell is actually a door-breaker, and the cane is genuinely dangerous. Good candidate for the moment Stepan can no longer file it under "static."

**Still open (not blocking):**

- **Exact exposure level** — "~L3" is tentative, not hard-locked.
- **Magic trigger precision** — "when he says something": says *what* exactly (spell attempt? spoken intent?). Visual form now settled (glowing curios / floating spell-book); the speech trigger itself still needs pinning down.

---

## 2026-06-24 (SUPERSEDED by 2026-06-25 lock above) — Establish the two experience systems

**Author direction to implement next session.** Progression splits into two distinct experience tracks:

1. **Shop XP** — earned through stewardship (cleaning, small repairs). Spent to **enhance / upgrade the Store**. **Displayed in the Book (the Ledger).** Already seeded in prose: the loose-nail repair in Scene 6 → the Ledger's first pen-scratch entry.
2. **Magic XP** — earned separately. Unlocks **spells and spell levels**. **NOT shown in the Book.** Display mechanism: it "just appears in front of him when he says something" — a spontaneous prompt triggered by speech, distinct from the Ledger's written record.

- **The cat (soon to be renamed Prince)** knows a great deal about *both* systems but will not share — a deliberate, in-character source of answers Stepan can't yet reach. Reinforces the upcoming Prince-naming beat. Worth adding to Prince's `03_Characters.md` entry once settled.

**Open questions to settle next session:**

- **Reconcile with `08_System_Spec.md`.** 08 currently locks a *single* two-track economy: XP (→ guardian level) + Store Credit (spendable), both surfaced via the Ledger. The new design supersedes that with Shop XP (Ledger) + Magic XP (non-Ledger). Decide where **Store Credit** lands — folded into Shop XP, or kept as a separate spend currency.
- **Earning rules for Magic XP** (Shop XP = stewardship is established). From casting? bloodline events? speaking words of power?
- **Define the magic display trigger precisely:** "when he says something" — says *what*, exactly (a spell attempt? a spoken intent?), and in what visual form (floating text? a panel only he sees?).
- **Hard Rule 2 sequencing:** Stepan starts with zero magic awareness, so the magic-XP display must stay dormant/hidden until he begins to suspect magic. Early chapters run on Shop XP (quiet Ledger) only; sequence the magic system's first surfacing.
- **Connect to 08 §3** "Store-unlocked personal magic abilities in Stepan" — almost certainly the same thread as Magic XP.

---

## 2026-06-24 — New canon from Scene 6 (settling in / first night)

- **First stewardship event (the system's first tick):** Stepan hammers a loose finishing nail back into the bedroom doorframe — the first deliberate small repair, and the **first store-credit / XP event** per `08_System_Spec.md`. He feels it as a faint warm nudge behind the breastbone and dismisses it ("Static") — the first time the system physically answers one of his actions, still fully deniable (Hard Rule 2). The hammer is conveniently on the hall table (the Shop providing the tool).
- **The Ledger's first entry:** as the nail seats, a pen nib scratches a line downstairs (the Ledger, under the counter, recording the deed). Too faint for Stepan's sixty-eight-year-old ears — he never hears it. **The cat hears it** (ear swivels to the stairs, then reappraises Stepan, "adjusting a number it has been keeping"). The Ledger remains undiscovered; only its sound is seeded — consistent with `08` (explicit tallies wait for the ledger-discovery beat).
- **Comforter tucks him in:** once Stepan is asleep, the comforter draws itself up over him unaided — Shop hospitality, witnessed by the reader, not by Stepan.
- **Cat searches his ear:** the cat jumps to the pillow and stares into the sleeping Stepan's ear, "as though the answers it cannot ask for and he cannot give might be written just inside." Telepathy / bloodline seed — the trapped fairy hunting a way to reach him. Rule-safe (referred to only as it/the cat).
- **Chapter close:** ends on the outline's intended note — Stepan has understood almost nothing and has made "his very first small dent in the dust."

---

## 2026-06-24 — New canon from Scene 5 (upstairs) — to formalize later

- **Shop relocates objects:** both suitcases end up neatly at the top of the stairs (one had been left on the shop floor, one on the porch). Played as deniable — Stepan insists he carried them up and forgot. A clearer instance of the Shop physically moving things than the self-tidying mugs.
- **Restorative effect now bodily noticed:** the stair climb is markedly easier than Stepan expects; his hip files only a token complaint. He blames the long sit, the coffee, a day off his feet — and notes, with discomfort, that he is "assembling rather a lot of reasonable theories." This is the first time the easing of his body registers consciously (still pre-magic-awareness, Hard Rule 2).
- **Upstairs hospitality:** bedroom made up (quilt turned down, window cracked, fresh water, lamp lit) and bathroom spotless with hot water — the Shop preparing for an expected guest.
- **The study is deliberately left untouched:** Arthur's study at the hall's end is real-dusty, cluttered, a skinned-over cup of tea seven years old. The Shop tidied everything *except* this — establishing that its tidying is selective and intentional, not blanket. Emotional beat: Stepan's grief-ambush for an uncle he barely knew.
- **The locked room (major hook):** a door at the dim end of the hall that will not open — no give, no keyhole. The one thing the otherwise-accommodating Shop refuses. The iron **key goes cold** here (inverse of the warm key = welcome/recognition). The cat keeps a wary distance and stares at it. Stepan promises to "come back to you." [Inference] strong candidate for where Arthur's secrets / a load-bearing reveal live.

---

## 2026-06-24 — New canon from Scene 4 (kitchen) — to formalize in Story Bible

These were established in prose and need proper Story Bible entries (author to do the 03/04 updates):

- **Self-tidying property of the Shop:** any dish/glass/mug that is used and then left unattended for a few moments returns to the cupboard, cleaned and put away. This is a property of [[arthurs-curios]] (the Shop), not of the objects themselves. Belongs in `03_Characters.md` (Shop) and/or `04_Worldbuilding.md`. Played in-scene as deniable ("I put it away and forgot").
- **The kitchen:** clean, improbably warm; a working sink (clear water, white basin, no rust) and a cupboard of dishes, glasses, and mugs. ✓ Drafted as a **Setting** entry ("The Kitchen") in `04`.
- **The coffee mugs:** carry cute novelty sayings. The first Stepan grabs is goblin-skin green; he does not notice the logo at first — a goblin king's skull above the line *"My other mug is a goblin king's skull."* ✓ Drafted as an **Item** entry ("The Goblin-King Mug") in `04`. Ties back to Arthur's "goblin activity" line in Scene 1.
- **The coffeemaker (monolith — canonical):** a smooth dark monolith broken only by a single spout and a single button. Nothing to plug in, nowhere to add coffee or water; it simply works. **Planned evolution:** add a second button for hazelnut, then further functions (a milk frother, a tea maker). NOT a Keurig or a drip pot — total mystery is the point. ✓ The `04` Item entry has been aligned to the monolith (Keurig/"dated" wording removed; planned hazelnut button + frother + tea maker noted there).
- **Reference format:** the author regards `Chapters/Chapter_01.docx` as the reference version of the prose; `Chapter_01.md` is secondary and should be reconciled to the docx when the docx is readable.
- **Mundane-vs-magical mix:** the shop is an abandoned curio shop — most stock is honest junk; a few items are magical and undiscovered (seeded in-scene via the snow globe; kept unexplained for now).
- **The cat — naming deferred:** Stepan does *not* give the tom his real working name yet. At the end of Scene 4 he pointedly declines to dignify it and calls it "Cat" (or "*Annoying* Cat"). The cat's flash of *affront at being denied a grander title* is the first deniable seed (Hard Rule 1 irony in play). The "Prince" naming is held for a later scene. No telepathy yet.

---

## 2026-06-24 — Drafting conventions locked (prose)

- **Working title:** *Inventory of Impossible Things* (from the author's Ch. 1 draft).
- **POV / tense:** third-person limited, **present tense**, anchored to Stepan in Ch. 1. (Author chose present over the draft's original past; conversion is intentional. Other POV characters get their own scenes later.)
- **Voice:** keep the existing reflective, sardonic register and push for a touch more humour with a sarcastic edge — sharpen, don't flood.
- **File workflow:** prose lives in `Chapters/`. Each chapter is one file built up scene by scene. Master is `Chapters/Chapter_NN.md`; a `.docx` is generated from it as the readable copy.
- **Ch. 1 status:** Scenes 1–6 drafted. Scene 6 (settling in: first repair, the Ledger's first entry, sleep) folds in the planned Scene 7 (drift to sleep) and closes on the outline's "dent in the dust" line — so Chapter 1 now reads as complete. Confirm whether a separate Scene 7 is still wanted.
- The author's original `Stepan Store Ch 1.docx` (root) was the source for scenes 1–2; it remains private per Hard Rule 5 unless pointed at again.

---

## 2026-06-24 — HARD RULE: "Prince" never becomes "Princess" anything in prose

In any drafted prose, dialogue, summary, or AI-assisted continuation, the fairy princess is referred to **only** as Prince (or Cat). She is never called Princess, Princess Aya, Aya, Stronghome, or any feminine/identity-revealing address. In-world reason: exposure makes her transformation permanent. Drafting reason: the secret is the engine of her tension, and a slip in narration leaks what the dialogue is desperately keeping in.

**Amended 2026-06-25:** a **gender-neutral** royal honorific — *"Your Highness"* or *"Your Majesty"* — **is permitted** when spoken sarcastically by Stepan (or other characters who don't know her identity) to the cat. Applied as a joke to "a cat," it is gender-neutral and does not reveal she is a princess or female, so it is not identity exposure; it is the comedic path by which Stepan reaches the name **Prince**. Narration must still never call her "she"/"Princess," and the forbidden terms above remain forbidden.

Applies to: third-person narration, dialogue tags ("Prince said," not "the princess said"), interior monologue from any non-bloodline character, summaries, scene briefs, and any AI-generated continuation. The only safe place to write her real name and title is `StoryBible/07_Secrets.md`.

---

## 2026-06-24 — Stepan's baseline awareness: zero magic, zero magical potential

At story start, Stepan has no clue that magic is real or that he has any magical potential of his own. His skepticism is genuine, not performative — he interprets the Shop's hospitality as coincidence, mechanical luck, or "the place must have a clever system." His mounting evidence (the telepathic cat, the warming key, the cane that becomes a staff, the easing hip) erodes that baseline gradually across Book 1.

Implications for drafting: Stepan's interior monologue should reach for mundane explanations *first* and arrive at "this is magic" only after the mundane ones exhaust. Even after he accepts that magic exists, he should NOT immediately assume he has personal magical potential — the bloodline framing should land even later. His default register on encountering the impossible is the wry literary observation, not the awestruck gasp. Almost every other named character in Book 1 knows more about what's actually happening than he does.

---

## 2026-06-24 — "Prince" name as recurring tension

The fairy princess trapped as a tomcat **must not be revealed as either a princess or a non-cat** — if her identity is exposed, the transformation becomes permanent and she stays a tom until she dies. Stephan names "him" Prince.

Why this matters for drafting: the name itself is a low-grade tension generator that is in play in *every* scene where Stepan addresses the cat by name in front of others. The princess hears her actual title being applied as a joke; Stepan thinks he's just naming a cat; any sharp-eared character could in principle catch the slip. Treat each "Prince" in dialogue as a tiny stakes-renewal beat — most readers won't consciously register it, but the cumulative effect is the kind of dramatic-irony pressure that makes the secret feel constantly fragile rather than safely-hidden-until-the-third-act-reveal.

[Inference] Worth considering: does the name itself have any magical resonance? In a world where bloodlines matter (the store recognizes Stepan's) and where naming has traditional fantasy weight, calling her "Prince" might be doing something — either binding the spell tighter, or seeding a future loophole. No need to decide now; flag for later.

---

## 2026-06-24 — Store-credit-for-work as LitRPG progression seed

The curio store rewards Stepan with credit for cleaning and small repairs. This is the first explicit LitRPG hook in the braindump and it's a useful one because it sketches an XP-like progression mechanic **without requiring combat** — a meaningful differentiation from most of the genre.

Worth fleshing out in the System Spec (template section 1):
- What does "credit" buy? (consumables, store inventory, upgrades to the store itself, ability points, something else?)
- Is the credit visible to Stepan as a number / status window, or only inferable from what shows up in the fridge?
- Does the store accept credit from other forms of work as it powers up — research, sales, hospitality, training Prince, magical repair?
- Does the credit system scale with Stepan's growth, or stay fixed? (Cleaning a dusty room is worth less when you're level 30.)
- Is there a cap, or does it compound indefinitely? (Cap is usually the more interesting choice for pacing.)

[Inference] The store-as-quest-giver pattern is genre-fresh. Most LitRPG protagonists earn progression through danger; Stepan earning his through stewardship of an inherited space inverts the genre's usual energy in a way that suits a near-70 protagonist with a bad hip.

---
