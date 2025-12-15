import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	templated_string_type,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

export function TemplatedStringMatcher(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<templated_string_type>(
		ajv.compile(TemplatedString.generate_schema_definition()),
		(value) => {
			return `(?:${TemplatedString.to_regex_string_inner(
				value.templated_string,
				false,
			)}|"${TemplatedString.to_regex_string_inner(
				value.templated_string,
				false,
			)}")`;
		},
	);
}
