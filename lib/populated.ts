const isPopulated = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined && value !== '';

export {
	isPopulated,
};
