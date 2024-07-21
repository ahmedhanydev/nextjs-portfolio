"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import useHasMounted from "./hooks/useHasMounted";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CustomLinkProps = {
  href: string;
  title: string;
  className: string;
  toggle?: () => void;
};
const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease
       ${pathname === href ? "w-full " : "w-0"}
       dark:bg-light 
       
       `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease
       ${pathname === href ? "w-full " : "w-0"}
       dark:bg-dark 
       
       `}
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const hasMounted = useHasMounted();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="w-full px-32 py-6 lg:px-8 font-medium flex  items-center justify-between 
    dark:text-light relative
    
    "
    >
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
        aria-label="Menu"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5  ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="hidden lg:flex">
        <Logo />
      </div>
      <div className="flex w-full justify-between items-center  lg:hidden ">
        <div>
          <Logo />
        </div>
        <nav>
          <CustomLink href="/" className="mr-4" title="Home" />
          <CustomLink href="/about" className="mx-4" title="About" />
          <CustomLink href="/projects" className="mx-4" title="Projects" />
          {/* <CustomLink href="/articles" className="ml-4" title="Articles" /> */}
        </nav>
        <nav className="flex justify-center items-center ">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/ahmedhanydev"
            target="_blank"
            aria-label="Github Account"
          >
            <GithubIcon className="w-10  mr-3" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/ahmedhanyabdelhamid/"
            target="_blank"
            aria-label="Linkedin Account"
          >
            <LinkedInIcon className="w-6 ml-3" />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? " bg-dark text-light" : "bg-light text-dark"
            }`}
            aria-label="dark mode"
          >
            {hasMounted && mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 flex flex-col  justify-between items-center  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark/90   dark:bg-light/75  rounded-lg backdrop-blur-md py-32 
    "
        >
          <nav className="flex mb-2 flex-col items-center justify-center ">
            <CustomMobileLink
              href="/"
              className=""
              title="Home"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              className=""
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              className=""
              title="Projects"
              toggle={handleClick}
            />
            {/* <CustomMobileLink
              href="/articles"
              className=""
              title="Articles"
              toggle={handleClick}
            /> */}
          </nav>
          <nav className="flex justify-center items-center  ">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ahmedhanydev"
              target="_blank"
              aria-label="Github Account"
            >
              <GithubIcon className="w-10  mr-3  bg-light rounded-full dark:bg-dark" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/ahmedhanyabdelhamid/"
              target="_blank"
              aria-label="Linkedin Account"
            >
              <LinkedInIcon className="w-6 ml-3" />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-6 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? " bg-dark text-light" : "bg-light text-dark"
              }`}
              aria-label="dark mode"
            >
              {hasMounted && mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
