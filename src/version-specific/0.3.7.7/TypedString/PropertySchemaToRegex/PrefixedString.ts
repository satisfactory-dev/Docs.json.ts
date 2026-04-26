import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';

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

import {
	PropertySchemaToRegex_PrefixedString_non_quoted,
	PropertySchemaToRegex_PrefixedString_quoted,
	PropertySchemaToRegex_PrefixedString_single_quoted,
	PropertySchemaToRegex_PrefixedString_version_specific_default,
} from '../../../../../generated-types/lib.ts';

const PrefixedString_schemas: {
	[key in mode]: Is<
		PrefixedString_type<key>
	>;
} = {
	non_quoted: PropertySchemaToRegex_PrefixedString_non_quoted,
	quoted: PropertySchemaToRegex_PrefixedString_quoted,
	single_quoted: PropertySchemaToRegex_PrefixedString_single_quoted,

	// oxlint-disable-next-line @stylistic/max-len
	version_specific_default: PropertySchemaToRegex_PrefixedString_version_specific_default,
};

export function PrefixedString<
	Mode extends mode,
>(
	mode: Mode,
	version_specific_default: Exclude<mode, 'version_specific_default'>,
) {
	return new PropertySchemaToRegex<PrefixedString_type<Mode>>(
		PrefixedString_schemas[mode],
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
