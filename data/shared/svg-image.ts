import {gql} from 'graphql-request';

type SVGImage = {
	url: string;
	alt: string;
};

const fields = gql`
	url
	alt
`;

export {
	fields,
};

export type {
	SVGImage,
};
