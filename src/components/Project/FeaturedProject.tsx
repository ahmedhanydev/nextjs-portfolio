"use client";

import { ProjectProps } from "../../types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";
const FramerImage = motion(Image);

const FeaturedProject = ({
  typeName,
  title,
  summary,
  img,
  link,
  github,
}: ProjectProps) => {
  return (
    <>
      <article
        className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
      
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4  
      "
      >
        <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] "></div>

        <Link
          href={link}
          target={"_blank"}
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
        >
          <FramerImage
            src={img}
            alt={title}
            className=" w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw ,
            (max-width: 1200px)50vw,50vw
            "
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
          <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
            {typeName}
          </span>
          <Link
            href={link}
            target={"_blank"}
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center ">
            {github === "" ? null : (
              <Link href={github} target={"_blank"} className="w-10">
                <GithubIcon />
              </Link>
            )}

            <Link
              href={link}
              target={"_blank"}
              className={` ${
                github === "" ? null : "ml-4"
              } rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  sm:px-4 sm:text-base
               dark:bg-light dark:text-dark`}
            >
              Visit Website
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default FeaturedProject;
