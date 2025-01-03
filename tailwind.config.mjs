/** @type {import('tailwindcss').Config} */
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
        'dark': "#03256C",
        'deep':"#2541B2",
        'mid':"#1768AC",
        'bright':"#06BEE1",
      },
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
    }
  },
  plugins: [],
};
