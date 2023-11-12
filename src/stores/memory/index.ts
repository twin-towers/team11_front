import { computed } from "nanostores";

import { $erroredIds } from "./error";
import { $board, $founded, $selected } from "./memory";

const $boardData = computed([$board, $founded, $erroredIds, $selected], (board, founded, errored, selected) =>
	board.map((id, index) => ({
		id,
		isErrored: errored.includes(index),
		isFounded: founded.includes(id),
		isSelected: selected.includes(index),
	})),
);

const $isFinished = computed([$founded, $board], (founded, board) => founded.length === board.length / 2);

export { $boardData, $isFinished };
