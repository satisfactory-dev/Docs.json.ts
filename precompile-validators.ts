import {
	writeFile,
} from 'node:fs/promises';

import {
	typescriptify,
} from '@satisfactory-dev/ajv-utilities';

import {
	$defs_schema,
	$ref,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import type {
	SchemaObject,
} from 'ajv/dist/2020.js';
import Ajv2020 from 'ajv/dist/2020.js';

import standaloneCode from 'ajv/dist/standalone/index.js';

// oxlint-disable-next-line @stylistic/max-len
import ConstString from './schema/lib/0.3.7.7/TypedString/PropertySchemaToRegex/ConstString.schema.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import EnumString from './schema/lib/0.3.7.7/TypedString/PropertySchemaToRegex/EnumString.schema.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import NamedList from './schema/lib/0.3.7.7/TypedString/PropertySchemaToRegex/NamedList.schema.json' with {
	type: 'json',
};

import {
	FlexibleArray_generate_schema_definition__items,
	FlexibleArray_generate_schema_definition__prefixItems,
} from './src/version-specific/0.3.7.7/TypedString/FlexibleArray.ts';

// oxlint-disable-next-line @stylistic/max-len
import PatternString from './schema/lib/0.3.7.7/TypedString/PropertySchemaToRegex/PatternString.schema.json' with {
	type: 'json',
};
import {
	Object_generate_schema_definition,
} from './src/version-specific/0.3.7.7/TypedString/Object.ts';

import {
	PrefixedString,
	type mode as PrefixedString_mode,
} from './src/version-specific/0.3.7.7/PrefixedString.ts';

const FlexibleArray__items = {
	$id: 'docs.json.ts--lib--PropertySchemaToRegex--FlexibleArray--items',
	...FlexibleArray_generate_schema_definition__items(),
};

const FlexibleArray__prefixItems = {
// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--PropertySchemaToRegex--FlexibleArray--prefixItems',
	...FlexibleArray_generate_schema_definition__prefixItems(),
};

const TypedString_object_schema = {
	$id: 'docs.json.ts--lib--PropertySchemaToRegex--TypedString--object',
	type: 'object',
	additionalProperties: false,
	required: ['type', 'typed_string'],
	properties: {
		$defs: $defs_schema.properties.$defs,
		type: {
			type: 'string',
			const: 'string',
		},
		typed_string: Object_generate_schema_definition(),
	},
};

const PrefixedString_schemas: {
	[key in PrefixedString_mode]: (
		& SchemaObject
		& {$id: string}
	);
} = {
	non_quoted: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--non_quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'non_quoted',
		}),
	},
	quoted: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'quoted',
		}),
	},
	single_quoted: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--single_quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'single_quoted',
		}),
	},
	version_specific_default: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--version_specific_default',
		...PrefixedString.generate_schema_definition({
			mode: 'version_specific_default',
		}),
	},
};

const $ref_schema = {
	$id: 'docs.json.ts--lib--PropertySchemaToRegex--$ref',
	...$ref.generate_type_definition(),
};

const TemplatedString_schema = {
	$id: 'docs.json.ts--lib--PropertySchemaToRegex--TemplatedString',
	...TemplatedString.generate_schema_definition(),
};

const ajv = new Ajv2020({
	verbose: true,
	logger: false,
	allErrors: true,
	code: {
		source: true,
		esm: true,
		lines: true,
		optimize: 2,
	},
	schemas: [
		ConstString,
		EnumString,
		NamedList,
		FlexibleArray__items,
		FlexibleArray__prefixItems,
		PatternString,
		TypedString_object_schema,
		PrefixedString_schemas.non_quoted,
		PrefixedString_schemas.quoted,
		PrefixedString_schemas.single_quoted,
		PrefixedString_schemas.version_specific_default,
		$ref_schema,
		TemplatedString_schema,
	],
});

const code = `// oxlint-disable @stylistic/max-len${
	'\n'
}${
	typescriptify(
		standaloneCode(ajv, {
			PropertySchemaToRegex_ConstString: ConstString.$id,
			PropertySchemaToRegex_EnumString: EnumString.$id,
			PropertySchemaToRegex_NamedList: NamedList.$id,

			// oxlint-disable-next-line @stylistic/max-len
			PropertySchemaToRegex_FlexibleArray__items: FlexibleArray__items.$id,

			// oxlint-disable-next-line @stylistic/max-len
			PropertySchemaToRegex_FlexibleArray__prefixItems: FlexibleArray__prefixItems.$id,
			PropertySchemaToRegex_PatternString: PatternString.$id,

			// oxlint-disable-next-line @stylistic/max-len
			PropertySchemaToRegex_TypedString_object: TypedString_object_schema.$id,

			// oxlint-disable-next-line @stylistic/max-len
			PropertySchemaToRegex_PrefixedString_non_quoted: PrefixedString_schemas.non_quoted.$id,

			// oxlint-disable-next-line @stylistic/max-len
			PropertySchemaToRegex_PrefixedString_quoted: PrefixedString_schemas.quoted.$id,

			// oxlint-disable-next-line @stylistic/max-len
			PropertySchemaToRegex_PrefixedString_single_quoted: PrefixedString_schemas.single_quoted.$id,

			// oxlint-disable-next-line @stylistic/max-len
			PropertySchemaToRegex_PrefixedString_version_specific_default: PrefixedString_schemas.version_specific_default.$id,

			PropertySchemaToRegex_ref: $ref_schema.$id,
			PropertySchemaToRegex_TemplatedString: TemplatedString_schema.$id,
		}),
		{
			remove_dataCtxKeys: {
				[ConstString.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[EnumString.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[NamedList.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[FlexibleArray__items.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[FlexibleArray__prefixItems.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[PatternString.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[TypedString_object_schema.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[PrefixedString_schemas.non_quoted.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[PrefixedString_schemas.quoted.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[PrefixedString_schemas.single_quoted.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[PrefixedString_schemas.version_specific_default.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[$ref_schema.$id]: [
					'parentData',
					'parentDataProperty',
					'rootData',
					'dynamicAnchors',
				],
				[TemplatedString_schema.$id]: [
					'parentData',
					'parentDataProperty',
				],
			},
			specify_types: {
				[ConstString.$id]: [
					'ConstString',

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/ConstString.ts',
				],
				[EnumString.$id]: [
					'EnumString',

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/EnumString.ts',
				],
				[NamedList.$id]: [
					'NamedList_type',
					'../src/version-specific/0.3.7.7/NamedList.ts',
				],
				[FlexibleArray__items.$id]: [
					{name: 'FlexibleArray_type', args: ['items']},

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/TypedString/FlexibleArray.ts',
				],
				[FlexibleArray__prefixItems.$id]: [
					{name: 'FlexibleArray_type', args: ['prefixItems']},

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/TypedString/FlexibleArray.ts',
				],
				[PatternString.$id]: [
					'PatternString_type',

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/PatternString.ts',
				],
				[TypedString_object_schema.$id]: [
					'TypedString_Object_type',

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/Object.ts',
				],
				[PrefixedString_schemas.non_quoted.$id]: [
					{name: 'PrefixedString_type', args: ['non_quoted']},

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/PrefixedString.ts',
				],
				[PrefixedString_schemas.quoted.$id]: [
					{name: 'PrefixedString_type', args: ['quoted']},

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/PrefixedString.ts',
				],
				[PrefixedString_schemas.single_quoted.$id]: [
					{name: 'PrefixedString_type', args: ['single_quoted']},

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/PrefixedString.ts',
				],
				[PrefixedString_schemas.version_specific_default.$id]: [
					{
						name: 'PrefixedString_type',
						args: ['version_specific_default'],
					},

					// oxlint-disable-next-line @stylistic/max-len
					'../src/version-specific/0.3.7.7/PrefixedString.ts',
				],
				[$ref_schema.$id]: [
					'$ref_type',
					'@signpostmarv/json-schema-typescript-codegen',
				],
				[TemplatedString_schema.$id]: [
					'templated_string_type',
					'@signpostmarv/json-schema-typescript-codegen/ajv',
				],
			},
		},
	)
}`;

await writeFile(
	`${
		import.meta.dirname
	}/generated-types/lib.ts`,
	code,
);
