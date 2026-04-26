import {
	PropertySchemaToRegex,
} from '../Object.ts';

import type {
	FlexibleArray_type,
} from '../FlexibleArray.ts';
import {
	FlexibleArray_regex__items,
	FlexibleArray_regex__prefixItems,
} from '../FlexibleArray.ts';

import {
	PropertySchemaToRegex_FlexibleArray__items,
	PropertySchemaToRegex_FlexibleArray__prefixItems,
} from '../../../../../generated-types/lib/0.3.7.7.ts';

export function FlexibleArrayMatcher__items(
	matchers: PropertySchemaToRegex<unknown>[],
) {
	return new PropertySchemaToRegex<FlexibleArray_type<'items'>>(
		PropertySchemaToRegex_FlexibleArray__items,
		(value) => {
			return FlexibleArray_regex__items(
				value,
				matchers,
			);
		},
	);
}

export function FlexibleArrayMatcher__prefixItems(
	matchers: PropertySchemaToRegex<unknown>[],
) {
	return new PropertySchemaToRegex<FlexibleArray_type<'prefixItems'>>(
		PropertySchemaToRegex_FlexibleArray__prefixItems,
		(value) => {
			return FlexibleArray_regex__prefixItems(
				value,
				matchers,
			);
		},
	);
}
