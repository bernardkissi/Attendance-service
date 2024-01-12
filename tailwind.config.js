const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        indigo: colors.indigo,
        rose: colors.rose,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('flowbite/plugin'),
  ],
}
