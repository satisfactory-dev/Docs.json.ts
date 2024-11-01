import ts, {
	IntersectionTypeNode,
} from 'typescript';
import {
	GeneratorDoesDiscovery,
} from '../GeneratorDoesDiscovery';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';

type RawData = {
	allOf: [
		{[key: string]: unknown},
		...{[key: string]: unknown}[]
	],
};

export const schema = {
	type: 'object',
	required: ['allOf'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		allOf: {
			type: 'array',
			minItems: 1,
			items: {type: 'object'},
		},
	},
};

export class allOf extends GeneratorDoesDiscovery<
	RawData,
	IntersectionTypeNode
> {
	constructor(discovery:TypeDefinitionDiscovery) {
		super(
			schema,
			discovery,
		);
	}

	generate(): (raw_data: RawData) => IntersectionTypeNode {
		return (raw_data: RawData) => {
			const source = raw_data.allOf;

			return ts.factory.createIntersectionTypeNode(source.map((e) => {
				return this.discovery.find(e);
			}));
		};
	}
}
