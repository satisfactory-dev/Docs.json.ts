export const schema = {
	type: 'object',
	required: ['type', 'string_starts_with'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		string_starts_with: {type: 'string', minLength: 1},
	},
};
