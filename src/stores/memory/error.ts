import { action, atom } from 'nanostores';

type Index = number;

const $erroredIds = atom<Index[]>([]);

const clearError = action($erroredIds, 'clearError', (state) => state.get().length && state.set([]));
const setErrorIds = action($erroredIds, 'setErrorIds', (state, ids: [Index, Index]) => state.set(ids));

export { $erroredIds, clearError, setErrorIds };
