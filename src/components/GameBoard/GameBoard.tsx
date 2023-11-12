import { useStore } from '@nanostores/react';
import clsx from 'clsx';

import { $boardData, select } from '../../stores/memory';
import style from './style.module.css';

export function GameBoard() {
	const board = useStore($boardData);
	return (
		<ul className={style.list}>
			{board.map((row, rowIndex) => (
				<li
					className={clsx(style.item, {
						[style.error]: row.isErrored,
						[style.found]: row.isFounded,
						[style.select]: row.isSelected,
					})}
					key={`${row.id}-${rowIndex}`}
					onClick={() => select(rowIndex)}
				>
					{row.id}
				</li>
			))}
		</ul>
	);
}
