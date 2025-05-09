import type { Site, SocialLink, Project, Experience } from "@/types";

export const SITE: Site = {
  title: "Nelan",
  description: "Welcome to Nelan porfolio",
  author: "Nelan",
  href: "http://localhost:3000",
};

export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/blog",
    label: "blog",
  },
  {
    href: "/contact",
    label: "contact",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/nelanjoe",
    label: "Github",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Wealth Wise",
    description: "Fincancial Tracker App",
    cover: "/images/wealth-wise.png",
    href: "https://wealth-wise-eight.vercel.app/",
    tags: [
      "ReactJs",
      "TypeScript",
      "Tanstack React Query",
      "Firebase",
      "Tailwindcss",
      "Shadcn UI",
    ],
    date: "2024",
  },
  {
    title: "SIG Frontend",
    description: "System Information Geographic",
    cover: "/images/sig-app.png",
    href: "https://github.com/SIG-STT-NF/frontend",
    tags: [
      "ReactJs",
      "JavaScript",
      "Tanstack React Query",
      "Leaflet",
      "Tailwindcss",
      "Shadcn UI",
    ],
    date: "2024",
  },
  {
    title: "Forum App",
    description: "System Information Geographic",
    cover: "/images/forum-app.png",
    href: "https://forum-app-blond.vercel.app/",
    tags: ["ReactJs", "JavaScript", "Redux", "Cypress", "Tailwindcss"],
    date: "2024",
  },
  {
    title: "MOOC Last King Academy",
    description: "Massive Open Online Course for helping other",
    cover: "/images/mooc-last-king.png",
    href: "https://github.com/NelanJoe/final-project-fe-binar",
    tags: ["ReactJs", "JavaScript", "Redux", "RTK Query", "Tailwindcss"],
    date: "2023",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Operational Staff",
    company: "PT Nurul Fikri Cipta Inovasi",
    date: "February 2022 - August 2023",
  },
  {
    title: "Asisstant Lecuturer of Basic Programming",
    company: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    date: "March - July 2023",
  },
  {
    title: "Asisstant Lecuturer of Database",
    company: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    date: "November 2022 - March 2023",
  },
];
