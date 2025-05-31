import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import type {ProjectCard} from './shared';
import {projectCardFields} from './shared';
import siteMetaQuery from './shared/site-metadata';

type ProjectsIndexData = {
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	_site: SeoOrFaviconTag[];
	projects: ProjectCard[];
};

type ProjectsIndexQuery = {
	projectsIndex: Pick<ProjectsIndexData, '_seoMetaTags'>;
	_site: {
		faviconMetaTags: SeoOrFaviconTag[];
	};
	allProjects: ProjectCard[];
};

const getProjectsIndexData = cache(async (): Promise<Result<ProjectsIndexData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query ProjectsIndexQuery {
			${siteMetaQuery}
			projectsIndex {
				_seoMetaTags {
					attributes
					content
					tag
				}
			}
			allProjects {
				${projectCardFields}
			}
		}
	`;

	const data = await request<ProjectsIndexQuery>({query, preview});

	return {
		type: 'success',
		data: {
			_seoMetaTags: data.projectsIndex._seoMetaTags,
			_site: data._site.faviconMetaTags,
			projects: data.allProjects,
		},
	};
});

export default getProjectsIndexData;
