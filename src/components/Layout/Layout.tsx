import { Outlet } from 'react-router-dom';

import style from './style.module.css';

export function Layout() {
	return (
		<div className={style.layout}>
			<div />

			<Outlet />
		</div>
	);
}
