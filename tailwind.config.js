/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
    },
    extend: {
      width: {
        "90per": "90%",
        "95per": "95%",
      },
    },
    screens: {
      sm: { max: "480px" },
      md: { max: "768px" },
      lg: { max: "976px" },
      xl: "1440px",
    },
    colors: {
      dark: {
        bg: {
          primary: "rgba(19, 22, 39, 1)",
          secondary: "rgba(21, 25, 41, 1)",
          terciary: "rgba(23, 27, 43, 1)",
          table: "rgba(17, 21, 36, 1)",
          hover: "rgba(34, 37, 49, 1)",
          tags: "rgba(40, 43, 55, 1)",
        },
        border: {
          primary: "rgba(255, 255, 255, 0.03)",
          secondary: "rgba(255, 255, 255, 0.04)",
        },
        font: {
          100: "rgba(255, 255, 255, 0.95)",
          80: "rgba(255, 255, 255, 0.85)",
          60: "rgba(255, 255, 255, 0.65)",
          40: "rgba(255, 255, 255, 0.45)",
          20: "rgba(255, 255, 255, 0.25)",
          10: "rgba(255, 255, 255, 0.15)",
        },
      },
      light: {
        bg: {
          primary: "rgba(255,255,255,1)",
          secondary: "rgba(252.5, 252.5, 252.5, 1)",
          terciary: "rgba(250, 250, 250, 1)",
          table: "rgba(255, 255, 255, 1)",
          hover: "rgba(245, 245, 245, 1)",
          tags: "rgba(227, 227, 227, 1)",
        },
        border: {
          primary: "rgba(0, 0, 0, 0.03)",
          secondary: "rgba(231, 232, 236, 1)",
        },
        font: {
          100: "rgba(0, 0, 0, 0.95)",
          80: "rgba(0, 0, 0, 0.85)",
          60: "rgba(0, 0, 0, 0.65)",
          40: "rgba(0, 0, 0, 0.45)",
          20: "rgba(0, 0, 0, 0.25)",
          10: "rgba(0, 0, 0, 0.15)",
        },
      },
      blue: {
        border: "#5c7df9",
      },
      red: "#ea3943",
      darkred: "rgba(234, 57, 67, 0.2)",
      green: "#0ECB81",
      darkgreen: "rgba(2, 192, 118, 0.2)",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
    },
  },
  plugins: [],
};
