import AnimatedText from "@/components/AnimatedText";

import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../../public/images/projects/soicalmagic.png";
import project2 from "../../../public/images/projects/aliyn.png";
import project3 from "../../../public/images/projects/mahmoudfawzy.png";
import project4 from "../../../public/images/projects/t-shop.jpg";
import project5 from "../../../public/images/projects/nifty2.jpeg";
import project6 from "../../../public/images/projects/carrent.png";
import project7 from "../../../public/images/projects/banksit.png";
import project8 from "../../../public/images/projects/Omnifood.png";
import project9 from "../../../public/images/projects/dashboard.png";

import Project from "../../components/Project/Project";
import FeaturedProject from "../../components/Project/FeaturedProject";
import type { Metadata } from "next";
import TransitionEffect from "@/components/TransitionEffect";

export const metadata: Metadata = {
  title: "Ahmed | Projects",
  description: "my projects",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

const projects = () => {
  return (
    <>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <MainLayout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 text-6xl lg:!text-6xl  sm:mb-8 sm:!text-5xl xs:!!text-3xl  "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0  ">
            <div className="col-span-12 gap-y-16 flex flex-col">
              <FeaturedProject
                typeName="Client: Aliyn Agency"
                title="Aliyn "
                summary="Aliyn is a software house with a website built using JavaScript and Tailwind CSS. "
                img={project2}
                link="https://aliyn-portfolio.vercel.app/"
                github=""
              />
              <FeaturedProject
                typeName="Client: Social Magic Agency"
                title="Social Magic"
                summary="Social Magic website contains many features with an attractive, responsive interface"
                img={project1}
                link="https://soicalmagic.com/"
                github=""
              />

              <FeaturedProject
                typeName="Client: Mahmoud | Video Editor"
                title="FAWZY "
                summary="FAWZY is a portfolio showcasing the work of a video editor. "
                img={project3}
                link="https://mahmoudfawzy.net/"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                typeName="#React #TailwindCss #Node.js "
                title="T-Shop"
                img={project4}
                link="https://t-shop-app.vercel.app/"
                github="https://github.com/ahmedhanydev/t-shop"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                typeName="#Next.js #CSS #MongoDB "
                title="Admin Dashboard"
                img={project9}
                link="https://admin-dashboard-nextjs1.vercel.app/dashboard"
                github="https://github.com/ahmedhanydev/nextjs-admin-dashboard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                typeName="#React #CSS #framer-motion"
                title="Nifty"
                img={project5}
                link="https://nifty-website-two.vercel.app/"
                github="https://github.com/ahmedhanydev/nifty-website"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                typeName="#React #Bootstrap"
                title="MTrend"
                img={project6}
                link="https://trending-movies-app.vercel.app/"
                github="https://github.com/ahmedhanydev/Trending-movies-app"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                typeName="#Javascript #CSS #HTML"
                title="Bankist"
                img={project7}
                link="https://bankist-site-ahmed.netlify.app/"
                github="https://github.com/ahmedhanydev/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist-Site"
              />
            </div> */}

            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                typeName="#Javascript #CSS #HTML"
                title="Omnifood"
                img={project8}
                link="https://omnifood-sable-xi.vercel.app/"
                github="https://github.com/ahmedhanydev/omnifood"
              />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  );
};

export default projects;
