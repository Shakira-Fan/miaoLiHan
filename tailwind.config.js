/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mantousans: ['mantousans', 'sans-serif'],
      },
      colors:{
        'primary-theme-one':"#DA7D4A",
        'text-primary':'#334155',
        'text-secondary':'#94A3B8',
        'bg-color-theme-one':"#FDFCFB",
        'bg-color-theme-second':"#F7ECE1",
      }
    },
  },
  plugins: [],
}

