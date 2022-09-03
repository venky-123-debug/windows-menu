/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    '*/**.{html,css,js}',
    './components/*.{html,js}'
  ],
  theme: {
    extend: {backgroundImage: {
      'hero': "url('icons/HD-wallpaper-windows-globalization-us5-windows-7-rock-formation-7-microsoft-sky-windows-united-states-arch-windows-7-mountains-seven-land-us-blue.jpg')",
    },
  
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
