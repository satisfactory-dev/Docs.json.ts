import {StringPassedRegExp} from '../../utils/validators';

import {decimal_string__type, boolean__type} from '../../common/scalar';

import {
	empty_object__type,
	common_base__mSnappedPassthroughs__type,
} from '../../common/unassigned';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildablePipeline__type =
	common_base__FGBuildable__base__type & {
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
		mSnappedPassthroughs: common_base__mSnappedPassthroughs__type;
	};
