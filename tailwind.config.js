/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors:{
    //   'textColor' : '#F0F3BD',
    //   'btnColor' : '#ca7df9',
    //   "btnHover" : "#028090",
    //   "bgColor":"#05668D"
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
}

