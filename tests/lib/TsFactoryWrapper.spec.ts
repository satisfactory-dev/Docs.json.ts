import 'jasmine';
import {
	create_modifiers, modifier_map,
} from '../../lib/TsFactoryWrapper';
import {
	non_empty_keys,
} from '../../lib/ArrayUtilities';

describe('create_modifiers', () => {
	it('removes duplicates', () => {
		expect(
			create_modifiers('export', 'export', 'export')
		).toHaveSize(1);

		const keys = non_empty_keys(modifier_map);

		expect(
			create_modifiers(
				...keys,
				...keys
			)
		).toHaveSize(keys.length);
	});
})
