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
        "primary": "#d52ad7",
        "accent": "#024ddf",
        "white": "#FAFAFA",
        "grey": "#F1F1F1",
        "yellow": "#DDE329",
        "green-lola": "#ffb607"
      },
      backgroundImage: {
        ttuPattern: "url('/bg2.jpg')",
        mobile: "url('/mobile.jpg')",
      },
      fontFamily: {
        anton: ['var(--font-anton)']
      }
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
