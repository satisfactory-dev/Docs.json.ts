import {decimal_string__type, boolean__type} from '../../common/scalar';

import {common_base__FGBuildableWall__base__type} from './FGBuildableWall';

export type common_base__FGBuildableCornerWall__type =
	common_base__FGBuildableWall__base__type & {
		mSize: decimal_string__type;
		mIsInverted: boolean__type;
	};
