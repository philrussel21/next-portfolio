import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import {fields as contentFields} from '@app/data/content';
import type {Content} from '@app/data/content';

type HomeData = {
	_seoMetaTags: SeoOrFaviconTag[] | TitleMetaLinkTag[];
	_locales: string[];
	content: Content[];
};

type HomeQuery = {
	home: HomeData;
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
				${contentFields}
			}
		}
	`;

	const data = await request<HomeQuery>({query, preview});

	return {type: 'success', data: data.home};
});

export default getHomeData;
