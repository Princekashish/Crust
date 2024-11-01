/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Playfair: ["Playfair Display", "serif"],
        Poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

