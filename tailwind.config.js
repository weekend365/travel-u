/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        turquoise: "#1abc9c",
        greenSea: "#16a085",
        emerald: "#2ecc71",
        nephritis: "#27ae60",
        peterRiver: "#3498db",
        belizeHole: "#2980b9",
        amethist: "#9b59b6",
        wisteria: "#8e44ad",
        wetAsf: "#34495e",
        midnight: "#2c3e50",
        suflower: "#f1c40f",
        orange: "#f39c12",
        carrot: "#e67e22",
        pumpkin: "#d35400",
        alizarin: "#e74c3c",
        pomegranate: "#c0392b",
        clouds: "#ecf0f1",
        silver: "#bdc3c7",
        cono: "#95a5a6",
        asbe: "#7f8c8d",
        naver: "#2DB400",
        kakao: "#FEE500",
      },
    },
  },
  plugins: [],
};
