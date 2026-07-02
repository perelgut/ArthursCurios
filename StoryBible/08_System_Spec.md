# System Spec — Store Credit & Progression

> The load-bearing rules document for series consistency (per `Claudes_Advice_to_a_LitRPG_Writer.md` item 1). Treat like a software requirements doc — numbers, edge cases, and what can *never* happen.
>
> **Status:** Core decisions **locked by the author 2026-06-24**, with the **two-track progression split locked 2026-06-25**, now CANON. `[Inference]` tags mark downstream consequences I've reasoned out, not new rules.
>
> **✅ RESOLVED 2026-06-25 — two-track split locked.** Progression is two independent tracks: **Magic XP** (earned by casting → magical *level*, granting characteristic points and spells; surfaces outside the Ledger) and **Shop SP** (earned by stewardship → Store upgrades; surfaces in the Ledger). §2–§3 below have been rewritten to this model. The earlier single XP-plus-Store-Credit economy is superseded; Store Credit is folded into Shop SP (see §2).
>
> **Related:** [The Bloodline](04_Worldbuilding.md) • [Arthur's Curios](06_Sentient_Objects.md) • [The Ledger](06_Sentient_Objects.md) • `Project_Notes.md` (store-credit seed, 2026-06-24).

---

## 1. Source-canon foundation

- **Progress is earned through stewardship, not combat** — cleaning and small repairs (squeaky floorboards, tending the shop). (`02_Synopsis.md`, `Project_Notes.md`.) The genre-fresh core: an XP-like loop with no danger required.
- **The Ledger tracks progress** and is the in-world record of the system. (`02_Synopsis.md`, `06_Sentient_Objects.md`.)
- **The cane accumulates power** — "acts as a wand that collects static electricity"; Stepan first reads the zaps as static cling or odd luck; minor accumulated power lets him lightly zap Prince. (`02_Synopsis.md`.)
- **The Shop provides a restorative effect** to those it accepts — Stepan's hip eases, fitness returns. (`03_Characters.md`.)
- **The system is bloodline-keyed** — Shop, Ledger, and cane-as-staff respond to Stepan's bloodline. (`04_Worldbuilding.md`.)
- **Stepan must reach for mundane explanations first** (Hard Rule 2) — this constrains how the system can present itself (see §4).

---

## 2. Two-track progression `CANON`

The system runs **two fully independent tracks**, each with its own counter, its own earning action, and its own disclosure surface. They never convert into each other.

| | **Magic XP** | **Shop SP** |
|---|---|---|
| Earned by | **Casting magic** (using the cane/staff, later spells) | **Stewardship** (repairs, cleaning, tending the building) |
| Advances | Stepan's **magical level** | the **Shop's** improvement / Stepan's Shop level |
| Per-level reward | **+1 characteristic point** + **one spell** (granted pre-exposure, chosen after; see §3) | **Store upgrades** — rooms, shelves, building capabilities |
| Curve | **Pure doubling, forever** (no tail cap) | **Doubling early, flat tail after L11** |
| Surfaces to Stepan | *Outside* the Ledger — appears "when he says something" (§4) | *In* the Ledger's written entries (§4) |
| First beat | Cane zaps Prince = **1 XP**; 10 zaps = magic L1 | Finishing nail reseated = **1 SP** (Scene 6, already drafted) |

`[Inference]` Two independent tracks let a scene show Stepan growing on one axis while flat on the other — useful for the long "he's changing but hasn't noticed" stretch, and for keeping the magic track dormant (Hard Rule 2) while the Shop track quietly ticks.

### Magic XP curve `CANON`
Base **10 XP → level 1**, then each level's cost equals the entire total earned so far (cumulative doubles): cumulative to reach level *n* = **10 × 2^(n-1)**.

| Magic Lvl | XP this level | Cumulative XP |
|---|---|---|
| 1 | 10 | 10 |
| 2 | 10 | 20 |
| 3 | 20 | 40 |
| 5 | 80 | 160 |
| 10 | 2,560 | 5,120 |
| 15 | 81,920 | 163,840 |
| 20 | 2,621,440 | 5,242,880 |

- **No tail cap — doubling runs forever.** This is the deliberate brake on godlike power: each level costs as much as the whole career to date. (Author intent, 2026-06-25: "double forever to prevent godlike powers too soon.")
- **XP per cast scales with spell level `CANON`.** A L1 cane-zap is worth 1 XP; high-tier castings are worth proportionally more. Without this the high-level curve is unreachable by zapping alone — so reaching high magic levels *requires* casting high-level magic. `[Inference]` This is self-reinforcing pacing: power begets the only practical means to more power.

### Shop SP curve `CANON`
Base **1 SP → level 1**; the cost of each level *doubles* until it reaches **1,024 (= 2^10) at level 11**, then stays flat at **1,024 per level** thereafter. Cost to reach level *n* = 2^(n-1) for n ≤ 11, then 1,024.

| Shop Lvl | SP this level | Cumulative SP |
|---|---|---|
| 1 | 1 | 1 |
| 5 | 16 | 31 |
| 10 | 512 | 1,023 |
| 11 | 1,024 | 2,047 |
| 12 | 1,024 (capped) | 3,071 |
| 20 | 1,024 | 11,263 |

`[Inference]` This is the classic AD&D shape — geometric early, arithmetic tail at "name level" (here, L11) — so the Shop track stays *reachable* through stewardship indefinitely, while the Magic track does not. The contrast is intentional: tending the building should always pay off; raw magical power should choke itself.

### Earning rules (both tracks) `CANON`
- **Difficulty-weighted, no repetition decay.** A harder job pays more; repeating an easy job keeps paying its low rate. `[Inference]` The grind-brake is difficulty weighting, not diminishing returns.
- **Floors at zero; never negative — no debt.** Neither counter can be lost, stolen, or drained. Neglect only **stalls earning**; it never reduces a total.
- **Bloodline-gated earning `CANON` (extends §7).** Only the bloodline earns. If Stepan hires a non-relative to work on the Shop, the worker earns **nothing**, but **Stepan receives a fraction of the SP** the labor would have generated (the Shop crediting its guardian for sponsored care). A worker who *is* a blood relative earns SP **in their own right** — which means multiple bloodline members can each hold independent SP/level totals. `[Inference]` This seeds multi-guardian possibilities **within Stepan's own line**. **Note (2026-06-26):** **Danica is a *different* bloodline entirely — clerics — who does *not* benefit from this Shop** (it is attuned to Stepan's lineage alone); see `07_Secrets.md`. She is therefore *not* an example of shared-Shop earning.
  - **Confirmed 2026-06-25 (two meters, two rates):** the guardian's **initial fraction is ~40%** for sponsored work where he merely helps or stays out of the way; it can rise with his involvement, and reaches **100% for work he does himself.** Separately, the **Shop's own Restoration meter is fed by the *full* value** of every repair — a helper's hands physically heal the building regardless of bloodline — so **Restoration climbs faster than the guardian's personal SP** whenever non-bloodline labor is involved. Track both counters (guardian SP in `03`; Shop Restoration in the Arthur's Curios entry / `06`).

### Shop SP earning surface `CANON` (locked 2026-06-25)

The Shop *dispenses* SP to its guardian. What it pays for, and how much:

| Action | SP | Rule |
|---|---|---|
| **Minor fix** (finishing nail, leveling a shelf) | **1 SP each** | Capped at **10 SP/day** from minor work. |
| **Notable job** (clean the windows inside *and* out) | **10 SP** (lump) | Substantial single tasks pay a lump, separate from the minor-fix daily cap. |
| **First-of-a-kind event** (first sale) | **many SP** | The *first* time pays big. |
| **Routine repeat** (subsequent sales) | **0 SP** | Repeats pay nothing **unless particularly notable.** |
| **First entry into a newly unlocked room** | **SP grant** | Rooms unlock at level milestones; first crossing of the threshold pays once. |
| **Defending the Shop** (kill the large rat with Magic Missile) | **+2 SP** *on top of* the magic XP | Cross-track spillover — see below. |

- **The daily cap is the early-game brake `CANON`.** A few days of nails and shelves caps at 10 SP/day → that's enough to reach Steward L4 quickly, but then the 1-SP minor work can't keep pace (L6 needs 63 cumulative, L7 needs 127), forcing Stepan toward bigger, notable, or first-time work. This is the repetition-brake the Shop track uses *in addition to* difficulty weighting; it is **not** decay (each fix still pays its full 1 SP) — it's a throughput ceiling on trivial work.
- **Cross-track spillover `CANON` — handle with care.** A single act can feed *both* tracks when it serves both purposes. The rat example: Magic Missile kills it → **5 XP** (magic) **and** the Shop, valuing the defense, **offers 2 SP**. Author note 2026-06-25: spillover must be **kept small and deliberately controlled** so Stepan's combined growth stays smooth and reasonable — the SP side of a defense is a fraction of the XP side, never a second full payout.
  - **Spiderwebs:** cleaning webs is minor Shop work; if the webs **have spiders**, clearing them counts as a micro-defense and pays **2 XP** (magic track). `[Inference]` Pre-exposure this XP accrues *silently* (§4) — Stepan just tidies cobwebs; the magic ledger ticks unseen. `[Unverified]` Whether the web-cleaning itself also pays minor SP alongside the 2 XP is not yet pinned — flag for confirmation.
  - **Goblin defense values `CANON` (2026-06-26).** Small goblin (cane-zap kill): **2 XP** (Ch5). A **bigger goblin** (Magic Missile one-shot): **5 XP** (Ch7). An **armoured warrior goblin** is **two-stage** — **destroying the armour = 5 XP**, then **killing the goblin = 8 XP** (13 total). `[Inference]` The two-stage design is a built-in difficulty step: at L1 a single Magic Missile may only manage the **armour**, leaving the kill for a second action — and with the recharge limit (§3) that second action may have to be something *other* than another missile. **Resolved 2026-06-26:** in Ch8 the Magic Missile **blows the armour off and stuns** the warrior (**+5 XP**) but does **not** kill; it enrages and rushes, Stepan goes **dry**, and the **cane-swing to the head** is the kill (**+8 XP**, faint staff-glow; §5). **⚠ This totals +13 in Ch8 → Magic XP 16 → 29, crossing the 20 L2 threshold (Magic L2: 2nd spell + stat point) — confirm or tune.**

---

## 3. What the tracks unlock `CANON`

**Shop SP → Steward standing + Store improvements** (cheapest first). SP folds in the old "Store Credit" tiers:

1. **Consumables / hospitality** — restocked fridge, perfect coffee, minor comforts. (Reframes the Shop's early "gifts" as SP-funded in hindsight.)
2. **Restorative effect** — the easing hip, returning fitness (see §5 for its ceiling).
3. **Store upgrades** — repairing/unlocking rooms, shelves, and capabilities of the building itself.

**Steward-level characteristic gains `CANON`.** Beyond standing, the Steward track grants characteristic points at milestones — themed to *presence and authority* rather than the Magic track's raw power: **+1 Charisma at Steward L5 and L7** (Stepan growing into someone people defer to). `[Speculation]` A point of **Constitution** could ride along once (labor + the restorative effect are both bodily) if you want the Steward track to read as physical-renewal too; Charisma alone is the cleaner signature. These stack into the same characteristic block as the Magic track, under the same 18 / `18/+99` cap.

**Mission-service characteristic grant `CANON` (2026-06-26).** Beyond level milestones, the **Shop may grant a characteristic point — typically Constitution (physical renewal) — for a significant act in service of its mission** (containing the breach, restoring the house). This activates the Constitution `[Speculation]` above: stewardship reads as *bodily renewal*, not only authority. **First award: the Ch7 ward-board containment → +1 Constitution.** Use sparingly and deliberately — it's the lever for Stepan getting **healthier and, over the series, younger** (de-aging, §6), a deliberate long-arc setup. Not a routine payout.

**Magic XP → personal power.** Each magical level grants, together:

4. **+1 characteristic point**, allocated by the author (see stat-cap rule below). Tracked in Stepan's `03_Characters.md` entry.
5. **One spell.** Two phases `CANON`:
   - **Pre-exposure (low levels, no choice):** the system simply *grants* the spell — no interface, no menu. **Magic L1 = Magic Missile**, full stop. Narratively a door-breaker, but throttled in-scene by Prince's magic resistance, so it reads as a harmless "zap the cat harder" beat while the cane quietly becomes deadly.
   - **Post-exposure (`[Inference]` proposed ~L3 — author tentative):** once the system reveals itself to Stepan, spell acquisition becomes a **choice** presented as an in-world interface — a section of the curios **glows** to reveal a shelf of selectable books (a floating spell-book / HUD), among them a **"Learn About Your Magical Experience"** primer that explains the track itself. The precise exposure level is not yet hard-locked.

**Spell roster so far `CANON` (2026-06-26):**
- **L1 — Magic Missile** (offensive, ranged; **point the cane** + intent). Door-breaker; one-shot kill on a bigger goblin; only *breaks armour* on an armoured warrior (§2).
- **L2 — Reflect Ward** (defensive; **raised around himself**, not aimed). While up, it **turns an incoming blow back on the attacker** — a strike hard enough to fell Stepan fells the attacker instead. Health is tracked **narratively, not in hard HP**: the ward scales to the blow (a killing strike reflects as a killing strike). **Limit `CANON` (2026-06-26):** it is a **cast on the same recharge economy as Magic Missile** — raised *before* the blow, and it **collapses after it reflects once** (one attack, then down). At **L1** (a single charge) he holds *either* offense or defense, not both; **capacity grows with level** (see below). Deliberately **non-offensive on its own**, so the finale's "out of charges" beat still hinges on Magic Missile. *(Name provisional. Spell still **author-granted** at L2; the in-world spell-**selection** interface is deferred to ~L3+.)*
- **Charges & capacity `CANON` (2026-06-26):** the magic pool holds **charges equal to the current magic level** (L1 = 1, L2 = 2, …), **shared across spells** (Magic Missile or Reflect Ward each spend one). Charges **recover over time, fatigue-variable**; a **level-up fully refills** the pool. This is what makes the finale work: blowing the warrior's armour **crosses him into L2 mid-fight**, which **rearms him to two** — so he can still raise a ward, and, panicked, never notices he *also* still holds a missile and reaches for the cane instead.
- **Cleric spells (Danica) `CANON` (2026-06-26):** **Bless Object** — channels a blessing into an object (she blessed Stepan's cane to land the warrior's killing blow; this is what **jump-starts the cane→staff**, §5); **Detect Evil** — passive/default sensing (it drew her to the second breach in Ch9). She enters canon at **Cleric L1, XP 1/20 to L2** (earned from helping at the Shop + the blessing); her track mirrors the magic curve (20 to L2). Surfaces on her **own silver Status/Clear HUD** (§4).

### Characteristic-cap rule `CANON`
- Five stats (Intelligence, Wisdom, Dexterity, Constitution, Charisma) **cap at 18.** Points that would exceed 18 must be allocated elsewhere.
- **Strength is the exception:** above 18 it continues in the author's `18/+NN` notation (`+01, +02, …`) up to a ceiling of **`18/+99`**, an homage to old-D&D exceptional/percentile Strength and its capacity for extreme power. `[Inference]` Given the Magic curve, +99 is effectively unreachable in any plausible level range — it functions as a series-spanning aspiration, not a target.
- Because allocation is an authorial lever (it's a novel, not a dice game), "balanced growth" is a *narrative* control: points go where the story needs them.

`[Inference]` Shop SP (improving the building) and Magic XP (improving the man) being separately gated means comforts and a restored Shop can flow steadily via stewardship while real personal magic stays locked behind the brutal doubling track.

### Spell economy — casting cost & recovery `CANON` (2026-06-26)

Magic Missile is **not at-will.** Casting it spends a charge that **recovers over real time**, at a rate that **varies with Stepan's fatigue** — rested, it returns sooner; exhausted, stressed, or run-down, it crawls. At Magic L1 his reserve is tiny (effectively **one good shot** before he is dry), and the **HUD is stingy at low levels** — it gives him **no clean "ready" ping** — so he frequently cannot be sure a missile is back until he tries. This is deliberate: it is the engine for the **Ch10 finale**, where he fires on faith, eyes shut, not knowing it will work. See §5 for the **cane-as-last-resort** when he runs dry.

### The Shop's own growth track `CANON` (locked 2026-06-25)

The Shop is a **second progression body**, leveling alongside Stepan but on its own terms.

- **Two separate numbers.** Stepan has a **Steward level** (his standing, from SP earned). The Shop has its **own Shop level** (its restored condition and capability). They are coupled — Stepan's stewardship is what heals the building — but they are tracked separately and need not move in lockstep (the Shop can be damaged by an event without Stepan losing rank, and vice-versa).
- **Self-directed `CANON`.** The Shop is "sentient enough to direct its own growth." When it gains a level it may **manifest an upgrade on its own initiative** — e.g., deciding it needs a **snack-bar** and adding one at Shop L6 — entirely in character (it "does not ask permission"). Upgrades can also be **Stepan-directed**: he invests his standing to call for a specific change. Author keeps the self-directed-vs-directed ratio as a **drafting lever**, scene to scene; the Shop's *agency* here is canon.
- **Gentle, bounded curve `CANON`.** The Shop's track is **far cheaper than Stepan's** — it "won't require millions of SP to grow." `[Speculation]` Proposed shape (tune freely): the Shop levels off cumulative restoration at modest, escalating thresholds, capping the per-level cost low so even high Shop levels total in the **low thousands**, never the millions of the Magic curve:

  | Shop Lvl | restoration to reach (proposed) |
  |---|---|
  | 1 | 25 |
  | 2 | 60 |
  | 3 | 120 |
  | 4 | 200 |
  | 6 (snack-bar) | ~450 |
  | cap | per-level cost tops out (~150–200), arithmetic thereafter |

  `[Inference]` Bounded this way, the Shop reaches meaningful levels within Book 1 (each a visible new capability), while Stepan's Magic track is still in its single digits — so the *building* visibly transforms long before the *man* becomes powerful.
- **Fuel `CANON`.** The Shop's growth is fed by the **cumulative restoration** Stepan's stewardship produces — the same deeds that pay him SP also heal the building — plus a **bonus when he deliberately directs a change**. It is not a currency Stepan spends; it is the building healing as it is tended.

---

## 4. Disclosure style — Ledger-as-window `CANON`

The two tracks have **two different disclosure surfaces:**

- **Shop SP → the Ledger.** Stewardship surfaces only through the Ledger's written entries, in its established dry voice (specced in `06_Sentient_Objects.md`). No HUD boxes, no italic pings. A book quietly writing itself reads as *uncanny*, not as a game interface — so Stepan keeps reaching for mundane explanations first (Hard Rule 2) while the reader still gets visible LitRPG numbers.
  - **Reveal timing `CANON`:** through the early shop chapters Stepan perceives only *effects* (energy, eased pain, the warm key). He first reads an actual **SP tally** at the ledger-discovery beat — when he stumbles on the ledger after the non-human customer (matches `02_Synopsis.md`).
  - `[Inference]` Establish one fixed typographic convention for Ledger entries the first time one appears; that convention *is* this story's status window and should stay consistent for the rest of Book 1 (craft-advice item 5).
  - **The Ledger records the whole situation, not just the guardian `CANON` (2026-06-26).** The Ledger is the Shop's *record*, distinct from the Shop itself, so it logs **every party to a consequential event** — the guardian, the goblins, the breach widening, the Shop weakening and healing, and (at the finale) **Danica lighting up** — bloodline or not. Recording is not *serving* or *crediting*: a non-bloodline person can be written into the account of a night without ever earning SP/XP (see §7). This is how the book can be "scratching away for both of them" at the Ch10 reveal while the Shop still serves only Stepan's line.
- **Magic XP → a personal HUD (the guardian's own interface).** The magic track is **not run *through*** the Ledger; it lives in a **HUD only Stepan can see**, rendered as **floating amber text** in the air — characteristics, level, XP, spells — overt "system" text (the LitRPG register comes out of hiding here).
  - **Pre-exposure — silent `CANON` (Hard Rule 2):** through the first levels there is **no interface at all.** Cane-zaps accrue Magic XP invisibly; spells are simply *granted* (L1 = Magic Missile); Stepan just notices the cane behaving oddly. (He even crosses **L1 in Ch5** with no announcement.)
  - **Exposure beat `CANON` (Ch6 / Magic L1):** the system finally reveals itself. First the **Ledger recognizes the change in him and records it** in its own dry voice — it *observes* the guardian, it does not *run* his magic — e.g. *"…one characteristic point, applied to his appalling Constitution."* Then a **HUD manifests** (a panel only he sees) showing the **stat block** and **Magic Missile**.
  - **He must learn to control it `CANON`:** the HUD does not politely close. Stepan has to **figure out how to summon and dismiss it.** The commands are verbal and must be spoken **firmly, as commands** — a tentative mutter does nothing, and ordinary conversation won't trip them: **"Status"** (firm) summons the HUD; **"Clear"** (one word, firm) dismisses it. The fumbling-old-man-versus-the-popup — and the discovery that the words have to be *meant* — is played for comedy and agency; once he has them, he can call his sheet at will.
  - **The system surfaces it unbidden `CANON`:** the HUD doesn't only appear on command — the system **pushes it up on its own** (level-ups, warnings, alerts, or simply to be noticed), and Stepan has to **"Clear"** it. `[Inference]` A reusable comedy engine: an unbidden pop-up at the worst possible moment leaves him snapping **"Clear! Clear! Clear!"** at empty air while everyone around him — who see *nothing* — draws conclusions about the old man fighting with the furniture. (Pairs with the writer-cover and the "can you see this?" gag.)
  - **Two surfaces, two roles:** the **Ledger** = the Shop's record (stewardship tallies + recognition of the guardian's changes; dry, written, uncanny). The **HUD** = Stepan's personal magic control panel (overt amber text, summoned/dismissed/forced). The **glowing spell-shelf / "Learn About Your Magical Experience"** primer is retained for *later* — the spell-**selection** interface once free choice opens above L1.
  - **The cleric path — same interface, silver `CANON` (2026-06-26, revised):** the **cleric** line (Danica) gets her **own gamified HUD after all** — a **silver Status/Clear panel** only she sees, with her own spells, XP and levels — *plus* a **silver-white aura** when she channels. It is the **same framework** as the guardian's, recoloured and divine-flavoured. The real divergence is **vocabulary, not interface**: Danica never played the games, so the terms (Status, Charisma, levels, XP) mean nothing to her and must be translated — a Book 2 engine. *(Supersedes the earlier note that clerics get "an aura, not a HUD.")*
  - **Bloodline framing begins** to surface here (the power is inherited — Arthur's blood) but lands fully later (Hard Rule 2).

---

## 5. The cane / staff sub-system `CANON`

- **Charge model: capacitor.** The cane stores a small charge gained **passively** (movement, friction, ambient shop energy) plus from progression milestones, and **discharges** in zaps. Early cap is tiny — one weak zap (canon: the light zap to Prince). The cap **rises across the series** as Stepan's curve climbs (see §6).
- **Casting / aiming `CANON` (2026-06-26).** Magic Missile (and offensive magic generally) is **aimed by pointing the cane and willing it** — the **cane supplies direction**, **intent supplies the trigger.** No spoken incantation, no gesture beyond the point. This is what lets him fire it **blind** in the Ch10 finale (point toward the threat, intend, release) and keeps the magic from reading as spellbook recitation.
- **Bloodline-keyed: inert for others.** The cane does nothing for anyone outside the bloodline. `[Inference]` This forecloses a "villain steals the staff" shortcut and keeps the object's power tied to the person.
- **Cane → staff `CANON` (2026-06-26).** The cane is slowly becoming a true **staff**: exceptional hardness, and in a swing it strikes **far harder than its mass warrants**, without jolting the wielder. The transformation is **jump-started by Danica's unintended, accidental blessing** in the warrior finale: panicked and down to what he thinks is "just a stick," Stepan swings as Danica — hand on his back, not knowing what she is — pushes a **pulse** into him; it pours through him into the cane and lands a killing blow. That pulse is the **catalyst**, not a one-off; from there the cane carries staff properties. `[Inference]` It also resolves the earlier "something helped" thread: the *something* is **Danica's latent cleric power**, the first outward spark of her bloodline (full reveal still later). **Before/after `CANON` (2026-06-26):** *before* the blessing the cane was **tough wood with some latent power** (the capacitor zaps) but **not weapon-grade**; *after*, it begins acquiring **weapon-grade functions** — a **gradual** transformation, not a switch.

---

## 6. Pacing & power curve `CANON` + flags

- **Single series-long curve.** No per-book level caps; one continuous progression arc across all books.
- **Restorative ceiling: none of the usual kind.** The Shop's restorative effect **can de-age Stepan and extend his lifespan**, not merely restore robust health-for-age.

> **⚠ Pacing flag `[Inference]`.** These two choices remove two of the three guardrails the genre normally uses against god-mode creep (craft-advice item 2 names this as the failure mode). What's left carrying the pacing load:
>
> 1. **Difficulty-weighted earning (§2)** — no cheap path to high totals.
> 2. **The Shop withholds on purpose** — CANON tension from `03`/`06`: it could smooth everything but won't, because struggle is how both grow. This is now the *primary* in-world brake, so lean on it deliberately.
> 3. **The slow XP track gating real power (§3)** while only comforts flow early.
>
> With mortality softened by de-aging, the series will also need its **stakes to come from somewhere other than Stepan's physical decline** — relationships, the secret around Prince, threats to the Shop, succession. Worth deciding consciously where Book-1 tension lives. `[Speculation]` Prince's permanent-transformation jeopardy (Hard Rule 1) is well-positioned to carry a lot of that load.

---

## 7. Succession & access `CANON`

- **Guardian death:** what happens to accumulated credit/level is **left open** as a series mystery — flagged load-bearing, tied to the bloodline-succession open question in `04_Worldbuilding.md`. Do not resolve in prose yet.
- **Non-bloodline access:** others **can benefit** from comforts the guardian unlocks (warmth, food, a mended chair) but **cannot earn or direct Magic XP / Shop SP themselves.** The earning system is bloodline-gated; only its *outputs* spill over to others. **Hired non-relative labor** earns the worker nothing but credits the **guardian a fraction** of the SP (see §2). **Blood-relative** workers earn SP in their own right — the hook for multiple guardians / a second bloodline (Danica, far-future).

---

## 8. "Can never happen" quick list `CANON`

- Neither counter (Magic XP, Shop SP) ever goes negative; no debt.
- Magic XP / Shop SP is never stolen or drained; neglect only stalls earning.
- The cane never works for a non-bloodline wielder.
- Non-bloodline characters never accrue Magic XP or Shop SP **in their own right** (a non-relative worker earns nothing; only the bloodline guardian is credited a fraction — §2). *(The Ledger may still **record** their part in a consequential event — recording ≠ earning; §4.)*
- The Magic XP curve never gets a tail cap — it doubles forever.
- A stat other than Strength never exceeds 18; Strength never exceeds `18/+99`.
- Stepan never sees a Shop-SP tally before the ledger-discovery beat, and never sees the magic-track interface before he suspects magic is real.
- The Shop SP / Restoration tallies never present as a HUD/box — only as Ledger entries, ever.
- The Magic track shows **no** interface before the exposure beat (Ch6). After exposure it has its own **HUD**, visible **only to Stepan** and summoned/dismissed by him (others cannot see it — Danica included, for now). The Ledger may *recognize and record* the guardian's changes in its dry voice, but it never *runs* the magic system.

---

*Locked 2026-06-24. Consider porting this into the System Spec section of `LitRPG_Series_Template.docx`, and adding `08` to the README folder map. Open downstream item: decide where Book-1 tension primarily lives, given the softened mortality stakes (§6).*
