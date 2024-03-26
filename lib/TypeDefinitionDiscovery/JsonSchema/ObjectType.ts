import {
	TypeLiteralNode, TypeReferenceNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';
import {
	create_object_type_from_entries, type_reference_node,
} from '../../TsFactoryWrapper';
import {
	GeneratorDoesDiscovery,
} from '../GeneratorDoesDiscovery';

export type RawData = {
	type: 'object',
	required?: [string, ...string[]],
	additionalProperties: false,
	properties: {[key: string]: unknown},
	not?: {
		anyOf: {[key: string]: unknown}
	}|{
		oneOf: {[key: string]: unknown}
	}
};

export const schema = {
	type: 'object',
	required: ['type', 'properties'],
	additionalProperties: false,
	properties: {
		$ref: {type: 'string', pattern: '^#/definitions/'},
		type: {type: 'string', const: 'object'},
		additionalProperties: {type: 'boolean', const: false},
		unevaluatedProperties: {type: 'boolean', const: false},
		required: {
			type: 'array',
			minItems: 1,
			items: {type: 'string'},
		},
		properties: {type: 'object', minProperties: 1},
		not: {
			oneOf: [
				{
					type: 'object',
					required: ['oneOf'],
					additionalProperties: false,
					properties: {
						oneOf: {
							type: 'array',
							minItems: 1,
							items: {type: 'object'},
						},
					},
				},
				{
					type: 'object',
					required: ['anyOf'],
					additionalProperties: false,
					properties: {
						anyOf: {
							type: 'array',
							minItems: 1,
							items: {type: 'object'},
						},
					},
				},
			],
		},
	},
};

export class ObjectType extends GeneratorDoesDiscovery<
	RawData,
	TypeLiteralNode|TypeReferenceNode
> {
	constructor(ajv:Ajv, discovery:TypeDefinitionDiscovery) {
		super(ajv, schema, discovery);
	}

	generate() {
		return (raw_data:RawData) => {
			const type = create_object_type_from_entries(
				Object.entries(raw_data.properties).map((entry) => {
					return [
						entry[0],
						this.discovery.find(entry[1]),
					];
				})
			);

			if ('not' in raw_data) {
				const exclude = this.discovery.find(raw_data.not);

				return type_reference_node('Exclude', type, exclude);
			}

			return type;
		};
	}
}
