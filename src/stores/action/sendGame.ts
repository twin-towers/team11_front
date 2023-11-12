import toast from 'react-hot-toast';

import { api } from '../../service/api';
import { MemoryDifficulty, type MemoryRequest } from '../../types/memory';
import { $isAuth } from '../auth';
import { $isFinished, $timeEnd } from '../memory';
import { $moves } from '../memory/memory';

$isFinished.listen(async (isFinished) => {
	if (isFinished && $isAuth.get()) {
		const body: MemoryRequest = {
			difficulty: MemoryDifficulty.Easy,
			moves: $moves.get(),
			time: $timeEnd.get() || undefined,
		};

		toast.promise(
			api({
				body,
				method: 'POST',
				url: '/memory',
			}),
			{
				error: 'Something went wrong during saving!',
				loading: 'Saving result...',
				success: 'Your result was saved in the Database!',
			},
		);
	}
});
