/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'safira-dark': '#001A4F',
        'brand-green': '#009C3B',
        'brand-yellow': '#FFCC00',
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
};
