import {ResponsiveImage} from "@app/data/shared";
import Tag, {TagProps} from "../atoms/tag";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../ui/card";
import {Image} from "react-datocms";
import {ArrowSquareOutIcon} from "@phosphor-icons/react/dist/ssr";

type CardProjectProperties = {
	// TODO: Init slug for project detail page
	// slug: string;
	image: ResponsiveImage;
	title: string;
	description: string;
	tags: TagProps[];
	url: string;
};

const CardProject = ({image, title, description, tags, url}: CardProjectProperties): JSX.Element => (
	<Card className="relative group">
		<a href={url} aria-label={title} className="no-underline" target="_blank" referrerPolicy="no-referrer">
			<div className="absolute top-2 right-2 rounded-md p-1.5 z-10 bg-zinc-800 group-hover:bg-zinc-200 transition-colors">
				<ArrowSquareOutIcon size={16} className="text-white group-hover:text-zinc-800" />
			</div>
			<div className="relative">
				<Image data={image} className="!max-w-full" pictureClassName="object-cover" />
			</div>
			<div className="shadow-card h-full">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>{description}</CardDescription>
				</CardContent>
				<CardFooter>
					<ul className="flex gap-2 flex-wrap">
						{tags.map((tag => (
							<li key={tag.label}>
								<Tag label={tag.label} />
							</li>
						)))}
					</ul>
				</CardFooter>
			</div>
		</a>
	</Card>
);

export default CardProject;

export type {
	CardProjectProperties as CardProjectProps,
};