import { useStore } from '@nanostores/react';
import { Navigate, Outlet } from 'react-router-dom';

import { AppRoute } from '../../constants';
import { $auth, AuthStatus } from '../../stores/auth';
import style from './style.module.css';

const createAccessRoute = (status: AuthStatus, navigateTo: AppRoute = AppRoute.Home) =>
	function AccessRoute() {
		const auth = useStore($auth);

		if (auth === AuthStatus.Unknown) {
			return <div>Loading</div>;
		}

		if (auth !== status) {
			return <Navigate to={navigateTo} />;
		}

		return (
			<main className={style.host}>
				<Outlet />
			</main>
		);
	};

export const PrivateRoute = createAccessRoute(AuthStatus.Authorized);
export const PublicRoute = createAccessRoute(AuthStatus.Unauthorized);
