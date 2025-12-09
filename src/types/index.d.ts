export type Site = {
  title: string;
  description: string;
  href: string;
  author: string;
};

export type NavigationLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  name: string;
  href: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  cover: string;
  href: string;
  tags: string[];
  date: string;
  className?: string;
};

export type Experience = {
  href: string;
  title: string;
  company: string;
  description: string;
  date: string;
};
