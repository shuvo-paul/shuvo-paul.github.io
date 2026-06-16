const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    colors: {
      ...colors,
      primary: colors.slate[800],
    },
    fontFamily: {
      sans: ['Chivo', 'sans-serif'],
      serif: ['Bree Serif', 'serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
      }
    },
    extend: {},
  },
  plugins: [],
}
