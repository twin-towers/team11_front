import { useStore } from '@nanostores/react';

import { $isFinished } from '../../stores/memory';
import { GameBoard } from './../../components/GameBoard/GameBoard';
import { MemoryToolbar } from '../../components/MemoryToolbar/MemoryToolbar';

export function MemoryGame() {
	const isFinished = useStore($isFinished);

	return (
		<main>
			<MemoryToolbar />
			<GameBoard />

			{isFinished && <p>You win 🏆</p>}
		</main>
	);
}
