export type Site = {
  title: string;
  description: string;
  href: string;
  author: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export type Project = {
  title: string;
  description: string;
  cover: string;
  href: string;
  tags: string[];
  date: string;
};

export type Experience = {
  title: string;
  company: string;
  date: string;
};
