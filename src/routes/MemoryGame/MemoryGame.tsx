import { useStore } from '@nanostores/react';

import { MemoryToolbar } from '../../components/MemoryToolbar/MemoryToolbar';
import { $isFinished } from '../../stores/memory';
import { GameBoard } from './../../components/GameBoard/GameBoard';
import style from './style.module.css';

export function MemoryGame() {
	const isFinished = useStore($isFinished);

	return (
		<main className={style.host}>
			<MemoryToolbar />
			<GameBoard />

			{isFinished && <p>You win 🏆</p>}
		</main>
	);
}
