import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, StructuredTextGraphQlResponse, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import {isNullish, type Result} from '@app/lib';
import {ResponsiveImage, responsiveImageFields, } from './shared';

type BlogDetailsData = {
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	title: string;
	synopsis: string;
	image: {
		responsiveImage: ResponsiveImage;
	};
	content: StructuredTextGraphQlResponse;
};

type BlogDetailsQuery = {
	blog: BlogDetailsData;
};

const getBlogDetailsData = cache(async (slug: string): Promise<Result<BlogDetailsData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query BlogDetailsQuery($slug: String!) {
			blog(filter: {slug: {eq: $slug}}) {
				_seoMetaTags {
					attributes
					content
					tag
				}
				title
				synopsis
				image {
				${responsiveImageFields(600, '6:4')}
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
		}
	}

	return {
		type: 'success',
		data: data.blog,
	};
});

export default getBlogDetailsData;
