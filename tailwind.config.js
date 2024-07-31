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
        itim: ['Itim', 'cursive'],
      },
      colors: {
        an_pink: '#FFE4ED',
  
        primary: '#F14881',
        strokeGray: '#F1EDE9',
        bgGray: '#FAFAFA',
        boxBgGray: '#E5E5E5',
        darkgray: '#D9D9D9',
        hoverGray: '#F5F5F5',
        myyellow: '#F4CE14',
        mygreen: '#379777',
        myblue: '#7F9BFF',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

