import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex justify-center items-center mt-2  ">
      <Link
        href="/"
        className="h-16 w-16 bg-dark text-light text-2xl font-bold rounded-full flex justify-center items-center"
      >
        AH
      </Link>
    </div>
  );
};

export default Logo;
