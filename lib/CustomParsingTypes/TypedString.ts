import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	property_regex,
} from './TypedObjectString';
import {
	local_ref,
} from '../StringStartsWith';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_parent_type, UnrealEngineString_schema_definitions,
} from './UnrealEngineString';
import {
	typed_string_const_schema,
} from './TypedStringConst';

type typed_string_object_type =
	| {
		$ref: local_ref<string>,
	}
	| UnrealEngineString_parent_type
	| typed_string_parent_type;

export type typed_string_parent_type = {
	type: 'string',
	minLength: 1,
	typed_string: {
		type: 'object',
		required: [string, ...string[]],
		properties: {
			[key: string]: (
				| typed_string_object_type
			)
		},
	},
};

export function generate_default_subtypes(
	definitions:local_ref<string>[]
) : [SchemaObject, ...SchemaObject[]] {
	return [
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
	];
}

function generate_object_meta_schema(
	definitions:local_ref<string>[],
	additional: SchemaObject[] = [],
) : SchemaObject {
	return {
		type: 'object',
		required: [
			'type',
			'additionalProperties',
			'properties',
		],
		additionalProperties: false,
		properties: {
			type: {type: 'string', const: 'object'},
			required: {
				type: 'array',
				minItems: 1,
				items: {type: 'string', minLength: 1},
			},
			additionalProperties: {
				type: 'boolean',
				const: false,
			},
			properties: {
				type: 'object',
				additionalProperties: false,
				patternProperties: {
					[property_regex]: {
						oneOf: [
							...generate_default_subtypes(definitions),
							...additional,
						],
					},
				},
			},
		},
	};
}

export function generate_object_parent_schema(
	refs:local_ref<string>[],
	additional:SchemaObject[] = [],
	max_depth = 0,
	current_depth = 0
) {
	const resolve_max_depth:SchemaObject[] = [];

	if (current_depth < max_depth) {
		resolve_max_depth.push(generate_object_parent_schema(
			refs,
			additional,
			max_depth,
			current_depth + 1
		));
	}

	return {
		type: 'object',
		required: ['type', 'minLength', 'typed_string'],
		additionalProperties: false,
		properties: {
			type: {type: 'string', const: 'string'},
			minLength: {type: 'number', const: 1},
			typed_string: {
				oneOf: [
					generate_object_meta_schema(
						refs,
						[
							...additional,
							...resolve_max_depth,
						]
					),
				],
			} ,
		},
	};
}

export class TypedString
{
	private already_configured:WeakSet<Ajv> = new WeakSet<Ajv>();
	private static _instance?:TypedString;

	protected constructor() {
	}

	configure_ajv(ajv:Ajv, local_refs:local_ref<string>[])
	{
		if (this.already_configured.has(ajv)) {
			return;
		}

		this.already_configured.add(ajv);

		const meta_schema = {
			definitions: {
				...UnrealEngineString_schema_definitions,
			},
			oneOf: [
				generate_object_meta_schema(
					local_refs,
					[
						generate_object_parent_schema(local_refs),
					]
				),
			],
		};

		ajv.addKeyword({
			keyword: 'typed_string',
			metaSchema: meta_schema,
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
