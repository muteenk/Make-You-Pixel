import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "modalBgFadeIn": "modalBgFadeIn 0.5s ease-in-out forwards",
        "modalFadeIn": "modalFadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        modalBgFadeIn: {
          "0%": { 
            opacity: 0,
            display: "block",
          },
          "100%": { 
            opacity: 0.4,
          },
        },
        modalFadeIn: {
          "0%": { 
            opacity: 0,
            top: "30%",
            display: "block",
          },
          "100%": { 
            opacity: 1,
            top: "50%",
          },
        },
      },
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: "var(--primary)",
      lightBorder: "var(--light-border)",
      yellowBorder: "var(--yellow-border)",
      primaryHover: "var(--primary-hover)",
      graySelect: "var(--gray-select)",
    },
    fontFamily: {
      'sp': ["Spicy Rice", "serif"],
      'pri': ["Open Sans", "sans-serif"],
      'sec': ["Space Mono", "monospace"],
    }
  },
  plugins: [],
};
export default config;
