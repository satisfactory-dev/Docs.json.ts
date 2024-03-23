import {
	TypeLiteralNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
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

type typed_object_string_RawData = {
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


export class typed_object_string extends GeneratorDoesDiscovery<
	typed_object_string_RawData,
	TypeLiteralNode
> {
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
			{
				type: 'object',
				required: ['type', 'minLength', 'typed_object_string'],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'string'},
					minLength: {type: 'number', const: 1},
					typed_object_string: {
						type: 'object',
						additionalProperties: false,
						patternProperties: {
							[property_regex]: {
								oneOf: [
									$ref_schema,
									{
										type: 'object',
										additionalProperties: false,
										patternProperties: {
											[property_regex]: $ref_schema,
										},
									},
								],
							},
						},
					},
				},
			},
			discovery
		);
	}

	generate(): (raw_data: typed_object_string_RawData) => TypeLiteralNode {
		return (raw_data:typed_object_string_RawData) : TypeLiteralNode => {
			return create_object_type_from_entries(
				Object.entries(raw_data.typed_object_string).map((entry) => {
					if (!('$ref' in entry[1])) {
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
