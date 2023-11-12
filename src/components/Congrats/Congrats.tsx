import { useStore } from '@nanostores/react';

import { $timeEnd } from '../../stores/memory';
import { $moves } from '../../stores/memory/memory';

export function Congrats() {
	const moves = useStore($moves);
	const seconds = useStore($timeEnd);
	const normalizedSeconds = seconds ? Math.round(seconds / 1000) : 0;

	return (
		<div>
			<h1>Congratulation!</h1>
			You finished with {moves} moves and {normalizedSeconds} seconds
		</div>
	);
}
