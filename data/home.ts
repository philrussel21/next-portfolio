import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import {BlogCard, blogCardFields, ProjectCard, projectCardFields} from './shared';

type HomeData = {
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	projects: ProjectCard[];
	blogs: BlogCard[];
};

type HomeQuery = {
	home: HomeData;
	allProjects: ProjectCard[];
	allBlogs: BlogCard[];
};

const getHomeData = cache(async (): Promise<Result<HomeData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query HomeQuery {
			home {
				_seoMetaTags {
					attributes
					content
					tag
				}
			}
			allProjects(filter: {featured: {eq: "true"}}, first: "6") {
				${projectCardFields}
  		}
			allBlogs(filter: {featured: {eq: "true"}}, first: "4") {
				${blogCardFields}
			}
		}
	`;

	const data = await request<HomeQuery>({query, preview});

	return {
		type: 'success',
		data: {
			_seoMetaTags: data.home._seoMetaTags,
			projects: data.allProjects,
			blogs: data.allBlogs,
		}
	};
});

export default getHomeData;
