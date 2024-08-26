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
	object_has_non_empty_array_property,
	object_has_property,
} from '@satisfactory-dev/predicates.ts';
import {
	minimum_size_array_of_single_type,
} from '../../TsFactoryWrapper';
import {
	NoMatchError,
} from '../../Exceptions';

type RawData = {
	type: 'array',
	minItems?: 1,
	maxItems?: 1,
	items: {[key: string]: unknown}|false,
	prefixItems?: {$ref: string}[],
};

export class ArrayType extends GeneratorDoesDiscovery<
	RawData,
	TupleTypeNode | ArrayTypeNode
> {
	constructor(
		supported_refs: string[],
		discovery:TypeDefinitionDiscovery,
	) {
		super(
			{
				type: 'object',
				required: ['type', 'items'],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'array'},
					minItems: {type: 'number', minimum: 0},
					maxItems: {type: 'number', minimum: 1},
					items: {
						oneOf: [
							{type: 'object'},
							{type: 'boolean', const: false},
						],
					},
					uniqueItems: {type: 'boolean', const: true},
					prefixItems: {
						type: 'array',
						minItems: 1,
						items: {
							type: 'object',
							required: ['$ref'],
							additionalProperties: false,
							properties: {
								type: {type: 'string', const: 'object'},
								$ref: {
									type: 'string',
									enum: supported_refs,
								},
								unevaluatedProperties: {
									type: 'boolean',
									const: false,
								},
							},
						},
					},
				},
			},
			discovery,
		);
	}

	generate() {
		return (raw_data: RawData) => {
			if (false === raw_data.items) {
				if (
					!object_has_non_empty_array_property(
						raw_data,
						'prefixItems',
					)
				) {
					throw new NoMatchError(
						raw_data,
						'Must specify prefixItems when items is false!',
					);
				}

				return ts.factory.createTupleTypeNode(
					raw_data.prefixItems.map(e => this.discovery.find(e)),
				);
			}

			if (
				object_has_property<
					'minItems',
					number
				>(
					raw_data,
					'minItems',
				)
			) {
				return minimum_size_array_of_single_type(
					raw_data.minItems,
					() => this.discovery.find(
						raw_data.items,
					),
					raw_data.maxItems,
				)
			}

			return ts.factory.createArrayTypeNode(this.discovery.find(
				raw_data.items,
			));
		};
	}
}
