/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F5C32C',
        orange: '#FCA61F',
        black: '#242D49',
        gray: '#788097',
        blueCard: '#DDF8FE',
        purple: 'rgb(238 210 255)',
      },
      boxShadow: {
        default: '0px 19px 60px rgba(0, 0, 0, 0.08)',
        sm: '-79px 51px 60px rgba(0, 0, 0, 0.08)',
      },
      orangeCard: 'rgba(252, 166, 31, 0.45)',
    },
  },
  plugins: [],
}

