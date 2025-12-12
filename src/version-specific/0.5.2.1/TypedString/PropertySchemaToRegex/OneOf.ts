import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	OneOf,
	type SchemaObject,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

export function OneOfMatcher(
	ajv: Ajv,
	matchers: PropertySchemaToRegex<unknown>[],
) {
	return new PropertySchemaToRegex<{
		oneOf: [
			SchemaObject,
			SchemaObject,
			...SchemaObject[],
		],
	}>(
		ajv.compile(OneOf.generate_schema_definition({
			kind: 'oneOf',
			mode: 'unspecified',
		})),
		(value) => {
			const regex_parts = value.oneOf.map((sub_schema, i) => {
				const matcher = matchers.find(
					(maybe) => maybe.matches(sub_schema),
				);

				if (!matcher) {
					throw new Error(
						`No matcher found for sub_schema at offset ${i}`,
					);
				}

				return matcher.to_regex(sub_schema);
			});

			return `(?:${regex_parts.join(')|(?:')})`;
		},
	);
}
