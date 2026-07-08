# Portfolio — Projects Section (for review)

The Projects section has two groups. Please review copy quality, clarity,
positioning, credibility, and consistency across all projects.

════════════════════════════════════════════════════════════════════
GROUP 1 — "Problems I built solutions for"
Subtitle: Products I designed, built, and shipped end-to-end outside my day
job — each one started as a problem I personally had.
════════════════════════════════════════════════════════════════════

────────────────────────────────────────────
1. Sunday Basket
Tag: Personal Product   ·   Status: Live   ·   ⭐ Featured
────────────────────────────────────────────
One-liner: An AI-powered weekly meal-planning assistant that cuts grocery costs
and removes the mental effort of deciding what to cook.

Problem: The real cost of weekly groceries wasn't the shopping — it was the ~1
hour of planning beforehand. I kept postponing it, then defaulted to multiple
costly mid-week orders, impulse buys, and wasted ingredients.

Why it mattered: Ordering groceries once a week is meaningfully cheaper, but
only if the planning actually happens. The planning overhead was the single
point of failure between me and consistent, cheaper bulk shopping.

Solution: A Sunday-morning automation generates a 7-day breakfast/lunch/dinner
plan optimized for ingredient reuse, consolidates it into one categorized
grocery list, and emails it before I shop — in under five minutes of my time.

Role: Framed the problem, set the cost-saving hypothesis, scoped the MVP, and
designed the AI prompt and automation workflow end to end.

Tools: Make.com · AI / LLM · Email Automation · Scheduling

Impact: Cut weekly planning from ~1 hour to under 5 minutes, making once-a-week
bulk shopping the easy default — fewer mid-week orders, less impulse spend, less
waste.

What I learned: The bottleneck wasn't the shopping — it was the decision. Solve
the decision, and the habit sticks.

────────────────────────────────────────────
2. AI Job Search Engine
Tag: Personal Product   ·   Status: Live
────────────────────────────────────────────
One-liner: An ATS-integrated engine that pulls PM roles automatically and ranks
them by relevance and fit.

Problem: Finding relevant Product Manager jobs meant visiting hundreds of
company career pages manually, every single day.

Why it mattered: Job hunting is a high-stakes, time-boxed effort. Hours lost to
manual browsing are hours not spent preparing or applying — and great roles get
filled fast.

Solution: It pulls live openings straight from Greenhouse, Lever, and Ashby,
then uses AI to rank each one by relevance and fit — so only roles worth applying
to ever surface, with clean exports to track and act on them.

Role: Owned it end to end — scoped the problem, designed the fit-ranking logic,
and built the ATS integrations and export flows.

Tools: Python · ATS APIs · OpenAI · Embeddings · JSON

Impact: Turned a daily hours-long slog into a minutes-long, ranked shortlist —
signal over volume.

What I learned: A sharper filter beats more listings — signal, not volume, is
what makes a search fast.

────────────────────────────────────────────
3. Spending Coach
Tag: Mobile Product   ·   Status: Prototype
────────────────────────────────────────────
One-liner: An iOS concept that turns raw spending into clear need-vs-want
insights — and tells you what to change.

Problem: Expense trackers tell you what you spent, but rarely give meaningful
insight into how you spend.

Why it mattered: Awareness changes behavior. Raw transaction logs don't —
insight does.

Solution: Classifies spending, splits it into needs vs. wants, and uses AI to
pinpoint exactly where to adjust — insight, not just a ledger.

Role: Defined the feature set, designed the flows, and built a working SwiftUI
prototype.

Tools: SwiftUI · OpenAI

Impact: Reframes 'what did I spend' into 'what should I change' — the decision
most trackers leave to the user.

What I learned: Tracking is table stakes; the product only earns its place when
it tells you what to do next.

────────────────────────────────────────────
4. PM Revision
Tag: Learning Product   ·   Status: Live
────────────────────────────────────────────
One-liner: A personal knowledge system that organizes PM frameworks, metrics,
and case studies for fast recall.

Problem: Preparing for PM interviews meant juggling scattered notes, bookmarks,
and resources across a dozen places.

Why it mattered: Interview prep rewards structured recall. Fragmented knowledge
is hard to revise and easy to forget under pressure.

Solution: A personal knowledge system — frameworks, interview concepts, metrics,
and case studies, locally persisted and instantly searchable, fully offline and
always at hand.

Role: Designed the information architecture and built the full system, front to
back.

Tools: HTML · CSS · JavaScript

Impact: Replaced a dozen scattered note apps with one system I actually revise
from — organized for recall under interview pressure.

What I learned: Structure is a feature: scattered knowledge is useless the
moment you're under pressure.

════════════════════════════════════════════════════════════════════
GROUP 2 — "Product Strategy & Case Studies"
Eyebrow: Showcasing PM thinking
Subtitle: How I think about products I didn't build — strategy, user research,
prioritization, and metrics.
════════════════════════════════════════════════════════════════════

────────────────────────────────────────────
5. Voice Input Adoption on ChatGPT
Tag: Product Case Study   ·   Status: Case Study
────────────────────────────────────────────
One-liner: A 0→1 case study on getting India's typing-first users to actually
use voice — landing on an on-device Privacy Mode.

Problem: India is ChatGPT's largest, most vernacular market, yet urban
professionals default to typing — held back by privacy fears, transcription
errors, social discomfort, and an awareness gap.

Why it mattered: Voice is 3–4× faster and fits a multilingual, multitasking
audience. Whoever earns the voice habit owns the next phase of AI assistants in
India.

Solution: Scoped to the highest-leverage barrier — privacy — with an on-device
Privacy Mode (no training, no memories, user-controlled), surfaced on the home
screen to also close the awareness gap.

Role: Ran the full 0→1 study — market analysis, segmentation and TAM, problem
framing and solution, and system and metric design.

Tools: Product Strategy · User Research · 0→1 · Wireframing

Impact: A privacy-first, shippable path to move India's typing-first users to
voice — with a clear metric model to prove it.

What I learned: Remove the fear behind the mic, and voice becomes the default
input.

────────────────────────────────────────────
6. Swiggy Instamart — Variant Selection Friction
Tag: Product Teardown   ·   Status: Case Study
────────────────────────────────────────────
One-liner: A growth teardown of Instamart's add-to-cart flow, where a
discount-first variant picker quietly leaks conversion on everyday staples.

Problem: Instamart's variant picker pushes discounts right at the moment of
purchase — auto-selecting sold-out packs and hiding when an item is unavailable
— which quietly blocks add-to-cart on its most-bought staples.

Why it mattered: Staple searches ("aloo", "doodh") are the weekly habit that
drives q-commerce frequency. Friction there doesn't cost one order — it taxes
the behavior the whole business model depends on.

Solution: Re-point the picker from showing discounts to completing the purchase:
default to what's actually in stock, make the sold-out state impossible to miss,
and judge success on revenue per session rather than order value.

Role: Independent teardown — session-based root-cause analysis, RICE
prioritization across five fixes, solution design, and a guard-railed
experimentation plan.

Tools: Growth PM · Funnel Analysis · RICE · Experimentation

Impact: A directional estimate of ~₹2,000–3,200 in recoverable GMV per 1,000
staple modal opens — before any trust and retention upside.

What I learned: Optimize for the purchase you can complete, not the discount you
can show.

────────────────────────────────────────────
7. WhatsApp Business Search
Tag: Product Research   ·   Status: Research
────────────────────────────────────────────
One-liner: User research and a product proposal for finding the information
buried in business chats.

Problem: Small businesses struggle to retrieve important information buried
inside long WhatsApp chat histories.

Why it mattered: For a micro-business, the chat thread is the CRM, invoice book,
and order log. Losing information there means losing money.

Solution: Interviews and market sizing pointed to the real fix: not better
search, but per-customer memory that surfaces the right past detail at the right
moment.

Role: Ran the research and strategy — interviews, market sizing, journey
mapping, and the PRD.

Tools: User Research · PRDs · Wireframes · Metrics

Impact: Turned a vague 'search is broken' complaint into a sized, validated
opportunity (~15M reachable businesses) with a shippable proposal.

What I learned: Users didn't need better search — they needed the right context
at the right moment.
