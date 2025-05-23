import type {FC} from 'react';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {toNextMetadata} from 'react-datocms';
import {Content} from '@app/components/organisms';
import getHomeData from '@app/data/home';
import {isError} from '@app/lib';

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
		<main>
			<Content data={result.data.content}/>
		</main>
	);
};

export default Home;

export {
	generateMetadata,
};
