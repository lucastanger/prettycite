module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '-full': '-100%',
      }
    },
    fontFamily: {
      'body': ['Source Code Pro']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
