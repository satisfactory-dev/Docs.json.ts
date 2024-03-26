import ts, {
	UnionTypeNode,
} from 'typescript';
import {
	GeneratorDoesDiscovery,
} from '../GeneratorDoesDiscovery';
import Ajv from 'ajv/dist/2020';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';

type RawData = {
	oneOf: [
		{[key: string]: unknown},
		...{[key: string]: unknown}[]
	],
}|{
	anyOf: [
		{[key: string]: unknown},
		...{[key: string]: unknown}[]
	],
};

export const schema = {
	oneOf: [
		{
			type: 'object',
			required: ['oneOf'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
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
};

export class oneOf_or_anyOf extends GeneratorDoesDiscovery<
	RawData,
	UnionTypeNode
> {
	constructor(ajv:Ajv, discovery:TypeDefinitionDiscovery) {
		super(
			ajv,
			schema,
			discovery
		);
	}

	generate(): (raw_data: RawData) => UnionTypeNode {
		return (raw_data: RawData) => {
			const source = 'oneOf' in raw_data
				? raw_data.oneOf
				: raw_data.anyOf;

			return ts.factory.createUnionTypeNode(source.map((e) => {
				return this.discovery.find(e);
			}));
		};
	}
}
