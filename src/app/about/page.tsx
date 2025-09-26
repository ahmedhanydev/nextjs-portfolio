import MainLayout from "@/components/MainLayout";
import AnimatedText from "@/components/AnimatedText";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed | About",
  description: "About Ahmed – Frontend Developer specializing in React and Next.js.",
};

const STATS = [
  { label: "Satisfied Clients", value: 20 },
  { label: "Projects Completed", value: 30 },
  { label: "Years Of Experience", value: 2 },
];

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <MainLayout className="pt-16">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-16 text-6xl lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 mt-4">
          <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">Biography</h2>
            <p className="font-medium">
              Hi, I&apos;m Ahmed Hany. I focus on crafting performant, maintainable interfaces with a strong UX mindset. I build interactive & responsive UIs in React / Next.js, and have backend experience with Node.js / Express plus databases like MongoDB. I&apos;m comfortable deploying, optimizing, and iterating quickly.
            </p>
          </div>
          <div className="col-span-3 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            {STATS.map(s => (
              <div key={s.label} className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={s.value} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {s.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </MainLayout>
    </main>
  );
}
