import type {
	common_base__FGPipeHyperStart__pre_1_1__type
} from '../../common/unassigned.js';

import type {
	decimal_string__type, boolean__type
} from '../../common/scalar.js';

export type common_base__FGPipeHyperStart__type
	= common_base__FGPipeHyperStart__pre_1_1__type & {
		mLength: decimal_string__type,
		mCanStack: boolean__type,
		mStackHeight: decimal_string__type,
		mUseStaticHeight: boolean__type,
	};
