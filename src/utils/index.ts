import { MemoryDifficulty } from '../types/memory';
import { randomSort } from './random';

const createNumberArray = (length = 100, start = 0) => Array.from({ length }, (_, i) => start + i);

const allDiceOption = createNumberArray(15);

const createGameArray = <I>(options: I[]) => [...options, ...options].sort(randomSort);

const createGameInitial = (difficulty = MemoryDifficulty.Easy) => {
	switch (difficulty) {
		case MemoryDifficulty.VeryHard:
			return createGameArray(allDiceOption);
		default:
			return createGameArray(allDiceOption.slice(0, 8 + difficulty * 2));
	}
};

export { createGameInitial, createNumberArray };
