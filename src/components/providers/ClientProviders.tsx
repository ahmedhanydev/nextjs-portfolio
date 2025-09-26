"use client";

import { AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Wraps client-only features like animations & theme toggling controls
export default function ClientProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <NavBar />
      <main className="flex-1 w-full flex flex-col items-center justify-start">
        <AnimatePresence mode="wait" initial={false}>
          {/* key on pathname for page exit/enter animations if pages implement motion */}
          <div key={pathname} className="w-full">
            {children}
          </div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
