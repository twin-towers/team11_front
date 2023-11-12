import { action, atom, computed } from 'nanostores';

const enum AuthStatus {
	Authorized,
	Unauthorized,
	Unknown,
}

const $auth = atom<AuthStatus>(AuthStatus.Unknown);
const $isAuth = computed($auth, (auth) => auth === AuthStatus.Authorized);
const setAuth = action($auth, 'setAuth', () => $auth.set(AuthStatus.Authorized));

export { $auth, $isAuth, AuthStatus, setAuth };
