/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        circle: "circle",
        georgian: "georgian",
        kannada: "kannada",
        square: "square",
        "trad-chinese-informal": "trad-chinese-informal",
      },
    },
  },
  plugins: [],
};
