import {
	describe,
	it,
} from 'node:test';
import {
	ExtendsObject,
// eslint-disable-next-line max-len
} from '../../../../../lib/TypeDefinitionDiscovery/JsonSchema/Object/ExtendsObject';
import {
	docs,
} from '../../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';
import {
	TypeDefinitionWriter,
} from '../../../../../lib/TypeDefinitionWriter';
import {
	local_ref,
} from '../../../../../lib/StringStartsWith';

void describe('ExtendsObject', async () => {
	const type_definition_writer = new TypeDefinitionWriter(docs, 'update8');
	const discovery = await type_definition_writer.discovery;
	const instance = new class extends ExtendsObject {
		constructor() {
			super(
				[
					'#/$defs/foo',
				],
				[],
				discovery,
			);
		}

		create_reference_type($ref:local_ref<string>)
		{
			return super.create_reference_type($ref);
		}
	};

	void describe('create_reference_type', () => {
		void it('behaves', () => {
			const result = instance.create_reference_type('#/$defs/foo');

			ts_assert.isTypeReferenceNode(result);
			ts_assert.isExpectedIdentifier(result.typeName, 'foo__type');
		})
	})
})
