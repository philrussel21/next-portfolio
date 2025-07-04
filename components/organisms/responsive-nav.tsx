'use client';

import Link from 'next/link';
import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle} from '../ui/navigation-menu';
import {BriefcaseIcon, EnvelopeIcon, HouseSimpleIcon, PencilIcon} from '@phosphor-icons/react/dist/ssr';
import {Fragment} from 'react';

const mobileNavItems = [
	{title: 'Home', href: '/', icon: HouseSimpleIcon},
	{title: 'Projects', href: '/projects', icon: BriefcaseIcon},
	{title: 'Blogs', href: '/blogs', icon: PencilIcon},
	{title: 'Contact', href: '/contact', icon: EnvelopeIcon},
];

const ResponsiveNav = (): JSX.Element => {
	return (
		<Fragment>
			<NavigationMenu orientation="vertical" className="hidden md:block fixed bottom-8 right-8 z-50">
				<NavigationMenuList className="block">
					{mobileNavItems.map(item => {
						const IconComponent = item.icon;

						return (
							<NavigationMenuItem key={item.title}>
								<Link legacyBehavior passHref href={item.href}>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<IconComponent className="h-6 w-6"/>
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						);
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
								className="flex flex-col items-center gap-1 p-2 rounded-lg transition-colors min-w-0"
							>
								<IconComponent className="h-5 w-5 text-black dark:text-white"/>
								<span className="text-xs">{item.title}</span>
							</Link>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default ResponsiveNav;
