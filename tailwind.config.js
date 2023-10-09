/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#20293A",
          content: "#a5b2c5",
        },
        secondary: "#111729",
        accent: "#6466E9",
      },
      backgroundImage: {
        quote: "url('/img/bg-image-random-quote.svg')",
      },
    },
  },
  plugins: [],
};
