import {GraphQLClient} from 'graphql-request';

type DatoRequest = {
	query: string;
	variables?: Record<string, unknown>;
	preview?: boolean;
};

const request = async <T>({query, variables, preview = false}: DatoRequest): Promise<T> => {
	const includeDrafts = process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development' || preview;

	const baseHeaders = {
		authorization: `Bearer ${process.env.DATO_CMS_TOKEN ?? ''}`,
	};

	const headers = includeDrafts ? {
		...baseHeaders,
		// eslint-disable-next-line @typescript-eslint/naming-convention
		'X-Include-Drafts': 'true',
	} : baseHeaders;

	const client = new GraphQLClient('https://graphql.datocms.com/', {headers});

	return client.request<T>(query, variables);
};

export default request;
