import type {ResponsiveImageType, TitleMetaLinkTag} from 'react-datocms';
import type {DTO} from './common/dto';
import type {SiteQuery} from './common/seo';
import {siteSeoQueryString, pageSeoFields, formatData as formatSeoData} from './common/seo';
import request from '@app/integration/dato';
import { ProjectCardDTO, ProjectCardQuery } from './common/model/project-card';
import {fields as projectCardFields, formatData as formatProjectCardData} from './common/model/project-card';

type HomeDTO = DTO & {
	seo: TitleMetaLinkTag[];
  mainHeading: string;
  about: string;
	projects: ProjectCardDTO[];
};

type HomeQuery = {
  id: string;
	seo: TitleMetaLinkTag[];
	mainHeading: string;
  about: string;
};

type Query = {
	site: SiteQuery;
  home: HomeQuery;
	allProjects: ProjectCardQuery[];
};

const fields = `
	${pageSeoFields}
  id
  mainHeading
  about
`;

const query = `
query {
	${siteSeoQueryString}
	home {
		${fields}
	}
	allProjects {
		${projectCardFields}
	}
}
`;

const formatData = (data: HomeQuery, projects: ProjectCardQuery[], site: SiteQuery): HomeDTO => ({
		id: data.id,
		type: 'home',
		seo: formatSeoData(site, data.seo),
		mainHeading: data.mainHeading,
		about: data.about,
		projects: projects.map(formatProjectCardData),
	});

const getData = async (preview: boolean): Promise<HomeDTO> => {
	const data = await request<Query>({query, variables: {}, preview});

	return formatData(data.home, data.allProjects, data.site);
};

export default getData;

export type {
	HomeDTO,
};