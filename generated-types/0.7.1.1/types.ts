/* eslint-disable @stylistic/max-len */

import type {
	FGAmmoTypeInstantHit as docs_json_ts_0_6_1_5_FGAmmoTypeInstantHit,
	FGAmmoTypeProjectile as docs_json_ts_0_6_1_5_FGAmmoTypeProjectile,
	FGAmmoTypeSpreadshot as docs_json_ts_0_6_1_5_FGAmmoTypeSpreadshot,
	FGBuildingDescriptor as docs_json_ts_0_6_1_5_FGBuildingDescriptor,
	FGChainsaw as docs_json_ts_0_6_1_5_FGChainsaw,
	FGChargedWeapon as docs_json_ts_0_6_1_5_FGChargedWeapon,
	FGConsumableDescriptor as docs_json_ts_0_6_1_5_FGConsumableDescriptor,
	FGConsumableEquipment as docs_json_ts_0_6_1_5_FGConsumableEquipment,
	FGEquipmentDescriptor as docs_json_ts_0_6_1_5_FGEquipmentDescriptor,
	FGEquipmentStunSpear as docs_json_ts_0_6_1_5_FGEquipmentStunSpear,
	FGEquipmentZipline as docs_json_ts_0_6_1_5_FGEquipmentZipline,
	FGGasMask as docs_json_ts_0_6_1_5_FGGasMask,
	FGGolfCartDispenser as docs_json_ts_0_6_1_5_FGGolfCartDispenser,
	FGHoverPack as docs_json_ts_0_6_1_5_FGHoverPack,
	FGItemDescriptor as docs_json_ts_0_6_1_5_FGItemDescriptor,
	FGItemDescriptorBiomass as docs_json_ts_0_6_1_5_FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel as docs_json_ts_0_6_1_5_FGItemDescriptorNuclearFuel,
	FGJumpingStilts as docs_json_ts_0_6_1_5_FGJumpingStilts,
	FGObjectScanner as docs_json_ts_0_6_1_5_FGObjectScanner,
	FGParachute as docs_json_ts_0_6_1_5_FGParachute,
	FGPoleDescriptor as docs_json_ts_0_6_1_5_FGPoleDescriptor,
	FGPortableMinerDispenser as docs_json_ts_0_6_1_5_FGPortableMinerDispenser,
	FGRecipe as docs_json_ts_0_6_1_5_FGRecipe,
	FGResourceDescriptor as docs_json_ts_0_6_1_5_FGResourceDescriptor,
	FGSchematic as docs_json_ts_0_6_1_5_FGSchematic,
	FGSuitBase as docs_json_ts_0_6_1_5_FGSuitBase,
	FGVehicleDescriptor as docs_json_ts_0_6_1_5_FGVehicleDescriptor,
	FGWeapon as docs_json_ts_0_6_1_5_FGWeapon,
} from './../0.6.1.5/types.ts';

import type {
	FGCustomizationRecipe as docs_json_ts_0_5_2_1_FGCustomizationRecipe,
} from './../0.5.2.1/types.ts';

import type {
	FGBuildable_base as docs_json_ts_0_7_1_1_classes_FGBuildable_base,
	FGBuildable_occupied as docs_json_ts_0_7_1_1_classes_FGBuildable_occupied,
	FGBuildable_powered as docs_json_ts_0_7_1_1_classes_FGBuildable_powered,
	FGBuildable_tiered as docs_json_ts_0_7_1_1_classes_FGBuildable_tiered,
	FGBuildableAttachmentMerger as docs_json_ts_0_7_1_1_classes_FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter as docs_json_ts_0_7_1_1_classes_FGBuildableAttachmentSplitter,
	FGBuildableBeamLightweight as docs_json_ts_0_7_1_1_classes_FGBuildableBeamLightweight,
	FGBuildableBlueprintDesigner as docs_json_ts_0_7_1_1_classes_FGBuildableBlueprintDesigner,
	FGBuildableCircuitSwitch as docs_json_ts_0_7_1_1_classes_FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt as docs_json_ts_0_7_1_1_classes_FGBuildableConveyorBelt,
	FGBuildableConveyorLift as docs_json_ts_0_7_1_1_classes_FGBuildableConveyorLift,
	FGBuildableCornerWall as docs_json_ts_0_7_1_1_classes_FGBuildableCornerWall,
	FGBuildableDockingStation as docs_json_ts_0_7_1_1_classes_FGBuildableDockingStation,
	FGBuildableDoor as docs_json_ts_0_7_1_1_classes_FGBuildableDoor,
	FGBuildableDroneStation as docs_json_ts_0_7_1_1_classes_FGBuildableDroneStation,
	FGBuildableFactory_jump_pad as docs_json_ts_0_7_1_1_classes_FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad as docs_json_ts_0_7_1_1_classes_FGBuildableFactory_landing_pad,
	FGBuildableFactoryBuilding as docs_json_ts_0_7_1_1_classes_FGBuildableFactoryBuilding,
	FGBuildableFactorySimpleProducer as docs_json_ts_0_7_1_1_classes_FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight as docs_json_ts_0_7_1_1_classes_FGBuildableFloodlight,
	FGBuildableFoundation as docs_json_ts_0_7_1_1_classes_FGBuildableFoundation,
	FGBuildableFoundationLightweight as docs_json_ts_0_7_1_1_classes_FGBuildableFoundationLightweight,
	FGBuildableFrackingActivator as docs_json_ts_0_7_1_1_classes_FGBuildableFrackingActivator,
	FGBuildableFrackingExtractor as docs_json_ts_0_7_1_1_classes_FGBuildableFrackingExtractor,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_0_7_1_1_classes_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_0_7_1_1_classes_FGBuildableLadder,
	FGBuildableLightsControlPanel as docs_json_ts_0_7_1_1_classes_FGBuildableLightsControlPanel,
	FGBuildableLightSource_Build_CeilingLight_C as docs_json_ts_0_7_1_1_classes_FGBuildableLightSource_Build_CeilingLight_C,
	FGBuildableLightSource_Build_StreetLight_C as docs_json_ts_0_7_1_1_classes_FGBuildableLightSource_Build_StreetLight_C,
	FGBuildableMAM as docs_json_ts_0_7_1_1_classes_FGBuildableMAM,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Blender_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_Blender_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_HadronCollider_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_HadronCollider_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildablePassthrough as docs_json_ts_0_7_1_1_classes_FGBuildablePassthrough,
	FGBuildablePillarLightweight as docs_json_ts_0_7_1_1_classes_FGBuildablePillarLightweight,
	FGBuildablePipeHyper as docs_json_ts_0_7_1_1_classes_FGBuildablePipeHyper,
	FGBuildablePipeline as docs_json_ts_0_7_1_1_classes_FGBuildablePipeline,
	FGBuildablePipelineJunction as docs_json_ts_0_7_1_1_classes_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_0_7_1_1_classes_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_0_7_1_1_classes_FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport as docs_json_ts_0_7_1_1_classes_FGBuildablePipelineSupport,
	FGBuildablePipeReservoir as docs_json_ts_0_7_1_1_classes_FGBuildablePipeReservoir,
	FGBuildablePole as docs_json_ts_0_7_1_1_classes_FGBuildablePole,
	FGBuildablePowerPole as docs_json_ts_0_7_1_1_classes_FGBuildablePowerPole,
	FGBuildablePowerStorage as docs_json_ts_0_7_1_1_classes_FGBuildablePowerStorage,
	FGBuildableRadarTower as docs_json_ts_0_7_1_1_classes_FGBuildableRadarTower,
	FGBuildableRailroadSignal_block as docs_json_ts_0_7_1_1_classes_FGBuildableRailroadSignal_block,
	FGBuildableRailroadSignal_path as docs_json_ts_0_7_1_1_classes_FGBuildableRailroadSignal_path,
	FGBuildableRailroadStation as docs_json_ts_0_7_1_1_classes_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_0_7_1_1_classes_FGBuildableRailroadTrack,
	FGBuildableRamp as docs_json_ts_0_7_1_1_classes_FGBuildableRamp,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_0_7_1_1_classes_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_0_7_1_1_classes_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_0_7_1_1_classes_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_0_7_1_1_classes_FGBuildableResourceExtractor_oil,
	FGBuildableResourceSink as docs_json_ts_0_7_1_1_classes_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_0_7_1_1_classes_FGBuildableResourceSinkShop,
	FGBuildableSnowDispenser as docs_json_ts_0_7_1_1_classes_FGBuildableSnowDispenser,
	FGBuildableSplitterSmart as docs_json_ts_0_7_1_1_classes_FGBuildableSplitterSmart,
	FGBuildableStair as docs_json_ts_0_7_1_1_classes_FGBuildableStair,
	FGBuildableStorage as docs_json_ts_0_7_1_1_classes_FGBuildableStorage,
	FGBuildableTradingPost as docs_json_ts_0_7_1_1_classes_FGBuildableTradingPost,
	FGBuildableTrainPlatformCargo as docs_json_ts_0_7_1_1_classes_FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty as docs_json_ts_0_7_1_1_classes_FGBuildableTrainPlatformEmpty,
	FGBuildableWalkway as docs_json_ts_0_7_1_1_classes_FGBuildableWalkway,
	FGBuildableWalkwayLightweight as docs_json_ts_0_7_1_1_classes_FGBuildableWalkwayLightweight,
	FGBuildableWall as docs_json_ts_0_7_1_1_classes_FGBuildableWall,
	FGBuildableWaterPump as docs_json_ts_0_7_1_1_classes_FGBuildableWaterPump,
	FGBuildableWidgetSign as docs_json_ts_0_7_1_1_classes_FGBuildableWidgetSign,
	FGBuildableWire as docs_json_ts_0_7_1_1_classes_FGBuildableWire,
	FGConveyorPoleStackable as docs_json_ts_0_7_1_1_classes_FGConveyorPoleStackable,
	FGJetPack as docs_json_ts_0_7_1_1_classes_FGJetPack,
	FGPipeHyperStart as docs_json_ts_0_7_1_1_classes_FGPipeHyperStart,
} from './classes.ts';

type FGBuildable = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildable'}${'\''}`,
	Classes: [
		FGBuildable_Classes_item,
		...FGBuildable_Classes_item[],
	],
};

type FGBuildable_Classes_item = docs_json_ts_0_7_1_1_classes_FGBuildable_occupied | docs_json_ts_0_7_1_1_classes_FGBuildable_tiered | docs_json_ts_0_7_1_1_classes_FGBuildable_base;

type FGBuildableAttachmentMerger = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableAttachmentMerger'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableAttachmentMerger,
		...docs_json_ts_0_7_1_1_classes_FGBuildableAttachmentMerger[],
	],
};

type FGBuildableAttachmentSplitter = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableAttachmentSplitter'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableAttachmentSplitter,
		...docs_json_ts_0_7_1_1_classes_FGBuildableAttachmentSplitter[],
	],
};

type FGBuildableBeamLightweight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableBeamLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableBeamLightweight,
		...docs_json_ts_0_7_1_1_classes_FGBuildableBeamLightweight[],
	],
};

type FGBuildableBlueprintDesigner = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableBlueprintDesigner'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableBlueprintDesigner,
		...docs_json_ts_0_7_1_1_classes_FGBuildableBlueprintDesigner[],
	],
};

type FGBuildableCircuitSwitch = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableCircuitSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableCircuitSwitch,
		...docs_json_ts_0_7_1_1_classes_FGBuildableCircuitSwitch[],
	],
};

type FGBuildableConveyorBelt = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableConveyorBelt'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableConveyorBelt,
		...docs_json_ts_0_7_1_1_classes_FGBuildableConveyorBelt[],
	],
};

type FGBuildableConveyorLift = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableConveyorLift'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableConveyorLift,
		...docs_json_ts_0_7_1_1_classes_FGBuildableConveyorLift[],
	],
};

type FGBuildableCornerWall = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableCornerWall'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableCornerWall,
		...docs_json_ts_0_7_1_1_classes_FGBuildableCornerWall[],
	],
};

type FGBuildableDockingStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDockingStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableDockingStation,
		...docs_json_ts_0_7_1_1_classes_FGBuildableDockingStation[],
	],
};

type FGBuildableDoor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDoor'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableDoor,
		...docs_json_ts_0_7_1_1_classes_FGBuildableDoor[],
	],
};

type FGBuildableDroneStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDroneStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableDroneStation,
		...docs_json_ts_0_7_1_1_classes_FGBuildableDroneStation[],
	],
};

type FGBuildableFactory = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactory'}${'\''}`,
	Classes: [
		FGBuildableFactory_Classes_item,
		...FGBuildableFactory_Classes_item[],
	],
};

type FGBuildableFactory_Classes_item = docs_json_ts_0_7_1_1_classes_FGBuildableFactory_jump_pad | docs_json_ts_0_7_1_1_classes_FGBuildableFactory_landing_pad | docs_json_ts_0_7_1_1_classes_FGBuildable_powered;

type FGBuildableFactoryBuilding = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactoryBuilding'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableFactoryBuilding,
		...docs_json_ts_0_7_1_1_classes_FGBuildableFactoryBuilding[],
	],
};

type FGBuildableFactorySimpleProducer = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactorySimpleProducer'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableFactorySimpleProducer,
		...docs_json_ts_0_7_1_1_classes_FGBuildableFactorySimpleProducer[],
	],
};

type FGBuildableFloodlight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFloodlight'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableFloodlight,
		...docs_json_ts_0_7_1_1_classes_FGBuildableFloodlight[],
	],
};

type FGBuildableFoundation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFoundation'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableFoundation,
		...docs_json_ts_0_7_1_1_classes_FGBuildableFoundation[],
	],
};

type FGBuildableFoundationLightweight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFoundationLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableFoundationLightweight,
		...docs_json_ts_0_7_1_1_classes_FGBuildableFoundationLightweight[],
	],
};

type FGBuildableFrackingActivator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFrackingActivator'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableFrackingActivator,
		...docs_json_ts_0_7_1_1_classes_FGBuildableFrackingActivator[],
	],
};

type FGBuildableFrackingExtractor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFrackingExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableFrackingExtractor,
		...docs_json_ts_0_7_1_1_classes_FGBuildableFrackingExtractor[],
	],
};

type FGBuildableGeneratorFuel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorFuel_biomass,
		docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorFuel_coal,
		docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorFuel_fuel,
	],
};

type FGBuildableGeneratorGeoThermal = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorGeoThermal'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorGeoThermal,
		...docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorGeoThermal[],
	],
};

type FGBuildableGeneratorNuclear = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorNuclear'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorNuclear,
		...docs_json_ts_0_7_1_1_classes_FGBuildableGeneratorNuclear[],
	],
};

type FGBuildableJumppad = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableJumppad'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableJumppad,
		...docs_json_ts_0_7_1_1_classes_FGBuildableJumppad[],
	],
};

type FGBuildableLadder = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLadder'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableLadder,
		...docs_json_ts_0_7_1_1_classes_FGBuildableLadder[],
	],
};

type FGBuildableLightsControlPanel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLightsControlPanel'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableLightsControlPanel,
		...docs_json_ts_0_7_1_1_classes_FGBuildableLightsControlPanel[],
	],
};

type FGBuildableLightSource = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLightSource'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableLightSource_Build_CeilingLight_C,
		docs_json_ts_0_7_1_1_classes_FGBuildableLightSource_Build_StreetLight_C,
	],
};

type FGBuildableMAM = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableMAM'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableMAM,
		...docs_json_ts_0_7_1_1_classes_FGBuildableMAM[],
	],
};

type FGBuildableManufacturer = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableManufacturer'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_OilRefinery_C,
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_Packager_C,
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_Blender_C,
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	],
};

type FGBuildableManufacturerVariablePower = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableManufacturerVariablePower'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_HadronCollider_C,
		...docs_json_ts_0_7_1_1_classes_FGBuildableManufacturer_Build_HadronCollider_C[],
	],
};

type FGBuildablePassthrough = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePassthrough'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePassthrough,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePassthrough[],
	],
};

type FGBuildablePillarLightweight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePillarLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePillarLightweight,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePillarLightweight[],
	],
};

type FGBuildablePipeHyper = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePipeHyper,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePipeHyper[],
	],
};

type FGBuildablePipeline = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeline'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePipeline,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePipeline[],
	],
};

type FGBuildablePipelineJunction = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelineJunction'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePipelineJunction,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePipelineJunction[],
	],
};

type FGBuildablePipelinePump = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelinePump'}${'\''}`,
	Classes: [
		FGBuildablePipelinePump_Classes_item,
		...FGBuildablePipelinePump_Classes_item[],
	],
};

type FGBuildablePipelinePump_Classes_item = docs_json_ts_0_7_1_1_classes_FGBuildablePipelinePump_valve | docs_json_ts_0_7_1_1_classes_FGBuildablePipelinePump_pump;

type FGBuildablePipelineSupport = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelineSupport'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePipelineSupport,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePipelineSupport[],
	],
};

type FGBuildablePipeReservoir = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeReservoir'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePipeReservoir,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePipeReservoir[],
	],
};

type FGBuildablePoleLightweight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePoleLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePole,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePole[],
	],
};

type FGBuildablePowerPole = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePowerPole'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePowerPole,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePowerPole[],
	],
};

type FGBuildablePowerStorage = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePowerStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildablePowerStorage,
		...docs_json_ts_0_7_1_1_classes_FGBuildablePowerStorage[],
	],
};

type FGBuildableRadarTower = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRadarTower'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableRadarTower,
		...docs_json_ts_0_7_1_1_classes_FGBuildableRadarTower[],
	],
};

type FGBuildableRailroadSignal = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadSignal'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableRailroadSignal_block,
		docs_json_ts_0_7_1_1_classes_FGBuildableRailroadSignal_path,
	],
};

type FGBuildableRailroadStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableRailroadStation,
		...docs_json_ts_0_7_1_1_classes_FGBuildableRailroadStation[],
	],
};

type FGBuildableRailroadTrack = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadTrack'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableRailroadTrack,
		...docs_json_ts_0_7_1_1_classes_FGBuildableRailroadTrack[],
	],
};

type FGBuildableRamp = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRamp'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableRamp,
		...docs_json_ts_0_7_1_1_classes_FGBuildableRamp[],
	],
};

type FGBuildableResourceExtractor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableResourceExtractor_miner_mk1,
		docs_json_ts_0_7_1_1_classes_FGBuildableResourceExtractor_miner_mk2,
		docs_json_ts_0_7_1_1_classes_FGBuildableResourceExtractor_miner_mk3,
		docs_json_ts_0_7_1_1_classes_FGBuildableResourceExtractor_oil,
	],
};

type FGBuildableResourceSink = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceSink'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableResourceSink,
		...docs_json_ts_0_7_1_1_classes_FGBuildableResourceSink[],
	],
};

type FGBuildableResourceSinkShop = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceSinkShop'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableResourceSinkShop,
		...docs_json_ts_0_7_1_1_classes_FGBuildableResourceSinkShop[],
	],
};

type FGBuildableSnowDispenser = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSnowDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableSnowDispenser,
		...docs_json_ts_0_7_1_1_classes_FGBuildableSnowDispenser[],
	],
};

type FGBuildableSpaceElevator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSpaceElevator'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildable_powered,
		...docs_json_ts_0_7_1_1_classes_FGBuildable_powered[],
	],
};

type FGBuildableSplitterSmart = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSplitterSmart'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableSplitterSmart,
		...docs_json_ts_0_7_1_1_classes_FGBuildableSplitterSmart[],
	],
};

type FGBuildableStair = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableStair'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableStair,
		...docs_json_ts_0_7_1_1_classes_FGBuildableStair[],
	],
};

type FGBuildableStorage = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableStorage,
		...docs_json_ts_0_7_1_1_classes_FGBuildableStorage[],
	],
};

type FGBuildableTradingPost = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTradingPost'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableTradingPost,
		...docs_json_ts_0_7_1_1_classes_FGBuildableTradingPost[],
	],
};

type FGBuildableTrainPlatformCargo = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTrainPlatformCargo'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableTrainPlatformCargo,
		...docs_json_ts_0_7_1_1_classes_FGBuildableTrainPlatformCargo[],
	],
};

type FGBuildableTrainPlatformEmpty = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTrainPlatformEmpty'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableTrainPlatformEmpty,
		...docs_json_ts_0_7_1_1_classes_FGBuildableTrainPlatformEmpty[],
	],
};

type FGBuildableWalkway = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWalkway'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableWalkway,
		...docs_json_ts_0_7_1_1_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWalkwayLightweight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWalkwayLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableWalkwayLightweight,
		...docs_json_ts_0_7_1_1_classes_FGBuildableWalkwayLightweight[],
	],
};

type FGBuildableWall = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWall'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableWall,
		...docs_json_ts_0_7_1_1_classes_FGBuildableWall[],
	],
};

type FGBuildableWallLightweight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWallLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableWall,
		...docs_json_ts_0_7_1_1_classes_FGBuildableWall[],
	],
};

type FGBuildableWaterPump = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWaterPump'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableWaterPump,
		...docs_json_ts_0_7_1_1_classes_FGBuildableWaterPump[],
	],
};

type FGBuildableWidgetSign = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWidgetSign'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableWidgetSign,
		...docs_json_ts_0_7_1_1_classes_FGBuildableWidgetSign[],
	],
};

type FGBuildableWire = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWire'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGBuildableWire,
		...docs_json_ts_0_7_1_1_classes_FGBuildableWire[],
	],
};

type FGConveyorPoleStackable = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConveyorPoleStackable'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGConveyorPoleStackable,
		...docs_json_ts_0_7_1_1_classes_FGConveyorPoleStackable[],
	],
};

type FGJetPack = {
	NativeClass: `Class'/Script/${'FactoryGame.FGJetPack'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGJetPack,
		...docs_json_ts_0_7_1_1_classes_FGJetPack[],
	],
};

type FGPipeHyperStart = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPipeHyperStart'}${'\''}`,
	Classes: [
		docs_json_ts_0_7_1_1_classes_FGPipeHyperStart,
		...docs_json_ts_0_7_1_1_classes_FGPipeHyperStart[],
	],
};

export type update7_docs = [
	docs_json_ts_0_6_1_5_FGItemDescriptor,
	FGBuildableDroneStation,
	docs_json_ts_0_6_1_5_FGConsumableEquipment,
	docs_json_ts_0_6_1_5_FGSchematic,
	docs_json_ts_0_6_1_5_FGConsumableDescriptor,
	docs_json_ts_0_6_1_5_FGItemDescriptorBiomass,
	docs_json_ts_0_6_1_5_FGResourceDescriptor,
	FGBuildableWallLightweight,
	FGBuildableWall,
	FGBuildableDoor,
	docs_json_ts_0_6_1_5_FGRecipe,
	docs_json_ts_0_5_2_1_FGCustomizationRecipe,
	docs_json_ts_0_6_1_5_FGBuildingDescriptor,
	FGBuildableCornerWall,
	FGBuildableRailroadTrack,
	FGBuildableBlueprintDesigner,
	FGBuildableFrackingExtractor,
	FGBuildableFrackingActivator,
	FGBuildableGeneratorGeoThermal,
	FGBuildableResourceExtractor,
	FGBuildableSpaceElevator,
	FGBuildableTradingPost,
	FGBuildable,
	FGBuildablePoleLightweight,
	docs_json_ts_0_6_1_5_FGPoleDescriptor,
	FGBuildableConveyorBelt,
	FGBuildableWire,
	FGBuildablePowerPole,
	docs_json_ts_0_6_1_5_FGChainsaw,
	docs_json_ts_0_6_1_5_FGEquipmentDescriptor,
	docs_json_ts_0_6_1_5_FGItemDescriptorNuclearFuel,
	docs_json_ts_0_6_1_5_FGGolfCartDispenser,
	docs_json_ts_0_6_1_5_FGSuitBase,
	FGJetPack,
	docs_json_ts_0_6_1_5_FGJumpingStilts,
	docs_json_ts_0_6_1_5_FGAmmoTypeProjectile,
	docs_json_ts_0_6_1_5_FGAmmoTypeSpreadshot,
	docs_json_ts_0_6_1_5_FGWeapon,
	docs_json_ts_0_6_1_5_FGAmmoTypeInstantHit,
	docs_json_ts_0_6_1_5_FGEquipmentStunSpear,
	docs_json_ts_0_6_1_5_FGChargedWeapon,
	docs_json_ts_0_6_1_5_FGGasMask,
	FGBuildableWaterPump,
	FGBuildableManufacturer,
	docs_json_ts_0_6_1_5_FGPortableMinerDispenser,
	FGBuildableStorage,
	FGBuildableGeneratorFuel,
	FGBuildableMAM,
	docs_json_ts_0_6_1_5_FGObjectScanner,
	FGBuildableBeamLightweight,
	FGBuildablePillarLightweight,
	FGBuildableFactory,
	FGBuildableWalkwayLightweight,
	FGBuildableWalkway,
	FGBuildablePipelinePump,
	FGBuildablePipelineSupport,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipeReservoir,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	docs_json_ts_0_6_1_5_FGVehicleDescriptor,
	FGBuildableManufacturerVariablePower,
	FGBuildableGeneratorNuclear,
	FGBuildableConveyorLift,
	FGBuildableFoundation,
	FGBuildableFoundationLightweight,
	FGBuildableRamp,
	FGBuildableSplitterSmart,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableJumppad,
	FGConveyorPoleStackable,
	FGBuildableDockingStation,
	FGPipeHyperStart,
	FGBuildablePipeHyper,
	FGBuildablePowerStorage,
	FGBuildableRailroadSignal,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty,
	FGBuildableRailroadStation,
	docs_json_ts_0_6_1_5_FGHoverPack,
	docs_json_ts_0_6_1_5_FGEquipmentZipline,
	FGBuildableCircuitSwitch,
	docs_json_ts_0_6_1_5_FGParachute,
	FGBuildableRadarTower,
	FGBuildableFactorySimpleProducer,
	FGBuildableSnowDispenser,
	FGBuildableFactoryBuilding,
	FGBuildableWidgetSign,
	FGBuildableLightSource,
	FGBuildableLadder,
	FGBuildableStair,
	FGBuildableFloodlight,
	FGBuildableLightsControlPanel,
	FGBuildablePassthrough,
];

export type {
	FGBuildable,
	FGBuildable_Classes_item,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableBeamLightweight,
	FGBuildableBlueprintDesigner,
	FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt,
	FGBuildableConveyorLift,
	FGBuildableCornerWall,
	FGBuildableDockingStation,
	FGBuildableDoor,
	FGBuildableDroneStation,
	FGBuildableFactory,
	FGBuildableFactory_Classes_item,
	FGBuildableFactoryBuilding,
	FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight,
	FGBuildableFoundation,
	FGBuildableFoundationLightweight,
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
	FGBuildablePassthrough,
	FGBuildablePillarLightweight,
	FGBuildablePipeHyper,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipelinePump,
	FGBuildablePipelinePump_Classes_item,
	FGBuildablePipelineSupport,
	FGBuildablePipeReservoir,
	FGBuildablePoleLightweight,
	FGBuildablePowerPole,
	FGBuildablePowerStorage,
	FGBuildableRadarTower,
	FGBuildableRailroadSignal,
	FGBuildableRailroadStation,
	FGBuildableRailroadTrack,
	FGBuildableRamp,
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
	FGBuildableWalkwayLightweight,
	FGBuildableWall,
	FGBuildableWallLightweight,
	FGBuildableWaterPump,
	FGBuildableWidgetSign,
	FGBuildableWire,
	FGConveyorPoleStackable,
	FGJetPack,
	FGPipeHyperStart,
};
