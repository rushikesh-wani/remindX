/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        radiant:
          "conic-gradient(#ff4545, #3e00ff, #006aff, #ffac00, #ff0095, #ff4545);",
      },
    },
  },
  plugins: [],
};
