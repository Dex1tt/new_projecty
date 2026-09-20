import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6",
        "cream-deep": "#E9DDCD",
        coffee: "#3B2A20",
        mocha: "#755846",
        terracotta: "#C97C4C",
        "terracotta-dark": "#A85E36",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(59, 42, 32, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
