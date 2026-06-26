// -----------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit copy here and it propagates to every section + detail page.
// -----------------------------------------------------------------------------

export const site = {
  name: "Swapnel Singh",
  title: "Product Manager | Product Builder",
  headline: "I build products that solve real problems.",
  subheadline:
    "3+ years driving digital products at ICICI Bank and continuously building AI-powered tools, automations, and product experiments to improve everyday workflows.",
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
  subtitle:
    "Building enterprise products today, preparing to build customer-first products tomorrow.",
  intro:
    "I'm a product builder who came up through enterprise. Over 3+ years at ICICI Bank, I've owned HR-technology platforms used by thousands of employees — and while my title read Manager, the work was squarely Product Management: discovery, stakeholder alignment, prioritization, roadmap execution, and untangling messy user journeys. Now I'm making it official — moving into a dedicated Product Manager role where I can build customer-first products with real, measurable impact.",
  quickFacts: [
    { icon: "experience", label: "Experience", value: "3+ Years" },
    { icon: "company", label: "Company", value: "ICICI Bank" },
    { icon: "education", label: "Education", value: "B.Tech — IIT Jammu" },
    { icon: "goal", label: "Career Goal", value: "Product Manager" },
    { icon: "location", label: "Location", value: "India" },
    {
      icon: "interests",
      label: "Interests",
      value: "AI · Consumer · Product Strategy",
    },
  ],
  principles: [
    {
      icon: "problem",
      title: "Start with the Problem",
      desc: "Understand the user's pain before proposing a solution.",
    },
    {
      icon: "purpose",
      title: "Build with Purpose",
      desc: "Every feature should solve a measurable problem.",
    },
    {
      icon: "systems",
      title: "Think in Systems",
      desc: "Balance user needs, business goals, and constraints.",
    },
    {
      icon: "iterate",
      title: "Learn Through Iteration",
      desc: "Ship, measure, and improve — relentlessly.",
    },
  ],
  currentFocus:
    "Right now I'm sharpening the craft from both sides — owning enterprise products at scale, shipping my own side projects, running user research, and working through structured PM learning — all pointed at stepping into a customer-facing Product Manager role.",
};

// -----------------------------------------------------------------------------
// Professional journey — a four-year progression at ICICI Bank, rendered as an
// interactive vertical timeline. The first entry (current) is highlighted.
// -----------------------------------------------------------------------------

export type JourneyEntry = {
  year: string;
  title: string;
  icon: "platform" | "scale" | "launch" | "transform";
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
    year: "2026",
    title: "Product Owner — UOTM (Unified One Touch Mobile)",
    icon: "platform",
    current: true,
    scope: "Enterprise-wide employee platform",
    scale: "~150,000 employees daily",
    paragraphs: [
      "I own one of ICICI Bank's flagship employee platforms — the primary digital workplace employees live in after they join.",
      "It's the single destination for everyday work: attendance, leave, salary, internal job opportunities, referrals, HR support, and manager approvals. I own it end-to-end — from requirement discovery and roadmap to prioritization, delivery, releases, and post-launch support.",
    ],
    metrics: [
      { label: "Enterprise platform", sub: "The bank's digital workplace" },
      { label: "~150K", sub: "Daily active employees" },
      { label: "End-to-end", sub: "Full product ownership" },
      { label: "Cross-functional", sub: "Stakeholders across the org" },
    ],
    highlight:
      "Owning the platform 150K employees touch every day — the widest scope of my career so far.",
  },
  {
    year: "2025",
    title: "Product Owner — iUniverse",
    icon: "scale",
    scope: "Applicant onboarding platform",
    scale: "Scaling a live product",
    paragraphs: [
      "Led the production launch and continuous evolution of iUniverse, ICICI Bank's applicant onboarding platform.",
      "Owned roadmap execution and journey optimization with HR, Operations, and Engineering — reducing onboarding friction while improving efficiency for internal teams.",
    ],
    detailsLabel: "Outcomes",
    details: [
      "~30% faster onboarding turnaround",
      "~25% fewer support queries",
      "Multiple production releases shipped",
    ],
    highlight: "Turned a fresh launch into a continuously improving product.",
  },
  {
    year: "2024",
    title: "Product Owner — iUniverse (0 → 1 Build)",
    icon: "launch",
    scope: "Greenfield product build",
    scale: "Up to 80,000 applicants / month",
    paragraphs: [
      "Owned end-to-end delivery of iUniverse from early development to production readiness — digitizing the applicant onboarding journey before candidates became employees.",
      "Worked closely with HR, Operations, and Engineering to define requirements, prioritize features, validate workflows, coordinate testing, and manage releases.",
    ],
    detailsLabel: "Ownership",
    details: [
      "Requirement gathering",
      "Journey mapping",
      "Feature prioritization",
      "API integration",
      "UAT",
      "Release management",
    ],
    highlight:
      "Shipped a greenfield onboarding platform supporting high-volume recruitment.",
  },
  {
    year: "2023",
    title: "Product Owner — Employee Verification Transformation",
    icon: "transform",
    scope: "Enterprise workflow redesign",
    scale: "Bank-wide hiring governance",
    paragraphs: [
      "Led a business-critical initiative to redesign the employee background-verification workflow.",
      "Verification used to start only after someone became an employee — so adverse reports could arrive months post-onboarding. I shifted the journey from Employee ID to Applicant ID so verification begins before employee creation, cutting operational risk and improving hiring governance.",
    ],
    detailsLabel: "Ownership",
    details: [
      "Requirement discovery",
      "Process redesign",
      "Stakeholder alignment",
      "Product ownership",
      "UAT",
      "Production deployment",
    ],
    highlight:
      "Solved a business-critical problem by redesigning the workflow — not just digitizing it.",
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
    title: "AI-Powered Job Search Engine",
    tag: "Personal Product",
    oneLiner:
      "An ATS-integrated engine that fetches PM roles automatically and scores them against your resume.",
    problem:
      "Finding relevant Product Manager jobs meant visiting hundreds of company career pages manually, every single day.",
    whyItMattered:
      "Job hunting is a high-stakes, time-boxed effort. Hours lost to manual browsing are hours not spent preparing or applying — and great roles get filled fast.",
    solution:
      "Built a system that integrates with ATS providers — Greenhouse, Lever, and Ashby APIs — to fetch openings automatically, then layers AI-based resume-to-job matching to score each opportunity by fit.",
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
      "Reduced manual job-search effort from hours to minutes, surfacing only roles that actually fit.",
    lesson: "Automation compounds productivity.",
    accent: "#2563eb",
    caseStudySlug: "ai-job-search-engine",
  },
  {
    slug: "meal-planning-automation",
    title: "Sunday Basket",
    tag: "Personal Product",
    oneLiner:
      "An AI-powered weekly meal-planning assistant that cuts grocery costs and removes the mental effort of deciding what to cook.",
    problem:
      "The real cost of weekly groceries wasn't the shopping — it was the ~1 hour of planning beforehand. I kept postponing it, then defaulted to multiple costly mid-week orders, impulse buys, and wasted ingredients.",
    whyItMattered:
      "Ordering groceries once a week is meaningfully cheaper, but only if the planning actually happens. The planning overhead was the single point of failure between me and consistent, cheaper bulk shopping.",
    solution:
      "Built a Sunday-morning automation that generates a 7-day breakfast/lunch/dinner plan optimized for ingredient reuse, consolidates it into one categorized grocery list, and emails it to me before I shop — in under five minutes of my time.",
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
    lesson: "Small repetitive problems deserve product thinking too.",
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
      "Built an offline web application to organize frameworks, interview concepts, metrics, and case studies — all locally persisted and instantly searchable.",
    role:
      "Designed the information architecture and built the full app, front to back.",
    features: [
      "Local-storage persistence (works fully offline)",
      "Framework library",
      "Product case studies",
      "Structured interview preparation",
    ],
    tools: ["HTML", "CSS", "JavaScript"],
    impact: "Created a personal PM knowledge system I actually revise from.",
    lesson: "Knowledge becomes powerful when structured.",
    accent: "#9333ea",
  },
  {
    slug: "whatsapp-business-search",
    title: "WhatsApp Business Search Research",
    tag: "Product Research",
    oneLiner:
      "User research and a product proposal for context-aware information retrieval inside business chats.",
    problem:
      "Small businesses struggle to retrieve important information buried inside long WhatsApp chat histories.",
    whyItMattered:
      "For a micro-business, the chat thread is the CRM, the invoice book, and the order log. Losing information there means losing money.",
    solution:
      "Conducted user research and proposed context-aware information retrieval and customer-memory features, backed by interviews and market sizing.",
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
      "Produced PRDs, wireframes, hypotheses, and success metrics for a context-aware search feature.",
    lesson: "Great products start with understanding users.",
    accent: "#0891b2",
    caseStudySlug: "whatsapp-business-search",
  },
  {
    slug: "personal-finance-ai",
    title: "Personal Finance AI App",
    tag: "Mobile Product",
    oneLiner:
      "An iOS app concept that classifies spending and gives AI-powered need-vs-want insights.",
    problem:
      "Expense trackers tell you what you spent, but rarely give meaningful insight into how you spend.",
    whyItMattered:
      "Awareness changes behavior. Raw transaction logs don't — insight does.",
    solution:
      "Designed an iOS app to classify spending, analyze needs vs. wants, and provide AI-powered recommendations on where to adjust.",
    role:
      "Product designer and builder: defined the feature set, designed the flows, and prototyped in SwiftUI.",
    features: [
      "Automatic category classification",
      "Need vs. Want analysis",
      "Spending distribution charts",
      "AI-generated insights and recommendations",
    ],
    tools: ["SwiftUI", "OpenAI"],
    impact: "A focused tool that turns raw spending into financial awareness.",
    lesson: "AI should simplify financial awareness.",
    accent: "#ea580c",
  },
];

export const productThinking: string[] = [
  "Metrics",
  "AARRR Framework",
  "North Star Metrics",
  "Jobs To Be Done",
  "Prioritization",
  "User Research",
  "Product Analytics",
  "Experimentation",
  "SQL",
  "API Integrations",
  "Agile",
  "Stakeholder Management",
  "Feature Prioritization",
];

export type TimelineNode = {
  title: string;
  detail: string;
};

export const timeline: TimelineNode[] = [
  { title: "IIT Jammu", detail: "Engineering foundation — first-principles problem solving." },
  { title: "ICICI Bank", detail: "Manager, Product & Digital Transformation." },
  { title: "Transitioning into Startup PM Roles", detail: "Where building and shipping move fastest." },
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
    accent: "#0891b2",
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
      "An AI-powered weekly meal-planning assistant I built to cut my grocery costs and eliminate the mental effort of deciding what to cook.",
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
