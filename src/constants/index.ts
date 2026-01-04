import type {
  Site,
  SocialLink,
  Project,
  Experience,
  NavigationLink,
} from "@/types";

const TECH_STACK = {
  REACT: "React.js",
  NEXT: "Next.js",
  TS: "TypeScript",
  JS: "JavaScript",
  TAILWIND: "Tailwind CSS",
  SHADCN: "Shadcn UI",
  FIREBASE: "Firebase",
  QUERY: "Tanstack Query",
  REDUX: "Redux",
  CYPRESS: "Cypress",
  LEAFLET: "Leaflet",
  SVELTE: "SvelteKit",
  DAISY: "DaisyUI",
  RTK: "RTK Query",
} as const;

export const SITE: Site = {
  title: "Nelan",
  description: "Site.description",
  author: "Nelan",
  href: "http://localhost:3000",
};

export const NAV_LINKS: NavigationLink[] = [
  {
    href: "/",
    label: "Navigation.home",
  },
  {
    href: "/blog",
    label: "Navigation.blog",
  },
  {
    href: "/contact",
    label: "Navigation.contact",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    name: "nelanjoe",
    href: "https://github.com/nelanjoe",
    icon: "simple-icons:github",
  },
  {
    label: "LinkedIn",
    name: "nelan17",
    href: "https://www.linkedin.com/in/nelan17/",
    icon: "simple-icons:linkedin",
  },
  {
    label: "Instagram",
    name: "nelan_17",
    href: "https://www.instagram.com/nelan_17",
    icon: "simple-icons:instagram",
  },
  {
    label: "Email",
    name: "nelanjorelat@gmail.com",
    href: "mailto:nelanjorelat@gmail.com",
    icon: "simple-icons:maildotru",
  },
];

// 2. Data Projects
export const PROJECTS: (Project & { id: string })[] = [
  {
    id: "wealth_wise",
    title: "Wealth Wise",
    description: "Financial Tracker App",
    cover: "/images/wealth-wise.png",
    href: "https://wealth-wise-eight.vercel.app/",
    date: "2024",
    className: "md:col-span-3",
    tags: [
      TECH_STACK.REACT,
      TECH_STACK.TS,
      TECH_STACK.QUERY,
      TECH_STACK.FIREBASE,
      TECH_STACK.TAILWIND,
      TECH_STACK.SHADCN,
    ],
  },
  {
    id: "sig_frontend",
    title: "SIG Frontend",
    description: "System Information Geographic",
    cover: "/images/sig-app.png",
    href: "https://github.com/SIG-STT-NF/frontend",
    date: "2024",
    className: "md:col-span-2",
    tags: [
      TECH_STACK.REACT,
      TECH_STACK.JS,
      TECH_STACK.QUERY,
      TECH_STACK.LEAFLET,
      TECH_STACK.TAILWIND,
      TECH_STACK.SHADCN,
    ],
  },
  {
    id: "forum_app",
    title: "Forum App",
    description: "Forum Discussion For Community Learning",
    cover: "/images/forum-app.png",
    href: "https://forum-app-blond.vercel.app/",
    date: "2024",
    className: "md:col-span-1",
    tags: [
      TECH_STACK.REACT,
      TECH_STACK.JS,
      TECH_STACK.REDUX,
      TECH_STACK.CYPRESS,
      TECH_STACK.TAILWIND,
    ],
  },
  {
    id: "mooc_last_king",
    title: "MOOC Last King Academy",
    description: "Massive Open Online Course for helping other",
    cover: "/images/mooc-last-king.png",
    href: "https://github.com/NelanJoe/final-project-fe-binar",
    date: "2023",
    className: "md:col-span-2",
    tags: [
      TECH_STACK.REACT,
      TECH_STACK.JS,
      TECH_STACK.REDUX,
      TECH_STACK.RTK,
      TECH_STACK.TAILWIND,
    ],
  },
  {
    id: "movieflix",
    title: "Movieflix",
    description: "Movies app",
    cover: "/images/movieflix.png",
    href: "https://sveltekit-movies-app.vercel.app/",
    date: "2023",
    className: "md:col-span-3",
    tags: [TECH_STACK.SVELTE, TECH_STACK.DAISY],
  },
];

export const EXPERIENCES: (Experience & { id: string })[] = [
  {
    id: "operational_staff",
    href: "https://nfacademy.id/",
    title: "Operational Staff",
    company: "PT Nurul Fikri Cipta Inovasi",
    description: "Fallback description...",
    date: "February 2022 - August 2023",
  },
  {
    id: "asdos_bp",
    href: "https://nurulfikri.ac.id/",
    title: "Asisstant Lecuturer of Basic Programming",
    company: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    description: "Fallback description...",
    date: "March - July 2023",
  },
  {
    id: "asdos_db",
    href: "https://nurulfikri.ac.id/",
    title: "Asisstant Lecuturer of Database",
    company: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    description: "Fallback description...",
    date: "November 2022 - March 2023",
  },
];
