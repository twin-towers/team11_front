import { computed } from 'nanostores';

import { $erroredIds } from './error';
import { $board, $founded, $selected } from './memory';
import { $start, stopTimer } from './timer';

const $boardData = computed([$board, $founded, $erroredIds, $selected], (board, founded, errored, selected) =>
	board.map((id, index) => ({
		id,
		isErrored: errored.includes(index),
		isFounded: founded.includes(id),
		isSelected: selected.includes(index),
	})),
);

const $isFinished = computed([$founded, $board], (founded, board) => founded.length === board.length / 2);

const $timeEnd = computed([$isFinished, $start], (isFinished) => isFinished && stopTimer());

export { $boardData, $isFinished, $timeEnd };
