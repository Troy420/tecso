/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.7)",
        heroTxtColor: "#C6DAF1",
        testimoTxtColor: "#20373C",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        russianBlack: "#151019",
        // russianBlack: "#00040f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
