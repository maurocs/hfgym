/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        hfDark: "#212121",
        hfWhite: "#FAFAFA",
        primary: "#E68542",
        dark: "#0D0602",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      'hover-hover': {'raw': '(hover: hover)'},
    },
  },
  plugins: [],
};