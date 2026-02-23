import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

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
	FlexibleArray_generate_schema_definition__items,
} from '../../../0.3.7.7/TypedString/FlexibleArray.ts';

import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

export function FlexibleArrayMatcher__items(
	ajv: Ajv,
	matchers: PropertySchemaToRegex<unknown>[],
	$ref_instance: $ref,
) {
	return new PropertySchemaToRegex<FlexibleArray_type<'items'>>(
		ajv.compile(FlexibleArray_generate_schema_definition__items()),
		(value) => {
			return FlexibleArray_regex__items(
				value,
				matchers,
				$ref_instance,
			);
		},
	);
}
