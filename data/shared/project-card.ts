import {ResponsiveImage, responsiveImageFields, tagFields} from ".";
import {Tag} from "./tag";

type ProjectCard = {
	id: string;
	title: string;
	url: string;
	tags: Tag[];
	description: string;
	image: {
		responsiveImage: ResponsiveImage;
	}
}

const fields = `
	id
	title
	url
	tags {
		${tagFields}
	}
	description
	image {
		${responsiveImageFields(600, '6:4')}
	}
`;

export type {
	ProjectCard
};

export {
	fields
}