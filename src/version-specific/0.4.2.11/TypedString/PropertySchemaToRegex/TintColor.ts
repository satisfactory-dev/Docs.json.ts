import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	Object_type,
} from '../../../0.3.7.7/TypedString/Object.ts';
import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

// eslint-disable-next-line @stylistic/max-len
import update4_properties from '../../../../../schema/0.4.2.11/properties.json' with {
	type: 'json',
};

export function TintColor(
	ajv: Ajv,
	Object_matcher: PropertySchemaToRegex<{
		type: 'string',
		typed_string: Object_type,
	}>,
) {
	return new PropertySchemaToRegex<{
		$ref: `docs.json.ts--0.4.2.11--properties#/$defs/TintColor`,
	}>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['$ref'],
			properties: {
				$ref: {
					type: 'string',
					// eslint-disable-next-line @stylistic/max-len
					const: 'docs.json.ts--0.4.2.11--properties#/$defs/TintColor',
				},
			},
		}),
		() => {
			return Object_matcher.to_regex(
				update4_properties.$defs.TintColor as unknown as {
					type: 'string',
					typed_string: Object_type,
				},
			);
		},
	);
}
