import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B3888",
          sky: "#00A3E0",
          black: "#000000",
          dark: "#09090b",
          light: "#f4f4f5",
          white: "#ffffff",
        },
      },
      boxShadow: {
        'dock': '0 20px 50px rgba(0, 0, 0, 0.25)',
        'hero-card': '0 25px 60px -15px rgba(11, 56, 136, 0.35)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;



