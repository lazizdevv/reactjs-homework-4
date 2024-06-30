/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        libre:["Abhaya Libre", 'serif'],
        times: ['"Times New Roman"', 'serif'],
      },
      container:{
        screens:{
          lg:"1240px"
        },
        padding:"20px",
        center:true,
      },

      colors:{
        primary:"#0E2149",
        secondary:"#D5AF86",
        primaryText:"#111111",
        secondaryText:'#717171',
        outlineText:'#B8C1CA'


      }
    },
  },
  plugins: [],
}