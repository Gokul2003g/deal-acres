/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...require("tailwindcss/colors"), // Include default Tailwind CSS colors
      mainBlue: "#0061DF",
      lightBlue: "#D4E5FB",
      darkblue: "#99C5FF",
    },
    extend: {},
  },
  plugins: [],
};
