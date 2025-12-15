import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	PrefixedString_type,
	system_prefix,
} from '../../PrefixedString.ts';
import {
	PrefixedString as PrefixedStringType,
} from '../../PrefixedString.ts';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import type {
	mode,
} from '../../../0.3.7.7/PrefixedString.ts';

export function PrefixedString<
	Mode extends mode,
	SystemPrefix extends system_prefix,
>(
	ajv: Ajv,
	mode: Mode,
	system_prefix: SystemPrefix,
) {
	return new PropertySchemaToRegex<PrefixedString_type>(
		ajv.compile(PrefixedStringType.generate_schema_definition({
			mode,
			system_prefix,
		})),
		({
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value,
				first_path,
				system_prefix,
			},
		}) => {
			return PrefixedStringType.regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				first_path,
				false === system_prefix
					? system_prefix
					: `/Script/${system_prefix || 'Engine'}.`,
			);
		},
	);
}
