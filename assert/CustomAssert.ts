import assert from 'assert';
import {
	ExpressionResult,
} from '../lib/DataDiscovery/Generator';

export function value_matches_ExpressionResult(
	maybe: unknown,
	expression_result: ExpressionResult,
	message?:string|Error
): asserts maybe is typeof expression_result.expression {
	assert.deepStrictEqual(maybe, expression_result.expression, message);
}
