import ts, {
	IntersectionTypeNode,
	TypeLiteralNode, TypeReferenceNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';
import {
	adjust_class_name,
	create_object_type_from_entries, type_reference_node,
} from '../../TsFactoryWrapper';
import {
	GeneratorDoesDiscovery,
} from '../GeneratorDoesDiscovery';
import {
	is_string,
} from '../../StringStartsWith';

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

type possible = TypeLiteralNode|TypeReferenceNode|IntersectionTypeNode;

export class ObjectType extends GeneratorDoesDiscovery<
	RawData,
	possible
> {
	constructor(ajv:Ajv, discovery:TypeDefinitionDiscovery) {
		super(ajv, schema, discovery);
	}

	generate() {
		return (raw_data:RawData) => {
			let type:possible = create_object_type_from_entries(
				Object.entries(raw_data.properties).map((entry) => {
					return [
						entry[0],
						this.discovery.find(entry[1]),
					];
				})
			);

			if ('not' in raw_data) {
				const exclude = this.discovery.find(raw_data.not);

				type = type_reference_node('Exclude', type, exclude);
			} else if ('$ref' in raw_data && is_string(raw_data.$ref)) {
				type = ts.factory.createIntersectionTypeNode([
					type,
					type_reference_node(adjust_class_name(raw_data.$ref.substring(14))),
				]);
			}

			return type;
		};
	}
}
