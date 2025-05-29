import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import {BlogCard, blogCardFields, ProjectCard, projectCardFields, Technology, technologyFields} from './shared';

type Role = {
	name: string;
	company: string;
	dateRange: string;
	description: string;
}

type HomeData = {
	available: boolean;
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	projects: ProjectCard[];
	blogs: BlogCard[];
	roles: Role[];
	technologies: Technology[];
};

type HomeQuery = {
	home: HomeData;
	allProjects: ProjectCard[];
	allBlogs: BlogCard[];
	allRoles: Role[];
	allTechnologies: Technology[];
};

const getHomeData = cache(async (): Promise<Result<HomeData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query HomeQuery {
			home {
				available
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
			allRoles {
				name
				company
				dateRange
				description
			}
			allTechnologies(filter: {featured: {eq: "true"}}) {
				${technologyFields}
			}
		}
	`;

	const data = await request<HomeQuery>({query, preview});

	return {
		type: 'success',
		data: {
			_seoMetaTags: data.home._seoMetaTags,
			available: data.home.available,
			projects: data.allProjects,
			blogs: data.allBlogs,
			roles: data.allRoles,
			technologies: data.allTechnologies,
		}
	};
});

export default getHomeData;
