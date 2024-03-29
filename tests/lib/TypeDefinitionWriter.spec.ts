import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	TypeDefinitionWriter,
} from '../../lib/TypeDefinitionWriter';

void describe('TypeDefinitionWriter', () => {
	void it('guess_filename', () => {
		assert.strictEqual(
			TypeDefinitionWriter.guess_filename('foo'),
			'common/unassigned.ts'
		);
		assert.strictEqual(
			TypeDefinitionWriter.guess_filename('NativeClass--foo'),
			'classes/base.ts'
		);
		assert.strictEqual(
			TypeDefinitionWriter.guess_filename('FGFoo--bar'),
			'classes/CoreUObject/FGFoo.ts'
		);
	});
});
