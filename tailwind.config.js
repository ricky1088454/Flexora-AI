/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bubblegum Sans'", "cursive"],
        body: ["'Quicksand'", "sans-serif"]
      },
      colors: {
        paper: "#fbf7f1",
        paperLight: "#fefbf7",
        sage: "#b8cbb1",
        sageDark: "#8fa890",
        peach: "#f4c7a5",
        mocha: "#6b5b4b",
        clay: "#d9cbbf",
        mist: "#f0e9e2"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(82, 67, 55, 0.12)",
        lift: "0 6px 20px rgba(82, 67, 55, 0.1)"
      },
      borderRadius: {
        xl: "1.5rem",
        '2xl': "2rem"
      }
    }
  },
  plugins: []
};
