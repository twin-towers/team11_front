const enum RandomResult {
	Less = -1,
	Equal,
	More,
}

const getRandomInteger = (min: number = 0, max: number = 100) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Use for random sorting
 */
const randomSort = () => getRandomInteger(RandomResult.Less, RandomResult.More) as RandomResult;

export { getRandomInteger, randomSort };
