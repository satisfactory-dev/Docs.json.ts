import type {
	SchemaObject,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import {
	OneOf as OneOf_validator,
} from '../../../../../generated-types/lib/0.5.2.1.ts';

export type OneOf_type = {
		oneOf: [
			SchemaObject,
			SchemaObject,
			...SchemaObject[],
		],
};

export function OneOfMatcher(
	matchers: PropertySchemaToRegex<unknown>[],
) {
	return new PropertySchemaToRegex<OneOf_type>(
		OneOf_validator,
		(value) => {
			const regex_parts = value.oneOf.map((sub_schema, i) => {
				sub_schema = Type.maybe_add_$defs(value, sub_schema);
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
