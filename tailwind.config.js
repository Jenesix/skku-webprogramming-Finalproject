/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      main: ['Libre Baskerville', "serif"],
    },
    width: {
      120: '30rem',
    },
    colors: {
      main: '#3F51B5',
      sub: '#757de8',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        100: '#F5F5F5',
        200: '#E0E0E0',
        300: '#BDBDBD',
        400: '#9E9E9E',
        500: '#757575',
        600: '#616161',
        700: '#424242',
        800: '#212121',
        900: '#121212',
      },
      blue: {
        100:'#dbeafe',
        200:'#bfdbfe',
        300:'#93C5FD',
        400:'#60A5FA',
        500:'#3b82f6',
        600:'#2563EB',
        700:'#1d4ed8',
        800:'#1e40af',
        900:'#1e3a8a',
      }
    }
  },
  plugins: [],
}
