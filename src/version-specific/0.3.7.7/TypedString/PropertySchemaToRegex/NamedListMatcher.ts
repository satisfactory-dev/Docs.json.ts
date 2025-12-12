import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	PropertySchemaToRegex,
} from '../Object.ts';

import {
	NamedList,
	type NamedList_type,
} from '../../NamedList.ts';

export function NamedListMatcher(
	ajv: Ajv,
) {
	return new PropertySchemaToRegex<NamedList_type>(
		ajv.compile({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_named_list'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				DocsDotJson_named_list: {
					type: 'string',
				},
			},
		}),
		(value) => {
			return NamedList.regex(value.DocsDotJson_named_list);
		},
	);
}
