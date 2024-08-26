import {
	Generator,
} from '../Generator';
import {
	KeywordTypeNode,
	TypeReferenceNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
import {
	create_literal,
	create_type, possibly_create_lazy_union, type_reference_node,
} from '../../TsFactoryWrapper';

export class StringType extends Generator<{type: 'string'}, KeywordTypeNode>
{
	constructor(ajv:Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', minimum: 0, not: {const: 1}},
			},
		});
	}
	generate(): (raw_data: {type: 'string'}) => KeywordTypeNode {
		return () => create_type('string');
	}
}

export class NonEmptyString extends Generator<
	{type: 'string', minLength: 1},
	TypeReferenceNode
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'minLength'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
			},
		});
	}

	generate() {
		return () => type_reference_node(
			'Exclude',
			create_type('string'),
			create_literal(''),
		);
	}
}

export type not_matching_string_type = {
	type: 'string',
	enum: [string, ...string[]],
};

type RawDataNonEmptyWithExclusions = {
	type: 'string',
	minLength: 1,
	not: not_matching_string_type,
};

export const not_matching_string_schema = {
	type: 'object',
	required: ['type', 'enum'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		enum: {
			type: 'array',
			minItems: 1,
			uniqueItems: true,
			items: {
				type: 'string',
				minLength: 1,
			},
		},
	},
};

export class NonEmptyStringWithExclusions extends Generator<
	RawDataNonEmptyWithExclusions,
	TypeReferenceNode
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'minLength'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				not: not_matching_string_schema,
			},
		});
	}

	generate() {
		return (raw_data:RawDataNonEmptyWithExclusions) => type_reference_node(
			'Exclude',
			create_type('string'),
			possibly_create_lazy_union([
				'',
				...raw_data.not.enum,
			]),
		);
	}
}
