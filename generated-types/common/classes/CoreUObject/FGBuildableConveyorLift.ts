import type {
	decimal_string__type, boolean__type
} from '../../common/scalar.js';

import type {
	transformation__type,
	common_base__mSnappedPassthroughs__type,
} from '../../common/unassigned.js';

import type {
	common_base__FGBuildableConveyorBelt__base__type
} from './FGBuildableConveyorBelt.js';

export type common_base__FGBuildableConveyorLift__type
	= common_base__FGBuildableConveyorBelt__base__type & {
		mMeshHeight: decimal_string__type,
		mIsReversed: boolean__type,
		mTopTransform: transformation__type,
		mSnappedPassthroughs: common_base__mSnappedPassthroughs__type,
	};
