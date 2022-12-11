/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./QuizApp/src/App.jsx" ],
  theme: {
    extend: {
      colors:{
        'deepblue': '#4D5B9E',
        'Shape1': '#DEEBF8',
        'Shape2': '#FFFAD1',
        'blue': '#293264',
        'bg': '#d6dbf5',
        'divider': '#dbdefo',
      },
      fontFamily: {
        'Karla': 'Karla, sans-serif',
        'Inter': 'Inter, sans-serif'

      }
    },
  },
  plugins: [],
}
