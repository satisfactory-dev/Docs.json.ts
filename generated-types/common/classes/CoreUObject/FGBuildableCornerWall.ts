import type {
	decimal_string__type, boolean__type
} from '../../common/scalar.js';

import type {
	common_base__FGBuildableWall__base__type
} from './FGBuildableWall.js';

export type common_base__FGBuildableCornerWall__type
	= common_base__FGBuildableWall__base__type & {
		mSize: decimal_string__type,
		mIsInverted: boolean__type,
	};
