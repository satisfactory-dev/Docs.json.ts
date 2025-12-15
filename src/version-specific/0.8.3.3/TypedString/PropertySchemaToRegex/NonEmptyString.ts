import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

export function NonEmptyString(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<{type: 'string', minLength: 1}>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'minLength'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				minLength: {
					type: 'integer',
					const: 1,
				},
			},
		}),
		() => {
			return '[^=,)]+';
		},
	);
}
