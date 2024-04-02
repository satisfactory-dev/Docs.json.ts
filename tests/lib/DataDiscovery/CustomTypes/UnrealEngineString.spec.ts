import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	UnrealEngineString,
} from '../../../../lib/DataDiscovery/CustomTypes/UnrealEngineString';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	docs,
} from '../../../fixtures/Docs';
import {
	array_has_size,
	is_instanceof, not_undefined,
} from '../../../../assert/CustomAssert';
import {
	RawGenerationResult,
} from '../../../../lib/DataDiscovery/Generator';
import {
	isCallExpression, isIdentifier,
	isLiteralTypeNode,
	isStringLiteral,
	isTokenWithExpectedKind,
	isTypeReferenceNode,
} from '../../../../assert/TypeScriptAssert';
import ts from 'typescript';

const example_UnrealEngineString_value =
	'/Script/CoreUObject.Class\'/Script/FactoryGame.Example\'';

void describe('UnrealEngineString.convert_unknown()', () => {
	const discovery = new DataDiscovery(docs);
	const instance = new UnrealEngineString(discovery);

	void it('converts the default UnrealEngineString', async () => {
		const {expression} = await instance.convert_unknown(
			{
				type: 'string',
				minLength: 1,
				UnrealEngineString: true,
			},
			example_UnrealEngineString_value
		);

		isCallExpression(expression);
		not_undefined(expression.typeArguments);
		array_has_size(expression.typeArguments, 2);
		isTokenWithExpectedKind(
			expression.typeArguments[0],
			ts.SyntaxKind.StringKeyword
		);
		isTokenWithExpectedKind(
			expression.typeArguments[1],
			ts.SyntaxKind.StringKeyword
		);
	});

	void it('converts a left-only UnrealEngineString', async () => {
		const {expression} = await instance.convert_unknown(
			{
				type: 'string',
				minLength: 1,
				UnrealEngineString: {
					left: '/foo',
				},
			},
			'/foo\'/Script/FactoryGame.Example\''
		);

		isCallExpression(expression);
		not_undefined(expression.typeArguments);
		array_has_size(expression.typeArguments, 2);
		const [left, right] = expression.typeArguments;
		isLiteralTypeNode(left);
		isStringLiteral(left.literal);
		assert.equal(left.literal.text, '/foo');
		isTokenWithExpectedKind(
			right,
			ts.SyntaxKind.StringKeyword
		);
	});

	void it('converts a right-only UnrealEngineString (string)', async () => {
		const {expression} = await instance.convert_unknown(
			{
				type: 'string',
				minLength: 1,
				UnrealEngineString: {
					right: '/Script/FactoryGame.Example',
				},
			},
			'/foo\'/Script/FactoryGame.Example\''
		);

		isCallExpression(expression);
		not_undefined(expression.typeArguments);
		array_has_size(expression.typeArguments, 2);
		const [left, right] = expression.typeArguments;
		isTokenWithExpectedKind(
			left,
			ts.SyntaxKind.StringKeyword
		);
		isLiteralTypeNode(right);
		isStringLiteral(right.literal);
		assert.equal(right.literal.text, '/Script/FactoryGame.Example');
	});

	void it('converts a right-only UnrealEngineString (prefix)', async () => {
		const {expression} = await instance.convert_unknown(
			{
				type: 'string',
				minLength: 1,
				UnrealEngineString: {
					right: {
						starts_with: '/Script/FactoryGame.',
					},
				},
			},
			'/foo\'/Script/FactoryGame.Example\''
		);

		isCallExpression(expression);
		not_undefined(expression.typeArguments);
		array_has_size(expression.typeArguments, 2);
		const [left, right] = expression.typeArguments;
		isTokenWithExpectedKind(
			left,
			ts.SyntaxKind.StringKeyword
		);
		isTypeReferenceNode(right);
		isIdentifier(right.typeName);
		assert.equal(right.typeName.text, 'StringStartsWith');
		not_undefined(right.typeArguments);
		array_has_size(right.typeArguments, 1);
		isLiteralTypeNode(right.typeArguments[0]);
		isStringLiteral(right.typeArguments[0].literal);
		assert.equal(
			right.typeArguments[0].literal.text,
			'/Script/FactoryGame.'
		);
	});
});

void describe('UnrealEngineString.matches()', () => {
	const discovery = new DataDiscovery(docs);
	const instance = new UnrealEngineString(discovery);

	void it('matches', async () => {
		const value = await instance.matches(
			example_UnrealEngineString_value
		);

		is_instanceof(value, RawGenerationResult);
		assert.equal(await value?.result(), instance);
	});
	void it('doesn\'t match', async () => {
		const value = await instance.matches('foo');

		assert.equal(undefined === value, true);
	});
});
