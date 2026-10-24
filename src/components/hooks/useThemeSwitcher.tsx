import { useCallback } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

// The initial theme is applied by the inline script in layout.tsx; this only toggles it.
const useThemeSwitcher = () => {
  return useCallback(() => {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);
};

export default useThemeSwitcher;
