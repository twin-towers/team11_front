import type { BaseSchema, Input, OptionalSchema } from 'valibot';

import { getOutput } from 'valibot';

export function optionalField<TWrapped extends BaseSchema, TDefault extends Input<TWrapped> | undefined = undefined>(
	wrapped: TWrapped,
): Omit<OptionalSchema<TWrapped, TDefault>, 'getDefault' | 'type'> {
	return {
		_parse(input, info) {
			if (input === '') {
				console.log('optionalField', input, info);
				return getOutput(undefined);
			}
			return wrapped._parse(input, info);
		},
		async: false,
		wrapped,
	};
}
