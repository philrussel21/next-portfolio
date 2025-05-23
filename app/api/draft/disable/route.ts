import {draftMode} from 'next/headers';
import {redirect} from 'next/navigation';

const GET = (): Response => {
	draftMode().disable();
	redirect('/');
};

export {
	GET,
};
