import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#f5f4f0",
        "grey-1": "#e8e7e3",
        "grey-2": "#c4c2bc",
        "grey-3": "#8a8880",
        "grey-4": "#4a4946",
        ink: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
export default config;
