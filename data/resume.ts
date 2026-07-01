/**
 * data/resume.ts
 *
 * SINGLE SOURCE OF TRUTH for all content on the site.
 * Every field here is taken directly from Pearl's resume + explicitly
 * confirmed details (email, repo URLs). Nothing is invented.
 *
 * Fields marked `placeholder: true` are NOT on the resume and must be
 * confirmed/replaced before launch. They render with a visible
 * "placeholder" treatment in the UI (see PlaceholderNote component)
 * rather than being silently filled in.
 */

export const personal = {
  name: "Pearl Rana",
  tagline: "Computer Science & Business Systems student",
  year: "Third year",
  phone: "+91 7018459038",
  email: "pearlrana06@icloud.com",
  github: "https://github.com/pearlrana",
  linkedin: "https://www.linkedin.com/in/pearl-rana-51080b32b/?isSelfProfile=false",
  linkedinIsPlaceholder: false,
  location: "Patiala, Punjab", // from old portfolio, not on resume
  locationIsPlaceholder: true,
} as const;

export const education = {
  institution: "Thapar Institute of Engineering and Technology, Patiala",
  degree: "Bachelor of Engineering (B.E.) in Computer Science and Business Systems",
  expectedGraduation: "2028",
  relevantCoursework: [
    "Software Engineering",
    "Design Thinking",
    "Linear Algebra",
    "Probability and Statistics",
    "Data Analytics",
  ],
} as const;

export type Project = {
  slug: string;
  title: string;
  stackLine: string;
  github: string;
  liveDemo: string | null;
  livePlaceholder: boolean;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: string;
  whatILearned: string;
  note: string; // handwritten margin note
};

export const projects: Project[] = [
  {
    slug: "pigment-demand-studio",
    title: "Pigment Demand Studio",
    stackLine: "React.js · FastAPI · SQLite · ARIMA",
    github: "https://github.com/pearlrana/Product-Management-Analysis",
    liveDemo: null,
    livePlaceholder: true,
    overview:
      "A full-stack demand forecasting platform pairing a React.js front end with FastAPI backend services for real-time data exchange.",
    problem:
      "Inventory and demand decisions are hard to make without a clear, accessible view of forecasted trends. Raw model output isn't usable by itself.",
    solution:
      "Built RESTful API endpoints connecting ARIMA-based forecasting models to the application, automating demand and inventory predictions and surfacing them through the product.",
    techStack: ["React.js", "FastAPI", "SQLite", "ARIMA", "REST APIs"],
    keyFeatures: [
      "Real-time data exchange between React front end and FastAPI services",
      "RESTful endpoints connecting ARIMA forecasting models to the app",
      "Interactive dashboards visualizing inventory trends and forecasting insights",
    ],
    challenges:
      "[Placeholder — not detailed on resume. Add specifics on the hardest technical problem you solved here.]",
    whatILearned:
      "[Placeholder — not detailed on resume. Add a sentence on your key takeaway from this project.]",
    note: "probably my favourite",
  },
  {
    slug: "servestats",
    title: "ServeStats: Restaurant Data Analytics System",
    stackLine: "SQL · DBMS · React.js",
    github: "https://github.com/pearlrana/Servestats",
    liveDemo: null,
    livePlaceholder: true,
    overview:
      "A restaurant data analytics system analyzing sales and customer data through optimized SQL and an interactive React.js dashboard.",
    problem:
      "Restaurant sales and customer data needed to be queried efficiently and presented in a way that supports data-driven decisions.",
    solution:
      "Wrote optimized SQL queries using JOIN, GROUP BY, HAVING, and aggregate functions, applying database normalization to improve data integrity and reduce redundancy.",
    techStack: ["SQL", "DBMS", "React.js"],
    keyFeatures: [
      "Optimized SQL queries (JOIN, GROUP BY, HAVING, aggregates) for sales/customer analysis",
      "Database normalization improving integrity and query performance",
      "Interactive React.js dashboards for revenue trends, customer behavior, and product performance",
    ],
    challenges:
      "[Placeholder — not detailed on resume. Add specifics on a normalization or query-performance challenge you solved.]",
    whatILearned:
      "[Placeholder — not detailed on resume. Add a sentence on your key takeaway from this project.]",
    note: "still learning SQL :)",
  },
];

export type SkillGroup = {
  category: string;
  items: { name: string; usedIn: string[] }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", usedIn: ["Pigment Demand Studio"] },
      { name: "C++", usedIn: [] },
      { name: "C", usedIn: [] },
      { name: "JavaScript", usedIn: ["Pigment Demand Studio", "ServeStats"] },
      { name: "SQL", usedIn: ["ServeStats"] },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React.js", usedIn: ["Pigment Demand Studio", "ServeStats"] },
      { name: "FastAPI", usedIn: ["Pigment Demand Studio"] },
    ],
  },
  {
    category: "Web",
    items: [
      { name: "HTML5", usedIn: [] },
      { name: "CSS3", usedIn: [] },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQLite", usedIn: ["Pigment Demand Studio"] },
      { name: "MySQL", usedIn: [] },
    ],
  },
  {
    category: "Core CS",
    items: [
      { name: "Data Structures and Algorithms", usedIn: [] },
      { name: "Object Oriented Programming", usedIn: [] },
      { name: "Operating Systems", usedIn: [] },
      { name: "DBMS", usedIn: ["ServeStats"] },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", usedIn: ["Pigment Demand Studio", "ServeStats"] },
      { name: "GitHub", usedIn: ["Pigment Demand Studio", "ServeStats"] },
      { name: "VS Code", usedIn: [] },
    ],
  },
];

export type LeadershipItem = {
  role: string;
  org: string;
  points: string[];
};

export const leadership: LeadershipItem[] = [
  {
    role: "R&D and Tech Team Member",
    org: "Echoes",
    points: [
      "Collaborated with cross-functional teams to plan and execute technical events and support event operations.",
      "Coordinated logistics and technical resources for workshops and competitions, strengthening organizational and teamwork skills.",
    ],
  },
  {
    role: "Member",
    org: "ACM Student Chapter",
    points: [
      "Participated in coding workshops and peer-learning sessions to strengthen programming and problem-solving skills.",
      "Engaged with technical talks and collaborative coding sessions to stay current with industry practices and tools.",
    ],
  },
  {
    role: "Member",
    org: "Mudra Cultural Society",
    points: [
      "Assisted in organizing cultural events and collaborated with teams to ensure smooth execution of activities.",
      "Coordinated with peers under tight timelines to deliver well-planned events, building communication and leadership skills.",
    ],
  },
];

// Not present on the resume — left as an explicit placeholder per "never invent" rule.
export const certifications: { name: string; issuer: string; year: string }[] = [];
