import {Text} from '@app/components/atoms';
import {CardBlog, Footer} from '@app/components/molecules';
import {Button} from '@app/components/ui/button';
import getBlogsIndexData from '@app/data/blogs-index';
import {isError} from '@app/lib';
import {ArrowLeftIcon} from '@phosphor-icons/react/dist/ssr';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {toNextMetadata} from 'react-datocms';

type BlogsIndexProperties = {

};

const generateMetadata = async (): Promise<Metadata> => {
	const homeResult = await getBlogsIndexData();

	if (isError(homeResult)) {
		return toNextMetadata([]);
	}

	return toNextMetadata(homeResult.data._seoMetaTags);
};

const BlogsIndex = async ({ }: BlogsIndexProperties): Promise<JSX.Element> => {
	const result = await getBlogsIndexData();

	if (isError(result)) {
		return notFound();
	}

	const {data: {blogs}} = result;
	
	return (
		<div>
			<div>
				<Button asChild variant="link">
					<Link href="/" className="no-underline">
						<ArrowLeftIcon className="w-4 h-4"/>
						<span>Back to Home</span>
					</Link>
				</Button>
			</div>
			<div className="space-y-16 mt-6">
				<div>
					<h2 className="heading-two">All Blog posts</h2>
					<Text className="mt-2 max-w-2xl" content="Practical insights on building for the web — written to help business owners and founders understand the tech, and developers think more like product people."/>
				</div>
				<ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 2xl:gap-12 mt-8">
					{blogs.map(blog => (
						<li key={blog.id} className="h-full flex">
							<CardBlog
								title={blog.title}
								synopsis={blog.synopsis}
								url={`/blogs/${blog.slug}`}
							/>
						</li>
					))}
				</ul>
				<Footer
					heading="Let's work together"
					content="Got an idea or question? I’d love to hear from you."
					actionLabel="Say Hello"
				/>
			</div>
		</div>
	);
};

export default BlogsIndex;

export type {
	BlogsIndexProperties as BlogsIndexProps,
};

export {
	generateMetadata,
};