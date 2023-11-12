import type { Output } from 'valibot';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { email, maxLength, minLength, object, string, toTrimmed } from 'valibot';

const editSchema = object({
	email: string('Your email must be a string.', [toTrimmed(), minLength(1, 'Please enter your email.'), email('The email address is badly formatted.')]),
	firstName: string('Your name must be a string.', [toTrimmed(), maxLength(30, 'Is this a real name?')]),

	lastName: string('Your last name must be a string.', [toTrimmed(), maxLength(30, 'Is this a real last name?')]),

	password: string('Your password must be a string.', [minLength(5, 'Please enter at least 5 characters.'), maxLength(20, 'Too long password.')]),
	username: string('Your username must be a string.', [toTrimmed(), maxLength(20, 'Too long username.')]),
});

export type EditData = Output<typeof editSchema>;
export const resolver = valibotResolver(editSchema);
