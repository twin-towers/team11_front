import { useStore } from '@nanostores/react';
import { Outlet } from 'react-router-dom';

import { $auth, AuthStatus } from '../stores/auth';

export function PrivateRoute() {
	const auth = useStore($auth);

	if (auth === AuthStatus.Unknown) {
		return <div>Loading...</div>;
	}

	return <Outlet />;
}
