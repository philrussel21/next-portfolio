import { DTO } from "../dto";

type ExperienceCardDTO = DTO & {
  role: string;
  duration: string;
  company: string;
  companyUrl: string;
  summary: string;
  tags: string[];
}

type ExperienceCardQuery = {
  id: string;
  role: string;
  duration: string;
  company: string;
  companyUrl: string;
  summary: string;
  tags: Array<{
    name: string;
  }>;
};

const fields = `
  id
  role
  duration
  company
  companyUrl
  summary
  tags {
    name
  }
`;

const formatData = (data: ExperienceCardQuery): ExperienceCardDTO => ({
  id: data.id,
  type: 'experienceCard',
  role: data.role,
  duration: data.duration,
  company: data.company,
  companyUrl: data.companyUrl,
  summary: data.summary,
  tags: data.tags.map(tag => tag.name),
});

export {
  fields,
  formatData
};

export type {
  ExperienceCardDTO,
  ExperienceCardQuery,
}