import type {FC} from 'react';
import {draftMode} from 'next/headers';
import {EB_Garamond, Montserrat} from 'next/font/google';
import {SwatchIcon} from '@heroicons/react/20/solid';
import {ProgressBar} from '@app/components/organisms';
import './globals.css';

type RootLayoutProps = {
	children: React.ReactNode;
	params: {
		locale?: string;
	};
};

const revalidate = 3600;

const ebGaramond = EB_Garamond({subsets: ['latin'], variable: '--heading-font'});
const montserrat = Montserrat({subsets: ['latin'], variable: '--body-font'});

const RootLayout: FC<RootLayoutProps> = ({children, params: {locale}}): React.ReactElement => {
	const {isEnabled: draftModeEnabled} = draftMode();

	return (
		<html lang={locale?.replaceAll('_', '-')} className={`${ebGaramond.variable} ${montserrat.variable}`}>
			<body>
				{children}
				{draftModeEnabled && (
					<div className="fixed bottom-0 left-0 ml-[50%] mb-6 -translate-x-[50%] flex items-stretch gap-3 bg-yellow-300 text-yellow-950 border-2 border-yellow-950 font-semibold text-xs uppercase px-5 py-3 rounded-full shadow-lg">
						<SwatchIcon className="w-4 h-4" />
						<span>Draft mode enabled</span>
						<span className="block border-l border-yellow-800" />
						<a className="font-bold" href="/api/draft/disable">Exit</a>
					</div>
				)}
				<ProgressBar />
			</body>
		</html>
	);
};

export default RootLayout;

export {
	revalidate,
};
