import type { Degree, Fact, Job, Project, SkillGroup, Testimonial } from "@/types";

export const site = {
  name: "Ahmed Hany",
  role: "Frontend Developer",
  url: "https://ahmedhany-portfolio.vercel.app",
  email: "ahmedhany5321@gmail.com",
  location: "Cairo, EG",
  description:
    "Ahmed Hany builds fast, accessible web products with React and Next.js. Based in Cairo, working worldwide.",
  // Transparent cutout; the hero frame supplies the background color
  portrait: "/images/profile/portrait.png",
  // Same photo flattened on the frame color (#d9cbb5), for social link previews
  ogImage: "/images/profile/portrait.jpg",
  cv: "/Ahmed-Hany-CV.pdf",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmedhanyabdelhamid/",
    },
    { label: "GitHub", href: "https://github.com/ahmedhanydev" },
  ],
};

export const facts: Fact[] = [
  { value: 80, suffix: "%+", label: "Dev time saved across 5+ countries" },
  { value: 100, suffix: "%", label: "SEO audit score at 57357" },
  { value: 15, suffix: "+", label: "Projects shipped" },
  { value: 3, suffix: "+", label: "Years in production" },
];

export const clients = [
  "57357 Hospital",
  "LMFoundry",
  "LitePay",
  "Jazr.io",
  "Hawadeet",
  "Quran Tab",
  "Brand Leveling",
  "Social Magic",
  "Aliyn",
];

export const projects: Project[] = [
  {
    title: "57357 Hospital",
    desc: "Main site for the region’s largest pediatric cancer hospital, with a 100% SEO score.",
    kind: "Healthcare · Main site",
    stack: "Next.js · CMS · Technical SEO",
    img: "/images/projects/57357.jpg",
    href: "https://www.57357.org/en",
  },
  {
    title: "Egypt Cancer Network",
    desc: "One multi-tenant codebase for 5+ countries, with Blackbaud and local payments.",
    kind: "Healthcare · Multi-tenant",
    stack: "Next.js · Multi-tenant · Payments",
    img: "/images/projects/egyptcancernetwork.jpg",
    href: "https://www.egyptcancernetwork.org/en",
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
    title: "FAWZY",
    desc: "A video editor’s portfolio that stays fast under heavy media.",
    kind: "Video editor portfolio",
    stack: "Media-heavy site",
    img: "/images/projects/mahmoudfawzy.png",
    href: "https://mahmoudfawzy.net/",
  },
  {
    title: "LitePay",
    desc: "Virtual card platform with clear, step-by-step flows and fast loads.",
    kind: "Fintech · Virtual cards",
    stack: "Next.js · Tailwind",
    img: "/images/projects/litepay.png",
    href: "https://www.litepay-eg.net/",
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
  {
    title: "Nifty",
    desc: "A playful site with interactive elements, smooth transitions and scroll effects.",
    kind: "Personal · Motion",
    stack: "React · Framer Motion · CSS",
    img: "/images/projects/nifty2.jpeg",
    href: "https://nifty-website-two.vercel.app/",
  },
  {
    title: "Omnifood",
    desc: "A responsive landing page for a meal-subscription service, in plain HTML and CSS.",
    kind: "Personal · Landing page",
    stack: "HTML · CSS · JavaScript",
    img: "/images/projects/Omnifood.png",
    href: "https://omnifood-sable-xi.vercel.app/",
  },
];

export const experience: Job[] = [
  {
    years: "Dec 2024 — Now",
    company: "57357 Hospital",
    role: "Frontend Developer · Cairo",
    now: true,
    bullets: [
      "Led the **multi-tenant architecture** for international expansion: one Next.js codebase serving 5+ countries (USA, Canada, Switzerland and more), saving **80%+ development time** versus separate sites.",
      "Integrated **Blackbaud payments** for the USA and Canada, plus dynamic local payment gateways.",
      "Developed the main hospital website from scratch in **Next.js** — the key digital touchpoint for the Middle East’s largest pediatric cancer hospital.",
      "Built a full-featured **content management dashboard** for internal teams.",
      "Executed complete **SEO optimization** (dynamic and static meta tags, sitemap, robots.txt), achieving a **100% SEO audit score**.",
      "Enhanced the **Pharmacy QMS** system: fixed bugs, improved UI/UX and added clinical features.",
    ],
  },
  {
    years: "Feb 2025 — Oct 2025",
    company: "LMFoundry",
    role: "Frontend Developer · Remote",
    bullets: [
      "Built an **AI-powered dashboard** in React and TypeScript with a focus on smooth UX, reusable components and seamless API integration.",
      "Developed a **real-time streaming chat** (SSE) with dynamic model and knowledge-base switching, plus reliable file and image uploads validated with Zod and Yup.",
      "Refactored API handling for **Azure OpenAI** configs, adding backend defaults and preventing invalid payloads.",
      "Optimized React state management to handle streaming, uploads and model switching **without UI freezes**.",
    ],
  },
  {
    years: "Jul 2024 — Dec 2024",
    company: "Hawadeet",
    role: "Social media platform · Contract",
    bullets: [
      "Built a **cross-platform storytelling app** for web and mobile.",
      "Enhanced state management and data fetching with **Zustand and React Query** for a seamless user experience.",
      "Created a scalable, reusable **UI library** with NativeWind and Gluestack UI to speed up development and keep the design consistent.",
      "Set up coherent navigation with Expo Router (mobile) and the Next.js App Router (web).",
    ],
  },
  {
    years: "Nov 2023 — Dec 2024",
    company: "Quran Tab",
    role: "Chrome extension",
    bullets: [
      "Fixed **10+ reported issues** with Arabic prayer times and Hijri dates.",
      "Wrote developer documentation for future contributors.",
    ],
  },
  {
    years: "Feb 2023 — Dec 2024",
    company: "Freelance",
    role: "Mostaql · Why Not Tech",
    bullets: [
      "Shipped **LitePay, Jazr.io, Brand Leveling, Aliyn, Social Magic and FAWZY**.",
      "Next.js, Tailwind CSS, Zustand and React Query, with CMS, localization and API-driven backends.",
      "A responsive React e-commerce site for Why Not Tech.",
    ],
  },
  {
    years: "2022",
    company: "Kalbonyan Elmarsos",
    role: "Software Engineer Intern",
    bullets: [
      "Mentored by senior engineers: **6 projects** and **15 project-based courses**.",
    ],
  },
];

export const education: Degree[] = [
  {
    years: "Sep 2023 — Jul 2025",
    title: "Postgraduate Diploma in Computer Science",
    school: "Cairo University",
    tags: [
      "Data Structures",
      "Algorithms",
      "Computer Systems Engineering",
      "Mathematics",
    ],
    mark: "CS",
  },
  {
    years: "Sep 2019 — Jul 2023",
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

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { title: "Frameworks", items: ["React", "Next.js", "React Native", "Expo"] },
  { title: "State & data", items: ["React Query", "Zustand", "Redux Toolkit", "Zod", "Yup", "SSE streaming"] },
  { title: "Styling & UI", items: ["Tailwind CSS", "Framer Motion", "NativeWind", "Gluestack UI", "Ant Design", "Bootstrap"] },
  { title: "Backend (familiar)", items: ["Node.js", "Express", "REST APIs", "Next.js API Routes", "MongoDB"] },
  { title: "Tools & delivery", items: ["Git & GitHub", "CI/CD", "Docker", "Jest", "React Testing Library", "Vercel", "Netlify", "Figma"] },
];

export const practices = [
  "Accessibility",
  "Semantic HTML",
  "Technical SEO",
  "Performance",
  "Responsive & cross-browser",
  "Design systems",
  "Testing",
  "Code reviews",
  "Arabic & RTL",
];

// Quotes are verbatim; `pull` is an excerpt from `text`
export const testimonials: Testimonial[] = [
  {
    name: "Moujtaba Khalifa",
    role: "Founder, Brand Leveling",
    initials: "MK",
    pull: "I provided him with just a few subpoints, and he transformed them into a fully functional, beautifully designed website with his own creative input.",
    text: [
      "I had the pleasure of working with Ahmed on building a website for my business, and I couldn’t be more impressed with the results. Ahmed demonstrated incredible speed and creativity throughout the process. I provided him with just a few subpoints, and he transformed them into a fully functional, beautifully designed website with his own creative input.",
      "The color combinations he selected were visually appealing and perfectly aligned with my brand, and the website he delivered is optimized for speed, with no lag and all buttons working efficiently and effectively. The bilingual feature (Arabic and English) was implemented seamlessly, showcasing his attention to detail and technical expertise.",
      "If you’re looking for someone to create a website or landing page, I highly recommend Ahmed. His professionalism, creativity, and ability to deliver a high-quality website in a short time are truly exceptional.",
    ],
  },
  {
    name: "Amr Fouad",
    role: "Team Lead, Quran Tab",
    initials: "AF",
    pull: "What truly sets Ahmed apart is his exceptional organizational and project management abilities.",
    source: "LinkedIn recommendation · Nov 2024",
    text: [
      "I had the pleasure of working with Ahmed, an aspiring developer who stands out for his curiosity, dedication, and relentless drive to learn and grow. Ahmed is not only hardworking but also deeply committed to mastering his craft, consistently seeking opportunities to enhance his skills and knowledge in development.",
      "What truly sets Ahmed apart is his exceptional organizational and project management abilities. He has a natural talent for keeping tasks on track, coordinating effectively, and ensuring that every detail is accounted for. These qualities make him a valuable contributor to any team.",
      "Ahmed’s combination of technical curiosity, strong work ethic, and outstanding organizational skills make him an excellent addition to any team. I highly recommend him for roles where his dedication and potential can shine!",
    ],
  },  {
    name: "Yousef",
    role: "Client, freelance project",
    initials: "Y",
    lang: "ar",
    pull: "ساعدني بعمل الموقع بافضل صورة ممكنة حتى اني طلبت اضافات لم تكن موجودة وقام بعملها لي بكل صدر رحب",
    text: [
      "انسان راقي بالتعامل وساعدني بعمل الموقع بافضل صورة ممكنة حتى اني طلبت اضافات لم تكن موجودة وقام بعملها لي بكل صدر رحب واهتم بالمشروع افضل اهتمام",
      "انصح بالعمل معه في مشاريعكم الالكترونية",
    ],
  },
];
