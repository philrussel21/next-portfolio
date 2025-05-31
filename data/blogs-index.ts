import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import type {BlogCard} from './shared';
import {blogCardFields} from './shared';
import siteMetaQuery from './shared/site-metadata';

type BlogsIndexData = {
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	_site: SeoOrFaviconTag[];
	blogs: BlogCard[];
};

type BlogsIndexQuery = {
	blogIndex: Pick<BlogsIndexData, '_seoMetaTags'>;
	_site: {
		faviconMetaTags: SeoOrFaviconTag[];
	};
	allBlogs: BlogCard[];
};

const getBlogsIndexData = cache(async (): Promise<Result<BlogsIndexData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query BlogsIndexQuery {
			${siteMetaQuery}
			blogIndex {
				_seoMetaTags {
					attributes
					content
					tag
				}
			}
			allBlogs {
				${blogCardFields}
			}
		}
	`;

	const data = await request<BlogsIndexQuery>({query, preview});

	return {
		type: 'success',
		data: {
			_seoMetaTags: data.blogIndex._seoMetaTags,
			blogs: data.allBlogs,
			_site: data._site.faviconMetaTags,
		},
	};
});

export default getBlogsIndexData;
