"use client"

import {useTheme} from "next-themes"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import {MoonIcon, SunIcon} from "@phosphor-icons/react/dist/ssr"

const ModeToggle = () => {
	const {setTheme} = useTheme()

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<button className="hover:cursor-pointer px-2 group inline-flex h-10 w-max items-center justify-center rounded-md bg-white p-2 text-sm font-medium transition-colors hover:bg-black/80 hover:text-white focus:bg-zinc-100 focus:text-black focus:outline-none dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white dark:focus:bg-zinc-800 dark:focus:text-white dark:shadow-card drop-shadow-lg">
					<SunIcon className="h-6 w-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
					<MoonIcon className="absolute h-6 w-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
					<span className="sr-only">Toggle theme</span>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ModeToggle;