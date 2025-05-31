import {Footer} from '@app/components/molecules';

type ContentLayoutProperties = {
	children: React.ReactNode;
};

const ContentLayout = ({children}: ContentLayoutProperties): JSX.Element => (
	<div className="pt-12 pb-36 lg:pb-24 lg:pt-24 dark:bg-black bg-zinc-50 min-h-screen w-full">
		<div className="container !max-w-5xl mx-auto">
			{children}
		</div>
		<div className="mt-16">
			<Footer
				heading="Grow Your Business Online"
				content="Turn website visits into tangible business growth. Let's make it happen."
				actionLabel="Get Started"
			/>
		</div>
	</div>
);

export default ContentLayout;

export type {
	ContentLayoutProperties as ContentLayoutProps,
};