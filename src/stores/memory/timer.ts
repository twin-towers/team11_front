import { action, atom } from 'nanostores';

const $start = atom<Date | null>(null);

const startTimer = action($start, 'startTimer', (state) => {
	if (state.get() === null) {
		state.set(new Date());
	}

	return state.get();
});

const clearStart = action($start, 'stopTimer', (state) => {
	const start = state.get();

	if (start !== null) {
		const time = new Date().getTime() - start.getTime();
		state.set(null);
		return time;
	}

	return NaN;
});

export { $start, clearStart, startTimer };
