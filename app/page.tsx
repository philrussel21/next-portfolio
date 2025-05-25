import type {FC} from 'react';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {toNextMetadata} from 'react-datocms';
import getHomeData from '@app/data/home';
import {isError} from '@app/lib';
import {Text} from '@app/components/atoms';
import {EnvelopeIcon} from '@phosphor-icons/react/ssr';
import Tag from '@app/components/atoms/tag';
import {Button} from '@app/components/ui/button';
import {CardProject, CardBlog} from '@app/components/molecules';

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
		<div>
			<aside className='fixed left-0 top-0 h-screen w-80 bg-zinc-900 text-zinc-100 p-8 flex flex-col border-r border-zinc-800 [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]'>
				<div className='flex flex-col items-center justify-center'>
					<div className="bg-gray-100 rounded-full size-40" />
					<h1 className='mt-4 heading-five !font-bold'>Phil Antiporda</h1>
					<Text size="small" className='text-center mt-2 text-zinc-200' content='Lorem ipsum text' />
				</div>
				<div className='mt-6 flex justify-center'>
					<span className="flex items-center gap-4 bg-zinc-800/50 px-4 py-2 rounded-full justify-center">
						{/* TODO: Source from dato */}
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
						</span>
						<span className="text-sm text-zinc-400">
							Offline
						</span>
					</span>
				</div>
				<div className="mt-6 flex justify-center">
					<Button variant="secondary">
						<EnvelopeIcon className="size-6" />
						<span>
							Email
						</span>
					</Button>
				</div>
				{/* TODO: Source from dato */}
				<div className='mt-6 border-t border-zinc-800 pt-4 '>
					<h2 className='heading-four'>Tech Stack</h2>
					<ul className='flex gap-2 mt-2'>
						<li>
							<Tag label="React" />
						</li>
						<li>
							<Tag label="Next.js" />
						</li>
						<li>
							<Tag label="TypeScript" />
						</li>
					</ul>
				</div>
				<div className="mt-auto">
					socials here
				</div>
			</aside>
			<div className='py-12 pl-80 flex-1'>
				<div className='container space-y-16'>
					<div>
						<h2 className='heading-two'>My Work</h2>
						<p className='text-zinc-200 mt-2'>Lorem ipsum</p>
						{/* TODO: Source from dato */}
						<ul className='grid grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-14 mt-8'>
							<li>
								<CardProject
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
					</div>
					<div>
						<h2 className='heading-two'>Blog posts</h2>
						<p className='text-zince-200 mt-2'>Lorem ipsum</p>
						{/* TODO: Source from dato */}
						<ul className='grid grid-cols-3 gap-6 mt-8'>
							<li>
								<CardBlog
									title="Blog Post Title"
									synopsis="Blog Post Description"
									url="/blog/some-blog-post"
								/>
							</li>
							<li>
								<CardBlog
									title="Blog Post Title"
									synopsis="Blog Post Description"
									url="/blog/some-blog-post"
								/>
							</li>
							<li>
								<CardBlog
									title="Blog Post Title"
									synopsis="Blog Post Description"
									url="/blog/some-blog-post"
								/>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='heading-two'>About</h2>
						<p className='text-zinc-200 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec enim fermentum aliquet. Sed at felis vel lorem facilisis facilisis.</p>
						<div>
							Work Experience
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

export {
	generateMetadata,
};
