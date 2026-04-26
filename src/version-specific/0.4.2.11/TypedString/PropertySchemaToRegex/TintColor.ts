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

import {
	TintColor as TintColor_validator,
} from '../../../../../generated-types/lib/0.4.2.11.ts';

export type TintColor_type = {
	$ref: `docs.json.ts--0.4.2.11--properties#/$defs/TintColor`,
};

export function TintColor(
	Object_matcher: PropertySchemaToRegex<{
		type: 'string',
		typed_string: Object_type,
	}>,
) {
	return new PropertySchemaToRegex<TintColor_type>(
		TintColor_validator,
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
