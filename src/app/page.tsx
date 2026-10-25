import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <Work />
      <Experience />
      <Education />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}
