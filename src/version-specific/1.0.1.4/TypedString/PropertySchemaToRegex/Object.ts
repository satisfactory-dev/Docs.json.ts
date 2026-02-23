import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	$ref,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$defs_schema,
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	Object_type,
} from '../Object.ts';
import {
	Object_generate_schema_definition,
	Object_type_to_regex,
} from '../Object.ts';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

export function Object(
	ajv: Ajv,
	matchers: PropertySchemaToRegex<unknown>[],
	$ref_instance: $ref,
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
				$defs: $defs_schema.properties.$defs,
				type: {
					type: 'string',
					const: 'string',
				},
				typed_string: Object_generate_schema_definition(),
			},
		}),
		(value) => {
			return Object_type_to_regex(
				Type.maybe_add_$defs(value, value.typed_string),
				matchers,
				$ref_instance,
			);
		},
	);
}
