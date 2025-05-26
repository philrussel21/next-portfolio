import type {FC} from 'react';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {toNextMetadata} from 'react-datocms';
import getHomeData from '@app/data/home';
import {isError} from '@app/lib';
import {Button} from '@app/components/ui/button';
import {CardBlog, CardProject} from '@app/components/molecules';
import Link from 'next/link';
import Timeline from '@app/components/atoms/timeline';

const generateMetadata = async (): Promise<Metadata> => {
	const homeResult = await getHomeData();

	if (isError(homeResult)) {
		return toNextMetadata([]);
	}

	return toNextMetadata(homeResult.data._seoMetaTags);
};

const Home: FC = async (): Promise<React.ReactElement> => {
	const result = await getHomeData();

	if (isError(result)) {
		return notFound();
	}

	return (
		<div className='space-y-16'>
			<div>
				<h2 className='heading-two'>My Work</h2>
				<p className='text-zinc-200 mt-2 max-w-2xl'>From landing pages to full-stack apps, these projects show how I help businesses and teams build fast, reliable, and scalable web solutions.</p>
				{/* TODO: Source from dato */}
				<ul className='grid grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-14 mt-8'>
					<li>
						<CardProject
							slug="/test"
							image={{
								title: 'Placeholder Image',
								src: 'https://placehold.co/600x400',
								alt: 'Placeholder Image',
								width: 600,
								height: 400,
							}}
							title="Card Title"
							description="Card Description"
							tags={[{label: 'Tag1'}, {label: 'Tag2'}]}
							url="/some-url"
						/>
					</li>
					<li>
						<CardProject
							slug="/test"
							image={{
								title: 'Placeholder Image',
								src: 'https://placehold.co/600x400',
								alt: 'Placeholder Image',
								width: 600,
								height: 400,
							}}
							title="Card Title"
							description="Card Description"
							tags={[{label: 'Tag1'}, {label: 'Tag2'}]}
							url="/some-url"
						/>
					</li>
					<li>
						<CardProject
							slug="/test"
							image={{
								title: 'Placeholder Image',
								src: 'https://placehold.co/600x400',
								alt: 'Placeholder Image',
								width: 600,
								height: 400,
							}}
							title="Card Title"
							description="Card Description"
							tags={[{label: 'Tag1'}, {label: 'Tag2'}]}
							url="/some-url"
						/>
					</li>
					<li>
						<CardProject
							slug="/test"
							image={{
								title: 'Placeholder Image',
								src: 'https://placehold.co/600x400',
								alt: 'Placeholder Image',
								width: 600,
								height: 400,
							}}
							title="Card Title"
							description="Card Description"
							tags={[{label: 'Tag1'}, {label: 'Tag2'}]}
							url="/some-url"
						/>
					</li>
				</ul>
				<div className='flex justify-center mt-6'>
					<Button asChild>
						<Link href={'/projects'}>
							Explore projects
						</Link>
					</Button>
				</div>
			</div>
			<div>
				<h2 className='heading-two'>Blog posts</h2>
				<p className='text-zince-200 mt-2 max-w-2xl'>Practical insights on building for the web — written to help business owners and founders understand the tech, and developers think more like product people.</p>
				{/* TODO: Source from dato */}
				<ul className='grid grid-cols-3 gap-6 mt-8'>
					<li>
						<CardBlog
							title="Blog Post Title"
							synopsis="Blog Post Description"
							url="/blogs/some-blog-post"
						/>
					</li>
					<li>
						<CardBlog
							title="Blog Post Title"
							synopsis="Blog Post Description"
							url="/blogs/some-blog-post"
						/>
					</li>
					<li>
						<CardBlog
							title="Blog Post Title"
							synopsis="Blog Post Description"
							url="/blogs/some-blog-post"
						/>
					</li>
				</ul>
				<div className='flex justify-center mt-6'>
					<Button asChild>
						<Link href={'/blogs'}>
							View more
						</Link>
					</Button>
				</div>
			</div>
			<div>
				{/* TODO: Source from CMS */}
				<h2 className='heading-two'>About</h2>
				<p className='text-zinc-200 mt-2 max-w-2xl'>The journey behind the work: every role and project has deepened my ability to deliver results for teams and businesses. Here's how my experience has taken shape.</p>
				<div className='mt-8'>
					<Timeline
						logs={[
							{
								dateRange: '2021 - Present',
								title: 'Current Position',
								subtitle: 'Current Company',
								description: 'Working on various projects and enhancing skills.',
							},
							{
								dateRange: '2019 - 2021',
								title: 'Previous Position',
								subtitle: 'Previous Company',
								description: 'Gained experience in web development and design.',
							},
							{
								dateRange: '2017 - 2019',
								title: 'Internship',
								subtitle: 'Internship Company',
								description: 'Learned the basics of software development and teamwork.',
							},
						]}
					/>
				</div>
			</div>
			<div className='text-center border-t border-zinc-800 pt-8'>
				<h2 className='heading-two'>Let's build something</h2>
				<p className='text-zinc-200 mt-2'>Feel free to reach out for collaborations or just a chat!</p>
				<div className='mt-6'>
					<Button asChild>
						<Link href="/contact">
							Get in touch
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Home;

export {
	generateMetadata,
};
