import type {FC} from 'react';
import {draftMode} from 'next/headers';
import {Poppins, Montserrat} from 'next/font/google';
import {SwatchesIcon} from '@phosphor-icons/react/ssr';
import {ProgressBar} from '@app/components/organisms';
import './globals.css';

type RootLayoutProps = {
	children: React.ReactNode;
	params: {
		locale?: string;
	};
};

const revalidate = 3600;

const poppins = Poppins({subsets: ['latin'], variable: '--body-font', weight: ['400', '600']});
const montserrat = Montserrat({subsets: ['latin'], variable: '--heading-font'});

const RootLayout: FC<RootLayoutProps> = ({children, params: {locale}}): React.ReactElement => {
	const {isEnabled: draftModeEnabled} = draftMode();

	return (
		<html lang={locale?.replaceAll('_', '-')} className={`${poppins.variable} ${montserrat.variable}`}>
			<body>
				<main className='text-white'>
					<div className='fixed inset-0 w-full h-full z-[-1] min-h-screen bg-black'>
						<div className="bg-gradient-home bg-[length:10px_10px] absolute inset-0 w-full h-full"></div>
					</div>
					{children}
					{draftModeEnabled && (
						<div className="fixed bottom-0 left-0 ml-[50%] mb-6 -translate-x-[50%] flex items-stretch gap-3 bg-yellow-300 text-yellow-950 border-2 border-yellow-950 font-semibold text-xs uppercase px-5 py-3 rounded-full shadow-lg">
							<SwatchesIcon className="w-4 h-4" />
							<span>Draft mode enabled</span>
							<span className="block border-l border-yellow-800" />
							<a className="font-bold" href="/api/draft/disable">Exit</a>
						</div>
					)}
					<ProgressBar />
				</main>
			</body>
		</html>
	);
};

export default RootLayout;

export {
	revalidate,
};
