import type { Degree, Fact, Job, Project, StackGroup } from "@/types";

export const site = {
  name: "Ahmed Hany",
  role: "Frontend Developer",
  url: "https://ahmedhany-portfolio.vercel.app",
  email: "ahmedhany5321@gmail.com",
  location: "Cairo, EG",
  description:
    "Ahmed Hany builds fast, accessible web products with React and Next.js. Based in Cairo, working worldwide.",
  portrait: "/images/profile/IMG_2556.jpg",
  cv: "/Ahmed-Hany-CV.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmedhanyabdelhamid/" },
    { label: "GitHub", href: "https://github.com/ahmedhanydev" },
  ],
};

export const facts: Fact[] = [
  { value: 100, suffix: "%", label: "SEO score, 57357 hospital site" },
  { value: 11, label: "Projects shipped" },
  { value: 3, suffix: "+", label: "Years in production" },
];

export const clients = [
  "57357 Hospital",
  "LMFoundry",
  "LitePay",
  "Jazr.io",
  "7awadeet",
  "Quran Tab",
  "Brand Leveling",
  "Social Magic",
  "Aliyn",
];

export const projects: Project[] = [
  {
    title: "LitePay",
    desc: "Virtual card platform with clear, step-by-step flows and fast loads.",
    kind: "Fintech · Virtual cards",
    stack: "Next.js · Tailwind",
    img: "/images/projects/litepay.png",
    href: "https://www.litepay-eg.net/",
  },
  {
    title: "Jazr.io",
    desc: "Accounting that restaurant and café owners can use without an accountant.",
    kind: "Restaurant accounting",
    stack: "Next.js",
    img: "/images/projects/jazr.png",
    href: "https://jazr.io/",
  },
  {
    title: "Aliyn",
    desc: "Company site for a software house, sharp on every screen size.",
    kind: "Software house",
    stack: "JavaScript · Tailwind",
    img: "/images/projects/aliyn.png",
    href: "https://aliyn-portfolio.vercel.app/",
  },
  {
    title: "Brand Leveling",
    desc: "Feature-rich agency site with a responsive, polished interface.",
    kind: "Branding agency",
    stack: "Responsive web",
    img: "/images/projects/brandleveling.png",
    href: "https://brandleveling.com/",
  },
  {
    title: "Social Magic",
    desc: "Localized agency site, tuned for media and performance.",
    kind: "Marketing agency",
    stack: "Localization · Performance",
    img: "/images/projects/soicalmagic.png",
    href: "https://soicalmagic.com/",
  },
  {
    title: "FAWZY",
    desc: "A video editor’s portfolio that stays fast under heavy media.",
    kind: "Video editor portfolio",
    stack: "Media-heavy site",
    img: "/images/projects/mahmoudfawzy.png",
    href: "https://mahmoudfawzy.net/",
  },
  {
    title: "Admin Dashboard",
    desc: "Full-stack dashboard: users, products and transactions on MongoDB.",
    kind: "Personal · Full stack",
    stack: "Next.js · MongoDB",
    img: "/images/projects/dashboard.png",
    href: "https://admin-dashboard-nextjs1.vercel.app/dashboard",
  },
  {
    title: "T-Shop",
    desc: "Online store with product browsing, cart and a Node.js API.",
    kind: "Personal · E-commerce",
    stack: "React · Tailwind · Node.js",
    img: "/images/projects/t-shop.jpg",
    href: "https://t-shop-app.vercel.app/",
  },
];

export const experience: Job[] = [
  {
    years: "2024 — Now",
    company: "57357 Hospital",
    role: "Frontend Developer · Cairo",
    now: true,
    bullets: [
      "Built the main website of one of the Middle East’s largest pediatric cancer hospitals from scratch in Next.js.",
      "Built a content management dashboard so internal teams publish on their own.",
      "Full technical SEO — metadata, sitemap, robots.txt, linking — reaching a 100% audit score.",
      "Improved the Pharmacy QMS system with fixes and features from clinical feedback.",
    ],
  },
  {
    years: "2025 — Now",
    company: "LMFoundry",
    role: "Frontend Developer · Remote",
    now: true,
    bullets: [
      "AI-powered dashboard in React and TypeScript with reusable components.",
      "Real-time streaming chat over SSE, model switching, and uploads validated with Zod and Yup.",
      "Refactored Azure OpenAI API handling, cutting request errors.",
    ],
  },
  {
    years: "2024",
    company: "7awadeet",
    role: "Frontend Developer · Contract",
    bullets: [
      "Cross-platform storytelling app for web and mobile with Expo Router and the Next.js App Router.",
      "Zustand and React Query for state and data; a shared UI library with NativeWind and Gluestack UI.",
    ],
  },
  {
    years: "2023 — Now",
    company: "Quran Tab",
    role: "Chrome extension",
    bullets: [
      "Fixed 10+ reported issues with Arabic prayer times and Hijri dates.",
      "Wrote developer documentation for future contributors.",
    ],
  },
  {
    years: "2023",
    company: "Freelance",
    role: "Mostaql · Why Not Tech",
    bullets: [
      "Shipped LitePay, Jazr.io, Brand Leveling, Aliyn, Social Magic and FAWZY.",
      "Next.js, Tailwind CSS, Zustand and React Query, with CMS, localization and API-driven backends.",
      "A responsive React e-commerce site for Why Not Tech.",
    ],
  },
  {
    years: "2022",
    company: "Kalbonyan Elmarsos",
    role: "Software Engineer Intern",
    bullets: ["Mentored by senior engineers: 6 projects and 15 project-based courses."],
  },
];

export const education: Degree[] = [
  {
    years: "2023 — 2025",
    title: "Postgraduate Diploma in Computer Science",
    school: "Cairo University",
    tags: ["Data Structures", "Algorithms", "Computer Systems Engineering", "Mathematics"],
    mark: "CS",
  },
  {
    years: "2019 — 2023",
    title: "Bachelor of Arts",
    school: "Minia University",
    tags: ["Literary Analysis", "Art History", "Sociology", "Philosophy"],
    mark: "BA",
  },
  {
    years: "2022",
    title: "Software Engineering Internship",
    school: "Kalbonyan Elmarsos",
    tags: ["6 projects", "15 project-based courses", "Senior mentorship"],
    mark: "SE",
  },
];

export const stack: StackGroup[] = [
  { title: "Core", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"] },
  { title: "Styling", items: ["Tailwind", "Framer Motion", "Bootstrap", "NativeWind"] },
  { title: "Data", items: ["React Query", "Zustand", "Redux", "Zod", "SSE"] },
  { title: "Beyond", items: ["Expo", "React Native", "Node.js", "MongoDB", "Git"] },
];
