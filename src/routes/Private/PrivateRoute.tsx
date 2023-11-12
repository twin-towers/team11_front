import { useStore } from '@nanostores/react';
import { Navigate, Outlet } from 'react-router-dom';

import { AppRoute } from '../../constants';
import { $isAuth } from '../../stores/auth';
import style from './style.module.css';

export function PrivateRoute() {
	const isAuthorized = useStore($isAuth);

	if (!isAuthorized) {
		return <Navigate to={AppRoute.SignUp} />;
	}

	return (
		<main className={style.host}>
			<Outlet />
		</main>
	);
}
