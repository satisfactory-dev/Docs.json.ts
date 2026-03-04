import type {
	decimal_string__type
} from '../../common/scalar.js';

import type {
	common_base__FGBuildable__base__type
} from './FGBuildable.js';

export type common_base__FGBuildableBeamLightweight__type
	= common_base__FGBuildable__base__type & {
		mSize: decimal_string__type,
		mDefaultLength: decimal_string__type,
		mMaxLength: decimal_string__type,
		mLength: decimal_string__type,
	};
