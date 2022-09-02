/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    '*/**.{html,css,js}',
    './components/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',

      }
    },
  },
  plugins: [],
}
