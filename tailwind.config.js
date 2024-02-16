/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
      }
      ,
      fontFamily:{
        "inter":['Inter', 'sans-serif'],
        "cascadia-code":["cascadia"]
      },
      colors:{
        "black-medium":"#213547", //formato hex
        "white-navbar":"#F5F5F5",
        "green-font": "#42D392",
        "purple-font":"#647EFF",
        "blue-exp":"#236FED",
        "gray-navbar":"#3c3c3c1f",
        "red-title":"#d34645",
        "gray-console":"#ccc",
        "green-console":"#01a252"
      },
      fontSize: {
        small : ['80px'],
        
      }

    },
  },
  plugins: [],
}

