

import AnimatedText from "@/components/AnimatedText";

import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import Project from "../../components/Project/Project";
import FeaturedProject from "../../components/Project/FeaturedProject";





const projects = () => {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <MainLayout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 text-6xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                typeName="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency."
                img={project1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                typeName="Featured Project"
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                typeName="Featured Project"
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                typeName="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                          local currency."
                img={project1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                typeName="Featured Project"
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                typeName="Featured Project"
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
              />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  );
};

export default projects;
