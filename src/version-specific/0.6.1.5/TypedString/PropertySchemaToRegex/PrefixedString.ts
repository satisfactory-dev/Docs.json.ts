import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';

import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import type {
	mode,
} from '../../../0.3.7.7/PrefixedString.ts';

import type {
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
} from '../../../../../generated-types/lib/0.6.1.5.ts';

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
	ajv: Ajv,
	mode: Mode,
) {
	return new PropertySchemaToRegex<PrefixedString_type<Mode>>(
		PrefixedString_schemas[mode],
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
				'quoted',
				first_path,
			);
		},
	);
}
