import {gql} from 'graphql-request';
import type * as T from '@app/data/blocks';
import * as F from '@app/data/blocks';

type Content =
	| T.TextSection;

const fields = gql`
	content {
		... on TextSectionRecord {
			${F.textSectionFields}
		}
	}
`;

export {
	fields,
};

export type {
	Content,
};
