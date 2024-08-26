import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	UnrealEngineString,
// eslint-disable-next-line max-len
} from '../../../../lib/TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	UnrealEngineString_parent_type,
} from '../../../../lib/CustomParsingTypes/UnrealEngineString';

void describe('UnrealEngineString.fromString()', () => {
	void it('throws', () => {
		assert.throws(
			() => UnrealEngineString.fromString('foo'),
			{
				message: 'Not an UnrealEngineString (foo)',
			},
		);
	});

	const expected = {
		'foo\'bar\'': {
			left: 'foo',
			right: 'bar',
		},
		'foo\'"bar"\'': {
			left: 'foo',
			right: 'bar',
		},
	};

	for (const entry of Object.entries(expected)) {
		const [input, output] = entry;

		void it(`behaves as expected with ${input}`, () => {
			const get_result = () => UnrealEngineString.fromString(input);

			assert.doesNotThrow(get_result);

			assert.deepEqual(get_result(), output);
		});
	}
});

void describe('UnrealEngineString.check', () => {
	const instance = new UnrealEngineString(new Ajv());

	const fail:SchemaObject[] = [
		{type: 'string'},
	];
	const pass:UnrealEngineString_parent_type[] = [
		{type: 'string', minLength: 1, UnrealEngineString: true},
		{type: 'string', minLength: 1, UnrealEngineString: {
			left: '/Script/Foo.Bar',
			right: '/Bar/Bar.Bar',
		}},
	];

	for (const input of fail) {
		void it(`resolves false with ${JSON.stringify(input)}`, () => {
			assert.equal(instance.check(input), false);
		});
	}

	for (const input of pass) {
		void it(`resolves true with ${JSON.stringify(input)}`, () => {
			assert.equal(
				instance.check(input),
				true,
				JSON.stringify(instance.check.errors, null, '\t'),
			);
		});
	}
});
