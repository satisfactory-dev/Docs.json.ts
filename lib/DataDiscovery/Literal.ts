import {
	property_name_or_computed,
} from '../TsFactoryWrapper';
import {
	NoMatchError,
} from '../Exceptions';
import {
	ExpressionResult,
} from './Generator';
import {
	is_string,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';
import ts, {
	ArrayLiteralExpression,
	Expression,
	FalseLiteral,
	Identifier,
	ObjectLiteralExpression,
	PropertyAssignment,
	StringLiteral,
	TrueLiteral,
} from 'typescript';

export class Literal
{
	async array_literal(from:unknown[]): Promise<ArrayLiteralExpression>
	{
		const items:Expression[] = [];

		for (const e of from) {
			items.push(await this.value_literal(e));
		}

		return ts.factory.createArrayLiteralExpression(
			items,
		);
	}

	async object_literal(
		from:{[key: string]: unknown},
	): Promise<ObjectLiteralExpression> {
		const properties:PropertyAssignment[] = [];

		for (const entry of Object.entries(from)) {
			try {
				const value = this.value_literal(entry[1]);

				properties.push(ts.factory.createPropertyAssignment(
					property_name_or_computed(entry[0]),
					await value,
				));
			} catch (error) {
				throw new NoMatchError(
					{
						property: entry[0],
						original_value: entry[1],
						error,
					},
					'Failed to convert property value!',
				);
			}
		}

		return ts.factory.createObjectLiteralExpression(
			properties,
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
		performance.mark(`${this.constructor.name}.value_literal() start`);

		if (is_string(from)) {
			const result = ts.factory.createStringLiteral(from);
			performance.measure(
				`${this.constructor.name}.value_literal() createStringLiteral`,
				`${this.constructor.name}.value_literal() start`,
			);

			return result;
		} else if (from instanceof ExpressionResult) {
			const result = (from as ExpressionResult).expression;
			performance.measure(
				`${this.constructor.name}.value_literal() ExpressionResult`,
				`${this.constructor.name}.value_literal() start`,
			);

			return result;
		} if (value_is_non_array_object(from)) {
			const result = await this.object_literal(from);
			performance.measure(
				`${this.constructor.name}.value_literal() object_literal`,
				`${this.constructor.name}.value_literal() start`,
			);

			return result;
		} else if ('boolean' === typeof from) {
			const result = from
				? ts.factory.createTrue()
				: ts.factory.createFalse();
			performance.measure(
				`${this.constructor.name}.value_literal() boolean`,
				`${this.constructor.name}.value_literal() start`,
			);

			return result;
		} else if (undefined === from) {
			const result = ts.factory.createIdentifier('undefined');
			performance.measure(
				`${this.constructor.name}.value_literal() undefined`,
				`${this.constructor.name}.value_literal() start`,
			);

			return result;
		} else if (!(from instanceof Array)) {
			throw new NoMatchError(from, 'not an array!');
		}

		const result = await this.array_literal(from);

		performance.measure(
			`${this.constructor.name}.value_literal() array`,
			`${this.constructor.name}.value_literal() start`,
		);

		return result;
	}
}
