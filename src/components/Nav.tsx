"use client";

import { useEffect, useState } from "react";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience", hideSm: true },
  { href: "#education", label: "Education", hideSm: true },
  { href: "#stack", label: "Stack", hideSm: true },
];

export default function Nav() {
  const toggleTheme = useThemeSwitcher();
  const [active, setActive] = useState<string | null>(null);

  // Highlight the last section whose top has passed 40% of the viewport
  useEffect(() => {
    const onScroll = () => {
      let cur: string | null = null;
      for (const { href } of links) {
        const s = document.querySelector(href);
        if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = href;
      }
      setActive(cur);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" aria-label="Main">
      <a className="home" href="#top" aria-label="Back to top">
        ah
      </a>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className={[l.hideSm && "hide-sm", active === l.href && "active"].filter(Boolean).join(" ") || undefined}
        >
          {l.label}
        </a>
      ))}
      <button className="theme" type="button" onClick={toggleTheme} aria-label="Switch light or dark theme">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
        </svg>
      </button>
      <a className="talk" href="#contact" data-magnetic>
        Let’s talk
      </a>
    </nav>
  );
}
