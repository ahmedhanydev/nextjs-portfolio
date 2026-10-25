"use client";

import { useEffect } from "react";

// Fades in every .reveal element on first view, staggering siblings
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    els.forEach((el) => {
      const sib = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains("reveal"));
      el.style.setProperty("--d", (sib.indexOf(el) % 5) * 0.08 + "s");
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
