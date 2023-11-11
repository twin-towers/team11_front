import React, { useEffect, useState } from 'react';

type ImageState = {
	[state: string]: string; //должен быть какой-то ключ, по которому сохраняем состояние, наверное.
};

const ImageEditor: React.FC = () => {
	const [currentState, setCurrentState] = useState<ImageState>({});
	const [history, setHistory] = useState<ImageState[]>([]);
	const [future, setFuture] = useState<ImageState[]>([]);

	// загрузка состояния из LS
	useEffect(() => {
		const savedStateString = localStorage.getItem('imageEditorState');
		if (savedStateString) {
			const savedState = JSON.parse(savedStateString);
			setCurrentState(savedState);
		}
	}, []);

	useEffect(() => {
		// сохраняем новое состояние в историю
		setHistory((prevHistory) => [...prevHistory, currentState]);
		// сбрасываем будущее состояние
		setFuture([]);
		localStorage.setItem('imageEditorState', JSON.stringify(currentState));
	}, [currentState]);

	const undoAction = () => {
		if (history.length > 1) {
			const prevState = history[history.length - 2];
			setHistory(history.slice(0, -1));
			setCurrentState(prevState);
			setFuture([...future, currentState]);
		}
	};

	const redoAction = () => {
		if (future.length > 0) {
			const nextState = future[future.length - 1];
			setHistory([...history, currentState]);
			setCurrentState(nextState);
			setFuture(future.slice(0, -1));
		}
	};

	return (
		<div>
			<button onClick={undoAction}>Undo</button>
			<button onClick={redoAction}>Redo</button>
		</div>
	);
};

export default ImageEditor;
