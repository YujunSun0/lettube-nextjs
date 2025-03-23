/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',  // 렛튜브 빨간색
        secondary: '#000000', // 검은색
      },
      backgroundColor: {
        'dark': '#000000',
      },
      textColor: {
        'light': '#FFFFFF',
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 