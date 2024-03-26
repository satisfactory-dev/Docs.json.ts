import {
	ExpressionResult,
	SchemaCompilingGenerator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../../../DataTransformerDiscovery/NoMatchError';
import ts, {
	AsExpression,
} from 'typescript';
import {
	create_literal,
} from '../../../TsFactoryWrapper';

export type schema_type = {type: 'string', pattern: string};

export const schema = {
	type: 'object',
	required: ['type', 'pattern'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {type: 'string', minLength: 2},
	},
};

export class Pattern extends SchemaCompilingGenerator<
	schema_type,
	string,
	ExpressionResult<AsExpression>
> {
	constructor(ajv: Ajv) {
		super(ajv, schema);
	}

	generate(schema:schema_type) {
		const regex = new RegExp(schema.pattern);

		return Promise.resolve((raw_data: string) => {
			if (!regex.test(raw_data)) {
				throw new NoMatchError({
					schema,
					raw_data,
				}, 'RegExp mismatch');
			}

			return new ExpressionResult(ts.factory.createAsExpression(
				ts.factory.createStringLiteral(raw_data),
				ts.factory.createTypeReferenceNode(
					'StringPassedRegExp',
					[
						create_literal(schema.pattern),
					]
				)
			));
		});
	}
}
