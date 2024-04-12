import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	UnrealEngineStringConverter,
} from '../../../../lib/DataDiscovery/CustomTypes/UnrealEngineString';
import {
	rejects_partial_match,
} from '../../../../assert/CustomAssert';
import ts_assert from '@signpostmarv/ts-assert';

void describe('UnrealEngineStringConverter', () => {
const example_UnrealEngineString_value =
	'/Script/CoreUObject.Class\'/Script/FactoryGame.Example\'';

const instance = new UnrealEngineStringConverter();

	void describe('can_convert_schema()', () => {
	void it ('returns false', () => {
		assert.equal(
			instance.can_convert_schema({type: 'string'}),
			false,
		);
	});

	void it('returns true', () => {
		assert.equal(
			instance.can_convert_schema({
				type: 'string',
				minLength: 1,
				UnrealEngineString: true,
			}),
			true,
		);
	});
});

void describe(
		'can_convert_schema_and_raw_data()',
	() => {
		void it('resolves false', async () => {
			assert.equal(
				await instance.can_convert_schema_and_raw_data(
					{type: 'string'},
					example_UnrealEngineString_value
				),
				false
			)
		});

		void it('resolves true', async () => {
			assert.equal(
				await instance.can_convert_schema_and_raw_data(
					{
						type: 'string',
						minLength: 1,
						UnrealEngineString: true,
					},
					example_UnrealEngineString_value,
				),
				true
			);
		});
	}
);

	void describe('convert()', () => {
	void it('rejects', async () => {
		const result = instance.convert(
			{
				type: 'string',
				minLength: 1,
				UnrealEngineString: true,
			},
			''
		);

		await rejects_partial_match(
			result,
			{
				property: {
					schema: {
						type: 'string',
						minLength: 1,
						UnrealEngineString: true,
					},
					raw_data: '',
				},
				message: 'Not an UnrealEngineString!',
			}
		);
	});

	/**
	 * @todo full coverage on instance.convert()
	 * @todo deep check on the call expression
	 */
	void it('passes', async () => {
		const promise = instance.convert(
			{
				type: 'string',
				minLength: 1,
				UnrealEngineString: true,
			},
			example_UnrealEngineString_value
		);

		await assert.doesNotReject(promise);

		const result = (await promise).expression;

		ts_assert.isCallExpression(result);
	});
});
})
