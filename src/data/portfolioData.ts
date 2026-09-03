export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumePlaceholder?: string;
  resumeUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  isPrijsmSpecific?: boolean;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  fullName?: string;
  description: string;
  details?: string;
  technology: string[];
  frontend?: string[];
  backend?: string[];
  database?: string[];
  ai?: string[];
  email?: string[];
  highlights: string[];
  github: string;
  demo: string;
  visualPlaceholder: string;
  image?: string;
  systemFlow?: string[];
  riskOutcomes?: {
    safe: string;
    warning: string;
    fraud: string;
  };
  technicalBehavior?: string[];
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
  scoreLabel: string;
  scoreValue: string;
}

export interface Certification {
  name: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "Mohammed Sherif U",
  title: "Computer Science Engineering Student",
  subtitle: "Aspiring Software Developer",
  tagline: "Building practical web and AI-powered solutions for real-world problems.",
  location: "Coimbatore, India",
  email: "harsithh165@gmail.com",
  phone: "+91 9790588350",
  github: "https://github.com/sherif0786",
  linkedin: "https://www.linkedin.com/in/mohammed-sherif-u-80190a2b5",
  leetcode: "https://leetcode.com/u/Mohammedsherif/",
  resumePlaceholder: "Download Resume",
  resumeUrl: "/Mohammed_Sherif_Resume.pdf",
};

export const aboutContent = {
  heading: "About Me",
  paragraph: "I am a Computer Science Engineering student at V.S.B College of Engineering Technical Campus with a strong interest in software development and practical problem solving. I enjoy building applications that combine web technologies, databases, and artificial intelligence to solve real-world problems. My projects include an AI-powered job screening platform and PRIJSM, an intelligent system designed to detect and prevent e-commerce return fraud. I have also gained practical exposure through web development and SQL internships. Currently, I am focused on strengthening my programming, software development, database, and AI-related skills while preparing for an entry-level software development role."
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Frameworks",
    skills: ["Flask"],
  },
  {
    title: "Databases",
    skills: ["SQLite", "SQL"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "VS Code", "Antigravity", "AI Prompting Basics"],
  },
  {
    title: "Core Concepts",
    skills: ["Web Development", "Role-Based Authentication", "Software Development", "Problem Solving"],
  },
  {
    title: "Additional Technologies (Used in PRIJSM V5)",
    skills: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "Firebase Firestore",
      "Google Gemini AI SDK",
      "Nodemailer",
    ],
    isPrijsmSpecific: true,
  },
];

export const projects: Project[] = [
  {
    id: "career-intelligence",
    number: "01",
    name: "AI Career Intelligence Engine Integration",
    description: "AI-powered job screening platform designed to automate resume analysis and candidate evaluation for recruitment workflows.",
    technology: ["Flask", "SQLite", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Developed an AI-powered job screening platform to automate resume analysis and candidate evaluation for recruitment workflows.",
      "Implemented Flask-based backend functionality with SQLite database integration to manage users, job postings, applications, and screening results.",
      "Designed responsive web interfaces using HTML, CSS, and JavaScript to provide a user-friendly experience across devices.",
      "Built automated resume screening and candidate matching features to improve recruitment efficiency and support data-driven hiring decisions.",
    ],
    github: "[PROJECT GITHUB URL NOT PROVIDED]",
    demo: "[PROJECT LIVE DEMO URL NOT PROVIDED]",
    visualPlaceholder: "[PROJECT SCREENSHOT PLACEHOLDER]",
    image: "/images/project_career_ai.jpg",
  },
  {
    id: "prijsm",
    number: "02",
    name: "PRIJSM V5",
    fullName: "Predictive Refund Intelligence & Joint Scoring Model Core Gatekeeper Engine",
    description: "Enterprise-grade web application designed to detect and prevent e-commerce return fraud in real time.",
    details: "PRIJSM V5 is an intelligent return-fraud detection system that evaluates multiple customer and return-request factors to generate a real-time 0–100% fraud probability score and actionable business guidance.",
    frontend: ["React 19", "Vite", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lucide React"],
    backend: ["Node.js", "Express.js", "TypeScript"],
    database: ["Google Firebase Firestore"],
    ai: ["Google Gemini AI SDK"],
    email: ["Nodemailer / SMTP"],
    technology: [
      "React 19", "Vite", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lucide React",
      "Node.js", "Express.js", "Firebase Firestore", "Gemini AI SDK", "Nodemailer"
    ],
    highlights: [
      "Firestore stores customer profiles and return request logs.",
      "Gemini AI evaluates dynamic multi-variable return risk factors.",
      "The system generates a 0–100% fraud probability score.",
      "The Decision Gatekeeper converts the risk result into an operational outcome.",
      "Firestore status is updated after the decision.",
      "Nodemailer can dispatch audit reports through SMTP."
    ],
    systemFlow: [
      "Customer / Warehouse Inspector",
      "React Web Interface",
      "Node.js + Express API",
      "Firebase Firestore + Gemini AI",
      "Decision Gatekeeper",
      "Status Update + Audit Email"
    ],
    riskOutcomes: {
      safe: "SAFE (<30%) — Auto-refund approved",
      warning: "WARNING (30–70%) — Hold for warehouse inspection",
      fraud: "FRAUD ALERT (>70%) — Payout blocked and account flagged"
    },
    technicalBehavior: [
      "Firestore stores customer profiles and return request logs.",
      "Gemini AI evaluates dynamic multi-variable return risk factors.",
      "The system generates a 0–100% fraud probability score.",
      "The Decision Gatekeeper converts the risk result into an operational outcome.",
      "Firestore status is updated after the decision.",
      "Nodemailer can dispatch audit reports through SMTP."
    ],
    github: "[PROJECT GITHUB URL NOT PROVIDED]",
    demo: "[PROJECT LIVE DEMO URL NOT PROVIDED]",
    visualPlaceholder: "[PROJECT SCREENSHOT PLACEHOLDER]",
    image: "/images/project_prijsm_v5.jpg"
  }
];

export const experiences: Experience[] = [
  {
    role: "Database Internship – SQL",
    company: "Tamizhan Skills",
    date: "December 2025",
    highlights: [
      "Learned core database concepts, data management, and database management systems.",
      "Developed and executed SQL queries for data retrieval, manipulation, and analysis.",
      "Improved understanding of database design, data organization, and efficient data handling."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Tamizhan Skills",
    date: "August 2025 – September 2025",
    highlights: [
      "Built responsive web pages by applying practical web development techniques and modern coding practices.",
      "Collaborated with team members to complete assigned development tasks within deadlines.",
      "Gained hands-on exposure to real-world web development workflows and professional communication."
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "V.S.B College of Engineering Technical Campus, Coimbatore",
    date: "2023 – Present",
    scoreLabel: "CGPA",
    scoreValue: "8.2"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Annai Matric Higher Secondary School, Tirupur",
    date: "2022 – 2023",
    scoreLabel: "Percentage",
    scoreValue: "85%"
  }
];

export const certifications: Certification[] = [
  {
    name: "TCS iON Career Edge: Young Professional Program"
  },
  {
    name: "NPTEL: Cloud Computing Certification"
  }
];

export const achievements: Achievement[] = [
  {
    title: "Team Leader — Smart India Hackathon (SIH)",
    date: "September 2025",
    description: "Led a team in designing and developing an innovative software solution for a real-world problem, demonstrating leadership, teamwork, project coordination, and technical problem-solving skills."
  }
];
