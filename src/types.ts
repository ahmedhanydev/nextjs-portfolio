export type Fact = {
  value: number;
  suffix?: string;
  label: string;
};

export type Project = {
  title: string;
  desc: string;
  kind: string;
  stack: string;
  // Screenshot path; without one the card shows a text panel with the site name
  img?: string;
  href: string;
};

export type Job = {
  years: string;
  company: string;
  role: string;
  now?: boolean;
  bullets: string[];
};

export type Degree = {
  years: string;
  title: string;
  school: string;
  tags: string[];
  mark: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  pull: string;
  text: string[];
  source?: string;
  // Set for quotes not in English; rendered with lang/dir so it reads and is announced correctly
  lang?: "ar";
};
