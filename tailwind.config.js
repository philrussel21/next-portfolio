const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: [
		'./node_modules/next/**/*.js',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '2.5rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	experimental: {
		applyComplexClasses: true,
	},
};