import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue": "#16214D",
        "accent-blue": "#3F5AEB",
        "white": "#FAFAFA",
        "grey": "#F1F1F1"
      },
    },
  },
  plugins: [],
} satisfies Config;
