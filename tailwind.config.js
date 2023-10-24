/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      title: [
        "2rem",
        {
          lineHeight: "1.35",
          fontWeight: 300,
        },
      ],
    },
    extend: {
      fontFamily: {
        space: ["space", "monospace"],
      },
      colors: {
        primary: "hsl(27, 80%, 52%)",
        secondary: "hsl(210, 77%, 46%)",
        "blue-200": "hsl(206,93%,83.5%)",
        "blue-500": "hsl(210,77%,36%)",
        "black-200": "hsl(210,8%,90%)",
        "black-225": "hsl(210, 8%, 85%)",
        "black-250": "hsl(210,8%,80%)",
        "black-300": "hsl(210,9%,75%)",
        "black-350": "hsl(210,8%,68%)",
        "black-400": "hsl(210, 8%, 42%)",
        "black-500": "hsl(210, 8%, 25%)",
        "black-600": "hsl(210, 8%, 5%)",
        black: "hsl(0, 0%, 0%)",
      },
      animation: {
        bounce1: "bounce 1s infinite 200ms",
        bounce2: "bounce 1s infinite 400ms",
      },
      backgroundImage: {
        sprites: "url(../public/sprites.svg)",
      },
      spacing: {
        header: "56px",
        "left-bar": "164px",
        "content-x": "calc(100vw - 164px)",
        "content-y": "calc(100vh - 56px)",
      },
    },
  },
  plugins: [],
};
