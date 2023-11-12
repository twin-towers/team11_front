import { useStore } from '@nanostores/react';
import clsx from 'clsx';

import { $boardData, select } from '../../stores/memory';
import style from './style.module.css';

export function GameBoard() {
	const board = useStore($boardData);
	return (
		<menu className={style.list}>
			{board.map((row, index) => (
				<Dice index={index} key={`${row.id}-${index}`} {...row} />
			))}
		</menu>
	);
}

type BoardItem = ReturnType<typeof $boardData.get>[number];
type DiceProps = BoardItem & {
	index: number;
};
function Dice({ id, index, isErrored, isFounded, isSelected }: DiceProps) {
	const shouldHaveClick = !isSelected && !isFounded;
	const clickHandler = shouldHaveClick ? () => select(index) : undefined;
	return (
		<li className={style.item}>
			<button
				aria-invalid={isErrored}
				aria-pressed={isSelected}
				className={clsx(style.dice, {
					[style.error]: isErrored,
					[style.found]: isFounded,
					[style.select]: isSelected,
				})}
				disabled={!shouldHaveClick}
				onClick={clickHandler}
			>
				{id}
			</button>
		</li>
	);
}
