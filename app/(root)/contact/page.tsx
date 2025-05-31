import {ContactForm} from '@app/components/organisms';
import {Button} from '@app/components/ui/button';
import {ArrowLeftIcon} from '@phosphor-icons/react/dist/ssr';
import type {Metadata} from 'next';
import Link from 'next/link';

const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Get in touch for any inquiries or support.',
};

const ContactPage = (): JSX.Element => (
	<div>
		<div>
			<Button asChild variant="link">
				<Link href="/">
					<ArrowLeftIcon className="w-4 h-4"/>
					<span>Back to Home</span>
				</Link>
			</Button>
		</div>
		<div className="mt-12 lg:mt-16">
			<ContactForm/>
		</div>
	</div>
);

export default ContactPage;

export {
	metadata,
};