import {
	SchemaCompilingGenerator,
} from '../../Generator';
import {
	DataTransformer,
} from '../../../DataTransformer';
import Ajv from 'ajv/dist/2020';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_schema_definitions,
} from '../../../CustomParsingTypes/UnrealEngineString';
import {
	schema as enum_schema,
} from '../String/Enum';

export type items_type =
	| (
		& {[key: string]: unknown}
		& {properties: {[key: string]: unknown}}
	)
	| {type: 'string', const: string};

export type schema_type = {
	type: 'array',
	items: items_type | {oneOf: [items_type, ...items_type[]]},
	minItems: number,
	maxItems: number,
};
const item_schema = {
	type: 'object',
	required: ['properties'],
	properties: {
		properties: {type: 'object'},
	},
};
const const_schema = {
	type: 'object',
	required: ['type', 'const'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		const: {type: 'string'},
	},
};

const schema_items = [

	const_schema,
	item_schema,
	enum_schema,
	{
		type: 'object',
		required: ['oneOf'],
		additionalProperties: false,
		properties: {
			oneOf: {
				type: 'array',
				items: {
					anyOf: [
						item_schema,
						UnrealEngineString_parent_schema,
						const_schema,
					],
				},
				minItems: 1,
			},
		},
	},
	UnrealEngineString_parent_schema,
	{
		type: 'object',
		required: ['type', 'minLength', 'typed_object_string'],
		additionalProperties: false,
		properties: {
			type: {type: 'string', const: 'string'},
			minLength: {type: 'number', const: 1},
			typed_object_string: {
				type: 'object',
				minProperties: 1,
			},
		},
	},
];

export const schema = {
	type: 'object',
	required: ['type', 'items'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'array'},
		items: {
			anyOf: [
				...schema_items,
				{
					type: 'object',
					required: ['oneOf'],
					additionalProperties: false,
					properties: {
						oneOf: {
							type: 'array',
							minItems: 1,
							items: {
								anyOf: schema_items,
							},
						},
					},
				},
			],
		},
		minItems: {type: 'number', minimum: 0},
		maxItems: {type: 'number', minimum: 1},
	},
};

export class items extends SchemaCompilingGenerator<
	schema_type,
	unknown,
	unknown
> {
	private readonly discovery:DataTransformer;
	constructor(ajv: Ajv, discovery: DataTransformer) {
		super(ajv, {
			definitions: {
				...UnrealEngineString_schema_definitions,
			},
			...schema,
		});
		this.discovery = discovery;
	}

	generate() {
		return Promise.resolve((raw_data:unknown) => {
			return raw_data;
		});
	}
}
