import {
	object_has_property,
} from '@satisfactory-dev/predicates.ts';

import type {
	$ref_type,
	SchemaObject,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

import {
	PropertySchemaToRegex_ref,
} from '../../../../../generated-types/lib/0.3.7.7.ts';

export function RefResolver(
	matchers: PropertySchemaToRegex<unknown>[],
	$ref_instance: $ref,
) {
	return new PropertySchemaToRegex<$ref_type>(
		PropertySchemaToRegex_ref,
		(value) => {
			const local_$defs: SchemaObject = value.$defs || {};

			let resolved = $ref_instance.resolve_def(value, local_$defs);

			let converter = matchers.find((maybe) => {
				return maybe.matches(resolved);
			});

			if (
				!converter
				&& object_has_property(resolved, 'typed_string')
			) {
				resolved = $ref.maybe_add_$defs(
					resolved,
					resolved.typed_string as SchemaObject,
				);
				converter = matchers.find(
					(maybe) => {
						return maybe.matches(
							resolved,
						);
					},
				);
			}

			if (!converter) {
				throw new Error(`No converter found for ${value.$ref}`);
			}

			return converter.to_regex(resolved);
		},
	);
}
