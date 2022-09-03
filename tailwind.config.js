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
        'rose-200': '#fecdd3',
        "neutral-400": '#a3a3a3',
'zinc-200': '#e4e4e7'
      }
    },
  },
  plugins: [],
}
