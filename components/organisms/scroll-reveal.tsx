'use client';

import type React from 'react';

import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: 'down' | 'left' | 'right' | 'up';
};

export const ScrollReveal = ({children, delay = 0, direction = 'up'}: ScrollRevealProps): JSX.Element => {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true, margin: '-100px'});

	const variants = {
		hidden: {
			opacity: 0,
			y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
			x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			variants={variants}
			transition={{duration: 0.6, delay, ease: 'easeOut'}}
		>
			{children}
		</motion.div>
	);
};
