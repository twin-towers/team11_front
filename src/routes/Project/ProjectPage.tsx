import type { DragEndEvent } from '@dnd-kit/core';

import { DndContext } from '@dnd-kit/core';

import { Canvas } from '../../components/ProjectCanvas/Canvas';
import { Toolbar } from '../../components/Toolbar/Toolbar';
import { addCanvasItem } from '../../stores/active';
import style from './project.module.css';

export function ProjectPage() {
	function handleDragEnd(evt: DragEndEvent) {
		if (evt.over?.id !== 'canvas') {
			return;
		}

		const parent = evt.over.rect;
		const next = evt.active.rect.current.translated;

		if (!next) return;

		addCanvasItem(evt.active.id as string, {
			x: next.left - parent.left,
			y: next.top - parent.top,
		});
	}

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div className={style.workspace}>
				<Toolbar />

				<Canvas />

				<div>layers</div>
			</div>
		</DndContext>
	);
}
