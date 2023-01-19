/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize: {
			10: "10px",
			12: "12px",
			14: "14px",
			16: "16px",
			18: "18px",
			20: "20px",
			30: "30px",
			40: "40px",
			50: "50px",
			60: "60px",
			70: "70px",
			80: "80px",
			90: "90px",
			100: "100px",
		},
		colors: {
			'floral-white': '#FFFCF2',
			'pale-silver': '#CCC5B9',
			'black-olive': '#403D39',
			'eerie-black': '#EB5E28',
			'white': '#FFFFFF',
			'flame': '#EB5E28',
		  },
    extend: {},
  },
  plugins: [],
}
