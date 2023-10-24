/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["space", "monospace"],
      },
      colors: {
        primary: "hsl(27, 80%, 52%)",
        secondary: "hsl(210, 77%, 46%)",
        "blue-200": "hsl(206,93%,83.5%)",
        "blue-500": "hsl(210,77%,36%)",
        "black-225": "hsl(210, 8%, 85%)",
      },
      animation: {
        bounce1: "bounce 1s infinite 200ms",
        bounce2: "bounce 1s infinite 400ms",
      },
      backgroundImage: {
        sprites: "url(../public/sprites.svg)",
      },
    },
  },
  plugins: [],
};
