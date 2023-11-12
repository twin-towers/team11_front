import { useStore } from '@nanostores/react';

import { $isFinished } from '../../stores/memory';
import { GameBoard } from './../../components/GameBoard/GameBoard';

export function MemoryGame() {
	const isFinished = useStore($isFinished);

	return (
		<main>
			<GameBoard />

			{isFinished && <p>You win 🏆</p>}
		</main>
	);
}
