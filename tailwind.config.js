/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': 'hsl(207, 26%, 17%)',
        'dark-blue-light': 'hsl(200, 15%, 8%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'light-gray': 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        'hp': '14px',
        'dl': '16px',
      },
      fontWeight: {
        light: 300,
        semiBold: 600,
        bold: 800,
      },
      screens: {
        'sm': { 'max': '320px' },    // Mobile screen size
        'md': { 'max': '800px' },    // Tablet screen size (if needed)
        'lg': { 'max': '1024px' },   // Desktop screen size
        'xl': { 'max': '1440px' },   // Large desktop screen size
      },
    },
  },
  plugins: [],
}


