import {
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	Object_type,
} from '../Object.ts';
import {
	Object_type_to_regex,
	PropertySchemaToRegex,
} from '../Object.ts';

import {
	PropertySchemaToRegex_TypedString_object,
} from '../../../../../generated-types/lib.ts';

export type TypedString_Object_type = {
	type: 'string',
	typed_string: Object_type,
};

export function Object(
	matchers: PropertySchemaToRegex<unknown>[],
) {
	return new PropertySchemaToRegex<TypedString_Object_type>(
		PropertySchemaToRegex_TypedString_object,
		(value) => {
			return Object_type_to_regex(
				Type.maybe_add_$defs(value, value.typed_string),
				matchers,
			);
		},
	);
}
