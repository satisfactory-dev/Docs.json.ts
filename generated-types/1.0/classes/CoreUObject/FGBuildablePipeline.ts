import {StringPassedRegExp} from '../../utils/validators';

import {boolean__type} from '../../common/scalar';

import {mSnappedPassthroughs__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildablePipeline__type = FGBuildable__base__type & {
	mMeshLength: decimal_string__type;
	mSplineData: '';
	mRadius: decimal_string__type;
	mFlowLimit: decimal_string__type;
	mFlowIndicatorMinimumPipeLength: decimal_string__type;
	mSoundSplineComponentEmitterInterval: decimal_string__type;
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
	mLastElapsedTime: decimal_string__type;
	mLastFlowForSoundUpdateThreshold: decimal_string__type;
	mRattleLimit: decimal_string__type;
	mIsRattling: boolean__type;
	mUpdateSoundsHandle: empty_object__type;
	mUpdateSoundsTimerInterval: decimal_string__type;
	mSnappedPassthroughs: mSnappedPassthroughs__type;
};

export type FGBuildablePipeline__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeline__type, ...FGBuildablePipeline__type[]];
	};
