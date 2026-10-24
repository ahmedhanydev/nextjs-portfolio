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
  img: string;
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

export type StackGroup = {
  title: string;
  items: string[];
};
