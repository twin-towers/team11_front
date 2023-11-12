import { GameBoard } from './../../components/GameBoard/GameBoard';
import { useStore } from "@nanostores/react";

import { $isFinished } from "../../stores/memory";


export function MemoryGame() {

	const isFinished = useStore($isFinished)

	return (
		<main>

			<GameBoard  />

			{isFinished && <p>
				You win 🏆
				</p>}

		</main>
	)
}
