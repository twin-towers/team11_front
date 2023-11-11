import { action, atom } from "nanostores"

import type { TestItem} from "./tools";

import { takeTool } from "./tools"

export type CanvasItem = TestItem & {
	coordinates: {
		x: number
		y: number
	}
}

const $canvasItems = atom<CanvasItem[]>([])

const addCanvasItem = action($canvasItems, 'add', (state, id: string, coordinates = {
	x: 0,
	y: 0
}) => {
	const item = takeTool(id)
	if (!item) return null;
	state.set([...state.get(), {...item, coordinates}])
})

export {$canvasItems, addCanvasItem}
