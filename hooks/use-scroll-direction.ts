'use client';

import {useEffect, useRef, useState} from 'react';

type SrollDirection = 'down' | 'up';

const useScrollDirection = (scrollThreshold = 0): SrollDirection => {
	const [scrollDirection, setScrollDirection] = useState<SrollDirection>('up');
	const isBlocking = useRef(false);
	const prevScrollY = useRef(0);

	useEffect(() => {
		prevScrollY.current = window.scrollY;
		const updateScrollDirection = (): void => {
			const currScrollY = window.scrollY;

			if (Math.abs(currScrollY - prevScrollY.current) >= scrollThreshold) {
				setScrollDirection(currScrollY > prevScrollY.current ? 'down' : 'up');
				prevScrollY.current = currScrollY > 0 ? currScrollY : 0;
			}

			isBlocking.current = false;
		};

		const onScroll = (): void => {
			if (!isBlocking.current) {
				isBlocking.current = true;
				window.requestAnimationFrame(updateScrollDirection);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			 window.removeEventListener('scroll', onScroll);
		};
	}, [scrollThreshold, scrollDirection]);

	return scrollDirection;
};

export default useScrollDirection;
