const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.fuchsia,
        neutral: colors.slate,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
