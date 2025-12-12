import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

import {
	FlexibleArray_generate_schema_definition__items,
	FlexibleArray_generate_schema_definition__prefixItems,
	FlexibleArray_regex__items,
	FlexibleArray_regex__prefixItems,
	type FlexibleArray_type,
} from '../FlexibleArray.ts';

export function FlexibleArrayMatcher__items(
	ajv: Ajv,
	matchers: PropertySchemaToRegex<unknown>[],
) {
	return new PropertySchemaToRegex<FlexibleArray_type<'items'>>(
		ajv.compile(FlexibleArray_generate_schema_definition__items()),
		(value) => {
			return FlexibleArray_regex__items(
				value,
				matchers,
			);
		},
	);
}

export function FlexibleArrayMatcher__prefixItems(
	ajv: Ajv,
	matchers: PropertySchemaToRegex<unknown>[],
) {
	return new PropertySchemaToRegex<FlexibleArray_type<'prefixItems'>>(
		ajv.compile(FlexibleArray_generate_schema_definition__prefixItems()),
		(value) => {
			return FlexibleArray_regex__prefixItems(
				value,
				matchers,
			);
		},
	);
}
