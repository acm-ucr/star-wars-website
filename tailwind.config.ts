/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sw: {
          "gold-100": "#D09742",
          "gold-200": "#6A4D22",
          white: "#FFDA7C",
        },
      },
    },
  },
  plugins: [],
};
