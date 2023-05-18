/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PokemonGB: ["PokemonGB", "sans-serif"],
      },
    },
  },
  plugins: [],
};
