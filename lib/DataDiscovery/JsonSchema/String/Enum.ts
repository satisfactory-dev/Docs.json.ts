import {
	SecondaryCheckSchemaCompilingGenerator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';
import {
	is_string,
} from '../../../StringStartsWith';
import {NoMatchError} from '../../../DataTransformerDiscovery/NoMatchError';

export const schema = {
	type: 'object',
	required: ['type', 'enum'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		enum: {type: 'array', minItems: 1, items: {type: 'string'}},
	},
};

export class Enum extends SecondaryCheckSchemaCompilingGenerator<
	{type: 'string', enum: [string, ...string[]]},
	string,
	string|boolean|undefined
> {
	constructor(ajv: Ajv) {
		super(ajv, schema);
	}

	generate(schema:{type: 'string', enum: [string, ...string[]]}) {
		if (
			schema.enum.includes('True')
			&& schema.enum.includes('False')
			&& (
				2 === schema.enum.length
				|| (
					3 === schema.enum.length
					&& schema.enum.includes('')
				)
			)
		) {

			return Promise.resolve((raw_data: string) => {
				return '' === raw_data ? undefined : ('True' === raw_data);
			});
		}

		return Promise.resolve((raw_data: string) => {
			return raw_data;
		});
	}

	secondary_check(
		schema_data: { type: 'string'; enum: [string, ...string[]]; },
		raw_data: unknown
	) {
		this._secondary_errors = undefined;

		const result = (
			is_string(raw_data)
			&& schema_data.enum.includes(raw_data)
		);

		if (!result) {
			this._secondary_errors = [new NoMatchError({
				raw_data,
				expecting: schema_data.enum,
			})];
		}

		return Promise.resolve(result);
	}
}
