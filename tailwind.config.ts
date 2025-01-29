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
        "primary": "#FB4C3B",
        "accent": "#00B099",
        "white": "#FAFAFA",
        "grey": "#F1F1F1",
        "yellow": "#DDE329",
        "green-lola": "#D6DF15"
      },
      backgroundImage: {
        ttuPattern: "url('/bg2.png')",
        mobile: "url('/mobile.jpg')",
      },
      fontFamily: {
        anton: ['var(--font-anton)']
      }
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
