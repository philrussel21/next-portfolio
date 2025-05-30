
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
	<ol className="relative border-s-4 border-zinc-400 dark:border-zinc-700">
		{logs.map(({dateRange, title, subtitle, description}) => (
			<li key={dateRange} className="mb-10 ms-6">
				<div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-2 border border-white dark:border-zinc-900 dark:bg-white" />
				<time className="font-semibold leading-none">{dateRange}</time>
				<div className="dark:bg-zinc-900 bg-zinc-50 rounded-xl p-6 shadow-time-slot mt-2 max-w-3xl drop-shadow-lg">
					<h3 className="heading-five text-black dark:text-white">{title}</h3>
					<h4>{subtitle}</h4>
					<p className="text-sm mt-2">{description}</p>
				</div>
			</li>
		))}
	</ol>


);

export default Timeline;

export type {
	TimelineProperties as TimelineProps,
};