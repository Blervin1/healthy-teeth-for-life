/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      xl: { max: '1449.99px'},
      lg: { max: '1199.99px'},
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '479.99px' },
    },
    extend: {
      fontFamily: {
        /* roboto: ['Roboto', 'sans-serif'] */
      },
      container: {
        center: true,
        padding: '24px',
      },
      colors: {
        /* Например */
        main: "#fff",
        secondary: "#444E83",
        darkblue: "#0B133D",
        lightblye: '#7CD8FF',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: 'fade-in .3s ease',
      },
    },
  },
  plugins: [],
}

