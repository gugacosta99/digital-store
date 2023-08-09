/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626', // Replace with your desired primary color hex code
        secondary: '#1D4ED8',
        primary_light: '#FCA5A5'
      },
    },
    variants: {
      extend: {
        backgroundColor: ['hover', 'focus', 'active'],
        textColor: ['hover', 'focus', 'active'],
        borderColor: ['hover', 'focus', 'active'],
      },
    },
  },
  plugins: [],
}

