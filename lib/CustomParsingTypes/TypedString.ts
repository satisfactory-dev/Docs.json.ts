import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	additional_$defs,
	common_ref,
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
import {
	typed_string_pattern_general_schema_self_testing,
} from './TypedStringPattern';

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

export type typed_string_inner_object_type = (
	& typed_string_inner_object_type_no_required
	& {
	required: [string, ...string[]],
	}
);

export type typed_string_inner_object_type_no_required = {
	properties: {
		[key: string]: (
			| typed_string_object_type
		)
	},
};

export type typed_string_inner_object_pattern_type = {
	minProperties: number,
	patternProperties: {
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
	| typed_string_inner_object_type_no_required
	| typed_string_inner_object_type
	| typed_string_inner_object_pattern_type
	| typed_string_inner_array_type
	| typed_string_inner_array_prefixItems_type;

export type typed_string_parent_type = {
	type: 'string',
	minLength: 1,
	typed_string: typed_string_inner_type,
};

const property_regex = '^[A-Za-z][A-Za-z0-9_\\[\\]]*$';
export const pattern_properties_regex =
	'^\\^\\([A-za-z]+(\\|[A-za-z]+)*\\)\\$$';

export const pattern_properties_schema = {
	type: 'object',
	required: [
		'minProperties',
		'patternProperties',
	],
	additionalProperties: false,
	properties: {
		minProperties: {type: 'number', minimum: 1},
		patternProperties: {
			type: 'object',
			additionalProperties: false,
			minProperties: 1,
			maxProperties: 1,
			patternProperties: {
				[pattern_properties_regex]: {
					$ref: '#/$defs/typed_string_subtypes',
				},
			},
		},
	},
};

export function generate_object_parent_schema() {
	return {$ref: '#/$defs/typed_string_parent_type'};
}

export function generate_typed_string_$defs(
	$defs:local_ref<string>[],
	common_$defs: common_ref<string>[],
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
							enum: [
								...$defs,
								...common_$defs,
							],
						},
					},
				},
				UnrealEngineString_parent_schema,
				typed_string_const_schema,
				typed_string_enum_schema,
				typed_string_pattern_general_schema_self_testing,
				{$ref: '#/$defs/typed_string_parent_type'},
				{
					type: 'object',
					required: ['$ref'],
					additionalProperties: false,
					properties: {
						$ref: {
							type: 'string',
							// eslint-disable-next-line max-len
							pattern: '^(1\\.0|1\\.1)\\.schema\\.json#\\/\\$defs\\/',
						},
					},
				},
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
						{$ref: '#/$defs/typed_string_object_type'},
						{$ref: `#/$defs/typed_string_object_pattern_type`},
						{$ref: '#/$defs/typed_string_array_type'},
						{$ref: '#/$defs/typed_string_prefixItems_type'},
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
							$ref: '#/$defs/typed_string_subtypes',
						},
					},
				},
			},
		},
		typed_string_object_pattern_type: pattern_properties_schema,
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
						{$ref: '#/$defs/typed_string_subtypes'},
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
										$ref: `#/$defs/typed_string_subtypes`,
									},
								},
							},
						},
						{$ref: '#/$defs/typed_string_prefixItems_type'},
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
					items: {$ref: '#/$defs/typed_string_subtypes'},
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
		$defs:{[key: string]: SchemaObject},
		common_$defs: {[key: string]: SchemaObject},
		additional_$defs: additional_$defs,
		ajv:Ajv,
	) {
		if (this.already_configured.has(ajv)) {
			return;
		}

		const local_refs = Object.keys($defs).map(local_ref);
		const common_refs = Object.keys(common_$defs).map(common_ref);
		local_refs.push(...common_refs.map(
			(e): local_ref<string> => (e.substring(18) as local_ref<string>),
		));

		this.already_configured.add(ajv);

		const meta_schema = {
			$defs: generate_typed_string_$defs(
				local_refs,
				common_refs,
			),
			oneOf: [
				{$ref: '#/$defs/typed_string_object_type'},
				{$ref: '#/$defs/typed_string_object_pattern_type'},
				{$ref: '#/$defs/typed_string_array_type'},
				{$ref: '#/$defs/typed_string_prefixItems_type'},
			],
		};

		const formatter = new ValueToRegexFormatter(
			$defs,
			common_$defs,
			additional_$defs,
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
