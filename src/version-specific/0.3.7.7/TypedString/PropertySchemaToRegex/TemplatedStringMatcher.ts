import type {
	templated_string_type,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

import {
	PropertySchemaToRegex_TemplatedString,
} from '../../../../../generated-types/lib.ts';

export function TemplatedStringMatcher() {
	return new PropertySchemaToRegex<templated_string_type>(
		PropertySchemaToRegex_TemplatedString,
		(value) => {
			return TemplatedString.to_regex_string_inner(
				value.templated_string,
				false,
			);
		},
	);
}
