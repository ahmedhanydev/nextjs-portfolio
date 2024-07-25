"use client";

import { motion } from "framer-motion";
import { ArticleProps } from "../../types";
import Image from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }: ArticleProps) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light dark:text-light">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg
  "
      >
        <FramerImage
          src={img || "/default-image.png"} // Fallback to a default image
          alt={title ?? "No title"} // Provide a fallback alt text
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw ,
          (max-width: 1200px)50vw,50vw
          "
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 ">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

export default FeaturedArticle;
