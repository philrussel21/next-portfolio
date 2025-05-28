import {Socials, Tag, Text} from "@app/components/atoms";
import {Button} from "@app/components/ui/button";
import Link from "next/link";

type RootLayoutProperties = {
	children: React.ReactNode;
};

const RootLayout = ({children}: RootLayoutProperties): JSX.Element => (
	<div>
		<div className='fixed inset-0 w-full h-full z-[-1] bg-black'>
			<div className="bg-gradient-home bg-[length:10px_10px] absolute inset-0 w-full h-full"></div>
		</div>
		<aside className='fixed left-0 top-0 h-screen w-80 bg-zinc-900 text-zinc-100 p-8 flex flex-col border-r border-zinc-800 [box-shadow:0_-20px_80px_-40px_#ffffff3f_inset,0_0_20px_-5px_rgba(255,255,255,0.1)]'>
			<div className='flex flex-col items-center justify-center'>
				<div className="bg-gray-100 rounded-full size-40" />
				<h1 className='mt-4 heading-five !font-bold'>Phil Antiporda</h1>
				<Text size="small" className='text-center mt-2 text-zinc-200' content='Building fast, thoughtful websites with real-world impact.' />
			</div>
			<div className='mt-6 flex justify-center'>
				<span className="flex items-center gap-4 bg-zinc-800/50 px-4 py-2 rounded-full justify-center">
					<span className="relative flex h-3 w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
					</span>
					<span className="text-sm text-white">
						Available Now
					</span>
				</span>
			</div>
			<div className="mt-6 flex justify-center">
				<Button asChild>
					<Link href={"/contact"}>
						Get in touch
					</Link>
				</Button>
			</div>
			<div className='mt-20'>
				<Socials />
			</div>
			{/* TODO: Source from dato */}
			<div className='mt-6 border-t border-zinc-800 pt-6'>
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
		</aside>
		<div className="py-12 pl-80 flex-1 container">
			{children}
		</div>
	</div>
);

export default RootLayout;

export type {
	RootLayoutProperties as RootLayoutProps,
};