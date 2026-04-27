import {
	PrefixedString as PrefixedStringType,
} from '../../PrefixedString.ts';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import type {
	mode,
} from '../../../0.3.7.7/PrefixedString.ts';

import type {
	PrefixedString_type,
	system_prefix,
} from '../../../0.8.3.3/PrefixedString.ts';

import {
	PrefixedString_validator,
} from '../../../0.8.3.3/TypedString/PropertySchemaToRegex/PrefixedString.ts';

export function PrefixedString<
	Mode extends mode,
	SystemPrefix extends system_prefix,
	VersionSpecificDefault extends Exclude<mode, 'version_specific_default'>,
>(
	mode: Mode,
	system_prefix: SystemPrefix,
	version_specific_default: VersionSpecificDefault,
) {
	return new PropertySchemaToRegex<PrefixedString_type>(
		PrefixedString_validator(mode, system_prefix),
		({
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value,
				first_path,
				root_path,
				system_prefix,
			},
		}) => {
			const regex = PrefixedStringType.regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				first_path,
				root_path,
				false === system_prefix
					? system_prefix
					: `/Script/${system_prefix || 'Engine'}.`,
				version_specific_default,
			);

			return `(?:${regex}|"${regex}")`;
		},
	);
}
