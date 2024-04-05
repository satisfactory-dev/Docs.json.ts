import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	local_ref,
} from '../StringStartsWith';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_parent_type,
	UnrealEngineString_schema_definitions,
} from './UnrealEngineString';
import {
	const_schema_type,
	typed_string_const_schema,
} from './TypedStringConst';
import {
	ValueToRegexFormatter,
} from './ValueToRegexFormatter';
import {
	enum_schema_type,
	typed_string_enum_schema,
} from './TypedStringEnum';

type typed_string_sub_types =
	| {
		$ref: local_ref<string>,
	}
	| const_schema_type
	| enum_schema_type
	| UnrealEngineString_parent_type;

type typed_string_object_type =
	| typed_string_sub_types
	| typed_string_parent_type;

export type typed_string_inner_object_type = {
	required: [string, ...string[]],
	properties: {
		[key: string]: (
			| typed_string_object_type
			)
	},
};

type typed_string_inner_array_items_type =
	| typed_string_sub_types
	| typed_string_parent_type;

export type typed_string_inner_array_type = {
	minItems: number,
	maxItems?: number,
	items:
		| typed_string_inner_array_items_type
		| {
			oneOf: [
				typed_string_inner_array_items_type,
				...typed_string_inner_array_items_type[]
			],
		}
		| typed_string_inner_array_prefixItems_type
};

export type typed_string_inner_array_prefixItems_type = {
	items: false,
	minItems: number,
	maxItems?: number,
	prefixItems: [typed_string_sub_types, ...typed_string_sub_types[]],
};

type typed_string_inner_type =
	| typed_string_inner_object_type
	| typed_string_inner_array_type
	| typed_string_inner_array_prefixItems_type;

export type typed_string_parent_type = {
	type: 'string',
	minLength: 1,
	typed_string: typed_string_inner_type,
};

const property_regex = '^[A-Za-z][A-Za-z0-9_\\[\\]]*$';

export function generate_object_parent_schema() {
	return {$ref: '#/definitions/typed_string_parent_type'};
}

export function generate_typed_string_definitions(
	definitions:local_ref<string>[]
) {
	return {
		...UnrealEngineString_schema_definitions,
		typed_string_subtypes: {
			oneOf: [
				{
					type: 'object',
					required: ['$ref'],
					additionalProperties: false,
					properties: {
						$ref: {
							type: 'string',
							enum: definitions,
						},
					},
				},
				UnrealEngineString_parent_schema,
				typed_string_const_schema,
				typed_string_enum_schema,
				{$ref: '#/definitions/typed_string_parent_type'},
			],
		},
		typed_string_parent_type: {
			type: 'object',
			required: ['type', 'minLength', 'typed_string'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				typed_string: {
					oneOf: [
						{$ref: '#/definitions/typed_string_object_type'},
						{$ref: '#/definitions/typed_string_array_type'},
						{$ref: '#/definitions/typed_string_prefixItems_type'},
					],
				},
			},
		},
		typed_string_object_type: {
			type: 'object',
			required: [
				'properties',
			],
			additionalProperties: false,
			properties: {
				required: {
					type: 'array',
					minItems: 1,
					items: {
						type: 'string',
						minLength: 1,
					},
				},
				properties: {
					type: 'object',
					additionalProperties: false,
					patternProperties: {
						[property_regex]: {
							$ref: '#/definitions/typed_string_subtypes',
						},
					},
				},
			},
		},
		typed_string_array_type: {
			type: 'object',
			required: [
				'minItems',
				'items',
			],
			additionalProperties: false,
			properties: {
				minItems: {
					type: 'number',
					'minimum': 0,
				},
				maxItems: {
					type: 'number',
					'minimum': 1,
				},
				items: {
					oneOf: [
						{$ref: '#/definitions/typed_string_subtypes'},
						{
							type: 'object',
							required: ['oneOf'],
							additionalProperties: false,
							properties: {
								oneOf: {
									type: 'array',
									minItems: 1,
									uniqueItems: true,
									items: {
										$ref: `#/definitions/typed_string_subtypes`,
									},
								},
							},
						},
						{$ref: '#/definitions/typed_string_prefixItems_type'},
					],
				},
			},
		},
		typed_string_prefixItems_type: {
			type: 'object',
			required: [
				'minItems',
				'items',
				'prefixItems',
			],
			additionalProperties: false,
			properties: {
				items: {type: 'boolean', const: false},
				minItems: {
					type: 'number',
					'minimum': 0,
				},
				maxItems: {
					type: 'number',
					'minimum': 1,
				},
				prefixItems: {
					type: 'array',
					minItems: 1,
					items: {$ref: '#/definitions/typed_string_subtypes'},
				},
			},
		},
	};
}

export class TypedString
{
	private already_configured:WeakSet<Ajv> = new WeakSet<Ajv>();
	private static _instance?:TypedString;

	protected constructor() {
	}

	configure_ajv(
		definitions:{[key: string]: SchemaObject},
		ajv:Ajv
	) {
		if (this.already_configured.has(ajv)) {
			return;
		}

		const local_refs = Object.keys(definitions).map(local_ref);

		this.already_configured.add(ajv);

		const meta_schema = {
			definitions: generate_typed_string_definitions(local_refs),
			oneOf: [
				{$ref: '#/definitions/typed_string_object_type'},
				{$ref: '#/definitions/typed_string_array_type'},
				{$ref: '#/definitions/typed_string_prefixItems_type'},
			],
		};

		const formatter = new ValueToRegexFormatter(
			definitions
		);

		ajv.addKeyword({
			keyword: 'typed_string',
			type: 'string',
			metaSchema: meta_schema,
			macro: (schema:typed_string_inner_type) : {pattern: string} => {
				return formatter.pattern_from_value(schema);
			},
		});
	}

	static instance(): TypedString
	{
		if (!this._instance) {
			this._instance = new this();
		}

		return this._instance;
	}
}
