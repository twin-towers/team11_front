import { action, atom } from 'nanostores';

import { createGameInitial } from '../../utils';
import { $erroredIds, clearError } from './error';
import { startTimer } from './timer';

type Option = number;
type Index = number;

const $board = atom<Option[]>(createGameInitial());
const $founded = atom<Option[]>([]);
const $selected = atom<Index[]>([]);

const $moves = atom<number>(0);

const addFound = action($founded, 'addFound', (state, option: Option) => {
	$founded.set([...state.get(), option]);
});

const select = action($selected, 'select', (state, option: Index) => {
	startTimer();
	clearError();
	const current = state.get();

	return current.length === 2 ? current : state.set([...current, option]);
});

const clearSelected = action($selected, 'clearSelected', (state) => state.set([]));

const checkSelected = ([first, second]: [Index, Index]) => {
	const board = $board.get();

	const isSame = board[first] === board[second];
	isSame ? addFound(board[first]) : $erroredIds.set([first, second]);

	$moves.set($moves.get() + 1);
	clearSelected();
};

const shouldCheckSelected = (selected: readonly Index[]): selected is [Index, Index] => selected.length === 2;

$board.subscribe(() => {
	clearSelected();
	$founded.set([]);
	$selected.set([]);
	$moves.set(0);
});

const resetGame = () => $board.set(createGameInitial());

$selected.subscribe((selected) => shouldCheckSelected(selected) && checkSelected(selected));

export { $board, $founded, $moves, $selected, resetGame, select };
