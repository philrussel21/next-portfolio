import {ResponsiveImage} from "@app/data/shared";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card";

type CardBlogProperties = {
	image: ResponsiveImage;
	title: string;
	synopsis: string;
	url: string;
};

const CardProject = ({ }: CardBlogProperties): JSX.Element => (
	<Card>
		<CardHeader>
			<CardTitle>Card Title</CardTitle>
		</CardHeader>
		<CardContent>
			<CardDescription>Card Description</CardDescription>
		</CardContent>
		<CardFooter>
			<p>Card Footer</p>
		</CardFooter>
	</Card>
);

export default CardProject;

export type {
	CardBlogProperties as CardBlogProps,
};