module.exports = {
  //purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors: {
      primarybg: '#314455',
      secondarybg: '#644E5B', 
      primary: '#9E5A63',
      secondary: '#C96557',
      lightgray: '#97AABD'
    },
    fontFamily: {
      'body': ['Source Code Pro']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/forms'),
  ],
}
