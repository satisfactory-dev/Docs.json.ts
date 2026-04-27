import type {
	SchemaObject,
} from 'ajv/dist/2020.js';

import type {
	mode as PrefixedString_mode,
} from '../../src/version-specific/0.3.7.7/PrefixedString.ts';
import {
	PrefixedString,
} from '../../src/version-specific/0.6.1.5/PrefixedString.ts';

import PrecompileValidators from '../PrecompileValidators.ts';

const PrefixedString_schemas: {
	[key in PrefixedString_mode]: (
		& SchemaObject
		& {$id: string}
	);
} = {
	non_quoted: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'non_quoted',
		}),
	},
	quoted: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'quoted',
		}),
	},
	single_quoted: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'single_quoted',
		}),
	},
	version_specific_default: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default',
		...PrefixedString.generate_schema_definition({
			mode: 'version_specific_default',
		}),
	},
};

export default new PrecompileValidators(
	{
		remove_dataCtxKeys: {
		},
		specify_types: {
			[PrefixedString_schemas.non_quoted.$id]: [
				{name: 'PrefixedString_type', args: ['non_quoted']},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.6.1.5/PrefixedString.ts',
			],
			[PrefixedString_schemas.quoted.$id]: [
				{name: 'PrefixedString_type', args: ['quoted']},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.6.1.5/PrefixedString.ts',
			],
			[PrefixedString_schemas.single_quoted.$id]: [
				{name: 'PrefixedString_type', args: ['single_quoted']},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.6.1.5/PrefixedString.ts',
			],
			[PrefixedString_schemas.version_specific_default.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['version_specific_default'],
				},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.6.1.5/PrefixedString.ts',
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
		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_non_quoted: PrefixedString_schemas.non_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_quoted: PrefixedString_schemas.quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_single_quoted: PrefixedString_schemas.single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_version_specific_default: PrefixedString_schemas.version_specific_default,
	},
);
