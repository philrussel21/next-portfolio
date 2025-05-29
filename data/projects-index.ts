import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import {ProjectCard, projectCardFields} from './shared';

type ProjectsIndexData = {
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	projects: ProjectCard[];
};

type ProjectsIndexQuery = {
	projectsIndex: Pick<ProjectsIndexData, '_seoMetaTags'>;
	allProjects: ProjectCard[];
};

const getProjectsIndexData = cache(async (): Promise<Result<ProjectsIndexData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query ProjectsIndexQuery {
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
			projects: data.allProjects,
		}
	};
});

export default getProjectsIndexData;
