export const experience = [
  {
    period: "Mar 2025 — Present",
    type: "Engineering Lead",
    company: "Scale (usescale.app)",
    url: "usescale.app",
    roles: [
      {
        period: "Mar 2025 — Present",
        role: "Engineering Lead",
        url: null,
        description:
          "Lead engineering for an embedded finance platform powering real-time financial transactions in the transportation sector. Designed event-driven microservices enabling scalable, secure, and fault-tolerant systems. Implemented CI/CD pipelines and automated deployments that reduced release times and minimised production errors.",
        achievement:
          "Architected a custom fault-tolerant credit disbursement and collections system, enabling real-time financial transactions for thousands of users.",
        tags: ["Go", "GCP Pub/Sub", "OpenTelemetry", "PostgreSQL", "MongoDB"],
      },
    ],
  },
  {
    period: "Jun 2023 — Mar 2025",
    type: "Senior Engineer",
    company: "Renda (renda.co)",
    url: "https://renda.co",
    roles: [
      {
        period: "Jan 2024 — Mar 2025",
        role: "Senior Software Engineer (Backend Lead)",
        url: null,
        description:
          "Led the backend team, spearheading the architecture of the internal finance service. Designed the Core Orchestrator Service managing users, businesses, RBAC, and service-to-service event logic. Enhanced driver and vehicle management systems across multiple apps.",
        achievement:
          "Designed the partner invoicing and split-payment finance service — improving settlement speed and payout approval rates by over 60%, drove the use of advanced software engineering practices, including event-driven architecture, server-to-server communication, and robust testing strategies, resulting in a 50% reduction in production incidents.",
        tags: [
          "Go",
          "GRPC",
          "TypeScript",
          "Message Brokers",
          "RBAC",
          "MongoDB",
          "ReactJS",
          "NextJs",
        ],
      },
      {
        period: "Jun 2023 — Jan 2024",
        role: "Senior Frontend Engineer",
        url: null,
        description:
          "Led frontend development for two client-facing apps — Customer and Delivery Partner. Refactored codebase and tooling, consolidating shared UI components and reducing technical debt across the board. The v1 launch became the product story behind Renda's fundraise.",
        achievement:
          "Cut frontend delivery time by 40%, shipping v1 on schedule and putting the product in front of investors for Renda's $1.9m pre-seed round, led by Techstars in 2022.",
        tags: ["React", "Next.js", "TypeScript"],
      },
    ],
  },
  {
    period: "Apr 2021 — Jun 2023",
    type: "Full-Stack",
    company: "Multonion (multonion.com)",
    url: "www.multonion.com",
    roles: [
      {
        period: "Apr 2021 — Jun 2023",
        role: "Fullstack Engineer (founding engr)",
        url: null,
        description:
          "Built business onboarding, document management, and tender management systems. Collaborated with cross-functional teams to deliver scalable features on a consistent cadence.",
        achievement: null,
        tags: ["React", "Node.js", "TypeORM"],
      },
    ],
  },
  {
    period: "2019 — 2021",
    type: "Earlier Roles",
    company: "Raaxo · Nativedge · LYDIAfrica",
    url: null,
    roles: [
      {
        period: "2019 — 2021",
        role: "Frontend Engineer / Creative Developer / Volunteer",
        url: null,
        description:
          "Delivered performant projects at Raaxo Synergy; designed and deployed an e-commerce mobile app prototype at Nativedge; managed website and digital presence for LYDIAfrica NGO.",
        achievement: null,
        tags: ["JavaScript", "CSS", "Web Design"],
      },
    ],
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
    name: "Jumper",
    description:
      "Terminal endless-runner written in Go — a fixed-timestep game loop with a dedicated input goroutine and string-builder rendering. Shipped via Homebrew as a universal macOS binary.",
    stack: "Go · Terminal UI · Homebrew",
    link: "https://github.com/chijiooke/jumper",
    linkLabel: "GitHub",
  },
  {
    num: "03",
    name: "ReconX",
    description:
      "Threat intelligence platform built for African businesses. Provides actionable security insights and risk visibility for organisations operating in high-risk and emerging market environments.",
    stack: "Node.js · TypeScript",
    link: "https://tryreconx.com",
    linkLabel: "Visit",
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
