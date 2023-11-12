import { action, atom } from 'nanostores';
import toast from 'react-hot-toast';

import type { EditData } from '../routes/EditProfile/schema';
import type { SignUpData } from '../routes/SignUpPage/schema';
import type { Token } from '../service/token';
import type { User } from '../types/user';

import { api } from '../service/api';
import { dropToken, saveToken } from '../service/token';
import { clearEmpty } from '../utils/clearEmpty';
import { setAuth, setUnAuth } from './auth';

export const $user = atom<User | null>(null);

type RegisterUserResponse = {
	token: Token;
	user: User;
};

const signUp = action($user, 'signUp', async (store, body: SignUpData) => {
	const filteredBody = clearEmpty(body);


	const { token, user } = await toast.promise(
		api<RegisterUserResponse>({
			body: filteredBody,
			method: 'POST',
			url: '/users',
		}),
		{
			error: 'Something went wrong',
			loading: 'Loading',
			success: ({ user: { username } }) => `Hello, ${username}!`,
		},
	);

	saveToken(token);
	setAuth();
	store.set(user);
});

const login = action($user, 'login', async (store, body: Pick<SignUpData, 'email' | 'password'>) => {
	const { token, user } = await toast.promise(
		api<RegisterUserResponse>({
			body,
			method: 'POST',
			url: '/auth',
		}),
		{
			error: 'Something went wrong',
			loading: 'Loading',
			success: 'Hello again!',
		},
	);

	saveToken(token);
	setAuth();
	store.set(user);
});

const edit = action($user, 'edit', async (store, body: EditData) => {
	const filteredBody = clearEmpty(body);

	const { token, user } = await toast.promise(
		api<RegisterUserResponse>({
			body: filteredBody,
			method: 'PUT',
			url: '/users',
		}),
		{
			error: 'Something went wrong',
			loading: 'Loading',
			success: 'Profile updated',
		},
	);

	saveToken(token);
	setAuth();
	store.set(user);
});

const logout = action($user, 'logout', () => {
	dropToken();
	setUnAuth();
	$user.set(null);
	toast.success('Goodbye!');
});

export { edit, login, logout, signUp };
