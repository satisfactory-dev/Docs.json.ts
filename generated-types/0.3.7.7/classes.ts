/* eslint-disable @stylistic/max-len */

import type {
	FGBuildable as docs_json_ts_0_3_7_7_classes_base_FGBuildable,
	FGBuildable_occupied as docs_json_ts_0_3_7_7_classes_base_FGBuildable_occupied,
	FGBuildable_powered as docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered,
	FGBuildable_spline as docs_json_ts_0_3_7_7_classes_base_FGBuildable_spline,
	FGBuildable_tiered as docs_json_ts_0_3_7_7_classes_base_FGBuildable_tiered,
	FGBuildable_with_height_and_elevation as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_elevation,
	FGBuildable_with_height_and_width as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_width,
	FGBuildable_with_size_and_elevation as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_size_and_elevation,
	FGBuildableAttachment_splitter as docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachment_splitter,
	FGBuildableAttachmentMerger as docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachmentMerger,
	FGBuildableConveyorBelt_spline as docs_json_ts_0_3_7_7_classes_base_FGBuildableConveyorBelt_spline,
	FGBuildableConveyorLift as docs_json_ts_0_3_7_7_classes_base_FGBuildableConveyorLift,
	FGBuildableDockingStation as docs_json_ts_0_3_7_7_classes_base_FGBuildableDockingStation,
	FGBuildableFactory_jump_pad as docs_json_ts_0_3_7_7_classes_base_FGBuildableFactory_jump_pad,
	FGBuildableFactorySimpleProducer as docs_json_ts_0_3_7_7_classes_base_FGBuildableFactorySimpleProducer,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_0_3_7_7_classes_base_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_0_3_7_7_classes_base_FGBuildableLadder,
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
	FGBuildableRadarTower as docs_json_ts_0_3_7_7_classes_base_FGBuildableRadarTower,
	FGBuildableRailroadStation as docs_json_ts_0_3_7_7_classes_base_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_0_3_7_7_classes_base_FGBuildableRailroadTrack,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_oil,
	FGBuildableResourceExtractor_water as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_water,
	FGBuildableResourceSink as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceSinkShop,
	FGBuildableSplitterSmart as docs_json_ts_0_3_7_7_classes_base_FGBuildableSplitterSmart,
	FGBuildableTradingPost as docs_json_ts_0_3_7_7_classes_base_FGBuildableTradingPost,
	FGBuildableTrainPlatform as docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatform,
	FGBuildableTrainPlatformCargo as docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatformCargo,
	FGBuildableWire as docs_json_ts_0_3_7_7_classes_base_FGBuildableWire,
	FGChainsaw as docs_json_ts_0_3_7_7_classes_base_FGChainsaw,
	FGColorGun as docs_json_ts_0_3_7_7_classes_base_FGColorGun,
	FGConsumableDescriptor as docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor,
	FGConsumableEquipment as docs_json_ts_0_3_7_7_classes_base_FGConsumableEquipment,
	FGDescriptor_BuildMenu as docs_json_ts_0_3_7_7_classes_base_FGDescriptor_BuildMenu,
	FGDescriptor_sinkable as docs_json_ts_0_3_7_7_classes_base_FGDescriptor_sinkable,
	FGEquipment as docs_json_ts_0_3_7_7_classes_base_FGEquipment,
	FGEquipment_has_sound as docs_json_ts_0_3_7_7_classes_base_FGEquipment_has_sound,
	FGEquipmentStunSpear_base as docs_json_ts_0_3_7_7_classes_base_FGEquipmentStunSpear_base,
	FGGasMask as docs_json_ts_0_3_7_7_classes_base_FGGasMask,
	FGGolfCartDispenser as docs_json_ts_0_3_7_7_classes_base_FGGolfCartDispenser,
	FGItemDescriptorNuclearFuel as docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel,
	FGJetPack as docs_json_ts_0_3_7_7_classes_base_FGJetPack,
	FGNobeliskDetonator as docs_json_ts_0_3_7_7_classes_base_FGNobeliskDetonator,
	FGParachute as docs_json_ts_0_3_7_7_classes_base_FGParachute,
	FGPipeHyperStart as docs_json_ts_0_3_7_7_classes_base_FGPipeHyperStart,
	FGPortableMinerDispenser as docs_json_ts_0_3_7_7_classes_base_FGPortableMinerDispenser,
	FGRecipe as docs_json_ts_0_3_7_7_classes_base_FGRecipe,
	FGSchematic as docs_json_ts_0_3_7_7_classes_base_FGSchematic,
	FGSnowballWeapon as docs_json_ts_0_3_7_7_classes_base_FGSnowballWeapon,
	FGWeaponInstantFire as docs_json_ts_0_3_7_7_classes_base_FGWeaponInstantFire,
	FGWeaponProjectileFire as docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectileFire,
} from './classes/Base.ts';

import type {
	BGRA as docs_json_ts_common_types_BGRA,
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
	empty_object as docs_json_ts_common_types_empty_object,
	integer_string as docs_json_ts_common_types_integer_string,
	RGBA as docs_json_ts_common_types_RGBA,
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

type FGBuildableAttachmentMerger = docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachmentMerger;

type FGBuildableAttachmentSplitter = docs_json_ts_0_3_7_7_classes_base_FGBuildableAttachment_splitter;

type FGBuildableConveyorBelt = docs_json_ts_0_3_7_7_classes_base_FGBuildableConveyorBelt_spline;

type FGBuildableConveyorLift = docs_json_ts_0_3_7_7_classes_base_FGBuildableConveyorLift;

type FGBuildableDockingStation = docs_json_ts_0_3_7_7_classes_base_FGBuildableDockingStation;

type FGBuildableFactory_jump_pad = docs_json_ts_0_3_7_7_classes_base_FGBuildableFactory_jump_pad;

type FGBuildableFactory_landing_pad = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	mDampeningFactor: docs_json_ts_common_types_decimal_string,
	mPlayerList: '',
};

type FGBuildableFactorySimpleProducer = docs_json_ts_0_3_7_7_classes_base_FGBuildableFactorySimpleProducer;

type FGBuildableFoundation = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_elevation;

type FGBuildableGeneratorFuel_biomass = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_biomass;

type FGBuildableGeneratorFuel_coal = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_coal;

type FGBuildableGeneratorFuel_fuel = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorFuel_fuel;

type FGBuildableGeneratorGeoThermal = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorGeoThermal;

type FGBuildableGeneratorNuclear = docs_json_ts_0_3_7_7_classes_base_FGBuildableGeneratorNuclear;

type FGBuildableJumppad = docs_json_ts_0_3_7_7_classes_base_FGBuildableJumppad;

type FGBuildableLadder = docs_json_ts_0_3_7_7_classes_base_FGBuildableLadder;

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

type FGBuildableRadarTower = docs_json_ts_0_3_7_7_classes_base_FGBuildableRadarTower;

type FGBuildableRailroadStation = docs_json_ts_0_3_7_7_classes_base_FGBuildableRailroadStation;

type FGBuildableRailroadTrack = docs_json_ts_0_3_7_7_classes_base_FGBuildableRailroadTrack;

type FGBuildableResourceExtractor_miner_mk1 = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk1;

type FGBuildableResourceExtractor_miner_mk2 = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk2;

type FGBuildableResourceExtractor_miner_mk3 = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_miner_mk3;

type FGBuildableResourceExtractor_oil = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_oil;

type FGBuildableResourceExtractor_water = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_water;

type FGBuildableResourceSink = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceSink;

type FGBuildableResourceSinkShop = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceSinkShop;

type FGBuildableSnowDispenser = docs_json_ts_0_3_7_7_classes_base_FGBuildable;

type FGBuildableSpaceElevator = docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered & {
	mMapText: 'Space Elevator',
};

type FGBuildableSplitterSmart = docs_json_ts_0_3_7_7_classes_base_FGBuildableSplitterSmart;

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

type FGBuildableTrainPlatformCargo = docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatformCargo;

type FGBuildableTrainPlatformEmpty = docs_json_ts_0_3_7_7_classes_base_FGBuildableTrainPlatform;

type FGBuildableWalkway = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_size_and_elevation;

type FGBuildableWall = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_and_width;

type FGBuildableWire = docs_json_ts_0_3_7_7_classes_base_FGBuildableWire;

type FGBuildingDescriptor = docs_json_ts_0_3_7_7_classes_base_FGDescriptor_BuildMenu;

type FGChainsaw = docs_json_ts_0_3_7_7_classes_base_FGChainsaw;

type FGColorGun = docs_json_ts_0_3_7_7_classes_base_FGColorGun;

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

type FGGasMask = docs_json_ts_0_3_7_7_classes_base_FGGasMask;

type FGGolfCartDispenser = docs_json_ts_0_3_7_7_classes_base_FGGolfCartDispenser;

type FGItemDescriptor = docs_json_ts_0_3_7_7_classes_base_FGDescriptor_sinkable;

type FGItemDescriptorNuclearFuel = docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel;

type FGJetPack = docs_json_ts_0_3_7_7_classes_base_FGJetPack;

type FGJumpingStilts = docs_json_ts_0_3_7_7_classes_base_FGEquipment & {
	mSprintSpeedFactor: docs_json_ts_common_types_decimal_string,
	mJumpSpeedFactor: docs_json_ts_common_types_decimal_string,
	mAttachSocket: 'jumpingStilt_lSocket',
};

type FGNobeliskDetonator = docs_json_ts_0_3_7_7_classes_base_FGNobeliskDetonator;

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

type FGParachute = docs_json_ts_0_3_7_7_classes_base_FGParachute;

type FGPipeHyperStart = docs_json_ts_0_3_7_7_classes_base_FGPipeHyperStart;

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

type FGSnowballWeapon = docs_json_ts_0_3_7_7_classes_base_FGSnowballWeapon;

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
