import Image, { StaticImageData } from "next/image";

export type ArticleProps = {
  img?: string | StaticImageData | undefined;
  title?: string | undefined;
  time?: string;
  summary?: string;
  link: string;
  date?: string;
};

export type ProjectProps = {
  typeName: string;
  title: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  github: string;
};
