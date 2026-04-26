import {
	PropertySchemaToRegex,
} from '../Object.ts';

import {
	PropertySchemaToRegex_EnumString,
} from '../../../../../generated-types/lib.ts';

export type EnumString = {
		type: 'string',
		enum: [string, string, ...string[]],
};

export function EnumString() {
	return new PropertySchemaToRegex<EnumString>(
		PropertySchemaToRegex_EnumString,
		(value) => {
			return `(?:${
				value.enum.map((item) => RegExp.escape(item)).join('|')
			}|${
				value.enum.map((item) => RegExp.escape(`"${item}"`)).join('|')
			})`;
		},
	);
}
