import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, StructuredTextGraphQlResponse, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import {isNullish, type Result} from '@app/lib';
import type {ResponsiveImage} from './shared';
import {responsiveImageFields} from './shared';
import siteMetaQuery from './shared/site-metadata';

type BlogDetailsData = {
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	_site: SeoOrFaviconTag[];
	title: string;
	synopsis: string;
	image: {
		responsiveImage: ResponsiveImage;
	};
	content: StructuredTextGraphQlResponse;
};

type BlogDetailsQuery = {
	blog: BlogDetailsData;
	_site: {
		faviconMetaTags: SeoOrFaviconTag[];
	};
};

const getBlogDetailsData = cache(async (slug: string): Promise<Result<BlogDetailsData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query BlogDetailsQuery($slug: String!) {
			${siteMetaQuery}
			blog(filter: {slug: {eq: $slug}}) {
				_seoMetaTags {
					attributes
					content
					tag
				}
				title
				synopsis
				image {
				${responsiveImageFields(900, '6:4')}
				}
				content {
					value
				}
			}
		}
	`;

	const data = await request<BlogDetailsQuery>({query, preview, variables: {slug}});

	if (isNullish(data) || isNullish(data.blog)) {
		return {
			type: 'error',
		};
	}

	return {
		type: 'success',
		data: {
			...data.blog,
			_site: data._site.faviconMetaTags,
		},
	};
});

export default getBlogDetailsData;
