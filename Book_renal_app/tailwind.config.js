/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "1.25rem"
      },
      colors: {
        primary: "#3498db",
      },
      fontFamily:{
        poppins:["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [],
}