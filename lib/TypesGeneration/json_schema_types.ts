export type integer__string = {'$ref': '#/definitions/integer-string'};
export type decimal__string = {'$ref': '#/definitions/decimal-string'};

export type RGBA = {
	properties: {
		R: integer__string,
		G: integer__string,
		B: integer__string,
		A: integer__string
	}|{
		R: decimal__string,
		G: decimal__string,
		B: decimal__string,
		A: decimal__string
	}
};


export const array_string_schema = {
	type: 'object',
	required: [
		'type',
		'minLength',
		'array_string',
	],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		array_string: {
			type: 'object',
			required: [
				'type',
				'minItems',
				'items',
			],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'array'},
				minItems: {type: 'number', minimum: 1},
				maxItems: {type: 'number', minimum: 1},
				items: {type: 'object'},
			},
		},
	},
};
