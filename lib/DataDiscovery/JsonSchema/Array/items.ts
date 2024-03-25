import {
	SchemaCompilingGenerator,
} from '../../Generator';
import {
	DataTransformer,
} from '../../../DataTransformer';
import Ajv from 'ajv/dist/2020';

export type items_type =
	| (
		& {[key: string]: unknown}
		& {properties: {[key: string]: unknown}}
	)
	| {type: 'string', const: string};

export type schema_type = {
	type: 'array',
	items: items_type | {oneOf: [items_type, ...items_type[]]},
	minItems: number,
	maxItems: number,
};
const item_schema = {
	type: 'object',
	required: ['properties'],
	properties: {
		properties: {type: 'object'},
	},
};

export const schema = {
	type: 'object',
	required: ['type', 'items'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'array'},
		items: {
			oneOf: [
				{
					type: 'object',
					required: ['type', 'const'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'string'},
						const: {type: 'string'},
					},
				},
				item_schema,
				{
					type: 'object',
					required: ['oneOf'],
					additionalProperties: false,
					properties: {
						oneOf: {
							type: 'array',
							items: item_schema,
							minItems: 1,
						},
					},
				},
			],
		},
		minItems: {type: 'number', minimum: 0},
		maxItems: {type: 'number', minimum: 1},
	},
};

export class items extends SchemaCompilingGenerator<
	schema_type,
	unknown,
	unknown
> {
	private readonly discovery:DataTransformer;
	constructor(ajv: Ajv, discovery: DataTransformer) {
		super(ajv, schema);
		this.discovery = discovery;
	}

	generate() {
		return Promise.resolve((raw_data:unknown) => {
			return raw_data;
		});
	}
}
