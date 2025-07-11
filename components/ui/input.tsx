import * as React from 'react';

import {cn} from '@app/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
	({className, type, ...props}, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={cn(
					'flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
					className,
				)}
				{...props}
			/>
		);
	},
);
Input.displayName = 'Input';

export {Input};
