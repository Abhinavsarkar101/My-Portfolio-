export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  notes: string[];
}

export interface CertificationItem {
  name: string;
  year: string;
}

export interface ProductModule {
  title: string;
  description: string;
  details: string[];
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductScreenSpec {
  id: string;
  label: string;
  caption: string;
}

export interface ProductItem {
  id: 'compass' | 'signaliq' | 'pmpeak';
  slug: string;
  name: string;
  repoName: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  problemSolved: string;
  githubUrl: string;
  demoUrl: string;
  secondaryDemoUrl?: string;
  techStack: string[];
  keyHighlights: string[];
  modules: ProductModule[];
  architectureSummary: string[];
  screens: ProductScreenSpec[];
  faqs: ProductFAQ[];
}

export const PROFILE = {
  name: 'Abhinav Sarkar',
  role: 'Associate Product Manager',
  location: 'Bengaluru, Karnataka',
  email: 'abhinavsarkar121@gmail.com',
  phone: '9630435371',
  linkedin: 'https://www.linkedin.com/in/abhinav-sarkar-product-manager/',
  github: 'https://github.com/Abhinavsarkar101',
  typingPhrases: [
    'Hi, I am Abhinav.',
    'I am a Product Manager.',
    'I build AI-native products & LLM evals.',
    'I own enterprise telecom workflows & 0-to-1 tools.',
  ],
  summary:
    'As a product manager at Tecnotree, promoted from intern to Senior Product Management Consultant, I own Task Management workflows (DAM), Lead to Quote creation product (DLPM), and CRM product across 5+ telecom operators in Africa and the Middle East. My work covers the full lifecycle from requirements, backlog, and roadmap to UAT and release, collaborating closely with Solution Consultants, Product Development, QA, and SI teams. Earlier, I founded Shoppz.co, a D2C apparel brand, while in college.',
};

export const DOMAIN_PILLARS = [
  {
    index: '01',
    title: 'Enterprise Telecom B2B',
    detail: 'Owning DAM, DLPM & CRM across 6+ operators in Africa & Middle East, 100+ change requests, and 4 quarterly releases.',
  },
  {
    index: '02',
    title: 'AI & LLM Product Systems',
    detail: 'Shipped GPT-3.5 RAG chatbot with document chunking and internal PRD/user-story LLM assistant backed by AI evals.',
  },
  {
    index: '03',
    title: '0-to-1 Products & D2C',
    detail: 'Built Compass, SignalIQ, and PMPeak from concept to live deployment, plus founded Shoppz.co (5K+ IG followers, ₹40K sales).',
  },
];

export const KEY_HIGHLIGHTS = [
  { label: 'Telecom Operators', value: '6+' },
  { label: 'Change Requests Delivered', value: '100+' },
  { label: 'Requirements Groomed', value: '120+' },
  { label: 'Customer Demos & KT Sessions', value: '15+' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tecnotree',
    role: 'Senior Product Management Consultant',
    company: 'Tecnotree Corporation',
    period: 'Jun 2024 – Present',
    location: 'Bengaluru, Karnataka',
    summary:
      'Promoted from intern / management trainee to Senior Product Management Consultant, owning requirements, backlogs, roadmaps, and AI-enabled workflows across Task Management (DAM), Lead-to-Quote (DLPM), and CRM products.',
    highlights: [
      'Owned Task Management (DAM) requirements and delivery across 5 telecom operators (MTN Zambia, MTN Cameroon, Airtel Africa, Zain, Umniah), covering non-GSM workflows across 4+ LOBs and improving task traceability.',
      'Led the end-to-end Task Management revamp for 2 new portals, adding clickable KPI dashboards, a RAG chatbot, Checker-Maker controls, SDK email approvals, and email OTP to speed up manual approvals and strengthen audit compliance.',
      'Owned end-to-end Lead generation to onboarding product called DLPM for mobility requirements for Umniah, defining 10+ core capabilities that streamlined account-manager workflows and reduced manual reporting effort.',
      'Managed 100+ change requests across telecom operators including MTN Zambia, MTN Ghana, UJ, Zain, and MTN South Africa, translating Solution Consultant and Business Analyst requirements into sprint-ready JIRA stories.',
      'Owned backlog items across all 3 products for 6+ telecom operators and the quarterly roadmap behind 4 releases; ran grooming for 120+ requirements over 2 quarters along with estimation, sprint planning, and retrospectives.',
      'Ran 15+ customer-facing demos and knowledge-transfer sessions for 3+ internal teams, aligning Solution Consultants, Development, SI teams, and clients.',
      'As management trainee, translated 25+ business requirements into functional specs, user stories, epics, wireframes, and JIRA features, and owned quarterly feature documentation for Lead-to-Quote and Task Management.',
      'Drove the quarterly product newsletter end to end with the VP, Directors, and Senior Product Managers, publishing product documentation to 1000+ employees.',
      'Owned the end-to-end build of a RAG-based product chatbot for Task Management on GPT-3.5 using document chunking, role-based system prompts, and LLM evals to measure and improve answer accuracy.',
      'Built and owned an internal LLM-powered assistant for the Product team on GPT-3.5 to generate structured user stories and PRDs for the Lead-to-Quote product, paired with AI evals to improve output accuracy.',
    ],
  },
  {
    id: 'shoppz',
    role: 'Founder & CEO',
    company: 'Shoppz.co (D2C E-commerce)',
    period: 'May 2019 – Aug 2021',
    summary:
      'Founded and scaled a D2C apparel brand from concept to launch while studying full-time, benchmarking against Bewakoof to shape product and positioning strategy.',
    highlights: [
      'Built brand identity end-to-end (name, logo, tagline) and independently designed and launched the website on Shop101 without developer support.',
      'Recruited, hired, and led a cross-functional team of 5 interns across graphic design, digital marketing, sales, and operations/coordination.',
      'Launched and grew Instagram and WhatsApp as primary D2C sales and engagement channels, scaling Instagram to 5K+ followers through organic content and Instagram ads and generating ₹40K in sales.',
    ],
  },
];

export const HACKATHON = {
  title: 'Tecnotree Internal Hackathon — Runner-up',
  description:
    'Teamed up with two Senior Product Managers and secured the Runner-up position in Tecnotree’s internal hackathon. Tackled the problem statement "How can we increase revenue for telecom operators?" by building a product that delivers value-added services to customers, helping operators retain their customer base.',
  link: 'https://abhinavsarkar121.wixsite.com/tecnoplay',
};

// Strictly taken from the SKILLS section of Abhinav's resume (27 items),
// grouped cleanly in the 3-column card layout matching the reference screenshot.
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Product Strategy & Planning',
    skills: [
      'Product Management',
      'Product Roadmapping',
      'Product Lifecycle Management',
      'Product Planning',
      'Market Research',
    ],
  },
  {
    category: 'Backlog & Prioritization',
    skills: [
      'Product Backlog Management',
      'Feature Prioritization',
      'Change Request Management',
      'Effort Estimation',
      'Release Planning',
    ],
  },
  {
    category: 'Analysis & Requirements',
    skills: [
      'Business Requirements Analysis',
      'Impact Analysis',
      'Gap Analysis',
      'Feasibility Analysis',
      'Problem Solving',
    ],
  },
  {
    category: 'Agile Delivery & Tooling',
    skills: [
      'Agile',
      'Scrum',
      'Sprint Planning',
      'Backlog Grooming',
      'User Stories',
      'JIRA',
    ],
  },
  {
    category: 'Stakeholder & Domain',
    skills: [
      'Stakeholder Management',
      'Customer Engagement',
      'Cross-Functional Collaboration',
      'CRM',
      'Product Development',
    ],
  },
  {
    category: 'AI & LLM Engineering',
    skills: ['LLM', 'RAG', 'Prompt Engineering'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Sri Balaji University, Pune',
    degree: 'MBA, Marketing',
    period: '2022 – 2024',
    notes: [
      'Flipkart Wired 7.0 — Team Leadership: Led a team at Flipkart Wired 7.0, Flipkart’s national B-school case competition.',
    ],
  },
  {
    institution: 'Amity University, Mumbai',
    degree: 'BJMC, Journalism and Mass Communication (Majors)',
    period: '2019 – 2022',
    notes: [
      'Amity Entrepreneurship Program: Finished runner-up in the program, pitching my own business idea.',
      'Virtual Short Film — Creative Achievement: Conceptualised and produced a short film entirely remotely during the COVID-19 lockdown.',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'Nextleap Product Manager Fellowship Certification', year: '2024' },
  { name: 'AI micro PM certification', year: '2026' },
  { name: 'Evals for Everyone', year: '2026' },
];

export const LANGUAGES = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi', level: 'Conversational' },
  { name: 'Bengali', level: 'Native' },
  { name: 'German', level: 'Basic' },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'compass',
    slug: 'compass',
    name: 'Compass — MBA Career OS',
    repoName: 'Columbus.ai-',
    tagline:
      'Executive career readiness platform for MBA specialization discovery, ATS resume engineering, precision live job search, and deterministic JD matching.',
    shortDescription:
      'An all-in-one MBA career operating system combining structured 4-track diagnostics, Google XYZ resume building with live ATS diagnostics, deterministic resume-to-JD matching with anti-hallucination validation gates, multi-board live job search, and company interview dossiers.',
    overview:
      'MBA campus recruiting operates in compressed 60–90 day placement windows across Management Consulting (MBB), Product Management, Corporate Finance, and Operations. Compass (hosted under Columbus.ai-) bridges the gap between candidate background and recruiter expectations by unifying career diagnostics, ATS-compliant resume creation, deterministic job matching, precision job search, networking outreach, and company dossiers into one platform.',
    problemSolved:
      'MBA applicants typically rely on fragmented spreadsheets, generic LLM resume scorers that hallucinate inflated match percentages, and noisy job boards filled with senior or stale listings.',
    githubUrl: 'https://github.com/Abhinavsarkar101/Columbus.ai-',
    demoUrl: 'https://columbus-ai-61q7.onrender.com',
    secondaryDemoUrl: 'https://abhinavsarkar101.github.io/Columbus.ai-/',
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Express',
      'Python FastAPI (JobSpy)',
      'Firebase Auth & Firestore',
      '@veriworkly/ats-engine',
      'jsPDF & html2canvas',
    ],
    keyHighlights: [
      'Deterministic ATS Engine (@veriworkly/ats-engine) with a 70-term MBA taxonomy and validation gates',
      'Evidence-based JD matching classifying requirements as Matched, Weakly Evidenced, Missing, or Uncertain',
      'Precision Live Job Search (#jobs) with strict seniority, experience band, and 24h–30d freshness cutoffs',
      'Dual-mode authentication & persistence: Firebase Cloud Firestore + local SHA-256 / localStorage fallback',
    ],
    modules: [
      {
        title: 'Executive Candidate Dashboard',
        description:
          'Tracks overall placement readiness with a blended readiness index and modular KPI cards.',
        details: [
          'Blended readiness index weighted across Resume Quality (35%), Diagnostic Assessment (30%), Role Match Precision (20%), and Networking Pipeline (15%).',
          'Peer percentile benchmarking, SVG radial rings, horizontal progress bars, and confirmed Reset All Data workflow.',
        ],
      },
      {
        title: '4-Track Diagnostic Assessment',
        description:
          'Structured calibration covering personality archetypes, dual specialization validation, role shortlisting, and sprint planning.',
        details: [
          'Track A identifies executive archetypes across 24 behavioral profiles (Strategic Generalist, Product Builder, Commercial Rainmaker, Operational Scaler).',
          'Track B–D validate Marketing, Finance, Product, and Strategy fit, map compensation bands, and generate a 90-day sprint roadmap.',
        ],
      },
      {
        title: 'Resume Studio',
        description:
          'ATS-compliant resume builder enforcing Google XYZ bullet discipline with one-page PDF export.',
        details: [
          'Evaluates action verbs, metric density, LinkedIn presence, and ATS formatting heuristics in real time.',
          'Provides Classic, Modern, and Minimal single-column layouts with live zoom and jsPDF + html2canvas export.',
        ],
      },
      {
        title: 'Precision Live Job Search (#jobs)',
        description:
          'Role-first multi-board job discovery engineered to filter out stale reposts and mismatched seniority.',
        details: [
          'Queries direct CORS-enabled corporate ATS feeds (Greenhouse, SmartRecruiters, Lever) and open boards zero-config on GitHub Pages, plus Indeed India, Naukri, and public LinkedIn via the Python FastAPI + python-jobspy microservice.',
          'Applies deterministic three-gate filtering: strict title & seniority blocking (excluding unrequested Tech Lead, Senior, Staff, Director, VP), experience band matching, and backend datePosted freshness cutoffs (24h, 3d, 7d, 30d).',
        ],
      },
      {
        title: 'Deterministic Job Description Matcher',
        description:
          'Evidence-backed resume-to-JD gap analysis that prevents AI from inventing experience to inflate scores.',
        details: [
          'Uses @veriworkly/ats-engine alongside deterministic experience math and qualification checks.',
          'Classifies each JD requirement as Matched, Weakly Evidenced, Missing, or Uncertain with source-cited evidence and downloadable PDF reports.',
        ],
      },
      {
        title: 'People Outreach & Company Interview Prep',
        description:
          'Constructs Boolean LinkedIn search strings, cold outreach scripts, and 12 recruiter dossiers.',
        details: [
          'Includes Boolean search specs for Alumni, Peers, and Hiring Managers plus copy-ready outreach templates.',
          'Provides corporate dossiers for 12 top MBA recruiters including McKinsey, BCG, Bain, Amazon, Flipkart, Swiggy, Goldman Sachs, HUL, and Deloitte.',
        ],
      },
    ],
    architectureSummary: [
      'Frontend built with React 19, TypeScript, Vite, Tailwind CSS v4, and Lucide React.',
      'Dual-mode auth & storage layer: Firebase Auth + Cloud Firestore with automatic offline/static SHA-256 + localStorage fallback.',
      'Optional Python FastAPI microservice (company-jobs-service/) using python-jobspy with normalizer.py and experience_matcher.py gates, deployable on Render Free.',
      'Includes automated TypeScript test suites (atsEngineAcceptance, evalCorpus, resumeParser, companyOpenings) and Python pytest suite.',
    ],
    screens: [
      {
        id: 'landing-hero',
        label: 'Landing Hero',
        caption: 'Compass landing page hero ("Stop guessing your MBA career. Decide with empirical certainty.") with Precision Live Job Search release banner and primary CTAs.',
      },
      {
        id: 'landing-traps',
        label: '6 MBA Traps',
        caption: 'Landing page section: "Designed backwards from the 6 traps that derail MBA candidates" covering ATS screening, XYZ bullets, and outreach silence.',
      },
      {
        id: 'landing-sim',
        label: 'Interactive Simulators',
        caption: 'Landing page browser simulator: "Test four core engines right in your browser" (Behavioral Matcher, XYZ Bullet Validator, Cold Outreach, Strict Job Filter).',
      },
      {
        id: 'landing-modules',
        label: '7-Module Showcase',
        caption: 'Landing page overview: "Seven synchronized modules for the complete placement cycle" and MBA candidate journey personas.',
      },
    ],
    faqs: [
      {
        question: 'Why does Compass use a deterministic ATS engine instead of relying purely on an LLM?',
        answer:
          'Generative LLMs can invent experience or produce inconsistent match scores across runs. Compass uses @veriworkly/ats-engine with a 70-term MBA taxonomy, deterministic experience math, and validation gates so every requirement is strictly classified as Matched, Weakly Evidenced, Missing, or Uncertain with source-cited evidence.',
      },
      {
        question: 'How does the Live Job Search (#jobs) prevent irrelevant or old listings?',
        answer:
          'It enforces three deterministic gates: strict role keyword and seniority matching (blocking unrequested Senior, Lead, Staff, Director, or VP titles), strict candidate experience-band matching, and backend datePosted cutoffs (24 hours, 3 days, 7 days, or 30 days).',
      },
      {
        question: 'Can Compass run without a backend or Firebase sign-in?',
        answer:
          'Yes. Compass has a dual storage architecture: Firebase Auth and Cloud Firestore when configured, plus a browser-local SHA-256 and localStorage fallback. On static GitHub Pages, Live Job Search also queries CORS-enabled ATS and public job feeds directly without backend secrets.',
      },
      {
        question: 'What resume standards does Resume Studio follow?',
        answer:
          'Resume Studio enforces single-column B-School placement committee layouts (Classic, Modern, Minimal), Google XYZ bullet framing ("Accomplished [X] as measured by [Y] by doing [Z]"), live ATS heuristic checks, and one-page PDF export via jsPDF and html2canvas.',
      },
    ],
  },
  {
    id: 'signaliq',
    slug: 'signaliq',
    name: 'SignalIQ',
    repoName: 'Signaliq',
    tagline:
      'AI-powered customer feedback intelligence and research sufficiency platform turning fragmented signals into evidence-backed product roadmaps.',
    shortDescription:
      'A full-stack customer research platform built with React, TypeScript, Express, and Google Gemini that ingests multi-channel feedback, evaluates research sufficiency before building, auto-generates gap-closing micro-surveys, and exports executive decision reports.',
    overview:
      'Product teams often collect feedback across support CSVs, user interview transcripts, app reviews, and heatmaps without knowing whether they actually have enough evidence to act. SignalIQ solves this with a structured 6-stage research workflow: Role-Adaptive Onboarding, AI-Synthesized Research Briefs, Multi-Channel Evidence Ingestion, 3-Tier Research Sufficiency Assessment, Targeted Micro-Survey Distribution, and Boardroom Reports.',
    problemSolved:
      'Teams either jump to roadmap decisions on anecdotal quotes or send redundant, long surveys that cause survey fatigue because they lack a way to measure evidence sufficiency against a hypothesis.',
    githubUrl: 'https://github.com/Abhinavsarkar101/Signaliq',
    demoUrl: 'https://abhinavsarkar101.github.io/Signaliq/',
    techStack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Node.js & Express 4',
      'Google Gemini API (@google/genai)',
      'jsPDF & html2canvas',
      'Lucide React & Motion',
    ],
    keyHighlights: [
      '3-Tier Research Sufficiency Engine (Sufficient Data, Knowledge Gap Identified, Insufficient / Exploratory)',
      'Evidence-grounded Gemini synthesis linked strictly to verbatim quote references and ticket IDs',
      'Automated gap-closing micro-survey builder with live public respondent URLs (/#survey-:id) and webhook email dispatch',
      'Boardroom executive reports with Impact vs. Effort priority matrix, Markdown export, and vector PDF download',
    ],
    modules: [
      {
        title: 'Role-Adaptive Dashboard & Onboarding',
        description:
          'Tailors workspace KPIs, recommended actions, and view density to the user’s exact role.',
        details: [
          'Onboarding customizes views for Founder / Executive, Product Manager / Designer, Customer Success Lead, and User Researcher / Data Analyst.',
          'Includes Focused vs. Full Platform toggle and 3 pre-loaded test scenarios (Sufficient Checkout Drop-off, Partially Sufficient Gap, and Insufficient Exploratory Churn).',
        ],
      },
      {
        title: 'AI Research Brief & Objective Framing',
        description:
          'Translates a business objective into a structured research architecture using Google Gemini.',
        details: [
          'Generates Primary Question, Core Hypothesis, Granular Sub-Questions, and Identified Blindspots with mitigation chips.',
          'Supports interactive AI Clarification Cards and "Refine Brief with My Answers" re-synthesis alongside manual brief editing.',
        ],
      },
      {
        title: 'Multi-Channel Evidence Ingestion',
        description:
          'Unifies structured files, qualitative transcripts, and visual friction artifacts with automated hygiene filtering.',
        details: [
          'CSV/Excel/TSV parser with smart column mapping (Feedback Text, Rating, Date, User Segment, Ticket ID) and spam/blank/one-word noise scrubbing.',
          'Ingests call and interview transcripts for speaker breakdown and UI friction heatmaps, keeping every insight cited to verbatim source quotes.',
        ],
      },
      {
        title: 'Research Sufficiency Assessment (3 Outcomes)',
        description:
          'Diagnoses whether evidence supports immediate execution or requires targeted follow-up.',
        details: [
          'Outcome A (Sufficient Data): Skips unnecessary surveys and unlocks executive recommendations immediately.',
          'Outcome B (Knowledge Gap Identified): Identifies missing cohort or action depth and drafts a short gap-closing micro-survey.',
          'Outcome C (Insufficient / Exploratory): Flags low sample size/variance and recommends qualitative discovery calls.',
        ],
      },
      {
        title: 'Targeted Survey Builder & Distribution Hub',
        description:
          'Builds, publishes, and tracks targeted surveys only when specific research gaps exist.',
        details: [
          'Supports multi-choice, Likert rating scales, and open-ended questions with live public respondent routing (/#survey-:id).',
          'Includes email campaign composer, CSV recipient batch upload, Google Apps Script webhook integration, and real-time Submissions Explorer.',
        ],
      },
      {
        title: 'Boardroom Reports & Documentation',
        description:
          'Produces stakeholder-ready decision summaries and exports.',
        details: [
          'Features an Impact vs. Effort priority matrix, filterable verbatim quote bank, and traceable evidence citations.',
          'Exports to multi-page PDF (jsPDF + html2canvas), downloadable Markdown, and clipboard summary, plus an in-app DocumentationView.',
        ],
      },
    ],
    architectureSummary: [
      'Client SPA built with React 19, TypeScript, Tailwind CSS v4 (with Light & Dark ThemeContext), Lucide React, and Motion.',
      'Server-side Express.js API proxy (server.ts) running Google Gemini API (@google/genai) so API keys are never exposed to the browser.',
      'Multi-layer persistence via local JSON store (/data/db.json) with optional Supabase sync.',
      'Prompt guardrails bind synthesis strictly to user-provided evidence quotes to prevent hallucinated reviews or metrics.',
    ],
    screens: [
      {
        id: 'landing-hero',
        label: 'Landing Hero',
        caption: 'SignalIQ landing page hero ("Turn Customer Chaos Into Metric-Backed Product Roadmaps") with navigation, Sign In, and Get Started Free CTA.',
      },
      {
        id: 'landing-capabilities',
        label: 'Capabilities Grid',
        caption: 'Landing page section: "Built for Omnichannel Customer Intelligence" showcasing App Store Crawlers, OCR, Churn Flags, and Impact-Weighted Backlogs.',
      },
      {
        id: 'landing-usecases',
        label: 'Stakeholder Use Cases',
        caption: 'Landing page section: "Tailored For Every Product Stakeholder" covering Bug Detection, Data-Driven Sprint Backlogs, and Churn Prevention.',
      },
      {
        id: 'landing-why',
        label: 'Story & Proof',
        caption: 'Landing page section: "We Built SignalIQ Because Product Feedback is Broken" & "Why Product Leaders Choose SignalIQ".',
      },
    ],
    faqs: [
      {
        question: 'What problem does SignalIQ’s Research Sufficiency Assessment solve?',
        answer:
          'Instead of always generating surveys or forcing decisions on weak evidence, SignalIQ evaluates uploaded evidence against the research hypothesis and classifies it into Outcome A (Sufficient — act now), Outcome B (Knowledge Gap — launch a short targeted survey), or Outcome C (Insufficient — run discovery interviews).',
      },
      {
        question: 'What types of customer data can SignalIQ ingest?',
        answer:
          'It supports structured CSV/Excel/TSV support logs (with smart column mapping and noise/spam filtering), unstructured interview and call transcripts with speaker parsing, and UI friction heatmaps/screenshots.',
      },
      {
        question: 'How does SignalIQ prevent AI hallucinations during synthesis?',
        answer:
          'All Gemini API calls run server-side through Express with prompt guardrails that anchor themes and recommendations strictly to verbatim user quotes and ticket IDs from the ingested files.',
      },
      {
        question: 'How are surveys distributed and collected?',
        answer:
          'SignalIQ creates live public respondent links (/#survey-:id) that log responses straight into the Submissions Explorer, alongside an email campaign composer, CSV recipient batch uploader, and optional Google Apps Script webhook integration.',
      },
    ],
  },
  {
    id: 'pmpeak',
    slug: 'pmpeak',
    name: 'PMPeak',
    repoName: 'pmpeak',
    tagline:
      'A free, zero-sign-up product management course for beginners featuring 9 structured chapters, inline diagrams, real case studies, quizzes, and mock PM interviews.',
    shortDescription:
      'A responsive, offline-friendly single-file web learning portal covering 9 core PM chapters—from systems thinking and user research to SQL, ML/GenAI, and system design—complete with 90 chapter quiz questions, 12-category PM interview prep, timed mocks, XP, streaks, and 16 badges.',
    overview:
      'PMPeak was built to give aspiring product managers a plain-English, structured curriculum without paywalls, accounts, or clutter. Delivered as a responsive web application (sidebar navigation on desktop, thumb-friendly bottom tabbar on mobile, plus light/dark/system themes), it takes learners from business outcomes and user research all the way through SQL analytics, generative AI, and technical system design.',
    problemSolved:
      'Beginners trying to break into Product Management face fragmented blog posts, expensive cohort paywalls, and abstract theory that lacks step-by-step product diagrams, practice quizzes, and structured interview rubrics.',
    githubUrl: 'https://github.com/Abhinavsarkar101/pmpeak',
    demoUrl: 'https://abhinavsarkar101.github.io/pmpeak/',
    techStack: [
      'HTML5 & Vanilla JavaScript',
      'CSS Custom Properties (Light / Dark)',
      'Inline SVG Diagram Engine',
      'LocalStorage Progress Engine',
      'IBM Plex Sans & Source Serif 4',
    ],
    keyHighlights: [
      '9 structured chapters spanning strategy, user research, metrics, growth, prototyping, SQL, ML/GenAI, and system design',
      'Custom inline SVG diagram engine (step-by-step trees & flows) + real product case studies + flashcards',
      '90 chapter questions (10 per chapter across multiple-choice, multi-select, true/false, short answer) with an 80% chapter pass gate',
      'After-Course Interview Preparation across 12 PM categories with timed mock interviews, sample answers, and self-scoring rubrics',
    ],
    modules: [
      {
        title: '9-Chapter Progressive Curriculum',
        description:
          'Covers the end-to-end PM skill tree in plain English with learning objectives, prerequisites, key definitions, and common mistakes.',
        details: [
          'Chapters 1–5: Mapping Business Outcome to Product Outcome; Outcomes to Opportunities & User Research; Problem Framing, Ideation & Validation; Metrics & Analysis; Driving Product Growth.',
          'Chapters 6–9: Designing & Building a Prototype; Deep Diving Into Data (cohorts, funnels, SQL); Machine Learning Foundations & Gen AI (tokens, attention, prompt engineering); Fundamentals of Tech & System Design.',
        ],
      },
      {
        title: 'Inline Theme-Aware SVG Diagram Engine',
        description:
          'Renders crisp, step-by-step visual frameworks directly inside lessons without external image dependencies.',
        details: [
          'Visualizes KPI trees, Jobs-to-be-Done flows, user journeys, A/B testing loops, SQL execution order, LLM token pipelines, and client-server-database architectures.',
        ],
      },
      {
        title: 'Quizzes, Mastery & Quiz Centre',
        description:
          'Tests comprehension with mixed question formats and enforces an 80% mastery threshold to clear chapters.',
        details: [
          'Supports Quick Quizzes (5 questions) and full Chapter Tests (10 questions) across multiple-choice, multi-select, true/false, and keyword-evaluated short answer.',
          'Tracks weakest topics, recommended revision, and saved attempt history in Quiz Centre.',
        ],
      },
      {
        title: 'After-Course Interview Preparation & Timed Mocks',
        description:
          'Prepares learners for real PM interviews across 12 dedicated categories.',
        details: [
          'Covers Guesstimates, Root Cause Analysis, Product Design, Product Improvement, Product Metrics, A/B Testing, Product Strategy, Pricing, Go-to-Market, AI Product Sense, Technical & System Design, and SQL.',
          'Includes clarifying questions to consider, recommended structures, strong sample answers, common mistakes, follow-up questions, timed mock mode, and self-scoring rubrics.',
        ],
      },
      {
        title: 'Gamification, Notes & Responsive Access',
        description:
          'Keeps learners consistent using XP, levels, daily streaks, quests, and local lesson notes.',
        details: [
          'Includes 16 unlockable badges (First Step, Quiz Starter, Sharp Mind, Chapter Mastered, 3/7/14/30-Day Streaks, Halfway Up, Summit Reached) and Today’s Quests.',
          'Zero sign-up and zero payment: all progress, chapter notes, and mock interview history persist locally in browser localStorage.',
        ],
      },
    ],
    architectureSummary: [
      'Self-contained single-file web application (index.html) with separated Content Layer (CH, IV_CATS, BADGES) and Application Layer.',
      'Zero external runtime dependencies or backend requirements; works seamlessly on phone, tablet, and desktop via GitHub Pages.',
      'Theme-aware CSS custom properties supporting Light, Dark, and System color schemes, plus accessible keyboard navigation and ARIA progress bars.',
      'Schema.org Course JSON-LD structured data and OpenGraph metadata embedded directly in the document head.',
    ],
    screens: [
      {
        id: 'landing-home',
        label: 'Course Home',
        caption: 'PMPeak landing & learning path home ("Your learning path") featuring level XP bar, streak rings, daily goals, and chapter unlock path.',
      },
      {
        id: 'landing-curriculum',
        label: '9-Chapter Syllabus',
        caption: 'PMPeak full 9-chapter curriculum overview spanning systems thinking, user research, metrics, growth, SQL, Gen AI, and system design.',
      },
      {
        id: 'landing-gamification',
        label: 'Streaks & 16 Badges',
        caption: 'Daily streak tracker, Today’s Quests, Weakest Topics revision queue, and 16 unlockable achievement badges.',
      },
      {
        id: 'landing-interview',
        label: 'Interview Prep Home',
        caption: 'After-Course Interview Preparation portal with 12 PM interview categories, timed mock mode, and self-scoring rubrics.',
      },
    ],
    faqs: [
      {
        question: 'Does PMPeak require an account or subscription?',
        answer:
          'No. PMPeak is completely free with no sign-up and no payment. All lesson completions, personal notes, quiz attempts, XP, streaks, badges, and mock interview scores are saved directly in your browser via localStorage.',
      },
      {
        question: 'What topics are covered across the 9 chapters?',
        answer:
          'The curriculum covers Systems Thinking & KPI Trees, User Research & JTBD, Problem Framing & Ideation, Metrics & A/B Testing, Product Growth Loops, Prototyping & SQL Basics, Funnel/Cohort Analysis & SQL for PMs, ML Foundations & Prompt Engineering, and Tech & System Design.',
      },
      {
        question: 'How does chapter mastery and progression work?',
        answer:
          'Each chapter contains structured lessons, flashcards, and a 10-question Chapter Test (plus 5-question Quick Quizzes). Reviewing every lesson and scoring at least 80% on the chapter exam marks the chapter mastered and unlocks progression badges.',
      },
      {
        question: 'What is included in the After-Course Interview Prep section?',
        answer:
          'Learners can practice by category or run timed mock interviews across 12 PM interview areas (including Guesstimates, RCA, Product Design, Metrics, Pricing, AI Product Sense, System Design, and SQL), complete with clarifying questions, sample answers, common mistakes, and scoring rubrics.',
      },
    ],
  },
];
