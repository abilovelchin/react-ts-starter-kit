/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(30 41 59)",
          hover: "rgb(51 65 85)",
        },
        secondary: "rgb(17 94 89)",
      },
    },
  },
  plugins: [],
};
