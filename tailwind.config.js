/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255, 221, 51)",
        "primary-content": "rgb(51, 42, 0)",
        "primary-dark": "rgb(255, 213, 0)",
        "primary-light": "rgb(255, 230, 102)",

        background: "rgb(242, 241, 237)",
        foreground: "rgb(252, 252, 251)",
        border: "rgb(228, 226, 218)",

        copy: "rgb(44, 42, 33)",
        "copy-light": "rgb(117, 112, 87)",
        "copy-lighter": "rgb(157, 152, 123)",

        success: "rgb(51, 255, 51)",
        warning: "rgb(255, 255, 51)",
        error: "rgb(255, 51, 51)",

        "success-content": "rgb(0, 51, 0)",
        "warning-content": "rgb(51, 51, 0)",
        "error-content": "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
