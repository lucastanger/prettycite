module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors: {
      primarybg: '#644E5B',
      secondarybg: '#C96557', 
      primary: '#9E5A63',
      secondary: '#C96557',
      lightgray: '#97AABD'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
