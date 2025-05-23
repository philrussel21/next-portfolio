type Nullable<T> = {
	[P in keyof T]: T[P] | null;
};

const isNullish = <T>(value: T | null | undefined): value is null | undefined => value === null || value === undefined;

export {
	isNullish,
};

export type {
	Nullable,
};
