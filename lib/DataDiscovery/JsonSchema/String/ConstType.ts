import {
	SecondaryCheckSchemaCompilingGenerator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';
import {
	is_string,
} from '../../../StringStartsWith';
import {
	NoMatchError,
} from '../../../Exceptions';

export type schema_type = {type: 'string', const: string};

export const schema = {
	type: 'object',
	required: ['type', 'const'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		const: {type: 'string'},
	},
};

export class ConstType extends SecondaryCheckSchemaCompilingGenerator<
	schema_type,
	string,
	string
> {
	constructor(ajv: Ajv) {
		super(ajv, schema);
	}

	generate(schema:schema_type) {
		return Promise.resolve(() => {
			return schema.const;
		});
	}

	secondary_check(
		schema_data: schema_type,
		raw_data: unknown
	) {
		this._secondary_errors = undefined;
		const result = (
			is_string(raw_data)
			&& raw_data === schema_data.const
		);

		if (!result) {
			this._secondary_errors = [new NoMatchError({
				raw_data,
				expecting: schema_data.const,
			})];
		}

		return Promise.resolve(result);
	}
}
