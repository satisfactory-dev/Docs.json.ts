/* eslint-disable @stylistic/max-len */

import type {
	FGBuildable as docs_json_ts_0_3_7_7_classes_base_FGBuildable,
	FGBuildable_docking_station as docs_json_ts_0_3_7_7_classes_base_FGBuildable_docking_station,
	FGBuildable_occupied as docs_json_ts_0_3_7_7_classes_base_FGBuildable_occupied,
	FGBuildable_pole_with_length_and_power as docs_json_ts_0_3_7_7_classes_base_FGBuildable_pole_with_length_and_power,
	FGBuildable_powered as docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered,
	FGBuildable_spline as docs_json_ts_0_3_7_7_classes_base_FGBuildable_spline,
	FGBuildable_tiered as docs_json_ts_0_3_7_7_classes_base_FGBuildable_tiered,
	FGBuildable_with_height_and_elevation as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_elevation,
	FGBuildable_with_height_and_width as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_width,
	FGBuildable_with_length as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_length,
	FGBuildable_with_size_and_elevation as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_size_and_elevation,
	FGBuildable_with_width as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_width,
	FGBuildableAttachment as docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachment,
	FGBuildableAttachment_splitter as docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachment_splitter,
	FGBuildableConveyorBelt_base as docs_json_ts_0_3_7_7_classes_base_FGBuildableConveyorBelt_base,
	FGBuildableConveyorBelt_spline as docs_json_ts_0_3_7_7_classes_base_FGBuildableConveyorBelt_spline,
	FGBuildableFactory_jump_pad as docs_json_ts_0_3_7_7_classes_base_FGBuildableFactory_jump_pad,
	FGBuildableGenerator_no_fuel as docs_json_ts_0_3_7_7_classes_base_FGBuildableGenerator_no_fuel,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorNuclear as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorNuclear,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildablePipeline as docs_json_ts_0_3_7_7_classes_base_FGBuildablePipeline,
	FGBuildablePipelineJunction as docs_json_ts_0_3_7_7_classes_base_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_0_3_7_7_classes_base_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_0_3_7_7_classes_base_FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport as docs_json_ts_0_3_7_7_classes_base_FGBuildablePipelineSupport,
	FGBuildablePipeReservoir as docs_json_ts_0_3_7_7_classes_base_FGBuildablePipeReservoir,
	FGBuildablePole as docs_json_ts_0_3_7_7_classes_base_FGBuildablePole,
	FGBuildablePowerPole as docs_json_ts_0_3_7_7_classes_base_FGBuildablePowerPole,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_oil,
	FGBuildableResourceExtractor_water as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_water,
	FGBuildableTradingPost as docs_json_ts_0_3_7_7_classes_base_FGBuildableTradingPost,
	FGBuildableTrainPlatform as docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatform,
	FGBuildableTrainPlatform_with_storage as docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatform_with_storage,
	FGBuildableWire as docs_json_ts_0_3_7_7_classes_base_FGBuildableWire,
	FGConsumableDescriptor as docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor,
	FGConsumableEquipment as docs_json_ts_0_3_7_7_classes_base_FGConsumableEquipment,
	FGDescriptor_BuildMenu as docs_json_ts_0_3_7_7_classes_base_FGDescriptor_BuildMenu,
	FGDescriptor_sinkable as docs_json_ts_0_3_7_7_classes_base_FGDescriptor_sinkable,
	FGEquipment as docs_json_ts_0_3_7_7_classes_base_FGEquipment,
	FGEquipment_dispenser as docs_json_ts_0_3_7_7_classes_base_FGEquipment_dispenser,
	FGEquipment_has_sound as docs_json_ts_0_3_7_7_classes_base_FGEquipment_has_sound,
	FGEquipmentStunSpear_base as docs_json_ts_0_3_7_7_classes_base_FGEquipmentStunSpear_base,
	FGItemDescriptorNuclearFuel as docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel,
	FGPortableMinerDispenser as docs_json_ts_0_3_7_7_classes_base_FGPortableMinerDispenser,
	FGRecipe as docs_json_ts_0_3_7_7_classes_base_FGRecipe,
	FGSchematic as docs_json_ts_0_3_7_7_classes_base_FGSchematic,
	FGWeaponInstantFire as docs_json_ts_0_3_7_7_classes_base_FGWeaponInstantFire,
	FGWeaponProjectile_instant as docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectile_instant,
	FGWeaponProjectile_thrown as docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectile_thrown,
	FGWeaponProjectileFire as docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectileFire,
} from './classes/Base.ts';

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
	XYZW_decimal_string as docs_json_ts_common_types_XYZW_decimal_string,
} from './../common/types.ts';

import type {
	mSchematicDependencies_item as docs_json_ts_0_3_7_7_properties_mSchematicDependencies_item,
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
	mUnlocks_item_mResourcesToAddToScanner as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mResourcesToAddToScanner,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
	Tier as docs_json_ts_0_3_7_7_properties_Tier,
} from './types/properties.ts';

type FGBuildable_base = docs_json_ts_0_3_7_7_classes_base_FGBuildable;

type FGBuildable_occupied = docs_json_ts_0_3_7_7_classes_base_FGBuildable_occupied;

type FGBuildable_powered_base = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered;

type FGBuildable_tiered = docs_json_ts_0_3_7_7_classes_base_FGBuildable_tiered;

type FGBuildableAttachmentMerger = docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachment & {
	mCurrentInputIndex: docs_json_ts_common_types_integer_string_signed,
};

type FGBuildableAttachmentSplitter = docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachment_splitter;

type FGBuildableConveyorBelt = docs_json_ts_0_3_7_7_classes_base_FGBuildableConveyorBelt_spline;

type FGBuildableConveyorLift = docs_json_ts_0_3_7_7_classes_base_FGBuildableConveyorBelt_base & {
	mMeshHeight: docs_json_ts_common_types_decimal_string,
	mTopTransform: {
		Rotation: docs_json_ts_common_types_XYZW_decimal_string,
		Translation: docs_json_ts_common_types_XYZ_decimal_string,
		Scale3D: docs_json_ts_common_types_XYZ_decimal_string,
	},
	mIsReversed: docs_json_ts_common_types_bool_string,
};

type FGBuildableDockingStation = docs_json_ts_0_3_7_7_classes_base_FGBuildable_docking_station & {
	mMapText: '',
	mFuelTransferSpeed: docs_json_ts_common_types_decimal_string,
};

type FGBuildableFactory_jump_pad = docs_json_ts_0_3_7_7_classes_base_FGBuildableFactory_jump_pad;

type FGBuildableFactory_landing_pad = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	mDampeningFactor: docs_json_ts_common_types_decimal_string,
	mPlayerList: '',
};

type FGBuildableFactorySimpleProducer = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	mTimeToProduceItem: docs_json_ts_common_types_decimal_string,
	mEventType: 'EV_Christmas',
};

type FGBuildableFoundation = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_elevation;

type FGBuildableGeneratorFuel_biomass = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_biomass;

type FGBuildableGeneratorFuel_coal = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_coal;

type FGBuildableGeneratorFuel_fuel = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_fuel;

type FGBuildableGeneratorGeoThermal = docs_json_ts_0_3_7_7_classes_base_FGBuildableGenerator_no_fuel & {
	mProductionEffectsRunning: docs_json_ts_common_types_bool_string,
};

type FGBuildableGeneratorNuclear = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorNuclear;

type FGBuildableJumppad = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
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

type FGBuildableLadder = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_width & {
	mMeshHeight: docs_json_ts_common_types_decimal_string,
	mMaxSegmentCount: docs_json_ts_common_types_integer_string,
	mNumSegments: docs_json_ts_common_types_integer_string,
	mLadderMeshes: '',
};

type FGBuildableManufacturer_Build_AssemblerMk1_C = docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_AssemblerMk1_C;

type FGBuildableManufacturer_Build_ConstructorMk1_C = docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_ConstructorMk1_C;

type FGBuildableManufacturer_Build_FoundryMk1_C = docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_FoundryMk1_C;

type FGBuildableManufacturer_Build_ManufacturerMk1_C = docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_ManufacturerMk1_C;

type FGBuildableManufacturer_Build_OilRefinery_C = docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_OilRefinery_C;

type FGBuildableManufacturer_Build_Packager_C = docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_Packager_C;

type FGBuildableManufacturer_Build_SmelterMk1_C = docs_json_ts_0_3_7_7_classes_base_FGBuildableManufacturer_Build_SmelterMk1_C;

type FGBuildablePipeHyper = docs_json_ts_0_3_7_7_classes_base_FGBuildable_spline;

type FGBuildablePipeline = docs_json_ts_0_3_7_7_classes_base_FGBuildablePipeline;

type FGBuildablePipelineJunction = docs_json_ts_0_3_7_7_classes_base_FGBuildablePipelineJunction;

type FGBuildablePipelinePump_pump = docs_json_ts_0_3_7_7_classes_base_FGBuildablePipelinePump_pump;

type FGBuildablePipelinePump_valve = docs_json_ts_0_3_7_7_classes_base_FGBuildablePipelinePump_valve;

type FGBuildablePipelineSupport = docs_json_ts_0_3_7_7_classes_base_FGBuildablePipelineSupport;

type FGBuildablePipeReservoir = docs_json_ts_0_3_7_7_classes_base_FGBuildablePipeReservoir;

type FGBuildablePole = docs_json_ts_0_3_7_7_classes_base_FGBuildablePole;

type FGBuildablePowerPole = docs_json_ts_0_3_7_7_classes_base_FGBuildablePowerPole;

type FGBuildableRadarTower = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	mMapText: 'Radar Tower',
	OnRadarTowerRadiusUpdated: docs_json_ts_common_types_empty_object,
	mMinRevealRadius: docs_json_ts_common_types_decimal_string,
	mMaxRevealRadius: docs_json_ts_common_types_decimal_string,
	mNumRadarExpansionSteps: docs_json_ts_common_types_integer_string,
	mRadarExpansionInterval: docs_json_ts_common_types_decimal_string,
	mCurrentExpansionStep: docs_json_ts_common_types_integer_string,
	mTimeToNextExpansion: docs_json_ts_common_types_decimal_string,
};

type FGBuildableRailroadStation = docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatform & {
	mMapText: 'Train Station',
	mDockedPlatformList: '',
};

type FGBuildableRailroadTrack = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_length & {
	mIsOwnedByPlatform: docs_json_ts_common_types_bool_string,
};

type FGBuildableResourceExtractor_miner_mk1 = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk1;

type FGBuildableResourceExtractor_miner_mk2 = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk2;

type FGBuildableResourceExtractor_miner_mk3 = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk3;

type FGBuildableResourceExtractor_oil = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_oil;

type FGBuildableResourceExtractor_water = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_water;

type FGBuildableResourceSink = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	SFXEngineTimeline_EngineAlpha_073E1D2A4BAD246B3958E183E210FAAE: docs_json_ts_common_types_decimal_string,
	SFXEngineTimeline__Direction_073E1D2A4BAD246B3958E183E210FAAE: 'Forward',
	VFX_SFX_Timeline_EngineAlpha_A2CB706E440839665A39888572D206AA: docs_json_ts_common_types_decimal_string,
	VFX_SFX_Timeline__Direction_A2CB706E440839665A39888572D206AA: 'Forward',
	HastLostSignificance: docs_json_ts_common_types_bool_string,
	mProcessingTime: docs_json_ts_common_types_decimal_string,
	mSavedProducingTimer: docs_json_ts_common_types_decimal_string,
};

type FGBuildableResourceSinkShop = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	mShopInventoryDefaultSize: docs_json_ts_common_types_integer_string,
};

type FGBuildableSnowDispenser = docs_json_ts_0_3_7_7_classes_base_FGBuildable;

type FGBuildableSpaceElevator = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	mMapText: 'Space Elevator',
};

type FGBuildableSplitterSmart = docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachment_splitter & {
	OnSortRulesChangedDelegate: docs_json_ts_common_types_empty_object,
	mMaxNumSortRules: docs_json_ts_common_types_integer_string,
	mLastItem: {
		ItemState: docs_json_ts_common_types_empty_object,
	},
	mItemToLastOutputMap: docs_json_ts_common_types_empty_object,
	mLastOutputIndex: docs_json_ts_common_types_integer_string,
};

type FGBuildableStair = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_elevation;

type FGBuildableStorage = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	mStackingHeight: docs_json_ts_common_types_decimal_string,
	mInventorySizeX: docs_json_ts_common_types_integer_string,
	mInventorySizeY: docs_json_ts_common_types_integer_string,
};

type FGBuildableTradingPost = docs_json_ts_0_3_7_7_classes_base_FGBuildableTradingPost & {
	mMamFreeText: 'Use M.A.M.',
	mMamOccupiedText: 'M.A.M. is occupied',
};

type FGBuildableTrainPlatformCargo = docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatform_with_storage & {
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

type FGBuildableTrainPlatformEmpty = docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatform;

type FGBuildableWalkway = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_size_and_elevation;

type FGBuildableWall = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_width;

type FGBuildableWire = docs_json_ts_0_3_7_7_classes_base_FGBuildableWire;

type FGBuildingDescriptor = docs_json_ts_0_3_7_7_classes_base_FGDescriptor_BuildMenu;

type FGChainsaw = docs_json_ts_0_3_7_7_classes_base_FGEquipment_has_sound & {
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

type FGColorGun = docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectile_instant & {
	mPrimaryColor: docs_json_ts_common_types_RGBA,
	mSecondaryColor: docs_json_ts_common_types_RGBA,
	mRedundantTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mNoTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mNonColorableTargetCrosshairColor: docs_json_ts_common_types_RGBA,
	mColorSlot: docs_json_ts_common_types_integer_string,
	mArmAnimation: 'AE_ColorGun',
};

type FGConsumableDescriptor = docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor;

type FGConsumableEquipment = docs_json_ts_0_3_7_7_classes_base_FGConsumableEquipment & {
	mArmAnimation: 'AE_Consumables' | 'AE_OneHandEquipment',
};

type FGEquipmentStunSpear_xenobasher = docs_json_ts_0_3_7_7_classes_base_FGEquipmentStunSpear_base & {
	mCurrentMontageSection: 'None',
	mSecondAttackTimer: docs_json_ts_common_types_decimal_string,
	mFirstAttackTimer: docs_json_ts_common_types_decimal_string,
	mRandomEquipAnim: docs_json_ts_common_types_integer_string,
};

type FGEquipmentStunSpear_xenozapper = docs_json_ts_0_3_7_7_classes_base_FGEquipmentStunSpear_base & {
	mPlayingSound: docs_json_ts_common_types_bool_string,
	mRandomStingerAnim: docs_json_ts_common_types_integer_string,
};

type FGGasMask = docs_json_ts_0_3_7_7_classes_base_FGEquipment & {
	mCountdown: docs_json_ts_common_types_decimal_string,
	mFilterDuration: docs_json_ts_common_types_decimal_string,
	mIsWorking: docs_json_ts_common_types_bool_string,
	mHasNegatedDamage: docs_json_ts_common_types_bool_string,
	mDamageNegated: docs_json_ts_common_types_decimal_string,
	mDisableEffectTimer: docs_json_ts_common_types_decimal_string,
	mPostProcessEnabled: docs_json_ts_common_types_bool_string,
	mAttachSocket: 'helmetSocket',
	mArmAnimation: 'AE_None',
};

type FGGolfCartDispenser = docs_json_ts_0_3_7_7_classes_base_FGEquipment_dispenser & {
	mArmAnimation: 'AE_Generic2Hand',
};

type FGItemDescriptor = docs_json_ts_0_3_7_7_classes_base_FGDescriptor_sinkable;

type FGItemDescriptorNuclearFuel = docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel;

type FGJetPack = docs_json_ts_0_3_7_7_classes_base_FGEquipment & {
	mThrustPower: docs_json_ts_common_types_decimal_string,
	mVelocityZExtreme: docs_json_ts_common_types_decimal_string,
	mVelocityZExtremesDamper: docs_json_ts_common_types_decimal_string,
	mJumpBeforeThrustTime: docs_json_ts_common_types_decimal_string,
	mMaxFuel: docs_json_ts_common_types_decimal_string,
	mCurrentFuel: docs_json_ts_common_types_decimal_string,
	mFuelRegenRate: docs_json_ts_common_types_decimal_string,
	mFuelConsumeRate: docs_json_ts_common_types_decimal_string,
	mThrustCooldown: docs_json_ts_common_types_decimal_string,
	mFuelWorth: docs_json_ts_common_types_decimal_string,
	mPaidForFuel: docs_json_ts_common_types_decimal_string,
	mThrustAirControl: docs_json_ts_common_types_decimal_string,
	mDefaultAirControl: docs_json_ts_common_types_decimal_string,
	mRTPCInterval: docs_json_ts_common_types_decimal_string,
	mJumpTimeStamp: docs_json_ts_common_types_decimal_string,
	mIsThrusting: docs_json_ts_common_types_bool_string,
	mArmAnimation?: 'AE_None',
	mBackAnimation?: 'BE_Jetpack',
};

type FGJumpingStilts = docs_json_ts_0_3_7_7_classes_base_FGEquipment & {
	mSprintSpeedFactor: docs_json_ts_common_types_decimal_string,
	mJumpSpeedFactor: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'jumpingStilt_lSocket',
};

type FGNobeliskDetonator = docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectile_thrown & {
	mArmAnimation: 'AE_Nobelisk',
};

type FGObjectScanner = docs_json_ts_0_3_7_7_classes_base_FGEquipment_has_sound & {
	mScreenUpdateTimer: docs_json_ts_common_types_empty_object,
	mScanlineLerpT: docs_json_ts_common_types_decimal_string,
	mScreenUpdateTime: docs_json_ts_common_types_decimal_string,
	mNormalizedCloesnessToObject: docs_json_ts_common_types_decimal_string,
	mObjectIsWithinRange: docs_json_ts_common_types_bool_string,
	mBeepDelayMax: docs_json_ts_common_types_decimal_string,
	mBeepDelayMin: docs_json_ts_common_types_decimal_string,
	mDetectionRange: docs_json_ts_common_types_decimal_string,
	mUpdateClosestObjectTime: docs_json_ts_common_types_decimal_string,
	mObjectDetails: [
		{
			ScannableClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
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
			RequiredSchematic: `/Game/FactoryGame/Schematics/Research/${string}${'/'}${string}${'.'}${string}${'_C'}`,
		},
		...{
			ScannableClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
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
			RequiredSchematic: `/Game/FactoryGame/Schematics/Research/${string}${'/'}${string}${'.'}${string}${'_C'}`,
		}[],
	],
	mShouldBeepEvenIfNoObject: docs_json_ts_common_types_bool_string,
};

type FGParachute = docs_json_ts_0_3_7_7_classes_base_FGEquipment & {
	mTerminalVelocityZ: docs_json_ts_common_types_decimal_string,
	mIsDeployed: docs_json_ts_common_types_bool_string,
};

type FGPipeHyperStart = docs_json_ts_0_3_7_7_classes_base_FGBuildable_pole_with_length_and_power & {
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

type FGPoleDescriptor = docs_json_ts_0_3_7_7_classes_base_FGDescriptor_BuildMenu;

type FGPortableMinerDispenser = docs_json_ts_0_3_7_7_classes_base_FGPortableMinerDispenser & {
	mArmAnimation: 'AE_PortableMiner',
};

type FGRecipe = docs_json_ts_0_3_7_7_classes_base_FGRecipe;

type FGResourceDescriptor = docs_json_ts_0_3_7_7_classes_base_FGDescriptor_sinkable & {
	mDecalSize: docs_json_ts_common_types_decimal_string,
	mPingColor: docs_json_ts_common_types_RGBA,
	mCollectSpeedMultiplier: docs_json_ts_common_types_decimal_string,
	mManualMiningAudioName: 'Metal',
};

type FGSchematic = docs_json_ts_0_3_7_7_classes_base_FGSchematic & {
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

type FGSnowballWeapon = docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectile_thrown & {
	mArmAnimation: 'AE_Generic1Hand',
};

type FGSuitBase = docs_json_ts_0_3_7_7_classes_base_FGEquipment & {
	mImmunity: docs_json_ts_common_types_decimal_string,
	mIsWorking: docs_json_ts_common_types_bool_string,
	mHasNegatedDamage: docs_json_ts_common_types_bool_string,
	mDamageNegated: docs_json_ts_common_types_decimal_string,
	mFilterDuration: docs_json_ts_common_types_decimal_string,
	mCountdown: docs_json_ts_common_types_decimal_string,
	mDisableEffectTimer: docs_json_ts_common_types_decimal_string,
	mSuit1PMeshMaterials: [
		{
			SlotName: 'Body_Details' | 'Body_01' | 'Body_02' | 'Body_Hands' | 'Body_Backpack',
			Material: 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_Details.MI_Haz_Body_Details"\'' | 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_01.MI_Haz_Body_01"\'' | 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_02.MI_Haz_Body_02"\'' | 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_Hands.MI_Haz_Body_Hands"\'' | 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_Backpack.MI_Haz_Body_Backpack"\'',
		},
		...{
			SlotName: 'Body_Details' | 'Body_01' | 'Body_02' | 'Body_Hands' | 'Body_Backpack',
			Material: 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_Details.MI_Haz_Body_Details"\'' | 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_01.MI_Haz_Body_01"\'' | 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_02.MI_Haz_Body_02"\'' | 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_Hands.MI_Haz_Body_Hands"\'' | 'MaterialInstanceConstant\'"/Game/FactoryGame/Character/Player/Material/MI_Haz_Body_Backpack.MI_Haz_Body_Backpack"\'',
		}[],
	],
	mArmAnimation?: 'AE_None',
};

type FGVehicleDescriptor = docs_json_ts_0_3_7_7_classes_base_FGDescriptor_BuildMenu;

type FGWeaponInstantFire = docs_json_ts_0_3_7_7_classes_base_FGWeaponInstantFire;

type FGWeaponProjectileFire = docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectileFire;

export type {
	FGBuildable_base,
	FGBuildable_occupied,
	FGBuildable_powered_base,
	FGBuildable_tiered,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableConveyorBelt,
	FGBuildableConveyorLift,
	FGBuildableDockingStation,
	FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad,
	FGBuildableFactorySimpleProducer,
	FGBuildableFoundation,
	FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear,
	FGBuildableJumppad,
	FGBuildableLadder,
	FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildablePipeHyper,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport,
	FGBuildablePipeReservoir,
	FGBuildablePole,
	FGBuildablePowerPole,
	FGBuildableRadarTower,
	FGBuildableRailroadStation,
	FGBuildableRailroadTrack,
	FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil,
	FGBuildableResourceExtractor_water,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGBuildableSnowDispenser,
	FGBuildableSpaceElevator,
	FGBuildableSplitterSmart,
	FGBuildableStair,
	FGBuildableStorage,
	FGBuildableTradingPost,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty,
	FGBuildableWalkway,
	FGBuildableWall,
	FGBuildableWire,
	FGBuildingDescriptor,
	FGChainsaw,
	FGColorGun,
	FGConsumableDescriptor,
	FGConsumableEquipment,
	FGEquipmentStunSpear_xenobasher,
	FGEquipmentStunSpear_xenozapper,
	FGGasMask,
	FGGolfCartDispenser,
	FGItemDescriptor,
	FGItemDescriptorNuclearFuel,
	FGJetPack,
	FGJumpingStilts,
	FGNobeliskDetonator,
	FGObjectScanner,
	FGParachute,
	FGPipeHyperStart,
	FGPoleDescriptor,
	FGPortableMinerDispenser,
	FGRecipe,
	FGResourceDescriptor,
	FGSchematic,
	FGSnowballWeapon,
	FGSuitBase,
	FGVehicleDescriptor,
	FGWeaponInstantFire,
	FGWeaponProjectileFire,
};
