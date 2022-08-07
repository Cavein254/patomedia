/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img-one": "url('/public/imgs/imgone.jpg')",
        "img-two": "url('/imgs/imgtwo.jpg')",
        "img-one": "url('/imgs/imgone.jpg')",
      },
    },
  },
  plugins: [],
};
