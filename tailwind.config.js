/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        thapa:{
          100:"#28348c",
          200:"#351596"
        }
      }
    },
  },
  plugins: [],
}

