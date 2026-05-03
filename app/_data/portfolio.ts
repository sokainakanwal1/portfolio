export type Project = {
  index: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  accent: string;
  accentLabel: string;
  url?: string;
  role: string;
  published: string;
  problem: string;
  highlights: string[];
  stack: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "salesforce-automation",
    name: "Salesforce Automation",
    tagline: "CRM + Workflow System · Financial Services",
    category: "CRM · Automation",
    accent: "#1D9E75",
    accentLabel: "CRM",
    role: "AI Automation Architect & Systems Designer",
    published: "Feb 14, 2026",
    problem:
      "A 20-year financial services firm was losing 20+ hours weekly to manual Salesforce updates, scattered follow-ups, and copy-paste data entry. Every new lead required manual entry.",
    highlights: [
      "Salesforce pipeline architecture, restructured stages, fields, automation rules",
      "Make.com multi-step workflow, trigger-based scenarios on Salesforce events",
      "Automated follow-up sequences, tasks, emails, reminders by deal status",
      "API integrations across 4 tools, Salesforce, email, calendar, payments",
      "Full SOP documentation, step-by-step SOPs and video walkthroughs",
      "30-day post-delivery support, team operates system independently",
    ],
    stack: [
      "Salesforce",
      "Make.com",
      "CRM Automation",
      "API Integration",
      "Email Automation",
      "SOP Documentation",
    ],
    results: [
      "70%+ reduction in manual workload (validated by client)",
      "20+ hours recovered per week",
      "Zero follow-ups missed since deployment",
      "Client review: 'above and beyond expectations', 5-star Upwork",
    ],
  },
  {
    index: "02",
    slug: "edit-on-the-spot",
    name: "Edit on the Spot",
    tagline: "AI-Powered Live Video SaaS Platform",
    category: "AI · Live Video · SaaS",
    accent: "#C0392B",
    accentLabel: "AI-Powered",
    url: "editonthespot.com",
    role: "Full-Stack Developer & AI Integration Engineer",
    published: "2026",
    problem:
      "Live event video required hours of manual editing. No tool existed to ingest a live stream, transcribe it in real time, auto-detect key moments, and render branded clips automatically.",
    highlights: [
      "Live RTMP ingestion via SRS, unified pipeline for live streams and file uploads",
      "Real-time transcription via FFmpeg + Deepgram with word-level timestamps",
      "AI segment & clip detection, OpenAI GPT-4o inline on transcript data",
      "Multi-camera support, CameraFeed model, SwitchPoint, 6 switching presets",
      "GPU cloud rendering, ECS Fargate workers with reframe (16:9, 9:16, 1:1)",
      "Multi-tenant SaaS, orgs, roles, white-label, audit logs, Stripe billing",
      "Turborepo monorepo, 6 services, 40+ DB models, 18 tRPC routers",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "tRPC",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Auth0",
      "OpenAI",
      "Deepgram",
      "SRS",
      "FFmpeg",
      "AWS ECS Fargate",
      "Stripe",
    ],
    results: [
      "6+ interconnected services in production monorepo",
      "3 AI/LLM integrations in a single pipeline",
      "40+ database models across 14 domains",
      "Full enterprise feature set: teams, seats, white-label, retention",
    ],
  },
  {
    index: "03",
    slug: "shapeloop",
    name: "ShapeLoop",
    tagline: "Animated Overlay SaaS for Video Creators",
    category: "Creator Tools · SaaS",
    accent: "#3B82F6",
    accentLabel: "Animated",
    url: "shapeloop.io",
    role: "Full-Stack Developer & SaaS Architect",
    published: "Feb 27, 2026",
    problem:
      "Video editors recreated the same animated shape overlays from scratch in After Effects for every project, a 30-minute task with no purpose-built alternative.",
    highlights: [
      "Real-time Canvas API animation engine, live preview at 30 FPS",
      "Multi-format FFmpeg export pipeline, WebM, Green Screen MP4, ProRes 4444",
      "Three-tier Stripe monetization, Free → €9/mo Pro → €99 lifetime",
      "Spotlight mode, dims everything outside a defined focus area",
      "Editor compatibility checker, maps each export format to its editors",
      "18 animation effects at launch across 4 export formats",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Stripe",
      "FFmpeg",
      "Canvas API",
      "Tailwind",
    ],
    results: [
      "30 seconds: landing page → downloaded overlay (validated)",
      "18 animation effects across 4 export formats",
      "Full freemium monetization live from day one",
      "First 100 creators acquired without paid advertising",
    ],
  },
  {
    index: "04",
    slug: "content-drafter",
    name: "Content Drafter",
    tagline: "Multi-Model AI Content Generation Platform",
    category: "Multi-Model · SaaS",
    accent: "#7F77DD",
    accentLabel: "Multi-Model",
    role: "Full-Stack Developer & AI Integration Engineer",
    published: "2026",
    problem:
      "Marketing teams spent hours producing platform-specific content, rewriting the same idea for LinkedIn, Twitter, Instagram, and blogs. Existing AI tools gave one generic output, not a production workflow.",
    highlights: [
      "Multi-model AI engine, GPT-4, Claude, and others from one dashboard",
      "Real-time streaming chat UI, Server-Sent Events for low latency",
      "Platform-specific prompt engineering layer, structured output per format",
      "Dashboard model selector, capability indicators, context preserved on switch",
      "Freemium Stripe monetization, Free → Pro ($49/mo) with usage limits",
      "Content history management, access, edit, regenerate previous outputs",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "Claude",
      "Stripe",
      "JWT",
      "SSE",
    ],
    results: [
      "Multiple AI models unified behind a single interface",
      "Streaming responses eliminate perceived latency",
      "Full freemium funnel live from day one",
      "Platform-specific output validated across 5 content formats",
    ],
  },
  {
    index: "05",
    slug: "dynamic-forms",
    name: "Dynamic Forms",
    tagline: "Rule-Driven Questionnaire Engine & Form Builder",
    category: "Enterprise · Architecture",
    accent: "#EA7C1E",
    accentLabel: "Rule-Driven",
    role: "Full-Stack Developer & Systems Architect",
    published: "2026",
    problem:
      "Most form builders handle linear flows. Enterprise workflows need server-controlled conditional branching, answer integrity guarantees, cryptographic audit trails, and structured PDF output, none of which off-the-shelf tools provided.",
    highlights: [
      "Drag-and-drop form builder, React + @dnd-kit + ReactFlow canvas",
      "Server-controlled questionnaire engine, Node.js + Hono, Zod validation",
      "RSA-SHA256 answer signing, tamper-evident compliance audit trail",
      "Reusable PDF generation package, multi-page, tables, alternating rows",
      "Android WebView bridge, embed end-user UI without rebuilding logic",
      "5-package monorepo with full separation of concerns",
    ],
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "@dnd-kit",
      "ReactFlow",
      "Node.js",
      "Hono",
      "json-rules-engine",
      "Zod",
      "pdf-lib",
      "RSA-SHA256",
    ],
    results: [
      "Server-controlled state machine for complex conditional branching",
      "Cryptographic answer integrity via RSA-SHA256 signing",
      "Reusable PDF package publishable as standalone npm module",
      "Android WebView bridge extending platform to mobile",
    ],
  },
  {
    index: "06",
    slug: "euka-ai",
    name: "Euka AI",
    tagline: "TikTok Affiliate Automation Platform",
    category: "AI Automation · SaaS",
    accent: "#1A7A4A",
    accentLabel: "TikTok",
    url: "euka.ai",
    role: "Full-Stack Developer, end-to-end architecture, AI, infra",
    published: "March 4, 2026",
    problem:
      "TikTok Shop brands manually messaged hundreds of affiliates, tracked partnerships in spreadsheets, and had zero visibility into which creators or hooks were actually driving sales.",
    highlights: [
      "TikTok data scraping & analytics pipeline, large-scale creator + product data",
      "AI-powered outreach bot, high-volume messaging with follow-up sequences",
      "Creator discovery & social listening, search by product/hook/category",
      "Affiliate CRM, pipeline stages, collab management, segments, lists",
      "AI script & video generator, LLM-powered TikTok script generation",
      "Stripe subscription billing, three tiers ($159–$479/mo) with metering",
      "Multi-tenant SaaS, orgs, roles, secure auth, brand data isolation",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "OpenAI",
      "Stripe",
      "JWT",
      "TikTok Data API",
    ],
    results: [
      "Live production SaaS at euka.ai with paying customers",
      "Affiliate outreach automated end-to-end, zero manual messaging",
      "Creator discovery powered by real-time scraped TikTok data",
      "Full affiliate CRM replacing spreadsheet-based partner management",
    ],
  },
  {
    index: "07",
    slug: "ai-stock-tickers",
    name: "AI Stock Tickers",
    tagline: "AI-Powered Fintech Trading Platform",
    category: "Fintech · Real-Time",
    accent: "#00C896",
    accentLabel: "AI-Powered",
    url: "aistocktickers.com",
    role: "Lead Full-Stack Developer, redesign, AI, real-time data",
    published: "Jan 14, 2026",
    problem:
      "Retail traders had access to data but no intelligent synthesis. Raw charts, scattered news, and manual indicator reading required hours of analysis before any trade decision.",
    highlights: [
      "AI stock scoring engine, per-ticker scores from MACD, RSI, volume, fundamentals",
      "Trade recommendation system, Long/Short, entry, target price, stop loss",
      "TradingView chart integration, interactive charts, technical overlay, WebSocket OHLCV",
      "Live news aggregation, per-ticker feed from Yahoo Finance and Finviz",
      "Daily, mid-day, weekly AI picks, scheduled generation with back-tested results",
      "AI trading assistant, conversational chat for ticker questions and queries",
    ],
    stack: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
      "OpenAI",
      "TradingView",
      "Yahoo Finance",
      "Finviz",
      "Stripe",
      "Docker",
      "JWT",
    ],
    results: [
      "Live at aistocktickers.com, complete redesign delivered",
      "Real-time AI trade recommendations per ticker",
      "WebSocket real-time feeds powering live chart and scoring",
      "Back-tested results system validating AI recommendations historically",
    ],
  },
  {
    index: "08",
    slug: "entry-i",
    name: "Entry I",
    tagline: "Continuous Identity Access · Architecture Design",
    category: "Systems · Architecture",
    accent: "#2A6B6B",
    accentLabel: "Architecture",
    role: "Systems Architect & Architecture Consultant",
    published: "March 2026",
    problem:
      "A founder had an original access concept built around continuous identity and system state, fundamentally different from password or passkey-based auth, but needed it translated from abstract idea into a rigorous, testable architecture without losing originality.",
    highlights: [
      "Primitive definition framework, mapped four primitives (Heart, Vessel, Signal, Portal)",
      "Finite state machine, five-state model with continuity-scored transitions",
      "Trust continuity logic, Trust Score = Σ (signal weight × match confidence)",
      "Signal category framework, three-tier (Passive, Contextual, Behavioral)",
      "Drift & recovery logic, gradient drift with proportional portal responses",
      "First-interaction flow, four-stage onboarding without a login gate",
      "Structured architecture documentation, Phase 1 system outline ready to implement",
    ],
    stack: [
      "System Architecture",
      "State Machine Design",
      "Trust Logic",
      "Continuity Modeling",
      "Signal Framework",
      "Technical Documentation",
    ],
    results: [
      "Full Phase 1 architecture delivered in under 48 hours",
      "Original concept preserved, not absorbed into conventional auth",
      "Client: 'a strong first pass' / 'real thought into making it testable'",
      "Structured documentation ready to hand off to implementation team",
    ],
  },
];

export const capabilities = [
  {
    label: "01",
    title: "AI Automation",
    body: "AI-driven workflows that connect tools end to end. Salesforce + Make + GPT, n8n pipelines, CRM scoring, document processing. The 60–70% manual-work reductions live here.",
  },
  {
    label: "02",
    title: "Production RAG",
    body: "Retrieval systems built for real data, not demos. Embedding strategy, chunking, re-ranking, hallucination handling, and eval pipelines that catch regressions before users do.",
  },
  {
    label: "03",
    title: "LLM Integrations",
    body: "Rate limiting, retries, streaming where it helps, structured outputs, cost caps per user and workflow, fallback paths. The production concerns most tutorials skip.",
  },
  {
    label: "04",
    title: "Agent Workflows",
    body: "Bounded execution. Observable cost. Mapped call graphs. Most teams' AI cost problem is not pricing, it is that nobody has measured what their system is actually doing.",
  },
  {
    label: "05",
    title: "Cost & Architecture Audits",
    body: "When something is bleeding budget and no one is sure why. I find the retry loop, the wrong-tier endpoint, the 11-call workflow that should have been 4. The waste is usually 40–80% of the bill.",
  },
  {
    label: "06",
    title: "Full-Stack AI Features",
    body: "When the AI layer needs UI and backend to ship together. Auth, queues, deployment, logging, the boring parts that determine whether the AI feature actually survives production.",
  },
  {
    label: "07",
    title: "Systems Architecture",
    body: "First principles before patterns. State machines, trust logic, signal frameworks, structured documentation. Turning abstract concepts into testable architecture.",
  },
];

export const principles = [
  {
    name: "First Principles",
    body: "Break problems down to fundamentals before reaching for the default pattern. The default isn't always the right default.",
  },
  {
    name: "Inversion",
    body: "Identify what could go wrong first. Design systems that actively avoid those outcomes, instead of hoping for happy paths.",
  },
  {
    name: "Pyramid Thinking",
    body: "Top-down logical flow. Strong reasoning before implementation. Communicate ideas clearly across technical and non-technical contexts.",
  },
  {
    name: "Systems Modeling",
    body: "Feedback loops, dependencies, long-term effects. Optimize for the system, not the short-term output.",
  },
];

export const stats = [
  { number: "60–70%", label: "Manual workload reduction · client validated" },
  { number: "40+", label: "Database models in production AI SaaS" },
  { number: "8", label: "Production projects shipped in the last 12 months" },
  { number: "5.0", label: "Avg client rating · across reviewed engagements" },
];

export const experience = [
  {
    org: "Independent",
    role: "AI Engineer · LLM Integration Specialist",
    period: "Oct 2025, Present",
    note: "Production AI systems for B2B SaaS, finance, real estate, and professional services. Architecture, LLM integration, deployment, documentation, and long-term client enablement.",
  },
  {
    org: "OptimaGeeks",
    role: "Software Engineer",
    period: "Jun 2025, Present",
    note: "Building AI-powered web apps and full-stack SaaS. LLM integration with OpenAI and Claude: streaming, function calling, structured outputs, cost and performance optimization. RAG pipelines on Pinecone, FAISS, pgvector.",
  },
  {
    org: "NexTek Solutions",
    role: "Software Developer",
    period: "Feb 2024, Jun 2025",
    note: "Full-stack engineering on React, Node.js, REST APIs, PostgreSQL. Foundational discipline in API design, error handling, and production-grade delivery that now underwrites the AI work.",
  },
];

export const services = [
  {
    name: "AI Integration Audit",
    duration: "3 days",
    price: "from $900",
    body: "Architecture, cost, and risk plan. Where the bill leaks. Which calls to compress. What to ship next.",
  },
  {
    name: "AI SaaS MVP",
    duration: "21 days",
    price: "from $800",
    body: "Idea to live product. Next.js, NestJS, Postgres, Stripe, multi-tenant auth, AI feature integrated end to end.",
  },
  {
    name: "Add an AI Feature",
    duration: "5 days",
    price: "from $300",
    body: "Drop a production-grade AI feature into your existing SaaS. Bounded, observable, documented.",
  },
];

export const certs = [
  { name: "AI Workflow Architecture & Automation", by: "Coursera", year: "Jan 2026" },
  { name: "Building Systems with ChatGPT API", by: "Coursera", year: "Jun 2025" },
  { name: "LangChain Application Development", by: "DeepLearning.ai", year: "Apr 2025" },
];

export const links = {
  email: "sokainakanwal@gmail.com",
  linkedin: "https://www.linkedin.com/in/sokainakanwal",
  upwork: "https://www.upwork.com/freelancers/~0104feece7c544a90d",
};
