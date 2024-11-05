/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          red: "#F40000",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "Sans"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
