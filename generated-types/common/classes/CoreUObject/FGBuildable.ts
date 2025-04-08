import {StringPassedRegExp} from '../../utils/validators';

import {
	common_base__FGBuildable__pole__base__no_static__pre_1_1__type,
	empty_object__type,
	xyz__type,
	UnrealEngineString__array__type,
	None__type,
	class__type,
} from '../../common/unassigned';

import {
	decimal_string__signed__type,
	boolean__type,
	decimal_string__type,
	integer_string__signed__type,
	integer_string__type,
} from '../../common/scalar';

export type common_base__FGBuildable__base__type = class__type & {
	MaxRenderDistance: decimal_string__signed__type;
	mContainsComponents: boolean__type;
	mIsConsideredForBaseWeightValue: decimal_string__type;
	mBuildEffectSpeed: decimal_string__type;
	mAllowColoring: boolean__type;
	mAllowPatterning: boolean__type;
	mSkipBuildEffect: boolean__type;
	mForceNetUpdateOnRegisterPlayer: boolean__type;
	mToggleDormancyOnInteraction: boolean__type;
	mIsMultiSpawnedBuildable: boolean__type;
	mShouldShowAttachmentPointVisuals: boolean__type;
	mCanContainLightweightInstances: boolean__type;
	mAffectsOcclusion: boolean__type;
	mOcclusionShape:
		| 'ROCS_Box'
		| 'ROCS_Ramp'
		| 'ROCS_Box_Special'
		| 'ROCS_CornerRamp';
	mScaleCustomOffset: decimal_string__type;
	mCustomScaleType: 'ROCSS_Center' | 'ROCSS_Top' | 'ROCSS_Bot';
	mOcclusionBoxInfo:
		| ''
		| [
				{
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				},
				...{
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				}[],
		];
	mAttachmentPoints: '';
	mInteractingPlayers: '';
	mIsUseable: boolean__type;
	mHideOnBuildEffectStart: boolean__type;
	mShouldModifyWorldGrid: boolean__type;
	mBlueprintBuildEffectID?: integer_string__signed__type;
};

export type common_base__FGBuildable__circuits_base__type =
	common_base__FGBuildable__base__type & {
		mOnCircuitsChanged: empty_object__type;
		mIsBridgeConnected: boolean__type;
		mConnections: '';
	};

export type common_base__FGBuildable__consumes_power_base__type =
	common_base__FGBuildable__base__type & {
		mPowerConsumption: decimal_string__type;
		mPowerConsumptionExponent: decimal_string__type;
		mDoesHaveShutdownAnimation: boolean__type;
		mOnHasPowerChanged: empty_object__type;
		mOnHasProductionChanged: empty_object__type;
		mOnHasStandbyChanged: empty_object__type;
		mMinimumProducingTime: decimal_string__type;
		mMinimumStoppedTime: decimal_string__type;
		mCanEverMonitorProductivity: boolean__type;
		mCanChangePotential: boolean__type;
		mMinPotential: decimal_string__type;
		mMaxPotential: decimal_string__type;
		mFluidStackSizeDefault: 'SS_FLUID';
		mFluidStackSizeMultiplier: integer_string__type;
		mEffectUpdateInterval: decimal_string__type;
		mDefaultProductivityMeasurementDuration: decimal_string__type;
		mLastProductivityMeasurementProduceDuration: decimal_string__type;
		mLastProductivityMeasurementDuration: decimal_string__type;
		mCurrentProductivityMeasurementProduceDuration: decimal_string__type;
		mCurrentProductivityMeasurementDuration: decimal_string__type;
		mProductivityMonitorEnabled: boolean__type;
		mCachedSkeletalMeshes: '';
		mAddToSignificanceManager: boolean__type;
		mSignificanceRange: decimal_string__type;
		mTickExponent: decimal_string__type;
	};

export type common_base__FGBuildable__docking_station_base__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mStorageSizeX: integer_string__type;
		mStorageSizeY: integer_string__type;
		mTransferSpeed: decimal_string__type;
		mStackTransferSize: decimal_string__type;
	};

export type common_base__FGBuildable__extractor_base__type =
	common_base__FGBuildable__extractor_base__shared__type & {
		mPipeOutputConnections: '';
		mExtractStartupTime: decimal_string__signed__type;
		mExtractStartupTimer: decimal_string__type;
		mExtractCycleTime: decimal_string__type;
		mItemsPerCycle: integer_string__type;
	};

export type common_base__FGBuildable__extractor_base__shared__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mAllowedResourceForms: [
			'RF_LIQUID' | 'RF_SOLID' | 'RF_GAS' | 'RF_HEAT',
			...('RF_LIQUID' | 'RF_SOLID' | 'RF_GAS' | 'RF_HEAT')[],
		];
		mOnlyAllowCertainResources: boolean__type;
		mAllowedResources: '' | UnrealEngineString__array__type;
		mExtractorTypeName: None__type | 'Miner';
		mTryFindMissingResource: boolean__type;
	};

export type common_base__FGBuildable__occupied__type =
	common_base__FGBuildable__base__type & {
		mOccupiedText: StringPassedRegExp<' occupied!?$'>;
	};

export type common_base__FGBuildable__pipeline_accessory__type =
	common_base__FGBuildable__pipeline_accessory__base__type & {
		mRadius: decimal_string__type;
		mFluidBoxVolume: decimal_string__type;
		mFluidBox: empty_object__type;
		mPipeConnections: '';
	};

export type common_base__FGBuildable__pipeline_accessory__base__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mFluidBox: empty_object__type;
		mPipeConnections: '';
	};

export type common_base__FGBuildable__pipeline_flow_accessory__type =
	common_base__FGBuildable__pipeline_accessory__type & {
		mLastFlowUpdate: decimal_string__type;
		mUpdateFlowTime: decimal_string__type;
		mAnimSpeed: decimal_string__type;
		mLastFlowValue: decimal_string__type;
		mTimeScaleOffset: decimal_string__type;
		mMaxPressure: decimal_string__type;
		mDesignPressure: decimal_string__type;
		mDefaultFlowLimit: decimal_string__type;
		mUserFlowLimit: decimal_string__signed__type;
		mMinimumFlowPercentForStandby: decimal_string__type;
		mIndicatorData: empty_object__type;
		mPistonAudioTimer?: empty_object__type;
	};

export type common_base__FGBuildable__pole__base__no_static__type =
	common_base__FGBuildable__pole__base__no_static__pre_1_1__type & {
		mCanStack: boolean__type;
	};

export type common_base__FGBuildable__pole__base__with_static__type =
	common_base__FGBuildable__pole__base__no_static__type & {
		mUseStaticHeight: boolean__type;
	};

export type common_base__FGBuildable__power_switch__base__type =
	common_base__FGBuildable__circuits_base__type & {
		mTextRenderers: '';
		bIsSignificant: boolean__type;
		mMaxCharacters: integer_string__type;
		mOnIsSwitchOnChanged: empty_object__type;
		mOnIsConnectedChanged: empty_object__type;
		mOnBuildingTagChanged: empty_object__type;
		mIsSwitchOn: boolean__type;
		mHasBuildingTag: boolean__type;
		mBuildingTag: '';
	};

export type common_base__FGBuildable__splitter__base__type =
	common_base__FGBuildable__base__type & {
		mCurrentOutputIndex: integer_string__signed__type;
	};

export type common_base__FGBuildable__tiered__type =
	common_base__FGBuildable__base__type & {
		Tier: integer_string__type;
	};
