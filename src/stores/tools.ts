import { action, atom } from 'nanostores'

export type TestItem = {
	body: string
	id: string
}


const initials: TestItem[] = [
	{ body: '😀', id: crypto.randomUUID()},
	{ body: '🌻', id: crypto.randomUUID() },
	{ body: '🚃', id: crypto.randomUUID() }
]

const $tools = atom<TestItem[]>(initials)



const takeTool = action($tools, 'take', (state, id: string) => {
	const oldState = [...state.get()]
	const index = oldState.findIndex(item => item.id === id)

	if (index === -1) return null;

	const takenItem = oldState[index];

	oldState[index] = {
		...takenItem,
		id: crypto.randomUUID()
	}

	state.set(oldState)

	return takenItem
})




export  {$tools, takeTool}
