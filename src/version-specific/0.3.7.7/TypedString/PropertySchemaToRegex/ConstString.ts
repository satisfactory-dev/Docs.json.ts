import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

export function ConstString(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<{type: 'string', const: string}>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'const'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				const: {
					type: 'string',
				},
			},
		}),
		(value) => {
			return RegExp.escape(value.const);
		},
	);
}
