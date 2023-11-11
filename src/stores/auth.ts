import { atom, computed } from "nanostores";

const enum AuthStatus {
	Authorized,
	Unauthorized,
	Unknown,
}

const $auth = atom<AuthStatus>(AuthStatus.Unknown);
const $isAuth = computed($auth, (auth) => auth === AuthStatus.Authorized);

export { $auth, $isAuth, AuthStatus}
