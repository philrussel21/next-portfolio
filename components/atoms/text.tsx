import type {FC} from 'react';
import Markdown from 'react-markdown';
import gfm from 'remark-gfm';
import breaks from 'remark-breaks';
import type {VariantProps} from 'tailwind-variants';
import {tv} from 'tailwind-variants';

const text = tv({
	variants: {
		size: {
			large: 'markdown paragraph-large',
			medium: 'markdown paragraph-medium',
			regular: 'markdown paragraph-regular',
			small: 'markdown paragraph-small',
		},
		clampWidth: {
			true: 'max-w-[80ch] mx-auto',
		},
	},
	defaultVariants: {
		size: 'regular',
		clampWidth: false,
	},
});

type TextVariants = VariantProps<typeof text>;

type TextProps = TextVariants & {
	content: string;
	className?: string;
};

const Text: FC<TextProps> = ({content, size, clampWidth, className}): React.ReactElement => (
	<Markdown remarkPlugins={[gfm, breaks]} className={text({size, clampWidth, className})}>{content}</Markdown>
);

export default Text;

export type {
	TextProps,
};
