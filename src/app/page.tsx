import Image from "next/image";
import MainLayout from "@/components/MainLayout";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import portfolioImg from "../../public/images/profile/IMG_2556.jpg";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed | Home",
  description: "Frontend Developer Portfolio – React, Next.js, modern web apps.",
};

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full max-h-screen dark:text-light">
      <MainLayout className="pt-0">
        <div className="flex items-center justify-between w-full lg:flex-col lg:text-center ">
          <div className="w-1/2 sm:w-full flex justify-center items-center">
            <Image
              src={portfolioImg}
              alt="Portrait of Ahmed Hany"
              className="w-2/3 h-1/2 lg:hidden md:inline-block md:w-full rounded-full"
              width={500}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw , (max-width: 1200px)50vw,50vw"
            />
          </div>
          <div className="w-1/2 sm:mt-2 flex flex-col items-center self-center justify-center lg:w-full">
            <AnimatedText
              text="Frontend Developer"
              className="!text-center !text-4xl xl:!text-3xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl"
            />
            <p className="my-4 text-base font-medium text-center md:text-sm sm:text-xs">
              I build fast, accessible, responsive web applications using React & Next.js.
              Explore selected work and learn more about my approach to modern frontend engineering.
            </p>
            <div className="mt-2 flex items-center justify-center self-center lg:self-center">
              <Link
                href="/Ahmed Hany Frontend CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:text-light hover:dark:bg-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                download
              >
                Resume <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:ahmedhany5321@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </main>
  );
}
