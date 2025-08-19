/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        coffee: { 50:"#f7f5f2", 900:"#1c1917" }
      }
    }
  },
  plugins: []
}
