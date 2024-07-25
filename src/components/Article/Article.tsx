"use client";

import { motion, useMotionValue } from "framer-motion";
import { ArticleProps } from "../../types";
import { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }: ArticleProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleMouse = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (imgRef.current) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
      }
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
  }, [x, y]);

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base text-start">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img || "/default-image.png"} // Fallback to a default image
        alt={title ?? "No title"} // Provide a fallback alt text
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }: ArticleProps) => (
  <motion.li
    initial={{ y: 200 }}
    whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    viewport={{ once: true }}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:border-light dark:text-light first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col"
  >
    <MovingImg title={title} link={link} img={img} />
    <span className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start sm:pl-0 xs:text-sm">
      {date}
    </span>
  </motion.li>
);

export default Article;
