import {StringPassedRegExp} from '../../utils/validators';

import {
	empty_object__type,
	mSnappedPassthroughs__type,
} from '../../common/unassigned';

import {boolean__type} from '../../common/scalar';

import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipeline__type = FGBuildable__base__type & {
	mMeshLength: decimal_string__type;
	mSplineData: '';
	mRadius: decimal_string__type;
	mFlowLimit: decimal_string__type;
	mFlowIndicatorMinimumPipeLength: decimal_string__type;
	mPipeConnections: '';
	mFluidBox: empty_object__type;
	mIndicatorData: empty_object__type;
	mMaxIndicatorTurnAngle: decimal_string__type;
	mIgnoreActorsForIndicator: '';
	mFluidNames: [
		{
			WwiseSafeName: StringPassedRegExp<'^[A-Z][A-Za-z]+(_[A-Z][A-Za-z]+)*$'>;
			ActualName?: StringPassedRegExp<'^[A-Z][A-Za-z]+( [A-Z][A-Za-z]+)*$'>;
		},
		...{
			WwiseSafeName: StringPassedRegExp<'^[A-Z][A-Za-z]+(_[A-Z][A-Za-z]+)*$'>;
			ActualName?: StringPassedRegExp<'^[A-Z][A-Za-z]+( [A-Z][A-Za-z]+)*$'>;
		}[],
	];
	mCurrentFluid: '';
	mLastContentForSound: decimal_string__type;
	mLastFlowForSound: decimal_string__type;
	mRattleLimit: decimal_string__type;
	mIsRattling: boolean__type;
	mUpdateSoundsHandle: empty_object__type;
	mSnappedPassthroughs: mSnappedPassthroughs__type;
};

export type FGBuildablePipeline__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeline__type, ...FGBuildablePipeline__type[]];
	};
