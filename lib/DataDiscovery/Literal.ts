import {
	property_name_or_computed,
} from '../TsFactoryWrapper';
import {
	NoMatchError,
} from '../Exceptions';
import {
	ExpressionResult,
	GenerationResult,
} from './Generator';
import {
	is_string,
} from '../StringStartsWith';
import {
	value_is_non_array_object,
} from '../CustomParsingTypes/CustomPairingTypes';
import ts, {
	ArrayLiteralExpression,
	Expression,
	FalseLiteral,
	Identifier,
	ObjectLiteralExpression,
	StringLiteral,
	TrueLiteral,
} from 'typescript';

export class Literal
{
	async object_literal(
		from:{[key: string]: unknown},
	): Promise<ObjectLiteralExpression> {
		return ts.factory.createObjectLiteralExpression(
			await Promise.all(Object.entries(from).map(async (entry) => {
				try {
					const value = this.value_literal(entry[1]);

					return ts.factory.createPropertyAssignment(
						property_name_or_computed(entry[0]),
						await value
					);
				} catch (error) {
					throw new NoMatchError(
						{
							property: entry[0],
							original_value: entry[1],
							error,
						},
						'Failed to convert property value!'
					);
				}
			}))
		);
	}

	async value_literal(from: unknown) : Promise<
		| StringLiteral
		| TrueLiteral
		| FalseLiteral
		| Identifier
		| ArrayLiteralExpression
		| Expression
		| ObjectLiteralExpression
	> {
		performance.mark('start');
		from = from instanceof GenerationResult ? await from.result() : from;

		if (is_string(from)) {
			const result = ts.factory.createStringLiteral(from);
			performance.measure('value_literal(createStringLiteral)', 'start');

			return result;
		} else if (from instanceof ExpressionResult) {
			const result = (from as ExpressionResult).expression;
			performance.measure('value_literal(ExpressionResult)', 'start');

			return result;
		} if (value_is_non_array_object(from)) {
			const result = await this.object_literal(from);
			performance.measure('value_literal(object_literal)', 'start');

			return result;
		} else if ('boolean' === typeof from) {
			const result = from ? ts.factory.createTrue():ts.factory.createFalse();
			performance.measure('value_literal(boolean)', 'start');

			return result;
		} else if (undefined === from) {
			const result = ts.factory.createIdentifier('undefined');
			performance.measure('value_literal(undefined)', 'start');

			return result;
		} else if (!(from instanceof Array)) {
			throw new NoMatchError(from, 'not an array!');
		}

		const result = ts.factory.createArrayLiteralExpression(
			await Promise.all(from.map(e => this.value_literal(e)))
		);

		performance.measure('value_literal(array)', 'start');

		return result;
	}
}
