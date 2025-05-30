/* eslint-disable @typescript-eslint/naming-convention */

import type {Config} from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import {withTV} from 'tailwind-variants/transformer';

const colors = {
	'brand-charcoal': '#4A4A4A',
	'brand-white-smoke': '#F5F5F5',
};

const config: Config = {
	darkMode: "selector",
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				md: '3rem',
			}
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				...colors
			}
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		fontFamily: {
			heading: 'var(--heading-font)',
			body: 'var(--body-font)'
		},
		boxShadow: {
			'card': 'inset 0 -20px 80px -40px #ffffff3f,0 0 20px -5px hsla(0,0%,100%,.1)',
			'time-slot': 'inset 0 -20px 80px -40px #ffffff3f,0 0 20px -5px hsla(0,0%,100%,.1)',
			'profile': '0 -20px 80px -40px #ffffff3f inset,0 0 20px -5px rgba(255,255,255,0.1)',
		},
		backgroundImage: {
			'gradient-home': 'linear-gradient(90deg,hsla(0,0%,75%,.1) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,75%,.1) 1px,transparent 0)',
		}
	},
	plugins: [
		tailwindcssAnimate,
		require("tailwindcss-animate")
	],
};

export default withTV(config);

export {
	colors,
};
