import {
	TypeLiteralNode,
} from 'typescript';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';
import {
	property_regex,
} from '../../CustomParsingTypes/TypedObjectString';
import {
	create_object_type_from_entries,
} from '../../TsFactoryWrapper';
import {
	GeneratorDoesDiscovery,
} from '../GeneratorDoesDiscovery';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	UnrealEngineString,
} from './UnrealEngineString';
import {
	schema as oneOf_or_anyOf_schema,
} from '../JsonSchema/oneOf_or_anyOf';
import {
	Enum,
	schema as enum_schema,
} from '../JsonSchema/String/Enum';
import {
	Const,
	schema as const_schema,
} from '../JsonSchema/String/Const';
import {
	schema as typed_array_string_schema,
	typed_array_string,
} from './typed_array_string';
import {
	AnyGenerator,
} from '../Generator';

export type typed_object_string_RawData = {
	type: 'string',
	minLength: 1,
	typed_object_string: {
		[key: string]:
			| {$ref: string}
			| {[key: string]: unknown}
			| {
				[key: string]:
					| {$ref: string}
					| {[key: string]: unknown}
			}
	},
};

export function generate_typed_object_string_schema(
	$ref_schema:SchemaObject|undefined = undefined
) {
	const oneOf: [SchemaObject, ...SchemaObject[]] = [
		UnrealEngineString_parent_schema,
		{
			type: 'object',
			additionalProperties: false,
			patternProperties: {
				[property_regex]: {type: 'object'},
			},
		},
		oneOf_or_anyOf_schema,
		enum_schema,
		const_schema,
		typed_array_string_schema,
	];

	if ($ref_schema) {
		oneOf.unshift($ref_schema);
	}

	return {
		type: 'object',
		required: ['type', 'minLength', 'typed_object_string'],
		additionalProperties: false,
		definitions: {
			...UnrealEngineString_schema_definitions,
		},
		properties: {
			type: {type: 'string', const: 'string'},
			minLength: {type: 'number', const: 1},
			typed_object_string: {
				type: 'object',
				additionalProperties: false,
				patternProperties: {
					[property_regex]: {
						oneOf,
					},
				},
			},
		},
	};
}


export class typed_object_string extends GeneratorDoesDiscovery<
	typed_object_string_RawData,
	TypeLiteralNode
> {
	private readonly known_types:[
		AnyGenerator,
		...AnyGenerator[],
	];

	constructor(
		ajv:Ajv,
		supported_refs: string[],
		discovery:TypeDefinitionDiscovery
	) {
		const $ref_schema = {
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					type: 'string',
					enum: supported_refs,
				},
			},
		};

		super(
			ajv,
			generate_typed_object_string_schema($ref_schema),
			discovery
		);

		this.known_types = [
			new UnrealEngineString(ajv),
			new Enum(ajv),
			new Const(ajv),
			new typed_array_string(ajv, discovery),
		];
	}

	generate(): (raw_data: typed_object_string_RawData) => TypeLiteralNode {
		return (raw_data:typed_object_string_RawData) : TypeLiteralNode => {
			return create_object_type_from_entries(
				Object.entries(raw_data.typed_object_string).map((entry) => {
					for (const known_type of this.known_types) {
						if (known_type.check(entry[1])) {
							return [
								entry[0],
								known_type.generate()(entry[1] as never),
							];
						}
					}

					if (
						!('$ref' in entry[1])
						&& !('oneOf' in entry[1] || 'anyOf' in entry[1])
					) {
						return [entry[0], create_object_type_from_entries(
							Object.entries(entry[1]).map((inner_entry) => {
								return [
									inner_entry[0],
									this.discovery.find(inner_entry[1]),
								];
							})
						)];
					}

					return [
						entry[0],
						this.discovery.find(entry[1]),
					];
				})
			);
		};
	}
}
