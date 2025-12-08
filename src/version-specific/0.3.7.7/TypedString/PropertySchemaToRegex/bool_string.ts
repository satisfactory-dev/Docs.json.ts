import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

export function bool_string(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<{
		$ref: `${(
			| 'docs.json.ts--common--types#/$defs'
			| '#/$defs'
		)}/bool_string`,
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
							const: 'docs.json.ts--common--types#/$defs/bool_string',
						},
						{
							type: 'string',
							const: '#/$defs/bool_string',
						},
					],
				},
			},
		}),
		() => {
			return '(?:True|False)';
		},
	);
}
