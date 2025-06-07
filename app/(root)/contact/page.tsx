import {ContactForm} from '@app/components/organisms';
import {PageTransition} from '@app/components/organisms/page-transition';
import {Button} from '@app/components/ui/button';
import getHomeData from '@app/data/home';
import {isError} from '@app/lib';
import {ArrowLeftIcon} from '@phosphor-icons/react/dist/ssr';
import type {Metadata} from 'next';
import Link from 'next/link';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import {toNextMetadata} from 'react-datocms';

const generateMetadata = async (): Promise<Metadata> => {
	const homeResult = await getHomeData();

	if (isError(homeResult)) {
		return toNextMetadata([]);
	}

	const seoTitleFavicon = [
		{
			tag: 'title',
			content: 'Contact Us',
			attributes: {},
		},
		{
			tag: 'meta',
			content: 'Get in touch for any inquiries or support.',
			attributes: {
				name: 'description',
			},
		},
		...homeResult.data._site,
	] as SeoOrFaviconTag[] | TitleMetaLinkTag[];

	return toNextMetadata(seoTitleFavicon);
};

const ContactPage = (): JSX.Element => (
	<PageTransition>
		<div>
			<Button asChild variant="link">
				<Link href="/">
					<ArrowLeftIcon className="w-4 h-4"/>
					<span>Back to Home</span>
				</Link>
			</Button>
		</div>
		<div className="mt-12 lg:mt-16">
			<ContactForm/>
		</div>
	</PageTransition>
);

export default ContactPage;

export {
	generateMetadata,
};