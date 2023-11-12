const enum MemoryDifficulty {
	Easy, // 4x4 = 16
	Medium, // 4 x 5 = 20
	Hard, // 4 x 6 = 24
	VeryHard, // 5 x 6 = 30
}

// moves * 10 + time / 1000

// GET memory последние первые
type MemoryRecord = {
	difficulty: MemoryDifficulty;
	id: number;
	moves: number; // amount of moves
	time: number; // amount of milliseconds
	user: string; // user id
};

// response Array of MemoryRecord

// POST memory + токен
type MemoryRequest = {
	difficulty: MemoryDifficulty;
	moves: number; // amount of moves
	time: number; // amount of milliseconds
};

// фронт сохранить результат

// GET memory/:user все результаты

// response Array of MemoryRecord
export type { MemoryRecord, MemoryRequest };
export { MemoryDifficulty };
