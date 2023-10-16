/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/ui-kit-bmteach/**/*.{html,js, jsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
