// -----------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit copy here and it propagates to every section + detail page.
// -----------------------------------------------------------------------------

export const site = {
  name: "Swapnel Singh",
  title: "Product Manager | Product Builder",
  headline: "Enterprise products by profession. AI products by habit.",
  subheadline:
    "I build enterprise HR products at ICICI Bank. Outside work, I build AI products and automations that solve everyday problems.",
  email: "reachtoswapnelsingh@gmail.com",
  location: "India",
  resumeUrl: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/pm-swapnilsingh",
    github: "https://github.com/swapnelsingh",
    email: "mailto:reachtoswapnelsingh@gmail.com",
  },
  url: "https://swapnelsingh.com",
  philosophy: "Good products eliminate repetitive work and make decisions easier.",
};

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Product Experiments" },
  { value: 1000, suffix: "+", label: "Hours of PM Learning" },
];

export const about = {
  subtitle: "Enterprise product experience, sharpened by building my own.",
  intro:
    "I'm a product builder with 3+ years of experience leading enterprise HR technology initiatives at ICICI Bank. I partner with business stakeholders and engineering teams to prioritize features, define requirements, improve user journeys, and drive product delivery for platforms used by thousands of employees. I'm now looking to bring that enterprise product experience to a dedicated Product Manager role, building customer-centric products with measurable business impact.",
  quickFacts: [
    {
      icon: "experience",
      label: "Experience",
      value: "3+ Years in Product Delivery",
    },
    { icon: "company", label: "Company", value: "ICICI Bank (Enterprise)" },
    {
      icon: "workedon",
      label: "Worked On",
      value: "Recruitment · Onboarding · Internal HR Platforms",
    },
    {
      icon: "interests",
      label: "Interests",
      value: "AI Products · Consumer Tech · Platform Products",
    },
    { icon: "education", label: "Education", value: "B.Tech — IIT Jammu" },
    {
      icon: "certification",
      label: "Certification",
      value: "NextLeap PM Fellowship",
    },
  ],
  principles: [
    {
      icon: "problem",
      title: "User-Centric Thinking",
      desc: "Every roadmap starts with understanding user pain before discussing solutions.",
    },
    {
      icon: "purpose",
      title: "Business Impact",
      desc: "Prioritize features that create measurable value for users and the business.",
    },
    {
      icon: "systems",
      title: "Data-Informed Decisions",
      desc: "Combine user research, analytics, and stakeholder input to make better product decisions.",
    },
    {
      icon: "iterate",
      title: "Execution Excellence",
      desc: "Break ambiguity into clear requirements and deliver products through cross-functional collaboration.",
    },
  ],
  currentFocus:
    "Building products beyond work, conducting user research, and strengthening my product thinking through real-world case studies and hands-on projects. I'm focused on applying my enterprise product experience to build customer-centric products in a product-first environment.",
};

// -----------------------------------------------------------------------------
// Professional journey — a four-year progression at ICICI Bank, rendered as an
// interactive vertical timeline. The first entry (current) is highlighted.
// -----------------------------------------------------------------------------

export type JourneyEntry = {
  year: string;
  title: string;
  icon: "platform" | "scale" | "launch" | "transform";
  /** Narrative stage label shown above the year (the story arc). */
  stage?: string;
  /** Renders the large, emphasized card — the hero of the story. */
  hero?: boolean;
  /** Marks the actual current role (the "Current" badge). */
  current?: boolean;
  scope?: string;
  scale?: string;
  paragraphs: string[];
  /** Prominent stat/metric cards (used by the highlighted current role). */
  metrics?: { label: string; sub: string }[];
  /** Secondary detail chips (outcomes or areas of ownership). */
  detailsLabel?: string;
  details?: string[];
  /** One-line takeaway shown as a highlight strip. */
  highlight: string;
};

export const journey: JourneyEntry[] = [
  {
    year: "2023",
    stage: "Business problem solving",
    title: "Manager — Background Verification Transformation",
    icon: "transform",
    scope: "Enterprise workflow redesign",
    scale: "Bank-wide hiring governance",
    paragraphs: [
      "Led a background-verification transformation to fix a costly timing problem: checks only began after someone was hired, so red flags surfaced months too late.",
      "I redesigned the journey to start verification at the applicant stage — before hiring — reducing operational risk, improving hiring governance, and catching issues far earlier.",
    ],
    detailsLabel: "Focus",
    details: [
      "Journey redesign",
      "Workflow optimization",
      "Stakeholder alignment",
      "Product strategy",
    ],
    highlight:
      "Solved a business-critical problem by redesigning the workflow — not just digitizing it.",
  },
  {
    year: "2024",
    stage: "0 → 1 product build",
    title: "Manager — Recruitment & Onboarding Platform (0 → 1 Build)",
    icon: "launch",
    scope: "Greenfield product build",
    scale: "Up to 80,000 candidates / month",
    paragraphs: [
      "Built ICICI Bank's recruitment & onboarding platform from the ground up — digitizing a manual, high-volume journey for up to 80,000 candidates a month before they ever joined.",
      "Mapping the full candidate journey came first; from there I gathered requirements across HR, operations, and engineering, prioritized what to build first, and drove releases as the product went from zero to production.",
    ],
    detailsLabel: "Ownership",
    details: [
      "Journey mapping",
      "Requirement gathering",
      "Prioritization",
      "Release management",
      "Cross-functional execution",
      "Stakeholder management",
    ],
    highlight:
      "Took a greenfield platform for high-volume recruitment from a blank page to production.",
  },
  {
    year: "2025",
    stage: "Product scaling & optimization",
    title: "Manager — Recruitment & Onboarding Platform",
    icon: "scale",
    hero: true,
    scope: "Recruitment & onboarding platform",
    scale: "Scaling a live product",
    paragraphs: [
      "Led the launch and continuous improvement of the recruitment & onboarding platform, owning the candidate journey from offer to first day — for candidates, HR teams, hiring managers, and operations.",
      "I set a single North Star — how many candidates are fully ready on day one — and used it to prioritize the roadmap, tracking a few leading signals across the journey to catch drop-off early and decide what to build next.",
    ],
    metrics: [
      { label: "North Star", sub: "Day-1 readiness" },
      { label: "~30% faster", sub: "Onboarding turnaround" },
      { label: "~25% fewer", sub: "Support queries" },
      { label: "Continuous iteration", sub: "Roadmap · Prioritization" },
    ],
    highlight:
      "Turned a fresh launch into a metric-driven product — a clear North Star and continuous iteration kept improving the candidate experience.",
  },
  {
    year: "2026",
    stage: "Enterprise platform ownership",
    title: "Manager — Employee Experience Platform",
    icon: "platform",
    current: true,
    scope: "Enterprise employee experience platform",
    scale: "150K+ employees",
    paragraphs: [
      "Expanded into broader enterprise ownership: the product roadmap and delivery for ICICI Bank's employee experience platform — the digital workplace ~150,000 employees rely on every day.",
      "The real challenge is balancing competing HR and business priorities at that scale. I run discovery with stakeholders, prioritize the roadmap by operational impact, turn ambiguity into clear requirements, drive delivery through release, and iterate on adoption.",
    ],
    detailsLabel: "Ownership",
    details: [
      "Product strategy",
      "Roadmap",
      "Prioritization",
      "Stakeholder management",
      "Delivery & releases",
      "150K+ employees",
    ],
    highlight:
      "Expanded from product delivery into enterprise-scale ownership — the roadmap and delivery for the platform 150K+ employees depend on daily.",
  },
];

export type Project = {
  slug: string;
  title: string;
  tag: string;
  oneLiner: string;
  problem: string;
  whyItMattered: string;
  solution: string;
  role: string;
  features?: string[];
  tools: string[];
  impact: string;
  lesson: string;
  accent: string; // hex used in the generated screenshot mock
  links?: { label: string; href: string }[];
  caseStudySlug?: string; // if set, the card links to this rich case study instead
};

export const projects: Project[] = [
  {
    slug: "instamart-variant-selection",
    title: "Swiggy Instamart — Variant Selection Friction",
    tag: "Product Teardown",
    oneLiner:
      "A growth-PM teardown of the grocery add-to-cart funnel, where a discount-optimized variant picker quietly leaks conversion, trust, and repeat demand.",
    problem:
      "Instamart's variant modal optimizes for discount/AOV signaling at the moment of purchase intent — auto-selecting sold-out packs and hiding the sold-out state — which suppresses add-to-cart conversion on the highest-frequency staple category.",
    whyItMattered:
      "Staple searches (\"aloo\", \"doodh\") are the weekly habit loop that drives q-commerce frequency. Friction there doesn't cost one line item — it taxes the behavior the entire business model depends on.",
    solution:
      "Re-point the variant picker from 'expose discounts' to 'complete the purchase': availability-first defaulting + an unmissable single-source-of-truth sold-out state, with a chip reorder riding along — all gated on revenue-per-session, not AOV.",
    role:
      "Independent product teardown: observation, root-cause analysis, RICE prioritization, solution design, and an experimentation plan.",
    features: [
      "Funnel + root-cause analysis from a recorded session",
      "RICE prioritization across five interventions",
      "Six-test experimentation plan with guardrails",
      "North Star + leading/lagging metric design",
    ],
    tools: ["Growth PM", "Funnel Analysis", "RICE", "Experimentation"],
    impact:
      "Directionally ~₹2,000–3,200 of recoverable GMV at risk per 1,000 staple modal opens, before trust and retention effects.",
    lesson: "Optimize for the purchase you can complete, not the discount you can show.",
    accent: "#fc8019",
    caseStudySlug: "instamart-variant-selection",
  },
  {
    slug: "ai-job-search-engine",
    title: "AI Job Search Engine",
    tag: "Personal Product",
    oneLiner:
      "An ATS-integrated engine that pulls PM roles automatically and scores each one against your resume.",
    problem:
      "Finding relevant Product Manager jobs meant visiting hundreds of company career pages manually, every single day.",
    whyItMattered:
      "Job hunting is a high-stakes, time-boxed effort. Hours lost to manual browsing are hours not spent preparing or applying — and great roles get filled fast.",
    solution:
      "It pulls live openings straight from Greenhouse, Lever, and Ashby, then scores each one against your resume with AI fit-matching — so you only ever see roles worth applying to. I built the integrations, the matching logic, and the export flows end to end.",
    role:
      "Sole product owner and builder: defined the scope, designed the matching logic, built the integrations, and shipped the export workflows.",
    features: [
      "Multi-ATS integration (Greenhouse, Lever, Ashby)",
      "Smart job filtering by role, level, and location",
      "AI resume-to-job fit scoring",
      "CSV exports for tracking applications",
      "JSON exports for downstream automation",
    ],
    tools: ["Python", "ATS APIs", "OpenAI", "Embeddings", "JSON"],
    impact:
      "Turned a daily hours-long slog into a minutes-long, ranked shortlist — signal over volume.",
    lesson: "A sharper filter beats more listings — signal, not volume, is what makes a search fast.",
    accent: "#2563eb",
    caseStudySlug: "ai-job-search-engine",
  },
  {
    slug: "meal-planning-automation",
    title: "Sunday Basket",
    tag: "Personal Product",
    oneLiner:
      "A weekly meal-planning assistant that cuts grocery costs and removes the mental effort of deciding what to cook.",
    problem:
      "The real cost of weekly groceries wasn't the shopping — it was the ~1 hour of planning beforehand. I kept postponing it, then defaulted to multiple costly mid-week orders, impulse buys, and wasted ingredients.",
    whyItMattered:
      "Ordering groceries once a week is meaningfully cheaper, but only if the planning actually happens. The planning overhead was the single point of failure between me and consistent, cheaper bulk shopping.",
    solution:
      "A Sunday-morning automation generates a 7-day breakfast/lunch/dinner plan optimized for ingredient reuse, consolidates it into one categorized grocery list, and emails it before I shop — in under five minutes of my time.",
    role:
      "Sole product manager and builder: framed the problem, set the hypothesis, scoped the MVP, designed the prompt and workflow, and shipped it for myself.",
    features: [
      "Auto-generated 7-day meal plan (breakfast, lunch, dinner)",
      "Ingredient-reuse optimization across meals to cut waste",
      "One consolidated, de-duplicated grocery list",
      "Groceries grouped into shopping categories with rough quantities",
      "Emailed automatically every Sunday before I shop",
    ],
    tools: ["Make.com", "AI / LLM", "Email Automation", "Scheduling"],
    impact:
      "Cut weekly planning from ~1 hour to under 5 minutes, making once-a-week bulk shopping the easy default — fewer mid-week orders, less impulse spend, less waste.",
    lesson: "The bottleneck wasn't the shopping — it was the decision. Solve the decision, and the habit sticks.",
    accent: "#16a34a",
    caseStudySlug: "sunday-basket",
  },
  {
    slug: "pm-revision",
    title: "PM Revision",
    tag: "Learning Product",
    oneLiner:
      "An offline web app that organizes PM frameworks, metrics, and case studies into one knowledge system.",
    problem:
      "Preparing for PM interviews meant juggling scattered notes, bookmarks, and resources across a dozen places.",
    whyItMattered:
      "Interview prep rewards structured recall. Fragmented knowledge is hard to revise and easy to forget under pressure.",
    solution:
      "An offline web app that keeps frameworks, interview concepts, metrics, and case studies locally persisted and instantly searchable — one place, always available.",
    role:
      "Designed the information architecture and built the full app, front to back.",
    features: [
      "Local-storage persistence (works fully offline)",
      "Framework library",
      "Product case studies",
      "Structured interview preparation",
    ],
    tools: ["HTML", "CSS", "JavaScript"],
    impact:
      "Replaced a dozen scattered note apps with one system I actually revise from — organized for recall under interview pressure.",
    lesson: "Structure is a feature: scattered knowledge is useless the moment you're under pressure.",
    accent: "#9333ea",
  },
  {
    slug: "whatsapp-business-search",
    title: "WhatsApp Business Search",
    tag: "Product Research",
    oneLiner:
      "User research and a product proposal for context-aware information retrieval inside business chats.",
    problem:
      "Small businesses struggle to retrieve important information buried inside long WhatsApp chat histories.",
    whyItMattered:
      "For a micro-business, the chat thread is the CRM, the invoice book, and the order log. Losing information there means losing money.",
    solution:
      "Interviews and market sizing pointed to the real fix: not better search, but context-aware retrieval and per-customer memory that surface the right past detail at the right moment.",
    role:
      "Product researcher and strategist: ran interviews, sized the market, mapped journeys, and wrote the PRD.",
    features: [
      "User interviews with small-business owners",
      "TAM / SAM / SOM market sizing",
      "Competitive and market analysis",
      "User journey mapping",
      "Feature prioritization",
    ],
    tools: ["User Research", "PRDs", "Wireframes", "Metrics"],
    impact:
      "Turned a vague 'search is broken' complaint into a sized, validated opportunity (~15M reachable businesses) with a shippable feature proposal.",
    lesson: "Users didn't need better search — they needed the right context surfaced at the right moment.",
    accent: "#128c7e",
    caseStudySlug: "whatsapp-business-search",
  },
  {
    slug: "personal-finance-ai",
    title: "Personal Finance AI",
    tag: "Mobile Product",
    oneLiner:
      "An iOS concept that classifies spending and turns it into clear need-vs-want insights.",
    problem:
      "Expense trackers tell you what you spent, but rarely give meaningful insight into how you spend.",
    whyItMattered:
      "Awareness changes behavior. Raw transaction logs don't — insight does.",
    solution:
      "An iOS concept that classifies spending, splits it into needs vs. wants, and uses AI to point out exactly where to adjust — insight, not just a ledger.",
    role:
      "Product designer and builder: defined the feature set, designed the flows, and prototyped in SwiftUI.",
    features: [
      "Automatic category classification",
      "Need vs. Want analysis",
      "Spending distribution charts",
      "AI-generated insights and recommendations",
    ],
    tools: ["SwiftUI", "OpenAI"],
    impact:
      "Reframes 'what did I spend' into 'what should I change' — the decision most trackers leave to the user.",
    lesson: "Tracking is table stakes; the product only earns its place when it tells you what to do next.",
    accent: "#ea580c",
  },
  {
    slug: "chatgpt-voice-adoption",
    title: "Voice Input Adoption on ChatGPT",
    tag: "Product Case Study",
    oneLiner:
      "A 0→1 case study on getting India's typing-first users to actually use voice — landing on an on-device Privacy Mode.",
    problem:
      "India is ChatGPT's largest, most vernacular market, yet urban professionals default to typing — held back by privacy fears, transcription errors, social discomfort, and an awareness gap.",
    whyItMattered:
      "Voice is 3–4× faster and fits a multilingual, multitasking audience. Whoever earns the voice habit owns the next phase of AI assistants in India.",
    solution:
      "Scoped to the highest-leverage barrier — privacy — and proposed an on-device Privacy Mode (no training, no memories, user-controlled), surfaced from the home screen to also close the awareness gap.",
    role:
      "A full PM case study: market analysis, segmentation & TAM, problem framing & solution, and system design & metrics.",
    features: [
      "Market & opportunity analysis (India voice landscape)",
      "Competitive UX teardown (ChatGPT vs Alexa vs Assistant)",
      "TAM funnel + a 75-user research study",
      "Privacy Mode solution, wireframes & system design",
      "North Star + KPI metric framework",
    ],
    tools: ["Product Strategy", "User Research", "0→1", "Wireframing"],
    impact:
      "A privacy-first, shippable path to move India's typing-first users to voice — with a clear metric model to prove it.",
    lesson: "Remove the fear behind the mic, and voice becomes the default input.",
    accent: "#6366f1",
    caseStudySlug: "chatgpt-voice-adoption",
  },
];

export const productThinking: string[] = [
  "North Star Metrics",
  "AARRR Funnels",
  "Jobs To Be Done",
  "Prioritization (RICE)",
  "User Research",
  "Experimentation & A/B Testing",
  "Product Analytics",
  "Stakeholder Management",
  "API Integrations",
  "SQL",
];

// -----------------------------------------------------------------------------
// Long-form case studies (expandable detail pages)
// -----------------------------------------------------------------------------

export type CaseStudy = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  accent: string;
  problem: string;
  user: string;
  painPoints: string[];
  userJourney: string[];
  insights: string[];
  opportunity: string;
  solution: string;
  wireframes: string; // descriptive placeholder
  metrics: string[];
  tradeoffs: string[];
  impact: string;
  futureImprovements: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "chatgpt-voice-adoption",
    title: "Getting India to Talk to ChatGPT",
    tag: "Product Case Study",
    accent: "#6366f1",
    summary:
      "A case study on increasing voice-input adoption on ChatGPT in India — landing on an on-device Privacy Mode.",
    problem:
      "Urban professionals (25–34) use ChatGPT often but prefer typing over voice — held back by privacy concerns, transcription errors, social discomfort, and an awareness gap.",
    user:
      "Urban, prime-working-age professionals (25–54) in India who use ChatGPT for work and speak Hindi/regional languages.",
    painPoints: [
      "Fear that voice data is stored or used for training.",
      "Transcription errors concentrated among regional/accented speakers.",
      "Social discomfort speaking to AI in public.",
      "Many don't know voice input exists or that it's multilingual.",
    ],
    userJourney: [
      "Opens ChatGPT for a work task.",
      "Sees a mic, but defaults to typing out of habit and distrust.",
      "Typing in a regional language is slow.",
      "Voice stays unused despite being 3–4× faster.",
    ],
    insights: [
      "ChatGPT's voice is more capable than rivals — but doesn't feel voice-first.",
      "Privacy is the highest-leverage barrier to remove first.",
      "Awareness and discoverability matter as much as capability.",
    ],
    opportunity:
      "India is ChatGPT's largest market and overwhelmingly vernacular; voice is the natural input, but trust must come first.",
    solution:
      "A dedicated Privacy Mode with on-device speech-to-text — no training, no memories, user-controlled — surfaced from the home screen to also close the awareness gap.",
    wireframes:
      "Home screen with voice surfaced; a Privacy Mode intro card; a system diagram routing audio on-device vs cloud.",
    metrics: [
      "% sessions with voice input (North Star)",
      "% Privacy Mode transcriptions",
      "Voice error rate and accuracy",
      "Fallback coverage on unsupported devices",
    ],
    tradeoffs: [
      "On-device STT trades some accuracy/quality for privacy — cloud fallback covers gaps.",
      "Scoped out accuracy, hands-free, and onboarding to focus on the privacy barrier.",
    ],
    impact:
      "A privacy-first path to shifting India's typing-first users to voice — the input that fits a vernacular, multitasking audience.",
    futureImprovements: [
      "Hinglish / code-switching accuracy.",
      "Hands-free and activation-phrase modes.",
      "A full user-facing voice-data control panel.",
    ],
  },
  {
    slug: "instamart-variant-selection",
    title: "Swiggy Instamart — Variant Selection Friction",
    tag: "Product Teardown",
    accent: "#fc8019",
    summary:
      "A growth-PM teardown of the grocery add-to-cart funnel, where a discount-optimized variant picker quietly leaks conversion, trust, and repeat demand.",
    problem:
      "Instamart's variant modal optimizes for discount/AOV signaling at the moment of purchase intent, suppressing add-to-cart conversion and eroding inventory trust on the highest-frequency staple category.",
    user:
      "A returning quick-commerce user restocking a staple (e.g. 'Aloo'), mid-way to a savings threshold.",
    painPoints: [
      "Tapping + opens a configurator instead of adding to cart.",
      "The correctly-selected default renders last (alphabetical chips).",
      "Default auto-selects the highest-discount pack even when it's sold out.",
      "Sold-out state hides in a thumb-occluded bottom button while the tile looks available.",
    ],
    userJourney: [
      "Search 'Aloo' → dense staple grid.",
      "Tap + → variant modal opens (not a direct add).",
      "Selected type sits rightmost → user doubts the selection.",
      "Explore another chip → lands on a sold-out highest-discount pack.",
      "Sold-out signal hidden under the thumb → confusion.",
      "Backtrack to recover an addable state, then ADD — ~10 taps for one ₹29 staple.",
    ],
    insights: [
      "A correct default that looks wrong is as costly as a wrong default.",
      "Optimizing the default for discount is negative-EV when stock is ignored.",
      "Inventory accuracy and inventory communication are different products.",
      "This is the habit category — the blast radius is retention, not one cart.",
    ],
    opportunity:
      "Re-point the variant picker from 'expose discounts' to 'complete the purchase' on the highest-frequency category — one of the cheaper high-leverage interventions in the grocery funnel.",
    solution:
      "Ship availability-first defaulting + an unmissable single-source-of-truth sold-out state as one release, with a near-zero-effort chip reorder riding along; gate everything on revenue-per-session, not AOV.",
    wireframes:
      "Selected chip leads, in-stock default, redundant sold-out signals on tile + inline + button.",
    metrics: [
      "Successful staple purchases per session (North Star)",
      "Modal→ADD conversion / OOS-default rate",
      "Chip-backtrack rate and time-to-cart",
      "Revenue per session (with AOV as a guardrail)",
    ],
    tradeoffs: [
      "Availability-first defaulting slightly lowers exposure of high-discount large packs — AOV is the standing guardrail.",
      "RICE ranks the cheap chip reorder highest, but it protects no sellable GMV — ship it alongside the strategic bet, not instead of it.",
      "The full one-tap-add restructure has the highest ceiling but 4× the effort and real AOV risk — sequenced as the next bet.",
    ],
    impact:
      "Directionally ~₹2,000–3,200 of recoverable GMV at risk per 1,000 staple modal opens, before trust and retention effects — the feature built to raise basket value is shrinking it in the sold-out case.",
    futureImprovements: [
      "One-tap add with a smart in-stock default (run after the availability foundation).",
      "Graceful OOS recovery: 'Notify me' + a live substitute rail.",
      "Last-purchased default for returning users on habit SKUs.",
    ],
  },
  {
    slug: "ai-job-search-engine",
    title: "AI Job Search Engine",
    tag: "Personal Product",
    accent: "#2563eb",
    summary:
      "From hours of manual career-page browsing to a minutes-long, AI-scored shortlist.",
    problem:
      "Relevant Product Manager roles are scattered across hundreds of company career pages, each running a different ATS. Finding good-fit roles meant repetitive manual browsing with no way to compare fit objectively.",
    user:
      "Active job seekers — specifically PMs — who value their time and want signal over noise.",
    painPoints: [
      "Hundreds of career pages to check, each formatted differently.",
      "No objective way to compare a role against your own background.",
      "Roles get filled before you even find them.",
      "Application tracking lives in messy spreadsheets.",
    ],
    userJourney: [
      "Decide to look for a new role.",
      "Open dozens of company career sites one by one.",
      "Skim each listing, guessing at fit.",
      "Manually copy promising roles into a spreadsheet.",
      "Repeat daily to catch new postings.",
    ],
    insights: [
      "Most companies expose jobs through a handful of ATS providers (Greenhouse, Lever, Ashby) with consistent APIs.",
      "Fit is a similarity problem — embeddings can score resume-to-role match far faster than reading.",
      "The real value is filtering OUT noise, not surfacing more roles.",
    ],
    opportunity:
      "If openings can be fetched programmatically and scored against a resume, the entire daily browsing ritual collapses into a single ranked list.",
    solution:
      "A Python engine that pulls live openings from ATS APIs, applies a title/level gate, then re-ranks by semantic similarity between the resume and each job description. Results export to CSV and JSON.",
    wireframes:
      "Ranked job feed with a fit score chip per role, filters for level and location, and an export bar.",
    metrics: [
      "Time-to-shortlist (hours → minutes)",
      "Precision of surfaced roles (relevant / total)",
      "Number of qualified roles found per session",
    ],
    tradeoffs: [
      "Embedding-based matching is fuzzy — a hard title gate is needed to keep results in-discipline.",
      "ATS coverage is broad but not total; some companies self-host.",
      "Freshness vs. API rate limits — data is refreshed in scheduled batches.",
    ],
    impact:
      "Cut daily job-search effort from hours to minutes and replaced guesswork with an objective fit score.",
    futureImprovements: [
      "Auto-tailor the resume per role.",
      "One-click apply where ATS APIs allow it.",
      "Alerting when a high-fit role is posted.",
    ],
  },
  {
    slug: "whatsapp-business-search",
    title: "WhatsApp Business Search",
    tag: "Product Research",
    accent: "#128c7e",
    summary:
      "Discovery and a product proposal for retrieving information buried inside business chats.",
    problem:
      "Small businesses run their operations inside WhatsApp, but the chat thread becomes an un-searchable archive. Critical details — prices quoted, order specifics, customer preferences — get lost.",
    user:
      "Owners of small and micro businesses who use WhatsApp Business as their primary customer channel.",
    painPoints: [
      "Important details are buried in long, unstructured threads.",
      "No memory of a returning customer's history or preferences.",
      "Scrolling to find one old message wastes time during a live conversation.",
      "Native search is keyword-only and brittle.",
    ],
    userJourney: [
      "Customer messages with a question or order.",
      "Owner vaguely remembers prior context.",
      "Owner scrolls back through hundreds of messages.",
      "Often gives up and re-asks the customer.",
      "Customer experience suffers; information is lost.",
    ],
    insights: [
      "For a micro-business, the chat IS the CRM, invoice book, and order log.",
      "The need isn't more search — it's context-aware retrieval and customer memory.",
      "Trust and privacy are non-negotiable for any feature touching chats.",
    ],
    opportunity:
      "A context-aware retrieval layer that surfaces the right past information at the right moment — and remembers each customer — without the owner having to organize anything.",
    solution:
      "Proposed context-aware information retrieval plus a lightweight customer-memory feature, validated through interviews and sized with TAM/SAM/SOM, delivered as PRDs and wireframes.",
    wireframes:
      "Inline 'recall' panel above the keyboard surfacing relevant past messages, plus a per-customer summary card.",
    metrics: [
      "Retrieval success rate (found vs. re-asked)",
      "Time-to-find an old detail",
      "Repeat-customer recognition rate",
      "Feature adoption among business accounts",
    ],
    tradeoffs: [
      "Privacy expectations cap how aggressively chats can be processed.",
      "On-device vs. cloud retrieval trades capability against trust.",
      "Scope creep risk — memory can balloon into a full CRM.",
    ],
    impact:
      "Delivered PRDs, wireframes, hypotheses, and success metrics — a research-grounded case for a high-value feature.",
    futureImprovements: [
      "Prototype on-device retrieval for privacy.",
      "Test customer-summary cards with real owners.",
      "Define guardrails for sensitive information.",
    ],
  },
  {
    slug: "sunday-basket",
    title: "Sunday Basket",
    tag: "Personal Product",
    accent: "#16a34a",
    summary:
      "A weekly meal-planning assistant I built to cut my grocery costs and eliminate the mental effort of deciding what to cook.",
    problem:
      "The real cost of weekly groceries wasn't the shopping — it was the ~1 hour of planning beforehand that I kept postponing, which pushed me into costly mid-week orders, impulse buys, and wasted ingredients.",
    user:
      "Me, first — a working professional who wanted the savings of once-a-week bulk shopping without the weekly planning tax.",
    painPoints: [
      "Deciding 'what's for dinner' over and over.",
      "Forgetting items, then making extra store trips.",
      "Meal variety drifts toward the same few defaults.",
      "Planning always lands at the most inconvenient time.",
    ],
    userJourney: [
      "Realize it's time to plan the week.",
      "Brainstorm meals from scratch (again).",
      "Translate meals into a shopping list by hand.",
      "Inevitably miss an ingredient.",
      "Repeat every single week.",
    ],
    insights: [
      "The task is perfectly recurring and rule-based — ideal for automation.",
      "Delivery timing matters: the plan must arrive before the shopping trip.",
      "Removing the decision matters more than optimizing the menu.",
    ],
    opportunity:
      "If a system generates the menu and list and delivers them on schedule, the entire chore disappears from the household's mental load.",
    solution:
      "A Make.com workflow that prompts an AI model for a weekly menu, compiles the procurement list, and emails both automatically on a fixed schedule.",
    wireframes:
      "A clean weekly email: menu on top, categorized grocery checklist below.",
    metrics: [
      "Weekly planning time saved",
      "Reduction in forgotten-item store trips",
      "Meal variety over time",
      "Consistency of on-time delivery",
    ],
    tradeoffs: [
      "Less spontaneity vs. the structured plan.",
      "AI menus occasionally need a manual tweak.",
      "Fixed schedule vs. on-demand flexibility.",
    ],
    impact:
      "Removed a recurring weekly chore and improved household decision-making — set once, runs forever.",
    futureImprovements: [
      "Pantry-aware lists that skip what's already stocked.",
      "Dietary-preference profiles.",
      "Direct hand-off to a grocery-delivery cart.",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];
