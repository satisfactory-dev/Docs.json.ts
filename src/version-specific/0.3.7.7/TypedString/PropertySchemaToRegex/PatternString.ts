import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

export function PatternString(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<{
		type: 'string',
		pattern: string,
	}>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'pattern'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				pattern: {
					type: 'string',
					pattern: '^\\^.+\\$$',
				},
			},
		}),
		(value) => {
			const regex = value.pattern.substring(
				1,
				value.pattern.length - 1,
			);

			return `(?:${regex}|"${regex}")`;
		},
	);
}
