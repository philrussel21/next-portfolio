type ExperienceCardProperties = {
  duration: string;
  role: string;
  company: string;
  companyUrl: string;
  summary: string;
  tags: string[];
};

const ExperienceCard = ({
  duration,
  role,
  company,
  companyUrl,
  summary,
  tags,
}: ExperienceCardProperties): JSX.Element => (
  <section className="bg-white rounded-3xl">
    <a href={companyUrl} className="p-8 flex gap-4" target="_blank">
      <div className="grow">
        <p>{duration}</p>
      </div>
      <div className="grow-0">
        <p>{role}</p>
        <p>{company}</p>
        <p>{summary}</p>
        <div className="flex gap-4">
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
    </a>
  </section>
);

export default ExperienceCard;

export type { ExperienceCardProperties as ExperienceCardProps };
