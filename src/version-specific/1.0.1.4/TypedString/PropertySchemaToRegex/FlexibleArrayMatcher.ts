import type {
	$ref,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	FlexibleArray_regex__items,
} from '../FlexibleArray.ts';

import type {
	FlexibleArray_type,
} from '../../../0.3.7.7/TypedString/FlexibleArray.ts';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import {
	PropertySchemaToRegex_FlexibleArray__items,
} from '../../../../../generated-types/lib.ts';

export function FlexibleArrayMatcher__items(
	matchers: PropertySchemaToRegex<unknown>[],
	$ref_instance: $ref,
) {
	return new PropertySchemaToRegex<FlexibleArray_type<'items'>>(
		PropertySchemaToRegex_FlexibleArray__items,
		(value) => {
			return FlexibleArray_regex__items(
				value,
				matchers,
				$ref_instance,
			);
		},
	);
}
