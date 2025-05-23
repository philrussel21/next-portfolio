type Video = {
	provider: 'vimeo' | 'youtube';
	providerUid: string;
	thumbnailUrl: string;
	url: string;
	title: string;
};

const fields = `
	provider
	providerUid
	thumbnailUrl
	url
	title
`;

export {
	fields,
};

export type {
	Video,
};
