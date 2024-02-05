export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        "logoFont1": "Black Ops One, serif",
        "logoFont2": "Tilt Warp, serif",
        "textFont" : "Agbalumo, serif",
        "headersFont" : "Allerta, serif",
        "textFont2": "Fira Sans, serif"
      },
      dropShadow: {
        '3xl': '0 35px 35px red',
      },
      colors: {
        "primary" : "#0E2954",
        "master-blue" : "#7752FE",
        "master-blue-opacity":"#7752feb5",
        "layoutColor" : "linear-gradient(180deg, rgba(0,0,0,0.8677522034204307) 57%, rgba(238,238,238,0.18147769361650912) 94%)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('/src/assents/images/mini.jpg')",
      },
      screens: {
        "wide": "1440px"
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [],
}