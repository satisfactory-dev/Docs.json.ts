import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';

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

import {
	PropertySchemaToRegex_PrefixedString_AkAudio_non_quoted,
	PropertySchemaToRegex_PrefixedString_AkAudio_quoted,
	PropertySchemaToRegex_PrefixedString_AkAudio_single_quoted,
	PropertySchemaToRegex_PrefixedString_AkAudio_version_specific_default,
	PropertySchemaToRegex_PrefixedString_CoreUObject_non_quoted,
	PropertySchemaToRegex_PrefixedString_CoreUObject_quoted,
	PropertySchemaToRegex_PrefixedString_CoreUObject_single_quoted,
	PropertySchemaToRegex_PrefixedString_CoreUObject_version_specific_default,
	PropertySchemaToRegex_PrefixedString_Engine_non_quoted,
	PropertySchemaToRegex_PrefixedString_Engine_quoted,
	PropertySchemaToRegex_PrefixedString_Engine_single_quoted,
	PropertySchemaToRegex_PrefixedString_Engine_version_specific_default,
	PropertySchemaToRegex_PrefixedString_FactoryGame_non_quoted,
	PropertySchemaToRegex_PrefixedString_FactoryGame_quoted,
	PropertySchemaToRegex_PrefixedString_FactoryGame_single_quoted,
	PropertySchemaToRegex_PrefixedString_FactoryGame_version_specific_default,
	PropertySchemaToRegex_PrefixedString_TemplateSequence_non_quoted,
	PropertySchemaToRegex_PrefixedString_TemplateSequence_quoted,
	PropertySchemaToRegex_PrefixedString_TemplateSequence_single_quoted,

	// oxlint-disable-next-line @stylistic/max-len
	PropertySchemaToRegex_PrefixedString_TemplateSequence_version_specific_default,
} from '../../../../../generated-types/lib/0.8.3.3.ts';

const PrefixedString_validators: {
	[prefix in system_prefix]: {
		[key in mode]: Is<PrefixedString_type<key, prefix>>;
	};
} = {
	Engine: {
		non_quoted: PropertySchemaToRegex_PrefixedString_Engine_non_quoted,
		quoted: PropertySchemaToRegex_PrefixedString_Engine_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		single_quoted: PropertySchemaToRegex_PrefixedString_Engine_single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		version_specific_default: PropertySchemaToRegex_PrefixedString_Engine_version_specific_default,
	},
	TemplateSequence: {

		// oxlint-disable-next-line @stylistic/max-len
		non_quoted: PropertySchemaToRegex_PrefixedString_TemplateSequence_non_quoted,
		quoted: PropertySchemaToRegex_PrefixedString_TemplateSequence_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		single_quoted: PropertySchemaToRegex_PrefixedString_TemplateSequence_single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		version_specific_default: PropertySchemaToRegex_PrefixedString_TemplateSequence_version_specific_default,
	},
	FactoryGame: {

		// oxlint-disable-next-line @stylistic/max-len
		non_quoted: PropertySchemaToRegex_PrefixedString_FactoryGame_non_quoted,
		quoted: PropertySchemaToRegex_PrefixedString_FactoryGame_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		single_quoted: PropertySchemaToRegex_PrefixedString_FactoryGame_single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		version_specific_default: PropertySchemaToRegex_PrefixedString_FactoryGame_version_specific_default,
	},
	AkAudio: {
		non_quoted: PropertySchemaToRegex_PrefixedString_AkAudio_non_quoted,
		quoted: PropertySchemaToRegex_PrefixedString_AkAudio_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		single_quoted: PropertySchemaToRegex_PrefixedString_AkAudio_single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		version_specific_default: PropertySchemaToRegex_PrefixedString_AkAudio_version_specific_default,
	},
	CoreUObject: {

		// oxlint-disable-next-line @stylistic/max-len
		non_quoted: PropertySchemaToRegex_PrefixedString_CoreUObject_non_quoted,
		quoted: PropertySchemaToRegex_PrefixedString_CoreUObject_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		single_quoted: PropertySchemaToRegex_PrefixedString_CoreUObject_single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		version_specific_default: PropertySchemaToRegex_PrefixedString_CoreUObject_version_specific_default,
	},
};

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
		PrefixedString_validators[system_prefix][mode],
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
			return PrefixedStringType.regex_from_prefix_value_and_mode(
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
		},
	);
}
