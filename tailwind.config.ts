import type { Config } from "tailwindcss";

// Styling lives in src/styles/globals.css (ported design tokens + classes);
// Tailwind is kept for preflight and the occasional utility.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--serif)"],
        sans: ["var(--sans)"],
        mono: ["var(--mono)"],
      },
      colors: {
        accent: "var(--accent)",
        ink: "var(--ink)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
};
export default config;
