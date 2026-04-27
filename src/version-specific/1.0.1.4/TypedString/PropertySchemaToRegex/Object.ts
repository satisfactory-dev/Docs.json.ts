import type {
	$ref,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	Object_type,
} from '../Object.ts';
import {
	Object_type_to_regex,
} from '../Object.ts';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import {
	ObjectSchema as Object_validator,
} from '../../../../../generated-types/lib/1.0.1.4.ts';

export type ObjectSchema_type = {
	type: 'string',
	typed_string: Object_type,
};

export function Object(
	matchers: PropertySchemaToRegex<unknown>[],
	$ref_instance: $ref,
) {
	return new PropertySchemaToRegex<ObjectSchema_type>(
		Object_validator,
		(value) => {
			return Object_type_to_regex(
				Type.maybe_add_$defs(value, value.typed_string),
				matchers,
				$ref_instance,
			);
		},
	);
}
