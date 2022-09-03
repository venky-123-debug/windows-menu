/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    '*/**.{html,css,js}',
    './components/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('icons/HD-wallpaper-windows-globalization-us5-windows-7-rock-formation-7-microsoft-sky-windows-united-states-arch-windows-7-mountains-seven-land-us-blue.jpg')",
      },

      colors: {
        transparent: 'transparent',
        'rose-200': '#fecdd3',
        "neutral-400": '#a3a3a3',
        'zinc-200': '#e4e4e7',
        'orange-600': '#f97316',
        'violet-300': '#c4b5fd',
        'gray-200':'#e5e7eb',
        'gray-300': '#d1d5db',
        'gray-400': '#9ca3af'
      }
    },
  },
  plugins: [],
}
