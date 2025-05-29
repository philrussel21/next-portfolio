import {ProfileInfo} from "@app/components/molecules";
import getRootLayoutData from "@app/data/root-layout";
import {isError} from '@app/lib';
import {notFound} from "next/navigation";


type RootLayoutProperties = {
	children: React.ReactNode;
};

const RootLayout = async ({children}: RootLayoutProperties): Promise<JSX.Element> => {
	const result = await getRootLayoutData();

	if (isError(result)) {
		return notFound();
	}
	const {data: {technologies, available}} = result;
	return (
		<div>
			<div className='fixed inset-0 w-full h-full z-[-1] bg-black'>
				<div className="bg-gradient-home bg-[length:10px_10px] absolute inset-0 w-full h-full"></div>
			</div>
			<aside className='hidden lg:block fixed left-0 top-0 h-screen w-80 bg-zinc-900 text-zinc-100 p-8 border-r border-zinc-800 shadow-profile'>
				<ProfileInfo
					isAvailable={available}
					stack={technologies.map(tech => ({label: tech.name}))}
				/>
			</aside>
			<div className="pb-36 pt-12 lg:pb-12 lg:pl-80 flex-1">
				<div className="container">
					{children}
				</div>
			</div>
		</div>
	)
};

export default RootLayout;

export type {
	RootLayoutProperties as RootLayoutProps,
};