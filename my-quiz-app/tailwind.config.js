/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { display: ["Borel-Regular", "Georgia", "serif"] },
      colors: { brand: { DEFAULT: "#0f766e", light: "#e6fffb" } },
      boxShadow: { soft: "0 20px 40px rgba(12,22,36,0.06)" }
    }
  },
  plugins: []
};
