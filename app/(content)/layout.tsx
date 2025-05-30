import {Footer} from "@app/components/molecules";

type ContentLayoutProperties = {
	children: React.ReactNode
};

const ContentLayout = ({children}: ContentLayoutProperties): JSX.Element => (
	<div className="py-24 bg-black min-h-screen w-full">
		<div className="container !max-w-4xl mx-auto">
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