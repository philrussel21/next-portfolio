import type {FC} from 'react';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import type {SeoOrFaviconTag, TitleMetaLinkTag} from 'react-datocms';
import {toNextMetadata} from 'react-datocms';
import getHomeData from '@app/data/home';
import {isError} from '@app/lib';
import {Button} from '@app/components/ui/button';
import {CardBlog, CardProject, Footer, ProfileInfo} from '@app/components/molecules';
import Link from 'next/link';
import Timeline from '@app/components/atoms/timeline';
import {PageTransition} from '@app/components/organisms/page-transition';
import {ScrollReveal} from '@app/components/organisms/scroll-reveal';

const generateMetadata = async (): Promise<Metadata> => {
	const homeResult = await getHomeData();

	if (isError(homeResult)) {
		return toNextMetadata([]);
	}

	const seoTitleFavicon = [
		...homeResult.data._seoMetaTags,
		...homeResult.data._site,
	] as SeoOrFaviconTag[] | TitleMetaLinkTag[];

	return toNextMetadata(seoTitleFavicon);
};

const Home: FC = async (): Promise<React.ReactElement> => {
	const result = await getHomeData();

	if (isError(result)) {
		return notFound();
	}
	const {data: {projects, blogs, roles, technologies, available, portrait}} = result;

	return (
		<PageTransition>
			<div className="lg:hidden max-w-sm mx-auto">
				<ProfileInfo
					isAvailable={available}
					portrait={portrait}
					stack={technologies.map(tech => ({label: tech.name}))}
				/>
			</div>
			<div className="mt-16 lg:mt-0">
				<h2 className="heading-two">My Work</h2>
				<p className="mt-2 max-w-2xl">From landing pages to full-stack apps, these projects show how I help businesses and teams build fast, reliable, and scalable web solutions.</p>
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
				<div className="flex justify-center mt-8">
					<Button asChild>
						<Link href="/projects">
							Explore projects
						</Link>
					</Button>
				</div>
			</div>
			<div className="mt-16">
				<h2 className="heading-two">Blog posts</h2>
				<p className="mt-2 max-w-2xl">Practical insights on building for the web — written to help business owners and founders understand the tech, and developers think more like product people.</p>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
					{blogs.map(blog => (
						<ScrollReveal key={blog.id}>
							<li className="h-full flex">
								<CardBlog
									title={blog.title}
									synopsis={blog.synopsis}
									url={`/blogs/${blog.slug}`}
								/>
							</li>
						</ScrollReveal>
					))}
				</ul>
				<div className="flex justify-center mt-8">
					<Button asChild>
						<Link href="/blogs">
							View more
						</Link>
					</Button>
				</div>
			</div>
			<div className="mt-16">
				<h2 className="heading-two" id="about">About</h2>
				<p className="mt-2 max-w-2xl">The journey behind the work: every role and project has deepened my ability to deliver results for teams and businesses. Here&apos;s how my experience has taken shape.</p>
				<div className="mt-8">
					<Timeline
						logs={roles.map(role => ({...role, title: role.name, subtitle: role.company}))}
					/>
				</div>
			</div>
			<div className="mt-16">
				<Footer
					heading="Let's build something"
					content="Feel free to reach out for collaborations or just a chat!"
					actionLabel="Get in touch"
				/>
			</div>
		</PageTransition>
	);
};

export default Home;

export {
	generateMetadata,
};
