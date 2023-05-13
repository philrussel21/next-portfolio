import { ResponsiveImageType } from "react-datocms/image";

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
  <article className="bg-red-500 min-h-[384px] rounded-3xl">
    <h3>{title}</h3>
    <p>{summary}</p>
  </article>
);

export default ProjectCard;

export type { ProjectCardProperties as ProjectCardProps };
