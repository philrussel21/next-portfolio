import type {SeoOrFaviconTag} from 'react-datocms';

type SiteMetadata = {
	_site: {
		faviconMetaTags: SeoOrFaviconTag[];
	};
};

const siteMetaQuery = `
	_site {
    faviconMetaTags {
      attributes
      content
      tag
    }
  }
`;

export default siteMetaQuery;

export type {
	SiteMetadata,
};
