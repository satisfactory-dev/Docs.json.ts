import {decimal_string__type, boolean__type} from '../../common/scalar.ts';

import {
	transformation__type,
	common_base__mSnappedPassthroughs__type,
} from '../../common/unassigned.ts';

import {common_base__FGBuildableConveyorBelt__base__type} from './FGBuildableConveyorBelt.ts';

export type common_base__FGBuildableConveyorLift__type =
	common_base__FGBuildableConveyorBelt__base__type & {
		mMeshHeight: decimal_string__type;
		mIsReversed: boolean__type;
		mTopTransform: transformation__type;
		mSnappedPassthroughs: common_base__mSnappedPassthroughs__type;
	};
