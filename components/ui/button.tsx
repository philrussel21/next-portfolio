import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@app/lib/utils"

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
	{
		variants: {
			variant: {
				default: "bg-zinc-100 text-zinc-900 hover:text-white hover:bg-zinc-950/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 no-underline px-4 py-2",
				link: "text-zinc-100 underline-offset-4 hover:underline dark:text-zinc-50",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({className, variant, asChild = false, ...props}, ref) => {
		const Comp = asChild ? Slot : "button"
		return (
			<Comp
				className={cn(buttonVariants({variant, className}))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = "Button"

export {Button, buttonVariants}
