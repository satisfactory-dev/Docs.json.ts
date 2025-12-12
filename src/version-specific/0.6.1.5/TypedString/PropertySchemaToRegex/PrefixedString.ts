import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import type {
	PrefixedString_type,
} from '../../PrefixedString.ts';
import {
	PrefixedString as PrefixedStringType,
} from '../../PrefixedString.ts';

export function PrefixedString(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<PrefixedString_type>(
		ajv.compile(PrefixedStringType.generate_schema_definition()),
		({
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value,
				first_path,
			},
		}) => {
			return PrefixedStringType.regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				first_path,
			);
		},
	);
}
