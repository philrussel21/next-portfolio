import {type FC, type PropsWithChildren, Fragment} from 'react';
import {type VariantProps} from 'tailwind-variants';
import {tv} from 'tailwind-variants';

const section = tv({
	variants: {
		background: {
			/**
			 * Ensure when updating these that the correspondig sibling,
			 * selector rules in 'app/[locale]/global.css' are updated.
			 */
			celeste: 'bg-brand-celeste',
			fortressGrey: 'bg-brand-fortress-grey',
			lightOrange: 'bg-brand-light-orange',
			lightSeaGreen: 'bg-brand-light-sea-green',
			transparent: '',
			whisper: 'bg-brand-whisper',
			white: 'bg-white',
		},
		inline: {
			false: 'py-16 xl:py-28 first-of-type:mt-16 xl:first-of-type:mt-28',
			true: '',
		},
		hideOverflow: {
			false: '',
			true: 'overflow-hidden',
		},
	},
	compoundVariants: [
		{
			class: 'first-of-type:mt-0 xl:first-of-type:mt-0',
			background: 'transparent',
			inline: false,
		},
	],
	defaultVariants: {
		background: 'white',
		inline: false,
		hideOverflow: false,
	},
});

type SectionVariants = VariantProps<typeof section>;

type SectionProps = PropsWithChildren & SectionVariants & {
	hasContainer?: boolean;
	className?: string;
	id?: string;
};

const Section: FC<SectionProps> = ({background, children, hasContainer = true, hideOverflow, className, id}) => {
	const renderChildren = (): JSX.Element => {
		if (!hasContainer) {
			return <Fragment>{children}</Fragment>;
		}

		return (
			<div className="container">
				{children}
			</div>
		);
	};

	return (
		<section id={id} className={section({background, inline: false, hideOverflow, className})} data-background={background}>
			{renderChildren()}
		</section>
	);
};

const InlineSection: FC<Omit<SectionProps, 'hasContainer'>> = ({background, hideOverflow, children, className, id}) => (
	<div id={id} className={section({background, inline: true, hideOverflow, className})}>
		{children}
	</div>
);

export default Section;

export {
	InlineSection,
};

export type {
	SectionVariants,
	SectionProps,
};
