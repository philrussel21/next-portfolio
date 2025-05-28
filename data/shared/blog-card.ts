
type BlogCard = {
	id: string;
	title: string;
	slug: string;
	synopsis: string;
}

const fields = `
	id
	title
	slug
	synopsis
`;

export type {
	BlogCard
};

export {
	fields
}