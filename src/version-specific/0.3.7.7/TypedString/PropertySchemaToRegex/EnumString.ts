import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

export function EnumString(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<{
		type: 'string',
		enum: [string, string, ...string[]],
	}>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'enum'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				enum: {
					type: 'array',
					minItems: 2,
					uniqueItems: true,
					items: {
						type: 'string',
						minLength: 1,
					},
				},
			},
		}),
		(value) => {
			return `(?:${
				value.enum.map((item) => RegExp.escape(item)).join('|')
			}|${
				value.enum.map((item) => RegExp.escape(`"${item}"`)).join('|')
			})`;
		},
	);
}
