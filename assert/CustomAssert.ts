import assert from 'node:assert/strict';
import {
	ExpressionResult,
} from '../lib/DataDiscovery/Generator';
import {
	Node,
	NodeArray,
} from 'typescript';

export function value_matches_ExpressionResult(
	maybe: unknown,
	expression_result: ExpressionResult,
	message?:string|Error
): asserts maybe is typeof expression_result.expression {
	assert.deepEqual(maybe, expression_result.expression, message);
}

export function array_has_size(
	maybe:unknown[]|NodeArray<Node>,
	size:number,
	message?:string|Error
): asserts maybe is ((unknown[]) & {length: typeof size}) {
	assert.equal(maybe.length, size, message);
}

export function is_instanceof<T>(
	maybe:unknown,
	of: {
		[Symbol.hasInstance](instance:unknown): boolean;
	},
	message?:string|Error
): asserts maybe is T & typeof of {
	assert.equal(maybe instanceof of, true, message);
}

export function not_undefined<T = unknown>(
	maybe:T|undefined,
	message?:string|Error
) : asserts maybe is Exclude<typeof maybe, undefined> {
	assert.equal(undefined !== maybe, true, message);
}

export function object_has_property(
	maybe: unknown,
	property:string,
	message?:string|Error
): asserts maybe is (
	& {[key: string]: unknown}
	& {[key in typeof property]: unknown}
) {
	assert.equal(typeof maybe, 'object', message);
	assert.equal(maybe instanceof Array, false, message);
	assert.equal(
		property in (maybe as {[key: string]: unknown}),
		true,
		message
	);
}
