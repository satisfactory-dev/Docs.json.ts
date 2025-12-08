import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

export function integer_string_signed(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<{
		$ref: `${(
			| 'docs.json.ts--common--types#/$defs'
			| '#/$defs'
		)}/integer_string--signed`,
	}>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['$ref'],
			properties: {
				$ref: {
					oneOf: [
						{
							type: 'string',
							// eslint-disable-next-line @stylistic/max-len
							const: 'docs.json.ts--common--types#/$defs/integer_string--signed',
						},
						{
							type: 'string',
							const: '#/$defs/integer_string--signed',
						},
					],
				},
			},
		}),
		() => {
			return '-?\\d+';
		},
	);
}
