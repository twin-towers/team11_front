import { useStore } from '@nanostores/react';

import { Congrats } from '../../components/Congrats/Congrats';
import { MemoryToolbar } from '../../components/MemoryToolbar/MemoryToolbar';
import { $isFinished } from '../../stores/memory';
import { GameBoard } from './../../components/GameBoard/GameBoard';
import style from './style.module.css';

export function MemoryGame() {
	const isFinished = useStore($isFinished);
	console.log(isFinished);
	return (
		<main className={style.host}>
			{isFinished ? (
				<Congrats />

			) : (
				<>
					<MemoryToolbar />
					<GameBoard />
				</>
			)}
		</main>
	);
}
