import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import type {BlogCard, ProjectCard, ResponsiveImage, Technology} from './shared';
import {blogCardFields, projectCardFields, responsiveImageFields, technologyFields} from './shared';
import siteMetaQuery from './shared/site-metadata';

type Role = {
	name: string;
	company: string;
	dateRange: string;
	description: string;
};

type HomeData = {
	available: boolean;
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	_site: SeoOrFaviconTag[];
	portrait: ResponsiveImage;
	projects: ProjectCard[];
	blogs: BlogCard[];
	roles: Role[];
	technologies: Technology[];
};

type HomeQuery = {
	_site: {
		faviconMetaTags: SeoOrFaviconTag[];
	};
	home: Pick<HomeData, '_seoMetaTags' | 'available'> & {
		portrait: {
			responsiveImage: ResponsiveImage;
		};
	};
	allProjects: ProjectCard[];
	allBlogs: BlogCard[];
	allRoles: Role[];
	allTechnologies: Technology[];
};

const getHomeData = cache(async (): Promise<Result<HomeData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query HomeQuery {
			${siteMetaQuery}
			home {
				available
				portrait {
					${responsiveImageFields(300, '3:2')}
				}
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
			_site: data._site.faviconMetaTags,
			available: data.home.available,
			projects: data.allProjects,
			blogs: data.allBlogs,
			roles: data.allRoles,
			technologies: data.allTechnologies,
			portrait: data.home.portrait.responsiveImage,
		},
	};
});

export default getHomeData;
