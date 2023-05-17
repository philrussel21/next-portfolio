type SnippetProperties = {
  heading: string;
  content: string;
};

const Snippet = ({ heading, content }: SnippetProperties): JSX.Element => (
  <article className="bg-blue-500 rounded-3xl p-8">
    <h2>{heading}</h2>
    <p className="mt-6">{content}</p>
  </article>
);

export default Snippet;

export type { SnippetProperties as SnippetProps };
