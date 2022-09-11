/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./resources/**/*.{vue,js,ts,jsx,tsx}"
	],
	
	theme: {
	  extend: {},
	},
  
	plugins: [
	  require('@tailwindcss/typography'),
	  require("daisyui")
	],
  
	daisyui: {
	  prefix: "daisy-",
	  darkTheme: "dracula",
	  themes: ["dracula", "cupcake", "cyberpunk", "coffee"]
	},
  }
  