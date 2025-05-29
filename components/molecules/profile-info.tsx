import Link from "next/link";
import {Socials, Tag, TagProps, Text} from "../atoms";
import {Button} from "../ui/button";

type ProfileInfoProperties = {
	isAvailable: boolean;
	stack: TagProps[];
};

const ProfileInfo = ({isAvailable, stack}: ProfileInfoProperties): JSX.Element => (
	<div>
		<div className="p-8 bg-zinc-900 lg:bg-transparent rounded-lg lg:rounded-none shadow-profile lg:shadow-inherit">
			<div className='flex flex-col items-center justify-center'>
				<div className="bg-gray-100 rounded-full size-40" />
				<h1 className='mt-4 heading-five !font-bold'>Phil Antiporda</h1>
				<Text size="small" className='text-center mt-2 text-zinc-200 max-w-sm mx-auto' content='Building fast, thoughtful websites with real-world impact.' />
			</div>
			<div className='mt-6 flex justify-center'>
				<span className="flex items-center gap-4 bg-zinc-800/50 px-4 py-2 rounded-full justify-center">
					<span className="relative flex h-3 w-3">
						<span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isAvailable ? 'bg-green-400' : 'bg-red-400'}`} />
						<span className={`relative inline-flex rounded-full h-3 w-3 ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`} />
					</span>
					<span className="text-sm text-white">
						{isAvailable && (
							'Available Now'
						)}
						{!isAvailable && (
							'Offline'
						)}
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
		</div>
		<div className='mt-12 lg:mt-20'>
			<Socials />
		</div>
		<div className='mt-6 border-t border-zinc-800 pt-6'>
			<h2 className='heading-four text-center lg:text-left'>Tech Stack</h2>
			<ul className='flex gap-2 mt-4 flex-wrap'>
				{stack.map(({label}) => (
					<li key={label}>
						<Tag label={label} />
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default ProfileInfo;

export type {
	ProfileInfoProperties as ProfileInfoProps,
};