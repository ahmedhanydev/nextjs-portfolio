"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};
const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl  sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75 xs:text-sm dark:text-light/75 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full ms:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2 ">
          <Details
            position="Frontend Developer"
            company="Mostaql"
            companyLink="www.google.com"
            time="Feb 2023 - Present"
            address=""
            work="I create responsive, dynamic web applications for diverse clients, I build reusable components, manage state with Redux or Context API, and integrate APIs, ensuring high-quality, efficient code, My work focuses on delivering tailored, user-centric solutions through continuous learning and effective collaboration."
          />
          <Details
            position="Frontend Developer"
            company="Why Not Tech"
            companyLink="https://www.whynot-tech.com/"
            time="Feb 2023 - May 2023"
            address="Freelancing"
            work="Developed a responsive and user-friendly e-commerce website using ReactJS, focusing on a seamless user experience and complex UI elements."
          />
          <Details
            position="Software Engineer Intern"
            company="Kalbonyan Elmarsos"
            companyLink="https://www.linkedin.com/company/%D9%83%D8%A7%D9%84%D8%A8%D9%86%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%B5%D9%88%D8%B5/"
            time="Apr 2022 - Oct 2022"
            address="Egypt"
            work="This is an online internship with mentoring from senior software engineers,
                  Gives me learning tasks that sculpted my software and programming skill,
                  During this Internship I do about 6 projects now and taken 15 Project-Based courses."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
