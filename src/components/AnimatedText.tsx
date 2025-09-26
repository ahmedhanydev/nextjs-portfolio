"use client";

import { motion, useReducedMotion } from "framer-motion";

const quoute = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const spanWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  return (
    <div className="w-full mx-auto flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize ${className} dark:text-light`}
        variants={reduceMotion ? undefined : quoute}
        initial={reduceMotion ? undefined : "initial"}
        animate={reduceMotion ? undefined : "animate"}
      >
        {words.map((word, index) => (
          <motion.span
            key={word + index}
            className="inline-block"
            variants={reduceMotion ? undefined : spanWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
