import type { Output } from 'valibot';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { email, maxLength, minLength, object, string, toTrimmed } from 'valibot';

const loginSchema = object({
	email: string('Your email must be a string.', [toTrimmed(), minLength(1, 'Please enter your email.'), email('The email address is badly formatted.')]),
	password: string('Your password must be a string.', [minLength(5, 'Please enter at least 5 characters.'), maxLength(20, 'Too long password.')]),
});

export type LoginData = Output<typeof loginSchema>;
export const resolver = valibotResolver(loginSchema);
