export const experience = [
  {
    period: "Mar 2025 — Present",
    type: "Engineering Lead",
    company: "Scale (usescale.app)",
    role: "Engineering Lead",
    url:"usescale.app",
    description:
      "Lead engineering for an embedded finance platform powering real-time financial transactions in the transportation sector. Designed event-driven microservices enabling scalable, secure, and fault-tolerant systems. Implemented CI/CD pipelines and automated deployments that reduced release times and minimised production errors.",
    achievement:
      "Architected a fault-tolerant, event-driven credit disbursement and collections system in Go + GCP — improving business margin by over 85%.",
    tags: ["Go", "GCP Pub/Sub", "OpenTelemetry", "PostgreSQL", "MongoDB"],
  },
  {
    period: "Jan 2024 — Mar 2025",
    type: "Senior Engineer",
    company: "Renda (360.renda.co)",
    role: "Senior Software Engineer · Go + TypeScript(ReactJs)",
    url:"360.renda.co",
    description:
      "Spearheaded event-driven distributed architecture using message brokers to synchronise services and build a full audit trail. Designed the Core Orchestrator Service managing users, businesses, RBAC, and service-to-service event logic. Enhanced driver and vehicle management systems across multiple apps.",
    achievement:
      "Designed the partner invoicing and split-payment finance service — improving settlement speed and payout approval rates by over 60%.",
    tags: ["Go", "TypeScript", "Message Brokers", "RBAC", "MongoDB","ReactJS", "NextJs"],
  },
  {
    period: "Jun 2023 — Jan 2024",
    type: "Senior Frontend",
    company: "Renda (renda.co)",
    url:"renda.co",
    role: "Senior Frontend Engineer",
    description:
      "Led frontend development for two client-facing apps — Customer and Delivery Partner. Refactored codebase and tooling, consolidating shared UI components and reducing technical debt across the board.",
    achievement: "Cut frontend delivery time by 40%, enabling timely release of v1 and the raise of $1.9m pre-seed",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    period: "Apr 2021 — Jun 2023",
    type: "Full-Stack",
    company: "Multonion",
    url:"www.multonion.com",
    role: "Fullstack Engineer (founding engr)",
    description:
      "Built business onboarding, document management, and tender management systems. Collaborated with cross-functional teams to deliver scalable features on a consistent cadence.",
    achievement: null,
    tags: ["React", "Node.js", "TypeORM"],
  },
  {
    period: "2019 — 2021",
    type: "Earlier Roles",
    company: "Raaxo · Nativedge · LYDIAfrica",
    role: "Frontend Engineer / Creative Developer / Volunteer",
    description:
      "Delivered performant projects at Raaxo Synergy; designed and deployed an e-commerce mobile app prototype at Nativedge; managed website and digital presence for LYDIAfrica NGO.",
    achievement: null,
    tags: ["JavaScript", "CSS", "Web Design"],
  },
];

export const projects = [
  {
    num: "01",
    name: "Prime Lane",
    description:
      "Ride-hailing platform for the luxury market. Features KYC verification, real-time geospatial driver search, surge-based pricing, in-app chat, and persistent socket connections — designed for 5,000–10,000 concurrent users.",
    stack: "NestJS · Redis · WebSockets · Google APIs",
    link: "https://www.primelanehq.com",
    linkLabel: "Visit",
  },
  {
    num: "02",
    name: "ReconX",
    description:
      "Threat intelligence platform built for African businesses. Provides actionable security insights and risk visibility for organisations operating in high-risk and emerging market environments.",
    stack: "Node.js · TypeScript",
    link: "https://tryreconx.com",
    linkLabel: "Visit",
  },
  {
    num: "03",
    name: "Real Stay",
    description:
      "Real estate listing platform with built-in chat, ID verification, and geospatial property search — enabling users to find and vet properties with confidence.",
    stack: "NestJS · MongoDB · TypeScript",
    link: "https://github.com/chijiooke/real-stay",
    linkLabel: "GitHub",
  },
  {
    num: "04",
    name: "Fastmeet",
    description:
      "Peer-to-peer video conferencing with low-latency real-time communication. Direct browser-to-browser connections via WebRTC — no relay server — with Socket.IO signalling.",
    stack: "WebRTC · Socket.IO · Node.js",
    link: "https://fastmeet.cam",
    linkLabel: "Visit",
  },
  {
    num: "05",
    name: "OCR App",
    description:
      "Node.js + TypeScript tool that converts images to machine-readable, searchable PDFs using optical character recognition — built for document digitisation at scale.",
    stack: "Node.js · TypeScript · OCR",
    link: "https://github.com/chijiooke/OCR-typescript",
    linkLabel: "GitHub",
  },
];

export const skills = [
  "Go (Golang) · Gin",
  "TypeScript · Node.js",
  "React · Next.js · NestJS",
  "PostgreSQL · MongoDB",
  "GCP Pub/Sub · Firebase",
  "Redis (geospatial + queues)",
  "Docker · GCP · CI/CD",
  "Event-driven microservices",
  "WebSockets · WebRTC",
  "OpenTelemetry · Sentry",
];

export const marqueeItems = [
  "Go", "TypeScript", "React", "Next.js", "NestJS",
  "GCP Pub/Sub", "PostgreSQL", "Redis", "Docker",
  "WebSockets", "WebRTC", "Microservices",
];
