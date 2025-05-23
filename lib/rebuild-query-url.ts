import type {ReadonlyURLSearchParams} from 'next/navigation';

const rebuildQueryURL = (newParams: Record<string, string[] | number | string>, queryParams: ReadonlyURLSearchParams, pathname: string): string => {
	const params = new URLSearchParams(queryParams);

	for (const [key, value] of Object.entries(newParams)) {
		if (Array.isArray(value)) {
			params.delete(key);

			for (const item of value) params.append(key, item);
			continue;
		}

		params.set(key, String(value));
	}

	return `${pathname}?${params.toString()}`;
};

export default rebuildQueryURL;
