/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#2E2929", 
        "gray-50": "#2E2929",
        "gray-100": "#2E2929",
        "gray-500": "#2E2929",
        "primary-100": "#F1E7E7",
        "primary-300": "#FCF8F8",
        "primary-500": "#FFCD5B",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FF9F32",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #000000 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
