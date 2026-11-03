export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack & AI' | 'Real-Time & P2P' | 'Enterprise';
  status: 'Live Production' | 'Mobile Engineering' | 'Enterprise Client Platform';
  date: string;
  summary: string;
  description: string[];
  techStack: string[];
  highlights: string[];
  architecture: {
    client: string;
    backend: string;
    database: string;
    special: string;
  };
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  badgeColor: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  techStack: string[];
  projects: {
    title: string;
    points: string[];
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Score';
  status: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge: string;
  topics: string[];
  date?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; tags: string[] }[];
}

export const PERSONAL_INFO = {
  name: "Piyush Chauhan",
  title: "Junior Software Engineer",
  tagline: "React.js · TypeScript · Python · FastAPI · WebSockets · PostgreSQL · AI Integrations",
  location: "Yamunanagar, Haryana & Mohali, Punjab, India",
  email: "piyushchauhan2607@gmail.com",
  github: "https://github.com/piyushchauhandev",
  githubUsername: "piyushchauhandev",
  linkedin: "https://www.linkedin.com/in/piyush-chauhan-96724035a",
  about: `Results-driven Junior Software Engineer with practical industry exposure building modern web applications, asynchronous backend services, and scalable full-stack architectures. Completed a software engineering internship at CodeGarage Tech, contributing to production engineering across live client platforms including an AI Codebase Architecture & Vulnerability Visualizer and customer communication workflows on Chatwoot. Proven capability engineering end-to-end web applications with modern AI tooling (Antigravity, Cursor, Claude Code, Gemini AI), real-time bi-directional streaming via WebSockets, and interactive graph systems.`,
  stats: [
    { label: "MCA Academics", value: "8.4 CGPA", detail: "TIMT Yamunanagar" },
    { label: "Production Platforms", value: "2+ Live", detail: "CodeGarage Tech" },
    { label: "Core Stacks", value: "React & FastAPI", detail: "TypeScript & Python" },
    { label: "Specialty", value: "WebSockets & Graphs", detail: "Real-time streaming" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "ai-blog-platform",
    title: "AI-Powered Full-Stack Blog Platform",
    subtitle: "End-to-End Modern Publishing Engine with Secure OTP Authentication",
    category: "Full-Stack & AI",
    status: "Live Production",
    date: "2025 – 2026",
    badgeColor: "from-blue-500 to-indigo-600",
    summary: "Architected and deployed an end-to-end full-stack publishing platform featuring responsive modern UI, markdown article authoring, Google Gemini AI integration, and enterprise-grade OTP + JWT security.",
    description: [
      "Architected and deployed an end-to-end full-stack publishing platform featuring a responsive modern UI, markdown article authoring, and robust user role access controls.",
      "Integrated Google Gemini AI API to provide automated article summarization, intelligent content tagging, and AI-assisted drafting suggestions for writers.",
      "Engineered a secure email-based authentication system featuring time-sensitive One-Time Passwords (OTP), bcrypt hashing, and rotating JSON Web Tokens (JWT) for session security.",
      "Built high-throughput asynchronous RESTful APIs using FastAPI with strict Pydantic schemas and PostgreSQL relational storage managed through SQLAlchemy ORM.",
      "Optimized database queries with indexing, implemented CORS security middleware, and deployed the full application to live cloud hosting."
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Google Gemini AI",
      "JWT",
      "OTP Service",
      "Pydantic"
    ],
    highlights: [
      "Google Gemini AI Content Summarization & Smart Tagging",
      "Time-sensitive OTP email verification with rotating JWT tokens",
      "Asynchronous FastAPI backend with sub-50ms query response",
      "Relational data model in PostgreSQL with index optimization"
    ],
    architecture: {
      client: "React 18/TypeScript with responsive Tailwind & custom Markdown parser",
      backend: "FastAPI asynchronous microservices with Pydantic validation",
      database: "PostgreSQL with SQLAlchemy ORM and structured migration schema",
      special: "Google Gemini 1.5 Pro API for automated drafting & NLP analysis"
    },
    metrics: [
      { label: "Auth Security", value: "OTP + JWT" },
      { label: "AI Integration", value: "Gemini AI" },
      { label: "API Speed", value: "<50ms" },
      { label: "Database", value: "PostgreSQL" }
    ],
    githubUrl: "https://github.com/piyushchauhandev",
    liveUrl: "https://cortex-blogs.piyushchauhandev.in"
  },
  {
    id: "easyshare-p2p",
    title: "EasyShare – Real-Time Peer-to-Peer File & Data Sharing",
    subtitle: "High-Performance Cross-Platform P2P Direct Streaming Application",
    category: "Real-Time & P2P",
    status: "Mobile Engineering",
    date: "2025",
    badgeColor: "from-emerald-500 to-teal-600",
    summary: "Engineered an ultra-low latency cross-platform application for seamless device-to-device file transfers and real-time data exchange using WebRTC peer-to-peer protocols and Firebase Firestore signaling.",
    description: [
      "Engineered a high-performance cross-platform application for seamless device-to-device file transfers and real-time data exchange using WebRTC peer-to-peer protocols.",
      "Achieved ultra-low latency direct data streaming between mobile devices, eliminating server bandwidth bottlenecks and ensuring end-to-end user privacy.",
      "Utilized Firebase Firestore for dynamic signaling, session negotiation (SDP offer/answer), ICE candidate exchange, and room management.",
      "Implemented secure room pairing through auto-generated unique Room IDs, dynamic connection state monitors, and automated reconnection handlers.",
      "Designed a streamlined Material 3 user interface with live transfer progress indicators, chunked data handling, and file integrity validation."
    ],
    techStack: [
      "Flutter",
      "Dart",
      "WebRTC",
      "Firebase Firestore",
      "Asynchronous Streams",
      "Material 3",
      "P2P Protocols"
    ],
    highlights: [
      "Direct WebRTC DataChannel streaming without intermediary server storage",
      "Auto-generated unique Room IDs with SDP negotiation in Firebase Firestore",
      "Chunked binary file transfer with checksum integrity validation",
      "Zero server bandwidth overhead & maximum end-to-end data privacy"
    ],
    architecture: {
      client: "Flutter & Dart with reactive Streams and Material Design 3",
      backend: "Firebase Firestore for real-time signaling & ICE exchange",
      database: "Local caching with zero cloud storage of user files",
      special: "Direct WebRTC DataChannel peer-to-peer binary chunking"
    },
    metrics: [
      { label: "Latency", value: "Ultra-Low" },
      { label: "Server Cost", value: "$0 (P2P)" },
      { label: "Signaling", value: "Firestore" },
      { label: "Architecture", value: "WebRTC" }
    ],
    githubUrl: "https://github.com/piyushchauhandev",
    liveUrl: "https://github.com/piyushchauhandev"
  },
  {
    id: "ai-codebase-visualizer",
    title: "AI Codebase Architecture & Vulnerability Visualizer",
    subtitle: "Enterprise Live Project at CodeGarage Tech",
    category: "Enterprise",
    status: "Enterprise Client Platform",
    date: "March 2026 – Present",
    badgeColor: "from-purple-500 to-cyan-500",
    summary: "Automated developer platform that ingests repositories, scans AST syntax trees, renders interactive dependency diagrams via React Flow, and streams analysis progress via WebSockets with ELK (Eclipse Layout Kernel) automated graph layout.",
    description: [
      "Collaborate on an automated developer tool that ingests user-uploaded repositories or connects via GitHub, scanning AST syntax trees to generate interactive architectural dependency diagrams and highlight structural bugs and security weaknesses.",
      "Implement interactive graphical node-and-edge flow components using React, TypeScript, and React Flow, enabling intuitive code navigation for complex software systems.",
      "Integrate WebSockets for real-time bi-directional progress streaming, notifying the frontend during long-running repository scanning and background worker execution.",
      "Integrated ELK (Eclipse Layout Kernel / elkjs) layout algorithms with React Flow to calculate optimal hierarchical graph layouts and edge routing for AST codebase dependency trees.",
      "Conduct in-depth debugging, code profiling, and modular refactoring across complex multi-file frontend and backend repositories."
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "React Flow",
      "Python",
      "FastAPI",
      "WebSockets",
      "ELK (Eclipse Layout Kernel)",
      "PostgreSQL",
      "AST Parsers"
    ],
    highlights: [
      "Interactive node-and-edge graph canvas powered by React Flow",
      "Real-time bi-directional WebSocket streaming during repository AST parsing",
      "Automated hierarchical graph layout powered by ELK (Eclipse Layout Kernel)",
      "Security vulnerability and dependency bottleneck detection"
    ],
    architecture: {
      client: "React, TypeScript & React Flow with custom node rendering",
      backend: "FastAPI microservices with asynchronous worker queues",
      database: "PostgreSQL with ELK graph layout calculations",
      special: "AST (Abstract Syntax Tree) analyzer + bi-directional WebSockets"
    },
    metrics: [
      { label: "UI Flow", value: "React Flow" },
      { label: "Streaming", value: "WebSockets" },
      { label: "Tracing", value: "ELK (Eclipse Layout Kernel)" },
      { label: "Engine", value: "FastAPI AST" }
    ],
    githubUrl: "https://github.com/piyushchauhandev",
    liveUrl: "https://github.com/piyushchauhandev"
  },
  {
    id: "chatwoot-calling-billing",
    title: "Omnichannel Customer Calling & Billing Platform",
    subtitle: "Enterprise Client Platform on Chatwoot at CodeGarage Tech",
    category: "Enterprise",
    status: "Enterprise Client Platform",
    date: "March 2026 – Present",
    badgeColor: "from-amber-500 to-rose-500",
    summary: "Production customer billing and subscription management module for an enterprise customer communication and voice calling platform integrated on Chatwoot.",
    description: [
      "Manage and maintain the customer billing and subscription management module for an enterprise customer communication and voice calling application built on Chatwoot.",
      "Monitor billing transaction logs, audit customer call metering records, verify payment status synchronizations, and resolve accounting logic anomalies.",
      "Utilize strict Git/GitHub branching workflows, participate in sprint standups, and coordinate bug resolution with senior developers."
    ],
    techStack: [
      "Chatwoot",
      "PostgreSQL",
      "MongoDB",
      "FastAPI",
      "REST APIs",
      "Billing Microservices",
      "Git/GitHub"
    ],
    highlights: [
      "Call metering record audit and high-accuracy billing reconciliation",
      "Synchronized payment lifecycle management with webhooks",
      "Enterprise sprint standup and agile code reviews"
    ],
    architecture: {
      client: "Chatwoot Omnichannel Dashboard & custom billing components",
      backend: "FastAPI billing microservices with webhook synchronizers",
      database: "PostgreSQL transactional records & MongoDB call logs",
      special: "Real-time call metering verification & payment anomaly audits"
    },
    metrics: [
      { label: "Platform", value: "Chatwoot" },
      { label: "Integrity", value: "100% Audit" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Workflow", value: "Agile Sprints" }
    ],
    githubUrl: "https://github.com/piyushchauhandev",
    liveUrl: "https://github.com/piyushchauhandev"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "codegarage",
    company: "CodeGarage Tech",
    role: "Software Engineering Intern",
    period: "March 2026 – October 2026",
    location: "Mohali, Punjab, India",
    type: "Internship (On-Site / Production)",
    summary: "Contributed to production engineering across two live enterprise client platforms, applying scalable software architecture, structured modular folder conventions, and modern full-stack software engineering practices.",
    techStack: [
      "TypeScript",
      "React.js",
      "React Flow",
      "Python",
      "FastAPI",
      "WebSockets",
      "ELK (Eclipse Layout Kernel)",
      "PostgreSQL",
      "MongoDB",
      "Chatwoot"
    ],
    projects: [
      {
        title: "Live Project 1: AI Codebase Architecture & Vulnerability Visualizer",
        points: [
          "Collaborate on an automated developer tool that ingests user-uploaded repositories or connects via GitHub, scanning AST syntax trees to generate interactive architectural dependency diagrams and highlight structural bugs and security weaknesses.",
          "Implement interactive graphical node-and-edge flow components using React, TypeScript, and React Flow, enabling intuitive code navigation for complex software systems.",
          "Integrate WebSockets for real-time bi-directional progress streaming, notifying the frontend during long-running repository scanning and background worker execution.",
          "Integrated ELK (Eclipse Layout Kernel / elkjs) layout algorithms with React Flow to calculate optimal hierarchical graph layouts and edge routing for AST codebase dependency trees.",
          "Conduct in-depth debugging, code profiling, and modular refactoring across complex multi-file frontend and backend repositories."
        ]
      },
      {
        title: "Live Project 2: Omnichannel Customer Calling & Billing Platform (Chatwoot)",
        points: [
          "Manage and maintain the customer billing and subscription management module for an enterprise customer communication and voice calling application built on Chatwoot.",
          "Monitor billing transaction logs, audit customer call metering records, verify payment status synchronizations, and resolve accounting logic anomalies.",
          "Utilize strict Git/GitHub branching workflows, participate in sprint standups, and coordinate bug resolution with senior developers."
        ]
      }
    ]
  },
  {
    id: "novem-control",
    company: "Novem Control Private Limited",
    role: "Flutter Developer Intern",
    period: "June 2025 – August 2025",
    location: "Phase 8B, Mohali, Punjab, India",
    type: "Summer Internship (On-Site)",
    summary: "Engineered responsive cross-platform mobile application modules with strict focus on UI performance, widget lifecycle management, and offline-first persistence.",
    techStack: [
      "Flutter",
      "Dart",
      "Sqflite",
      "Hive",
      "Firebase Firestore",
      "Firebase Auth",
      "Material Design",
      "Git"
    ],
    projects: [
      {
        title: "Cross-Platform Mobile Engineering & Offline Storage",
        points: [
          "Engineered responsive cross-platform mobile application modules using Flutter and Dart with strict focus on UI performance, widget lifecycle management, and Material Design guidelines.",
          "Implemented high-speed local data persistence and offline-first storage mechanisms using Sqflite and Hive, ensuring zero data loss during network disruptions.",
          "Integrated Firebase Firestore and Authentication for real-time backend synchronization, user session security, and dynamic cloud data handling.",
          "Collaborated directly with senior mentors to isolate runtime exceptions, optimize UI widget build times, and maintain clean separation of concerns using MVC/MVVM patterns."
        ]
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend & UI Engineering",
    icon: "Layout",
    description: "Building responsive, animated, and interactive graph-based interfaces",
    skills: [
      { name: "React.js", level: 90, tags: ["Hooks", "Custom Components", "Context API", "State"] },
      { name: "TypeScript", level: 88, tags: ["Type Safety", "Interfaces", "Generics"] },
      { name: "React Flow", level: 85, tags: ["Node & Edge Graphs", "Custom Nodes", "Interactive Layouts"] },
      { name: "JavaScript (ES6+)", level: 92, tags: ["Async/Await", "Promises", "DOM", "Event Loop"] },
      { name: "Responsive Web & CSS3", level: 90, tags: ["Modern CSS", "Flexbox/Grid", "Animations"] },
      { name: "Material UI & Next.js", level: 80, tags: ["Design Systems", "Component Libraries"] }
    ]
  },
  {
    name: "Backend & Microservices",
    icon: "Server",
    description: "High-throughput asynchronous APIs and real-time streaming architectures",
    skills: [
      { name: "FastAPI", level: 88, tags: ["Asynchronous", "Pydantic", "Dependency Injection", "Speed"] },
      { name: "Python", level: 88, tags: ["Asyncio", "OOP", "AST Parsing", "Fast Execution"] },
      { name: "WebSockets", level: 85, tags: ["Bi-directional Streaming", "Real-Time Events", "Reconnection"] },
      { name: "RESTful APIs", level: 92, tags: ["API Design", "Status Codes", "Webhooks", "CORS"] },
      { name: "Node.js Basics", level: 75, tags: ["Runtime", "Express", "Microservices"] },
      { name: "Microservice Architecture", level: 82, tags: ["Decoupled Services", "Worker Queues"] }
    ]
  },
  {
    name: "Databases & ORMs",
    icon: "Database",
    description: "Relational modeling, query optimization, and offline-first storage",
    skills: [
      { name: "PostgreSQL", level: 86, tags: ["Relational Schema", "Indexes", "Foreign Keys", "ACID"] },
      { name: "SQLAlchemy", level: 85, tags: ["Python ORM", "Query Building", "Migrations"] },
      { name: "MySQL", level: 85, tags: ["Coursera Specialization", "Query Tuning", "Normalization"] },
      { name: "MongoDB", level: 78, tags: ["Document Store", "NoSQL", "Aggregation"] },
      { name: "Sqflite & Hive", level: 82, tags: ["Mobile Local Storage", "Offline-First", "High Speed"] },
      { name: "SQLite & Sequelize", level: 80, tags: ["Embedded DB", "Node ORM"] }
    ]
  },
  {
    name: "AI Tooling & LLM Integrations",
    icon: "Sparkles",
    description: "Leveraging cutting-edge AI orchestration for accelerated software delivery",
    skills: [
      { name: "Google Gemini AI API", level: 88, tags: ["Summarization", "Tagging", "Prompting", "Drafting"] },
      { name: "Antigravity & Cursor", level: 90, tags: ["AI-Assisted Dev", "Context Orchestration", "Pair-Programming"] },
      { name: "Claude Code", level: 88, tags: ["Agentic Workflows", "Terminal AI", "Code Generation"] },
      { name: "LLM Prompting & Pipelines", level: 85, tags: ["Few-Shot", "JSON Extraction", "API Chaining"] }
    ]
  },
  {
    name: "DevOps, Observability & Tools",
    icon: "Cpu",
    description: "Distributed tracing, logging, version control, and Unix environments",
    skills: [
      { name: "ELK (Eclipse Layout Kernel)", level: 82, tags: ["Elasticsearch", "Logstash", "Kibana", "Log Tracing"] },
      { name: "Git & GitHub", level: 90, tags: ["Branching Strategies", "PR Reviews", "Merge Conflicts"] },
      { name: "Postman & API Testing", level: 88, tags: ["Contract Testing", "Env Variables", "Automation"] },
      { name: "Linux (Ubuntu) & Windows", level: 85, tags: ["Bash", "Shell Scripts", "Dev Environments"] },
      { name: "VS Code & IDE Tooling", level: 92, tags: ["Extensions", "Debugging", "Linters"] }
    ]
  },
  {
    name: "Core CS & Secondary Mobile",
    icon: "Layers",
    description: "Foundational computer science principles and cross-platform mobile development",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, tags: ["Arrays", "Trees", "Graphs", "Complexity Analysis"] },
      { name: "Object-Oriented Programming (OOP)", level: 90, tags: ["Inheritance", "Polymorphism", "Clean Code"] },
      { name: "Flutter & Dart", level: 80, tags: ["Cross-Platform", "Material 3", "Streams", "WebRTC"] },
      { name: "Systematic Debugging", level: 92, tags: ["Breakpoints", "Memory Profiling", "Network Inspection"] }
    ]
  }
];

export const CORE_COMPETENCIES = [
  "Full-Stack Web & API Architecture",
  "Interactive Graph & Flow UI (React Flow)",
  "Real-Time WebSockets & Streaming",
  "AI-Assisted Dev (Antigravity & Cursor)",
  "AI & LLM Integrations (Claude / Gemini)",
  "Relational & NoSQL Database Design",
  "RESTful API Design & Webhooks",
  "Authentication & Security (OTP, JWT)",
  "Asynchronous Microservices (FastAPI)",
  "Systematic Debugging & Profiling",
  "Graph Layout Algorithms (ELK / elkjs)",
  "Git Version Control & Agile Delivery"
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Tilak Raj Chadha Institute of Management and Technology (TIMT), Yamunanagar",
    period: "2024 – 2026",
    score: "8.4 / 10.0 CGPA",
    scoreType: "CGPA",
    status: "Graduating 2026",
    description: "Specialized in Advanced Full-Stack Software Engineering, Distributed Systems, Asynchronous Microservices, and Cloud Architectures."
  },
  {
    degree: "Post Graduate Diploma in Computer Applications (PGDCA)",
    institution: "Government College, Chhachhrauli",
    period: "2023 – 2024",
    score: "67.1%",
    scoreType: "Score",
    status: "Completed",
    description: "Comprehensive foundation in computer programming, relational database systems, algorithms, and practical software applications."
  },
  {
    degree: "Bachelor of Science (B.Sc. – Non-Medical)",
    institution: "Mukand Lal National College, Yamunanagar",
    period: "2020 – 2022",
    score: "69.2%",
    scoreType: "Score",
    status: "Completed",
    description: "Analytical problem-solving, advanced mathematics, physics, and computational logic."
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Full-Stack Web Development & APIs",
    issuer: "Complete Coding",
    badge: "Full-Stack Specialist",
    topics: ["Core Concepts", "OOP Principles", "REST APIs & Architecture", "Algorithms"]
  },
  {
    title: "MySQL Database Specialization",
    issuer: "Coursera",
    badge: "Database Specialist",
    topics: ["Relational Database Design", "Indexing", "Query Tuning", "Normalization"]
  },
  {
    title: "Modern JavaScript Development",
    issuer: "Let's Upgrade",
    badge: "JavaScript Certified",
    topics: ["ES6+", "Asynchronous Programming", "Promises & Async/Await", "DOM Architecture"]
  },
  {
    title: "Git & GitHub Version Control",
    issuer: "Let's Upgrade",
    badge: "Git Specialist",
    topics: ["Branching Strategies", "Merge Conflicts", "Pull Requests", "Team Collaboration"]
  },
  {
    title: "CCDL (Certificate in Desktop Literacy)",
    issuer: "HARTRON Jagadhri",
    badge: "IT Essentials",
    topics: ["Information Technology", "Operating Systems", "Computing Essentials"]
  },
  {
    title: "NSQF Level 1, 2, 3, 4 Certification",
    issuer: "NSDC (National Skill Development Corporation)",
    badge: "Govt. Accredited",
    topics: ["National Skill Development Corporation Accredited Technical Proficiencies"]
  }
];
