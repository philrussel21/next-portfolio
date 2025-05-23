import {draftMode} from 'next/headers';
import {redirect} from 'next/navigation';

const GET = (request: Request): Response | void => {
	const {searchParams} = new URL(request.url);
	const secret = searchParams.get('secret');
	const slug = searchParams.get('slug');

	if (secret !== process.env.DRAFT_MODE_TOKEN || slug === null) {
		return new Response('Invalid request', {status: 401});
	}

	draftMode().enable();
	redirect(slug);
};

export {
	GET,
};
