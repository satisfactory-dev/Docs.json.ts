import {decimal_string__type, integer_string__type} from '../../common/scalar';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableLadder__type =
	common_base__FGBuildable__base__type & {
		mWidth: decimal_string__type;
		mMeshHeight: decimal_string__type;
		mMaxSegmentCount: integer_string__type;
		mNumSegments: integer_string__type;
		mLadderMeshes: '';
	};
