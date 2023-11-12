import { useStore } from '@nanostores/react';

import { $timeEnd } from '../../stores/memory';
import { $moves, resetGame } from '../../stores/memory/memory';
import { Button } from '../Button/Button';
import style from './Congrats.module.css';

export function Congrats() {
	const moves = useStore($moves);
	const seconds = useStore($timeEnd);
	const normalizedSeconds = seconds ? Math.round(seconds / 1000) : 0;

	return (
		<div className={style.congrats}>
			<h1>Congratulations!</h1>
			<p>
				You finished with {moves} moves and {normalizedSeconds} seconds.
			</p>
			<Button className={style.button} onClick={resetGame}>
				Play again
			</Button>
		</div>
	);
}
