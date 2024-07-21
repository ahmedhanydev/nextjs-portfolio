import MainLayout from "@/components/MainLayout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light sm:text-base
    
    "
    >
      <MainLayout className="py-4 flex items-center justify-between lg:flex-col lg:py-6 ">
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1 ">
            &#9825;
          </span>
          by&nbsp; <Link href="/">Ahmed Hany</Link>
        </div>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
      </MainLayout>
    </footer>
  );
};

export default Footer;
