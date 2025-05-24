type TagProperties = {
	label: string;
};

const Tag = ({label}: TagProperties): JSX.Element => (
	<span className="inline-flex items-center justify-center rounded-md bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-300">
		{label}
	</span>
);

export default Tag;

export type {
	TagProperties as TagProps,
};