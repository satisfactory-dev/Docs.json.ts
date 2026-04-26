import {
	PropertySchemaToRegex,
} from '../Object.ts';

import type {
	NamedList_type,
} from '../../NamedList.ts';
import {
	NamedList,
} from '../../NamedList.ts';

import {
	PropertySchemaToRegex_NamedList,
} from '../../../../../generated-types/lib.ts';

export function NamedListMatcher() {
	return new PropertySchemaToRegex<NamedList_type>(
		PropertySchemaToRegex_NamedList,
		(value) => {
			return NamedList.regex(value.DocsDotJson_named_list);
		},
	);
}
