import {gql} from 'graphql-request';

type ResponsiveImage = {
	src: string;
	srcSet: string;
	width: number;
	height: number;
	alt: string;
	title: string;
	base64: string;
	bgColor: string;
	sizes: string;
};

const generateFields = (width: number, ar: string | undefined = undefined): string => {
	const fields = gql`
		src
		srcSet
		width
		height
		alt
		title
		base64
		bgColor
		sizes
	`;

	if (ar === undefined) {
		return gql`
			responsiveImage(imgixParams: {fm: webp, fit: crop, crop: focalpoint, w: "${width}"}) {
				${fields}
			}
		`;
	}

	return gql`
		responsiveImage(imgixParams: {fm: webp, ar: "${ar}", fit: crop, crop: focalpoint, w: "${width}"}) {
			${fields}
		}
	`;
};

export {
	generateFields,
};

export type {
	ResponsiveImage,
};
