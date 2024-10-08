import {decimal_string__type, boolean__type} from '../../common/scalar';

import {
	transformation__type,
	mSnappedPassthroughs__type,
	NativeClass__type,
} from '../../common/unassigned';

import {FGBuildableConveyorBelt__base__type} from './FGBuildableConveyorBelt';

export type FGBuildableConveyorLift__type =
	FGBuildableConveyorBelt__base__type & {
		mMeshHeight: decimal_string__type;
		mIsReversed: boolean__type;
		mFlipMeshOnReverse: boolean__type;
		mTopTransform: transformation__type;
		mSnappedPassthroughs: mSnappedPassthroughs__type;
		mOpposingConnectionClearance: decimal_string__type;
	};

export type FGBuildableConveyorLift__NativeClass = NativeClass__type & {
	Classes: [FGBuildableConveyorLift__type, ...FGBuildableConveyorLift__type[]];
};
