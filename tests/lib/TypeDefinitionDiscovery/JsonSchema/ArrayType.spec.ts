import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ArrayType,
} from '../../../../lib/TypeDefinitionDiscovery/JsonSchema/ArrayType';
import {
	TypeDefinitionWriter,
} from '../../../../lib/TypeDefinitionWriter';
import {
	docs,
} from '../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
} from '../../../../assert/CustomAssert';

void describe('ArrayType', async () => {
	const type_definition_writer = new TypeDefinitionWriter(docs);
	const discovery = await type_definition_writer.discovery;
	const discovered_types = (
		await discovery.types_discovery.discover_types()
	).discovered_types;
	const instance = new ArrayType(
		discovered_types,
		discovery
	);

	void describe('generate', () => {
		void describe('result', () => {
			const result = instance.generate();

			void it(
				'throws if items is false and prefixItems is absent',
				() => {assert.throws(
					() => result({type: 'array', items: false}),
					{
						property: {type: 'array', items: false},
						message:
							'Must specify prefixItems when items is false!',
					}
				)}
			)

			void it('behaves with prefixItems', () => {
				const get_type = () => result({
					type: 'array',
					items: false,
					prefixItems: [
						{
							type: 'string',
							const: 'foo',
						} as unknown as {$ref: string},
					],
				});

				assert.doesNotThrow(get_type);

				const type = get_type();

				ts_assert.isTupleTypeNode(type);
				array_has_size(type.elements, 1);
				ts_assert.isLiteralTypeNode(type.elements[0]);
				ts_assert.isStringLiteral(type.elements[0].literal);
				assert.equal(type.elements[0].literal.text, 'foo');
			})
		})
	})
})
