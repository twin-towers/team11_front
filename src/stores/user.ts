import { action, atom, onAction } from 'nanostores';

import type { SignUpData } from '../routes/SignUpPage/schema';
import type { Token } from '../service/token';
import type { User } from '../types/user';

import { api } from '../service/api';
import { dropToken, saveToken } from '../service/token';
import { clearEmpty } from '../utils/clearEmpty';
import { setAuth } from './auth';

export const $user = atom<User | null>(null);

type RegisterUserResponse = {
	token: Token;
	user: User;
};

const signUp = action($user, 'signUp', async (store, body: SignUpData) => {
	const filteredBody = clearEmpty(body);

	try {
		const response = await api<RegisterUserResponse>({
			body: filteredBody,
			method: 'POST',
			url: '/users',
		});

		saveToken(response.token);
		setAuth();
		store.set(response.user);
		return response;
	} catch (err) {
		console.error(err);
		return Error('Something went wrong');
	}
});

const login = action($user, 'login', async (store, body: Pick<SignUpData, 'email' | 'password'>) => {
	try {
		const response = await api<RegisterUserResponse>({
			body,
			method: 'POST',
			url: '/auth',
		});

		saveToken(response.token);
		setAuth();
		store.set(response.user);
		return response;
	} catch (err) {
		console.error(err);
		return Error('Something went wrong');
	}
});

const logout = action($user, 'logout', () => {
	dropToken();
	setAuth();
	$user.set(null);
});

export { login, logout, signUp };
