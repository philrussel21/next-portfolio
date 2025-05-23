import {Fragment} from 'react';
import type {FC} from 'react';
import * as Guards from '@app/data/blocks';
import type * as Types from '@app/data/blocks';
import {Text} from '@app/components/atoms';
import {Section} from '@app/components/molecules';

type ContentTypes =
	| Types.TextSection;

type ContentProps = {
	data: ContentTypes[];
};

const renderBlock = (block: ContentTypes): React.ReactElement | undefined => {
	if (Guards.isTextSection(block)) {
		return (
			<Section key={block.id}>
				<Text clampWidth content={block.content}/>
			</Section>
		);
	}

	return undefined;
};

const Content: FC<ContentProps> = ({data}): React.ReactElement => (
	<Fragment>
		{data.map((block) => renderBlock(block))}
	</Fragment>
);

export default Content;
