const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./public/**/*.{html,js,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.indigo,
      red: colors.red,
      yellow: colors.amber,
      green: colors.lime,
      orange: colors.orange,
      salte: colors.slate,
      rose: colors.rose,
      amber: colors.amber
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
