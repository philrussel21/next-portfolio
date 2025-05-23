import type {MetadataRoute} from 'next';

const revalidate = 21_600; // 6 hours

const sitemap = (): MetadataRoute.Sitemap => {
	return [];
};

export default sitemap;

export {
	revalidate,
};
