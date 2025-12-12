import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	Object_type,
} from '../Object.ts';
import {
	Object_generate_schema_definition,
	Object_type_to_regex,
	PropertySchemaToRegex,
} from '../Object.ts';

export function Object(
	ajv: Ajv,
	matchers: PropertySchemaToRegex<unknown>[],
) {
	return new PropertySchemaToRegex<{
		type: 'string',
		typed_string: Object_type,
	}>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'typed_string'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				typed_string: Object_generate_schema_definition(),
			},
		}),
		(value) => {
			return Object_type_to_regex(
				value.typed_string,
				matchers,
			);
		},
	);
}
