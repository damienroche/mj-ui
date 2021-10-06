const BRAND_COLOR = '#4687bf';

const COLORS = {
  brand: {
    light: '#ebf3f8',
    DEFAULT: BRAND_COLOR,
    dark: '#3c76a7'
  },
  navy: {
    DEFAULT: '#3e4265',
    dark: '#343856',
  },
  danger: {
    light: '#fcefef',
    DEFAULT: '#ec625c',
    dark: '#db5f59'
  },
  success: {
    DEFAULT: '#96ba71',
    light: '#f6fbf0',
    dark: '#7c9b5c'
  },
  gray: {
    100: '#f9f7f7',
    200: '#f0eded',
    300: '#eeeeee',
    400: '#edeaea',
    500: '#d6d1d1',
    600: '#aea8A8',
    700: '#a6a1a1',
  },
  ternary: {
    DEFAULT: '#8a8da9',
    light: '#e6eaf1',
    dark: '#5f6178'
  },
  dark: {
    DEFAULT: '#222835',
    100: '#313849',
    200: '#424a5d',
    300: '#171d26',
    400: '#2F384A',
  }
};

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/styles/**/*.css',
    ],
  },
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: {
        sans: [
          '"Montserrat"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        xxs: '.6875rem',
        xxxs: '.625rem',
        xxxxs: '.5625rem'
      },
      backgroundImage: {
        'stripe-light': 'linear-gradient(45deg,hsl(0deg 0% 75% / 15%) 25%,transparent 0,transparent 50%,hsl(0deg 0% 75% / 15%) 0,hsl(0deg 0% 75% / 15%) 75%,transparent 0,transparent)',
        'stripe-dark': 'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)'
      }
    },
  },
  future: {
    // Doc: https://tailwindcss.com/docs/upcoming-changes#remove-deprecated-gap-utilities
    removeDeprecatedGapUtilities: true,
    // https://tailwindcss.com/docs/upcoming-changes#purge-layers-by-default
    purgeLayersByDefault: true,
  },
  variants: {
    scrollbar: ['dark', 'rounded']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ],
  separator: '_'
};
