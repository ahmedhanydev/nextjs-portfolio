import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const mediaQuery =
    typeof window !== "undefined" ? window.matchMedia(preferDarkQuery) : null;

  const initialMode =
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme") || mediaQuery.matches
        ? "dark"
        : "light"
      : "";

  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code

      const userPref = window.localStorage.getItem("theme");

      const handleChange = () => {
        if (userPref) {
          let check = userPref
            ? userPref
            : mediaQuery.matches
            ? "dark"
            : "light";
          setMode(check);
          if (check === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        } else {
          let check = mediaQuery.matches ? "dark" : "light";
          setMode(check);
          window.localStorage.setItem("theme", check);
          if (check === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
      };
      handleChange();

      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (mode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
      if (mode === "light") {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
