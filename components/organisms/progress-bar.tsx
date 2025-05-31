'use client';

import {AppProgressBar} from 'next-nprogress-bar';

const ProgressBar = (): React.ReactElement => (
	<AppProgressBar
		shallowRouting={false}
		height="5px"
		color="#FFDF00"
		options={{showSpinner: false}}
	/>
);

export default ProgressBar;
