import type { BaseSchema, Input, OptionalSchema } from 'valibot';

import { getOutput } from 'valibot';

export function optionalField<TWrapped extends BaseSchema, TDefault extends Input<TWrapped> | undefined = undefined>(
	wrapped: TWrapped,
): Omit<OptionalSchema<TWrapped, TDefault>, 'getDefault' | 'type'> {
	return {
		_parse(input, info) {
			console.log(input);
			console.log(info);
			return input === '' ? getOutput(wrapped._parse(input, info)) : wrapped._parse(input, info)
		},
		async: false,
		wrapped,
	};
}
