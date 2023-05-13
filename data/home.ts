import type {ResponsiveImageType, TitleMetaLinkTag} from 'react-datocms';
import type {DTO} from './common/dto';
import type {SiteQuery} from './common/seo';
import {siteSeoQueryString, pageSeoFields, formatData as formatSeoData} from './common/seo';
import request from '@app/integration/dato';
import generateResponsiveImageFields from './common/responsive-image';

type HomeDTO = DTO & {
	seo: TitleMetaLinkTag[];
  mainHeading: string;
  about: string;
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
}
`;

const formatData = (data: HomeQuery, site: SiteQuery): HomeDTO => ({
		id: data.id,
		type: 'home',
		seo: formatSeoData(site, data.seo),
		mainHeading: data.mainHeading,
		about: data.about,
	});

const getData = async (preview: boolean): Promise<HomeDTO> => {
	const data = await request<Query>({query, variables: {}, preview});

	return formatData(data.home, data.site);
};

export default getData;

export type {
	HomeDTO,
};