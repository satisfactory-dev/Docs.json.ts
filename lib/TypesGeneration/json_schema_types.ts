export type integer__string = {$ref: '#/definitions/integer-string'};
export type decimal__string = {$ref: '#/definitions/decimal-string'};

export type RGBA = {
	properties:
		| {
				R: integer__string;
				G: integer__string;
				B: integer__string;
				A: integer__string;
		  }
		| {
				R: decimal__string;
				G: decimal__string;
				B: decimal__string;
				A: decimal__string;
		  };
};

export type array_string_type = {
	type: 'string';
	minLength: 1;
	array_string: {
		type: 'array';
		minItems: number;
		items: object;
	} & ({maxItems: number} | {});
};

export function generate_array_string_schema(
	items: {type: 'object'} & (
		| {
				required: string[];
		  }
		| {}
	) &
		(
			| {
					properties: {[key: string]: {[key: string]: any}};
			  }
			| {}
		) &
		(
			| {
					additionalProperties: false;
			  }
			| {}
		) = {type: 'object'}
) {
	return {
		type: 'object',
		required: ['type', 'array_string'],
		additionalProperties: false,
		properties: {
			type: {type: 'string', const: 'string'},
			minLength: {type: 'number', const: 1},
			array_string: {
				type: 'object',
				required: ['type', 'minItems', 'items'],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'array'},
					minItems: {type: 'number', minimum: 1},
					maxItems: {type: 'number', minimum: 1},
					items,
				},
			},
		},
	};
}

export const array_string_schema = generate_array_string_schema();
