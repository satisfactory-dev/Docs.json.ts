import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	Object_type,
} from '../Object.ts';
import {
	PropertySchemaToRegex,
} from '../Object.ts';

import common_types from '../../../../../schema/common/types.json' with {
	type: 'json',
};
import {
	object_has_property,
} from '@satisfactory-dev/predicates.ts';

export function common_type_objects(
	ajv: Ajv,
	Object_matcher: PropertySchemaToRegex<{
		type: 'string',
		typed_string: Object_type,
	}>,
) {
	return new PropertySchemaToRegex<{
		$ref: `${(
			| 'docs.json.ts--common--types#/$defs'
			| '#/$defs'
		)}/${(
			| 'BGRA'
			| 'PitchYawRoll--decimal_string--signed'
			| 'RGBA'
			| 'XY--decimal_string'
			| 'XYZ--decimal_string'
			| 'XYZ--integer_string'
			| 'XYZW--decimal_string'
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
					pattern: `^(?:docs.json.ts--common--types)?#\\/\\$defs\\/(?:${[
						'BGRA',
						'PitchYawRoll--decimal_string--signed',
						'RGBA',
						'XY--decimal_string',
						'XYZ--decimal_string',
						'XYZ--integer_string',
						'XYZW--decimal_string',
					].join('|')})`,
				},
			},
		}),
		(value) => {
			const $ref = value.$ref.split('/')[2];

			if (!object_has_property(common_types.$defs, $ref)) {
				throw new TypeError('$ref not present!');
			}

			return Object_matcher.to_regex(
				common_types.$defs[
					$ref as keyof typeof common_types['$defs']
				] as unknown as {
					type: 'string',
					typed_string: Object_type,
				},
			);
		},
	);
}
