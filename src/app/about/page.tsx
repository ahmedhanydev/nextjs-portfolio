"use client";

import MainLayout from "@/components/MainLayout";
import AnimatedText from "@/components/AnimatedText";
import portfolioImg from "../../../public/images/profile/myimg2.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Education from "../../components/Education";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center">
        <MainLayout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 text-6xl"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 ">
                Biography
              </h2>
              <p className="font-medium">
                {" "}
                Hi, I'm Ahmed Hany, I have a strong foundation in web
                development and am proficient in front-end and back-end
                technologies. I specialize in using React to build interactive
                and responsive user interfaces and have experience working with
                Node.js to build scalable and efficient server-side
                applications. and me proficient with MongoDB and Express.js and
                skilled in deploying applications to production environments.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <Image
                src={portfolioImg}
                alt="about photo"
                className="w-full h-auto rounded-2xl "
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </MainLayout>
      </main>
    </>
  );
};

export default about;
