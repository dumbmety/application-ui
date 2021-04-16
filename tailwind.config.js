module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      manrope: 'Manrope',
    },
    extend: {
      colors: {
        transparentBlack: {
          100: 'rgba(0, 0, 0, 0.03)',
          200: 'rgba(0, 0, 0, 0.08)',
          300: 'rgba(0, 0, 0, 0.15)',
          400: 'rgba(0, 0, 0, 0.26)',
          500: 'rgba(0, 0, 0, 0.4)',
          600: 'rgba(0, 0, 0, 0.55)',
          700: 'rgba(0, 0, 0, 0.7)',
          800: 'rgba(0, 0, 0, 0.8)',
          900: 'rgba(0, 0, 0, 0.9)',
        },
        black: {
          100: '#f7f7f7',
          200: '#ebebeb',
          300: '#d9d9d9',
          400: '#bdbdbd',
          500: '#999999',
          600: '#737373',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
        green: {
          100: '#e7f9eb',
          200: '#c3efcd',
          300: '#88dd9f',
          400: '#47d16c',
          500: '#1fb141',
          600: '#189a2e',
          700: '#0d731e',
          800: '#085e16',
          900: '#04490f',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
