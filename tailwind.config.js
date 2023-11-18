/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "utama": "#7D1917",
        "kedua": "#F2DEC5",
      },
    },
  },
  plugins: [require("daisyui")],
};
