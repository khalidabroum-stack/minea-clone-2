/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#12121A",
        surface: "#1E1E2A",
        accent: "#FF7A1A",
      },
    },
  },
  plugins: [],
};
