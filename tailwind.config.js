const { fontFamily } = require('tailwindcss/defaultTheme')
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "orange": {
      "light": "#fdf2e9",
      "main": "#e67e22",
      "dark": "#cf711f",
    },
    "grayC": {
      "light": "#555",
      "dark": "#333",
    },
    "food": {
      "vegeterian": "#51cf66",
      "vegan": "#94d82d",
      "paleo": "#ffd43b"
    },

  },
}


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      fontFamily: {
        sans: ['Rubik', ...fontFamily.sans],
      },
      backgroundImage: {
        'cta-img': "linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('/content/img/eating.jpg')",
      }
    },
    screens: {
      'xl': { 'max': '84em' }, // Smaller Desktops
      // => @media (max-width: 1344px) { ... }

      'lg': { 'max': '75em' }, // Landscape tablets
      // => @media (max-width: 1200px) { ... }

      'md': { 'max': '62em' }, // Tablets
      // => @media (max-width: 944px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
