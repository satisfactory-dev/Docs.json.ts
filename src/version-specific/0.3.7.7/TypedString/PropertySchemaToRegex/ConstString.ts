import {
	PropertySchemaToRegex,
} from '../Object.ts';

import {
	PropertySchemaToRegex_ConstString,
} from '../../../../../generated-types/lib/0.3.7.7.ts';

export type ConstString = {type: 'string', const: string};

export function ConstString() {
	return new PropertySchemaToRegex<ConstString>(
		PropertySchemaToRegex_ConstString,
		(value) => {
			return `(?:${
				RegExp.escape(value.const)
			}|${
				RegExp.escape(`"${value.const}"`)
			})`;
		},
	);
}
