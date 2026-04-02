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
        cream: {
          50: "#faf7f2",
          100: "#f5f0e8",
          200: "#ebe5d9",
          300: "#d9d0c1",
          400: "#c9bfae",
          500: "#b5a998",
        },
        clay: {
          500: "#da7756",
          400: "#e08b6e",
          600: "#c46644",
        },
        ink: {
          900: "#1a1a1a",
          800: "#2d2d2d",
          700: "#3d3d3d",
          600: "#555555",
          500: "#777777",
          400: "#999999",
          300: "#bbbbbb",
        },
        // Keep old names as aliases for components that reference them
        navy: {
          900: "#f5f0e8",
          800: "#ebe5d9",
          700: "#d9d0c1",
          600: "#c9bfae",
        },
        gold: {
          500: "#da7756",
          400: "#e08b6e",
          600: "#c46644",
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
