/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'cream-yellow': '#fbf8ea',
        'green': '#9AB3A0',
        'red': '#D27C67',
        'orange': '#E4B495'
      },
      fontFamily: {
        heading: ['Pacifico'],
        body: ['Montserrat']
      }
    },
  },
  plugins: [],
}

