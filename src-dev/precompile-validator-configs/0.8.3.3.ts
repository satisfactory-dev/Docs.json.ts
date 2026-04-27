import type {
	SchemaObject,
} from 'ajv/dist/2020.js';

// oxlint-disable-next-line @stylistic/max-len
import NonEmptyString from '../../schema/lib/0.8.3.3/NonEmptyString.schema.json' with {
	type: 'json',
};

import type {
	mode as PrefixedString_mode,
} from '../../src/version-specific/0.3.7.7/PrefixedString.ts';

import type {
	system_prefix,
} from '../../src/version-specific/0.8.3.3/PrefixedString.ts';
import {
	PrefixedString,
} from '../../src/version-specific/0.8.3.3/PrefixedString.ts';

import PrecompileValidators from '../PrecompileValidators.ts';

const PrefixedString_schemas: {
	[prefix in system_prefix]: {
		[mode in PrefixedString_mode]: (
			& SchemaObject
			& {$id: string}
		)
	};
} = Object.fromEntries(([
	'Engine',
	'TemplateSequence',
	'FactoryGame',
	'AkAudio',
	'CoreUObject',
] as const).map((prefix) => [
	prefix,
	{
		non_quoted: {
			// oxlint-disable-next-line @stylistic/max-len
			$id: `docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--${
				prefix
			}`,
			...PrefixedString.generate_schema_definition({
				mode: 'non_quoted',
				system_prefix: prefix,
			}),
		},
		quoted: {
			// oxlint-disable-next-line @stylistic/max-len
			$id: `docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--${
				prefix
			}`,
			...PrefixedString.generate_schema_definition({
				mode: 'quoted',
				system_prefix: prefix,
			}),
		},
		single_quoted: {
			// oxlint-disable-next-line @stylistic/max-len
			$id: `docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--${
				prefix
			}`,
			...PrefixedString.generate_schema_definition({
				mode: 'single_quoted',
				system_prefix: prefix,
			}),
		},
		version_specific_default: {
			// oxlint-disable-next-line @stylistic/max-len
			$id: `docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--${
				prefix
			}`,
			...PrefixedString.generate_schema_definition({
				mode: 'version_specific_default',
				system_prefix: prefix,
			}),
		},
	},
]));

export default new PrecompileValidators(
	{
		remove_dataCtxKeys: {
		},
		specify_types: {
			[NonEmptyString.$id]: [
				'NonEmptyString_type',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.8.3.3/TypedString/PropertySchemaToRegex/NonEmptyString.ts',
			],
			[PrefixedString_schemas.Engine.non_quoted.$id]: [
				{name: 'PrefixedString_type', args: ['non_quoted', 'Engine']},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.Engine.quoted.$id]: [
				{name: 'PrefixedString_type', args: ['quoted', 'Engine']},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.Engine.single_quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['single_quoted', 'Engine'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.Engine.version_specific_default.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['version_specific_default', 'Engine'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.TemplateSequence.non_quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['non_quoted', 'TemplateSequence'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.TemplateSequence.quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['quoted', 'TemplateSequence'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.TemplateSequence.single_quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['single_quoted', 'TemplateSequence'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],

			// oxlint-disable-next-line @stylistic/max-len
			[PrefixedString_schemas.TemplateSequence.version_specific_default.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['version_specific_default', 'TemplateSequence'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.FactoryGame.non_quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['non_quoted', 'FactoryGame'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.FactoryGame.quoted.$id]: [
				{name: 'PrefixedString_type', args: ['quoted', 'FactoryGame']},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.FactoryGame.single_quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['single_quoted', 'FactoryGame'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],

			// oxlint-disable-next-line @stylistic/max-len
			[PrefixedString_schemas.FactoryGame.version_specific_default.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['version_specific_default', 'FactoryGame'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.AkAudio.non_quoted.$id]: [
				{name: 'PrefixedString_type', args: ['non_quoted', 'AkAudio']},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.AkAudio.quoted.$id]: [
				{name: 'PrefixedString_type', args: ['quoted', 'AkAudio']},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.AkAudio.single_quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['single_quoted', 'AkAudio'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.AkAudio.version_specific_default.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['version_specific_default', 'AkAudio'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.CoreUObject.non_quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['non_quoted', 'CoreUObject'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.CoreUObject.quoted.$id]: [
				{name: 'PrefixedString_type', args: ['quoted', 'CoreUObject']},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
			[PrefixedString_schemas.CoreUObject.single_quoted.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['single_quoted', 'CoreUObject'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],

			// oxlint-disable-next-line @stylistic/max-len
			[PrefixedString_schemas.CoreUObject.version_specific_default.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['version_specific_default', 'CoreUObject'],
				},
				'../../src/version-specific/0.8.3.3/PrefixedString.ts',
			],
		},
	},
	[
		'parentData',
		'parentDataProperty',
		'rootData',
		'dynamicAnchors',
	],
	{
		PropertySchemaToRegex_NonEmptyString: NonEmptyString,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_Engine_non_quoted: PrefixedString_schemas.Engine.non_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_Engine_quoted: PrefixedString_schemas.Engine.quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_Engine_single_quoted: PrefixedString_schemas.Engine.single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_Engine_version_specific_default: PrefixedString_schemas.Engine.version_specific_default,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_TemplateSequence_non_quoted: PrefixedString_schemas.TemplateSequence.non_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_TemplateSequence_quoted: PrefixedString_schemas.TemplateSequence.quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_TemplateSequence_single_quoted: PrefixedString_schemas.TemplateSequence.single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_TemplateSequence_version_specific_default: PrefixedString_schemas.TemplateSequence.version_specific_default,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_FactoryGame_non_quoted: PrefixedString_schemas.FactoryGame.non_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_FactoryGame_quoted: PrefixedString_schemas.FactoryGame.quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_FactoryGame_single_quoted: PrefixedString_schemas.FactoryGame.single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_FactoryGame_version_specific_default: PrefixedString_schemas.FactoryGame.version_specific_default,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_AkAudio_non_quoted: PrefixedString_schemas.AkAudio.non_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_AkAudio_quoted: PrefixedString_schemas.AkAudio.quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_AkAudio_single_quoted: PrefixedString_schemas.AkAudio.single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_AkAudio_version_specific_default: PrefixedString_schemas.AkAudio.version_specific_default,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_CoreUObject_non_quoted: PrefixedString_schemas.CoreUObject.non_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_CoreUObject_quoted: PrefixedString_schemas.CoreUObject.quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_CoreUObject_single_quoted: PrefixedString_schemas.CoreUObject.single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_CoreUObject_version_specific_default: PrefixedString_schemas.CoreUObject.version_specific_default,
	},
);
