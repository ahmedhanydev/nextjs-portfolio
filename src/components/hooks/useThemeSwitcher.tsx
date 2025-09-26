import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light"; // SSR default
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const applyTheme = (mode: Theme) => {
  const root = document.documentElement;
  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  root.setAttribute("data-theme", mode);
};

const useThemeSwitcher = () => {
  const [mode, setMode] = useState<Theme>(getInitialTheme);

  // Apply immediately on mount (covers hydration) & any change.
  useEffect(() => {
    applyTheme(mode);
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  // Sync with OS changes only if user has not explicitly chosen (i.e. storage absent)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return; // user preference locked
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setMode(e.matches ? "dark" : "light");
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return [mode, setMode] as const;
};

export default useThemeSwitcher;
