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
} from './../types/properties.ts';

import type {
	BGRA as docs_json_ts_common_types_BGRA,
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
	decimal_string_signed as docs_json_ts_common_types_decimal_string_signed,
	empty_object as docs_json_ts_common_types_empty_object,
	integer_string as docs_json_ts_common_types_integer_string,
	integer_string_signed as docs_json_ts_common_types_integer_string_signed,
	RGBA as docs_json_ts_common_types_RGBA,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
} from './../../common/types.ts';

type hasClassName = {
	ClassName: `${string}${'_'}${string}${'_C'}`,
};

type isDescribed = isNamed & {
	mDescription: string,
};

type isNamed = hasClassName & {
	mDisplayName: docs_json_ts_0_3_7_7_properties_mDisplayName,
};

type FGBuildable = isDescribed & {
	MaxRenderDistance: docs_json_ts_common_types_decimal_string_signed,
	mHighlightVector: docs_json_ts_common_types_XYZ_decimal_string,
	mMaterialNameToInstanceManager: docs_json_ts_common_types_empty_object,
	mBlockSharingMaterialInstanceMapping: docs_json_ts_common_types_bool_string,
	mExcludeFromMaterialInstancing: '',
	mSkipBuildEffect: docs_json_ts_common_types_bool_string,
	mBuildEffectSpeed: docs_json_ts_common_types_decimal_string,
	mForceNetUpdateOnRegisterPlayer: docs_json_ts_common_types_bool_string,
	mShouldShowHighlight: docs_json_ts_common_types_bool_string,
	mAllowCleranceSeparationEvenIfStackedOn: docs_json_ts_common_types_bool_string,
	mInteractingPlayers: '',
	mIsUseable: docs_json_ts_common_types_bool_string,
	mHideOnBuildEffectStart: docs_json_ts_common_types_bool_string,
};

type FGBuildable_DisableAttachmentSnapOn = FGBuildable & {
	mDisableAttachmentSnapOn: docs_json_ts_common_types_empty_object,
};

type FGBuildable_docking_station = FGBuildable_powered_storage & {
	mMapText: string,
	mTransferSpeed: docs_json_ts_common_types_decimal_string,
	mStackTransferSize: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_pole = FGBuildable & {
	mUseStaticHeight: docs_json_ts_common_types_bool_string,
	mCanStack: docs_json_ts_common_types_bool_string,
	mStackHeight: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_pole_with_length = FGBuildable_pole & {
	mLength: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_pole_with_length_and_power = FGBuildable_pole_with_length & FGBuildable_powered;

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

type FGBuildable_powered = FGBuildable_powered_base & (FGBuildable & {
	mSignificanceBias: docs_json_ts_common_types_decimal_string,
});

type FGBuildable_powered_storage_base = FGBuildable_powered_base & {
	mStorageSizeX: docs_json_ts_common_types_integer_string,
	mStorageSizeY: docs_json_ts_common_types_integer_string,
};

type FGBuildable_powered_storage = FGBuildable_powered_storage_base & FGBuildable_powered;

type FGBuildable_spline = FGBuildable_with_length & {
	mSplineData: '',
};

type FGBuildable_with_height = FGBuildable & {
	mHeight: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_height_and_elevation = FGBuildable_with_height & FGBuildable_with_size_and_elevation & FGBuildable_DisableAttachmentSnapOn;

type FGBuildable_with_height_and_width = FGBuildable_with_height & FGBuildable_with_width;

type FGBuildable_with_length = FGBuildable & {
	mMeshLength: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_size_and_elevation = FGBuildable & {
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

type FGBuildable_with_width = FGBuildable & {
	mWidth: docs_json_ts_common_types_decimal_string,
};

type FGBuildableAttachment_base = FGBuildable_powered_base & {
	mCurrentInventoryIndex: docs_json_ts_common_types_integer_string,
};

type FGBuildableAttachment = FGBuildableAttachment_base & FGBuildable_powered;

type FGBuildableAttachment_splitter = FGBuildableAttachment & {
	mCurrentOutputIndex: docs_json_ts_common_types_integer_string_signed,
	mDistributionTable: '',
};

type FGBuildableConveyorBelt_base = FGBuildable & {
	mItemMeshMap: docs_json_ts_common_types_empty_object,
	mSpeed: docs_json_ts_common_types_decimal_string,
	mItems: docs_json_ts_common_types_empty_object,
};

type FGBuildableConveyorBelt_spline = FGBuildable_spline & FGBuildableConveyorBelt_base;

type FGBuildableGenerator = FGBuildableGenerator_no_fuel & {
	mCachedLoadPercentage?: docs_json_ts_common_types_decimal_string,
	mFuelClasses: '',
	mDefaultFuelClasses: [
        '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C' | '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C' | '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C',
        ...('/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C' | '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C' | '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C')[],
	] | [
		'/Script/FactoryGame.FGItemDescriptorBiomass',
	] | [
        '/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C' | '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C' | '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C',
        ...('/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C' | '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C' | '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C')[],
	] | [
		'/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C',
	],
	mAvailableFuelClasses: '',
	mFuelResourceForm: docs_json_ts_0_3_7_7_properties_mForm,
	mRequiresSupplementalResource: docs_json_ts_common_types_bool_string,
	mSupplementalLoadAmount: docs_json_ts_common_types_integer_string,
	mSupplementalToPowerRatio: docs_json_ts_common_types_decimal_string,
	mCachedInputConnections: '',
	mCachedPipeInputConnections: '',
};

type FGBuildableGenerator_no_fuel_base = FGBuildable_powered_base & {
	mPowerProduction: docs_json_ts_common_types_decimal_string,
	mPowerProductionExponent: docs_json_ts_common_types_decimal_string,
	mLoadPercentage: docs_json_ts_common_types_decimal_string,
};

type FGBuildableGenerator_no_fuel = FGBuildableGenerator_no_fuel_base & FGBuildable_powered;

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

type FGBuildableManufacturer_Build_ConstructorMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildable_powered;

type FGBuildableManufacturer_Build_SmelterMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildableManufacturer_Build_FoundryMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildableManufacturer_Build_OilRefinery_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildableManufacturer_Build_AssemblerMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildable_powered;

type FGBuildableManufacturer_Build_Packager_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildableManufacturer_base_packager & FGBuildable_powered;

type FGBuildableManufacturer_Build_ManufacturerMk1_C = FGBuildableManufacturer_base & FGBuildable_powered;

type FGBuildablePipeline_base = FGBuildablePipeline_base_no_indicator & {
	mIndicatorData: docs_json_ts_common_types_empty_object,
};

type FGBuildablePipeline_base_no_indicator = FGBuildable & {
	mRadius: docs_json_ts_common_types_decimal_string,
	mFluidBox: docs_json_ts_common_types_empty_object,
	mPipeConnections: '',
};

type FGBuildablePipeline_base_spline = FGBuildablePipeline_base & FGBuildable_spline;

type FGBuildablePipeline_junction = FGBuildable_powered & FGBuildablePipeline_base_no_indicator;

type FGBuildablePipelinePump_base = FGBuildablePipeline_base & FGBuildablePipelinePump_powered_base;

type FGBuildablePipelinePump_powered_base = FGBuildable_powered & {
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

type FGBuildablePole = FGBuildable_pole & {
	mHeight: docs_json_ts_common_types_decimal_string,
};

type FGBuildableResourceExtractor_base = FGBuildable_powered & {
	mExtractStartupTime: docs_json_ts_common_types_decimal_string_signed,
	mExtractStartupTimer: docs_json_ts_common_types_decimal_string,
	mExtractCycleTime: docs_json_ts_common_types_decimal_string,
	mItemsPerCycle: docs_json_ts_common_types_integer_string,
	mAllowedResourceForms: docs_json_ts_0_3_7_7_properties_mAllowedResourceForms,
	mRequireResourceAtMinimumDepthChecks: docs_json_ts_common_types_bool_string,
	mMinimumDepthForPlacement: docs_json_ts_common_types_decimal_string,
	mDepthTraceOriginOffset: docs_json_ts_common_types_XYZ_decimal_string,
	mOnlyAllowCertainResources: docs_json_ts_common_types_bool_string,
	mAllowedResources: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list | '',
	mExtractionOffset: docs_json_ts_common_types_XYZ_decimal_string,
	mExtractorTypeName: 'None' | 'Miner',
	mPipeOutputConnections: '',
	mReplicatedFlowRate: docs_json_ts_common_types_decimal_string,
};

type FGBuildableTrainPlatform = FGBuildable_powered & {
	mPlatformConnections: [
        `FGTrainPlatformConnection'"/Game/FactoryGame/${string}${'"\''}`,
        ...`FGTrainPlatformConnection'"/Game/FactoryGame/${string}${'"\''}`[],
	],
	mIsOrientationReversed: docs_json_ts_common_types_bool_string,
	mPlatformDockingStatus: 'ETPDS_None',
	mSavedDockingStatus: 'ETPDS_None',
	mDockingSequenceTimerHandle: docs_json_ts_common_types_empty_object,
};

type FGBuildableTrainPlatform_with_storage = (FGBuildable_powered_storage & {
	[key: string]: unknown,
}) & (FGBuildableTrainPlatform);

type FGBuildableWire = FGBuildable & {
	mMaxLength: docs_json_ts_common_types_decimal_string,
	mLengthPerCost: docs_json_ts_common_types_decimal_string,
	mConnections: 'None',
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

type FGDescriptor = isDescribed & {
	mAbbreviatedDisplayName: docs_json_ts_0_3_7_7_properties_mAbbreviatedDisplayName,
	mStackSize: docs_json_ts_0_3_7_7_properties_mStackSize,
	mCanBeDiscarded: docs_json_ts_common_types_bool_string,
	mRememberPickUp: docs_json_ts_common_types_bool_string,
	mEnergyValue: docs_json_ts_common_types_decimal_string,
	mRadioactiveDecay: docs_json_ts_common_types_decimal_string,
	mForm: docs_json_ts_0_3_7_7_properties_mForm,
	mSmallIcon: docs_json_ts_0_3_7_7_properties_mSmallIcon | 'None',
	mPersistentBigIcon: docs_json_ts_0_3_7_7_properties_mPersistentBigIcon | 'None',
	mFluidColor: docs_json_ts_common_types_BGRA,
};

type FGDescriptor_BuildMenu = FGDescriptor & {
	mSubCategories: docs_json_ts_0_3_7_7_properties_mSubCategories,
	mBuildMenuPriority: docs_json_ts_common_types_decimal_string,
};

type FGDescriptor_sinkable = FGDescriptor & {
	mResourceSinkPoints: docs_json_ts_common_types_integer_string,
};

type FGEquipment = hasClassName & {
	mEquipmentSlot: 'ES_ARMS' | 'ES_BACK',
	mAttachSocket: 'None' | 'hand_rSocket' | 'hand_lSocket' | 'jumpingStilt_lSocket' | 'helmetSocket',
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

type FGInstructive = isNamed & {
	FullName: `BlueprintGeneratedClass /Game/FactoryGame/${string}${''}`,
	mRelevantEvents: null | docs_json_ts_0_3_7_7_properties_mRelevantEvents,
};

type FGRecipe = FGRecipe_base & FGRecipe_mProducedIn;

type FGRecipe_base = FGInstructive & {
	mIngredients: docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mProduct: docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mManufactoringDuration: docs_json_ts_common_types_decimal_string,
	mManualManufacturingMultiplier: docs_json_ts_common_types_decimal_string,
};

type FGRecipe_mProducedIn = FGInstructive & {
	mProducedIn: '' | [
        '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C' | '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/AutomatedWorkBench/Build_AutomatedWorkBench.Build_AutomatedWorkBench_C' | '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/Converter/Build_Converter.Build_Converter_C' | '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C' | '/Game/FactoryGame/Buildable/Factory/OilRefinery/Build_OilRefinery.Build_OilRefinery_C' | '/Game/FactoryGame/Buildable/Factory/Packager/Build_Packager.Build_Packager_C' | '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C' | '/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C' | '/Script/FactoryGame.FGBuildGun' | '/Script/FactoryGame.FGBuildableAutomatedWorkBench',
        ...('/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C' | '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/AutomatedWorkBench/Build_AutomatedWorkBench.Build_AutomatedWorkBench_C' | '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/Converter/Build_Converter.Build_Converter_C' | '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C' | '/Game/FactoryGame/Buildable/Factory/OilRefinery/Build_OilRefinery.Build_OilRefinery_C' | '/Game/FactoryGame/Buildable/Factory/Packager/Build_Packager.Build_Packager_C' | '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C' | '/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C' | '/Script/FactoryGame.FGBuildGun' | '/Script/FactoryGame.FGBuildableAutomatedWorkBench')[],
	],
};

type FGSchematic = FGInstructive & {
	mType: docs_json_ts_0_3_7_7_properties_mType,
	mSubCategories: null | [
	] | docs_json_ts_0_3_7_7_properties_mSubCategories,
	mCost: null | docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mTimeToComplete: docs_json_ts_common_types_decimal_string,
	mIncludeInBuilds: 'IIB_PublicBuilds',
};

type FGWeaponProjectile = FGEquipment & {
	mMagSize: docs_json_ts_common_types_integer_string,
	mCurrentAmmo: docs_json_ts_common_types_integer_string,
	mReloadTime: docs_json_ts_common_types_decimal_string,
	mFireRate: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'hand_lSocket' | 'hand_rSocket',
	mArmAnimation: 'AE_RebarGun' | 'AE_Rifle' | 'AE_ColorGun' | 'AE_Nobelisk' | 'AE_Generic1Hand',
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

type FGWeaponProjectile_instant = FGWeaponProjectile & {
	mInstantHitDamage: docs_json_ts_common_types_decimal_string,
	mWeaponTraceLength: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'hand_rSocket',
};

export type {
	hasClassName,
	isDescribed,
	isNamed,
	FGBuildable,
	FGBuildable_DisableAttachmentSnapOn,
	FGBuildable_docking_station,
	FGBuildable_pole,
	FGBuildable_pole_with_length,
	FGBuildable_pole_with_length_and_power,
	FGBuildable_powered_base,
	FGBuildable_powered,
	FGBuildable_powered_storage_base,
	FGBuildable_powered_storage,
	FGBuildable_spline,
	FGBuildable_with_height,
	FGBuildable_with_height_and_elevation,
	FGBuildable_with_height_and_width,
	FGBuildable_with_length,
	FGBuildable_with_size_and_elevation,
	FGBuildable_with_width,
	FGBuildableAttachment_base,
	FGBuildableAttachment,
	FGBuildableAttachment_splitter,
	FGBuildableConveyorBelt_base,
	FGBuildableConveyorBelt_spline,
	FGBuildableGenerator,
	FGBuildableGenerator_no_fuel_base,
	FGBuildableGenerator_no_fuel,
	FGBuildableManufacturer_base,
	FGBuildableManufacturer_base_IsPowered,
	FGBuildableManufacturer_base_mProductionEffectsRunning,
	FGBuildableManufacturer_base_packager,
	FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildablePipeline_base,
	FGBuildablePipeline_base_no_indicator,
	FGBuildablePipeline_base_spline,
	FGBuildablePipeline_junction,
	FGBuildablePipelinePump_base,
	FGBuildablePipelinePump_powered_base,
	FGBuildablePole,
	FGBuildableResourceExtractor_base,
	FGBuildableTrainPlatform,
	FGBuildableTrainPlatform_with_storage,
	FGBuildableWire,
	FGConsumableEquipment,
	FGDescriptor,
	FGDescriptor_BuildMenu,
	FGDescriptor_sinkable,
	FGEquipment,
	FGEquipment_dispenser,
	FGEquipment_has_sound,
	FGEquipmentStunSpear_base,
	FGInstructive,
	FGRecipe,
	FGRecipe_base,
	FGRecipe_mProducedIn,
	FGSchematic,
	FGWeaponProjectile,
	FGWeaponProjectile_thrown,
	FGWeaponProjectile_instant,
};
