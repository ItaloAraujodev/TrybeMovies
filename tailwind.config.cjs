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
      },

      boxShadow: {
        'backPath': 'rgba(0, 0, 0, 0.7) 0px 12000px 60px 0px inset;'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}