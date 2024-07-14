"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";
type CustomLinkProps = {
  href: string;
  title: string;
  className: string;
};
const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] duration-300 ease
       ${pathname === href ? "w-full " : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const NavBar = () => {
  return (
    <header className="w-full px-32 py-6 font-medium flex  items-center justify-between ">
      <div>
        <Logo />
      </div>
      <nav>
        <CustomLink href="/" className="mr-4" title="Home" />
        <CustomLink href="/about" className="mx-4" title="About" />
        <CustomLink href="/projects" className="mx-4" title="Projects" />
        <CustomLink href="/articles" className="ml-4" title="Articles" />
      </nav>
      <nav className="flex justify-center items-center ">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <LinkedInIcon className="w-6 mr-3" />
        </motion.a>

        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <GithubIcon className="w-6 ml-3" />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
