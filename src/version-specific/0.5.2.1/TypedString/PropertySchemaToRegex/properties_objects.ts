import type {
	Object_type,
} from '../../../0.3.7.7/TypedString/Object.ts';
import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import properties from '../../../../../schema/0.5.2.1/properties.json' with {
	type: 'json',
};
import {
	object_has_property,
} from '@satisfactory-dev/predicates.ts';

import {
	properties_object as properties_object_validator,
} from '../../../../../generated-types/lib/0.5.2.1.ts';

export type properties_object_type = {
	$ref: `${(
		| 'docs.json.ts--0.5.2.1--properties#/$defs'
	)}/${(
		| 'mDisableSnapOn--bottom'
		| 'mDisableSnapOn--top'
		| 'mDockingRuleSet'
		| 'FalloffCurve--EditorCurveData--only'
		| 'FalloffCurve--EditorCurveData--with-ExternalCurve'
	)}`,
};

export function properties_objects(
	Object_matcher: PropertySchemaToRegex<{
		type: 'string',
		typed_string: Object_type,
	}>,
) {
	return new PropertySchemaToRegex<properties_object_type>(
		properties_object_validator,
		(value) => {
			const $ref = value.$ref.split('/')[2];

			if (!object_has_property(properties.$defs, $ref)) {
				throw new TypeError('$ref not present!');
			}

			return `(?:${Object_matcher.to_regex(
				properties.$defs[
					$ref as keyof typeof properties['$defs']
				] as unknown as {
					type: 'string',
					typed_string: Object_type,
				},
			)})`;
		},
	);
}
