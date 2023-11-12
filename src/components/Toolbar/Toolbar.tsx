import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useStore } from '@nanostores/react';

import { $tools } from '../../stores/tools';

export function Toolbar() {
	const toolbar = useStore($tools);

	const { setNodeRef } = useDroppable({
		id: 'toolbar',
	});

	return (
		<div ref={setNodeRef}>
			{toolbar.map((tool) => (
				<Item id={tool.id} key={tool.id}>
					{tool.body}
				</Item>
			))}
		</div>
	);
}

function Item({ children, id }: { children: string; id: string }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		data: { body: children, id },
		id,
	});

	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		}
		: undefined;

	return (
		<button ref={setNodeRef} {...attributes} {...listeners} style={style}>
			{children}
		</button>
	);
}
