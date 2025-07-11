import {Text} from '@app/components/atoms';
import {CardProject, Footer} from '@app/components/molecules';
import {PageTransition} from '@app/components/organisms/page-transition';
import {ScrollReveal} from '@app/components/organisms/scroll-reveal';
import {Button} from '@app/components/ui/button';
import getProjectsIndexData from '@app/data/projects-index';
import {isError} from '@app/lib';
import {ArrowLeftIcon} from '@phosphor-icons/react/dist/ssr';
import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import {toNextMetadata} from 'react-datocms';

const generateMetadata = async (): Promise<Metadata> => {
	const result = await getProjectsIndexData();

	if (isError(result)) {
		return toNextMetadata([]);
	}

	const seoTitleFavicon = [
		...result.data._seoMetaTags,
		...result.data._site,
	] as SeoOrFaviconTag[] | TitleMetaLinkTag[];

	return toNextMetadata(seoTitleFavicon);
};

const ProjectsPage = async (): Promise<JSX.Element> => {
	const result = await getProjectsIndexData();

	if (isError(result)) {
		return notFound();
	}

	const {data: {projects}} = result;

	return (
		<PageTransition>
			<div>
				<Button asChild variant="link">
					<Link href="/">
						<ArrowLeftIcon className="w-4 h-4"/>
						<span>Back to Home</span>
					</Link>
				</Button>
			</div>
			<div className="space-y-16 mt-6">
				<div>
					<h2 className="heading-two">All projects</h2>
					<Text className="mt-2 max-w-2xl" content="From landing pages to full-stack apps, these projects show how I help businesses and teams build fast, reliable, and scalable web solutions."/>
				</div>
				<ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 2xl:gap-12 mt-8">
					{projects.map(project => (
						<ScrollReveal key={project.id}>
							<li className="h-full flex">
								<CardProject
									image={project.image.responsiveImage}
									title={project.title}
									description={project.description}
									tags={project.tags.map(tag => ({label: tag.name}))}
									url={project.url}
								/>
							</li>
						</ScrollReveal>
					))}
				</ul>
				<Footer
					heading="Ready to create your own?"
					content="Let’s connect — whether it’s work, ideas, or just to say hello."
					actionLabel="Get started"
				/>
			</div>
		</PageTransition>
	);
};

export default ProjectsPage;

export {
	generateMetadata,
};