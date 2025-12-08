import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

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

export function properties_objects(
	ajv: Ajv,
	Object_matcher: PropertySchemaToRegex<{
		type: 'string',
		typed_string: Object_type,
	}>,
) {
	return new PropertySchemaToRegex<{
		$ref: `${(
			| 'docs.json.ts--0.5.2.1--properties#/$defs'
		)}/${(
			| 'mDisableSnapOn--bottom'
			| 'mDisableSnapOn--top'
			| 'mDockingRuleSet'
			| 'FalloffCurve--EditorCurveData--only'
			| 'FalloffCurve--EditorCurveData--with-ExternalCurve'
		)}`,
	}>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['$ref'],
			properties: {
				$ref: {
					type: 'string',
					// eslint-disable-next-line @stylistic/max-len
					pattern: `^docs.json.ts--0.5.2.1--properties#\\/\\$defs\\/(?:${[
						'mDisableSnapOn--bottom',
						'mDisableSnapOn--top',
						'mDockingRuleSet',
						'FalloffCurve--EditorCurveData--only',
						'FalloffCurve--EditorCurveData--with-ExternalCurve',
					].join('|')})`,
				},
			},
		}),
		(value) => {
			const $ref = value.$ref.split('/')[2];

			if (!object_has_property(properties.$defs, $ref)) {
				throw new TypeError('$ref not present!');
			}

			return Object_matcher.to_regex(
				properties.$defs[
					$ref as keyof typeof properties['$defs']
				] as unknown as {
					type: 'string',
					typed_string: Object_type,
				},
			);
		},
	);
}
