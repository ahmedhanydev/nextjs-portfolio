import AnimatedText from "@/components/AnimatedText";

import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";
import SoicalMagicImg from "../../../public/images/projects/soicalmagic.png";
import AliynImg from "../../../public/images/projects/aliyn.png";
import FawzyImg from "../../../public/images/projects/mahmoudfawzy.png";
import TshopImg from "../../../public/images/projects/t-shop.jpg";
import NiftyImg from "../../../public/images/projects/nifty2.jpeg";
import CarrentImg from "../../../public/images/projects/carrent.png";
import BanksitImg from "../../../public/images/projects/banksit.png";
import OmnifoodImg from "../../../public/images/projects/Omnifood.png";
import DashboardImg from "../../../public/images/projects/dashboard.png";
import LitePayImg from "../../../public/images/projects/litepay.png";
import JazrImg from "../../../public/images/projects/jazr.png";
import BrandLevelingImg from "../../../public/images/projects/brandleveling.png";

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
      {/* <TransitionEffect /> */}

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <MainLayout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 text-6xl lg:!text-6xl  sm:mb-8 sm:!text-5xl xs:!!text-3xl  "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0  ">
            <div className="col-span-12 gap-y-16 flex flex-col">
              <FeaturedProject
                typeName="Client: LitePay Company"
                title="LitePay "
                summary="LitePay is a platform to make virtual card built using Next.js and Tailwind CSS."
                img={LitePayImg}
                link="https://www.litepay-eg.net/"
                github=""
              />
              <FeaturedProject
                typeName="Client: Aliyn Company"
                title="Aliyn "
                summary="Aliyn is a software house with a website built using JavaScript and Tailwind CSS. "
                img={AliynImg}
                link="https://aliyn-portfolio.vercel.app/"
                github=""
              />
              
              <FeaturedProject
                typeName="Client: Jazr Company"
                title="Jazr.io "
                summary="Jazr.io simplifies accounting for restaurant and café owners, allowing non-specialists to input data easily "
                img={JazrImg}
                link="https://jazr.io/"
                github=""
              />
              <FeaturedProject
                typeName="Client: Social Magic Agency"
                title="Social Magic"
                summary="Social Magic website contains many features with an attractive, responsive interface"
                img={SoicalMagicImg}
                link="https://soicalmagic.com/"
                github=""
              />
              <FeaturedProject
                typeName="Client: Brand Leveling Agency"
                title="Brand Leveling"
                summary="Brand Leveling website contains many features with an attractive, responsive interface"
                img={BrandLevelingImg}
                link="https://brandleveling.com/"
                github=""
              />

              <FeaturedProject
                typeName="Client: Mahmoud | Video Editor"
                title="FAWZY "
                summary="FAWZY is a portfolio showcasing the work of a video editor. "
                img={FawzyImg}
                link="https://mahmoudfawzy.net/"
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                typeName="#React #TailwindCss #Node.js "
                title="T-Shop"
                img={TshopImg}
                link="https://t-shop-app.vercel.app/"
                github="https://github.com/ahmedhanydev/t-shop"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                typeName="#Next.js #CSS #MongoDB "
                title="Admin Dashboard"
                img={DashboardImg}
                link="https://admin-dashboard-nextjs1.vercel.app/dashboard"
                github="https://github.com/ahmedhanydev/nextjs-admin-dashboard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                typeName="#React #CSS #framer-motion"
                title="Nifty"
                img={NiftyImg}
                link="https://nifty-website-two.vercel.app/"
                github="https://github.com/ahmedhanydev/nifty-website"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                typeName="#React #Bootstrap"
                title="MTrend"
                img={CarrentImg}
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
                img={OmnifoodImg}
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
