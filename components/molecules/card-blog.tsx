import Link from "next/link";
import {Button} from "../ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card";

type CardBlogProperties = {
	title: string;
	synopsis: string;
	url: string;
};

const CardProject = ({title, synopsis, url}: CardBlogProperties): JSX.Element => (
	<Card>
		<CardHeader>
			<CardTitle>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<CardDescription>{synopsis}</CardDescription>
		</CardContent>
		<CardFooter className="justify-end pb-2 px-2">
			<Link href={url}>
				<Button
					variant="link"
					size="sm"
				>
					Read more
				</Button>
			</Link>
		</CardFooter>
	</Card>
);

export default CardProject;

export type {
	CardBlogProperties as CardBlogProps,
};