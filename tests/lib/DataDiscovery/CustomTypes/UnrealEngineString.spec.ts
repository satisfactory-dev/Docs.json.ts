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
import {
	UnrealEngineString_parent_type,
} from '../../../../lib/CustomParsingTypes/UnrealEngineString';
import {
	is_string,
} from '../../../../lib/StringStartsWith';

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
		const convert_args:(
			| [ // rejects
				UnrealEngineString_parent_type,
				string,
				string,
			]
			| [ // passes
				UnrealEngineString_parent_type,
				string,
			]
		)[] = [
			[
				{
					type: 'string',
					minLength: 1,
					UnrealEngineString: {
						left: 'foo',
					},
				},
				'',
				'Not an UnrealEngineString!',
			],
			[
				{
					type: 'string',
					minLength: 1,
					UnrealEngineString: true,
				},
				'',
				'Not an UnrealEngineString!',
			],
			[
				{
					type: 'string',
					minLength: 1,
					UnrealEngineString: true,
				},
				example_UnrealEngineString_value,
			],
		];

		void it('rejects', async () => {
			for (
				const entry of convert_args.filter(
					maybe => is_string(maybe[2])
				)
			) {
				const [schema, raw_data, message] = entry;

				await rejects_partial_match(
					instance.convert(schema, raw_data),
					{
						property: {
							schema,
							raw_data,
						},
						message,
					}
				);
			}
		});

		void it('passes', async () => {
			for (
				const entry of convert_args.filter(
					maybe => 2 === maybe.length
				)
			) {
				const [schema, raw_data] = entry;

				const promise = instance.convert(schema, raw_data);

				await assert.doesNotReject(promise);

				const result = (await promise).expression;

				ts_assert.isCallExpression(result);
			}
		});
	});
})
