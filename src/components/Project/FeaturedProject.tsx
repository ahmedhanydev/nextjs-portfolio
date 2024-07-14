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
        <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
          <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  rounded-br-3xl" />
          <Link
            href={link}
            target={"_blank"}
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
          >
            <FramerImage
              src={img}
              alt={title}
              className=" w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          <div className="w-1/2 flex flex-col items-start justify-between pl-6">
            <span className="text-primary font-medium text-xl">{typeName}</span>
            <Link
              href={link}
              target={"_blank"}
              className="hover:underline underline-offset-2"
            >
              <h2 className="my-2 w-full text-left text-4xl font-bold">
                {title}
              </h2>
            </Link>
            <p className="my-2 font-medium text-dark">{summary}</p>
            <div className="mt-2 flex items-center ">
              <Link href={github} target={"_blank"} className="w-10">
                <GithubIcon />
              </Link>
              <Link
                href={link}
                target={"_blank"}
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
              >
                Visit Project
              </Link>
            </div>
          </div>
        </article>
      </>
    );
  };




  export default FeaturedProject