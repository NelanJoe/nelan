import type {
  Site,
  SocialLink,
  Project,
  Experience,
  NavigationLink,
} from "@/types";

export const SITE: Site = {
  title: "Nelan",
  description: "Welcome to Nelan porfolio",
  author: "Nelan",
  href: "http://localhost:3000",
};

export const NAV_LINKS: NavigationLink[] = [
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
    className: "md:col-span-3",
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
    className: "md:col-span-2",
  },
  {
    title: "Forum App",
    description: "Forum Discussion For Community Learning",
    cover: "/images/forum-app.png",
    href: "https://forum-app-blond.vercel.app/",
    tags: ["ReactJs", "JavaScript", "Redux", "Cypress", "Tailwindcss"],
    date: "2024",
    className: "md:col-span-1",
  },
  {
    title: "MOOC Last King Academy",
    description: "Massive Open Online Course for helping other",
    cover: "/images/mooc-last-king.png",
    href: "https://github.com/NelanJoe/final-project-fe-binar",
    tags: ["ReactJs", "JavaScript", "Redux", "RTK Query", "Tailwindcss"],
    date: "2023",
    className: "md:col-span-2",
  },
  {
    title: "Movieflix",
    description: "Movies app",
    cover: "/images/movieflix.png",
    href: "https://sveltekit-movies-app.vercel.app/",
    tags: ["Sveltekit", "DaisyUI"],
    date: "2023",
    className: "md:col-span-3",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    href: "https://nfacademy.id/",
    title: "Operational Staff",
    company: "PT Nurul Fikri Cipta Inovasi",
    description:
      "Working as a zoom administrator for Kampus Merdeka classes, Manage Public classes & Private classes, Manage attendance link for mentees of Kampus Merdeka program, Maintain, create & manage certificates for Kampus Merdeka program mentee, Assist teachers when there are problems in the classroom or outside the classroom",
    date: "February 2022 - August 2023",
  },
  {
    href: "https://nurulfikri.ac.id/",
    title: "Asisstant Lecuturer of Basic Programming",
    company: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    description:
      "Taught the Basic Fundamentals of Programming course using the Python language to improve students' understanding of problem solving using the python programming language, provide practical exercises, and explain key concepts in an easy-to-understand manner. Share effective tips and tricks for learning basic programming, Increase student motivation and learning retention by 50% in three months, By providing easy-to-follow advice, using everyday analogies, and putting together a structured study guide.",
    date: "March - July 2023",
  },
  {
    href: "https://nurulfikri.ac.id/",
    title: "Asisstant Lecuturer of Database",
    company: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
    description:
      "Teaching database courses to enhance students' understanding of data management by delivering lessons, providing practical exercises, and explaining key concepts. Share effective tips and tricks for learning basic programming, Increase student motivation and learning retention by 50% in three months, By providing easy-to-follow advice, using everyday analogies, and putting together a structured study guide.",
    date: "November 2022 - March 2023",
  },
];
