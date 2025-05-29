import {Socials, Tag, Text} from "@app/components/atoms";
import {ProfileInfo} from "@app/components/molecules";
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
		<aside className='hidden lg:block fixed left-0 top-0 h-screen w-80 bg-zinc-900 text-zinc-100 p-8 border-r border-zinc-800 shadow-profile'>
			<ProfileInfo
				isAvailable
				stack={[
					{
						label: 'React'
					},
					{
						label: 'Nextjs'
					},
					{
						label: 'TypeScript'
					},
				]}
			/>
		</aside>
		<div className="pb-36 pt-12 lg:pb-12 lg:pl-80 flex-1 container">
			{children}
		</div>
	</div>
);

export default RootLayout;

export type {
	RootLayoutProperties as RootLayoutProps,
};