import Link from 'next/link';
import {Button} from '../ui/button';
import {Text} from '../atoms';

type FooterProperties = {
	heading: string;
	content: string;
	actionLabel: string;
};

const Footer = ({heading, content, actionLabel}: FooterProperties): JSX.Element => (
	<footer className="text-center border-t border-zinc-800 pt-12 container mx-auto">
		<h2 className="heading-two">{heading}</h2>
		<Text className="mt-2" content={content}/>
		<div className="mt-8">
			<Button asChild>
				<Link href="/contact">
					{actionLabel}
				</Link>
			</Button>
		</div>
	</footer>
);

export default Footer;

export type {
	FooterProperties as FooterProps,
};