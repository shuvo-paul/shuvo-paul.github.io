const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Bree Serif', 'serif'],
      'body': ['Chivo', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      primary: {
          100: "#ccece5",
          200: "#99d8cb",
          300: "#66c5b0",
          400: "#33b196",
          500: "#009e7c",
          600: "#007e63",
          700: "#005f4a",
          800: "#003f32",
          900: "#002019"
      },
      secondary: {
          100: "#d3d5d5",
          200: "#a7aaac",
          300: "#7c8082",
          400: "#505559",
          500: "#242b2f",
          600: "#1d2226",
          700: "#161a1c",
          800: "#0e1113",
          900: "#070909"
      },
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
