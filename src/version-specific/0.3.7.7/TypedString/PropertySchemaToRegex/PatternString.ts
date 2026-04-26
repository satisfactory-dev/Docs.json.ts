import {
	PropertySchemaToRegex,
} from '../Object.ts';

import {
	PropertySchemaToRegex_PatternString,
} from '../../../../../generated-types/lib.ts';

export type PatternString_type = {
	type: 'string',
	pattern: string,
};

export function PatternString() {
	return new PropertySchemaToRegex<PatternString_type>(
		PropertySchemaToRegex_PatternString,
		(value) => {
			const regex = value.pattern.substring(
				1,
				value.pattern.length - 1,
			);

			return `(?:${regex}|"${regex}")`;
		},
	);
}
