/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)"],
        nunito: ["var(--nunito-font)", "sans-serif"],
      },
      colors: {
        sw: {
          "gold-100": "#D09742",
          "gold-200": "#6A4D22",
          white: "#FFDA7C",
        },
      },
      animation: {
        twinkle: "twinkle 1s ease-in-out infinite",
        crawl: "crawl 3s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
        crawl: {
          "0%": { transform: "translateZ(0) rotateX(20deg)", opacity: 0 },
          "100%": { transform: "translateZ(300px) rotateX(20deg)", opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
