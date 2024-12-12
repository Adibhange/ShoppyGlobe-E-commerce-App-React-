/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255, 85, 1)",
        "primary-content": "rgb(255, 255, 255)",
        "primary-dark": "rgb(205, 68, 0)",
        "primary-light": "rgb(255, 119, 52)",

        background: "rgb(240, 240, 240)",
        foreground: "rgb(251, 251, 251)",
        border: "rgb(223, 223, 223)",

        copy: "rgb(38, 38, 38)",
        "copy-light": "rgb(102, 102, 102)",
        "copy-lighter": "rgb(140, 140, 140)",

        error: "rgb(255, 1, 1)",
        "error-content": "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
