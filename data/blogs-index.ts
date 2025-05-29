import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import {BlogCard, blogCardFields, } from './shared';

type BlogsIndexData = {
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	blogs: BlogCard[];
};

type BlogsIndexQuery = {
	blogIndex: Pick<BlogsIndexData, '_seoMetaTags'>;
	allBlogs: BlogCard[];
};

const getBlogsIndexData = cache(async (): Promise<Result<BlogsIndexData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query BlogsIndexQuery {
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
		}
	};
});

export default getBlogsIndexData;
