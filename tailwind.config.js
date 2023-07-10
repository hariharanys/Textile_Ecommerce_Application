/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      midnight: "#121063",
    },
    container: {
      screens: {
        "3xl": "100%",
      },
    },
    extend: {},
  },
  plugins: [],
};
