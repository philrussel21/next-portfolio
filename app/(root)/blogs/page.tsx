import {Button} from "@app/components/ui/button";
import Link from "next/link";

type BlogsIndexProperties = {

};

const BlogsIndex = ({ }: BlogsIndexProperties): JSX.Element => (
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

export default BlogsIndex;

export type {
	BlogsIndexProperties as BlogsIndexProps,
};