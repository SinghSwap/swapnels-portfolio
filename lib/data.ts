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
  email: "swapnel1999@gmail.com",
  location: "India",
  resumeUrl: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/swapnel-singh",
    github: "https://github.com/swapnelsingh",
    email: "mailto:swapnel1999@gmail.com",
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
  paragraphs: [
    "I currently work at ICICI Bank where I drive product delivery for iUniverse — the bank's recruitment and onboarding platform. I own enhancements end-to-end, working across HR, engineering, QA, UX, and business teams to ship improvements that move real metrics.",
    "Beyond my day job, I enjoy finding friction in everyday workflows and building solutions with AI, APIs, automation tools, and no-code systems. Most of the projects below started as a personal annoyance and turned into a shipped product.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "ICICI Bank",
    role: "Manager – Product & Digital Transformation",
    period: "2022 – Present",
    summary:
      "Driving product delivery for iUniverse, the bank's recruitment and onboarding platform.",
    highlights: [
      "Owned end-to-end delivery of enhancements for iUniverse.",
      "Collaborated across HR, engineering, QA, UX, and business teams.",
      "Reduced onboarding turnaround time by 30%.",
      "Reduced support queries by 25%.",
      "Managed API integrations and redesigned user journeys.",
      "Built dashboards and analytics for core business metrics.",
    ],
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
};

export const projects: Project[] = [
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
  },
  {
    slug: "meal-planning-automation",
    title: "Weekly Meal Planning & Grocery Automation",
    tag: "Automation",
    oneLiner:
      "An automated workflow that generates weekly menus and grocery lists and emails them on schedule.",
    problem:
      "Weekly meal planning and grocery tracking consumed unnecessary mental energy — a recurring tax on the week.",
    whyItMattered:
      "Small repetitive decisions accumulate into real cognitive load. Removing them frees attention for things that actually matter.",
    solution:
      "Built an automated workflow that generates weekly menus and procurement lists, then emails them automatically every week — no manual trigger required.",
    role:
      "Designed the automation end-to-end: the prompt logic, the schedule, and the delivery pipeline.",
    features: [
      "AI-generated weekly menus",
      "Auto-compiled grocery procurement lists",
      "Scheduled email delivery",
      "Zero manual upkeep once configured",
    ],
    tools: ["Make.com", "OpenAI", "Email Automation"],
    impact:
      "Eliminated weekly planning effort and improved household decision-making.",
    lesson: "Small repetitive problems deserve product thinking too.",
    accent: "#16a34a",
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

export type Article = {
  title: string;
  blurb: string;
  readTime: string;
  tag: string;
};

export const articles: Article[] = [
  {
    title: "What Working at ICICI Bank Taught Me About Product Management",
    blurb:
      "Shipping inside a large, regulated organization is its own discipline — here's what it taught me about stakeholders, constraints, and momentum.",
    readTime: "6 min read",
    tag: "Career",
  },
  {
    title: "Why Every PM Should Learn APIs",
    blurb:
      "You don't need to write production code, but understanding how systems talk changes the questions you ask and the scope you can imagine.",
    readTime: "5 min read",
    tag: "Craft",
  },
  {
    title: "Automation Is a Superpower",
    blurb:
      "The highest-leverage skill for a modern PM isn't a framework — it's the instinct to automate the repetitive before it compounds.",
    readTime: "4 min read",
    tag: "Productivity",
  },
  {
    title: "Building Products for Yourself Is Underrated",
    blurb:
      "Being your own user collapses the feedback loop to zero. Every project here started as a problem I personally had.",
    readTime: "5 min read",
    tag: "Building",
  },
];

export type TimelineNode = {
  title: string;
  detail: string;
};

export const timeline: TimelineNode[] = [
  { title: "IIT Jammu", detail: "Engineering foundation — first-principles problem solving." },
  { title: "ICICI Bank", detail: "Manager, Product & Digital Transformation." },
  { title: "Product Management Learning", detail: "1000+ hours of frameworks, metrics, and craft." },
  { title: "Building AI Products", detail: "Shipping personal tools, automations, and experiments." },
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
    slug: "grocery-automation",
    title: "Grocery Automation System",
    tag: "Automation",
    accent: "#16a34a",
    summary:
      "A zero-touch weekly system that plans meals and compiles the grocery list for you.",
    problem:
      "Planning the week's meals and the matching grocery list is a small but relentless recurring chore that drains decision energy.",
    user:
      "Busy households that want to eat well without re-deciding the same thing every week.",
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
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];
