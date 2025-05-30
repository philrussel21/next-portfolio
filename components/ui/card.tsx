import * as React from "react"

import {cn} from "@app/lib/utils"

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
	<div
		ref={ref}
		className={cn(
			"dark:bg-neutral-950 bg-zinc-50 rounded-lg overflow-hidden dark:border dark:border-neutral-800 flex flex-col drop-shadow-lg",
			className
		)}
		{...props}
	/>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
		{...props}
	/>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
	<div
		ref={ref}
		className={cn(
			"heading-five !leading-none !tracking-tight",
			className
		)}
		{...props}
	/>
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
	<div
		ref={ref}
		className={cn("text-sm", className)}
		{...props}
	/>
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
	<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
	<div
		ref={ref}
		className={cn("p-6 pt-0", className)}
		{...props}
	/>
))
CardFooter.displayName = "CardFooter"

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}
