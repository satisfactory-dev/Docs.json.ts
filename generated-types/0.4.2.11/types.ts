/* eslint-disable @stylistic/max-len */

import type {
	FGChainsaw as docs_json_ts_0_3_7_7_FGChainsaw,
	FGEquipmentStunSpear as docs_json_ts_0_3_7_7_FGEquipmentStunSpear,
	FGGasMask as docs_json_ts_0_3_7_7_FGGasMask,
	FGGolfCartDispenser as docs_json_ts_0_3_7_7_FGGolfCartDispenser,
	FGJetPack as docs_json_ts_0_3_7_7_FGJetPack,
	FGJumpingStilts as docs_json_ts_0_3_7_7_FGJumpingStilts,
	FGObjectScanner as docs_json_ts_0_3_7_7_FGObjectScanner,
	FGSuitBase as docs_json_ts_0_3_7_7_FGSuitBase,
} from './../0.3.7.7/types.ts';

import type {
	FGBuildable_base as docs_json_ts_0_4_2_11_classes_FGBuildable_base,
	FGBuildable_occupied as docs_json_ts_0_4_2_11_classes_FGBuildable_occupied,
	FGBuildable_powered_base as docs_json_ts_0_4_2_11_classes_FGBuildable_powered_base,
	FGBuildable_tiered as docs_json_ts_0_4_2_11_classes_FGBuildable_tiered,
	FGBuildableAttachmentMerger as docs_json_ts_0_4_2_11_classes_FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter as docs_json_ts_0_4_2_11_classes_FGBuildableAttachmentSplitter,
	FGBuildableCircuitSwitch as docs_json_ts_0_4_2_11_classes_FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt as docs_json_ts_0_4_2_11_classes_FGBuildableConveyorBelt,
	FGBuildableConveyorLift as docs_json_ts_0_4_2_11_classes_FGBuildableConveyorLift,
	FGBuildableDockingStation as docs_json_ts_0_4_2_11_classes_FGBuildableDockingStation,
	FGBuildableDroneStation as docs_json_ts_0_4_2_11_classes_FGBuildableDroneStation,
	FGBuildableFactory_jump_pad as docs_json_ts_0_4_2_11_classes_FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad as docs_json_ts_0_4_2_11_classes_FGBuildableFactory_landing_pad,
	FGBuildableFactorySimpleProducer as docs_json_ts_0_4_2_11_classes_FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight as docs_json_ts_0_4_2_11_classes_FGBuildableFloodlight,
	FGBuildableFoundation as docs_json_ts_0_4_2_11_classes_FGBuildableFoundation,
	FGBuildableFrackingActivator as docs_json_ts_0_4_2_11_classes_FGBuildableFrackingActivator,
	FGBuildableFrackingExtractor as docs_json_ts_0_4_2_11_classes_FGBuildableFrackingExtractor,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_0_4_2_11_classes_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_0_4_2_11_classes_FGBuildableLadder,
	FGBuildableLightsControlPanel as docs_json_ts_0_4_2_11_classes_FGBuildableLightsControlPanel,
	FGBuildableLightSource as docs_json_ts_0_4_2_11_classes_FGBuildableLightSource,
	FGBuildableMAM as docs_json_ts_0_4_2_11_classes_FGBuildableMAM,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Blender_C as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_Blender_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildableManufacturerVariablePower as docs_json_ts_0_4_2_11_classes_FGBuildableManufacturerVariablePower,
	FGBuildablePipeHyper as docs_json_ts_0_4_2_11_classes_FGBuildablePipeHyper,
	FGBuildablePipeline as docs_json_ts_0_4_2_11_classes_FGBuildablePipeline,
	FGBuildablePipelineJunction as docs_json_ts_0_4_2_11_classes_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_0_4_2_11_classes_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_0_4_2_11_classes_FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport as docs_json_ts_0_4_2_11_classes_FGBuildablePipelineSupport,
	FGBuildablePipeReservoir as docs_json_ts_0_4_2_11_classes_FGBuildablePipeReservoir,
	FGBuildablePole as docs_json_ts_0_4_2_11_classes_FGBuildablePole,
	FGBuildablePowerPole as docs_json_ts_0_4_2_11_classes_FGBuildablePowerPole,
	FGBuildablePowerStorage as docs_json_ts_0_4_2_11_classes_FGBuildablePowerStorage,
	FGBuildableRadarTower as docs_json_ts_0_4_2_11_classes_FGBuildableRadarTower,
	FGBuildableRailroadStation as docs_json_ts_0_4_2_11_classes_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_0_4_2_11_classes_FGBuildableRailroadTrack,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_0_4_2_11_classes_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_0_4_2_11_classes_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_0_4_2_11_classes_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_0_4_2_11_classes_FGBuildableResourceExtractor_oil,
	FGBuildableResourceSink as docs_json_ts_0_4_2_11_classes_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_0_4_2_11_classes_FGBuildableResourceSinkShop,
	FGBuildableSnowDispenser as docs_json_ts_0_4_2_11_classes_FGBuildableSnowDispenser,
	FGBuildableSpaceElevator as docs_json_ts_0_4_2_11_classes_FGBuildableSpaceElevator,
	FGBuildableSplitterSmart as docs_json_ts_0_4_2_11_classes_FGBuildableSplitterSmart,
	FGBuildableStair as docs_json_ts_0_4_2_11_classes_FGBuildableStair,
	FGBuildableStorage as docs_json_ts_0_4_2_11_classes_FGBuildableStorage,
	FGBuildableTradingPost as docs_json_ts_0_4_2_11_classes_FGBuildableTradingPost,
	FGBuildableTrainPlatformCargo as docs_json_ts_0_4_2_11_classes_FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty as docs_json_ts_0_4_2_11_classes_FGBuildableTrainPlatformEmpty,
	FGBuildableWalkway as docs_json_ts_0_4_2_11_classes_FGBuildableWalkway,
	FGBuildableWall as docs_json_ts_0_4_2_11_classes_FGBuildableWall,
	FGBuildableWaterPump as docs_json_ts_0_4_2_11_classes_FGBuildableWaterPump,
	FGBuildableWire as docs_json_ts_0_4_2_11_classes_FGBuildableWire,
	FGBuildingDescriptor as docs_json_ts_0_4_2_11_classes_FGBuildingDescriptor,
	FGColorGun as docs_json_ts_0_4_2_11_classes_FGColorGun,
	FGConsumableDescriptor as docs_json_ts_0_4_2_11_classes_FGConsumableDescriptor,
	FGConsumableEquipment as docs_json_ts_0_4_2_11_classes_FGConsumableEquipment,
	FGEquipmentZipline as docs_json_ts_0_4_2_11_classes_FGEquipmentZipline,
	FGHoverPack as docs_json_ts_0_4_2_11_classes_FGHoverPack,
	FGItemDescriptor as docs_json_ts_0_4_2_11_classes_FGItemDescriptor,
	FGItemDescriptorNuclearFuel as docs_json_ts_0_4_2_11_classes_FGItemDescriptorNuclearFuel,
	FGNobeliskDetonator as docs_json_ts_0_4_2_11_classes_FGNobeliskDetonator,
	FGParachute as docs_json_ts_0_4_2_11_classes_FGParachute,
	FGPipeHyperStart as docs_json_ts_0_4_2_11_classes_FGPipeHyperStart,
	FGPoleDescriptor as docs_json_ts_0_4_2_11_classes_FGPoleDescriptor,
	FGPortableMinerDispenser as docs_json_ts_0_4_2_11_classes_FGPortableMinerDispenser,
	FGRecipe as docs_json_ts_0_4_2_11_classes_FGRecipe,
	FGResourceDescriptor as docs_json_ts_0_4_2_11_classes_FGResourceDescriptor,
	FGSchematic as docs_json_ts_0_4_2_11_classes_FGSchematic,
	FGSnowballWeapon as docs_json_ts_0_4_2_11_classes_FGSnowballWeapon,
	FGVehicleDescriptor_Desc_CyberWagon_C as docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_CyberWagon_C,
	FGVehicleDescriptor_Desc_DroneTransport_C as docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_DroneTransport_C,
	FGVehicleDescriptor_Desc_Explorer_C as docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_Explorer_C,
	FGVehicleDescriptor_Desc_FreightWagon_C as docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_FreightWagon_C,
	FGVehicleDescriptor_Desc_Locomotive_C as docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_Locomotive_C,
	FGVehicleDescriptor_Desc_Tractor_C as docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_Tractor_C,
	FGVehicleDescriptor_Desc_Truck_C as docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_Truck_C,
	FGWeaponInstantFire as docs_json_ts_0_4_2_11_classes_FGWeaponInstantFire,
	FGWeaponProjectileFire as docs_json_ts_0_4_2_11_classes_FGWeaponProjectileFire,
} from './classes.ts';

type FGBuildable = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildable'}${'\''}`,
	Classes: [
		FGBuildable_Classes_item,
		...FGBuildable_Classes_item[],
	],
};

type FGBuildable_Classes_item = docs_json_ts_0_4_2_11_classes_FGBuildable_occupied | docs_json_ts_0_4_2_11_classes_FGBuildable_tiered | docs_json_ts_0_4_2_11_classes_FGBuildable_base;

type FGBuildableAttachmentMerger = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableAttachmentMerger'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableAttachmentMerger,
		...docs_json_ts_0_4_2_11_classes_FGBuildableAttachmentMerger[],
	],
};

type FGBuildableAttachmentSplitter = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableAttachmentSplitter'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableAttachmentSplitter,
		...docs_json_ts_0_4_2_11_classes_FGBuildableAttachmentSplitter[],
	],
};

type FGBuildableCircuitSwitch = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableCircuitSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableCircuitSwitch,
		...docs_json_ts_0_4_2_11_classes_FGBuildableCircuitSwitch[],
	],
};

type FGBuildableConveyorBelt = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableConveyorBelt'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableConveyorBelt,
		...docs_json_ts_0_4_2_11_classes_FGBuildableConveyorBelt[],
	],
};

type FGBuildableConveyorLift = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableConveyorLift'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableConveyorLift,
		...docs_json_ts_0_4_2_11_classes_FGBuildableConveyorLift[],
	],
};

type FGBuildableDockingStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDockingStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableDockingStation,
		...docs_json_ts_0_4_2_11_classes_FGBuildableDockingStation[],
	],
};

type FGBuildableDroneStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDroneStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableDroneStation,
		...docs_json_ts_0_4_2_11_classes_FGBuildableDroneStation[],
	],
};

type FGBuildableFactory = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactory'}${'\''}`,
	Classes: [
		FGBuildableFactory_Classes_item,
		...FGBuildableFactory_Classes_item[],
	],
};

type FGBuildableFactory_Classes_item = docs_json_ts_0_4_2_11_classes_FGBuildableFactory_jump_pad | docs_json_ts_0_4_2_11_classes_FGBuildableFactory_landing_pad | docs_json_ts_0_4_2_11_classes_FGBuildable_powered_base;

type FGBuildableFactorySimpleProducer = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactorySimpleProducer'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableFactorySimpleProducer,
		...docs_json_ts_0_4_2_11_classes_FGBuildableFactorySimpleProducer[],
	],
};

type FGBuildableFloodlight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFloodlight'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableFloodlight,
		...docs_json_ts_0_4_2_11_classes_FGBuildableFloodlight[],
	],
};

type FGBuildableFoundation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFoundation'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableFoundation,
		...docs_json_ts_0_4_2_11_classes_FGBuildableFoundation[],
	],
};

type FGBuildableFrackingActivator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFrackingActivator'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableFrackingActivator,
		...docs_json_ts_0_4_2_11_classes_FGBuildableFrackingActivator[],
	],
};

type FGBuildableFrackingExtractor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFrackingExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableFrackingExtractor,
		...docs_json_ts_0_4_2_11_classes_FGBuildableFrackingExtractor[],
	],
};

type FGBuildableGeneratorFuel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorFuel_biomass,
		docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorFuel_coal,
		docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorFuel_fuel,
	],
};

type FGBuildableGeneratorGeoThermal = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorGeoThermal'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorGeoThermal,
		...docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorGeoThermal[],
	],
};

type FGBuildableGeneratorNuclear = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorNuclear'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorNuclear,
		...docs_json_ts_0_4_2_11_classes_FGBuildableGeneratorNuclear[],
	],
};

type FGBuildableJumppad = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableJumppad'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableJumppad,
		...docs_json_ts_0_4_2_11_classes_FGBuildableJumppad[],
	],
};

type FGBuildableLadder = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLadder'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableLadder,
		...docs_json_ts_0_4_2_11_classes_FGBuildableLadder[],
	],
};

type FGBuildableLightsControlPanel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLightsControlPanel'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableLightsControlPanel,
		...docs_json_ts_0_4_2_11_classes_FGBuildableLightsControlPanel[],
	],
};

type FGBuildableLightSource = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLightSource'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableLightSource,
		...docs_json_ts_0_4_2_11_classes_FGBuildableLightSource[],
	],
};

type FGBuildableMAM = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableMAM'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableMAM,
		...docs_json_ts_0_4_2_11_classes_FGBuildableMAM[],
	],
};

type FGBuildableManufacturer = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableManufacturer'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_OilRefinery_C,
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_Packager_C,
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_Blender_C,
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	],
};

type FGBuildableManufacturerVariablePower = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableManufacturerVariablePower'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableManufacturerVariablePower,
		...docs_json_ts_0_4_2_11_classes_FGBuildableManufacturerVariablePower[],
	],
};

type FGBuildablePipeHyper = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePipeHyper,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePipeHyper[],
	],
};

type FGBuildablePipeline = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeline'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePipeline,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePipeline[],
	],
};

type FGBuildablePipelineJunction = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelineJunction'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePipelineJunction,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePipelineJunction[],
	],
};

type FGBuildablePipelinePump = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelinePump'}${'\''}`,
	Classes: [
		FGBuildablePipelinePump_Classes_item,
		...FGBuildablePipelinePump_Classes_item[],
	],
};

type FGBuildablePipelinePump_Classes_item = docs_json_ts_0_4_2_11_classes_FGBuildablePipelinePump_valve | docs_json_ts_0_4_2_11_classes_FGBuildablePipelinePump_pump;

type FGBuildablePipelineSupport = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelineSupport'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePipelineSupport,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePipelineSupport[],
	],
};

type FGBuildablePipeReservoir = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeReservoir'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePipeReservoir,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePipeReservoir[],
	],
};

type FGBuildablePole = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePole'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePole,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePole[],
	],
};

type FGBuildablePowerPole = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePowerPole'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePowerPole,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePowerPole[],
	],
};

type FGBuildablePowerStorage = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePowerStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePowerStorage,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePowerStorage[],
	],
};

type FGBuildableRadarTower = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRadarTower'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableRadarTower,
		...docs_json_ts_0_4_2_11_classes_FGBuildableRadarTower[],
	],
};

type FGBuildableRailroadStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableRailroadStation,
		...docs_json_ts_0_4_2_11_classes_FGBuildableRailroadStation[],
	],
};

type FGBuildableRailroadTrack = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadTrack'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableRailroadTrack,
		...docs_json_ts_0_4_2_11_classes_FGBuildableRailroadTrack[],
	],
};

type FGBuildableResourceExtractor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableResourceExtractor_miner_mk1,
		docs_json_ts_0_4_2_11_classes_FGBuildableResourceExtractor_oil,
		docs_json_ts_0_4_2_11_classes_FGBuildableResourceExtractor_miner_mk2,
		docs_json_ts_0_4_2_11_classes_FGBuildableResourceExtractor_miner_mk3,
	],
};

type FGBuildableResourceSink = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceSink'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableResourceSink,
		...docs_json_ts_0_4_2_11_classes_FGBuildableResourceSink[],
	],
};

type FGBuildableResourceSinkShop = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceSinkShop'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableResourceSinkShop,
		...docs_json_ts_0_4_2_11_classes_FGBuildableResourceSinkShop[],
	],
};

type FGBuildableSnowDispenser = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSnowDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableSnowDispenser,
		...docs_json_ts_0_4_2_11_classes_FGBuildableSnowDispenser[],
	],
};

type FGBuildableSpaceElevator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSpaceElevator'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableSpaceElevator,
		...docs_json_ts_0_4_2_11_classes_FGBuildableSpaceElevator[],
	],
};

type FGBuildableSplitterSmart = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSplitterSmart'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableSplitterSmart,
		...docs_json_ts_0_4_2_11_classes_FGBuildableSplitterSmart[],
	],
};

type FGBuildableStair = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableStair'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableStair,
		...docs_json_ts_0_4_2_11_classes_FGBuildableStair[],
	],
};

type FGBuildableStorage = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableStorage,
		...docs_json_ts_0_4_2_11_classes_FGBuildableStorage[],
	],
};

type FGBuildableTradingPost = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTradingPost'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableTradingPost,
		...docs_json_ts_0_4_2_11_classes_FGBuildableTradingPost[],
	],
};

type FGBuildableTrainPlatformCargo = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTrainPlatformCargo'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableTrainPlatformCargo,
		...docs_json_ts_0_4_2_11_classes_FGBuildableTrainPlatformCargo[],
	],
};

type FGBuildableTrainPlatformEmpty = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTrainPlatformEmpty'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableTrainPlatformEmpty,
		...docs_json_ts_0_4_2_11_classes_FGBuildableTrainPlatformEmpty[],
	],
};

type FGBuildableWalkway = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWalkway'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableWalkway,
		...docs_json_ts_0_4_2_11_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWall = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWall'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableWall,
		...docs_json_ts_0_4_2_11_classes_FGBuildableWall[],
	],
};

type FGBuildableWaterPump = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWaterPump'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableWaterPump,
		...docs_json_ts_0_4_2_11_classes_FGBuildableWaterPump[],
	],
};

type FGBuildableWire = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWire'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildableWire,
		...docs_json_ts_0_4_2_11_classes_FGBuildableWire[],
	],
};

type FGBuildingDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildingDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildingDescriptor,
		...docs_json_ts_0_4_2_11_classes_FGBuildingDescriptor[],
	],
};

type FGColorGun = {
	NativeClass: `Class'/Script/${'FactoryGame.FGColorGun'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGColorGun,
		...docs_json_ts_0_4_2_11_classes_FGColorGun[],
	],
};

type FGConsumableDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConsumableDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGConsumableDescriptor,
		...docs_json_ts_0_4_2_11_classes_FGConsumableDescriptor[],
	],
};

type FGConsumableEquipment = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConsumableEquipment'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGConsumableEquipment,
		...docs_json_ts_0_4_2_11_classes_FGConsumableEquipment[],
	],
};

type FGConveyorPoleStackable = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConveyorPoleStackable'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGBuildablePole,
		...docs_json_ts_0_4_2_11_classes_FGBuildablePole[],
	],
};

type FGEquipmentDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGEquipmentDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGItemDescriptor,
		...docs_json_ts_0_4_2_11_classes_FGItemDescriptor[],
	],
};

type FGEquipmentZipline = {
	NativeClass: `Class'/Script/${'FactoryGame.FGEquipmentZipline'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGEquipmentZipline,
		...docs_json_ts_0_4_2_11_classes_FGEquipmentZipline[],
	],
};

type FGHoverPack = {
	NativeClass: `Class'/Script/${'FactoryGame.FGHoverPack'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGHoverPack,
		...docs_json_ts_0_4_2_11_classes_FGHoverPack[],
	],
};

type FGItemDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGItemDescriptor,
		...docs_json_ts_0_4_2_11_classes_FGItemDescriptor[],
	],
};

type FGItemDescriptorBiomass = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptorBiomass'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGItemDescriptor,
		...docs_json_ts_0_4_2_11_classes_FGItemDescriptor[],
	],
};

type FGItemDescriptorNuclearFuel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptorNuclearFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGItemDescriptorNuclearFuel,
		...docs_json_ts_0_4_2_11_classes_FGItemDescriptorNuclearFuel[],
	],
};

type FGNobeliskDetonator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGNobeliskDetonator'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGNobeliskDetonator,
		...docs_json_ts_0_4_2_11_classes_FGNobeliskDetonator[],
	],
};

type FGParachute = {
	NativeClass: `Class'/Script/${'FactoryGame.FGParachute'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGParachute,
		...docs_json_ts_0_4_2_11_classes_FGParachute[],
	],
};

type FGPipeHyperStart = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPipeHyperStart'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGPipeHyperStart,
		...docs_json_ts_0_4_2_11_classes_FGPipeHyperStart[],
	],
};

type FGPoleDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPoleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGPoleDescriptor,
		...docs_json_ts_0_4_2_11_classes_FGPoleDescriptor[],
	],
};

type FGPortableMinerDispenser = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPortableMinerDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGPortableMinerDispenser,
		...docs_json_ts_0_4_2_11_classes_FGPortableMinerDispenser[],
	],
};

type FGRecipe = {
	NativeClass: `Class'/Script/${'FactoryGame.FGRecipe'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGRecipe,
		...docs_json_ts_0_4_2_11_classes_FGRecipe[],
	],
};

type FGResourceDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGResourceDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGResourceDescriptor,
		...docs_json_ts_0_4_2_11_classes_FGResourceDescriptor[],
	],
};

type FGSchematic = {
	NativeClass: `Class'/Script/${'FactoryGame.FGSchematic'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGSchematic,
		...docs_json_ts_0_4_2_11_classes_FGSchematic[],
	],
};

type FGSnowballWeapon = {
	NativeClass: `Class'/Script/${'FactoryGame.FGSnowballWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGSnowballWeapon,
		...docs_json_ts_0_4_2_11_classes_FGSnowballWeapon[],
	],
};

type FGVehicleDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGVehicleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_Truck_C,
		docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_DroneTransport_C,
		docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_Tractor_C,
		docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_FreightWagon_C,
		docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_Locomotive_C,
		docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_Explorer_C,
		docs_json_ts_0_4_2_11_classes_FGVehicleDescriptor_Desc_CyberWagon_C,
	],
};

type FGWeaponInstantFire = {
	NativeClass: `Class'/Script/${'FactoryGame.FGWeaponInstantFire'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGWeaponInstantFire,
		...docs_json_ts_0_4_2_11_classes_FGWeaponInstantFire[],
	],
};

type FGWeaponProjectileFire = {
	NativeClass: `Class'/Script/${'FactoryGame.FGWeaponProjectileFire'}${'\''}`,
	Classes: [
		docs_json_ts_0_4_2_11_classes_FGWeaponProjectileFire,
		...docs_json_ts_0_4_2_11_classes_FGWeaponProjectileFire[],
	],
};

export type foo = [
	FGItemDescriptor,
	FGSchematic,
	FGConsumableEquipment,
	FGBuildableManufacturer,
	FGBuildablePole,
	FGPoleDescriptor,
	FGRecipe,
	FGBuildableConveyorBelt,
	FGBuildingDescriptor,
	FGBuildableWire,
	FGBuildablePowerPole,
	FGConsumableDescriptor,
	FGResourceDescriptor,
	FGBuildableTradingPost,
	FGItemDescriptorBiomass,
	docs_json_ts_0_3_7_7_FGChainsaw,
	FGEquipmentDescriptor,
	docs_json_ts_0_3_7_7_FGGolfCartDispenser,
	docs_json_ts_0_3_7_7_FGSuitBase,
	docs_json_ts_0_3_7_7_FGJetPack,
	docs_json_ts_0_3_7_7_FGJumpingStilts,
	FGWeaponProjectileFire,
	FGWeaponInstantFire,
	docs_json_ts_0_3_7_7_FGEquipmentStunSpear,
	FGBuildableSpaceElevator,
	docs_json_ts_0_3_7_7_FGGasMask,
	FGBuildableDroneStation,
	FGPortableMinerDispenser,
	FGBuildableResourceExtractor,
	FGBuildableStorage,
	FGBuildable,
	FGBuildableGeneratorFuel,
	FGBuildableMAM,
	FGBuildableWall,
	FGBuildableFactory,
	FGBuildableStair,
	FGBuildablePipelinePump,
	FGBuildablePipelineSupport,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipeReservoir,
	FGBuildableWaterPump,
	FGVehicleDescriptor,
	FGBuildableFrackingExtractor,
	FGBuildableFrackingActivator,
	FGBuildableManufacturerVariablePower,
	FGItemDescriptorNuclearFuel,
	FGBuildableGeneratorNuclear,
	FGBuildableConveyorLift,
	FGBuildableFoundation,
	FGBuildableSplitterSmart,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	docs_json_ts_0_3_7_7_FGObjectScanner,
	FGBuildableJumppad,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGConveyorPoleStackable,
	FGBuildableDockingStation,
	FGPipeHyperStart,
	FGBuildablePipeHyper,
	FGBuildablePowerStorage,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty,
	FGBuildableRailroadStation,
	FGBuildableRailroadTrack,
	FGHoverPack,
	FGEquipmentZipline,
	FGBuildableCircuitSwitch,
	FGBuildableGeneratorGeoThermal,
	FGColorGun,
	FGParachute,
	FGBuildableRadarTower,
	FGNobeliskDetonator,
	FGBuildableFactorySimpleProducer,
	FGBuildableSnowDispenser,
	FGSnowballWeapon,
	FGBuildableLightSource,
	FGBuildableLadder,
	FGBuildableWalkway,
	FGBuildableFloodlight,
	FGBuildableLightsControlPanel,
];

export type {
	FGBuildable,
	FGBuildable_Classes_item,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt,
	FGBuildableConveyorLift,
	FGBuildableDockingStation,
	FGBuildableDroneStation,
	FGBuildableFactory,
	FGBuildableFactory_Classes_item,
	FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight,
	FGBuildableFoundation,
	FGBuildableFrackingActivator,
	FGBuildableFrackingExtractor,
	FGBuildableGeneratorFuel,
	FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear,
	FGBuildableJumppad,
	FGBuildableLadder,
	FGBuildableLightsControlPanel,
	FGBuildableLightSource,
	FGBuildableMAM,
	FGBuildableManufacturer,
	FGBuildableManufacturerVariablePower,
	FGBuildablePipeHyper,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipelinePump,
	FGBuildablePipelinePump_Classes_item,
	FGBuildablePipelineSupport,
	FGBuildablePipeReservoir,
	FGBuildablePole,
	FGBuildablePowerPole,
	FGBuildablePowerStorage,
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
	FGBuildableWaterPump,
	FGBuildableWire,
	FGBuildingDescriptor,
	FGColorGun,
	FGConsumableDescriptor,
	FGConsumableEquipment,
	FGConveyorPoleStackable,
	FGEquipmentDescriptor,
	FGEquipmentZipline,
	FGHoverPack,
	FGItemDescriptor,
	FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel,
	FGNobeliskDetonator,
	FGParachute,
	FGPipeHyperStart,
	FGPoleDescriptor,
	FGPortableMinerDispenser,
	FGRecipe,
	FGResourceDescriptor,
	FGSchematic,
	FGSnowballWeapon,
	FGVehicleDescriptor,
	FGWeaponInstantFire,
	FGWeaponProjectileFire,
};
