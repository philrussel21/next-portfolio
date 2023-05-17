import { ResponsiveImageType } from "react-datocms/image";
import { DTO } from "../dto";
import generateResponsiveImageFields from "../responsive-image";

type ProjectCardDTO = DTO & {
  title: string;
  summary: string;
  image: ResponsiveImageType;
  link: string;
  sourceLink: string;
}

type ProjectCardQuery = {
  id: string;
  title: string;
  summary: string;
  image: {
    root: ResponsiveImageType
  };
  link: string;
  repositoryLink: string;
}

const fields = `
  id
  title
  summary
  image {
    ${generateResponsiveImageFields('root', {width: 600, aspectRatio: 'film', fit: 'clamp'})}
  }
  link
  repositoryLink
`;

const formatData = (data: ProjectCardQuery): ProjectCardDTO => ({
  id: data.id,
  type: 'projectCard',
  title: data.title,
  summary: data.summary,
  image: data.image.root,
  link: data.link,
  sourceLink: data.repositoryLink
});

export {
  fields,
  formatData
};

export type {
  ProjectCardDTO,
  ProjectCardQuery,
}