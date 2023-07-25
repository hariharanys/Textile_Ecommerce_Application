/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: { min: "640px", max: "767px" },
    },
    colors: {
      primary: "#020617",
      secondary: "#f8fafc",
    },
  },
  plugins: [],
};
