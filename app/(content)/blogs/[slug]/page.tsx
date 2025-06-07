import {CustomStructuredText} from '@app/components/organisms';
import {PageTransition} from '@app/components/organisms/page-transition';
import {Button} from '@app/components/ui/button';
import getBlogDetailsData from '@app/data/blog-detail';
import {isError, isNullish} from '@app/lib';
import {ArrowLeftIcon} from '@phosphor-icons/react/dist/ssr';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import {Image, toNextMetadata} from 'react-datocms';

type BlogPageProperties = {
	params: {
		slug: string;
	};
};

const generateMetadata = async ({params: {slug}}: BlogPageProperties): Promise<Metadata> => {
	const result = await getBlogDetailsData(slug);

	if (isError(result) || isNullish(result.data)) {
		return toNextMetadata([]);
	}

	const seoTitleFavicon = [
		...result.data._seoMetaTags,
		...result.data._site,
	] as SeoOrFaviconTag[] | TitleMetaLinkTag[];

	return toNextMetadata(seoTitleFavicon);
};

const BlogPage = async ({params: {slug}}: BlogPageProperties): Promise<JSX.Element> => {
	const result = await getBlogDetailsData(slug);

	if (isError(result) || isNullish(result.data)) {
		return notFound();
	}

	const {data} = result;

	return (
		<PageTransition>
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
		</PageTransition>
	);
};

export default BlogPage;

export type {
	BlogPageProperties as BlogPageProps,
};

export {
	generateMetadata,
};