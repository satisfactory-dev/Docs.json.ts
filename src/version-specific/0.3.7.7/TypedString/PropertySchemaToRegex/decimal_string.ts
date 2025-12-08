import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

export function decimal_string(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<{
		$ref: `${(
			| 'docs.json.ts--common--types#/$defs'
			| '#/$defs'
		)}/decimal_string`,
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
							const: 'docs.json.ts--common--types#/$defs/decimal_string',
						},
						{
							type: 'string',
							const: '#/$defs/decimal_string',
						},
					],
				},
			},
		}),
		() => {
			return '\\d+\\.\\d{6}';
		},
	);
}
