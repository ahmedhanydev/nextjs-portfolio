import { ProjectProps } from "../../types";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";

const Project = ({ typeName, title, img, link, github }: ProjectProps) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg group" rel="noopener noreferrer">
        <Image
          src={img}
          alt={title + ' project screenshot'}
            className="w-full h-[250px] object-cover transition-transform duration-200 group-hover:scale-[1.04]"
          priority
          sizes="(max-width: 768px) 100vw , (max-width: 1200px)50vw,50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-lg font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">{typeName}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2" rel="noopener noreferrer">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="rounded text-lg font-medium underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" rel="noopener noreferrer" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
