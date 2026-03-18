/* eslint-disable @stylistic/max-len */

import type {
	FGBuildable_occupied as docs_json_ts_0_3_7_7_classes_FGBuildable_occupied,
	FGBuildable_tiered as docs_json_ts_0_3_7_7_classes_FGBuildable_tiered,
	FGBuildable_unoccupied_and_untiered as docs_json_ts_0_3_7_7_classes_FGBuildable_unoccupied_and_untiered,
	FGBuildableAttachmentMerger as docs_json_ts_0_3_7_7_classes_FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter as docs_json_ts_0_3_7_7_classes_FGBuildableAttachmentSplitter,
	FGBuildableConveyorBelt as docs_json_ts_0_3_7_7_classes_FGBuildableConveyorBelt,
	FGBuildableConveyorLift as docs_json_ts_0_3_7_7_classes_FGBuildableConveyorLift,
	FGBuildableDockingStation as docs_json_ts_0_3_7_7_classes_FGBuildableDockingStation,
	FGBuildableFactory_jump_pad as docs_json_ts_0_3_7_7_classes_FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad as docs_json_ts_0_3_7_7_classes_FGBuildableFactory_landing_pad,
	FGBuildableFactory_not_a_pad as docs_json_ts_0_3_7_7_classes_FGBuildableFactory_not_a_pad,
	FGBuildableFactorySimpleProducer as docs_json_ts_0_3_7_7_classes_FGBuildableFactorySimpleProducer,
	FGBuildableFoundation as docs_json_ts_0_3_7_7_classes_FGBuildableFoundation,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_0_3_7_7_classes_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_0_3_7_7_classes_FGBuildableLadder,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildablePipeHyper as docs_json_ts_0_3_7_7_classes_FGBuildablePipeHyper,
	FGBuildablePipeline as docs_json_ts_0_3_7_7_classes_FGBuildablePipeline,
	FGBuildablePipelineJunction as docs_json_ts_0_3_7_7_classes_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_0_3_7_7_classes_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_0_3_7_7_classes_FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport as docs_json_ts_0_3_7_7_classes_FGBuildablePipelineSupport,
	FGBuildablePipeReservoir as docs_json_ts_0_3_7_7_classes_FGBuildablePipeReservoir,
	FGBuildablePole as docs_json_ts_0_3_7_7_classes_FGBuildablePole,
	FGBuildablePowerPole as docs_json_ts_0_3_7_7_classes_FGBuildablePowerPole,
	FGBuildableRadarTower as docs_json_ts_0_3_7_7_classes_FGBuildableRadarTower,
	FGBuildableRailroadStation as docs_json_ts_0_3_7_7_classes_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_0_3_7_7_classes_FGBuildableRailroadTrack,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_oil,
	FGBuildableResourceExtractor_water as docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_water,
	FGBuildableResourceSink as docs_json_ts_0_3_7_7_classes_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_0_3_7_7_classes_FGBuildableResourceSinkShop,
	FGBuildableSnowDispenser as docs_json_ts_0_3_7_7_classes_FGBuildableSnowDispenser,
	FGBuildableSpaceElevator as docs_json_ts_0_3_7_7_classes_FGBuildableSpaceElevator,
	FGBuildableSplitterSmart as docs_json_ts_0_3_7_7_classes_FGBuildableSplitterSmart,
	FGBuildableStair as docs_json_ts_0_3_7_7_classes_FGBuildableStair,
	FGBuildableStorage as docs_json_ts_0_3_7_7_classes_FGBuildableStorage,
	FGBuildableTradingPost as docs_json_ts_0_3_7_7_classes_FGBuildableTradingPost,
	FGBuildableTrainPlatformCargo as docs_json_ts_0_3_7_7_classes_FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty as docs_json_ts_0_3_7_7_classes_FGBuildableTrainPlatformEmpty,
	FGBuildableWalkway as docs_json_ts_0_3_7_7_classes_FGBuildableWalkway,
	FGBuildableWall as docs_json_ts_0_3_7_7_classes_FGBuildableWall,
	FGBuildableWire as docs_json_ts_0_3_7_7_classes_FGBuildableWire,
	FGBuildingDescriptor as docs_json_ts_0_3_7_7_classes_FGBuildingDescriptor,
	FGChainsaw as docs_json_ts_0_3_7_7_classes_FGChainsaw,
	FGColorGun as docs_json_ts_0_3_7_7_classes_FGColorGun,
	FGConsumableDescriptor as docs_json_ts_0_3_7_7_classes_FGConsumableDescriptor,
	FGConsumableEquipment as docs_json_ts_0_3_7_7_classes_FGConsumableEquipment,
	FGConveyorPoleStackable as docs_json_ts_0_3_7_7_classes_FGConveyorPoleStackable,
	FGEquipmentDescriptor as docs_json_ts_0_3_7_7_classes_FGEquipmentDescriptor,
	FGEquipmentStunSpear_xenobasher as docs_json_ts_0_3_7_7_classes_FGEquipmentStunSpear_xenobasher,
	FGEquipmentStunSpear_xenozapper as docs_json_ts_0_3_7_7_classes_FGEquipmentStunSpear_xenozapper,
	FGGasMask as docs_json_ts_0_3_7_7_classes_FGGasMask,
	FGGolfCartDispenser as docs_json_ts_0_3_7_7_classes_FGGolfCartDispenser,
	FGItemDescriptor as docs_json_ts_0_3_7_7_classes_FGItemDescriptor,
	FGItemDescriptorBiomass as docs_json_ts_0_3_7_7_classes_FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel as docs_json_ts_0_3_7_7_classes_FGItemDescriptorNuclearFuel,
	FGJetPack as docs_json_ts_0_3_7_7_classes_FGJetPack,
	FGJumpingStilts as docs_json_ts_0_3_7_7_classes_FGJumpingStilts,
	FGNobeliskDetonator as docs_json_ts_0_3_7_7_classes_FGNobeliskDetonator,
	FGObjectScanner as docs_json_ts_0_3_7_7_classes_FGObjectScanner,
	FGParachute as docs_json_ts_0_3_7_7_classes_FGParachute,
	FGPipeHyperStart as docs_json_ts_0_3_7_7_classes_FGPipeHyperStart,
	FGPoleDescriptor as docs_json_ts_0_3_7_7_classes_FGPoleDescriptor,
	FGPortableMinerDispenser as docs_json_ts_0_3_7_7_classes_FGPortableMinerDispenser,
	FGRecipe as docs_json_ts_0_3_7_7_classes_FGRecipe,
	FGResourceDescriptor as docs_json_ts_0_3_7_7_classes_FGResourceDescriptor,
	FGSchematic as docs_json_ts_0_3_7_7_classes_FGSchematic,
	FGSnowballWeapon as docs_json_ts_0_3_7_7_classes_FGSnowballWeapon,
	FGSuitBase as docs_json_ts_0_3_7_7_classes_FGSuitBase,
	FGVehicleDescriptor as docs_json_ts_0_3_7_7_classes_FGVehicleDescriptor,
	FGWeapon_Equip_RebarGun_Projectile_C as docs_json_ts_0_3_7_7_classes_FGWeapon_Equip_RebarGun_Projectile_C,
	FGWeapon_Equip_Rifle_C as docs_json_ts_0_3_7_7_classes_FGWeapon_Equip_Rifle_C,
} from './classes.ts';

type FGBuildable = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildable'}${'\''}`,
	Classes: [
		FGBuildable_Classes_item,
		...FGBuildable_Classes_item[],
	],
};

type FGBuildable_Classes_item = docs_json_ts_0_3_7_7_classes_FGBuildable_occupied | docs_json_ts_0_3_7_7_classes_FGBuildable_tiered | docs_json_ts_0_3_7_7_classes_FGBuildable_unoccupied_and_untiered;

type FGBuildableAttachmentMerger = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableAttachmentMerger'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableAttachmentMerger,
		...docs_json_ts_0_3_7_7_classes_FGBuildableAttachmentMerger[],
	],
};

type FGBuildableAttachmentSplitter = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableAttachmentSplitter'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableAttachmentSplitter,
		...docs_json_ts_0_3_7_7_classes_FGBuildableAttachmentSplitter[],
	],
};

type FGBuildableConveyorBelt = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableConveyorBelt'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableConveyorBelt,
		...docs_json_ts_0_3_7_7_classes_FGBuildableConveyorBelt[],
	],
};

type FGBuildableConveyorLift = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableConveyorLift'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableConveyorLift,
		...docs_json_ts_0_3_7_7_classes_FGBuildableConveyorLift[],
	],
};

type FGBuildableDockingStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDockingStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableDockingStation,
		...docs_json_ts_0_3_7_7_classes_FGBuildableDockingStation[],
	],
};

type FGBuildableFactory = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactory'}${'\''}`,
	Classes: [
		FGBuildableFactory_Classes_item,
		...FGBuildableFactory_Classes_item[],
	],
};

type FGBuildableFactory_Classes_item = docs_json_ts_0_3_7_7_classes_FGBuildableFactory_jump_pad | docs_json_ts_0_3_7_7_classes_FGBuildableFactory_landing_pad | docs_json_ts_0_3_7_7_classes_FGBuildableFactory_not_a_pad;

type FGBuildableFactorySimpleProducer = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactorySimpleProducer'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableFactorySimpleProducer,
		...docs_json_ts_0_3_7_7_classes_FGBuildableFactorySimpleProducer[],
	],
};

type FGBuildableFoundation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFoundation'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableFoundation,
		...docs_json_ts_0_3_7_7_classes_FGBuildableFoundation[],
	],
};

type FGBuildableGeneratorFuel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorFuel_fuel,
		docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorFuel_biomass,
		docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorFuel_coal,
	],
};

type FGBuildableGeneratorGeoThermal = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorGeoThermal'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorGeoThermal,
		...docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorGeoThermal[],
	],
};

type FGBuildableGeneratorNuclear = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorNuclear'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorNuclear,
		...docs_json_ts_0_3_7_7_classes_FGBuildableGeneratorNuclear[],
	],
};

type FGBuildableJumppad = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableJumppad'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableJumppad,
		...docs_json_ts_0_3_7_7_classes_FGBuildableJumppad[],
	],
};

type FGBuildableLadder = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLadder'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableLadder,
		...docs_json_ts_0_3_7_7_classes_FGBuildableLadder[],
	],
};

type FGBuildableManufacturer = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableManufacturer'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
		docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
		docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
		docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_OilRefinery_C,
		docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
		docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_Packager_C,
		docs_json_ts_0_3_7_7_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	],
};

type FGBuildablePipeHyper = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildablePipeHyper,
		...docs_json_ts_0_3_7_7_classes_FGBuildablePipeHyper[],
	],
};

type FGBuildablePipeline = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeline'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildablePipeline,
		...docs_json_ts_0_3_7_7_classes_FGBuildablePipeline[],
	],
};

type FGBuildablePipelineJunction = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelineJunction'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildablePipelineJunction,
		...docs_json_ts_0_3_7_7_classes_FGBuildablePipelineJunction[],
	],
};

type FGBuildablePipelinePump = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelinePump'}${'\''}`,
	Classes: [
		FGBuildablePipelinePump_Classes_item,
		...FGBuildablePipelinePump_Classes_item[],
	],
};

type FGBuildablePipelinePump_Classes_item = docs_json_ts_0_3_7_7_classes_FGBuildablePipelinePump_valve | docs_json_ts_0_3_7_7_classes_FGBuildablePipelinePump_pump;

type FGBuildablePipelineSupport = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelineSupport'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildablePipelineSupport,
		...docs_json_ts_0_3_7_7_classes_FGBuildablePipelineSupport[],
	],
};

type FGBuildablePipeReservoir = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeReservoir'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildablePipeReservoir,
		...docs_json_ts_0_3_7_7_classes_FGBuildablePipeReservoir[],
	],
};

type FGBuildablePole = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePole'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildablePole,
		...docs_json_ts_0_3_7_7_classes_FGBuildablePole[],
	],
};

type FGBuildablePowerPole = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePowerPole'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildablePowerPole,
		...docs_json_ts_0_3_7_7_classes_FGBuildablePowerPole[],
	],
};

type FGBuildableRadarTower = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRadarTower'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableRadarTower,
		...docs_json_ts_0_3_7_7_classes_FGBuildableRadarTower[],
	],
};

type FGBuildableRailroadStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableRailroadStation,
		...docs_json_ts_0_3_7_7_classes_FGBuildableRailroadStation[],
	],
};

type FGBuildableRailroadTrack = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadTrack'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableRailroadTrack,
		...docs_json_ts_0_3_7_7_classes_FGBuildableRailroadTrack[],
	],
};

type FGBuildableResourceExtractor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_water,
		docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_miner_mk1,
		docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_oil,
		docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_miner_mk2,
		docs_json_ts_0_3_7_7_classes_FGBuildableResourceExtractor_miner_mk3,
	],
};

type FGBuildableResourceSink = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceSink'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableResourceSink,
		...docs_json_ts_0_3_7_7_classes_FGBuildableResourceSink[],
	],
};

type FGBuildableResourceSinkShop = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceSinkShop'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableResourceSinkShop,
		...docs_json_ts_0_3_7_7_classes_FGBuildableResourceSinkShop[],
	],
};

type FGBuildableSnowDispenser = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSnowDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableSnowDispenser,
		...docs_json_ts_0_3_7_7_classes_FGBuildableSnowDispenser[],
	],
};

type FGBuildableSpaceElevator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSpaceElevator'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableSpaceElevator,
		...docs_json_ts_0_3_7_7_classes_FGBuildableSpaceElevator[],
	],
};

type FGBuildableSplitterSmart = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSplitterSmart'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableSplitterSmart,
		...docs_json_ts_0_3_7_7_classes_FGBuildableSplitterSmart[],
	],
};

type FGBuildableStair = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableStair'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableStair,
		...docs_json_ts_0_3_7_7_classes_FGBuildableStair[],
	],
};

type FGBuildableStorage = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableStorage,
		...docs_json_ts_0_3_7_7_classes_FGBuildableStorage[],
	],
};

type FGBuildableTradingPost = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTradingPost'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableTradingPost,
		...docs_json_ts_0_3_7_7_classes_FGBuildableTradingPost[],
	],
};

type FGBuildableTrainPlatformCargo = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTrainPlatformCargo'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableTrainPlatformCargo,
		...docs_json_ts_0_3_7_7_classes_FGBuildableTrainPlatformCargo[],
	],
};

type FGBuildableTrainPlatformEmpty = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTrainPlatformEmpty'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableTrainPlatformEmpty,
		...docs_json_ts_0_3_7_7_classes_FGBuildableTrainPlatformEmpty[],
	],
};

type FGBuildableWalkway = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWalkway'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableWalkway,
		...docs_json_ts_0_3_7_7_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWall = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWall'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableWall,
		...docs_json_ts_0_3_7_7_classes_FGBuildableWall[],
	],
};

type FGBuildableWire = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWire'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildableWire,
		...docs_json_ts_0_3_7_7_classes_FGBuildableWire[],
	],
};

type FGBuildingDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildingDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGBuildingDescriptor,
		...docs_json_ts_0_3_7_7_classes_FGBuildingDescriptor[],
	],
};

type FGChainsaw = {
	NativeClass: `Class'/Script/${'FactoryGame.FGChainsaw'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGChainsaw,
		...docs_json_ts_0_3_7_7_classes_FGChainsaw[],
	],
};

type FGColorGun = {
	NativeClass: `Class'/Script/${'FactoryGame.FGColorGun'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGColorGun,
		...docs_json_ts_0_3_7_7_classes_FGColorGun[],
	],
};

type FGConsumableDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConsumableDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGConsumableDescriptor,
		...docs_json_ts_0_3_7_7_classes_FGConsumableDescriptor[],
	],
};

type FGConsumableEquipment = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConsumableEquipment'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGConsumableEquipment,
		...docs_json_ts_0_3_7_7_classes_FGConsumableEquipment[],
	],
};

type FGConveyorPoleStackable = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConveyorPoleStackable'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGConveyorPoleStackable,
		...docs_json_ts_0_3_7_7_classes_FGConveyorPoleStackable[],
	],
};

type FGEquipmentDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGEquipmentDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGEquipmentDescriptor,
		...docs_json_ts_0_3_7_7_classes_FGEquipmentDescriptor[],
	],
};

type FGEquipmentStunSpear = {
	NativeClass: `Class'/Script/${'FactoryGame.FGEquipmentStunSpear'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGEquipmentStunSpear_xenozapper,
		docs_json_ts_0_3_7_7_classes_FGEquipmentStunSpear_xenobasher,
		docs_json_ts_0_3_7_7_classes_FGEquipmentStunSpear_xenobasher,
	],
};

type FGGasMask = {
	NativeClass: `Class'/Script/${'FactoryGame.FGGasMask'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGGasMask,
		...docs_json_ts_0_3_7_7_classes_FGGasMask[],
	],
};

type FGGolfCartDispenser = {
	NativeClass: `Class'/Script/${'FactoryGame.FGGolfCartDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGGolfCartDispenser,
		...docs_json_ts_0_3_7_7_classes_FGGolfCartDispenser[],
	],
};

type FGItemDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGItemDescriptor,
		...docs_json_ts_0_3_7_7_classes_FGItemDescriptor[],
	],
};

type FGItemDescriptorBiomass = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptorBiomass'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGItemDescriptorBiomass,
		...docs_json_ts_0_3_7_7_classes_FGItemDescriptorBiomass[],
	],
};

type FGItemDescriptorNuclearFuel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptorNuclearFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGItemDescriptorNuclearFuel,
		...docs_json_ts_0_3_7_7_classes_FGItemDescriptorNuclearFuel[],
	],
};

type FGJetPack = {
	NativeClass: `Class'/Script/${'FactoryGame.FGJetPack'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGJetPack,
		...docs_json_ts_0_3_7_7_classes_FGJetPack[],
	],
};

type FGJumpingStilts = {
	NativeClass: `Class'/Script/${'FactoryGame.FGJumpingStilts'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGJumpingStilts,
		...docs_json_ts_0_3_7_7_classes_FGJumpingStilts[],
	],
};

type FGNobeliskDetonator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGNobeliskDetonator'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGNobeliskDetonator,
		...docs_json_ts_0_3_7_7_classes_FGNobeliskDetonator[],
	],
};

type FGObjectScanner = {
	NativeClass: `Class'/Script/${'FactoryGame.FGObjectScanner'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGObjectScanner,
		...docs_json_ts_0_3_7_7_classes_FGObjectScanner[],
	],
};

type FGParachute = {
	NativeClass: `Class'/Script/${'FactoryGame.FGParachute'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGParachute,
		...docs_json_ts_0_3_7_7_classes_FGParachute[],
	],
};

type FGPipeHyperStart = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPipeHyperStart'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGPipeHyperStart,
		...docs_json_ts_0_3_7_7_classes_FGPipeHyperStart[],
	],
};

type FGPoleDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPoleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGPoleDescriptor,
		...docs_json_ts_0_3_7_7_classes_FGPoleDescriptor[],
	],
};

type FGPortableMinerDispenser = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPortableMinerDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGPortableMinerDispenser,
		...docs_json_ts_0_3_7_7_classes_FGPortableMinerDispenser[],
	],
};

type FGRecipe = {
	NativeClass: `Class'/Script/${'FactoryGame.FGRecipe'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGRecipe,
		...docs_json_ts_0_3_7_7_classes_FGRecipe[],
	],
};

type FGResourceDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGResourceDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGResourceDescriptor,
		...docs_json_ts_0_3_7_7_classes_FGResourceDescriptor[],
	],
};

type FGSchematic = {
	NativeClass: `Class'/Script/${'FactoryGame.FGSchematic'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGSchematic,
		...docs_json_ts_0_3_7_7_classes_FGSchematic[],
	],
};

type FGSnowballWeapon = {
	NativeClass: `Class'/Script/${'FactoryGame.FGSnowballWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGSnowballWeapon,
		...docs_json_ts_0_3_7_7_classes_FGSnowballWeapon[],
	],
};

type FGSuitBase = {
	NativeClass: `Class'/Script/${'FactoryGame.FGSuitBase'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGSuitBase,
		...docs_json_ts_0_3_7_7_classes_FGSuitBase[],
	],
};

type FGVehicleDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGVehicleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGVehicleDescriptor,
		...docs_json_ts_0_3_7_7_classes_FGVehicleDescriptor[],
	],
};

type FGWeaponInstantFire = {
	NativeClass: `Class'/Script/${'FactoryGame.FGWeaponInstantFire'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGWeapon_Equip_Rifle_C,
		...docs_json_ts_0_3_7_7_classes_FGWeapon_Equip_Rifle_C[],
	],
};

type FGWeaponProjectileFire = {
	NativeClass: `Class'/Script/${'FactoryGame.FGWeaponProjectileFire'}${'\''}`,
	Classes: [
		docs_json_ts_0_3_7_7_classes_FGWeapon_Equip_RebarGun_Projectile_C,
		...docs_json_ts_0_3_7_7_classes_FGWeapon_Equip_RebarGun_Projectile_C[],
	],
};

export type update3_docs = [
	FGItemDescriptor,
	FGSchematic,
	FGBuildablePole,
	FGPoleDescriptor,
	FGRecipe,
	FGBuildableConveyorBelt,
	FGBuildingDescriptor,
	FGConsumableEquipment,
	FGItemDescriptorBiomass,
	FGChainsaw,
	FGEquipmentDescriptor,
	FGBuildableWire,
	FGBuildablePowerPole,
	FGConsumableDescriptor,
	FGResourceDescriptor,
	FGBuildableGeneratorFuel,
	FGBuildableTradingPost,
	FGGolfCartDispenser,
	FGSuitBase,
	FGJetPack,
	FGJumpingStilts,
	FGWeaponProjectileFire,
	FGWeaponInstantFire,
	FGEquipmentStunSpear,
	FGBuildableSpaceElevator,
	FGGasMask,
	FGBuildableManufacturer,
	FGPortableMinerDispenser,
	FGBuildableResourceExtractor,
	FGBuildableStorage,
	FGBuildable,
	FGBuildableWall,
	FGBuildableFactory,
	FGBuildableStair,
	FGBuildablePipelinePump,
	FGBuildablePipelineSupport,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipeReservoir,
	FGBuildableConveyorLift,
	FGVehicleDescriptor,
	FGBuildableGeneratorNuclear,
	FGItemDescriptorNuclearFuel,
	FGBuildableFoundation,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGObjectScanner,
	FGBuildableJumppad,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGConveyorPoleStackable,
	FGBuildableDockingStation,
	FGPipeHyperStart,
	FGBuildablePipeHyper,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty,
	FGBuildableRailroadStation,
	FGBuildableRailroadTrack,
	FGBuildableSplitterSmart,
	FGBuildableGeneratorGeoThermal,
	FGColorGun,
	FGParachute,
	FGBuildableRadarTower,
	FGNobeliskDetonator,
	FGBuildableFactorySimpleProducer,
	FGBuildableSnowDispenser,
	FGSnowballWeapon,
	FGBuildableLadder,
	FGBuildableWalkway,
];

export type {
	FGBuildable,
	FGBuildable_Classes_item,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableConveyorBelt,
	FGBuildableConveyorLift,
	FGBuildableDockingStation,
	FGBuildableFactory,
	FGBuildableFactory_Classes_item,
	FGBuildableFactorySimpleProducer,
	FGBuildableFoundation,
	FGBuildableGeneratorFuel,
	FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear,
	FGBuildableJumppad,
	FGBuildableLadder,
	FGBuildableManufacturer,
	FGBuildablePipeHyper,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipelinePump,
	FGBuildablePipelinePump_Classes_item,
	FGBuildablePipelineSupport,
	FGBuildablePipeReservoir,
	FGBuildablePole,
	FGBuildablePowerPole,
	FGBuildableRadarTower,
	FGBuildableRailroadStation,
	FGBuildableRailroadTrack,
	FGBuildableResourceExtractor,
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
	FGConveyorPoleStackable,
	FGEquipmentDescriptor,
	FGEquipmentStunSpear,
	FGGasMask,
	FGGolfCartDispenser,
	FGItemDescriptor,
	FGItemDescriptorBiomass,
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
