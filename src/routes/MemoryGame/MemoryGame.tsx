import { useStore } from '@nanostores/react';

import { MemoryToolbar } from '../../components/MemoryToolbar/MemoryToolbar';
import { $isFinished } from '../../stores/memory';
import { GameBoard } from './../../components/GameBoard/GameBoard';

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
