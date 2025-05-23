import {gql} from 'graphql-request';

type TextSection = {
	id: string;
	_modelApiKey: string;
	content: string;
};

const fields = gql`
	id
	_modelApiKey
	content
`;

const isTextSection = (block: unknown): block is TextSection => {
	return (block as TextSection)._modelApiKey === 'text_section';
};

export {
	fields,
	isTextSection,
};

export type {
	TextSection,
};
