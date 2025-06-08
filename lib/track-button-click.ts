import {track} from '@vercel/analytics';

export const onButtonTrackClick = (label: string) => () => {
	track(label);
};