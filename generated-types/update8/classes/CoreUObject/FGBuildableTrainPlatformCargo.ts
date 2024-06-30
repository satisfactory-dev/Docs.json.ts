import {
	integer_string__type,
	boolean__type,
	decimal_string__type,
} from '../../common/scalar';

import {
	empty_object__type,
	mDockingRuleSet__type,
	NativeClass__type,
} from '../../common/unassigned';

import {FGBuildableTrainPlatform__base__type} from './FGBuildableTrainPlatform';

export type FGBuildableTrainPlatformCargo__type =
	FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type & {
		mStorageSizeX: integer_string__type;
		mStorageSizeY: integer_string__type;
		mOnTransferRateUpdated: empty_object__type;
		mFreightCargoType: 'FCT_Standard' | 'FCT_Liquid';
		mCanUnloadAny: boolean__type;
		mIsFullUnload: boolean__type;
		mCanLoadAny: boolean__type;
		mIsFullLoad: boolean__type;
		mTimeToCompleteLoad: decimal_string__type;
		mTimeToSwapLoadVisibility: decimal_string__type;
		mTimeToCompleteUnload: decimal_string__type;
		mTimeToSwapUnloadVisibility: decimal_string__type;
		mWaitForConditionUpdatePeriod: decimal_string__type;
		mStorageInputConnections: '';
		mPipeInputConnections: '';
		mPipeOutputConnections: '';
		mDockingRuleSet: mDockingRuleSet__type;
		mLoadItemFilter: '';
		mUnloadItemFilter: '';
		mHasFullyLoadUnloadRule: boolean__type;
		mDockForDuration: decimal_string__type;
		mMustDockForDuration: boolean__type;
		mHasAnyRelevantStacksToMove: boolean__type;
		mAllowDepartureNoValidItemsToTransfer: boolean__type;
		mShouldExecuteLoadOrUnload: boolean__type;
		mRanCompleteBeforeNone: boolean__type;
		mSwapCargoVisibilityTimerHandle: empty_object__type;
		mTimeSinceLastLoadTransferUpdate: decimal_string__type;
		mTimeSinceLastUnloadTransferUpdate: decimal_string__type;
		mSmoothedLoadRate: decimal_string__type;
		mSmoothedUnloadRate: decimal_string__type;
		mReplicatedOutflowRate: decimal_string__type;
		mReplicatedInflowRate: decimal_string__type;
	};

export type FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type =
	FGBuildableTrainPlatform__base__type & {
		mCurrentDockForDuration: decimal_string__type;
	};

export type FGBuildableTrainPlatformCargo__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableTrainPlatformCargo__type,
		...FGBuildableTrainPlatformCargo__type[],
	];
};
