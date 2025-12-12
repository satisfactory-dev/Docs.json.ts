import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	object_has_property,
	object_has_property_that_equals,
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


export function RefResolver(
	ajv: Ajv,
	matchers: PropertySchemaToRegex<unknown>[],
	$ref_instance: $ref,
) {
	return new PropertySchemaToRegex<$ref_type>(
		ajv.compile($ref.generate_type_definition()),
		(value) => {
			const local_$defs: SchemaObject = value.$defs || {};

			let resolved = $ref_instance.resolve_def(value, local_$defs);

			let converter = matchers.find((maybe) => {
				return maybe.matches(resolved);
			});

			if (
				undefined === converter
				&& object_has_property_that_equals(
					resolved,
					'type',
					'string',
				)
				&& object_has_property(
					resolved,
					'$defs',
				)
			) {
				const {
					// eslint-disable-next-line @stylistic/max-len
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					$defs,
					...remaining
				} = resolved;

				resolved = remaining;

				converter = matchers.find((maybe) => {
					return maybe.matches(resolved);
				});
			}

			if (
				!converter
				&& object_has_property(resolved, 'typed_string')
			) {
				resolved = resolved.typed_string as SchemaObject;
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
