import {Text} from "@app/components/atoms";
import {Button} from "@app/components/ui/button";
import Link from "next/link";

type ProjectsPageProperties = {

};

const ProjectsPage = ({ }: ProjectsPageProperties): JSX.Element => (
	<div className="container">
		<div>
			<Button asChild variant={"link"}>
				<Link href={"/"}>
					Back to Home
				</Link>
			</Button>
		</div>
		<div className="space-y-16 mt-6">
			<div>
				<h2 className="heading-two">All projects</h2>
				<Text content="Lorem Ipsum" />
			</div>
		</div>
	</div>
);

export default ProjectsPage;

export type {
	ProjectsPageProperties as ProjectsPageProps,
};