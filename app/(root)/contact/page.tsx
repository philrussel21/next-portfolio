import {Button} from "@app/components/ui/button";
import Link from "next/link";

type ContactPageProperties = {

};

const ContactPage = ({ }: ContactPageProperties): JSX.Element => (
	<div>
		<div>
			<Button asChild variant={"link"}>
				<Link href={"/"}>
					Back to Home
				</Link>
			</Button>
		</div>
	</div>
);

export default ContactPage;

export type {
	ContactPageProperties as ContactPageProps,
};