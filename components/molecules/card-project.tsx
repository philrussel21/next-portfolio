import {ResponsiveImage} from "@app/data/shared";
import Tag, {TagProps} from "../atoms/tag";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card";
import {Image} from "react-datocms";
import {ArrowSquareOutIcon} from "@phosphor-icons/react/dist/ssr";
import {Button} from "../ui/button";
import Link from "next/link";

type CardProjectProperties = {
	slug: string;
	image: ResponsiveImage;
	title: string;
	description: string;
	tags: TagProps[];
	url: string;
};

const CardProject = ({slug, image, title, description, tags, url}: CardProjectProperties): JSX.Element => (
	<Card className="relative group">
		<div className="relative">
			<Image data={image} className="!max-w-full" pictureClassName="object-cover" />
		</div>
		<div className="shadow-card">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription>{description}</CardDescription>
			</CardContent>
			<CardFooter>
				<ul className="flex gap-2 ">
					{tags.map((tag => (
						<li key={tag.label}>
							<Tag label={tag.label} />
						</li>
					)))}
				</ul>
				<div className="flex justify-center mt-4 gap-4">
					<Button asChild>
						<Link href={`/projects/${slug}`}>
							Read More
						</Link>
					</Button>
					<Button asChild>
						<a href={url} aria-label={title} className="no-underline" target="_blank" referrerPolicy="no-referrer">
							<span>
								Visit site
							</span>
							<ArrowSquareOutIcon size={16} />
						</a>
					</Button>
				</div>
			</CardFooter>
		</div>
	</Card>
);

export default CardProject;

export type {
	CardProjectProperties as CardProjectProps,
};