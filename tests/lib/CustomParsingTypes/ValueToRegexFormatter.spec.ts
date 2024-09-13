import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ValueToRegexFormatter,
} from '../../../lib/CustomParsingTypes/ValueToRegexFormatter';
import {
	update8,
} from '../../../lib/helpers';

void describe('ValueToRegexFormatter.pattern_from_value()', async () => {
	const instance = new ValueToRegexFormatter(
		(await update8.update8_schema()).$defs,
	);
	void it('does not throw', async () => {
		const typed_string_types = [
			'EditorCurveData',
			'color',
			'color-decimal',
		];

		for (const typed_string_type of typed_string_types) {
			const definition = await update8.definition(typed_string_type);
			assert.doesNotThrow(
				() => instance.pattern_from_value(definition),
			)
		}
	});
});
