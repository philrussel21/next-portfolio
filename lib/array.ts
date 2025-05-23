const chunkArray = <T>(array: T[], size: number): T[][] => {
	const result: T[][] = [];

	for (let i = 0, j = array.length; i < j; i += size) {
		result.push(array.slice(i, i + size));
	}

	return result;
};

export {chunkArray};
