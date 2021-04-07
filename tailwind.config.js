module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
    // colors: {
    //   primarybg: '#314455',
    //   secondarybg: '#644E5B', 
    //   primary: '#9E5A63',
    //   secondary: '#C96557',
    //   lightgray: '#97AABD'
    // },
    fontFamily: {
      'body': ['Source Code Pro']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
