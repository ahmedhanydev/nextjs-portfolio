"use client";

import { motion, useMotionValue } from "framer-motion";
import { ArticleProps } from "../../types";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";


const FramerImage = motion(Image);


const MovingImg = ({ title, img, link }: ArticleProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<string>(null);

  const handleMouse = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX);
      y.set(-10);
    }
  };

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target={"_blank"}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-lg font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.2 },
        }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 
      "
    >
      <MovingImg title={title} link={link} img={img} />
      <span className="text-primary font-semibold pl-4 ">{date}</span>
    </motion.li>
  );
};

export default Article;
