"use client"

import Link from "next/link"
import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle} from "../ui/navigation-menu"
import {BriefcaseIcon, EnvelopeIcon, HouseSimpleIcon, NotePencilIcon} from "@phosphor-icons/react/dist/ssr"

const mobileNavItems = [
	{title: "Home", href: "/", icon: HouseSimpleIcon},
	{title: "Projects", href: "/projects", icon: BriefcaseIcon},
	{title: "Blogs", href: "/settings", icon: NotePencilIcon},
	{title: "Contact", href: "/contact", icon: EnvelopeIcon},
]

export function ResponsiveNav() {

	return (
		<>
			<NavigationMenu orientation="vertical" className="hidden md:block fixed bottom-8 right-8 z-50">
				<NavigationMenuList className="block">
					{mobileNavItems.map(item => {
						const IconComponent = item.icon;
						return (
							<NavigationMenuItem key={item.title}>
								<Link href={item.href} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<IconComponent className="h-5 w-5 text-zinc-800" />
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						)
					})}
				</NavigationMenuList>
			</NavigationMenu>
			<div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t z-40">
				<div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
					{mobileNavItems.map((item) => {
						const IconComponent = item.icon;
						return (
							<Link
								key={item.title}
								href={item.href}
								className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted transition-colors min-w-0"
							>
								<IconComponent className="h-5 w-5 text-muted-foreground" />
								<span className="text-xs text-muted-foreground truncate">{item.title}</span>
							</Link>
						)
					})}
				</div>
			</div>
		</>
	)
}
