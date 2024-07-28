import MainLayout from "@/components/MainLayout";
import AnimatedText from "@/components/AnimatedText";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import portfolioImg from "../../../public/images/profile/myimg2.png";
import Image from "next/image";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Education from "../../components/Education";
import type { Metadata } from "next";
import TransitionEffect from "@/components/TransitionEffect";

export const metadata: Metadata = {
  title: "Ahmed | About",
  description: "Ahmed is Frontend Developer",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

const about = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <MainLayout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 text-6xl lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8  mt-4 ">
            <div className="col-span-5 flex flex-col items-start justify-start  xl:col-span-4  md:order-2  md:col-span-8 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75  dark:text-light">
                Biography
              </h2>
              <p className="font-medium">
                {" "}
                Hi, I&apos;m Ahmed Hany, I have a strong foundation in web
                development and am proficient in front-end and back-end
                technologies. I specialize in using React to build interactive
                and responsive user interfaces and have experience working with
                Node.js to build scalable and efficient server-side
                applications. and me proficient with MongoDB and Express.js and
                skilled in deploying applications to production environments.
              </p>
            </div>
            {/* <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-dark dark:bg-light p-8 xl:col-span-4 md:order-1  md:col-span-8 ">
              <Image
                src={portfolioImg}
                alt="about photo"
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width: 768px) 100vw ,
                (max-width: 1200px)50vw,33vw
                "
              />
            </div> */}

            <div className="col-span-3 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center  md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl   ">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl ">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm ">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
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
