/* eslint-disable @typescript-eslint/naming-convention */

import type {Config} from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import {withTV} from 'tailwind-variants/transformer';

const colors = {
	'brand-charcoal': '#4A4A4A',
	'brand-white-smoke': '#F5F5F5',
};

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors,
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		fontFamily: {
			heading: 'var(--heading-font)',
			body: 'var(--body-font)',
		},
		backgroundImage: {
			'gradient-home': 'linear-gradient(90deg,hsla(0,0%,75%,.1) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,75%,.1) 1px,transparent 0)'
		}
	},
	plugins: [
		tailwindcssAnimate,
	],
};

export default withTV(config);

export {
	colors,
};
