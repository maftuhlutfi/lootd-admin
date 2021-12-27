module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat']
    },
    extend: {
      colors: {
        primary: '#061135',
        secondary: '#535764',
        disabled: '#858FB4',
        'disabled-lighter': '#CBD2E9',
        'purple-light': '#F1F4FF',
        'custom-green': '#39BF67',
        'custom-red': '#E06C6C',
      },
      backgroundImage: {
        'linear-primary': 'linear-gradient(315deg, #91A2FE -0.62%, #C0CBF9 111.88%)',
        'linear-red': 'linear-gradient(315deg, #E06C6C -0.62%, #FFA3A3 111.88%)',
        'linear-green': 'linear-gradient(315deg, #39BF67 -0.62%, #9CFFA0 111.88%)'
      },
      borderRadius: {
        '4xl': '32px'
      }
    },
  },
  plugins: [],
}
