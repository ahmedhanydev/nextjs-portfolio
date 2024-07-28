"use client";

import { Montserrat } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

type PropsLayout = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: PropsLayout) {
  return (
    <html lang="en">
      <body>
        <main
          className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen flex flex-col justify-center items-center`}
        >
          <NavBar />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <Footer />
        </main>
      </body>
    </html>
  );
}
