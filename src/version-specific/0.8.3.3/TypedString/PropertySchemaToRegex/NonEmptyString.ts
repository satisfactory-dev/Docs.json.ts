import {
	PropertySchemaToRegex,
} from '../../../0.3.7.7/TypedString/Object.ts';

import {
	PropertySchemaToRegex_NonEmptyString,
} from '../../../../../generated-types/lib/0.8.3.3.ts';

export type NonEmptyString_type = {type: 'string', minLength: 1};

export function NonEmptyString() {
	return new PropertySchemaToRegex<NonEmptyString_type>(
		PropertySchemaToRegex_NonEmptyString,
		() => {
			return '[^=,)]+';
		},
	);
}
