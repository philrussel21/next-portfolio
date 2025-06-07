'use client';

import type React from 'react';

import {motion, AnimatePresence} from 'framer-motion';
import {usePathname} from 'next/navigation';

export const PageTransition = ({children}: { children: React.ReactNode }): JSX.Element => {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				exit={{opacity: 0, y: -20}}
				transition={{duration: 0.3, ease: 'easeInOut'}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};
