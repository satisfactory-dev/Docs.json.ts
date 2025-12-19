import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

import type {
	mode,
	PrefixedString_type,
} from '../../PrefixedString.ts';
import {
	PrefixedString as PrefixedStringType,
} from '../../PrefixedString.ts';

export function PrefixedString<
	Mode extends mode,
>(
	ajv: Ajv,
	mode: Mode,
	version_specific_default: Exclude<mode, 'version_specific_default'>,
) {
	return new PropertySchemaToRegex<PrefixedString_type<Mode>>(
		ajv.compile(PrefixedStringType.generate_schema_definition({mode})),
		({
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value,
			},
		}) => {
			return PrefixedStringType.regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				version_specific_default,
			);
		},
	);
}
