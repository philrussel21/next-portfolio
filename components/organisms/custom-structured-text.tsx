import type {StructuredTextGraphQlResponse} from 'react-datocms';
import {StructuredText} from 'react-datocms';

type CustomStructuredTextProperties = {
	content: StructuredTextGraphQlResponse;
};

const CustomStructuredText = ({content}: CustomStructuredTextProperties): JSX.Element => {
	return (
		<div className="structured-content">
			<StructuredText data={content}/>
		</div>
	);
};

export default CustomStructuredText;

export type {
	CustomStructuredTextProperties as CustomStructuredTextProps,
};