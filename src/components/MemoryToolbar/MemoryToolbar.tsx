import { useStore } from '@nanostores/react';

import { $moves, resetGame } from '../../stores/memory/memory';
import { Button } from '../Button/Button';
import style from './style.module.css';

export function MemoryToolbar() {
	const moves = useStore($moves);
	return (
		<header className={style.toolbar}>
			{moves} Moves
			<Button onClick={resetGame}>🔄 Restart</Button>
		</header>
	);
}
