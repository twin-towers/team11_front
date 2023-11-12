import { action, atom, computed, onStart } from 'nanostores';

import type { User } from '../types/user';

import { api } from '../service/api';
import { $user } from './user';

const enum AuthStatus {
	Authorized,
	Unauthorized,
	Unknown,
}

const $auth = atom<AuthStatus>(AuthStatus.Unknown);
const $isAuth = computed($auth, (auth) => auth === AuthStatus.Authorized);
const setAuth = action($auth, 'setAuth', () => $auth.set(AuthStatus.Authorized));
const setUnAuth = action($auth, 'setUnAuth', () => $auth.set(AuthStatus.Unauthorized));

onStart($auth, async () => {
	try {
		const user = await api<User>({ url: '/auth' });
		setAuth();
		$user.set(user);
	} catch (err) {
		console.error(err);
		setUnAuth();
	}
});

export { $auth, $isAuth, AuthStatus, setAuth, setUnAuth };
