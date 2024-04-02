import {
	GeneratorDoesDiscovery,
} from '../GeneratorDoesDiscovery';
import ts, {
	ArrayTypeNode,
	TupleTypeNode,
} from 'typescript';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';
import {
	minimum_size_array_of_single_type,
} from '../../TsFactoryWrapper';
import {
	object_has_property,
} from '../../CustomParsingTypes/CustomPairingTypes';

type typed_array_string_RawData = {
	type: 'string',
	minLength: 1,
	typed_array_string: {
		type: 'array',
		minItems?: number,
		maxItems?: number,
		items: {[key: string]: unknown},
	},
};

export const schema = {
	type: 'object',
	required: ['type', 'minLength', 'typed_array_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_array_string: {
			type: 'object',
			required: ['type', 'items'],
			properties: {
				type: {type: 'string', const: 'array'},
				minItems: {type: 'number', minimum: 0},
				maxItems: {type: 'number', minimum: 1},
				items: {type: 'object'},
			},
		},
	},
};

export class typed_array_string extends GeneratorDoesDiscovery<
	typed_array_string_RawData,
	TupleTypeNode|ArrayTypeNode
> {
	constructor(discovery:TypeDefinitionDiscovery) {
		super(
			schema,
			discovery
		);
	}

	generate() {
		return (raw_data: typed_array_string_RawData) => {
			if (
				object_has_property<
					'minItems',
					number
				>(
					raw_data.typed_array_string,
					'minItems'
				)
			) {
				return minimum_size_array_of_single_type(
					raw_data.typed_array_string.minItems,
					() => this.discovery.find(
						raw_data.typed_array_string.items
					),
					raw_data.typed_array_string.maxItems
				)
			}

			return ts.factory.createArrayTypeNode(this.discovery.find(
				raw_data.typed_array_string.items
			));
		};
	}
}
