'use client';

import {track} from '@vercel/analytics';
import {Button} from '@app/components/ui/button';
import Link from 'next/link';

type TrackableButtonProperties = {
	traceLabel: string;
	label: string;
	href: string;
};

export const onButtonTrackClick = (label: string) => () => {
	track(label);
};

const TrackableButton = ({traceLabel, label, href}: TrackableButtonProperties): JSX.Element => (
	<Link href={href} className="no-underline">
		<Button onClick={onButtonTrackClick(traceLabel)}>
			{label}
		</Button>
	</Link>
);

export default TrackableButton;

export type {
	TrackableButtonProperties as TrackableButtonProps,
};