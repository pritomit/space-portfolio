import { FaYoutube, FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const PERSONAL_INFO = {
  name: "PRITOMX",
  role: "Cyber Full Stack Developer | MERN Stack | Google Certified",
  location: "Chittagong, Bangladesh",
  email: "your@email.com",
  phone: "+880-XXXXXXXXXX",
  upwork: {
    status: "Top Rated",
    jobSuccess: "96%",
    rate: "$10/hr",
    jobs: "2 Jobs",
    hours: "11 Hours",
    rating: "4.80 ⭐",
    clients: "2+ UK clients served",
  },
  summary:
    "Cyber Full Stack Developer with hands-on experience building secure, scalable web applications using the MERN stack. Completed professional Full Stack Development training at Creative IT (2025) and certified by Google. I combine high-performance development with 3D web experiences (Three.js + GSAP) and cybersecurity audits. Served 2+ UK clients with a 4.80 ⭐ rating on Upwork.",
};

export const SKILL_DATA = [
  { skill_name: "HTML5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS3", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS3", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Material UI", image: "mui.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "Prisma", image: "prisma.png", width: 70, height: 70 },
  { skill_name: "GraphQL", image: "graphql.png", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
] as const;

export const TECHNICAL_SKILLS_CATEGORIES = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux", "Tailwind CSS", "Bootstrap", "GSAP", "Three.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API", "JWT Auth", "Socket.io"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "3D & Animation",
    skills: ["Three.js", "GSAP", "WebGL", "CSS Animations"],
  },
  {
    category: "Cybersecurity",
    skills: ["Kali Linux", "Burp Suite", "Nmap", "Wireshark", "OWASP Top 10", "Vulnerability Assessment", "Penetration Testing", "Security Audit"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Netlify", "Heroku"],
  },
];

export const EXPERIENCE = [
  {
    role: "Freelance Full Stack Developer",
    company: "Upwork (Remote)",
    period: "2024 – Present",
    points: [
      "Delivered 2 full-stack projects for UK clients with 96% Job Success",
      "Completed 11+ hours of development work at $10/hr",
      "Maintained a 4.80 ⭐ average rating across all projects",
      "Built secure MERN apps with 3D UI, APIs, and payment integrations",
      "Conducted vulnerability assessments and security audits",
    ],
  },
];

export const PROJECTS = [
  {
    title: "MERN Stack E-commerce App with 3D UI",
    description:
      "Full e-commerce platform with Three.js 3D viewer + GSAP animations. Features: Cart, Stripe Payment, JWT Auth, Admin Dashboard. Result: 60% higher engagement, 4.80 ⭐ rating.",
    image: "/projects/project-1.png",
    link: "https://github.com/pritomit",
  },
  {
    title: "PritomX Hub – Custom GitHub Search Engine",
    description:
      "Built from scratch using GitHub API, React, Node.js, MongoDB. Features advanced search, filtering, caching, and a responsive UI.",
    image: "/projects/project-2.png",
    link: "https://github.com/pritomit",
  },
  {
    title: "Technical SEO, GA4 Setup & Security Audit",
    description:
      "Fixed critical vulnerabilities, optimized backend endpoints, and implemented GA4 analytics setup. Result: 96% security score.",
    image: "/projects/project-3.png",
    link: "https://github.com/pritomit",
  },
  {
    title: "Web App Vulnerability Audit & Patching",
    description:
      "OWASP Top 10 assessment, penetration testing, and vulnerability patching for web applications. Result: All critical vulnerabilities fixed.",
    image: "/projects/project-1.png",
    link: "https://github.com/pritomit",
  },
] as const;

export const EDUCATION = [
  {
    institution: "Creative IT Institute",
    title: "Full Stack Development",
    period: "2024 – 2025",
    description: "Completed professional training in MERN Stack, API Development, and Cybersecurity.",
  },
  {
    institution: "Khan Academy",
    title: "Online Learning",
    period: "2022 – 2024",
    description: "Focused on Computer Science, Programming, and Mathematics.",
  },
];

export const CERTIFICATIONS = [
  { name: "Google Certified", year: "2025" },
  { name: "Full Stack Development — Creative IT Institute", year: "2025" },
  { name: "Digital Marketing (Grade A Distinction) — Creative IT", id: "DM-23105006" },
];

export const ACHIEVEMENTS = [
  "Upwork Top Rated | 96% Job Success | 2 Jobs | 11 Hours",
  "2+ UK clients served | 4.80 ⭐ on all projects",
];

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/pritomit",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Contact & Profile",
    data: [
      {
        name: "Upwork: Top Rated (96% Job Success)",
        icon: null,
        link: "https://upwork.com",
      },
      {
        name: "Email: your@email.com",
        icon: FaEnvelope,
        link: "mailto:your@email.com",
      },
      {
        name: "Phone: +880-XXXXXXXXXX",
        icon: FaPhoneAlt,
        link: "tel:+880-XXXXXXXXXX",
      },
      {
        name: "Location: Chittagong, Bangladesh",
        icon: FaMapMarkerAlt,
        link: "#",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/pritomit",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Google Certified (2025)",
        icon: null,
        link: "#certifications",
      },
      {
        name: "Creative IT Full Stack Dev",
        icon: null,
        link: "#education",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:your@email.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Credentials",
    link: "#credentials",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/pritomit/space-portfolio",
};
