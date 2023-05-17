/* eslint-disable jsx-a11y/alt-text */
import { Image, ResponsiveImageType } from "react-datocms/image";

type ProjectCardProperties = {
  image: ResponsiveImageType;
  title: string;
  summary: string;
  link: string;
  sourceLink: string;
};

const ProjectCard = ({
  image,
  title,
  summary,
  link,
  sourceLink,
}: ProjectCardProperties): JSX.Element => (
  <article className="bg-red-500 rounded-3xl p-8 overflow-hidden">
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
    <Image className="mt-8 translate-x-14 translate-y-8" data={image} />
  </article>
);

export default ProjectCard;

export type { ProjectCardProperties as ProjectCardProps };
