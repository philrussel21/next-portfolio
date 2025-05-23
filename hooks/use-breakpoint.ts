import {create as createBreakpointHooks} from '@kodingdotninja/use-tailwind-breakpoint';
import {screens} from '@app/config';

export const {
	useBreakpoint,
	useBreakpointValue,
	useBreakpointEffect,
} = createBreakpointHooks(screens);
