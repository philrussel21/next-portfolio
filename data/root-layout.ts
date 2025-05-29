import {gql} from 'graphql-request';
// eslint-disable-next-line import/named
import {cache} from 'react';
import {draftMode} from 'next/headers';
import request from '@app/data/request';
import type {Result} from '@app/lib';
import {Technology, technologyFields} from './shared';

type RootLayoutData = {
	technologies: Technology[];
	available: boolean;
};

type RootLayoutQuery = {
	allTechnologies: Technology[];
	home: {
		available: boolean;
	};
};

const getRootLayoutData = cache(async (): Promise<Result<RootLayoutData>> => {
	const {isEnabled: preview} = draftMode();

	const query = gql`
		query RootLayoutQuery {
			allTechnologies(filter: {featured: {eq: "true"}}) {
				${technologyFields}
			}
			home {
				available
			}
		}
	`;

	const data = await request<RootLayoutQuery>({query, preview});

	return {
		type: 'success',
		data: {
			technologies: data.allTechnologies,
			available: data.home.available,
		}
	};
});

export default getRootLayoutData;
