/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
  
        primary: '#F14881',
        strokeGray: '#F1EDE9',
        bgGray: '#FAFAFA',
        boxBgGray: '#E5E5E5',
        darkgray: '#D9D9D9',
        hoverGray: '#F5F5F5',
        myYellow: '#F4CE14',
        myGreen: '#379777',
        myBlue: '#7F9BFF',
      },
    },
  },
  plugins: [],
}

