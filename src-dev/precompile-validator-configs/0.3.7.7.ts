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

// oxlint-disable-next-line @stylistic/max-len
import ConstString from '../../schema/lib/0.3.7.7/TypedString/PropertySchemaToRegex/ConstString.schema.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import EnumString from '../../schema/lib/0.3.7.7/TypedString/PropertySchemaToRegex/EnumString.schema.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import NamedList from '../../schema/lib/0.3.7.7/TypedString/PropertySchemaToRegex/NamedList.schema.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import PatternString from '../../schema/lib/0.3.7.7/TypedString/PropertySchemaToRegex/PatternString.schema.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import Empty from '../../schema/lib/0.3.7.7/TypedString/Empty.schema.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import ObjectSchema from '../../schema/lib/0.3.7.7/TypedString/Object.schema.json' with {
	type: 'json',
};

import {
	FlexibleArray_generate_schema_definition__items,
	FlexibleArray_generate_schema_definition__prefixItems,
} from '../../src/version-specific/0.3.7.7/TypedString/FlexibleArray.ts';

import {
	Object_generate_schema_definition,
} from '../../src/version-specific/0.3.7.7/TypedString/Object.ts';

import type {
	mode as PrefixedString_mode,
} from '../../src/version-specific/0.3.7.7/PrefixedString.ts';
import {
	PrefixedString,
} from '../../src/version-specific/0.3.7.7/PrefixedString.ts';

import PrecompileValidators from '../PrecompileValidators.ts';

const FlexibleArray__items = {
	// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--FlexibleArray--items',
	...FlexibleArray_generate_schema_definition__items(),
};

const FlexibleArray__prefixItems = {
	// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--FlexibleArray--prefixItems',
	...FlexibleArray_generate_schema_definition__prefixItems(),
};

const TypedString_object_schema = {
	// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--TypedString--object',
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
		$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'non_quoted',
		}),
	},
	quoted: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--PrefixedString--quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'quoted',
		}),
	},
	single_quoted: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted',
		...PrefixedString.generate_schema_definition({
			mode: 'single_quoted',
		}),
	},
	version_specific_default: {
		// oxlint-disable-next-line @stylistic/max-len
		$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default',
		...PrefixedString.generate_schema_definition({
			mode: 'version_specific_default',
		}),
	},
};

const $ref_schema = {
	// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--$ref',
	...$ref.generate_type_definition(),
};

const TemplatedString_schema = {
	// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--0.3.7.7--TypedString--PropertySchemaToRegex--TemplatedString',
	...TemplatedString.generate_schema_definition(),
};

export default new PrecompileValidators(
	{
		remove_dataCtxKeys: {
			[TemplatedString_schema.$id]: [
				'parentData',
				'parentDataProperty',
			],
		},
		specify_types: {
			[ConstString.$id]: [
				'ConstString',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/ConstString.ts',
			],
			[EnumString.$id]: [
				'EnumString',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/EnumString.ts',
			],
			[NamedList.$id]: [
				'NamedList_type',
				'../../src/version-specific/0.3.7.7/NamedList.ts',
			],
			[FlexibleArray__items.$id]: [
				{name: 'FlexibleArray_type', args: ['items']},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/TypedString/FlexibleArray.ts',
			],
			[FlexibleArray__prefixItems.$id]: [
				{name: 'FlexibleArray_type', args: ['prefixItems']},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/TypedString/FlexibleArray.ts',
			],
			[PatternString.$id]: [
				'PatternString_type',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/PatternString.ts',
			],
			[TypedString_object_schema.$id]: [
				'TypedString_Object_type',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/Object.ts',
			],
			[PrefixedString_schemas.non_quoted.$id]: [
				{name: 'PrefixedString_type', args: ['non_quoted']},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/PrefixedString.ts',
			],
			[PrefixedString_schemas.quoted.$id]: [
				{name: 'PrefixedString_type', args: ['quoted']},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/PrefixedString.ts',
			],
			[PrefixedString_schemas.single_quoted.$id]: [
				{name: 'PrefixedString_type', args: ['single_quoted']},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/PrefixedString.ts',
			],
			[PrefixedString_schemas.version_specific_default.$id]: [
				{
					name: 'PrefixedString_type',
					args: ['version_specific_default'],
				},

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.3.7.7/PrefixedString.ts',
			],
			[$ref_schema.$id]: [
				'$ref_type',
				'@signpostmarv/json-schema-typescript-codegen',
			],
			[TemplatedString_schema.$id]: [
				'templated_string_type',
				'@signpostmarv/json-schema-typescript-codegen/ajv',
			],
			[Empty.$id]: [
				'Empty_type',
				'../../src/version-specific/0.3.7.7/TypedString/Empty.ts',
			],
			[ObjectSchema.$id]: [
				'Object_type',
				'../../src/version-specific/0.3.7.7/TypedString/Object.ts',
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
		PropertySchemaToRegex_ConstString: ConstString,
		PropertySchemaToRegex_EnumString: EnumString,
		PropertySchemaToRegex_NamedList: NamedList,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_FlexibleArray__items: FlexibleArray__items,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_FlexibleArray__prefixItems: FlexibleArray__prefixItems,
		PropertySchemaToRegex_PatternString: PatternString,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_TypedString_object: TypedString_object_schema,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_non_quoted: PrefixedString_schemas.non_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_quoted: PrefixedString_schemas.quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_single_quoted: PrefixedString_schemas.single_quoted,

		// oxlint-disable-next-line @stylistic/max-len
		PropertySchemaToRegex_PrefixedString_version_specific_default: PrefixedString_schemas.version_specific_default,

		PropertySchemaToRegex_ref: $ref_schema,
		PropertySchemaToRegex_TemplatedString: TemplatedString_schema,
		Empty,
		ObjectSchema,
	},
);
