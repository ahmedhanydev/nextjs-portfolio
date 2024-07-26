"use client";

import { motion } from "framer-motion";
import html from "../../public/images/tech/html.png";
import css from "../../public/images/tech/css.png";
import bootstrap from "../../public/images/tech/bootstrap.png";
import tailwind from "../../public/images/tech/tailwind.png";
import javascript from "../../public/images/tech/javascript.png";
import typescript from "../../public/images/tech/typescript.png";
import reactjs from "../../public/images/tech/reactjs.png";
import redux from "../../public/images/tech/redux.png";
import nextjs from "../../public/images/tech/nextjs.jpeg";
import nodejs from "../../public/images/tech/nodejs.png";
import mongodb from "../../public/images/tech/mongodb.png";
import git from "../../public/images/tech/git.png";
import Image, { StaticImageData } from "next/image";

type SkillProps = {
  skillImg: StaticImageData;
  skillName: string;
  x: string;
  y: string;
};

const Skill = ({ skillImg, skillName, x, y }: SkillProps) => {
  return (
    <motion.div
      className={`flex w-[100px] h-[100px] p-[30px]  flex-col items-center justify-center rounded-full font-semibold bg-dark text-light  shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        
        lg:p-[20px] lg:w-[70px] lg:h-[70px] md:w-[50px] md:h-[50px]   xs:w-[35px] xs:h-[35px]
        `}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <Image
        src={skillImg}
        alt={skillName}
        className="rounded-full"
        // width={"100px"}
        // height={"100px"}
      />
      <span className="text-[10px] lg:text-[7px] sm:text-[7px] xs:text-[5px]  text-light dark:text-dark">
        {skillName}
      </span>
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl  mt-64 w-full text-center md:text-6xl md:mt32 ">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark p-8 shadow-dark cursor-pointer  lg:p-[20px] lg:w-[70px] lg:h-[70px] md:w-[50px] md:h-[50px]"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill skillImg={html} skillName={"HTML"} x="-14vw" y="-2vw" />
        <Skill skillImg={css} skillName={"CSS"} x="14vw" y="-2vw" />
        <Skill
          skillImg={bootstrap}
          skillName={"Bootstrap"}
          x="-12vw"
          y="16vw"
        />
        <Skill
          skillImg={tailwind}
          skillName={"TailwindCSS"}
          x="-24vw"
          y="9vw"
        />
        <Skill
          skillImg={javascript}
          skillName={"Javascript"}
          x="-27vw"
          y="-4vw"
        />

        <Skill
          skillImg={typescript}
          skillName={"Typescript"}
          x="-17vw"
          y="-14vw"
        />
        <Skill skillImg={reactjs} skillName={"ReactJS"} x="15vw" y="-15vw" />
        <Skill skillImg={redux} skillName={"Redux"} x="-1vw" y="-18vw" />
        <Skill skillImg={nextjs} skillName={"NextJS"} x="28vw" y="-3vw" />
        <Skill skillImg={nodejs} skillName={"NodeJS"} x="14vw" y="15vw" />
        <Skill skillImg={mongodb} skillName={"MongoDB"} x="1vw" y="18vw" />
        <Skill skillImg={git} skillName={"Git"} x="26vw" y="8vw" />
      </div>
    </>
  );
};

export default Skills;
