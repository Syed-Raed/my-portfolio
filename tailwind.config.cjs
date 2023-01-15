/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
        'lekton': 'Lekton',
        'caveat': 'Caveat'
      },
      colors: {
        'primary-red': '#BA181B',
        'dark-black': '#0B090A',
        'sand': '#F2E9E4',
        'dark-grey': '#161A1D'
      }
    },
  },
  plugins: [],
}
