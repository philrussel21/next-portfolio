type TagProperties = {
	label: string;
};

const Tag = ({label}: TagProperties): JSX.Element => (
	<span className="inline-flex items-center justify-center rounded-md dark:bg-zinc-800 bg-zinc-300 px-2 py-1 text-sm font-medium dark:text-zinc-400 text-zinc-600 drop-shadow">
		{label}
	</span>
);

export default Tag;

export type {
	TagProperties as TagProps,
};