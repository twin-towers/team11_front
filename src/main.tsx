import "@fontsource-variable/playpen-sans";
import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 

import './index.css';
import { router } from './routes/router.tsx';

const root = document.getElementById('root')

if (!root) {
	throw new Error('Root element not found');
}

createRoot(root).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
