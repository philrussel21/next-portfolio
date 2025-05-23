type Result<T, J = unknown> = {
	type: 'error';
	data?: J;
} | {
	type: 'success';
	data: T;
};

const isSuccess = <T, J>(result: Result<T, J> | null | undefined): result is {type: 'success'; data: T} => result?.type === 'success';

const isError = <T, J>(result: Result<T, J> | null | undefined): result is {type: 'error'} => result?.type === 'error';

export {
	isSuccess,
	isError,
};

export type {
	Result,
};
