import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const readTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

// The initial theme is applied by the inline script in layout.tsx; this reads and toggles it.
const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => setTheme(readTheme()), []);

  const toggle = useCallback(() => {
    const next: Theme = readTheme() === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  return [theme, toggle] as const;
};

export default useThemeSwitcher;
