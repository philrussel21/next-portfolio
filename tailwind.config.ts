/* eslint-disable @typescript-eslint/naming-convention */

import type {Config} from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import {withTV} from 'tailwind-variants/transformer';
import {screens} from '@app/config';

const colors = {
	'brand-example': '#BADA55',
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
		screens,
		fontFamily: {
			heading: 'var(--heading-font)',
			body: 'var(--body-font)',
		},
	},
	plugins: [
		tailwindcssAnimate,
	],
};

export default withTV(config);

export {
	colors,
};
