/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004AAD",
        primaryLight: "#D1EDBE",
        primaryText: "#362C15",
        secondary: "#AACD69",
        secondaryDark: "#334923",
      },
    },
  },
  plugins: [],
};
