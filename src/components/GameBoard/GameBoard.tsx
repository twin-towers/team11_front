import { useStore } from '@nanostores/react';
import clsx from 'clsx';

import { $boardData } from '../../stores/memory';
import { select } from '../../stores/memory/memory';
import style from './style.module.css';

export function GameBoard() {
	const board = useStore($boardData);
	return (
		<div className={style.container}>
			<menu className={style.list}>
				{board.map((row, index) => (
					<Dice index={index} key={`${row.id}-${index}`} {...row} />
				))}
			</menu>
		</div>
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
		<button
			aria-invalid={isErrored}
			aria-pressed={isSelected}
			className={clsx(style.item, {
				[style.error]: isErrored,
				[style.found]: isFounded,
				[style.select]: isSelected,
			})}
			disabled={!shouldHaveClick}
			onClick={clickHandler}
		>
			{/* <button
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
				
			</button> */}

			<img alt="icon" src={`../../../public/assets/GameIcons/icon${id}.svg`} />
		</button>
	);
}
