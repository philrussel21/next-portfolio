import {Text} from '@app/components/atoms';
import {CustomStructuredText} from '@app/components/organisms';
import {Button} from '@app/components/ui/button';
import getBlogDetailsData from '@app/data/blog-detail';
import {isError, isNullish} from '@app/lib';
import {ArrowLeftIcon} from '@phosphor-icons/react/dist/ssr';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {Image, toNextMetadata} from 'react-datocms';

type ProjectPageProperties = {
	params: {
		slug: string;
	};
};

const generateMetadata = async ({params: {slug}}: ProjectPageProperties): Promise<Metadata> => {
	const result = await getBlogDetailsData(slug);

	if (isError(result) || isNullish(result.data)) {
		return toNextMetadata([]);
	}

	return toNextMetadata(result.data._seoMetaTags);
};

const ProjectPage = async ({params: {slug}}: ProjectPageProperties): Promise<JSX.Element> => {
	const result = await getBlogDetailsData(slug);

	if (isError(result) || isNullish(result.data)) {
		return notFound();
	}

	const {data} = result;

	return (
		<div>
			<div>
				<Button asChild variant="link">
					<Link href="/blogs" className="no-underline">
						<ArrowLeftIcon className="w-4 h-4"/>
						<span>Back to Blogs</span>
					</Link>
				</Button>
			</div>
			<div className="mt-8">
				<div>
					<Image data={data.image.responsiveImage} className="!max-w-none rounded-lg" pictureClassName="object-cover"/>
				</div>
				<h1 className="heading-one mt-5">{data.title}</h1>
				<div className="mt-6">
					<CustomStructuredText content={data.content}/>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;

export type {
	ProjectPageProperties as ProjectPageProps,
};

export {
	generateMetadata,
};