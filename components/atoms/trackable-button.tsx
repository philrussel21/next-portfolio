import {track} from '@vercel/analytics';
import {Button} from '../ui/button';
import Link from 'next/link';
import {isNullish} from '@app/lib';
import {Fragment} from 'react';

type TrackableButtonProperties = {
	traceLabel: string;
	label: string;
	href?: string;
};

export const onButtonTrackClick = (label: string) => () => {
	track(label);
};

const TrackableButton = ({traceLabel, label, href}: TrackableButtonProperties): JSX.Element => (
	<Button asChild={!isNullish(href)} onClick={onButtonTrackClick(traceLabel)}>
		<Fragment>
			{!isNullish(href) && (
				<Link href={href}>
					{label}
				</Link>
			)}
			{isNullish(href) && label}
		</Fragment>
	</Button>
);

export default TrackableButton;

export type {
	TrackableButtonProperties as TrackableButtonProps,
};