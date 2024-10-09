import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: "var(--primary)",
      lightBorder: "var(--light-border)",
      yellowBorder: "var(--yellow-border)",
      primaryHover: "var(--primary-hover)",
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
