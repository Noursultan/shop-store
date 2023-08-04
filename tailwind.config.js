/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#33FF57'
      }
    },
    screens: {
      //extra extra small
      'ees': '335px',
      //Desc Size Of Main Page --- для описания компании, не больше 700px, иначе никрависиво смотрится
      'dsomp': '700px',
      // Big Buttons --- для больших размеров кнопок на главной странице в мобилке 
      'bb': '350px',
      "md": '768px',
      'xl': '1280px'
    }
  },
  plugins: [],
}