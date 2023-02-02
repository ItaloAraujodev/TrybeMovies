/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temp: "#151718",
        "temp-1": "#47474E"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}