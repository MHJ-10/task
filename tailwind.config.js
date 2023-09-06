/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
      },
      colors: {
        c1: "#102C57",
        c2: "#DAC0A3",
        c3: "#EADBC8",
        c4: "#F8F0E5",
      },
    },
  },
  plugins: [],
};
