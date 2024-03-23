import {
	GeneratorDoesDiscovery,
} from '../GeneratorDoesDiscovery';
import ts, {
	ArrayTypeNode,
	TupleTypeNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';
import {
	object_has_property,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	minimum_size_array_of_single_type,
} from '../../TsFactoryWrapper';

type RawData = {
	type: 'array',
	minItems?: 1,
	maxItems?: 1,
	items: {[key: string]: unknown},
};

export class ArrayType extends GeneratorDoesDiscovery<
	RawData,
	TupleTypeNode | ArrayTypeNode
> {
	constructor(ajv: Ajv, discovery:TypeDefinitionDiscovery) {
		super(
			ajv,
			{
				type: 'object',
				required: ['type', 'items'],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'array'},
					minItems: {type: 'number', minimum: 0},
					maxItems: {type: 'number', minimum: 1},
					items: {type: 'object'},
				},
			},
			discovery,
		);
	}


	generate() {
		return (raw_data: RawData) => {
			if (
				object_has_property<
					'minItems',
					number
				>(
					raw_data,
					'minItems'
				)
			) {
				return minimum_size_array_of_single_type(
					raw_data.minItems,
					() => this.discovery.find(
						raw_data.items
					),
					raw_data.maxItems
				)
			}

			return ts.factory.createArrayTypeNode(this.discovery.find(
				raw_data.items
			));
		};
	}
}
