/* eslint-disable @stylistic/max-len */

import type {
	AnimMontage_quoted as docs_json_ts_0_3_7_7_properties_AnimMontage_quoted,
	BlueprintGeneratedClass_non_quoted as docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_non_quoted,
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
	CameraAnim_quoted as docs_json_ts_0_3_7_7_properties_CameraAnim_quoted,
	Class_quoted as docs_json_ts_0_3_7_7_properties_Class_quoted,
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	FGTrainPlatformConnection_quoted as docs_json_ts_0_3_7_7_properties_FGTrainPlatformConnection_quoted,
	ItemClass_Amount_list as docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mAbbreviatedDisplayName as docs_json_ts_0_3_7_7_properties_mAbbreviatedDisplayName,
	mAllowedResourceForms as docs_json_ts_0_3_7_7_properties_mAllowedResourceForms,
	MaterialInstanceConstant_quoted as docs_json_ts_0_3_7_7_properties_MaterialInstanceConstant_quoted,
	mDisableSnapOn_front_bottom as docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_bottom,
	mDisableSnapOn_front_left_top_bottom as docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_left_top_bottom,
	mDisableSnapOn_front_top as docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_top,
	mDisableSnapOn_front_top_bottom as docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_top_bottom,
	mDisableSnapOn_right_left_top_bottom as docs_json_ts_0_3_7_7_properties_mDisableSnapOn_right_left_top_bottom,
	mDisableSnapOn_top_bottom as docs_json_ts_0_3_7_7_properties_mDisableSnapOn_top_bottom,
	mDisplayName as docs_json_ts_0_3_7_7_properties_mDisplayName,
	mForm as docs_json_ts_0_3_7_7_properties_mForm,
	mProducedIn as docs_json_ts_0_3_7_7_properties_mProducedIn,
	mRelevantEvents as docs_json_ts_0_3_7_7_properties_mRelevantEvents,
	mSchematicDependencies_item as docs_json_ts_0_3_7_7_properties_mSchematicDependencies_item,
	mStackSize as docs_json_ts_0_3_7_7_properties_mStackSize,
	mSubCategories as docs_json_ts_0_3_7_7_properties_mSubCategories,
	mType as docs_json_ts_0_3_7_7_properties_mType,
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
	mUnlocks_item_mResourcesToAddToScanner as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mResourcesToAddToScanner,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
	ParticleSystem_quoted as docs_json_ts_0_3_7_7_properties_ParticleSystem_quoted,
	RawResources as docs_json_ts_0_3_7_7_properties_RawResources,
	RequiredSchematic as docs_json_ts_0_3_7_7_properties_RequiredSchematic,
	Texture2D as docs_json_ts_0_3_7_7_properties_Texture2D,
	Texture2D_base as docs_json_ts_0_3_7_7_properties_Texture2D_base,
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
	ClassName: `${Exclude<string, ''>}${'_'}${Exclude<string, ''>}${'_C'}`,
};

type isDescribed = isNamed & {
	mDescription: string,
};

type isNamed = hasClassName & {
	mDisplayName: docs_json_ts_0_3_7_7_properties_mDisplayName,
};

type FGBuildable = FGBuildable_base & FGBuildable_base_version_specific;

type FGBuildable_base = FGBuildable_base_pre_update8 & {
	mHighlightVector: docs_json_ts_common_types_XYZ_decimal_string,
	mShouldShowHighlight: docs_json_ts_common_types_bool_string,
};

type FGBuildable_base_pre_update8 = isDescribed & {
	MaxRenderDistance: docs_json_ts_common_types_decimal_string_signed,
	mSkipBuildEffect: docs_json_ts_common_types_bool_string,
	mBuildEffectSpeed: docs_json_ts_common_types_decimal_string,
	mForceNetUpdateOnRegisterPlayer: docs_json_ts_common_types_bool_string,
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

type FGBuildable_docking_station_base = FGBuildable_docking_station_base_with_mMapText & FGBuildable_docking_station_base_base;

type FGBuildable_docking_station_base_base = FGBuildable_docking_station_base_base_base & FGBuildable_powered_storage_base_base;

type FGBuildable_docking_station_base_base_base = FGBuildable_powered_storage_base_base_base & {
	mTransferSpeed: docs_json_ts_common_types_decimal_string,
	mStackTransferSize: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_docking_station_base_with_mMapText = FGBuildable_docking_station_base_base_base & {
	mMapText: string,
};

type FGBuildable_occupied = FGBuildable_occupied_base & FGBuildable;

type FGBuildable_occupied_base = {
	mOccupiedText: Exclude<string, ''>,
};

type FGBuildable_pole = FGBuildable_pole_base & FGBuildable;

type FGBuildable_pole_base = FGBuildable_base_pre_update8 & {
	mUseStaticHeight: docs_json_ts_common_types_bool_string,
	mCanStack: docs_json_ts_common_types_bool_string,
	mStackHeight: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_pole_with_length = FGBuildable_pole_with_length_base & FGBuildable_pole;

type FGBuildable_pole_with_length_base = FGBuildable_pole_base & {
	mLength: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_pole_with_length_and_power = FGBuildable_pole_with_length_and_power_base & FGBuildable_powered;

type FGBuildable_pole_with_length_and_power_base = FGBuildable_pole_with_length_and_power_base_base & FGBuildable_pole_with_length & FGBuildable_powered_base;

type FGBuildable_pole_with_length_and_power_base_base = FGBuildable_pole_with_length_base & FGBuildable_powered_base_base_base;

type FGBuildable_powered = FGBuildable_powered_base & (FGBuildable & {
	mSignificanceBias: docs_json_ts_common_types_decimal_string,
});

type FGBuildable_powered_base = FGBuildable_powered_base_base & FGBuildable;

type FGBuildable_powered_base_base = FGBuildable_powered_base_base_base & FGBuildable_powered_base_base_with_mNumCyclesForProductivity;

type FGBuildable_powered_base_base_base = isDescribed & {
	mPowerConsumption: docs_json_ts_common_types_decimal_string,
	mPowerConsumptionExponent: docs_json_ts_common_types_decimal_string,
	mOnHasPowerChanged: docs_json_ts_common_types_empty_object,
	mOnHasProductionChanged: docs_json_ts_common_types_empty_object,
	mOnHasStandbyChanged: docs_json_ts_common_types_empty_object,
	mMinimumProducingTime: docs_json_ts_common_types_decimal_string_signed,
	mMinimumStoppedTime: docs_json_ts_common_types_decimal_string_signed,
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

type FGBuildable_powered_base_base_with_mNumCyclesForProductivity = FGBuildable_base & {
	mNumCyclesForProductivity: docs_json_ts_common_types_integer_string,
};

type FGBuildable_powered_base_resources = FGBuildable_powered_base_resources_base & FGBuildable_powered_base;

type FGBuildable_powered_base_resources_base = FGBuildable_powered_base_resources_base_base & FGBuildable_powered_base_base;

type FGBuildable_powered_base_resources_base_base = FGBuildable_powered_base_base_base & {
	mOnlyAllowCertainResources: docs_json_ts_common_types_bool_string,
	mAllowedResources: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list | '',
	mExtractorTypeName: 'None' | 'Miner',
};

type FGBuildable_powered_storage = FGBuildable_powered_storage_base & FGBuildable_powered;

type FGBuildable_powered_storage_base = FGBuildable_powered_storage_base_base & FGBuildable_powered_base;

type FGBuildable_powered_storage_base_base = FGBuildable_powered_storage_base_base_base & FGBuildable_powered_base_base;

type FGBuildable_powered_storage_base_base_base = FGBuildable_powered_base_base_base & {
	mStorageSizeX: docs_json_ts_common_types_integer_string,
	mStorageSizeY: docs_json_ts_common_types_integer_string,
};

type FGBuildable_spline = FGBuildable_with_length & {
	mSplineData: '',
};

type FGBuildable_tiered = FGBuildable_tiered_base & FGBuildable;

type FGBuildable_tiered_base = {
	Tier: docs_json_ts_0_3_7_7_properties_Tier,
};

type FGBuildable_with_height = FGBuildable_with_height_base & FGBuildable;

type FGBuildable_with_height_base = FGBuildable_base_pre_update8 & {
	mHeight: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_height_and_elevation = FGBuildable_with_height & FGBuildable_with_size_and_elevation & FGBuildable_DisableAttachmentSnapOn;

type FGBuildable_with_height_and_width = FGBuildable_with_height_and_width_base & FGBuildable;

type FGBuildable_with_height_and_width_base = FGBuildable_with_height_base & FGBuildable_with_width_base;

type FGBuildable_with_length = FGBuildable_base_pre_update8 & {
	mMeshLength: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_size = FGBuildable_with_size_base & FGBuildable;

type FGBuildable_with_size_base = {
	mSize: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_size_and_elevation = FGBuildable_with_size_and_elevation_base & FGBuildable_with_size;

type FGBuildable_with_size_and_elevation_base = FGBuildable_with_size_and_elevation_base_base & {
	mDisableSnapOn: docs_json_ts_common_types_empty_object | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_top | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_top_bottom | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_bottom | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_right_left_top_bottom | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_top_bottom | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_left_top_bottom,
};

type FGBuildable_with_size_and_elevation_base_base = FGBuildable_with_size_base & {
	mElevation: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_with_width = FGBuildable_with_width_base & FGBuildable;

type FGBuildable_with_width_base = FGBuildable_base_pre_update8 & {
	mWidth: docs_json_ts_common_types_decimal_string,
};

type FGBuildableAttachment = FGBuildableAttachment_base & FGBuildable_powered;

type FGBuildableAttachment_base = FGBuildableAttachment_base_base & FGBuildable_powered_base;

type FGBuildableAttachment_base_base = FGBuildableAttachment_base_base_base & FGBuildable_powered_base_base;

type FGBuildableAttachment_base_base_base = FGBuildable_base & {
	mCurrentInventoryIndex: docs_json_ts_common_types_integer_string,
};

type FGBuildableAttachment_splitter = FGBuildableAttachment_splitter_base & FGBuildableAttachment;

type FGBuildableAttachment_splitter_base = FGBuildableAttachment_splitter_base_base & FGBuildableAttachment_base;

type FGBuildableAttachment_splitter_base_base = FGBuildableAttachment_splitter_base_base_base & FGBuildableAttachment_base_base;

type FGBuildableAttachment_splitter_base_base_base = FGBuildableAttachment_splitter_base_base_base_with_mCurrentOutputIndex & FGBuildableAttachment_splitter_base_base_base_with_mDistributionTable & FGBuildableAttachment_base_base_base;

type FGBuildableAttachment_splitter_base_base_base_with_mCurrentOutputIndex = FGBuildable_base & {
	mCurrentOutputIndex: docs_json_ts_common_types_integer_string_signed,
};

type FGBuildableAttachment_splitter_base_base_base_with_mDistributionTable = FGBuildable_base & {
	mDistributionTable: '',
};

type FGBuildableAttachmentMerger = FGBuildableAttachment & FGBuildableAttachmentMerger_base;

type FGBuildableAttachmentMerger_base = FGBuildableAttachmentMerger_base_base & FGBuildableAttachment_base;

type FGBuildableAttachmentMerger_base_base = FGBuildableAttachmentMerger_base_base_base & FGBuildableAttachment_base_base;

type FGBuildableAttachmentMerger_base_base_base = FGBuildableAttachmentMerger_base_base_base_base & FGBuildableAttachment_base_base_base;

type FGBuildableAttachmentMerger_base_base_base_base = FGBuildable_base & {
	mCurrentInputIndex: docs_json_ts_common_types_integer_string_signed,
};

type FGBuildableConveyorBelt_base = FGBuildableConveyorBelt_base_base & FGBuildable;

type FGBuildableConveyorBelt_base_base = FGBuildable_base_pre_update8 & {
	mItemMeshMap: docs_json_ts_common_types_empty_object,
	mSpeed: docs_json_ts_common_types_decimal_string,
	mItems: docs_json_ts_common_types_empty_object,
};

type FGBuildableConveyorBelt_spline = FGBuildableConveyorBelt_spline_base & FGBuildable_spline & FGBuildableConveyorBelt_base;

type FGBuildableConveyorBelt_spline_base = FGBuildable_spline & FGBuildableConveyorBelt_base_base;

type FGBuildableConveyorLift = FGBuildableConveyorLift_base & FGBuildableConveyorBelt_base;

type FGBuildableConveyorLift_base = FGBuildableConveyorBelt_base_base & {
	mMeshHeight: docs_json_ts_common_types_decimal_string,
	mTopTransform: docs_json_ts_0_3_7_7_properties_transform_Rotation_Translation_Scale3D,
	mIsReversed: docs_json_ts_common_types_bool_string,
};

type FGBuildableDockingStation = FGBuildable_docking_station & FGBuildableDockingStation_base;

type FGBuildableDockingStation_base = FGBuildableDockingStation_base_base & {
	mMapText: '',
};

type FGBuildableDockingStation_base_base = FGBuildableDockingStation_with_mFuelTransferSpeed & FGBuildable_docking_station_base;

type FGBuildableDockingStation_with_mFuelTransferSpeed = FGBuildableDockingStation_with_mFuelTransferSpeed_base & FGBuildable_docking_station_base_base;

type FGBuildableDockingStation_with_mFuelTransferSpeed_base = FGBuildable_docking_station_base_base_base & {
	mFuelTransferSpeed: docs_json_ts_common_types_decimal_string,
};

type FGBuildableFactory_jump_pad = FGBuildable_powered & FGBuildableFactory_jump_pad_base;

type FGBuildableFactory_jump_pad_base = FGBuildableFactory_jump_pad_base_base & FGBuildable_powered_base;

type FGBuildableFactory_jump_pad_base_base = FGBuildableFactory_jump_pad_base_base_base & FGBuildable_powered_base_base;

type FGBuildableFactory_jump_pad_base_base_base = FGBuildable_powered_base_base_base & {
	JumpForceCharacter: docs_json_ts_common_types_decimal_string,
	JumpForcePhysics: docs_json_ts_common_types_decimal_string,
};

type FGBuildableFactory_landing_pad = FGBuildable_powered & FGBuildableFactory_landing_pad_base;

type FGBuildableFactory_landing_pad_base = FGBuildableFactory_landing_pad_base_base & FGBuildable_powered_base;

type FGBuildableFactory_landing_pad_base_base = FGBuildableFactory_landing_pad_base_base_base & FGBuildable_powered_base_base;

type FGBuildableFactory_landing_pad_base_base_base = FGBuildable_powered_base_base_base & {
	mDampeningFactor: docs_json_ts_common_types_decimal_string,
	mPlayerList: '',
};

type FGBuildableFactorySimpleProducer = FGBuildable_powered & FGBuildableFactorySimpleProducer_base;

type FGBuildableFactorySimpleProducer_base = FGBuildableFactorySimpleProducer_base_base & FGBuildable_powered_base;

type FGBuildableFactorySimpleProducer_base_base = FGBuildable_powered_base_base_base & {
	mTimeToProduceItem: docs_json_ts_common_types_decimal_string,
	mEventType: 'EV_Christmas',
};

type FGBuildableGenerator = FGBuildableGenerator_no_fuel & FGBuildableGenerator_base;

type FGBuildableGenerator_base = FGBuildableGenerator_base_base & FGBuildableGenerator_no_fuel_base;

type FGBuildableGenerator_base_base = FGBuildableGenerator_base_base_base & FGBuildableGenerator_no_fuel_base_base;

type FGBuildableGenerator_base_base_base = FGBuildableGenerator_no_fuel_base_base_base_base & {
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

type FGBuildableGenerator_no_fuel_base = FGBuildableGenerator_no_fuel_base_base & FGBuildable_powered_base;

type FGBuildableGenerator_no_fuel_base_base = FGBuildableGenerator_no_fuel_base_base_base & FGBuildable_powered_base_base;

type FGBuildableGenerator_no_fuel_base_base_base = FGBuildableGenerator_no_fuel_base_base_base_base & {
	mPowerProductionExponent: docs_json_ts_common_types_decimal_string,
};

type FGBuildableGenerator_no_fuel_base_base_base_base = FGBuildable_powered_base_base_base & {
	mPowerProduction: docs_json_ts_common_types_decimal_string,
	mLoadPercentage: docs_json_ts_common_types_decimal_string,
};

type FGBuildableGeneratorFuel_base = FGBuildableGeneratorFuel_base_base & FGBuildableGenerator_base;

type FGBuildableGeneratorFuel_base_base = FGBuildableGeneratorFuel_base_base_base & FGBuildableGenerator_base_base;

type FGBuildableGeneratorFuel_base_base_base = FGBuildableGenerator_base_base_base & {
	mRTPCInterval?: docs_json_ts_common_types_decimal_string,
};

type FGBuildableGeneratorFuel_biomass = FGBuildableGenerator & FGBuildableGeneratorFuel_biomass_base;

type FGBuildableGeneratorFuel_biomass_base = FGBuildableGeneratorFuel_base & FGBuildableGeneratorFuel_biomass_base_base;

type FGBuildableGeneratorFuel_biomass_base_base = {
	mDefaultFuelClasses: [
		'/Script/FactoryGame.FGItemDescriptorBiomass',
	],
};

type FGBuildableGeneratorFuel_coal = FGBuildableGenerator & FGBuildableGeneratorFuel_coal_base;

type FGBuildableGeneratorFuel_coal_base = FGBuildableGeneratorFuel_base & FGBuildableGeneratorFuel_coal_base_base;

type FGBuildableGeneratorFuel_coal_base_base = {
	mDefaultFuelClasses: [
        '/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C' | '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C' | '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C',
        ...('/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C' | '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C' | '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C')[],
	],
};

type FGBuildableGeneratorFuel_fuel = FGBuildableGenerator & FGBuildableGeneratorFuel_fuel_base;

type FGBuildableGeneratorFuel_fuel_base = FGBuildableGeneratorFuel_base & FGBuildableGeneratorFuel_fuel_base_base;

type FGBuildableGeneratorFuel_fuel_base_base = {
	mDefaultFuelClasses: [
        '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C' | '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C' | '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C',
        ...('/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C' | '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C' | '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C')[],
	],
};

type FGBuildableGeneratorGeoThermal = FGBuildableGeneratorGeoThermal_base & FGBuildableGenerator_no_fuel;

type FGBuildableGeneratorGeoThermal_base = FGBuildableGeneratorGeoThermal_base_base & FGBuildableGenerator_no_fuel_base;

type FGBuildableGeneratorGeoThermal_base_base = FGBuildableGeneratorGeoThermal_base_base_base & FGBuildableGenerator_no_fuel_base_base;

type FGBuildableGeneratorGeoThermal_base_base_base = FGBuildableGenerator_no_fuel_base_base_base_base & {
	mProductionEffectsRunning: docs_json_ts_common_types_bool_string,
};

type FGBuildableGeneratorNuclear = FGBuildableGenerator & FGBuildableGeneratorNuclear_base & {
	mDefaultFuelClasses: [
		'/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C',
	],
};

type FGBuildableGeneratorNuclear_base = FGBuildableGeneratorNuclear_base_base & FGBuildableGenerator_base;

type FGBuildableGeneratorNuclear_base_base = FGBuildableGeneratorNuclear_base_base_base & FGBuildableGenerator_no_fuel_base_base;

type FGBuildableGeneratorNuclear_base_base_base = FGBuildableGenerator_no_fuel_base_base_base_base & {
	mWasteLeftFromCurrentFuel: docs_json_ts_common_types_integer_string,
	mFuelResourceForm: 'RF_SOLID',
};

type FGBuildableJumppad = FGBuildableJumppad_base & FGBuildable_powered;

type FGBuildableJumppad_base = FGBuildableJumppad_base_base & FGBuildable_powered_base;

type FGBuildableJumppad_base_base = FGBuildableJumppad_base_base_base & FGBuildable_powered_base_base;

type FGBuildableJumppad_base_base_base = FGBuildable_powered_base_base_base & {
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

type FGBuildableLadder = FGBuildableLadder_base & FGBuildable_with_width;

type FGBuildableLadder_base = FGBuildable_with_width_base & {
	mMeshHeight: docs_json_ts_common_types_decimal_string,
	mMaxSegmentCount: docs_json_ts_common_types_integer_string,
	mNumSegments: docs_json_ts_common_types_integer_string,
	mLadderMeshes: '',
};

type FGBuildableManufacturer_base = FGBuildable_powered_base & FGBuildableManufacturer_base_base;

type FGBuildableManufacturer_base_base = FGBuildableManufacturer_base_base_base & FGBuildable_powered_base_base;

type FGBuildableManufacturer_base_base_base = FGBuildable_powered_base_base_base & {
	mCurrentRecipeChanged: docs_json_ts_common_types_empty_object,
	mManufacturingSpeed: docs_json_ts_common_types_decimal_string,
	mFactoryInputConnections: '',
	mPipeInputConnections: '',
	mFactoryOutputConnections: '',
	mPipeOutputConnections: '',
};

type FGBuildableManufacturer_base_IsPowered = FGBuildable_powered_base & FGBuildableManufacturer_base_IsPowered_base;

type FGBuildableManufacturer_base_IsPowered_base = FGBuildableManufacturer_base_IsPowered_base_base & FGBuildable_powered_base_base;

type FGBuildableManufacturer_base_IsPowered_base_base = FGBuildable_powered_base_base_base & {
	IsPowered: docs_json_ts_common_types_bool_string,
};

type FGBuildableManufacturer_base_mProductionEffectsRunning = FGBuildable_powered_base & FGBuildableManufacturer_base_mProductionEffectsRunning_base;

type FGBuildableManufacturer_base_mProductionEffectsRunning_base = FGBuildableManufacturer_base_mProductionEffectsRunning_base_base & FGBuildable_powered_base_base;

type FGBuildableManufacturer_base_mProductionEffectsRunning_base_base = FGBuildable_powered_base_base_base & {
	mProductionEffectsRunning: docs_json_ts_common_types_bool_string,
};

type FGBuildableManufacturer_base_packager = FGBuildableManufacturer_base_packager_base & FGBuildable_powered_base;

type FGBuildableManufacturer_base_packager_base = FGBuildableManufacturer_base_packager_base_base & FGBuildable_powered_base_base;

type FGBuildableManufacturer_base_packager_base_base = FGBuildable_powered_base_base_base & {
	mCurrentColor_VFX: docs_json_ts_common_types_RGBA,
	CurrentPackagingMode: '',
};

type FGBuildableManufacturer_Build_AssemblerMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildable_powered;

type FGBuildableManufacturer_Build_ConstructorMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildable_powered;

type FGBuildableManufacturer_Build_FoundryMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildableManufacturer_Build_ManufacturerMk1_C = FGBuildableManufacturer_base & FGBuildable_powered;

type FGBuildableManufacturer_Build_OilRefinery_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildableManufacturer_Build_Packager_C = FGBuildableManufacturer_base & FGBuildableManufacturer_base_IsPowered & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildableManufacturer_base_packager & FGBuildable_powered;

type FGBuildableManufacturer_Build_SmelterMk1_C = FGBuildableManufacturer_base & FGBuildableManufacturer_Build_SmelterMk1_C_base & FGBuildableManufacturer_base_mProductionEffectsRunning & FGBuildable_powered;

type FGBuildableManufacturer_Build_SmelterMk1_C_base = FGBuildableManufacturer_base_base & FGBuildableManufacturer_base_mProductionEffectsRunning_base & FGBuildable_powered_base_base;

type FGBuildablePipeHyper = FGBuildable_spline & FGBuildable;

type FGBuildablePipeline = FGBuildablePipeline_base_root_quantized & FGBuildablePipeline_base_spline & FGBuildable;

type FGBuildablePipeline_base = FGBuildablePipeline_base_base & FGBuildablePipeline_base_no_indicator_base;

type FGBuildablePipeline_base_base = FGBuildablePipeline_base_no_indicator_base & {
	mIndicatorData: docs_json_ts_common_types_empty_object,
};

type FGBuildablePipeline_base_no_indicator_base = FGBuildable_base_pre_update8 & {
	mRadius: docs_json_ts_common_types_decimal_string,
	mFluidBox: docs_json_ts_common_types_empty_object,
	mPipeConnections: '',
};

type FGBuildablePipeline_base_root = FGBuildablePipeline_base_spline_base & {
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
	mRattleLimit: docs_json_ts_common_types_decimal_string,
	mIsRattling: docs_json_ts_common_types_bool_string,
};

type FGBuildablePipeline_base_root_quantized = FGBuildablePipeline_base_root & {
	mQuantiziedContent: docs_json_ts_common_types_decimal_string,
	mQuantiziedFlow: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePipeline_base_spline = FGBuildablePipeline_base_spline_base & FGBuildablePipeline_base & FGBuildable_spline;

type FGBuildablePipeline_base_spline_base = FGBuildablePipeline_base_base & FGBuildable_spline;

type FGBuildablePipeline_junction = FGBuildable_powered & FGBuildablePipeline_junction_base;

type FGBuildablePipeline_junction_base = FGBuildable_powered_base & FGBuildablePipeline_base_no_indicator_base;

type FGBuildablePipelineJunction = FGBuildablePipeline_junction & FGBuildablePipelineJunction_base;

type FGBuildablePipelineJunction_base = FGBuildablePipeline_junction_base & {
	mFluidBoxVolume: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePipelinePump_base = FGBuildablePipelinePump_base_base & FGBuildablePipelinePump_powered_base_base & FGBuildablePipeline_base;

type FGBuildablePipelinePump_base_base = FGBuildablePipelinePump_base_base_base & FGBuildablePipelinePump_powered_base_base_base;

type FGBuildablePipelinePump_base_base_base = FGBuildablePipeline_base_base & FGBuildablePipelinePump_powered_base_base_base_base;

type FGBuildablePipelinePump_powered_base = FGBuildable_powered & FGBuildablePipelinePump_powered_base_base;

type FGBuildablePipelinePump_powered_base_base = FGBuildablePipelinePump_powered_base_base_base & FGBuildable_powered_base;

type FGBuildablePipelinePump_powered_base_base_base = FGBuildablePipelinePump_powered_base_base_base_base & FGBuildable_powered_base_base;

type FGBuildablePipelinePump_powered_base_base_base_base = FGBuildable_powered_base_base_base & {
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

type FGBuildablePipelinePump_pump_base = FGBuildablePipelinePump_pump_base_base & FGBuildablePipelinePump_base;

type FGBuildablePipelinePump_pump_base_base = FGBuildablePipelinePump_pump_base_base_base & FGBuildablePipelinePump_base_base;

type FGBuildablePipelinePump_pump_base_base_base = FGBuildablePipelinePump_base_base_base & {
	mPistonAudioTimer?: docs_json_ts_common_types_empty_object,
	mIsPipePumpPlaying: docs_json_ts_common_types_bool_string,
	mIsExceedingHeadLift: docs_json_ts_common_types_bool_string,
	mCurrentAudioHeadLift: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePipelinePump_valve = FGBuildablePipelinePump_base & FGBuildable_powered;

type FGBuildablePipelineSupport = FGBuildablePipelineSupport_base & FGBuildable_pole_with_length;

type FGBuildablePipelineSupport_base = FGBuildable_pole_with_length_base & {
	mVerticalAngle: docs_json_ts_common_types_decimal_string,
};

type FGBuildablePipeReservoir = FGBuildable_powered & FGBuildablePipeReservoir_base;

type FGBuildablePipeReservoir_base = FGBuildablePipeReservoir_base_base & FGBuildable_powered_base;

type FGBuildablePipeReservoir_base_base = FGBuildablePipeReservoir_base_base_base & FGBuildable_powered_base_base;

type FGBuildablePipeReservoir_base_base_base = FGBuildable_powered_base_base_base & {
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

type FGBuildablePowerPole = FGBuildablePowerPole_base & FGBuildable;

type FGBuildablePowerPole_base = FGBuildable_base_pre_update8 & {
	mPowerConnections: '',
	mPowerPoleType: 'PPT_POLE' | 'PPT_WALL' | 'PPT_WALL_DOUBLE',
};

type FGBuildableRadarTower = FGBuildable_powered & FGBuildableRadarTower_base;

type FGBuildableRadarTower_base = FGBuildableRadarTower_base_base & FGBuildable_powered_base;

type FGBuildableRadarTower_base_base = FGBuildable_powered_base_base & {
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

type FGBuildableRailroadStation_base = FGBuildableRailroadStation_base_base & FGBuildableTrainPlatform_base;

type FGBuildableRailroadStation_base_base = FGBuildableTrainPlatform_base_base & {
	mMapText: 'Train Station',
	mDockedPlatformList: '',
};

type FGBuildableRailroadTrack = FGBuildableRailroadTrack_base & FGBuildable;

type FGBuildableRailroadTrack_base = FGBuildable_with_length & {
	mIsOwnedByPlatform: docs_json_ts_common_types_bool_string,
};

type FGBuildableResourceExtractor = FGBuildableResourceExtractor_with_mRequireResourceAtMinimumDepthChecks & FGBuildableResourceExtractor_with_placement & FGBuildableResourceExtractor_with_mExtractionOffset & FGBuildableResourceExtractor_with_mAllowedResourceForms;

type FGBuildableResourceExtractor_base = FGBuildableResourceExtractor_base_base & FGBuildable_powered_base;

type FGBuildableResourceExtractor_base_base = FGBuildableResourceExtractor_base_base_timed & FGBuildableResourceExtractor_base_base_base;

type FGBuildableResourceExtractor_base_base_base = FGBuildableResourceExtractor_base_base_base_base & FGBuildableResourceExtractor_base_base_base_piped;

type FGBuildableResourceExtractor_base_base_base_base = FGBuildableResourceExtractor_base_base_base_base_base & FGBuildable_powered_base_base;

type FGBuildableResourceExtractor_base_base_base_base_base = FGBuildable_powered_base_base_base & {
	mOnlyAllowCertainResources: docs_json_ts_common_types_bool_string,
	mAllowedResources: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list | '',
	mExtractorTypeName: 'None' | 'Miner',
};

type FGBuildableResourceExtractor_base_base_base_piped = FGBuildableResourceExtractor_base_base_base_piped_base & FGBuildable_powered_base_base;

type FGBuildableResourceExtractor_base_base_base_piped_base = FGBuildable_powered_base_base_base & {
	mPipeOutputConnections: '',
	mReplicatedFlowRate: docs_json_ts_common_types_decimal_string,
};

type FGBuildableResourceExtractor_base_base_timed = FGBuildableResourceExtractor_base_base_timed_base & FGBuildable_powered_base_base;

type FGBuildableResourceExtractor_base_base_timed_base = FGBuildable_powered_base_base_base & {
	mExtractStartupTime: docs_json_ts_common_types_decimal_string_signed,
	mExtractStartupTimer: docs_json_ts_common_types_decimal_string,
	mExtractCycleTime: docs_json_ts_common_types_decimal_string,
	mItemsPerCycle: docs_json_ts_common_types_integer_string,
	mOnlyAllowCertainResources?: docs_json_ts_common_types_bool_string,
};

type FGBuildableResourceExtractor_base_with_resources = FGBuildableResourceExtractor_base_with_resources_base & FGBuildableResourceExtractor_base & FGBuildable_powered_base_resources;

type FGBuildableResourceExtractor_base_with_resources_base = FGBuildableResourceExtractor_base_base & FGBuildable_powered_base_resources_base;

type FGBuildableResourceExtractor_base_with_resources_base_base = FGBuildableResourceExtractor_base_base_timed_base & FGBuildable_powered_base_base_base & FGBuildableResourceExtractor_base_base_base_base_base & FGBuildableResourceExtractor_base_base_base_piped_base & FGBuildable_powered_base_resources_base_base;

type FGBuildableResourceExtractor_miner_base = FGBuildableResourceExtractor_miner_base_base & FGBuildableResourceExtractor_base_with_resources;

type FGBuildableResourceExtractor_miner_base_base = FGBuildableResourceExtractor_miner_base_base_base & FGBuildableResourceExtractor_base_with_resources_base;

type FGBuildableResourceExtractor_miner_base_base_base = FGBuildableResourceExtractor_base_with_resources_base_base & {
	mInternalMiningState_0?: 'NewEnumerator0',
	mToggleMiningStateHandle_0?: docs_json_ts_common_types_empty_object,
	mMinimumDrillTime_0?: docs_json_ts_common_types_decimal_string,
	mMaximumDrillTime_0?: docs_json_ts_common_types_decimal_string,
	mCanPlayAfterStartUpStopped?: docs_json_ts_common_types_bool_string,
	mParticleMap: [
		{
			ResourceNode_16_2100B5C34EE8DF7958D78A974512F3C3: docs_json_ts_0_3_7_7_properties_RawResources,
			ParticleSystem1_9_F0CF81514E1E1C5007AC99B0C59C63CD: docs_json_ts_0_3_7_7_properties_ParticleSystem_quoted,
		},
		...{
			ResourceNode_16_2100B5C34EE8DF7958D78A974512F3C3: docs_json_ts_0_3_7_7_properties_RawResources,
			ParticleSystem1_9_F0CF81514E1E1C5007AC99B0C59C63CD: docs_json_ts_0_3_7_7_properties_ParticleSystem_quoted,
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

type FGBuildableResourceExtractor_miner_mk2_base = FGBuildableResourceExtractor_miner_mk2_base_base & FGBuildableResourceExtractor_miner_base;

type FGBuildableResourceExtractor_miner_mk2_base_base = FGBuildableResourceExtractor_miner_mk2_base_base_base & FGBuildableResourceExtractor_miner_base_base;

type FGBuildableResourceExtractor_miner_mk2_base_base_base = FGBuildableResourceExtractor_miner_base_base_base & {
	mCanPlayAfterStartUpStopped: docs_json_ts_common_types_bool_string,
	mDisplayName: 'Miner Mk.2',
};

type FGBuildableResourceExtractor_miner_mk3 = FGBuildableResourceExtractor & FGBuildableResourceExtractor_miner_mk3_base & FGBuildable_powered;

type FGBuildableResourceExtractor_miner_mk3_base = FGBuildableResourceExtractor_miner_mk3_base_base & FGBuildableResourceExtractor_miner_base;

type FGBuildableResourceExtractor_miner_mk3_base_base = FGBuildableResourceExtractor_miner_mk3_base_base_base & FGBuildableResourceExtractor_miner_base_base;

type FGBuildableResourceExtractor_miner_mk3_base_base_base = FGBuildableResourceExtractor_miner_base_base_base & {
	mCanPlayAfterStartUpStopped: docs_json_ts_common_types_bool_string,
	mDisplayName: 'Miner Mk.3',
};

type FGBuildableResourceExtractor_oil = FGBuildableResourceExtractor & FGBuildableResourceExtractor_oil_base & FGBuildable_powered;

type FGBuildableResourceExtractor_oil_base = FGBuildableResourceExtractor_oil_base_base & FGBuildableResourceExtractor_base_with_resources;

type FGBuildableResourceExtractor_oil_base_base = FGBuildableResourceExtractor_oil_base_base_base & FGBuildableResourceExtractor_base_with_resources_base;

type FGBuildableResourceExtractor_oil_base_base_base = FGBuildableResourceExtractor_base_with_resources_base_base & {
	mAllowedResourceForms: [
		'RF_LIQUID',
	],
};

type FGBuildableResourceExtractor_water = FGBuildableResourceExtractor & FGBuildableResourceExtractor_water_base & FGBuildable_powered;

type FGBuildableResourceExtractor_water_base = FGBuildableResourceExtractor_water_base_base & FGBuildableResourceExtractor_water_base_base_version_specific & FGBuildableResourceExtractor_base_with_resources;

type FGBuildableResourceExtractor_water_base_base = FGBuildableResourceExtractor_water_base_base_base & FGBuildableResourceExtractor_base_with_resources_base;

type FGBuildableResourceExtractor_water_base_base_base = FGBuildableResourceExtractor_base_with_resources_base_base & {
	mWaterpumpTimeline_RTPC_B8FA6F944E717E3B7A286E84901F620E: docs_json_ts_common_types_decimal_string,
	mWaterpumpTimeline__Direction_B8FA6F944E717E3B7A286E84901F620E: 'Forward',
	HasLostSignificance: docs_json_ts_common_types_bool_string,
	mExtractorTypeName: 'None',
	mAllowedResourceForms: [
		'RF_LIQUID',
	],
};

type FGBuildableResourceExtractor_water_base_base_version_specific = FGBuildableResourceExtractor_base_with_resources_base & {
	PlayPitchAndVolumeRTPCTimeline_RTPC_2B435F41466C37D2AD809A88AA21BA89: docs_json_ts_common_types_decimal_string,
	PlayPitchAndVolumeRTPCTimeline__Direction_2B435F41466C37D2AD809A88AA21BA89: 'Forward',
	mAudioTimerCounter: docs_json_ts_common_types_decimal_string,
	mAudioTimerMS: docs_json_ts_common_types_decimal_string,
	mAudioTimerReference: docs_json_ts_common_types_empty_object,
	mAudioTimelineCounter: docs_json_ts_common_types_decimal_string,
};

type FGBuildableResourceExtractor_with_mAllowedResourceForms = FGBuildableResourceExtractor_base_with_resources_base & {
	mAllowedResourceForms: docs_json_ts_0_3_7_7_properties_mAllowedResourceForms,
};

type FGBuildableResourceExtractor_with_mExtractionOffset = FGBuildableResourceExtractor_base_with_resources & {
	mExtractionOffset: docs_json_ts_common_types_XYZ_decimal_string,
};

type FGBuildableResourceExtractor_with_mRequireResourceAtMinimumDepthChecks = FGBuildableResourceExtractor_base_with_resources & {
	mRequireResourceAtMinimumDepthChecks: docs_json_ts_common_types_bool_string,
};

type FGBuildableResourceExtractor_with_placement = FGBuildableResourceExtractor_base_with_resources & {
	mMinimumDepthForPlacement: docs_json_ts_common_types_decimal_string,
	mDepthTraceOriginOffset: docs_json_ts_common_types_XYZ_decimal_string,
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

type FGBuildableResourceSink_base = FGBuildableResourceSink_base_base & FGBuildable_powered_base;

type FGBuildableResourceSink_base_base = FGBuildableResourceSink_base_base_base & FGBuildable_powered_base_base;

type FGBuildableResourceSink_base_base_base = FGBuildable_powered_base_base_base & {
	mProcessingTime: docs_json_ts_common_types_decimal_string,
};

type FGBuildableResourceSinkShop = FGBuildable_powered & FGBuildableResourceSinkShop_base;

type FGBuildableResourceSinkShop_base = FGBuildableResourceSinkShop_base_base & FGBuildable_powered_base;

type FGBuildableResourceSinkShop_base_base = FGBuildableResourceSinkShop_base_base_base & FGBuildable_powered_base_base;

type FGBuildableResourceSinkShop_base_base_base = FGBuildable_powered_base_base_base & {
	mShopInventoryDefaultSize: docs_json_ts_common_types_integer_string,
};

type FGBuildableSpaceElevator = FGBuildableSpaceElevator_base & FGBuildable_powered;

type FGBuildableSpaceElevator_base = FGBuildableSpaceElevator_base_base & FGBuildable_powered_base;

type FGBuildableSpaceElevator_base_base = FGBuildable_powered_base_base & {
	mMapText: 'Space Elevator',
};

type FGBuildableSplitterSmart = FGBuildableSplitterSmart_base & FGBuildableAttachment_splitter;

type FGBuildableSplitterSmart_base = FGBuildableSplitterSmart_base_base & FGBuildableAttachment_splitter_base;

type FGBuildableSplitterSmart_base_base = FGBuildableSplitterSmart_base_base_base & FGBuildableAttachment_splitter_base_base;

type FGBuildableSplitterSmart_base_base_base = FGBuildableAttachment_splitter_base_base_base & {
	OnSortRulesChangedDelegate: docs_json_ts_common_types_empty_object,
	mMaxNumSortRules: docs_json_ts_common_types_integer_string,
	mLastItem: {
		ItemState: docs_json_ts_common_types_empty_object,
	},
	mItemToLastOutputMap: docs_json_ts_common_types_empty_object,
	mLastOutputIndex: docs_json_ts_common_types_integer_string,
};

type FGBuildableStorage = FGBuildableStorage_base & FGBuildable_powered;

type FGBuildableStorage_base = FGBuildableStorage_base_base & FGBuildable_powered_base;

type FGBuildableStorage_base_base = FGBuildableStorage_base_base_base & FGBuildable_powered_base_base;

type FGBuildableStorage_base_base_base = FGBuildable_powered_base_base_base & {
	mStackingHeight: docs_json_ts_common_types_decimal_string,
	mInventorySizeX: docs_json_ts_common_types_integer_string,
	mInventorySizeY: docs_json_ts_common_types_integer_string,
};

type FGBuildableTradingPost = FGBuildableTradingPost_base_version_specific & FGBuildableTradingPost_base & FGBuildable_powered;

type FGBuildableTradingPost_base = FGBuildableTradingPost_base_base & FGBuildable_powered_base_base;

type FGBuildableTradingPost_base_base = FGBuildableTradingPost_base_base_base & FGBuildableTradingPost_base_base_version_specific;

type FGBuildableTradingPost_base_base_base = FGBuildable_powered_base_base_base & {
	mWorkBenchOccupied: 'Craft Bench occupied',
	mWorkBenchFree: 'Use Craft Bench',
	mShipUpgradeLevel: docs_json_ts_common_types_integer_string,
	mStorageText: 'Open Storage',
	mMamFreeText: `Use M${Exclude<string, ''>}`,
	mMamOccupiedText: `M${Exclude<string, ''>}${' is occupied'}`,
	mGenerators: '',
	mStorageInventorySize: docs_json_ts_common_types_integer_string,
	mStorageVisibilityLevel: docs_json_ts_common_types_integer_string,
	mSpawningGroundZOffset: docs_json_ts_common_types_decimal_string,
	mGroundSearchZDistance: docs_json_ts_common_types_decimal_string,
	mDefaultResources: '',
	mNeedPlayingBuildEffectNotification: docs_json_ts_common_types_bool_string,
};

type FGBuildableTradingPost_base_base_version_specific = FGBuildable_powered_base_base_base & {
	Meshes: [
        'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6"\'',
        ...('StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6"\'')[],
	],
};

type FGBuildableTradingPost_base_version_specific = FGBuildable_powered_base_base & {
	mMapText: 'The HUB',
};

type FGBuildableTrainPlatform = FGBuildableTrainPlatform_base & FGBuildable_powered;

type FGBuildableTrainPlatform_base = FGBuildableTrainPlatform_base_base & FGBuildable_powered_base;

type FGBuildableTrainPlatform_base_base = FGBuildable_powered_base_base_base & {
	mPlatformConnections: [
		docs_json_ts_0_3_7_7_properties_FGTrainPlatformConnection_quoted,
		...docs_json_ts_0_3_7_7_properties_FGTrainPlatformConnection_quoted[],
	],
	mIsOrientationReversed: docs_json_ts_common_types_bool_string,
	mPlatformDockingStatus: 'ETPDS_None',
	mSavedDockingStatus: 'ETPDS_None',
	mDockingSequenceTimerHandle: docs_json_ts_common_types_empty_object,
};

type FGBuildableTrainPlatform_with_storage = FGBuildable_powered_storage & FGBuildableTrainPlatform_with_storage_base & FGBuildableTrainPlatform;

type FGBuildableTrainPlatform_with_storage_base = FGBuildableTrainPlatform_with_storage_base_base & FGBuildable_powered_storage_base & FGBuildableTrainPlatform_base;

type FGBuildableTrainPlatform_with_storage_base_base = FGBuildable_powered_storage_base_base & FGBuildableTrainPlatform_base_base;

type FGBuildableTrainPlatform_with_storage_base_base_base = FGBuildable_powered_storage_base_base_base & FGBuildableTrainPlatform_base_base;

type FGBuildableTrainPlatformCargo = FGBuildableTrainPlatformCargo_base & FGBuildableTrainPlatform_with_storage;

type FGBuildableTrainPlatformCargo_base = FGBuildableTrainPlatformCargo_base_base & FGBuildableTrainPlatform_with_storage_base;

type FGBuildableTrainPlatformCargo_base_base = FGBuildableTrainPlatform_with_storage_base_base_base & {
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

type FGBuildableWire = FGBuildableWire_base & FGBuildable;

type FGBuildableWire_base = FGBuildable_base_pre_update8 & {
	mMaxLength: docs_json_ts_common_types_decimal_string,
	mLengthPerCost: docs_json_ts_common_types_decimal_string,
	mConnections: 'None',
};

type FGChainsaw = FGEquipment_has_sound & {
	mMontageLength: docs_json_ts_common_types_decimal_string,
	mInterpSawProgress: docs_json_ts_common_types_decimal_string,
	mWasSawing: docs_json_ts_common_types_bool_string,
	mCurrentState: 'NewEnumerator3',
	mCurrentAudioState: 'NewEnumerator3',
	mPreviousAudioState: 'NewEnumerator3',
	mEnergyConsumption: docs_json_ts_common_types_decimal_string,
	mSawDownTreeTime: docs_json_ts_common_types_decimal_string,
	mCollateralPickupRadius: docs_json_ts_common_types_decimal_string,
	mExcludeChainsawableFoliage: docs_json_ts_common_types_bool_string,
	mEnergyStored: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'hand_lSocket',
	mArmAnimation: 'AE_ChainSaw',
};

type FGColorGun = FGColorGun_base & FGWeaponProjectile_instant;

type FGColorGun_base = FGColorGun_base_base & {
	mPrimaryColor: docs_json_ts_common_types_RGBA,
	mSecondaryColor: docs_json_ts_common_types_RGBA,
	mArmAnimation: 'AE_ColorGun',
};

type FGColorGun_base_base = hasClassName & {
	mRedundantTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mNoTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mNonColorableTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mColorSlot: docs_json_ts_common_types_integer_string,
};

type FGConsumableDescriptor = FGDescriptor_sinkable & FGConsumableDescriptor_base;

type FGConsumableDescriptor_base = FGDescriptor_sinkable_base & {
	mHealthGain?: docs_json_ts_common_types_decimal_string,
	mCustomHandsMeshScale: docs_json_ts_common_types_decimal_string,
	mCustomRotation: docs_json_ts_common_types_PitchYawRoll_decimal_string_signed,
	mCustomLocation: docs_json_ts_common_types_XYZ_decimal_string,
};

type FGConsumableEquipment = FGConsumableEquipment_base & FGEquipment;

type FGConsumableEquipment_base = FGEquipment_base & FGConsumableEquipment_version_specific;

type FGConsumableEquipment_version_specific = FGConsumableEquipment_version_specific_pre_update8 & FGConsumableEquipment_version_specific_mAnimData;

type FGConsumableEquipment_version_specific_mAnimData = {
	mAnimData?: [
		{
			Montage_7_2E66F6A948A8606E71185682EA2AC4EC: docs_json_ts_0_3_7_7_properties_AnimMontage_quoted,
			CameraAnim_8_AA01C2B248FF438D6C2816B2FA94F1BD: docs_json_ts_0_3_7_7_properties_CameraAnim_quoted,
		},
		...{
			Montage_7_2E66F6A948A8606E71185682EA2AC4EC: docs_json_ts_0_3_7_7_properties_AnimMontage_quoted,
			CameraAnim_8_AA01C2B248FF438D6C2816B2FA94F1BD: docs_json_ts_0_3_7_7_properties_CameraAnim_quoted,
		}[],
	],
};

type FGConsumableEquipment_version_specific_pre_update8 = {
	mRandomAnim?: docs_json_ts_common_types_integer_string,
	mCanPress?: docs_json_ts_common_types_bool_string,
	mCurrentAnimData?: docs_json_ts_common_types_empty_object,
	mAttachSocket?: 'hand_rSocket',
};

type FGDescriptor = FGDescriptor_base & {
	mForm: docs_json_ts_0_3_7_7_properties_mForm,
	mPersistentBigIcon: docs_json_ts_0_3_7_7_properties_Texture2D | 'None',
	mSmallIcon: docs_json_ts_0_3_7_7_properties_Texture2D | 'None',
};

type FGDescriptor_base = isDescribed & {
	mAbbreviatedDisplayName: docs_json_ts_0_3_7_7_properties_mAbbreviatedDisplayName,
	mStackSize: docs_json_ts_0_3_7_7_properties_mStackSize,
	mCanBeDiscarded: docs_json_ts_common_types_bool_string,
	mRememberPickUp: docs_json_ts_common_types_bool_string,
	mEnergyValue: docs_json_ts_common_types_decimal_string,
	mRadioactiveDecay: docs_json_ts_common_types_decimal_string,
	mForm: `RF_${Exclude<string, ''>}`,
	mSmallIcon: docs_json_ts_0_3_7_7_properties_Texture2D_base | 'None',
	mPersistentBigIcon: docs_json_ts_0_3_7_7_properties_Texture2D_base | 'None',
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

type FGEquipment_base = FGEquipment_base_base & FGEquipment_base_version_specific;

type FGEquipment_base_base = FGEquipment_base_base_base & FGEquipment_base_base_version_specific;

type FGEquipment_base_base_base = hasClassName & {
	mEquipmentSlot: `ES_${Exclude<string, ''>}`,
	mAttachSocket: Exclude<string, ''>,
	mCostToUse: '' | docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mArmAnimation: 'AE_Consumables' | 'AE_OneHandEquipment' | 'AE_ChainSaw' | 'AE_Generic2Hand' | 'AE_None' | 'AE_RebarGun' | 'AE_Rifle' | 'AE_ShockShank' | 'AE_StunSpear' | 'AE_PortableMiner' | 'AE_ObjectScanner' | 'AE_ColorGun' | 'AE_Nobelisk' | 'AE_Generic1Hand',
	mBackAnimation: 'BE_None' | 'BE_Jetpack',
	mHasPersistentOwner: docs_json_ts_common_types_bool_string,
};

type FGEquipment_base_base_version_specific = hasClassName & {
	mUseDefaultPrimaryFire: docs_json_ts_common_types_bool_string,
};

type FGEquipment_base_version_specific = {
	mEquipmentSlot: 'ES_ARMS' | 'ES_BACK',
};

type FGEquipment_dispenser = FGEquipment_dispenser_version_specific & FGEquipment;

type FGEquipment_dispenser_version_specific = {
	mPlaceDistanceMax: docs_json_ts_common_types_decimal_string,
};

type FGEquipment_filtered = {
	mFilterDuration: docs_json_ts_common_types_decimal_string,
};

type FGEquipment_has_effect_timer = {
	mCountdown: docs_json_ts_common_types_decimal_string,
	mIsWorking: docs_json_ts_common_types_bool_string,
	mDisableEffectTimer: docs_json_ts_common_types_decimal_string,
};

type FGEquipment_has_mRandomStingerAnim = {
	mRandomStingerAnim: docs_json_ts_common_types_integer_string,
};

type FGEquipment_has_sound = FGEquipment & {
	mPlayingSound: docs_json_ts_common_types_bool_string,
};

type FGEquipment_negates_damage = {
	mHasNegatedDamage: docs_json_ts_common_types_bool_string,
	mDamageNegated: docs_json_ts_common_types_decimal_string,
};

type FGEquipmentStunSpear_base = FGEquipmentStunSpear_base_base & {
	mDamage: docs_json_ts_common_types_integer_string,
};

type FGEquipmentStunSpear_base_base = FGEquipment & FGEquipmentStunSpear_base_base_base;

type FGEquipmentStunSpear_base_base_base = FGEquipmentStunSpear_base_version_specific & {
	mRandomAttackAnim: docs_json_ts_common_types_integer_string,
};

type FGEquipmentStunSpear_base_version_specific = {
	mSecondSwingMaxTime: docs_json_ts_common_types_decimal_string,
	mSecondSwingCooldDownTime: docs_json_ts_common_types_decimal_string,
	mAttackDistance: docs_json_ts_common_types_decimal_string,
	mArmAnimation?: 'AE_ShockShank' | 'AE_StunSpear',
};

type FGEquipmentStunSpear_xenobasher = FGEquipmentStunSpear_xenobasher_base & FGEquipmentStunSpear_base;

type FGEquipmentStunSpear_xenobasher_base = FGEquipmentStunSpear_base_base & FGEquipmentStunSpear_xenobasher_base_base & FGEquipmentStunSpear_xenobasher_version_specific;

type FGEquipmentStunSpear_xenobasher_base_base = {
	mCurrentMontageSection: 'None',
	mSecondAttackTimer: docs_json_ts_common_types_decimal_string,
	mFirstAttackTimer: docs_json_ts_common_types_decimal_string,
};

type FGEquipmentStunSpear_xenobasher_version_specific = {
	mRandomEquipAnim: docs_json_ts_common_types_integer_string,
};

type FGEquipmentStunSpear_xenozapper = FGEquipmentStunSpear_xenozapper_base & FGEquipmentStunSpear_base;

type FGEquipmentStunSpear_xenozapper_base = FGEquipmentStunSpear_base_base & FGEquipment_has_sound & FGEquipment_has_mRandomStingerAnim;

type FGGasMask = FGGasMask_base & FGEquipment_filtered & FGEquipment_has_effect_timer & FGEquipment_negates_damage & FGEquipment;

type FGGasMask_base = {
	mPostProcessEnabled: docs_json_ts_common_types_bool_string,
	mAttachSocket: 'helmetSocket',
	mArmAnimation: 'AE_None',
};

type FGGolfCartDispenser = FGEquipment_dispenser & {
	mArmAnimation: 'AE_Generic2Hand',
};

type FGInstructive = isNamed & {
	FullName: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_non_quoted,
	mRelevantEvents: null | docs_json_ts_0_3_7_7_properties_mRelevantEvents,
};

type FGItemDescriptorNuclearFuel = FGDescriptor_sinkable & FGItemDescriptorNuclearFuel_base;

type FGItemDescriptorNuclearFuel_base = FGDescriptor_sinkable_base & {
	mAmountOfWaste: docs_json_ts_common_types_integer_string,
};

type FGJetPack = FGJetPack_base & FGEquipment;

type FGJetPack_base = FGJetPack_base_base & {
	mJumpTimeStamp: docs_json_ts_common_types_decimal_string,
};

type FGJetPack_base_base = FGJetPack_base_base_base & {
	mThrustPower: docs_json_ts_common_types_decimal_string,
	mVelocityZExtreme: docs_json_ts_common_types_decimal_string,
	mVelocityZExtremesDamper: docs_json_ts_common_types_decimal_string,
	mJumpBeforeThrustTime: docs_json_ts_common_types_decimal_string,
	mMaxFuel: docs_json_ts_common_types_decimal_string,
	mFuelRegenRate: docs_json_ts_common_types_decimal_string,
	mFuelConsumeRate: docs_json_ts_common_types_decimal_string,
	mFuelWorth: docs_json_ts_common_types_decimal_string,
	mPaidForFuel: docs_json_ts_common_types_decimal_string,
	mThrustAirControl: docs_json_ts_common_types_decimal_string,
	mJumpTimeStamp: Exclude<string, ''>,
};

type FGJetPack_base_base_base = FGEquipment_base & {
	mCurrentFuel: docs_json_ts_common_types_decimal_string,
	mThrustCooldown: docs_json_ts_common_types_decimal_string,
	mDefaultAirControl: docs_json_ts_common_types_decimal_string,
	mRTPCInterval: docs_json_ts_common_types_decimal_string,
	mIsThrusting: docs_json_ts_common_types_bool_string,
	mArmAnimation: 'AE_None',
	mBackAnimation: 'BE_Jetpack',
};

type FGJumpingStilts = FGJumpingStilts_base & FGEquipment;

type FGJumpingStilts_base = FGEquipment_base_base & {
	mSprintSpeedFactor: docs_json_ts_common_types_decimal_string,
	mJumpSpeedFactor: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'jumpingStilt_lSocket',
};

type FGNobeliskDetonator = FGNobeliskDetonator_base & FGWeaponProjectile_thrown;

type FGNobeliskDetonator_base = FGWeaponProjectile_thrown_base_base & {
	mArmAnimation: 'AE_Nobelisk',
};

type FGObjectScanner = FGObjectScanner_base & {
	mObjectDetails: [
		{
			ScannableClass: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
			DisplayText: {
				NSLOCTEXT: [
					string,
					...string[],
				],
			},
			ScannerLightColor: docs_json_ts_common_types_BGRA,
			PreCacheAllOfType?: docs_json_ts_common_types_bool_string,
			ShouldOverrideDetectionRange?: docs_json_ts_common_types_bool_string,
			NewDetectionRange?: docs_json_ts_common_types_decimal_string,
			RequiredSchematic: docs_json_ts_0_3_7_7_properties_RequiredSchematic,
		},
		...{
			ScannableClass: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
			DisplayText: {
				NSLOCTEXT: [
					string,
					...string[],
				],
			},
			ScannerLightColor: docs_json_ts_common_types_BGRA,
			PreCacheAllOfType?: docs_json_ts_common_types_bool_string,
			ShouldOverrideDetectionRange?: docs_json_ts_common_types_bool_string,
			NewDetectionRange?: docs_json_ts_common_types_decimal_string,
			RequiredSchematic: docs_json_ts_0_3_7_7_properties_RequiredSchematic,
		}[],
	],
};

type FGObjectScanner_base = FGEquipment_has_sound & {
	mScreenUpdateTimer: docs_json_ts_common_types_empty_object,
	mScanlineLerpT: docs_json_ts_common_types_decimal_string,
	mScreenUpdateTime: docs_json_ts_common_types_decimal_string,
	mNormalizedCloesnessToObject: docs_json_ts_common_types_decimal_string,
	mObjectIsWithinRange: docs_json_ts_common_types_bool_string,
	mBeepDelayMax: docs_json_ts_common_types_decimal_string,
	mBeepDelayMin: docs_json_ts_common_types_decimal_string,
	mDetectionRange: docs_json_ts_common_types_decimal_string,
	mUpdateClosestObjectTime: docs_json_ts_common_types_decimal_string,
	mShouldBeepEvenIfNoObject: docs_json_ts_common_types_bool_string,
};

type FGParachute = FGEquipment & FGParachute_base;

type FGParachute_base = FGEquipment_base & {
	mTerminalVelocityZ: docs_json_ts_common_types_decimal_string,
	mIsDeployed: docs_json_ts_common_types_bool_string,
};

type FGPipeHyperStart = FGPipeHyperStart_base & FGBuildable_pole_with_length_and_power;

type FGPipeHyperStart_base = FGPipeHyperStart_base_base & FGBuildable_pole_with_length_and_power_base;

type FGPipeHyperStart_base_base = FGBuildable_pole_with_length_and_power_base_base & {
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

type FGPortableMinerDispenser = FGPortableMinerDispenser_version_specific & FGEquipment_dispenser;

type FGPortableMinerDispenser_version_specific = {
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
	mProducedIn: docs_json_ts_0_3_7_7_properties_mProducedIn,
};

type FGResourceDescriptor = FGDescriptor_sinkable & FGResourceDescriptor_base;

type FGResourceDescriptor_base = FGDescriptor_sinkable_base & {
	mDecalSize: docs_json_ts_common_types_decimal_string,
	mPingColor: docs_json_ts_common_types_RGBA,
	mCollectSpeedMultiplier: docs_json_ts_common_types_decimal_string,
	mManualMiningAudioName: 'Metal',
};

type FGSchematic = FGSchematic_base & {
	mCost: null | docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
};

type FGSchematic_base = FGInstructive & {
	mType: docs_json_ts_0_3_7_7_properties_mType,
	mSubCategories: null | [
		'None',
	] | docs_json_ts_0_3_7_7_properties_mSubCategories,
	mTimeToComplete: docs_json_ts_common_types_decimal_string,
	mIncludeInBuilds: 'IIB_PublicBuilds',
};

type FGSchematic_version_specific = FGSchematic & {
	mTechTier: docs_json_ts_0_3_7_7_properties_Tier,
	mUnlocks: never[] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mResourcesToAddToScanner,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mResourcesToAddToScanner,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mResourcesToAddToScanner,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	] | [
		docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive,
	],
	mSchematicDependencies: [
		...docs_json_ts_0_3_7_7_properties_mSchematicDependencies_item[],
	],
};

type FGSnowballWeapon = FGWeaponProjectile_thrown & {
	mArmAnimation: 'AE_Generic1Hand',
};

type FGSuitBase = FGSuitBase_base & FGEquipment_filtered & FGEquipment_has_effect_timer & FGEquipment_negates_damage & FGEquipment;

type FGSuitBase_base = {
	mImmunity: docs_json_ts_common_types_decimal_string,
	mSuit1PMeshMaterials: [
		{
			SlotName: 'Body_Details' | 'Body_01' | 'Body_02' | 'Body_Hands' | 'Body_Backpack',
			Material: docs_json_ts_0_3_7_7_properties_MaterialInstanceConstant_quoted,
		},
		...{
			SlotName: 'Body_Details' | 'Body_01' | 'Body_02' | 'Body_Hands' | 'Body_Backpack',
			Material: docs_json_ts_0_3_7_7_properties_MaterialInstanceConstant_quoted,
		}[],
	],
	mArmAnimation?: 'AE_None',
};

type FGWeaponInstantFire = FGWeaponProjectile_instant & FGWeaponInstantFire_base;

type FGWeaponInstantFire_base = FGWeaponInstantFire_base_base & FGWeaponProjectile_instant_base;

type FGWeaponInstantFire_base_base = FGWeaponInstantFire_base_base_base & {
	mLockAngle: docs_json_ts_common_types_decimal_string,
};

type FGWeaponInstantFire_base_base_base = FGWeaponProjectile_instant_base_base & {
	Fire: docs_json_ts_common_types_empty_object,
	mHasReloadedOnce: docs_json_ts_common_types_bool_string,
	mArmAnimation: 'AE_Rifle',
};

type FGWeaponProjectile = FGWeaponProjectile_base & FGWeaponProjectile_base_version_specific;

type FGWeaponProjectile_base = FGWeaponProjectile_base_base & FGEquipment_base;

type FGWeaponProjectile_base_base = FGEquipment_base_base & {
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

type FGWeaponProjectile_instant_base = FGWeaponProjectile_instant_base_base & FGWeaponProjectile_base;

type FGWeaponProjectile_instant_base_base = FGEquipment_base_base & {
	mAttachSocket: 'hand_rSocket',
};

type FGWeaponProjectile_instant_base_version_specific = FGWeaponProjectile_base & {
	mInstantHitDamage: docs_json_ts_common_types_decimal_string,
	mWeaponTraceLength: docs_json_ts_common_types_decimal_string,
};

type FGWeaponProjectile_thrown = FGWeaponProjectile_thrown_base & FGWeaponProjectile;

type FGWeaponProjectile_thrown_base = FGWeaponProjectile_thrown_base_base & {
	mExplosiveData: {
		ProjectileClass: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
		ProjectileLifeSpan: docs_json_ts_common_types_decimal_string_signed,
		ProjectileStickSpan: docs_json_ts_common_types_decimal_string_signed,
		ExplosionDamage: docs_json_ts_common_types_integer_string,
		ExplosionRadius: docs_json_ts_common_types_decimal_string,
		ImpactDamage: docs_json_ts_common_types_integer_string,
		ExplodeAtEndOfLife: docs_json_ts_common_types_bool_string,
		DamageType: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
		DamageTypeExplode: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
	},
	mDispensedExplosives: '',
	mDelayBetweenExplosions: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'hand_lSocket',
	mArmAnimation: 'AE_Nobelisk' | 'AE_Generic1Hand',
};

type FGWeaponProjectile_thrown_base_base = {
	mIsPendingExecuteFire: docs_json_ts_common_types_bool_string,
	mMaxChargeTime: docs_json_ts_common_types_decimal_string,
	mMaxThrowForce: docs_json_ts_common_types_integer_string,
	mMinThrowForce: docs_json_ts_common_types_integer_string,
};

type FGWeaponProjectileFire = FGWeaponProjectile & FGWeaponProjectileFire_base & FGWeaponProjectileFire_base_random & FGWeaponProjectileFire_base_version_specific;

type FGWeaponProjectileFire_base = FGWeaponProjectileFire_base_base & FGWeaponProjectile_base;

type FGWeaponProjectileFire_base_base = FGEquipment_base & {
	mAttachSocket: 'hand_rSocket',
};

type FGWeaponProjectileFire_base_random = FGWeaponProjectileFire_base_random_base & FGWeaponProjectile_base;

type FGWeaponProjectileFire_base_random_base = FGWeaponProjectileFire_base_random_base_base & FGEquipment_has_mRandomStingerAnim;

type FGWeaponProjectileFire_base_random_base_base = FGEquipment_base & {
	mRandomReloadAnim: docs_json_ts_common_types_integer_string,
};

type FGWeaponProjectileFire_base_version_specific = FGWeaponProjectile_base & {
	mMuteDryFire: docs_json_ts_common_types_bool_string,
	mProjectileData: {
		ProjectileClass: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
		ProjectileLifeSpan: docs_json_ts_common_types_decimal_string,
		ProjectileStickSpan: docs_json_ts_common_types_decimal_string,
		ExplosionDamage: docs_json_ts_common_types_integer_string,
		ImpactDamage: docs_json_ts_common_types_integer_string,
		CanTriggerExplodeBySameClass: docs_json_ts_common_types_bool_string,
		DamageType: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
		DamageTypeExplode: docs_json_ts_0_3_7_7_properties_Class_quoted,
	},
	mArmAnimation: 'AE_RebarGun',
};

export type {
	hasClassName,
	isDescribed,
	isNamed,
	FGBuildable,
	FGBuildable_base,
	FGBuildable_base_pre_update8,
	FGBuildable_base_version_specific,
	FGBuildable_DisableAttachmentSnapOn,
	FGBuildable_docking_station,
	FGBuildable_docking_station_base,
	FGBuildable_docking_station_base_base,
	FGBuildable_docking_station_base_base_base,
	FGBuildable_docking_station_base_with_mMapText,
	FGBuildable_occupied,
	FGBuildable_occupied_base,
	FGBuildable_pole,
	FGBuildable_pole_base,
	FGBuildable_pole_with_length,
	FGBuildable_pole_with_length_base,
	FGBuildable_pole_with_length_and_power,
	FGBuildable_pole_with_length_and_power_base,
	FGBuildable_pole_with_length_and_power_base_base,
	FGBuildable_powered,
	FGBuildable_powered_base,
	FGBuildable_powered_base_base,
	FGBuildable_powered_base_base_base,
	FGBuildable_powered_base_base_with_mNumCyclesForProductivity,
	FGBuildable_powered_base_resources,
	FGBuildable_powered_base_resources_base,
	FGBuildable_powered_base_resources_base_base,
	FGBuildable_powered_storage,
	FGBuildable_powered_storage_base,
	FGBuildable_powered_storage_base_base,
	FGBuildable_powered_storage_base_base_base,
	FGBuildable_spline,
	FGBuildable_tiered,
	FGBuildable_tiered_base,
	FGBuildable_with_height,
	FGBuildable_with_height_base,
	FGBuildable_with_height_and_elevation,
	FGBuildable_with_height_and_width,
	FGBuildable_with_height_and_width_base,
	FGBuildable_with_length,
	FGBuildable_with_size,
	FGBuildable_with_size_base,
	FGBuildable_with_size_and_elevation,
	FGBuildable_with_size_and_elevation_base,
	FGBuildable_with_size_and_elevation_base_base,
	FGBuildable_with_width,
	FGBuildable_with_width_base,
	FGBuildableAttachment,
	FGBuildableAttachment_base,
	FGBuildableAttachment_base_base,
	FGBuildableAttachment_base_base_base,
	FGBuildableAttachment_splitter,
	FGBuildableAttachment_splitter_base,
	FGBuildableAttachment_splitter_base_base,
	FGBuildableAttachment_splitter_base_base_base,
	FGBuildableAttachment_splitter_base_base_base_with_mCurrentOutputIndex,
	FGBuildableAttachment_splitter_base_base_base_with_mDistributionTable,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentMerger_base,
	FGBuildableAttachmentMerger_base_base,
	FGBuildableAttachmentMerger_base_base_base,
	FGBuildableAttachmentMerger_base_base_base_base,
	FGBuildableConveyorBelt_base,
	FGBuildableConveyorBelt_base_base,
	FGBuildableConveyorBelt_spline,
	FGBuildableConveyorBelt_spline_base,
	FGBuildableConveyorLift,
	FGBuildableConveyorLift_base,
	FGBuildableDockingStation,
	FGBuildableDockingStation_base,
	FGBuildableDockingStation_base_base,
	FGBuildableDockingStation_with_mFuelTransferSpeed,
	FGBuildableDockingStation_with_mFuelTransferSpeed_base,
	FGBuildableFactory_jump_pad,
	FGBuildableFactory_jump_pad_base,
	FGBuildableFactory_jump_pad_base_base,
	FGBuildableFactory_jump_pad_base_base_base,
	FGBuildableFactory_landing_pad,
	FGBuildableFactory_landing_pad_base,
	FGBuildableFactory_landing_pad_base_base,
	FGBuildableFactory_landing_pad_base_base_base,
	FGBuildableFactorySimpleProducer,
	FGBuildableFactorySimpleProducer_base,
	FGBuildableFactorySimpleProducer_base_base,
	FGBuildableGenerator,
	FGBuildableGenerator_base,
	FGBuildableGenerator_base_base,
	FGBuildableGenerator_base_base_base,
	FGBuildableGenerator_no_fuel,
	FGBuildableGenerator_no_fuel_base,
	FGBuildableGenerator_no_fuel_base_base,
	FGBuildableGenerator_no_fuel_base_base_base,
	FGBuildableGenerator_no_fuel_base_base_base_base,
	FGBuildableGeneratorFuel_base,
	FGBuildableGeneratorFuel_base_base,
	FGBuildableGeneratorFuel_base_base_base,
	FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_biomass_base,
	FGBuildableGeneratorFuel_biomass_base_base,
	FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_coal_base,
	FGBuildableGeneratorFuel_coal_base_base,
	FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorFuel_fuel_base,
	FGBuildableGeneratorFuel_fuel_base_base,
	FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorGeoThermal_base,
	FGBuildableGeneratorGeoThermal_base_base,
	FGBuildableGeneratorGeoThermal_base_base_base,
	FGBuildableGeneratorNuclear,
	FGBuildableGeneratorNuclear_base,
	FGBuildableGeneratorNuclear_base_base,
	FGBuildableGeneratorNuclear_base_base_base,
	FGBuildableJumppad,
	FGBuildableJumppad_base,
	FGBuildableJumppad_base_base,
	FGBuildableJumppad_base_base_base,
	FGBuildableLadder,
	FGBuildableLadder_base,
	FGBuildableManufacturer_base,
	FGBuildableManufacturer_base_base,
	FGBuildableManufacturer_base_base_base,
	FGBuildableManufacturer_base_IsPowered,
	FGBuildableManufacturer_base_IsPowered_base,
	FGBuildableManufacturer_base_IsPowered_base_base,
	FGBuildableManufacturer_base_mProductionEffectsRunning,
	FGBuildableManufacturer_base_mProductionEffectsRunning_base,
	FGBuildableManufacturer_base_mProductionEffectsRunning_base_base,
	FGBuildableManufacturer_base_packager,
	FGBuildableManufacturer_base_packager_base,
	FGBuildableManufacturer_base_packager_base_base,
	FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildableManufacturer_Build_SmelterMk1_C_base,
	FGBuildablePipeHyper,
	FGBuildablePipeline,
	FGBuildablePipeline_base,
	FGBuildablePipeline_base_base,
	FGBuildablePipeline_base_no_indicator_base,
	FGBuildablePipeline_base_root,
	FGBuildablePipeline_base_root_quantized,
	FGBuildablePipeline_base_spline,
	FGBuildablePipeline_base_spline_base,
	FGBuildablePipeline_junction,
	FGBuildablePipeline_junction_base,
	FGBuildablePipelineJunction,
	FGBuildablePipelineJunction_base,
	FGBuildablePipelinePump_base,
	FGBuildablePipelinePump_base_base,
	FGBuildablePipelinePump_base_base_base,
	FGBuildablePipelinePump_powered_base,
	FGBuildablePipelinePump_powered_base_base,
	FGBuildablePipelinePump_powered_base_base_base,
	FGBuildablePipelinePump_powered_base_base_base_base,
	FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_pump_base,
	FGBuildablePipelinePump_pump_base_base,
	FGBuildablePipelinePump_pump_base_base_base,
	FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport,
	FGBuildablePipelineSupport_base,
	FGBuildablePipeReservoir,
	FGBuildablePipeReservoir_base,
	FGBuildablePipeReservoir_base_base,
	FGBuildablePipeReservoir_base_base_base,
	FGBuildablePole,
	FGBuildablePole_base,
	FGBuildablePowerPole,
	FGBuildablePowerPole_base,
	FGBuildableRadarTower,
	FGBuildableRadarTower_base,
	FGBuildableRadarTower_base_base,
	FGBuildableRailroadStation,
	FGBuildableRailroadStation_base,
	FGBuildableRailroadStation_base_base,
	FGBuildableRailroadTrack,
	FGBuildableRailroadTrack_base,
	FGBuildableResourceExtractor,
	FGBuildableResourceExtractor_base,
	FGBuildableResourceExtractor_base_base,
	FGBuildableResourceExtractor_base_base_base,
	FGBuildableResourceExtractor_base_base_base_base,
	FGBuildableResourceExtractor_base_base_base_base_base,
	FGBuildableResourceExtractor_base_base_base_piped,
	FGBuildableResourceExtractor_base_base_base_piped_base,
	FGBuildableResourceExtractor_base_base_timed,
	FGBuildableResourceExtractor_base_base_timed_base,
	FGBuildableResourceExtractor_base_with_resources,
	FGBuildableResourceExtractor_base_with_resources_base,
	FGBuildableResourceExtractor_base_with_resources_base_base,
	FGBuildableResourceExtractor_miner_base,
	FGBuildableResourceExtractor_miner_base_base,
	FGBuildableResourceExtractor_miner_base_base_base,
	FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk1_base,
	FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk2_base,
	FGBuildableResourceExtractor_miner_mk2_base_base,
	FGBuildableResourceExtractor_miner_mk2_base_base_base,
	FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_miner_mk3_base,
	FGBuildableResourceExtractor_miner_mk3_base_base,
	FGBuildableResourceExtractor_miner_mk3_base_base_base,
	FGBuildableResourceExtractor_oil,
	FGBuildableResourceExtractor_oil_base,
	FGBuildableResourceExtractor_oil_base_base,
	FGBuildableResourceExtractor_oil_base_base_base,
	FGBuildableResourceExtractor_water,
	FGBuildableResourceExtractor_water_base,
	FGBuildableResourceExtractor_water_base_base,
	FGBuildableResourceExtractor_water_base_base_base,
	FGBuildableResourceExtractor_water_base_base_version_specific,
	FGBuildableResourceExtractor_with_mAllowedResourceForms,
	FGBuildableResourceExtractor_with_mExtractionOffset,
	FGBuildableResourceExtractor_with_mRequireResourceAtMinimumDepthChecks,
	FGBuildableResourceExtractor_with_placement,
	FGBuildableResourceSink,
	FGBuildableResourceSink_base,
	FGBuildableResourceSink_base_base,
	FGBuildableResourceSink_base_base_base,
	FGBuildableResourceSinkShop,
	FGBuildableResourceSinkShop_base,
	FGBuildableResourceSinkShop_base_base,
	FGBuildableResourceSinkShop_base_base_base,
	FGBuildableSpaceElevator,
	FGBuildableSpaceElevator_base,
	FGBuildableSpaceElevator_base_base,
	FGBuildableSplitterSmart,
	FGBuildableSplitterSmart_base,
	FGBuildableSplitterSmart_base_base,
	FGBuildableSplitterSmart_base_base_base,
	FGBuildableStorage,
	FGBuildableStorage_base,
	FGBuildableStorage_base_base,
	FGBuildableStorage_base_base_base,
	FGBuildableTradingPost,
	FGBuildableTradingPost_base,
	FGBuildableTradingPost_base_base,
	FGBuildableTradingPost_base_base_base,
	FGBuildableTradingPost_base_base_version_specific,
	FGBuildableTradingPost_base_version_specific,
	FGBuildableTrainPlatform,
	FGBuildableTrainPlatform_base,
	FGBuildableTrainPlatform_base_base,
	FGBuildableTrainPlatform_with_storage,
	FGBuildableTrainPlatform_with_storage_base,
	FGBuildableTrainPlatform_with_storage_base_base,
	FGBuildableTrainPlatform_with_storage_base_base_base,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformCargo_base,
	FGBuildableTrainPlatformCargo_base_base,
	FGBuildableWire,
	FGBuildableWire_base,
	FGChainsaw,
	FGColorGun,
	FGColorGun_base,
	FGColorGun_base_base,
	FGConsumableDescriptor,
	FGConsumableDescriptor_base,
	FGConsumableEquipment,
	FGConsumableEquipment_base,
	FGConsumableEquipment_version_specific,
	FGConsumableEquipment_version_specific_mAnimData,
	FGConsumableEquipment_version_specific_pre_update8,
	FGDescriptor,
	FGDescriptor_base,
	FGDescriptor_BuildMenu,
	FGDescriptor_BuildMenu_base,
	FGDescriptor_sinkable,
	FGDescriptor_sinkable_base,
	FGEquipment,
	FGEquipment_base,
	FGEquipment_base_base,
	FGEquipment_base_base_base,
	FGEquipment_base_base_version_specific,
	FGEquipment_base_version_specific,
	FGEquipment_dispenser,
	FGEquipment_dispenser_version_specific,
	FGEquipment_filtered,
	FGEquipment_has_effect_timer,
	FGEquipment_has_mRandomStingerAnim,
	FGEquipment_has_sound,
	FGEquipment_negates_damage,
	FGEquipmentStunSpear_base,
	FGEquipmentStunSpear_base_base,
	FGEquipmentStunSpear_base_base_base,
	FGEquipmentStunSpear_base_version_specific,
	FGEquipmentStunSpear_xenobasher,
	FGEquipmentStunSpear_xenobasher_base,
	FGEquipmentStunSpear_xenobasher_base_base,
	FGEquipmentStunSpear_xenobasher_version_specific,
	FGEquipmentStunSpear_xenozapper,
	FGEquipmentStunSpear_xenozapper_base,
	FGGasMask,
	FGGasMask_base,
	FGGolfCartDispenser,
	FGInstructive,
	FGItemDescriptorNuclearFuel,
	FGItemDescriptorNuclearFuel_base,
	FGJetPack,
	FGJetPack_base,
	FGJetPack_base_base,
	FGJetPack_base_base_base,
	FGJumpingStilts,
	FGJumpingStilts_base,
	FGNobeliskDetonator,
	FGNobeliskDetonator_base,
	FGObjectScanner,
	FGObjectScanner_base,
	FGParachute,
	FGParachute_base,
	FGPipeHyperStart,
	FGPipeHyperStart_base,
	FGPipeHyperStart_base_base,
	FGPortableMinerDispenser,
	FGPortableMinerDispenser_version_specific,
	FGRecipe,
	FGRecipe_base,
	FGRecipe_base_version_specific,
	FGRecipe_mProducedIn,
	FGResourceDescriptor,
	FGResourceDescriptor_base,
	FGSchematic,
	FGSchematic_base,
	FGSchematic_version_specific,
	FGSnowballWeapon,
	FGSuitBase,
	FGSuitBase_base,
	FGWeaponInstantFire,
	FGWeaponInstantFire_base,
	FGWeaponInstantFire_base_base,
	FGWeaponInstantFire_base_base_base,
	FGWeaponProjectile,
	FGWeaponProjectile_base,
	FGWeaponProjectile_base_base,
	FGWeaponProjectile_base_version_specific,
	FGWeaponProjectile_instant,
	FGWeaponProjectile_instant_base,
	FGWeaponProjectile_instant_base_base,
	FGWeaponProjectile_instant_base_version_specific,
	FGWeaponProjectile_thrown,
	FGWeaponProjectile_thrown_base,
	FGWeaponProjectile_thrown_base_base,
	FGWeaponProjectileFire,
	FGWeaponProjectileFire_base,
	FGWeaponProjectileFire_base_base,
	FGWeaponProjectileFire_base_random,
	FGWeaponProjectileFire_base_random_base,
	FGWeaponProjectileFire_base_random_base_base,
	FGWeaponProjectileFire_base_version_specific,
};
