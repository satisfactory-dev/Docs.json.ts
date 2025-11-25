/* eslint-disable @stylistic/max-len */

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	ItemClass_Amount_list as docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mAbbreviatedDisplayName as docs_json_ts_0_3_7_7_properties_mAbbreviatedDisplayName,
	mAllowedResourceForms as docs_json_ts_0_3_7_7_properties_mAllowedResourceForms,
	mDisplayName as docs_json_ts_0_3_7_7_properties_mDisplayName,
	mForm as docs_json_ts_0_3_7_7_properties_mForm,
	mPersistentBigIcon as docs_json_ts_0_3_7_7_properties_mPersistentBigIcon,
	mRelevantEvents as docs_json_ts_0_3_7_7_properties_mRelevantEvents,
	mSmallIcon as docs_json_ts_0_3_7_7_properties_mSmallIcon,
	mStackSize as docs_json_ts_0_3_7_7_properties_mStackSize,
	mSubCategories as docs_json_ts_0_3_7_7_properties_mSubCategories,
	mType as docs_json_ts_0_3_7_7_properties_mType,
	Tier as docs_json_ts_0_3_7_7_properties_Tier,
	transform_Rotation_Translation_Scale3D as docs_json_ts_0_3_7_7_properties_transform_Rotation_Translation_Scale3D,
} from './../types/properties.ts';

import type {
	BGRA as docs_json_ts_common_types_BGRA,
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
	decimal_string_signed as docs_json_ts_common_types_decimal_string_signed,
	empty_object as docs_json_ts_common_types_empty_object,
	integer_string as docs_json_ts_common_types_integer_string,
	integer_string_signed as docs_json_ts_common_types_integer_string_signed,
	PitchYawRoll_decimal_string_signed as docs_json_ts_common_types_PitchYawRoll_decimal_string_signed,
	RGBA as docs_json_ts_common_types_RGBA,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
} from './../../common/types.ts';

import type {
	StringPassesRegex,
} from '@signpostmarv/json-schema-typescript-codegen';

type hasClassName = {
	ClassName: `${string}${'_'}${string}${'_C'}`,
};

type isDescribed = isNamed & {
	mDescription: string,
};

type isNamed = hasClassName & {
	mDisplayName: docs_json_ts_0_3_7_7_properties_mDisplayName,
};

type FGBuildable = FGBuildable_base & FGBuildable_base_version_specific;

type FGBuildable_base = isDescribed & {
	MaxRenderDistance: docs_json_ts_common_types_decimal_string_signed,
	mHighlightVector: docs_json_ts_common_types_XYZ_decimal_string,
	mSkipBuildEffect: docs_json_ts_common_types_bool_string,
	mBuildEffectSpeed: docs_json_ts_common_types_decimal_string,
	mForceNetUpdateOnRegisterPlayer: docs_json_ts_common_types_bool_string,
	mShouldShowHighlight: docs_json_ts_common_types_bool_string,
	mInteractingPlayers: '',
	mIsUseable: docs_json_ts_common_types_bool_string,
	mHideOnBuildEffectStart: docs_json_ts_common_types_bool_string,
};

type FGBuildable_base_version_specific = isDescribed & {
	mMaterialNameToInstanceManager: docs_json_ts_common_types_empty_object,
	mBlockSharingMaterialInstanceMapping: docs_json_ts_common_types_bool_string,
	mExcludeFromMaterialInstancing: '',
	mAllowCleranceSeparationEvenIfStackedOn: docs_json_ts_common_types_bool_string,
};

type FGBuildable_DisableAttachmentSnapOn = FGBuildable & {
	mDisableAttachmentSnapOn: docs_json_ts_common_types_empty_object,
};

type FGBuildable_docking_station = FGBuildable_docking_station_base & FGBuildable_powered_storage;

type FGBuildable_docking_station_base = FGBuildable_powered_storage_base & {
	mMapText: string,
	mTransferSpeed: docs_json_ts_common_types_decimal_string,
	mStackTransferSize: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_occupied = FGBuildable & {
	mOccupiedText: Exclude<string, ''>,
};

type FGBuildable_pole = FGBuildable_pole_base & FGBuildable;

type FGBuildable_pole_base = FGBuildable_base & {
	mUseStaticHeight: docs_json_ts_common_types_bool_string,
	mCanStack: docs_json_ts_common_types_bool_string,
	mStackHeight: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_pole_with_length = FGBuildable_pole & {
	mLength: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_pole_with_length_and_power = FGBuildable_pole_with_length_and_power_base & FGBuildable_powered;

type FGBuildable_pole_with_length_and_power_base = FGBuildable_pole_with_length & FGBuildable_powered_base;

type FGBuildable_powered = FGBuildable_powered_base & (FGBuildable & {
	mSignificanceBias: docs_json_ts_common_types_decimal_string,
});

type FGBuildable_powered_base = FGBuildable & {
	mPowerConsumption: docs_json_ts_common_types_decimal_string,
	mPowerConsumptionExponent: docs_json_ts_common_types_decimal_string,
	mOnHasPowerChanged: docs_json_ts_common_types_empty_object,
	mOnHasProductionChanged: docs_json_ts_common_types_empty_object,
	mOnHasStandbyChanged: docs_json_ts_common_types_empty_object,
	mMinimumProducingTime: docs_json_ts_common_types_decimal_string_signed,
	mMinimumStoppedTime: docs_json_ts_common_types_decimal_string_signed,
	mNumCyclesForProductivity: docs_json_ts_common_types_integer_string,
	mCanChangePotential: docs_json_ts_common_types_bool_string,
	mMinPotential: docs_json_ts_common_types_decimal_string,
	mMaxPotential: docs_json_ts_common_types_decimal_string,
	mMaxPotentialIncreasePerCrystal: docs_json_ts_common_types_decimal_string,
	mFluidStackSizeDefault: 'SS_FLUID',
	mFluidStackSizeMultiplier: docs_json_ts_common_types_integer_string,
	OnReplicationDetailActorCreatedEvent: docs_json_ts_common_types_empty_object,
	mEffectUpdateInterval: docs_json_ts_common_types_decimal_string,
	mAddToSignificanceManager: docs_json_ts_common_types_bool_string,
	mSignificanceRange: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_powered_base_resources = FGBuildable_powered_base & {
	mOnlyAllowCertainResources: docs_json_ts_common_types_bool_string,
	mAllowedResources: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list | '',
	mExtractorTypeName: 'None' | 'Miner',
};

type FGBuildable_powered_storage = FGBuildable_powered_storage_base & FGBuildable_powered;

type FGBuildable_powered_storage_base = FGBuildable_powered_base & {
	mStorageSizeX: docs_json_ts_common_types_integer_string,
	mStorageSizeY: docs_json_ts_common_types_integer_string,
};

type FGBuildable_spline = FGBuildable_with_length & {
	mSplineData: '',
};

type FGBuildable_tiered = FGBuildable & {
	Tier: docs_json_ts_0_3_7_7_properties_Tier,
};

type FGBuildable_with_height = FGBuildable_with_height_base & FGBuildable;

type FGBuildable_with_height_base = FGBuildable_base & {
	mHeight: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_height_and_elevation = FGBuildable_with_height & FGBuildable_with_size_and_elevation & FGBuildable_DisableAttachmentSnapOn;

type FGBuildable_with_height_and_width = FGBuildable_with_height_and_width_base & FGBuildable;

type FGBuildable_with_height_and_width_base = FGBuildable_with_height_base & FGBuildable_with_width_base;

type FGBuildable_with_length = FGBuildable & {
	mMeshLength: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_size = FGBuildable_with_size_base & FGBuildable;

type FGBuildable_with_size_base = FGBuildable_base & {
	mSize: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_size_and_elevation = FGBuildable_with_size & {
	mSize: docs_json_ts_common_types_decimal_string,
	mElevation: docs_json_ts_common_types_decimal_string,
	mDisableSnapOn: docs_json_ts_common_types_empty_object | {
		Front: docs_json_ts_common_types_bool_string,
		Top: docs_json_ts_common_types_bool_string,
	} | {
		Top: docs_json_ts_common_types_bool_string,
		Bottom: docs_json_ts_common_types_bool_string,
	} | {
		Front: docs_json_ts_common_types_bool_string,
		Bottom: docs_json_ts_common_types_bool_string,
	} | {
		Right: docs_json_ts_common_types_bool_string,
		Left: docs_json_ts_common_types_bool_string,
		Top: docs_json_ts_common_types_bool_string,
		Bottom: docs_json_ts_common_types_bool_string,
	} | {
		Front: docs_json_ts_common_types_bool_string,
		Top: docs_json_ts_common_types_bool_string,
		Bottom: docs_json_ts_common_types_bool_string,
	} | {
		Front: docs_json_ts_common_types_bool_string,
		Left: docs_json_ts_common_types_bool_string,
		Top: docs_json_ts_common_types_bool_string,
		Bottom: docs_json_ts_common_types_bool_string,
	},
};

type FGBuildable_with_width = FGBuildable_with_width_base & FGBuildable;

type FGBuildable_with_width_base = FGBuildable_base & {
	mWidth: docs_json_ts_common_types_decimal_string,
};

type FGBuildableAttachment = FGBuildableAttachment_base & FGBuildable_powered;

type FGBuildableAttachment_base = FGBuildable_powered_base & {
	mCurrentInventoryIndex: docs_json_ts_common_types_integer_string,
};

type FGBuildableAttachment_splitter = FGBuildableAttachment_splitter_base & FGBuildableAttachment;

type FGBuildableAttachment_splitter_base = FGBuildableAttachment_base & {
	mCurrentOutputIndex: docs_json_ts_common_types_integer_string_signed,
	mDistributionTable: '',
};

type FGBuildableAttachmentMerger = FGBuildableAttachment & FGBuildableAttachmentMerger_base;

type FGBuildableAttachmentMerger_base = FGBuildableAttachment_base & {
	mCurrentInputIndex: docs_json_ts_common_types_integer_string_signed,
};

type FGBuildableConveyorBelt_base = FGBuildable & {
	mItemMeshMap: docs_json_ts_common_types_empty_object,
	mSpeed: docs_json_ts_common_types_decimal_string,
	mItems: docs_json_ts_common_types_empty_object,
};

type FGBuildableConveyorBelt_spline = FGBuildable_spline & FGBuildableConveyorBelt_base;

type FGBuildableConveyorLift = FGBuildableConveyorBelt_base & {
	mMeshHeight: docs_json_ts_common_types_decimal_string,
	mTopTransform: docs_json_ts_0_3_7_7_properties_transform_Rotation_Translation_Scale3D,
	mIsReversed: docs_json_ts_common_types_bool_string,
};

type FGBuildableDockingStation = FGBuildable_docking_station & FGBuildableDockingStation_base;

type FGBuildableDockingStation_base = FGBuildable_docking_station_base & {
	mMapText: '',
	mFuelTransferSpeed: docs_json_ts_common_types_decimal_string,
};

type FGBuildableFactory_jump_pad = FGBuildable_powered & FGBuildableFactory_jump_pad_base;

type FGBuildableFactory_jump_pad_base = FGBuildable_powered_base & {
	JumpForceCharacter: docs_json_ts_common_types_decimal_string,
	JumpForcePhysics: docs_json_ts_common_types_decimal_string,
};

type FGBuildableFactory_landing_pad = FGBuildable_powered & FGBuildableFactory_landing_pad_base;

type FGBuildableFactory_landing_pad_base = FGBuildable_powered_base & {
	mDampeningFactor: docs_json_ts_common_types_decimal_string,
	mPlayerList: '',
};

type FGBuildableFactorySimpleProducer = FGBuildable_powered & FGBuildableFactorySimpleProducer_base;

type FGBuildableFactorySimpleProducer_base = FGBuildable_powered_base & {
	mTimeToProduceItem: docs_json_ts_common_types_decimal_string,
	mEventType: 'EV_Christmas',
};

type FGBuildableGenerator = FGBuildableGenerator_no_fuel & FGBuildableGenerator_base;

type FGBuildableGenerator_base = FGBuildableGenerator_no_fuel_base & {
	mCachedLoadPercentage?: docs_json_ts_common_types_decimal_string,
	mFuelClasses: '',
	mAvailableFuelClasses: '',
	mFuelResourceForm: docs_json_ts_0_3_7_7_properties_mForm,
	mRequiresSupplementalResource: docs_json_ts_common_types_bool_string,
	mSupplementalLoadAmount: docs_json_ts_common_types_integer_string,
	mSupplementalToPowerRatio: docs_json_ts_common_types_decimal_string,
	mCachedInputConnections: '',
	mCachedPipeInputConnections: '',
};

type FGBuildableGenerator_no_fuel = FGBuildableGenerator_no_fuel_base & FGBuildable_powered;

type FGBuildableGenerator_no_fuel_base = FGBuildable_powered_base & {
	mPowerProduction: docs_json_ts_common_types_decimal_string,
	mPowerProductionExponent: docs_json_ts_common_types_decimal_string,
	mLoadPercentage: docs_json_ts_common_types_decimal_string,
};

type FGBuildableGeneratorFuel_base = FGBuildableGenerator_base & {
	mRTPCInterval?: docs_json_ts_common_types_decimal_string,
};

type FGBuildableGeneratorFuel_biomass = FGBuildableGenerator & FGBuildableGeneratorFuel_biomass_base;

type FGBuildableGeneratorFuel_biomass_base = FGBuildableGeneratorFuel_base & {
	mDefaultFuelClasses: [
		'/Script/FactoryGame.FGItemDescriptorBiomass',
	],
};

type FGBuildableGeneratorFuel_coal = FGBuildableGenerator & FGBuildableGeneratorFuel_coal_base;

type FGBuildableGeneratorFuel_coal_base = FGBuildableGeneratorFuel_base & {
	mDefaultFuelClasses: [
        '/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C' | '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C' | '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C',
        ...('/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C' | '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C' | '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C')[],
	],
};

type FGBuildableGeneratorFuel_fuel = FGBuildableGenerator & FGBuildableGeneratorFuel_fuel_base;

type FGBuildableGeneratorFuel_fuel_base = FGBuildableGeneratorFuel_base & {
	mDefaultFuelClasses: [
        '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C' | '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C' | '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C',
        ...('/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C' | '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C' | '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C')[],
	],
};

type FGBuildableGeneratorGeoThermal = FGBuildableGeneratorGeoThermal_base & FGBuildableGenerator_no_fuel;

type FGBuildableGeneratorGeoThermal_base = FGBuildableGenerator_no_fuel_base & {
	mProductionEffectsRunning: docs_json_ts_common_types_bool_string,
};

type FGBuildableGeneratorNuclear = FGBuildableGenerator & FGBuildableGeneratorNuclear_base & {
	mDefaultFuelClasses: [
		'/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C',
	],
};

type FGBuildableGeneratorNuclear_base = FGBuildableGenerator_base & {
	mWasteLeftFromCurrentFuel: docs_json_ts_common_types_integer_string,
	mFuelResourceForm: 'RF_SOLID',
};

type FGBuildableJumppad = FGBuildableJumppad_base & FGBuildable_powered;

type FGBuildableJumppad_base = FGBuildable_powered_base & {
	mPowerBankCapacity: docs_json_ts_common_types_decimal_string,
	mLaunchPowerCost: docs_json_ts_common_types_decimal_string,
	mChargeRateMultiplier: docs_json_ts_common_types_decimal_string,
	mCurrentPowerLevel: docs_json_ts_common_types_decimal_string,
	mLaunchVelocity: docs_json_ts_common_types_decimal_string,
	mLaunchAngle: docs_json_ts_common_types_decimal_string_signed,
	mPlayerChainJumpResetTime: docs_json_ts_common_types_decimal_string,
	mHasPowerForLaunch: docs_json_ts_common_types_bool_string,
	ComponentsToLaunch: '',
	CharactersToLaunch: '',
	VehiclesToLaunch: '',
	mTrajectoryData: docs_json_ts_common_types_empty_object,
	mTrajectoryMeshScale: docs_json_ts_common_types_XYZ_decimal_string,
	mTrajectoryMeshRotation: docs_json_ts_common_types_PitchYawRoll_decimal_string_signed,
	mDestinationMeshHeightOffset: docs_json_ts_common_types_decimal_string,
	mNumArrows: docs_json_ts_common_types_integer_string,
	mKillTimer: docs_json_ts_common_types_empty_object,
	mTrajectoryGravityMultiplier: docs_json_ts_common_types_decimal_string,
	mShowTrajectoryCounter: docs_json_ts_common_types_integer_string,
};

type FGBuildableLadder = FGBuildable_with_width & {
	mMeshHeight: docs_json_ts_common_types_decimal_string,
	mMaxSegmentCount: docs_json_ts_common_types_integer_string,
	mNumSegments: docs_json_ts_common_types_integer_string,
	mLadderMeshes: '',
};

type FGBuildableManufacturer_base = FGBuildable_powered_base & {
	mCurrentRecipeChanged: docs_json_ts_common_types_empty_object,
	mManufacturingSpeed: docs_json_ts_common_types_decimal_string,
	mFactoryInputConnections: '',
	mPipeInputConnections: '',
	mFactoryOutputConnections: '',
	mPipeOutputConnections: '',
};

type FGBuildableManufacturer_base_IsPowered = FGBuildable_powered_base & {
	IsPowered: docs_json_ts_common_types_bool_string,
};

type FGBuildableManufacturer_base_mProductionEffectsRunning = FGBuildable_powered_base & {
	mProductionEffectsRunning: docs_json_ts_common_types_bool_string,
};

type FGBuildableManufacturer_base_packager = FGBuildable_powered_base & {
	mCurrentColor_VFX: docs_json_ts_common_types_RGBA,
	CurrentPackagingMode: '',
};

type FGBuildableManufacturer_Build_AssemblerMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildable_powered;

type FGBuildableManufacturer_Build_ConstructorMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildable_powered;

type FGBuildableManufacturer_Build_FoundryMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildableManufacturer_Build_ManufacturerMk1_C = FGBuildableManufacturer_base & FGBuildable_powered;

type FGBuildableManufacturer_Build_OilRefinery_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildableManufacturer_Build_Packager_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildableManufacturer_base_packager & FGBuildable_powered;

type FGBuildableManufacturer_Build_SmelterMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildablePipeline = FGBuildablePipeline_base_spline & {
	mFlowLimit: docs_json_ts_common_types_decimal_string,
	mFlowIndicatorMinimumPipeLength: docs_json_ts_common_types_decimal_string,
	mMaxIndicatorTurnAngle: docs_json_ts_common_types_decimal_string,
	mIgnoreActorsForIndicator: '',
	mFluidNames: [
		{
			WwiseSafeName: StringPassesRegex<'^[A-Z][A-Za-z_]+[a-z]$'>,
			ActualName?: StringPassesRegex<'^[A-Z][A-Za-z ]+[a-z]$'>,
		},
		...{
			WwiseSafeName: StringPassesRegex<'^[A-Z][A-Za-z_]+[a-z]$'>,
			ActualName?: StringPassesRegex<'^[A-Z][A-Za-z ]+[a-z]$'>,
		}[],
	],
	mCurrentFluid: '',
	mQuantiziedContent: docs_json_ts_common_types_decimal_string,
	mQuantiziedFlow: docs_json_ts_common_types_decimal_string,
	mRattleLimit: docs_json_ts_common_types_decimal_string,
	mIsRattling: docs_json_ts_common_types_bool_string,
};

type FGBuildablePipeline_base = FGBuildablePipeline_base_no_indicator & {
	mIndicatorData: docs_json_ts_common_types_empty_object,
};

type FGBuildablePipeline_base_no_indicator = FGBuildable & {
	mRadius: docs_json_ts_common_types_decimal_string,
	mFluidBox: docs_json_ts_common_types_empty_object,
	mPipeConnections: '',
};

type FGBuildablePipeline_base_spline = FGBuildablePipeline_base & FGBuildable_spline;

type FGBuildablePipeline_junction = FGBuildable_powered & FGBuildablePipeline_junction_base;

type FGBuildablePipeline_junction_base = FGBuildable_powered_base & FGBuildablePipeline_base_no_indicator;

type FGBuildablePipelineJunction = FGBuildablePipeline_junction & FGBuildablePipelineJunction_base;

type FGBuildablePipelineJunction_base = FGBuildablePipeline_junction_base & {
	mFluidBoxVolume: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePipelinePump_base = FGBuildablePipeline_base & FGBuildablePipelinePump_powered_base_base;

type FGBuildablePipelinePump_powered_base = FGBuildable_powered & FGBuildablePipelinePump_powered_base_base;

type FGBuildablePipelinePump_powered_base_base = FGBuildable_powered_base & {
	mLastFlowUpdate: docs_json_ts_common_types_decimal_string,
	mUpdateFlowTime: docs_json_ts_common_types_decimal_string,
	mAnimSpeed: docs_json_ts_common_types_decimal_string,
	mLastFlowValue: docs_json_ts_common_types_decimal_string,
	mTimeScaleOffset: docs_json_ts_common_types_decimal_string,
	mMaxPressure: docs_json_ts_common_types_decimal_string,
	mDesignPressure: docs_json_ts_common_types_decimal_string,
	mDefaultFlowLimit: docs_json_ts_common_types_decimal_string,
	mUserFlowLimit: docs_json_ts_common_types_decimal_string_signed,
	mMinimumFlowPercentForStandby: docs_json_ts_common_types_decimal_string,
	mFluidBoxVolume: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePipelinePump_pump = FGBuildablePipelinePump_pump_base & FGBuildablePipelinePump_powered_base;

type FGBuildablePipelinePump_pump_base = FGBuildablePipelinePump_base & {
	mPistonAudioTimer?: docs_json_ts_common_types_empty_object,
	mIsPipePumpPlaying: docs_json_ts_common_types_bool_string,
	mIsExceedingHeadLift: docs_json_ts_common_types_bool_string,
	mCurrentAudioHeadLift: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePipelinePump_valve = FGBuildablePipelinePump_base & FGBuildable_powered;

type FGBuildablePipelineSupport = FGBuildable_pole_with_length & {
	mVerticalAngle: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePipeReservoir = FGBuildable_powered & FGBuildablePipeReservoir_base;

type FGBuildablePipeReservoir_base = FGBuildable_powered_base & {
	mStackingHeight: docs_json_ts_common_types_decimal_string,
	mFluidBox: docs_json_ts_common_types_empty_object,
	mStorageCapacity: docs_json_ts_common_types_decimal_string,
	mPipeConnections: '',
	mIndicatorData: docs_json_ts_common_types_empty_object,
};

type FGBuildablePole = FGBuildable_pole & FGBuildablePole_base;

type FGBuildablePole_base = FGBuildable_pole_base & {
	mHeight: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePowerPole = FGBuildable & {
	mPowerConnections: '',
	mPowerPoleType: 'PPT_POLE' | 'PPT_WALL' | 'PPT_WALL_DOUBLE',
};

type FGBuildableRadarTower = FGBuildable_powered & FGBuildableRadarTower_base;

type FGBuildableRadarTower_base = FGBuildable_powered_base & {
	mMapText: 'Radar Tower',
	OnRadarTowerRadiusUpdated: docs_json_ts_common_types_empty_object,
	mMinRevealRadius: docs_json_ts_common_types_decimal_string,
	mMaxRevealRadius: docs_json_ts_common_types_decimal_string,
	mNumRadarExpansionSteps: docs_json_ts_common_types_integer_string,
	mRadarExpansionInterval: docs_json_ts_common_types_decimal_string,
	mCurrentExpansionStep: docs_json_ts_common_types_integer_string,
	mTimeToNextExpansion: docs_json_ts_common_types_decimal_string,
};

type FGBuildableRailroadStation = FGBuildableTrainPlatform & FGBuildableRailroadStation_base;

type FGBuildableRailroadStation_base = FGBuildableTrainPlatform_base & {
	mMapText: 'Train Station',
	mDockedPlatformList: '',
};

type FGBuildableRailroadTrack = FGBuildable_with_length & {
	mIsOwnedByPlatform: docs_json_ts_common_types_bool_string,
};

type FGBuildableResourceExtractor = FGBuildableResourceExtractor_base_with_resources & {
	mRequireResourceAtMinimumDepthChecks: docs_json_ts_common_types_bool_string,
	mMinimumDepthForPlacement: docs_json_ts_common_types_decimal_string,
	mDepthTraceOriginOffset: docs_json_ts_common_types_XYZ_decimal_string,
	mExtractionOffset: docs_json_ts_common_types_XYZ_decimal_string,
	mAllowedResourceForms: docs_json_ts_0_3_7_7_properties_mAllowedResourceForms,
};

type FGBuildableResourceExtractor_base = FGBuildable_powered_base & {
	mExtractStartupTime: docs_json_ts_common_types_decimal_string_signed,
	mExtractStartupTimer: docs_json_ts_common_types_decimal_string,
	mExtractCycleTime: docs_json_ts_common_types_decimal_string,
	mItemsPerCycle: docs_json_ts_common_types_integer_string,
	mOnlyAllowCertainResources: docs_json_ts_common_types_bool_string,
	mAllowedResources: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list | '',
	mExtractorTypeName: 'None' | 'Miner',
	mPipeOutputConnections: '',
	mReplicatedFlowRate: docs_json_ts_common_types_decimal_string,
};

type FGBuildableResourceExtractor_base_with_resources = FGBuildableResourceExtractor_base & FGBuildable_powered_base_resources;

type FGBuildableResourceExtractor_miner_base = FGBuildableResourceExtractor_base_with_resources & {
	mInternalMiningState_0?: 'NewEnumerator0',
	mToggleMiningStateHandle_0?: docs_json_ts_common_types_empty_object,
	mMinimumDrillTime_0?: docs_json_ts_common_types_decimal_string,
	mMaximumDrillTime_0?: docs_json_ts_common_types_decimal_string,
	mCanPlayAfterStartUpStopped?: docs_json_ts_common_types_bool_string,
	mParticleMap: [
		{
			ResourceNode_16_2100B5C34EE8DF7958D78A974512F3C3: `/Game/FactoryGame/Resource/RawResources/${string}${'/Desc_'}${string}${'.Desc_'}${string}${'_C'}`,
			ParticleSystem1_9_F0CF81514E1E1C5007AC99B0C59C63CD: `ParticleSystem'"/Game/FactoryGame/VFX/Factory/Miner/P_Mining_${string}${'_01.P_Mining_'}${string}${'_01"\''}`,
		},
		...{
			ResourceNode_16_2100B5C34EE8DF7958D78A974512F3C3: `/Game/FactoryGame/Resource/RawResources/${string}${'/Desc_'}${string}${'.Desc_'}${string}${'_C'}`,
			ParticleSystem1_9_F0CF81514E1E1C5007AC99B0C59C63CD: `ParticleSystem'"/Game/FactoryGame/VFX/Factory/Miner/P_Mining_${string}${'_01.P_Mining_'}${string}${'_01"\''}`,
		}[],
	],
	mExtractorTypeName: 'Miner',
	mAllowedResourceForms: [
		'RF_SOLID',
	],
};

type FGBuildableResourceExtractor_miner_mk1 = FGBuildableResourceExtractor & FGBuildableResourceExtractor_miner_mk1_base & FGBuildable_powered;

type FGBuildableResourceExtractor_miner_mk1_base = FGBuildableResourceExtractor_miner_base & {
	mDisplayName: 'Miner Mk1',
};

type FGBuildableResourceExtractor_miner_mk2 = FGBuildableResourceExtractor & FGBuildableResourceExtractor_miner_mk2_base & FGBuildable_powered;

type FGBuildableResourceExtractor_miner_mk2_base = FGBuildableResourceExtractor_miner_base & {
	mCanPlayAfterStartUpStopped: docs_json_ts_common_types_bool_string,
	mDisplayName: 'Miner Mk.2',
};

type FGBuildableResourceExtractor_miner_mk3 = FGBuildableResourceExtractor & FGBuildableResourceExtractor_miner_mk3_base & FGBuildable_powered;

type FGBuildableResourceExtractor_miner_mk3_base = FGBuildableResourceExtractor_miner_base & {
	mCanPlayAfterStartUpStopped: docs_json_ts_common_types_bool_string,
	mDisplayName: 'Miner Mk.3',
};

type FGBuildableResourceExtractor_oil = FGBuildableResourceExtractor & FGBuildableResourceExtractor_oil_base & FGBuildable_powered;

type FGBuildableResourceExtractor_oil_base = FGBuildableResourceExtractor_base_with_resources & {
	mAllowedResourceForms: [
		'RF_LIQUID',
	],
};

type FGBuildableResourceExtractor_water = FGBuildableResourceExtractor & FGBuildableResourceExtractor_water_base & FGBuildable_powered;

type FGBuildableResourceExtractor_water_base = FGBuildableResourceExtractor_base_with_resources & {
	mWaterpumpTimeline_RTPC_B8FA6F944E717E3B7A286E84901F620E: docs_json_ts_common_types_decimal_string,
	mWaterpumpTimeline__Direction_B8FA6F944E717E3B7A286E84901F620E: 'Forward',
	PlayPitchAndVolumeRTPCTimeline_RTPC_2B435F41466C37D2AD809A88AA21BA89: docs_json_ts_common_types_decimal_string,
	PlayPitchAndVolumeRTPCTimeline__Direction_2B435F41466C37D2AD809A88AA21BA89: 'Forward',
	mAudioTimerCounter: docs_json_ts_common_types_decimal_string,
	mAudioTimerMS: docs_json_ts_common_types_decimal_string,
	mAudioTimerReference: docs_json_ts_common_types_empty_object,
	mAudioTimelineCounter: docs_json_ts_common_types_decimal_string,
	HasLostSignificance: docs_json_ts_common_types_bool_string,
	mExtractorTypeName: 'None',
	mAllowedResourceForms: [
		'RF_LIQUID',
	],
};

type FGBuildableResourceSink = FGBuildable_powered & FGBuildableResourceSink_base & {
	SFXEngineTimeline_EngineAlpha_073E1D2A4BAD246B3958E183E210FAAE: docs_json_ts_common_types_decimal_string,
	SFXEngineTimeline__Direction_073E1D2A4BAD246B3958E183E210FAAE: 'Forward',
	VFX_SFX_Timeline_EngineAlpha_A2CB706E440839665A39888572D206AA: docs_json_ts_common_types_decimal_string,
	VFX_SFX_Timeline__Direction_A2CB706E440839665A39888572D206AA: 'Forward',
	HastLostSignificance: docs_json_ts_common_types_bool_string,
	mProcessingTime: docs_json_ts_common_types_decimal_string,
	mSavedProducingTimer: docs_json_ts_common_types_decimal_string,
};

type FGBuildableResourceSink_base = FGBuildable_powered_base & {
	mProcessingTime: docs_json_ts_common_types_decimal_string,
};

type FGBuildableResourceSinkShop = FGBuildable_powered & FGBuildableResourceSinkShop_base;

type FGBuildableResourceSinkShop_base = FGBuildable_powered_base & {
	mShopInventoryDefaultSize: docs_json_ts_common_types_integer_string,
};

type FGBuildableSpaceElevator = FGBuildableSpaceElevator_base & FGBuildable_powered;

type FGBuildableSpaceElevator_base = FGBuildable_powered_base & {
	mMapText: 'Space Elevator',
};

type FGBuildableSplitterSmart = FGBuildableSplitterSmart_base & FGBuildableAttachment_splitter;

type FGBuildableSplitterSmart_base = FGBuildableAttachment_splitter_base & {
	OnSortRulesChangedDelegate: docs_json_ts_common_types_empty_object,
	mMaxNumSortRules: docs_json_ts_common_types_integer_string,
	mLastItem: {
		ItemState: docs_json_ts_common_types_empty_object,
	},
	mItemToLastOutputMap: docs_json_ts_common_types_empty_object,
	mLastOutputIndex: docs_json_ts_common_types_integer_string,
};

type FGBuildableStorage = FGBuildableStorage_base & FGBuildable_powered;

type FGBuildableStorage_base = FGBuildable_powered_base & {
	mStackingHeight: docs_json_ts_common_types_decimal_string,
	mInventorySizeX: docs_json_ts_common_types_integer_string,
	mInventorySizeY: docs_json_ts_common_types_integer_string,
};

type FGBuildableTradingPost = FGBuildableTradingPost_base & FGBuildable_powered;

type FGBuildableTradingPost_base = FGBuildable_powered_base & {
	mWorkBenchOccupied: 'Craft Bench occupied',
	mWorkBenchFree: 'Use Craft Bench',
	Meshes: [
        'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6"\'',
        ...('StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6"\'')[],
	],
	mShipUpgradeLevel: docs_json_ts_common_types_integer_string,
	mStorageText: 'Open Storage',
	mMamFreeText: `Use M${string}`,
	mMamOccupiedText: `M${string}${' is occupied'}`,
	mMapText: 'The HUB',
	mGenerators: '',
	mStorageInventorySize: docs_json_ts_common_types_integer_string,
	mStorageVisibilityLevel: docs_json_ts_common_types_integer_string,
	mSpawningGroundZOffset: docs_json_ts_common_types_decimal_string,
	mGroundSearchZDistance: docs_json_ts_common_types_decimal_string,
	mDefaultResources: '',
	mNeedPlayingBuildEffectNotification: docs_json_ts_common_types_bool_string,
};

type FGBuildableTrainPlatform = FGBuildableTrainPlatform_base & FGBuildable_powered;

type FGBuildableTrainPlatform_base = FGBuildable_powered_base & {
	mPlatformConnections: [
        `FGTrainPlatformConnection'"/Game/FactoryGame/${string}${'"\''}`,
        ...`FGTrainPlatformConnection'"/Game/FactoryGame/${string}${'"\''}`[],
	],
	mIsOrientationReversed: docs_json_ts_common_types_bool_string,
	mPlatformDockingStatus: 'ETPDS_None',
	mSavedDockingStatus: 'ETPDS_None',
	mDockingSequenceTimerHandle: docs_json_ts_common_types_empty_object,
};

type FGBuildableTrainPlatform_with_storage = FGBuildable_powered_storage & FGBuildableTrainPlatform_with_storage_base & FGBuildableTrainPlatform;

type FGBuildableTrainPlatform_with_storage_base = FGBuildable_powered_storage_base & FGBuildableTrainPlatform_base;

type FGBuildableTrainPlatformCargo = FGBuildableTrainPlatformCargo_base & FGBuildableTrainPlatform_with_storage;

type FGBuildableTrainPlatformCargo_base = FGBuildableTrainPlatform_with_storage_base & {
	mPotentialDockers: '',
	mFreightCargoType: 'FCT_Standard' | 'FCT_Liquid',
	mCanUnloadAny: docs_json_ts_common_types_bool_string,
	mIsFullUnload: docs_json_ts_common_types_bool_string,
	mCanLoadAny: docs_json_ts_common_types_bool_string,
	mIsFullLoad: docs_json_ts_common_types_bool_string,
	mTimeToCompleteLoad: docs_json_ts_common_types_decimal_string,
	mTimeToSwapLoadVisibility: docs_json_ts_common_types_decimal_string,
	mTimeToCompleteUnload: docs_json_ts_common_types_decimal_string,
	mTimeToSwapUnloadVisibility: docs_json_ts_common_types_decimal_string,
	mStorageInputConnections: '',
	mPipeInputConnections: '',
	mPipeOutputConnections: '',
	mShouldExecuteLoadOrUnload: docs_json_ts_common_types_bool_string,
	mSwapCargoVisibilityTimerHandle: docs_json_ts_common_types_empty_object,
	mReplicatedOutflowRate: docs_json_ts_common_types_decimal_string,
	mReplicatedInflowRate: docs_json_ts_common_types_decimal_string,
};

type FGBuildableWire = FGBuildable & {
	mMaxLength: docs_json_ts_common_types_decimal_string,
	mLengthPerCost: docs_json_ts_common_types_decimal_string,
	mConnections: 'None',
};

type FGColorGun = FGWeaponProjectile_instant & {
	mPrimaryColor: docs_json_ts_common_types_RGBA,
	mSecondaryColor: docs_json_ts_common_types_RGBA,
	mRedundantTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mNoTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mNonColorableTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mColorSlot: docs_json_ts_common_types_integer_string,
	mArmAnimation: 'AE_ColorGun',
};

type FGConsumableDescriptor = FGDescriptor_sinkable & FGConsumableDescriptor_base;

type FGConsumableDescriptor_base = FGDescriptor_sinkable_base & {
	mHealthGain?: docs_json_ts_common_types_decimal_string,
	mCustomHandsMeshScale: docs_json_ts_common_types_decimal_string,
	mCustomRotation: docs_json_ts_common_types_PitchYawRoll_decimal_string_signed,
	mCustomLocation: docs_json_ts_common_types_XYZ_decimal_string,
};

type FGConsumableEquipment = FGEquipment & {
	mRandomAnim?: docs_json_ts_common_types_integer_string,
	mCanPress?: docs_json_ts_common_types_bool_string,
	mAnimData?: [
		{
			Montage_7_2E66F6A948A8606E71185682EA2AC4EC: 'AnimMontage\'"/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_01_Montage.MedkitUse_01_Montage"\'' | 'AnimMontage\'"/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_02_Montage.MedkitUse_02_Montage"\'' | 'AnimMontage\'"/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_03_Montage.MedkitUse_03_Montage"\'',
			CameraAnim_8_AA01C2B248FF438D6C2816B2FA94F1BD: 'CameraAnim\'"/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_01_CameraAnim.MedkitUse_01_CameraAnim"\'' | 'CameraAnim\'"/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_02_CameraAnim.MedkitUse_02_CameraAnim"\'' | 'CameraAnim\'"/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_03_CameraAnim.MedkitUse_03_CameraAnim"\'',
		},
		...{
			Montage_7_2E66F6A948A8606E71185682EA2AC4EC: 'AnimMontage\'"/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_01_Montage.MedkitUse_01_Montage"\'' | 'AnimMontage\'"/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_02_Montage.MedkitUse_02_Montage"\'' | 'AnimMontage\'"/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_03_Montage.MedkitUse_03_Montage"\'',
			CameraAnim_8_AA01C2B248FF438D6C2816B2FA94F1BD: 'CameraAnim\'"/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_01_CameraAnim.MedkitUse_01_CameraAnim"\'' | 'CameraAnim\'"/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_02_CameraAnim.MedkitUse_02_CameraAnim"\'' | 'CameraAnim\'"/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_03_CameraAnim.MedkitUse_03_CameraAnim"\'',
		}[],
	],
	mCurrentAnimData?: docs_json_ts_common_types_empty_object,
	mAttachSocket?: 'hand_rSocket',
};

type FGDescriptor = FGDescriptor_base & {
	mForm: docs_json_ts_0_3_7_7_properties_mForm,
	mPersistentBigIcon: docs_json_ts_0_3_7_7_properties_mPersistentBigIcon | 'None',
	mSmallIcon: docs_json_ts_0_3_7_7_properties_mSmallIcon | 'None',
};

type FGDescriptor_base = isDescribed & {
	mAbbreviatedDisplayName: docs_json_ts_0_3_7_7_properties_mAbbreviatedDisplayName,
	mStackSize: docs_json_ts_0_3_7_7_properties_mStackSize,
	mCanBeDiscarded: docs_json_ts_common_types_bool_string,
	mRememberPickUp: docs_json_ts_common_types_bool_string,
	mEnergyValue: docs_json_ts_common_types_decimal_string,
	mRadioactiveDecay: docs_json_ts_common_types_decimal_string,
	mForm: `RF_${string}`,
	mSmallIcon: `Texture2D${string}` | 'None',
	mPersistentBigIcon: `Texture2D${string}` | 'None',
	mFluidColor: docs_json_ts_common_types_BGRA,
};

type FGDescriptor_BuildMenu = FGDescriptor & FGDescriptor_BuildMenu_base;

type FGDescriptor_BuildMenu_base = FGDescriptor_base & {
	mSubCategories: docs_json_ts_0_3_7_7_properties_mSubCategories,
	mBuildMenuPriority: docs_json_ts_common_types_decimal_string,
};

type FGDescriptor_sinkable = FGDescriptor_sinkable_base & FGDescriptor;

type FGDescriptor_sinkable_base = FGDescriptor_base & {
	mResourceSinkPoints: docs_json_ts_common_types_integer_string,
};

type FGEquipment = FGEquipment_base & {
	mAttachSocket: 'None' | 'hand_rSocket' | 'hand_lSocket' | 'jumpingStilt_lSocket' | 'helmetSocket',
};

type FGEquipment_base = hasClassName & {
	mEquipmentSlot: 'ES_ARMS' | 'ES_BACK',
	mAttachSocket: Exclude<string, ''>,
	mCostToUse: '' | docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mArmAnimation: 'AE_Consumables' | 'AE_OneHandEquipment' | 'AE_ChainSaw' | 'AE_Generic2Hand' | 'AE_None' | 'AE_RebarGun' | 'AE_Rifle' | 'AE_ShockShank' | 'AE_StunSpear' | 'AE_PortableMiner' | 'AE_ObjectScanner' | 'AE_ColorGun' | 'AE_Nobelisk' | 'AE_Generic1Hand',
	mBackAnimation: 'BE_None' | 'BE_Jetpack',
	mHasPersistentOwner: docs_json_ts_common_types_bool_string,
	mUseDefaultPrimaryFire: docs_json_ts_common_types_bool_string,
};

type FGEquipment_dispenser = FGEquipment & {
	mPlaceDistanceMax: docs_json_ts_common_types_decimal_string,
};

type FGEquipment_has_sound = FGEquipment & {
	mPlayingSound: docs_json_ts_common_types_bool_string,
};

type FGEquipmentStunSpear_base = FGEquipment & {
	mRandomAttackAnim: docs_json_ts_common_types_integer_string,
	mSecondSwingMaxTime: docs_json_ts_common_types_decimal_string,
	mSecondSwingCooldDownTime: docs_json_ts_common_types_decimal_string,
	mDamage: docs_json_ts_common_types_integer_string,
	mAttackDistance: docs_json_ts_common_types_decimal_string,
	mArmAnimation?: 'AE_ShockShank' | 'AE_StunSpear',
};

type FGGolfCartDispenser = FGEquipment_dispenser & {
	mArmAnimation: 'AE_Generic2Hand',
};

type FGInstructive = isNamed & {
	FullName: `BlueprintGeneratedClass /Game/FactoryGame/${string}${''}`,
	mRelevantEvents: null | docs_json_ts_0_3_7_7_properties_mRelevantEvents,
};

type FGItemDescriptorNuclearFuel = FGDescriptor_sinkable & FGItemDescriptorNuclearFuel_base;

type FGItemDescriptorNuclearFuel_base = FGDescriptor_sinkable_base & {
	mAmountOfWaste: docs_json_ts_common_types_integer_string,
};

type FGNobeliskDetonator = FGWeaponProjectile_thrown & {
	mArmAnimation: 'AE_Nobelisk',
};

type FGParachute = FGEquipment & FGParachute_base;

type FGParachute_base = FGEquipment_base & {
	mTerminalVelocityZ: docs_json_ts_common_types_decimal_string,
	mIsDeployed: docs_json_ts_common_types_bool_string,
};

type FGPipeHyperStart = FGPipeHyperStart_base & FGBuildable_pole_with_length_and_power;

type FGPipeHyperStart_base = FGBuildable_pole_with_length_and_power_base & {
	InterpolateEngineSound_InterpolateEngineAlpha_064FA8194B7224F6F187999413D1C8A6: docs_json_ts_common_types_decimal_string,
	InterpolateEngineSound__Direction_064FA8194B7224F6F187999413D1C8A6: 'Forward',
	mWindDirectionFromTurbine: docs_json_ts_common_types_empty_object,
	['mIsWindSoundPlaying?']: docs_json_ts_common_types_bool_string,
	mAudioTimerCounter: docs_json_ts_common_types_decimal_string,
	AudioCounterTimer: docs_json_ts_common_types_empty_object,
	IsEnginePlaying: docs_json_ts_common_types_bool_string,
	mOpeningOffset: docs_json_ts_common_types_decimal_string,
	mInitialMinSpeedFactor: docs_json_ts_common_types_decimal_string,
};

type FGPortableMinerDispenser = FGEquipment_dispenser & {
	mAllowedResourceForms: docs_json_ts_0_3_7_7_properties_mAllowedResourceForms,
};

type FGRecipe = FGRecipe_base_version_specific & FGRecipe_mProducedIn;

type FGRecipe_base = FGInstructive & {
	mManufactoringDuration: docs_json_ts_common_types_decimal_string,
	mManualManufacturingMultiplier: docs_json_ts_common_types_decimal_string,
};

type FGRecipe_base_version_specific = FGRecipe_base & {
	mIngredients: docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mProduct: docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
};

type FGRecipe_mProducedIn = FGInstructive & {
	mProducedIn: '' | [
        '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C' | '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/AutomatedWorkBench/Build_AutomatedWorkBench.Build_AutomatedWorkBench_C' | '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/Converter/Build_Converter.Build_Converter_C' | '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C' | '/Game/FactoryGame/Buildable/Factory/OilRefinery/Build_OilRefinery.Build_OilRefinery_C' | '/Game/FactoryGame/Buildable/Factory/Packager/Build_Packager.Build_Packager_C' | '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C' | '/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C' | '/Script/FactoryGame.FGBuildGun' | '/Script/FactoryGame.FGBuildableAutomatedWorkBench',
        ...('/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C' | '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/AutomatedWorkBench/Build_AutomatedWorkBench.Build_AutomatedWorkBench_C' | '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/Converter/Build_Converter.Build_Converter_C' | '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C' | '/Game/FactoryGame/Buildable/Factory/OilRefinery/Build_OilRefinery.Build_OilRefinery_C' | '/Game/FactoryGame/Buildable/Factory/Packager/Build_Packager.Build_Packager_C' | '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C' | '/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C' | '/Script/FactoryGame.FGBuildGun' | '/Script/FactoryGame.FGBuildableAutomatedWorkBench')[],
	],
};

type FGResourceDescriptor = FGDescriptor_sinkable & FGResourceDescriptor_base;

type FGResourceDescriptor_base = FGDescriptor_sinkable_base & {
	mDecalSize: docs_json_ts_common_types_decimal_string,
	mPingColor: docs_json_ts_common_types_RGBA,
	mCollectSpeedMultiplier: docs_json_ts_common_types_decimal_string,
	mManualMiningAudioName: 'Metal',
};

type FGSchematic = FGInstructive & {
	mType: docs_json_ts_0_3_7_7_properties_mType,
	mSubCategories: null | [
	] | docs_json_ts_0_3_7_7_properties_mSubCategories,
	mCost: null | docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mTimeToComplete: docs_json_ts_common_types_decimal_string,
	mIncludeInBuilds: 'IIB_PublicBuilds',
};

type FGSnowballWeapon = FGWeaponProjectile_thrown & {
	mArmAnimation: 'AE_Generic1Hand',
};

type FGWeaponInstantFire = FGWeaponProjectile_instant & FGWeaponInstantFire_base;

type FGWeaponInstantFire_base = FGWeaponProjectile_instant_base & {
	Fire: docs_json_ts_common_types_empty_object,
	mLockAngle: docs_json_ts_common_types_decimal_string,
	mHasReloadedOnce: docs_json_ts_common_types_bool_string,
	mArmAnimation: 'AE_Rifle',
};

type FGWeaponProjectile = FGWeaponProjectile_base & FGWeaponProjectile_base_version_specific;

type FGWeaponProjectile_base = FGEquipment_base & {
	mReloadTime: docs_json_ts_common_types_decimal_string,
	mFireRate: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'hand_lSocket' | 'hand_rSocket',
	mArmAnimation: 'AE_RebarGun' | 'AE_Rifle' | 'AE_ColorGun' | 'AE_Nobelisk' | 'AE_Generic1Hand',
};

type FGWeaponProjectile_base_version_specific = FGEquipment & {
	mMagSize: docs_json_ts_common_types_integer_string,
	mCurrentAmmo: docs_json_ts_common_types_integer_string,
};

type FGWeaponProjectile_instant = FGWeaponProjectile & FGWeaponProjectile_instant_base & FGWeaponProjectile_instant_base_version_specific;

type FGWeaponProjectile_instant_base = FGWeaponProjectile_base & {
	mAttachSocket: 'hand_rSocket',
};

type FGWeaponProjectile_instant_base_version_specific = FGWeaponProjectile_base & {
	mInstantHitDamage: docs_json_ts_common_types_decimal_string,
	mWeaponTraceLength: docs_json_ts_common_types_decimal_string,
};

type FGWeaponProjectile_thrown = FGWeaponProjectile & {
	mExplosiveData: {
		ProjectileClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
		ProjectileLifeSpan: docs_json_ts_common_types_decimal_string_signed,
		ProjectileStickSpan: docs_json_ts_common_types_decimal_string_signed,
		ExplosionDamage: docs_json_ts_common_types_integer_string,
		ExplosionRadius: docs_json_ts_common_types_decimal_string,
		ImpactDamage: docs_json_ts_common_types_integer_string,
		ExplodeAtEndOfLife: docs_json_ts_common_types_bool_string,
		DamageType: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
		DamageTypeExplode: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
	},
	mDispensedExplosives: '',
	mIsPendingExecuteFire: docs_json_ts_common_types_bool_string,
	mMaxChargeTime: docs_json_ts_common_types_decimal_string,
	mMaxThrowForce: docs_json_ts_common_types_integer_string,
	mMinThrowForce: docs_json_ts_common_types_integer_string,
	mDelayBetweenExplosions: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'hand_lSocket',
	mArmAnimation: 'AE_Nobelisk' | 'AE_Generic1Hand',
};

type FGWeaponProjectileFire = FGWeaponProjectile & FGWeaponProjectileFire_base & FGWeaponProjectileFire_base_random & FGWeaponProjectileFire_base_version_specific;

type FGWeaponProjectileFire_base = FGWeaponProjectile_base & {
	mAttachSocket: 'hand_rSocket',
};

type FGWeaponProjectileFire_base_random = FGWeaponProjectile_base & {
	mRandomReloadAnim: docs_json_ts_common_types_integer_string,
	mRandomStingerAnim: docs_json_ts_common_types_integer_string,
};

type FGWeaponProjectileFire_base_version_specific = FGWeaponProjectile_base & {
	mMuteDryFire: docs_json_ts_common_types_bool_string,
	mProjectileData: {
		ProjectileClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
		ProjectileLifeSpan: docs_json_ts_common_types_decimal_string,
		ProjectileStickSpan: docs_json_ts_common_types_decimal_string,
		ExplosionDamage: docs_json_ts_common_types_integer_string,
		ImpactDamage: docs_json_ts_common_types_integer_string,
		CanTriggerExplodeBySameClass: docs_json_ts_common_types_bool_string,
		DamageType: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
		DamageTypeExplode: 'Class\'"/Script/FactoryGame.FGDamageType"\'',
	},
	mArmAnimation: 'AE_RebarGun',
};

export type {
	hasClassName,
	isDescribed,
	isNamed,
	FGBuildable,
	FGBuildable_base,
	FGBuildable_base_version_specific,
	FGBuildable_DisableAttachmentSnapOn,
	FGBuildable_docking_station,
	FGBuildable_docking_station_base,
	FGBuildable_occupied,
	FGBuildable_pole,
	FGBuildable_pole_base,
	FGBuildable_pole_with_length,
	FGBuildable_pole_with_length_and_power,
	FGBuildable_pole_with_length_and_power_base,
	FGBuildable_powered,
	FGBuildable_powered_base,
	FGBuildable_powered_base_resources,
	FGBuildable_powered_storage,
	FGBuildable_powered_storage_base,
	FGBuildable_spline,
	FGBuildable_tiered,
	FGBuildable_with_height,
	FGBuildable_with_height_base,
	FGBuildable_with_height_and_elevation,
	FGBuildable_with_height_and_width,
	FGBuildable_with_height_and_width_base,
	FGBuildable_with_length,
	FGBuildable_with_size,
	FGBuildable_with_size_base,
	FGBuildable_with_size_and_elevation,
	FGBuildable_with_width,
	FGBuildable_with_width_base,
	FGBuildableAttachment,
	FGBuildableAttachment_base,
	FGBuildableAttachment_splitter,
	FGBuildableAttachment_splitter_base,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentMerger_base,
	FGBuildableConveyorBelt_base,
	FGBuildableConveyorBelt_spline,
	FGBuildableConveyorLift,
	FGBuildableDockingStation,
	FGBuildableDockingStation_base,
	FGBuildableFactory_jump_pad,
	FGBuildableFactory_jump_pad_base,
	FGBuildableFactory_landing_pad,
	FGBuildableFactory_landing_pad_base,
	FGBuildableFactorySimpleProducer,
	FGBuildableFactorySimpleProducer_base,
	FGBuildableGenerator,
	FGBuildableGenerator_base,
	FGBuildableGenerator_no_fuel,
	FGBuildableGenerator_no_fuel_base,
	FGBuildableGeneratorFuel_base,
	FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_biomass_base,
	FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_coal_base,
	FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorFuel_fuel_base,
	FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorGeoThermal_base,
	FGBuildableGeneratorNuclear,
	FGBuildableGeneratorNuclear_base,
	FGBuildableJumppad,
	FGBuildableJumppad_base,
	FGBuildableLadder,
	FGBuildableManufacturer_base,
	FGBuildableManufacturer_base_IsPowered,
	FGBuildableManufacturer_base_mProductionEffectsRunning,
	FGBuildableManufacturer_base_packager,
	FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildablePipeline,
	FGBuildablePipeline_base,
	FGBuildablePipeline_base_no_indicator,
	FGBuildablePipeline_base_spline,
	FGBuildablePipeline_junction,
	FGBuildablePipeline_junction_base,
	FGBuildablePipelineJunction,
	FGBuildablePipelineJunction_base,
	FGBuildablePipelinePump_base,
	FGBuildablePipelinePump_powered_base,
	FGBuildablePipelinePump_powered_base_base,
	FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_pump_base,
	FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport,
	FGBuildablePipeReservoir,
	FGBuildablePipeReservoir_base,
	FGBuildablePole,
	FGBuildablePole_base,
	FGBuildablePowerPole,
	FGBuildableRadarTower,
	FGBuildableRadarTower_base,
	FGBuildableRailroadStation,
	FGBuildableRailroadStation_base,
	FGBuildableRailroadTrack,
	FGBuildableResourceExtractor,
	FGBuildableResourceExtractor_base,
	FGBuildableResourceExtractor_base_with_resources,
	FGBuildableResourceExtractor_miner_base,
	FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk1_base,
	FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk2_base,
	FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_miner_mk3_base,
	FGBuildableResourceExtractor_oil,
	FGBuildableResourceExtractor_oil_base,
	FGBuildableResourceExtractor_water,
	FGBuildableResourceExtractor_water_base,
	FGBuildableResourceSink,
	FGBuildableResourceSink_base,
	FGBuildableResourceSinkShop,
	FGBuildableResourceSinkShop_base,
	FGBuildableSpaceElevator,
	FGBuildableSpaceElevator_base,
	FGBuildableSplitterSmart,
	FGBuildableSplitterSmart_base,
	FGBuildableStorage,
	FGBuildableStorage_base,
	FGBuildableTradingPost,
	FGBuildableTradingPost_base,
	FGBuildableTrainPlatform,
	FGBuildableTrainPlatform_base,
	FGBuildableTrainPlatform_with_storage,
	FGBuildableTrainPlatform_with_storage_base,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformCargo_base,
	FGBuildableWire,
	FGColorGun,
	FGConsumableDescriptor,
	FGConsumableDescriptor_base,
	FGConsumableEquipment,
	FGDescriptor,
	FGDescriptor_base,
	FGDescriptor_BuildMenu,
	FGDescriptor_BuildMenu_base,
	FGDescriptor_sinkable,
	FGDescriptor_sinkable_base,
	FGEquipment,
	FGEquipment_base,
	FGEquipment_dispenser,
	FGEquipment_has_sound,
	FGEquipmentStunSpear_base,
	FGGolfCartDispenser,
	FGInstructive,
	FGItemDescriptorNuclearFuel,
	FGItemDescriptorNuclearFuel_base,
	FGNobeliskDetonator,
	FGParachute,
	FGParachute_base,
	FGPipeHyperStart,
	FGPipeHyperStart_base,
	FGPortableMinerDispenser,
	FGRecipe,
	FGRecipe_base,
	FGRecipe_base_version_specific,
	FGRecipe_mProducedIn,
	FGResourceDescriptor,
	FGResourceDescriptor_base,
	FGSchematic,
	FGSnowballWeapon,
	FGWeaponInstantFire,
	FGWeaponInstantFire_base,
	FGWeaponProjectile,
	FGWeaponProjectile_base,
	FGWeaponProjectile_base_version_specific,
	FGWeaponProjectile_instant,
	FGWeaponProjectile_instant_base,
	FGWeaponProjectile_instant_base_version_specific,
	FGWeaponProjectile_thrown,
	FGWeaponProjectileFire,
	FGWeaponProjectileFire_base,
	FGWeaponProjectileFire_base_random,
	FGWeaponProjectileFire_base_version_specific,
};
