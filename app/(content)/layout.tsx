type ContentLayoutProperties = {
	children: React.ReactNode
};

const ContentLayout = ({children}: ContentLayoutProperties): JSX.Element => (
	<div className="container py-24">
		{children}
	</div>
);

export default ContentLayout;

export type {
	ContentLayoutProperties as ContentLayoutProps,
};