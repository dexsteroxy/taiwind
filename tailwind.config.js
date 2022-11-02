/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        skyblue: 'rgb(20, 107, 141)',
        orange:   'rgb(177, 119, 11)',
        black:    'rgb(23, 29, 22)',
        
        superman: 'hsl(12, 88%, 93%)',
        superma: 'hsl(12, 88%, 59%)',








      }
    },
  },
  plugins: [],
}
