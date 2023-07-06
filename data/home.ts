import type {ResponsiveImageType, TitleMetaLinkTag} from 'react-datocms';
import type {DTO} from './common/dto';
import type {SiteQuery} from './common/seo';
import {siteSeoQueryString, pageSeoFields, formatData as formatSeoData} from './common/seo';
import request from '@app/integration/dato';
import { ProjectCardDTO, ProjectCardQuery } from './common/model/project-card';
import { ExperienceCardDTO, ExperienceCardQuery } from './common/model/experience-card';
import {fields as projectCardFields, formatData as formatProjectCardData} from './common/model/project-card';
import {fields as experienceCardFields, formatData as formatExperienceCardData} from './common/model/experience-card';

type HomeDTO = DTO & {
	seo: TitleMetaLinkTag[];
  mainHeading: string;
  about: string;
	projects: ProjectCardDTO[];
	experiences: ExperienceCardDTO[];
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
	allExperiences: ExperienceCardQuery[];
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
	allExperiences {
		${experienceCardFields}
	}
}
`;

const formatData = (data: HomeQuery, projects: ProjectCardQuery[], experiences: ExperienceCardQuery[], site: SiteQuery): HomeDTO => ({
		id: data.id,
		type: 'home',
		seo: formatSeoData(site, data.seo),
		mainHeading: data.mainHeading,
		about: data.about,
		projects: projects.map(formatProjectCardData),
		experiences: experiences.map(formatExperienceCardData),
	});

const getData = async (preview: boolean): Promise<HomeDTO> => {
	const data = await request<Query>({query, variables: {}, preview});

	return formatData(data.home, data.allProjects, data.allExperiences, data.site);
};

export default getData;

export type {
	HomeDTO,
};