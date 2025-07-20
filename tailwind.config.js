/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['GeneralSans', 'sans-serif'],
      },
      colors: {
        'black-200': '#232323',
        'black-300': '#181818',
      },
    },
  },
  plugins: [],
}
