import { computed } from 'nanostores';

import { sendResult } from '../action/sendGame';
import { $isAuth } from '../auth';
import { $erroredIds } from './error';
import { $board, $founded, $selected } from './memory';
import { $start } from './timer';

const $boardData = computed([$board, $founded, $erroredIds, $selected], (board, founded, errored, selected) =>
	board.map((id, index) => ({
		id,
		isErrored: errored.includes(index),
		isFounded: founded.includes(id),
		isSelected: selected.includes(index),
	})),
);

const $isFinished = computed([$founded, $board], (founded, board) => founded.length === board.length / 2);

$isFinished.subscribe((isFinished) => isFinished && $isAuth.get() && sendResult());

const $timeEnd = computed([$isFinished, $start], (isFinished, start) => {
	if (isFinished && start !== null) {
		const time = new Date().getTime() - start.getTime();
		return time;
	}

	return NaN;
});

export { $boardData, $isFinished, $timeEnd };
