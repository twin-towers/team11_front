import { action, atom } from "nanostores";

import type { SignUpData } from "../routes/SignUpPage/schema";
import type { RegisterUserResponse, User } from "../types/user";

import { api } from "../service/api";
import { saveToken } from "../service/token";

export const $user = atom<User | null>(null);

export const signUp = action($user, 'signUp', async (store, body: SignUpData) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const filteredBody = Object.fromEntries(Object.entries(body).filter(([_, value]) => value !== ''))

	try {
		const response = await api<RegisterUserResponse>({
			body: filteredBody,
			method: 'POST',
			url: '/users'
		})

		saveToken(response.token)
		store.set(response.user)
		return response
	} catch(err) {
		console.error(err)
		return Error('Something went wrong')
	}

})
