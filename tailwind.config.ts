import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary: "#FF0000",
      },
    },
  },
  plugins: [],
};

export default config; 