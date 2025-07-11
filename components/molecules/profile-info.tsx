import type {TagProps} from '../atoms';
import {Socials, Tag, Text, TrackableButton} from '../atoms';
import type {ResponsiveImage} from '@app/data/shared';
import {Image} from 'react-datocms';
// import {MapPinIcon} from '@phosphor-icons/react/dist/ssr';

type ProfileInfoProperties = {
	isAvailable: boolean;
	stack: TagProps[];
	portrait: ResponsiveImage;
};

const ProfileInfo = ({isAvailable, stack, portrait}: ProfileInfoProperties): JSX.Element => (
	<div>
		<div className="p-8">
			<div className="flex flex-col items-center justify-center">
				<div className="rounded-full size-40 overflow-hidden">
					<Image data={portrait} className="w-full h-full" pictureClassName="object-cover object-center"/>
				</div>
				<h1 className="mt-4 heading-five !font-bold">Phil Antiporda</h1>
				<Text size="small" className="text-center mt-2 max-w-sm mx-auto" content="Building fast, thoughtful websites with real-world impact."/>
			</div>
			<div className="mt-6 flex justify-center gap-2">
				{/* TODO: Uncomment to show location? */}
				{/* <div className="flex justify-center items-baseline gap-1">
					<MapPinIcon size={14}/>
					<p className="text-sm">Australia</p>
				</div> */}
				<span className="flex items-center gap-4 bg-zinc-800/50 px-4 py-2 rounded-full justify-center grow-0">
					<span className="relative flex h-3 w-3">
						<span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isAvailable ? 'bg-green-400' : 'bg-red-400'}`}/>
						<span className={`relative inline-flex rounded-full h-3 w-3 ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}/>
					</span>
					<span className="text-sm text-white">
						{isAvailable &&
							'Available Now'}
						{!isAvailable &&
							'Offline'}
					</span>
				</span>
			</div>
			<div className="mt-6 flex justify-center">
				<TrackableButton traceLabel="profile-info-contact" label="Get in touch" href="/contact"/>
			</div>
		</div>
		<div className="mt-12 lg:mt-20">
			<Socials/>
		</div>
		<div className="mt-6 border-t border-zinc-800 pt-6">
			<h2 className="heading-four text-center lg:text-left">Tech Stack</h2>
			<ul className="flex gap-2 mt-4 flex-wrap">
				{stack.map(({label}) => (
					<li key={label}>
						<Tag label={label}/>
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