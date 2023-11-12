import { useDroppable } from '@dnd-kit/core';
import { useStore } from '@nanostores/react';

import { $canvasItems } from '../../stores/active';
import style from './canvas.module.css';

export function Canvas() {
	const { setNodeRef } = useDroppable({
		id: 'canvas',
	});

	const active = useStore($canvasItems);
	return (
		<div className={style.body} ref={setNodeRef}>
			{active.map((item) => (
				<button
					key={item.id}
					style={{
						transform: `translate3d(${item.coordinates.x}px, ${item.coordinates.y}px, 0)`,
					}}
				>
					{item.body}
				</button>
			))}
		</div>
	);
}
