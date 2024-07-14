
"use client";

import { ProjectProps } from "../../types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";
const FramerImage = motion(Image);

const Project = ({ typeName, title, img, link, github }: ProjectProps) => {
    return (
      <>
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
          <Link
            href={link}
            target={"_blank"}
            className="w-full cursor-pointer overflow-hidden rounded-lg"
          >
            <FramerImage
              src={img}
              alt={title}
              className=" w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className="text-primary font-medium text-xl">{typeName}</span>
            <Link
              href={link}
              target={"_blank"}
              className="hover:underline underline-offset-2"
            >
              <h2 className="my-2 w-full text-left text-3xl font-bold">
                {title}
              </h2>
            </Link>
  
            <div className="w-full mt-2 flex items-center justify-between ">
              <Link
                href={link}
                target={"_blank"}
                className=" rounded-lg   text-lg font-semibold underline"
              >
                Visit
              </Link>
              <Link href={github} target={"_blank"} className="w-8">
                <GithubIcon />
              </Link>
            </div>
          </div>
        </article>
      </>
    );
  };


  export default Project