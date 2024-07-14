import MainLayout from "@/components/MainLayout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <MainLayout className="py-4 flex items-center justify-between">
      
        <div className="flex items-center">
         Build With <span className='text-primary text-2xl px-1 '>&#9825;</span>
         by&nbsp;   <Link href="/">Ahmed Hany</Link>
        </div>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
      </MainLayout>
    </footer>
  );
};

export default Footer;
