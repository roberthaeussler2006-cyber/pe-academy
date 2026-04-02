import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a0f1e",
          800: "#0f1629",
          700: "#141c34",
          600: "#1a2340",
        },
        gold: {
          500: "#f59e0b",
          400: "#fbbf24",
          600: "#d97706",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
