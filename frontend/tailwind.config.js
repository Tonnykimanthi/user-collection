/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(56 189 248)",
          default: "rgb(14 165 233)",
          dark: "rgb(2 132 199)",
        },
        secondary: 'rgb(224 242 254)'
      },
    },
  },
  plugins: [],
};
