import {ResponsiveImage} from "@app/data/shared";
import Tag, {TagProps} from "../atoms/tag";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card";
import {Image} from "react-datocms";
import {ArrowSquareOutIcon} from "@phosphor-icons/react/dist/ssr";

type CardProjectProperties = {
	image: ResponsiveImage;
	title: string;
	description: string;
	tags: TagProps[];
	url: string;
};

const CardProject = ({image, title, description, tags, url}: CardProjectProperties): JSX.Element => (
	<Card className="relative group">
		<a href={url} aria-label={title} className="no-underline">
			<div className="absolute top-2 right-2 z-10 bg-zinc-800/80 p-1.5 rounded-full group-hover:bg-black transition-colors">
				<ArrowSquareOutIcon size={16} />
			</div>
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
				<CardFooter className="flex flex-wrap gap-2">
					{tags.map((tag => (
						<Tag key={tag.label} label={tag.label} />
					)))}
				</CardFooter>
			</div>
		</a>
	</Card>
);

export default CardProject;

export type {
	CardProjectProperties as CardProjectProps,
};