# Worldbuilding

> Each entry gets a `## Name` heading followed by a one-line metadata strip naming its **Type** (and optionally a subtype in parentheses). Body uses `### ` subsections — recommended subsections vary by type (see suggestions below). Plain prose, blank-line paragraph separation.
>
> **Types** (analogous to Character `Role:` field):
> - **Setting** — places (subtypes: region, town, building, room, plane, dimension, etc.)
> - **Item** — significant non-sentient objects (subtypes: artifact, weapon, tool, consumable, etc.; *sentient items live in 03_Characters.md*)
> - **Culture** — peoples, factions, organizations, families, professions, religions
> - **Lore** — rules, history, magical concepts, prophecies, laws of nature
>
> **Recommended subsections by type:**
> - **Setting:** Description • History • Current Status • Notable Inhabitants • Significance
> - **Item:** Description • Origin • Properties • Current Location / Owner • History
> - **Culture:** Description • Values • Structure • Practices • Notable Members
> - **Lore:** What It Is • Manifestations • Who Knows • Open Questions

## The Bloodline
**Type:** Lore (Magical Concept)  •  **First Appearance:** Book 1, Ch. 1 (implicit; explicit framing comes later)  •  **Related:** Stepan, Arthur, Arthur's Curios, Stepan's Book, Prince (the Cat)

### What It Is
An inheritable trait that causes the bearer to be recognized and accepted by certain ancient magical objects and entities. It is not a power Stepan can deliberately wield; it is a property of his blood that other things respond to. The trait passes through Stepan's family line — Arthur was a bearer, Stepan is the current bearer — though the origin, extent, and full lineage remain unknown at the start of the story.

### Manifestations
Across the magical entities encountered so far in Book 1:

- **Arthur's Curios (the Shop):** Recognizes the bloodline the moment Stepan crosses the threshold. Activates guardian-tier hospitality (stocked fridge and larder, perfectly brewed coffee, gradual easing of Stepan's physical pain). Will not extend any of this to outsiders.
- **Prince (the Cat):** The cat's telepathic communication works *only* with those of the bloodline. With anyone else it is silent. This is the mechanism by which Stepan first learns the cat is sentient.
- **Stepan's Book (the Ledger):** Recognized Arthur as a bearer; recognizes Stepan now. Stepan's entries appear in a deep, slightly iridescent black ink that was not present in the book before his arrival — a possible signature of the bloodline's resonance with the object.
- **The cane / staff:** The cane Stepan inherits begins functioning as a magic staff once he has carried it long enough, including the ability to deliver zaps to Prince. **Confirmed bloodline-keyed** — it is inert for anyone outside the bloodline (`08_System_Spec.md` §5; resolves the earlier open question). Its charge follows a capacitor model: passive accumulation (movement, friction, ambient shop energy) plus progression milestones, discharged as zaps, with a cap that rises across the series. See [The Walking Cane](#the-walking-cane) and `08_System_Spec.md` §5.

### Who Knows
*In-world at story start:* The Shop, Prince (the Cat), the Ledger, and (presumably) Arthur. Stepan does not. Danica and the townspeople of Grovesend may sense that something is unusual about the shop's guardians but do not understand the mechanism.

*By the end of Book 1:* Stepan should at minimum be aware that something about him is being recognized, even if he hasn't yet been given the word "bloodline" for it.

### Open Questions
- How far back does the bloodline go — Arthur's generation, several generations, or much older?
- Is Stepan the only living bearer, or are there others (cousins, distant relatives)?
- Can the trait be tested for, or is it only revealed by interaction with a magical object that already knows it?
- Does it skip generations? Can it be transmitted through marriage or adoption?
- What happens to the Shop, the Ledger, and Prince (the Cat) if Stepan dies without a recognized heir? (May be load-bearing for series stakes.)
- Are there bloodline-specific abilities that haven't surfaced yet? The cane-becoming-staff suggests yes.

## Order, Chaos, and Balance (the Shop's cosmology)
**Type:** Lore (magical concept / cosmology)  •  **First Appearance:** TBD (reveal, late)  •  **Related:** Arthur's Curios, [The Bloodline](#the-bloodline), `06_Sentient_Objects.md`, `07_Secrets.md`

> ⚠ **Reader-secret / author-only.** The full statement is kept in [`07_Secrets.md` → The Shop's true purpose](07_Secrets.md). Stepan does not know any of this early (Hard Rule 2); keep it out of prose, summaries, and AI continuations until the reveal. This stub exists only so worldbuilding has a pointer.

### What It Is
The Shop holds a place in the multiverse: it **defends order by *encapsulating* chaos rather than eliminating it** — a containment vessel, not a weapon. The governing principle is **balance**. Ancient but decayed through neglect. See `07_Secrets.md` for implications (the curio "junk" as containment array; stewardship as cosmic load-bearing work; reveal timing).

## Goblins
**Type:** Culture / Lore (threat)  •  **First Appearance:** Book 1, Ch. 0 (the cat's worry); foreshadowed Ch. 1 (Arthur's "goblin activity" joke; the Goblin-King Mug)  •  **Related:** [Order, Chaos, and Balance](#order-chaos-and-balance-the-shops-cosmology), Arthur's Curios, the Cat / Prince

### What They Are
`[Canon, Ch0]` Goblins are a **real external threat**, not merely Arthur's bedtime joke. They probe a poorly-kept house for weakness and get in through the same gaps the mice find; left unchecked, a single intruder becomes a **full-scale invasion**. The cat has seen what they do to a house "that has stopped paying attention," and dreads a repeat — part of why unsealed gaps matter: a mouse-hole is also a goblin's door.

### Significance
`[Inference]` Goblins are the comic-seeded face of the **chaos** the Shop exists to contain (see the cosmology). They retroactively give weight to Arthur's running "goblin activity" gag and the Goblin-King Mug — the joke was load-bearing. A guardian's stewardship (sealing gaps, keeping the Shop sound) is, in part, **keeping goblins out**: mundane repair as frontline defense. Their nature, numbers, and tie to the wider multiverse threat are not yet established.

`[Canon, 2026-06-26]` **Corpses as containment.** A dead goblin is shoved **back through the breach** — deliberately: the body **plugs the gap** (a stopgap that slows the leak, in keeping with "contain, don't eliminate") and serves as a **warning to the next goblin** that this door kills. Prince manages the small ones; heavier kills fall to Stepan (the guardian doing the grim work). `[Canon, 2026-06-26]` When a body is **too big for Prince to move** (e.g. the Ch7 bigger goblin), **Prince instructs and Stepan does the physical plugging** — stacking the *yuck* of handling a corpse, the *horror* of its being a monster, and the *guilt* of having killed something sapient; the plugged gap then easing things a little is the deliberate counterweight to all that bad feeling.

`[Canon, 2026-06-26]` **Goblin tiers (emerging).** The leak sends steadily more capable goblins: (1) **Small goblins** — child-sized, all teeth and appetite; a cane-zap kills (2 XP; Ch5). (2) A **bigger goblin** — brute-sized, no armour and no tactics, just larger and meaner; introduced **Ch7**, killed by a single **Magic Missile** (5 XP). (3) **Armoured warrior goblins** — the first *actual fighters*, in armour that must be **destroyed first (5 XP)** before the goblin can be **killed (8 XP)**; introduced **Ch8**. Their arrival signals **organization** behind the leak, not just hungry strays. `[Inference]` The escalation (appetite → size → arms-and-armour) is the threat curve into the back half and Book 2.

`[Canon, 2026-06-26]` **Assignment & numbers.** Goblins are **assigned to a breach by its size/significance** — a small, insignificant hole rates only **one warrior**; more will try eventually, **but not for days** (per Prince). A soldier is only ever sent ahead of an army: the armoured warrior implies **organization and scale** behind the leak. **Blood:** the Shop **erases the blood** of a kill (no stains), of a piece with its self-tidying.

## Arthur's Curios
**Type:** Setting (building)  •  **First Appearance:** Book 1, Ch 1  •  **Related:** The Store

### Description
The shop presents as a narrow two-story structure that leans slightly toward the road, as though it has spent a century listening to passing traffic and never quite straightened up again. The exterior boards are a deep weathered grey, the paint long since given up to Ontario winters, and the door is painted a flat, deliberate black that absorbs light rather than catching it. The sign above the door sags at one corner, its lettering still legible but worn soft at the edges. The windows are filmed with years of grime and condensation residue, opaque enough that nothing inside is visible from the street, yet locals report movement behind the glass after dark. The building carries the smell of old wood, cold iron, and something faintly mineral, like the inside of a stone cellar that has never fully dried out. In cold weather, no frost forms on the glass even when neighboring storefronts are rimed white. The large ornate dark-iron key inherited by Stepan grows warm against his chest the moment his eyes find the building for the first time, suggesting the shop registers the presence of its rightful heir before he has set foot on the porch.

### Location
Arthur's Curiosities sits at the edge of the crossroads that forms the center of Grovesend, a small rural hamlet in Oxford County, Ontario, roughly east of Ingersoll. Grovesend occupies a quiet valley beneath a canopy of old trees, built around the intersection of two country roads, with a church spire marking the opposite corner of the crossroads. The shop occupies the most shadowed corner of that intersection, set slightly back from the road on a narrow lot with a wooden porch. The hamlet reads as a place that time passed over without much ceremony: a handful of residential rooftops, the church, a scattering of outbuildings, and the shop. The nearest town of any size is Ingersoll to the west, reached by a road that crests a hill before dropping into the valley, giving arriving visitors their first view of the crossroads and the shop at the same moment. The building inspector's truck died every time it pulled onto the property and only restarted after being towed past the town line, which has made any official assessment of the structure's condition effectively impossible.
## Grovesend
**Type:** Setting (town)  •  **First Appearance:** Book 1, Ch 1

### Description
Grovesend sits in a shallow valley, so the first impression a visitor gets is from above: a cluster of rooftops half-swallowed by tree canopy, a church spire poking up through the branches, and gravel roads that seem to dissolve into the surrounding farmland rather than lead anywhere purposeful. The maple trees lining those roads are genuinely old, thick-trunked specimens that predate living memory and were already mature at Confederation. Their roots have buckled old fence lines and pushed through the gravel shoulders, and nobody has seen fit to correct this. The air carries the particular quiet of a place where ambient noise is mostly wind, the occasional tractor, and screen doors. In autumn the maples drop enough leaves to muffle footsteps on the gravel. In winter the valley collects cold and holds it. The crossroads at the center of town is the only point where more than one building is visible at once: the church on one corner, a handful of commercial and residential structures on the others, and Arthur's Curiosities occupying the edge of that intersection with a posture that suggests it arrived before the roads did and has been tolerating them ever since. The shop itself is narrow and dark, its painted-black door peeling, its windows filmed with years of grime, and its sign sagging in a way that reads less like neglect and more like a deliberate signal to keep moving. The overall sensory register of Grovesend is muted and slightly out of step with the present: no chain businesses, no cell signal worth mentioning, and a collective local attitude that treats outside attention as a mild inconvenience rather than an opportunity.

### Location
Grovesend is a small rural hamlet in southwestern Ontario, Canada, situated in a valley below rolling hills east of Ingersoll. It is reached by gravel roads that branch off from the regional highway network without much fanfare, and the most practical way in for a newcomer is by hired livery from Ingersoll, as Stepan Novacek discovers. The hamlet is built around a single crossroads anchored by a church with a visible spire, which serves as the only reliable landmark when approaching from the hills above. The surrounding land is agricultural: old fence lines, open fields, and woodlots of those ancient maples. The town has a functioning, if modest, civic structure (a town council, a building inspector) but operates at a scale where everyone knows the local folklore and where an unfamiliar face is noticed immediately. Visitors arrive rarely and typically fall into one of three categories: people who are lost, people with farming business, or people making decisions they will later reconsider. Stepan arrives in the third category, inheriting Arthur's Curiosities at the crossroads, a shop that has been shuttered since Arthur's disappearance and that the rest of Grovesend has quietly decided to leave alone.
## The Antique Iron Key
**Type:** Item (tool)  •  **First Appearance:** Book 1, Ch 1

### Physical Description
A large, heavy skeleton-style key cast from dark iron, with a wide decorative bow at the grip end and a long shank that terminates in ornate, irregular teeth. The tooth profile is not the simple milled cuts of a modern lock but a complex, almost sculptural arrangement that implies the lock it serves was built to match the key rather than the other way around. The iron surface is dull and slightly pitted, the color of old metalwork that has been handled often but never polished, dark enough to read as black in poor light. It is, as Stepan himself might put it, the sort of key that suggests whatever it opens has never considered a sensible deadbolt. Despite its apparent age, the key carries no rust and no visible corrosion, which is itself quietly odd for uncoated iron. Its most significant property is thermal: as Stepan approaches Arthur's Curiosities for the first time, the key grows warm against his chest while still inside his coat pocket, producing a heat with no mechanical explanation. The warmth appears to respond to proximity to the shop, suggesting the key and the building share some active, non-passive connection. Whether that connection extends to other properties (resistance to being lost, sensitivity to who is carrying it, behavior near other objects in the shop) has not yet been established.

### Who Owns the Item
Currently in the possession of Stepan Novacek, who received it as part of the estate of his great-uncle Arthur, declared legally dead after seven years of unexplained absence. The key arrived packaged with a certified letter from Arthur's estate lawyer, alongside the legal documentation transferring ownership of Arthur's Curiosities in Grovesend, Ontario, to Stepan. Arthur had been largely absent from the Novacek family for nearly forty years before his disappearance, and the estate materials contain no record of how long he held the key or where it came from before him. The full ownership history prior to Arthur is undocumented.
## Arthur's Storytelling Tradition
**Type:** Culture (family)  •  **First Appearance:** Book 1, Ch 1

### Traditions and Customs
The tradition operated on one unspoken rule: no moment was too small to become a story, and no object was too ordinary to carry a secret. When rain kept young Stepan indoors, Arthur would announce, in a tone of mild concern, that the house was under siege and that the water drumming on the windows was enemy catapult fire. A kitchen cupboard left ajar had been carelessly left open by someone who should have known better. A missing sock was not lost but taken, and Arthur could name the goblin responsible, describe its den, and explain exactly what it planned to do with a single wool sock. The tradition required no props, no preparation, and no warning. Arthur simply began, and the ordinary world stepped aside. Stories were told in kitchens, in cars, on porches, and during walks. They were never announced as stories; they were presented as fact, delivered with a straight face and a register of calm authority that left Stepan genuinely uncertain, even as a child, whether to laugh or believe. The tradition carried no formal name within the family. It passed from Arthur to Stepan entirely through direct contact, and when Arthur's visits became infrequent and then stopped, the tradition stopped with him, leaving Stepan with a permanent appetite for fiction that could replicate what Arthur had done so effortlessly in an afternoon.

### Language and dialects
Arthur's storytelling vocabulary was built from the language of domestic life, repurposed for dramatic effect. He used the names of real rooms, real objects, and real weather conditions as raw material, which gave his stories a strange authority: they sounded like reports rather than inventions. He favored specific nouns over vague ones (a particular cupboard, a specific sock, a named goblin) and spoke in a register that was calm and slightly formal, as though relaying information received from a reliable source. He never used the phrase "once upon a time" or any other signal that a story was beginning. His transitions from ordinary conversation into narrative were seamless and unmarked. Stepan, now in his late sixties, still catches himself listening for that shift in register, that slight increase in precision that meant Arthur was about to explain something that could not be explained by ordinary means. The tradition's vocabulary included several recurring phrases: "the other side of" (used for portals and thresholds), "the ones who take" (for goblins and similar creatures), and "the house knows" (Arthur's explanation for any building that behaved strangely). That last phrase carries particular weight now that Stepan is standing outside Arthur's Curiosities for the first time.

### Arts and Entertainment
The art form Arthur practiced was oral and improvisational, generated entirely from whatever materials were at hand. He did not recycle plots or return to the same characters. Each story was built fresh from the immediate surroundings, which meant his repertoire was enormous and unrepeatable. Recurring subjects included hidden kingdoms (located beneath or behind something mundane: a floorboard, a hedge, a particular cloud formation), houses that moved under their own judgment, and subtle magics that operated by rules Arthur never fully explained but always implied were consistent and serious. His stories did not resolve neatly. Goblins were not defeated; they were negotiated with or avoided. Portals were not closed; they were noted and respected. Hidden kingdoms were not conquered; they were glimpsed and then lost again. This aesthetic of the unresolved and the half-seen shaped Stepan's reading tastes permanently. He spent decades haunting used bookstores in search of fiction that matched Arthur's register: stories involving dragons with complicated motives, prophecies that turned out to be wrong in interesting ways, and sorceresses who were neither villains nor helpers but something more specific and harder to categorize. He found such books rarely, and when he did, he kept them.
## Arthur's Disappearance
**Type:** Lore (history)  •  **First Appearance:** Book 1, Ch 1

### Description
Arthur Novacek (great-uncle to Stepan) vanished without explanation roughly seven years before the story opens. After the legally required seven-year absence period elapsed with no confirmed sighting, no contact, and no body recovered, estate lawyers petitioned for and obtained a declaration of legal death. That declaration triggered the reading of Arthur's will, which named Stepan as the sole heir to Arthur's Curiosities, the narrow weathered shop at the crossroads in Grovesend, Ontario. The certified letter and the large ornate dark-iron key Stepan carries on the train are the direct products of that legal process.

Arthur's disappearance did not occur in a vacuum. He had already been a ghost to the Novacek family for close to forty years before he vanished entirely, keeping no regular contact and surfacing only as a distant, slightly odd figure in Stepan's childhood memory. This long prior estrangement means that when Arthur stopped being seen in Grovesend, no family member raised an alarm quickly enough to matter. It was the town, not the family, that eventually noticed the shop had gone dark and the proprietor had not come back.

The circumstances of the disappearance remain unresolved. No departure note, no witnessed argument, no accident report, no travel record has surfaced to explain where Arthur went or why. The shop itself was found locked, its inventory untouched, and the black-painted door shut as though Arthur had simply stepped out for an errand and never returned. Locals in Grovesend have folded the disappearance into the broader folklore surrounding the building: the same place where objects reportedly shift on their own, where a thrown rock stopped mid-air, and where a building inspector's truck died every time it approached. Whether Arthur left of his own will, was taken by something connected to the shop's strange properties, or simply walked away from a life he had quietly been dismantling for decades is the central unanswered question the story inherits.

For Stepan, the disappearance is less a grief than a puzzle. He barely knew Arthur. What he carries is not mourning but a meticulous man's instinct that something does not add up, sharpened the moment the iron key grew warm against his chest at first sight of the building. The legal machinery has closed the file on Arthur. The story suggests the actual file is very much open.

### Appearance (as remembered) `[Canon, 2026-06-26]`
Per Danica's recollection (delivered as Ch9 exposition): Arthur **stood tall**; he carried a **walking stick rather like Stepan's cane — but covered in odd scribbles that almost looked like words**; and he had **greying hair but no other sign of aging.** Two deliberate seeds: the rune-marked stick is the **endpoint of the cane→staff transformation** Stepan has just begun (the carved warding-pattern he chiselled in Ch7; see the Walking Cane / `08` §5), and the **unaged-but-greying** detail seeds the **de-aging/renewal** that the Shop works on its guardians (`08` §6) — Arthur was one too. Both pay toward the **Ch11 Arthur epilogue.**

`[Canon, Ch0]` **What the cat witnessed.** Unlike the town and the estate — who found only a locked shop and assumed Arthur had "stepped out" — the cat saw him **deliberately gear up (coat, pack) and walk out the black door** on what was presumably one of his "fantastical journeys," and never return. So the disappearance was a **chosen, prepared departure**, not an accident on the premises — a fact known only to the cat (and now the reader of Ch0). It deepens, rather than resolves, the mystery: Arthur meant to go somewhere; he did not mean to be gone seven years.
## Arthur's Curios
**Type:** Culture (store)  •  **First Appearance:** Book 1, Ch 1  •  **Related:** The Store, Arthur's Curios

### Traditions and Customs
Grovesend residents have developed a set of unspoken behavioral rules around Arthur's Curiosities over the seven years since Arthur vanished. The most consistent rule is simple: no one goes near the shop after dark. This is not a formal prohibition but a community consensus so solid it requires no enforcement. Children who grow up in Grovesend learn it the way they learn not to touch a hot stove, through stories told by older kids rather than direct experience. Adults observe the same caution with less acknowledgment, the way Danica's foot eases off the accelerator when the subject of Arthur's nephew comes up: a reflex more than a decision.

The rock incident has become the defining cautionary story for younger residents. The boy who threw the rock (his name is known to everyone in town) cracked his toe when the stone stopped in mid-air and dropped onto the porch, and the story is retold with the specificity of a legal deposition: the arc of the throw, the exact moment the rock halted, the sound it made hitting the boards. No one has attempted vandalism since.

The building inspector's truck has become the adult version of the same lesson. The vehicle died every time it pulled up to the property and only restarted after being towed past the town line. The inspector filed a report, the report went nowhere, and the property has not been officially inspected since. Locals have quietly accepted that the shop enforces its own zoning compliance.

In seven years of abandonment, no one has broken in, no one has boarded up the windows, and no one has filed to have the building condemned. The collective understanding is that the shop is not waiting to be dealt with. It is simply waiting.

### Language and dialects
The language Grovesend residents use around Arthur's Curiosities is careful and specific. They do not say the shop is haunted. "Haunted" implies a ghost, something dead and lingering, and the shop does not feel dead to anyone who has spent time near it. The phrase that has settled into common use is that the shop "has a mind of its own," which is both more accurate and more unsettling than haunted because it implies active preference rather than passive residue.

Stories about the shop circulate through the usual channels of a small rural community: the gas station, the diner counter, the cab of a truck on a long drive. Danica, who drives the local livery route and passes the shop regularly, functions as an informal keeper of the current account. She tells the stories in a particular order (teenagers first, then the rock, then the inspector's truck) and with a practiced neutrality that neither endorses nor dismisses the events. This ordering is not accidental. It moves from the vague and atmospheric to the specific and documented, building a case rather than just spinning a yarn.

Locals refer to specific incidents by shorthand: "the rock," "the inspector's truck," "the night the kids ran." These references assume shared knowledge and mark the speaker as a genuine local rather than an outsider. Newcomers who ask for elaboration get the full story. Longtime residents exchange only the shorthand and a nod.

The phrase "prefers its privacy" appears often enough to suggest it originated with one person and spread. It carries a dry, rural humor that the community finds more comfortable than outright fear: framing the shop as particular rather than dangerous, eccentric rather than malevolent.

### Arts and Entertainment
The folklore around Arthur's Curiosities functions as Grovesend's primary piece of living local legend, the kind that gets updated rather than simply repeated. Unlike older regional ghost stories that have hardened into fixed versions, the shop stories are still accumulating. Each new incident gets absorbed into the existing body of evidence and retold alongside the earlier accounts, so the canon grows slowly but never closes.

For teenagers, the shop serves as the town's standard dare location, with one important modification: the dare is to approach the building after dark, not to enter it. No one has ever successfully completed the dare, not because anyone has been stopped by force but because the combination of darkness, the building's appearance, and the weight of the existing stories makes the final steps genuinely difficult. The dare has become a rite of passage in the sense that failing it is the expected outcome. Completing it would be the aberration.

For adults, the stories serve a different function. They are told to newcomers as a form of orientation, a way of communicating that Grovesend has its own logic and that some things here are simply accepted rather than explained. The telling is not meant to frighten but to inform. Danica's account to Stepan during the drive from Ingersoll is a good example: she delivers the stories with the same tone she might use to describe a road that floods in spring, practical information about local conditions.

The shop itself, dark and narrow at the edge of the crossroads, has become a fixed point in the community's sense of its own character. Grovesend is the kind of place with a shop like that. The building's presence is, in a quiet way, a source of local identity.
## Rural Ontario
**Type:** Setting (region)  •  **First Appearance:** Book 1, Ch 1  •  **Related:** South-Central Ontario, Oxford County

### Description
The air carries damp earth and diesel exhaust as a baseline, with wood smoke added in cooler months from farmhouse stoves and outdoor furnaces. Maple trees old enough to have been saplings at Confederation line the roads and field edges, their canopies wide and their bark deeply furrowed. Gravel roads crunch under tires and throw fine dust in dry weather; in wet weather they turn to soft ruts. Train whistles carry across open fields from a surprising distance, a sound that arrives before the train is visible and lingers after it has gone. Church spires are often the first sign of a town, clearing the tree line before the rooftops appear below them. Buildings in the older hamlets sit slightly off-plumb, their foundations settled into clay soil over generations, their window frames painted and repainted until the wood beneath is more paint than grain. Main streets run to brick storefronts, some well-maintained and some not, with hardware stores, feed suppliers, and the occasional antique or curiosity dealer filling the gaps. Valleys hold a softer, quieter light than the hilltops, and sounds carry differently in them. The overall feel is of a region that has been worked hard for a long time and has developed its own opinions about the pace of change, opinions it does not feel the need to advertise.

### Location
South-central Ontario, Canada, in the agricultural corridor running roughly between Toronto and London along the Highway 401 route. Ingersoll, a real town on the Thames River in Oxford County, serves as the nearest regional hub and rail stop. The fictional hamlet of Grovesend sits east of Ingersoll, accessible by gravel road, set in a valley at a crossroads marked by a church spire. The terrain is rolling agricultural land shaped by generations of farming: fields divided by old fence lines, woodlots of maple and oak, and creek beds cutting through the lower ground between hills. The rail line connecting Toronto to Ingersoll passes through this country, a remnant of the infrastructure that once knit these communities together before highway travel became dominant. Roads between hamlets are often gravel or poorly maintained two-lane asphalt, and distances between services can be significant. The region sits within the broader Great Lakes agricultural belt and carries the marks of over 150 years of continuous settlement. Grovesend itself occupies a valley that gives the impression of a place that was forgotten by accident, later rediscovered, and politely asked not to make a fuss. It is built around a crossroads, with Arthur's Curiosities sitting at the edge of that crossroads, and it reads as a community that modernization passed at a slight angle rather than head-on.
## The Walking Cane
**Type:** Item (weapon)  •  **First Appearance:** Book 1, Ch 1  •  **Related:** Staff, Cane, [The Bloodline](#the-bloodline), `08_System_Spec.md` §5 (charge/capacitor model)

### Physical Description
A thick, straight length of unvarnished ash wood, pale and slightly rough where the grain has been left bare. The wood is dense enough to feel solid in the hand without being heavy to carry, and the shaft is sized to suit Stepan's height rather than pulled off a pharmacy shelf. At the base, a heavy brass ferrule caps the shaft; it is worn flat and dull from years of contact with pavement, tile, gravel, and the occasional patch of ice. There is no ornamental handle or carved grip. The top of the shaft is simply rounded, darkened by skin oil and the pressure of a palm that has closed around it thousands of times. The cane carries no engravings, no family crest, and no shop-bought decorative touches. Its only character comes from use. During Stepan's train journey out of Toronto it is wedged between his knee and the seat ahead of him, taking up space with the quiet, settled authority of something that goes everywhere he goes. It functions less as an accessory and more as a standing arrangement with the physical world: stairs, uneven pavement, and long stretches of walking have all been formally notified of its presence. Unnoticed, at first, the cane takes on the role of a magic staff. As Stepan's hip heals, the can takes on this new role. But, at first, it's a walking aid that happens to collect what seems to be static electricity that zaps the cat - and eventually other monsters.

### Properties (as staff)
Canonical mechanics live in `08_System_Spec.md` §5. In brief: **capacitor charge model** — the cane stores a small charge gained passively (movement, friction, ambient shop energy) plus from progression milestones, and discharges it as zaps. Early capacity is tiny (one weak zap — canon: the light zap to Prince); the cap **rises across the series** as Stepan's curve climbs. **Bloodline-keyed: inert for anyone outside the bloodline**, which forecloses a "villain steals the staff" shortcut. [Inference] Stepan reads the early zaps as static cling / odd luck (Hard Rule 2), not as a weapon awakening.

**Cane → staff `CANON` (2026-06-26).** The cane is becoming a genuine **staff** — exceptional hardness, and in a swing it strikes **far harder than its mass warrants**. The change is **jump-started by Danica's accidental cleric blessing** in the warrior finale: a pulse through her hand, into Stepan, into the cane, landing a killing blow. Thereafter the staff properties persist. **Before the blessing** the cane was tough wood with some latent power (the zaps) but **not weapon-grade; after**, weapon-grade functions emerge **gradually.** Cross-ref `08_System_Spec.md` §5; it is also the first outward spark of Danica's own (later-revealed) lineage.

### Who Owns the Item
Stepan Novacek. The cane has been in his possession long enough that the ferrule is worn flat and the grip is permanently darkened, placing its ownership well before the events of the story. He relies on it daily because of a bad hip, but he does not treat it as a medical device or a concession. It is simply part of how he moves through the world, integrated into his routine with the same matter-of-fact acceptance he applies to everything he cannot change. He boards trains with it, loads it into truck cabs with it, and carries it into buildings whether or not the floor is level. No one else handles it or is implied to have any claim on it.
## The "Call it Magic, Call it Luck" T-shirt
**Type:** Item (apparel / motif)  •  **First Appearance:** Book 1, Ch. 2 (Scene 2)  •  **Related:** Stepan Novacek, The Goblin-King Mug, [The Bloodline](#the-bloodline)

### Physical Description
A soft, much-laundered T-shirt worn to a friendly grey, its slogan — *Call it Magic, Call it Luck* — printed beneath a faded horseshoe. Stepan bought it years ago because it made him snort in a gift shop and has worn it ever since for comfort; on some mornings, he reflects, it is the closest thing he has to a philosophy.

### Significance
`[Inference]` A deliberate **slogan-object motif**, companion to the Goblin-King Mug: an everyday item whose throwaway humour quietly states the book's central tension. Stepan happens to put it on the very morning he begins — unknowingly — doing both at once: *working* magic (the cane sparks) and *crediting* luck (static, forgetfulness, a good thermal mug). Treat as a recurring device to deploy at thematically loaded moments, not as set dressing.

## Ingersoll Station
**Type:** Setting (building)  •  **First Appearance:** Book 1, Ch 1

### Description
Being one of Ingersoll's few remaining significant historic buildings, it was in the municipal heritage inventory, but it was not designated under the Ontario Heritage Act.[4] The building was boarded up and not been protected or restored. It was demolished at the bequest of Town of Ingersoll officials after many decades of neglect and decay.

It was referenced in Planning for Heritage Railway Stations: Inventory where it was described as follows: "The Ingersoll station was modelled after the Woodstock station and features a steeply pitched cross-gabled roof with overhang and large wooden brackets. The station is architecturally significant and is a very good example of the Gothic Revival style adapted for a smaller station. It was evaluated as Heritage Class B".[4]

### Location
The station sits beside the active CN rail line in Ingersoll, Ontario, a small town in Oxford County roughly midway between Toronto and London. For passengers traveling to the rural hamlets east of town, Ingersoll is where the train network ends and local arrangements begin. The station is the first thing Stepan encounters in this part of Ontario: the point where his carefully pre-arranged plan transitions from the familiar (a train timetable, a ticket) to the less familiar (a livery driver he did not expect to be a woman, a road heading east toward a shop he has never seen). The building faces the tracks on one side and the town's older commercial street on the other, giving it the slightly awkward posture of a structure that once mattered more than it does now and has made a reasonable peace with that fact.
## The Coffeemaker
**Type:** Item (tool)  •  **First Appearance:** Book 1 Ch 1 (Scene 4 - The Kitchen)  •  **Related:** Arthur's Curios, The Bloodline, Stepan Novacek, Arthur

### Physical Description
A smooth, dark monolith on the kitchen counter, about the size of a bread bin, its surface unbroken but for a single spout and a single round button. There is no tank to fill, no hatch for grounds, no carafe, no clock, and no cord running to any outlet — nothing to plug in, nowhere to add coffee or water. The total featurelessness is the point: nothing about it explains what it does, which is exactly what makes the doing unsettling. At the push of the button a perfect hot cup drops from the spout — produced from nothing, by a machine connected to nothing. Over the course of the series it acquires further functions, each announced by a new control appearing on the otherwise blank face: first a second button for hazelnut coffee, then additional outputs such as a milk frother and a tea maker. It knows which the drinker wants without being told.

`[Canon 2026-06-25]` The **hazelnut button is the Shop's first self-directed upgrade**, manifesting overnight at the end of Book 1, Chapter 4 (the first Restoration milestone). Reactions to keep consistent: **Stepan dislikes flavoured coffees**, hazelnut especially, but allows that *this* one "isn't bad, for one of those"; **hazelnut is Danica's favourite**; **Prince takes a small amount now and then.** [Inference] That the Shop produces *Danica's* favourite reads as it anticipating her — preparing for her as it once prepared for Stepan.

### Who Owns the Item
Stepan owns this as a result of owning Arthur's Curios.  Nobody has ever been able to remove the coffee maker or, when they reach for it, to remember that they wanted to remove it.
## The Kitchen
**Type:** Setting (room)  •  **First Appearance:** Book 1, Ch. 1 (Scene 4 - The Kitchen)  •  **Related:** Arthur's Curios, The Coffeemaker, The Goblin-King Mug, Stepan Novacek, Arthur

### Description
A small room at the back of the shop, reached through a half-open door off the main floor. Where the rest of Arthur's Curiosities wears seven years of honest dust, the kitchen simply does not: it is clean, improbably warm, and kept as though someone tidied it an hour ago and means to come back. The sink delivers clear, cold water on demand, with none of the brown hesitation a pipe owes after years of standing, and the basin is white — unstained, unrusted, without a freckle of the orange corrosion its age should guarantee. A cupboard holds a tidy set of dishes, drinking glasses, and coffee mugs, all clean and free of dust, arranged with the quiet confidence of a kitchen that expects to be used. On the counter sits the coffeemaker, which produces a perfect hot cup on demand. The room's defining trait is that its tidiness is *active*: anything used and then left unattended for a few moments — a mug, a plate — returns to the cupboard rinsed, dried, and put away, as though it had never been touched. [Inference] The kitchen is not itself sentient; its upkeep is an expression of Arthur's Curios (the Shop) — guardian-tier hospitality extended to the bloodline heir, of a piece with the warm key and the stocked larder. Played early in the prose as deniable: Stepan attributes the vanished-and-cleaned mug to his own forgetfulness rather than to the room.

### Location
At the rear of Arthur's Curiosities, off the main shop floor, in Grovesend, Oxford County, Ontario. It adjoins the shop proper through a single half-open door and is the first room Stepan explores beyond the entrance. [Inference] Consistent with the building reading "deeper inside than the narrow front suggests," its precise place in the floor plan is not yet fixed.
## The Goblin-King Mug
**Type:** Item (housewares / novelty)  •  **First Appearance:** Book 1, Ch. 1 (Scene 4 - The Kitchen)  •  **Related:** The Kitchen, Arthur's Curios, Arthur, Arthur's Storytelling Tradition

### Physical Description
A sturdy ceramic coffee mug glazed a cheerful goblin-skin green, pleasant and slightly heavy in the hand. On its face, in cheerful white, grins the crowned skull of a goblin king; beneath it, in a font built exclusively for novelty, runs the slogan: "My other mug is a goblin king's skull." It is the first mug Stepan takes from the cupboard, and — by the joke's design — he does not register the skull or the line until a beat later, when the gag lands and surprises a laugh out of him. [Inference] It is one of a set: the cupboard's mugs all carry cute novelty sayings, this being merely the first Stepan meets. The humour is unmistakably Arthur's, the same register that once turned a missing sock into evidence of goblin activity.

### Properties
`[Inference]` Beyond the novelty glaze, the mug **keeps coffee at perfect serving temperature indefinitely** — Stepan's cup is as hot twenty minutes on as the moment it was poured (Ch. 2). This is the **Shop's magic, not insulation**; played deniably, Stepan credits "a clever double-walled thermal mug" and moves on. Of a piece with the kitchen's other quiet hospitalities (the self-tidying, the never-cooling coffee from the monolith).

### Who Owns the Item
Stepan, by virtue of owning Arthur's Curiosities — though "owns" sits awkwardly. Like the rest of the kitchenware, the mug is subject to the Shop's self-tidying habit: used and set down, it returns to the cupboard clean within moments, regardless of whether Stepan meant to put it away. [Speculation] Whether the mugs can be removed from the building at all, or simply reappear in the cupboard (as the coffeemaker resists removal), is not yet established.
## The Upstairs Bedroom
**Type:** Setting (room)  •  **First Appearance:** Book 1, Ch. 1 (Scene 5 - upstairs)  •  **Related:** Arthur's Curios, The Kitchen, Arthur's Study, Stepan Novacek

### Description
A bedroom off the upstairs hall, the nearest door at the top of the stairs. Like the kitchen, it has been kept — not preserved or museum-clean, but tidied-an-hour-ago clean and made ready for an expected, slightly fragile guest: the bed made up with a quilt turned down at one corner, pillows plumped, the window cracked a sympathetic inch so the air smells of cut grass and evening rather than of a room shut for seven years. A lamp burns low on the nightstand, and a glass of water stands beside it that has no business being fresh and is exactly cool enough to drink. [Inference] The room is the Shop's hospitality made domestic — guardian-tier welcome, of a piece with the warm key, the stocked kitchen, and the eased stairs. Its self-tending extends to the bedding: once Stepan is asleep, the comforter draws itself up unaided and tucks itself against the back of his neck, "the way a thing is tucked by someone who has done it many times and was never once thanked." This is where Stepan spends his first night as the shop's keeper.

### Location
Upstairs in Arthur's Curiosities, the first door off the landing at the top of the stairs, in Grovesend, Oxford County, Ontario. A bathroom — similarly spotless, with hot water on demand — sits across the hall; Arthur's study and the locked room lie further along, toward the dim end of the corridor.
## Arthur's Study
**Type:** Setting (room)  •  **First Appearance:** Book 1, Ch. 1 (Scene 5 - upstairs)  •  **Related:** Arthur's Curios, Arthur, Arthur's Disappearance, The Upstairs Bedroom, Stepan Novacek

### Description
A study at the end of the upstairs hall — and the one room the Shop pointedly does *not* tend. Where the rest of the upstairs is quietly, insistently kept, the study has been left exactly, deliberately alone: real dust, thick and grey and undisturbed, lies over everything. It is unmistakably Arthur's. Papers drift across a vast desk in geological strata; books stand in towers that have developed a lean; a cold cup of tea sits at the desk's edge with a skin grown over it, set down mid-thought seven years ago and never reclaimed. The air holds the specific smell of a particular man — pipe smoke, old paper, something Stepan's chest recognizes before his mind does, so that he must breathe through an ambush of grief for an uncle he barely knew. [Inference] The contrast is the point, and reads as canon about the Shop: the building can tidy whatever it pleases and has chosen to leave Arthur's clutter precisely where he left it — "some things, it seems, even a house knows better than to put away." [Speculation] As Arthur's working space frozen at the moment of his disappearance, the study is a strong candidate to hold clues to where he went, and may be connected to the adjacent locked room.

### Location
At the end of the upstairs hall in Arthur's Curiosities, past the bedroom and bathroom, toward the dim end of the corridor where the locked room stands. Grovesend, Oxford County, Ontario.
## The Locked Room
**Type:** Setting (room)  •  **First Appearance:** Book 1, Ch. 1 (Scene 5 - upstairs)  •  **Related:** Arthur's Curios, Arthur's Study, The Antique Iron Key, Arthur, Arthur's Disappearance

### Description
A door at the dim end of the upstairs hall, past the study, that will not open — and the only thing in the otherwise wholly accommodating shop that refuses Stepan. It is shut in a way the other doors are not: the handle does not turn, there is no give, no rattle, no play, no swollen frame to shoulder, and — pointedly — no keyhole at all. The great iron key, warm everywhere else in the building, goes **cold** here for the first time since the hilltop, the exact inverse of the welcome it signals elsewhere. The cat keeps a wary distance and stares at the wood; even it will not approach. Stepan, rebuffed, promises the door he will "come back to" it.

[Unverified] **What lies behind the door — its contents, its purpose, why the Shop seals it and the key denies it — is not established.** Deliberately left open by the author, to be revealed over the series; this entry is expected to grow. [Speculation] Given its position beside Arthur's untouched study and the building's pointed refusal to admit Stepan, it is a natural home for Arthur's deepest secrets, the mechanism of his disappearance, or something the Shop is protecting Stepan *from* rather than keeping *from* him — but none of this is settled.

### Location
At the far, dim end of the upstairs hall in Arthur's Curiosities, beyond Arthur's study. Grovesend, Oxford County, Ontario.

## The Upstairs Bathroom
**Type:** Setting (room)  •  **First Appearance:** Book 1, Ch. 1 (Scene 5 - upstairs); revisited Book 1, Ch. 2 (Scenes 1–2)  •  **Related:** Arthur's Curios, The Upstairs Bedroom, Stepan Novacek

### Description
Across the landing from the bedroom, the bathroom is the same study in impossible upkeep as the kitchen: spotless, warm, with **hot water on demand** and none of the rust, mildew, or brown-water hesitation a fixture should owe after seven years standing dark. The towels are soft and dry; the basin is clean. Stepan uses it twice in Chapter 2 — once in the dead of night, barely conscious (the door easing wider out of his way without his noticing), and once in the clear-headed morning, when he does for himself the small courtesies the Shop performed while he slept. [Inference] Like the bedroom and kitchen, it is the Shop's guardian-tier hospitality made domestic, and it is played deniably — Stepan registers comfort, never magic.

### Location
Upstairs in Arthur's Curiosities, directly across the landing from the bedroom; Arthur's study and the locked room lie further along the hall toward its dim end. Grovesend, Oxford County, Ontario.
