export const profile = {
  name: "Lawrence Muriithi Marete",
  role: "Software Developer",
  tagline: "Full-stack developer building scalable web platforms, APIs, and payment integrations across fintech, health, and agri-tech in Kenya.",
  location: "Nairobi, Kenya",
  image: "/profile.jpg",
  email: "laurencemmarete@gmail.com",
  phone: "+254722368336",
  whatsapp: "https://wa.me/254722368336",
  linkedin: "https://linkedin.com/in/lawrence-marete-a6774927a",
  github: "https://github.com/lauspence",
  summary:
    "Software Developer with experience designing, developing, and deploying scalable web applications, enterprise systems, and digital platforms. Skilled in full-stack development using Python, Django, PHP, Laravel, JavaScript, and Node.js, with expertise in API development, database design, payment integrations, and cloud-based deployment. Currently contributing to the architecture, development, and maintenance of production systems across multiple industries.",
};

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Lead Software Developer",
    company: "PulseWave Technologies",
    location: "Ruiru, Kenya",
    period: "Feb 2025 — Present",
    bullets: [
      "Progressed from Software Developer to Lead Software Developer, contributing to full-stack system development, deployment, and maintenance of production systems.",
      "Design and implement RESTful APIs for web and mobile platforms, and build scalable backend systems using Python, Django, Node.js, and relational databases.",
      "Implement secure authentication, role-based access control, and data validation.",
      "Integrate third-party services including M-Pesa payments, SMS, and notification APIs.",
      "Lead frontend architecture improvements and enforce code quality standards across the team.",
    ],
  },
  {
    role: "Lead Frontend Developer",
    company: "Gulf Africa Innovation Technologies",
    period: "Sep 2025 — Present · Part-time",
    bullets: [
      "Oversee frontend development across multiple production projects — architecture, UI upgrades, performance, and coordination with backend engineers.",
      "Contributed to major platforms including AMAC Africa Mega Agri Corp and the Digiafya Health Platform.",
      "Integrated external financial systems including Trevex, KCB, and Finsprint to enable payments and third-party data exchange.",
      "Maintained code quality through structured reviews, documentation, and modern development practices.",
    ],
  },
  {
    role: "System Administrator",
    company: "Kenya Airports Authority",
    location: "Nairobi, Kenya",
    period: "Apr 2024 — Jul 2024",
    bullets: [
      "Managed and maintained IT infrastructure — servers, network devices, and end-user systems — at Jomo Kenyatta International Airport.",
      "Participated in cybersecurity assessments and routine system monitoring using Nmap and Metasploit.",
      "Supported deployment of new software systems and user training sessions.",
    ],
  },
];

export interface FeaturedProject {
  name: string;
  description: string;
  links: { label: string; url: string }[];
  tags: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Daka Cosmetics",
    description:
      "Full-stack e-commerce storefront with an admin CMS, cart with quantity-based pricing, and an M-Pesa STK Push checkout (Safaricom Daraja API) alongside WhatsApp ordering.",
    links: [
      { label: "Live site", url: "https://daka-cosmetics.vercel.app" },
      { label: "GitHub", url: "https://github.com/lauspence/daka-cosmetics" },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "M-Pesa Daraja"],
  },
  {
    name: "AMAC Africa Mega Agri Corp",
    description:
      "Marketplace connecting farmers and buyers — built dashboards and product management features across the Mazao and Comex platforms.",
    links: [
      { label: "Mazao", url: "https://mazao.amacplc.com/" },
      { label: "Comex", url: "https://comex.amacplc.com/" },
    ],
    tags: ["Marketplace", "Dashboards", "REST APIs"],
  },
  {
    name: "AMAC Oil & Gas Marketplace",
    description:
      "Integrated digital marketplace connecting fuel suppliers, LPG distributors, lubricant providers, and asset financing services across Kenya.",
    links: [{ label: "Live site", url: "https://petroleum.amacplc.com/" }],
    tags: ["Marketplace", "Supply Chain", "Embedded Finance"],
  },
  {
    name: "Digiafya Health Platform",
    description:
      "Digital healthcare platform — developed modules for authentication and patient data management.",
    links: [{ label: "Live site", url: "https://digiafya.com/" }],
    tags: ["Healthcare", "Authentication", "Data Management"],
  },
  {
    name: "Nyota Fund System",
    description:
      "Government fund management system supporting project tracking and reporting.",
    links: [
      { label: "Live site", url: "https://nyota.execuget.co.ke/" },
      { label: "Alt domain", url: "https://nyotaproject.go.ke/" },
    ],
    tags: ["GovTech", "Fund Management", "Reporting"],
  },
  {
    name: "Peakridge Real Estate CRM",
    description:
      "Multi-module CRM platform with lead management, project management, and role-based dashboards.",
    links: [{ label: "Live site", url: "https://app.peakridge.co.ke/" }],
    tags: ["CRM", "RBAC", "Real Estate"],
  },
  {
    name: "Nairobi Pesa City (NPC)",
    description:
      "Financial ecosystem initiative positioning Nairobi as an international financial hub — frontend/backend development, UX, and system integration.",
    links: [
      { label: "Live site", url: "https://npc-ifc.com/" },
      { label: "Sukuk platform", url: "http://invest-sukuk.npc-ifc.com/" },
    ],
    tags: ["FinTech", "System Integration"],
  },
  {
    name: "FACT Limited Website",
    description:
      "Official website for FaCT Ltd — responsive UI, performance optimization, and production deployment.",
    links: [{ label: "Live site", url: "https://factfarm.africa/" }],
    tags: ["Responsive UI", "Deployment"],
  },
];

export interface OpenSourceProject {
  name: string;
  description: string;
  url: string;
  language: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "fact-org",
    description: "React + TypeScript + Vite frontend built for FACT Limited.",
    url: "https://github.com/lauspence/fact-org",
    language: "TypeScript",
  },
  {
    name: "fact-strapi-api",
    description: "Strapi headless CMS API powering the FACT Limited website.",
    url: "https://github.com/lauspence/fact-strapi-api",
    language: "TypeScript",
  },
  {
    name: "IRM",
    description: "Laravel-based information/records management system.",
    url: "https://github.com/lauspence/IRM",
    language: "PHP",
  },
  {
    name: "laravel-payroll-system",
    description: "Payroll management system built with Laravel.",
    url: "https://github.com/lauspence/laravel-payroll-system",
    language: "Laravel",
  },
  {
    name: "sacco-management",
    description: "SACCO (savings & credit cooperative) management system.",
    url: "https://github.com/lauspence/sacco-management",
    language: "HTML",
  },
  {
    name: "Courier",
    description: "Courier and parcel delivery management system.",
    url: "https://github.com/lauspence/Courier",
    language: "HTML",
  },
  {
    name: "garage",
    description: "Garage / auto workshop management system.",
    url: "https://github.com/lauspence/garage",
    language: "HTML",
  },
  {
    name: "Adruino-Light-System",
    description:
      "Automated night-light system using Arduino Uno, a photoresistor, and a PIR motion sensor.",
    url: "https://github.com/lauspence/Adruino-Light-System",
    language: "C++",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "PHP", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React", "Django", "Laravel"],
  },
  {
    category: "Web",
    items: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "RESTful APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Schema Design", "Query Optimization"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Linux Administration", "CI/CD", "Vercel"],
  },
  {
    category: "Payments & Integrations",
    items: ["M-Pesa Daraja (STK Push)", "Payment APIs", "SMS APIs", "Notification Services"],
  },
  {
    category: "Security",
    items: ["Penetration Testing", "Nmap", "Metasploit", "RBAC", "Web App Security"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub"],
  },
];

export const certifications = [
  "Cyber Security — Zalego Academy",
  "Certificate in Programming Python — KCA University",
  "Networking Basics — Cisco Networking Academy",
];

export const education = {
  school: "KCA University",
  degree: "B.Sc. Applied Computing, majoring in Software Development",
  period: "Sep 2020 — Nov 2024",
};
