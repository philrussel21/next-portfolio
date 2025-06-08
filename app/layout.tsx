import type {FC} from 'react';
import {draftMode} from 'next/headers';
import {Poppins, Montserrat} from 'next/font/google';
import {SwatchesIcon} from '@phosphor-icons/react/ssr';
import {ModeToggle, ProgressBar} from '@app/components/organisms';
import './globals.css';
import ResponsiveNav from '@app/components/organisms/responsive-nav';
import {ThemeProvider} from '@app/context/theme-provider';
import {Analytics} from '@vercel/analytics/next';

type RootLayoutProps = {
	children: React.ReactNode;
	params: {
		locale?: string;
	};
};

const revalidate = 0; // Disable revalidation for this layout to make static

const poppins = Poppins({subsets: ['latin'], variable: '--body-font', weight: ['400', '600']});
const montserrat = Montserrat({subsets: ['latin'], variable: '--heading-font'});

const RootLayout: FC<RootLayoutProps> = ({children, params: {locale}}): React.ReactElement => {
	const {isEnabled: draftModeEnabled} = draftMode();

	return (
		<html suppressHydrationWarning lang={locale?.replaceAll('_', '-')} className={`${poppins.variable} ${montserrat.variable}`}>
			<body>
				<ThemeProvider enableSystem disableTransitionOnChange attribute="class" defaultTheme="system">
					<main className="dark:text-zinc-200 text-zinc-900 min-h-screen">
						<div className="fixed top-8 right-8 z-50">
							<ModeToggle/>
						</div>
						<ResponsiveNav/>
						{children}
						{draftModeEnabled && (
							<div className="fixed bottom-0 left-0 ml-[50%] mb-6 -translate-x-[50%] flex items-stretch gap-3 bg-yellow-300 text-yellow-950 border-2 border-yellow-950 font-semibold text-xs uppercase px-5 py-3 rounded-full shadow-lg">
								<SwatchesIcon className="w-4 h-4"/>
								<span>Draft mode enabled</span>
								<span className="block border-l border-yellow-800"/>
								<a className="font-bold" href="/api/draft/disable">Exit</a>
							</div>
						)}
						<ProgressBar/>
					</main>
				</ThemeProvider>
				<Analytics/>
			</body>
		</html>
	);
};

export default RootLayout;

export {
	revalidate,
};
