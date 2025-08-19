/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ppa: {
          green: "#004225",
          gold: "#DAA520",
          cream: "#F5F0E6",
          dark: "#1F2937"
        }
      }
    },
  },
  plugins: [],
};