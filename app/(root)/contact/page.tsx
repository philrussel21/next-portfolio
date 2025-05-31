import {Button} from "@app/components/ui/button";
import {ArrowLeftIcon} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type ContactPageProperties = {

};

const ContactPage = ({ }: ContactPageProperties): JSX.Element => (
	<div>
		<div>
			<Button asChild variant={"link"}>
				<Link href={"/"}>
					<ArrowLeftIcon className="w-4 h-4" />
					<span>Back to Home</span>
				</Link>
			</Button>
		</div>
	</div>
);

export default ContactPage;

export type {
	ContactPageProperties as ContactPageProps,
};