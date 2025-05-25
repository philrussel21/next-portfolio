
type TimelineLog = {
	dateRange: string;
	title: string;
	subtitle: string;
	description: string;
}

type TimelineProperties = {
	logs: TimelineLog[];
};

const Timeline = ({logs}: TimelineProperties): JSX.Element => (
	<ol className="relative border-s border-zince-200 dark:border-zinc-700">
		{logs.map(({dateRange, title, subtitle, description}) => (
			<li key={dateRange} className="mb-10 ms-6">
				<div className="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-zinc-900 dark:bg-zinc-700" />
				<time className="font-semibold leading-none text-zinc-200 dark:text-zinc-500">{dateRange}</time>
				<div className="bg-zinc-900 rounded-xl p-6 shadow-xl shadow-time-slot mt-2 max-w-3xl">
					<h3 className="heading-five text-white dark:text-white">{title}</h3>
					<h4 className="text-zinc-200 dark:text-zinc-400">{subtitle}</h4>
					<p className="text-sm text-zinc-200 dark:text-zinc-400 mt-2">{description}</p>
				</div>
			</li>
		))}
	</ol>


);

export default Timeline;

export type {
	TimelineProperties as TimelineProps,
};