/* eslint-disable @stylistic/max-len */

import type {
	FGConsumableEquipment as docs_json_ts_0_4_2_11_FGConsumableEquipment,
	FGEquipmentZipline as docs_json_ts_0_4_2_11_FGEquipmentZipline,
	FGHoverPack as docs_json_ts_0_4_2_11_FGHoverPack,
	FGParachute as docs_json_ts_0_4_2_11_FGParachute,
	FGPortableMinerDispenser as docs_json_ts_0_4_2_11_FGPortableMinerDispenser,
} from './../0.4.2.11/types.ts';

import type {
	FGChainsaw as docs_json_ts_0_3_7_7_FGChainsaw,
	FGEquipmentStunSpear as docs_json_ts_0_3_7_7_FGEquipmentStunSpear,
	FGGasMask as docs_json_ts_0_3_7_7_FGGasMask,
	FGJetPack as docs_json_ts_0_3_7_7_FGJetPack,
	FGJumpingStilts as docs_json_ts_0_3_7_7_FGJumpingStilts,
	FGObjectScanner as docs_json_ts_0_3_7_7_FGObjectScanner,
	FGSuitBase as docs_json_ts_0_3_7_7_FGSuitBase,
} from './../0.3.7.7/types.ts';

import type {
	FGBuildable_occupied as docs_json_ts_0_5_2_1_classes_FGBuildable_occupied,
	FGBuildable_tiered as docs_json_ts_0_5_2_1_classes_FGBuildable_tiered,
	FGBuildable_unoccupied_and_untiered as docs_json_ts_0_5_2_1_classes_FGBuildable_unoccupied_and_untiered,
	FGBuildableAttachmentMerger as docs_json_ts_0_5_2_1_classes_FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter as docs_json_ts_0_5_2_1_classes_FGBuildableAttachmentSplitter,
	FGBuildableBeam as docs_json_ts_0_5_2_1_classes_FGBuildableBeam,
	FGBuildableCircuitSwitch as docs_json_ts_0_5_2_1_classes_FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt as docs_json_ts_0_5_2_1_classes_FGBuildableConveyorBelt,
	FGBuildableConveyorLift as docs_json_ts_0_5_2_1_classes_FGBuildableConveyorLift,
	FGBuildableCornerWall as docs_json_ts_0_5_2_1_classes_FGBuildableCornerWall,
	FGBuildableDockingStation as docs_json_ts_0_5_2_1_classes_FGBuildableDockingStation,
	FGBuildableDoor as docs_json_ts_0_5_2_1_classes_FGBuildableDoor,
	FGBuildableDroneStation as docs_json_ts_0_5_2_1_classes_FGBuildableDroneStation,
	FGBuildableFactory_jump_pad as docs_json_ts_0_5_2_1_classes_FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad as docs_json_ts_0_5_2_1_classes_FGBuildableFactory_landing_pad,
	FGBuildableFactory_not_pad as docs_json_ts_0_5_2_1_classes_FGBuildableFactory_not_pad,
	FGBuildableFactoryBuilding as docs_json_ts_0_5_2_1_classes_FGBuildableFactoryBuilding,
	FGBuildableFactorySimpleProducer as docs_json_ts_0_5_2_1_classes_FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight as docs_json_ts_0_5_2_1_classes_FGBuildableFloodlight,
	FGBuildableFoundation as docs_json_ts_0_5_2_1_classes_FGBuildableFoundation,
	FGBuildableFrackingActivator as docs_json_ts_0_5_2_1_classes_FGBuildableFrackingActivator,
	FGBuildableFrackingExtractor as docs_json_ts_0_5_2_1_classes_FGBuildableFrackingExtractor,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_0_5_2_1_classes_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_0_5_2_1_classes_FGBuildableLadder,
	FGBuildableLightsControlPanel as docs_json_ts_0_5_2_1_classes_FGBuildableLightsControlPanel,
	FGBuildableLightSource_Build_CeilingLight_C as docs_json_ts_0_5_2_1_classes_FGBuildableLightSource_Build_CeilingLight_C,
	FGBuildableLightSource_Build_StreetLight_C as docs_json_ts_0_5_2_1_classes_FGBuildableLightSource_Build_StreetLight_C,
	FGBuildableMAM as docs_json_ts_0_5_2_1_classes_FGBuildableMAM,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Blender_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_Blender_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_HadronCollider_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_HadronCollider_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildablePassthrough as docs_json_ts_0_5_2_1_classes_FGBuildablePassthrough,
	FGBuildablePillar as docs_json_ts_0_5_2_1_classes_FGBuildablePillar,
	FGBuildablePipeHyper as docs_json_ts_0_5_2_1_classes_FGBuildablePipeHyper,
	FGBuildablePipeline as docs_json_ts_0_5_2_1_classes_FGBuildablePipeline,
	FGBuildablePipelineJunction as docs_json_ts_0_5_2_1_classes_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_0_5_2_1_classes_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_0_5_2_1_classes_FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport as docs_json_ts_0_5_2_1_classes_FGBuildablePipelineSupport,
	FGBuildablePipeReservoir as docs_json_ts_0_5_2_1_classes_FGBuildablePipeReservoir,
	FGBuildablePole as docs_json_ts_0_5_2_1_classes_FGBuildablePole,
	FGBuildablePowerPole as docs_json_ts_0_5_2_1_classes_FGBuildablePowerPole,
	FGBuildablePowerStorage as docs_json_ts_0_5_2_1_classes_FGBuildablePowerStorage,
	FGBuildableRadarTower as docs_json_ts_0_5_2_1_classes_FGBuildableRadarTower,
	FGBuildableRailroadSignal_block as docs_json_ts_0_5_2_1_classes_FGBuildableRailroadSignal_block,
	FGBuildableRailroadSignal_path as docs_json_ts_0_5_2_1_classes_FGBuildableRailroadSignal_path,
	FGBuildableRailroadStation as docs_json_ts_0_5_2_1_classes_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_0_5_2_1_classes_FGBuildableRailroadTrack,
	FGBuildableRamp as docs_json_ts_0_5_2_1_classes_FGBuildableRamp,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_0_5_2_1_classes_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_0_5_2_1_classes_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_0_5_2_1_classes_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_0_5_2_1_classes_FGBuildableResourceExtractor_oil,
	FGBuildableResourceSink as docs_json_ts_0_5_2_1_classes_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_0_5_2_1_classes_FGBuildableResourceSinkShop,
	FGBuildableSnowDispenser as docs_json_ts_0_5_2_1_classes_FGBuildableSnowDispenser,
	FGBuildableSpaceElevator as docs_json_ts_0_5_2_1_classes_FGBuildableSpaceElevator,
	FGBuildableSplitterSmart as docs_json_ts_0_5_2_1_classes_FGBuildableSplitterSmart,
	FGBuildableStair as docs_json_ts_0_5_2_1_classes_FGBuildableStair,
	FGBuildableStorage as docs_json_ts_0_5_2_1_classes_FGBuildableStorage,
	FGBuildableTradingPost as docs_json_ts_0_5_2_1_classes_FGBuildableTradingPost,
	FGBuildableTrainPlatformCargo as docs_json_ts_0_5_2_1_classes_FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty as docs_json_ts_0_5_2_1_classes_FGBuildableTrainPlatformEmpty,
	FGBuildableWalkway as docs_json_ts_0_5_2_1_classes_FGBuildableWalkway,
	FGBuildableWall as docs_json_ts_0_5_2_1_classes_FGBuildableWall,
	FGBuildableWaterPump as docs_json_ts_0_5_2_1_classes_FGBuildableWaterPump,
	FGBuildableWidgetSign as docs_json_ts_0_5_2_1_classes_FGBuildableWidgetSign,
	FGBuildableWire as docs_json_ts_0_5_2_1_classes_FGBuildableWire,
	FGBuildingDescriptor as docs_json_ts_0_5_2_1_classes_FGBuildingDescriptor,
	FGChargedWeapon as docs_json_ts_0_5_2_1_classes_FGChargedWeapon,
	FGConsumableDescriptor as docs_json_ts_0_5_2_1_classes_FGConsumableDescriptor,
	FGConveyorPoleStackable as docs_json_ts_0_5_2_1_classes_FGConveyorPoleStackable,
	FGEquipmentDescriptor as docs_json_ts_0_5_2_1_classes_FGEquipmentDescriptor,
	FGEquipmentDescriptor_Desc_GolfCartGold_C as docs_json_ts_0_5_2_1_classes_FGEquipmentDescriptor_Desc_GolfCartGold_C,
	FGGolfCartDispenser as docs_json_ts_0_5_2_1_classes_FGGolfCartDispenser,
	FGItemDescAmmoTypeColorCartridge as docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeColorCartridge,
	FGItemDescAmmoTypeInstantHit as docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeInstantHit,
	FGItemDescAmmoTypeProjectile_Desc_NobeliskExplosive_C as docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_Desc_NobeliskExplosive_C,
	FGItemDescAmmoTypeProjectile_Desc_SnowballProjectile_C as docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_Desc_SnowballProjectile_C,
	FGItemDescAmmoTypeProjectile_Desc_SpikedRebar_C as docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_Desc_SpikedRebar_C,
	FGItemDescAmmoTypeProjectile_explosive_firework as docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_explosive_firework,
	FGItemDescriptor as docs_json_ts_0_5_2_1_classes_FGItemDescriptor,
	FGItemDescriptorBiomass as docs_json_ts_0_5_2_1_classes_FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel as docs_json_ts_0_5_2_1_classes_FGItemDescriptorNuclearFuel,
	FGPipeHyperStart as docs_json_ts_0_5_2_1_classes_FGPipeHyperStart,
	FGPoleDescriptor as docs_json_ts_0_5_2_1_classes_FGPoleDescriptor,
	FGResourceDescriptor as docs_json_ts_0_5_2_1_classes_FGResourceDescriptor,
	FGSchematic as docs_json_ts_0_5_2_1_classes_FGSchematic,
	FGSchematic_with_described_unlocks as docs_json_ts_0_5_2_1_classes_FGSchematic_with_described_unlocks,
	FGVehicleDescriptor_Desc_CyberWagon_C as docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_CyberWagon_C,
	FGVehicleDescriptor_Desc_DroneTransport_C as docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_DroneTransport_C,
	FGVehicleDescriptor_Desc_Explorer_C as docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_Explorer_C,
	FGVehicleDescriptor_Desc_FreightWagon_C as docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_FreightWagon_C,
	FGVehicleDescriptor_Desc_Locomotive_C as docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_Locomotive_C,
	FGVehicleDescriptor_Desc_Tractor_C as docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_Tractor_C,
	FGVehicleDescriptor_Desc_Truck_C as docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_Truck_C,
	FGWeapon_Equip_RebarGun_Projectile_C as docs_json_ts_0_5_2_1_classes_FGWeapon_Equip_RebarGun_Projectile_C,
	FGWeapon_Equip_Rifle_C as docs_json_ts_0_5_2_1_classes_FGWeapon_Equip_Rifle_C,
} from './classes.ts';

import type {
	FGCustomizationRecipe as docs_json_ts_0_5_2_1_classes_overridable_FGCustomizationRecipe,
	FGRecipe as docs_json_ts_0_5_2_1_classes_overridable_FGRecipe,
} from './classes/overridable.ts';

type FGBuildable = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildable'}${'\''}`,
	Classes: [
		FGBuildable_Classes_item,
		...FGBuildable_Classes_item[],
	],
};

type FGBuildable_Classes_item = docs_json_ts_0_5_2_1_classes_FGBuildable_occupied | docs_json_ts_0_5_2_1_classes_FGBuildable_tiered | docs_json_ts_0_5_2_1_classes_FGBuildable_unoccupied_and_untiered;

type FGBuildableAttachmentMerger = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableAttachmentMerger'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableAttachmentMerger,
		...docs_json_ts_0_5_2_1_classes_FGBuildableAttachmentMerger[],
	],
};

type FGBuildableAttachmentSplitter = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableAttachmentSplitter'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableAttachmentSplitter,
		...docs_json_ts_0_5_2_1_classes_FGBuildableAttachmentSplitter[],
	],
};

type FGBuildableBeam = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableBeam'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableBeam,
		...docs_json_ts_0_5_2_1_classes_FGBuildableBeam[],
	],
};

type FGBuildableCircuitSwitch = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableCircuitSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableCircuitSwitch,
		...docs_json_ts_0_5_2_1_classes_FGBuildableCircuitSwitch[],
	],
};

type FGBuildableConveyorBelt = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableConveyorBelt'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableConveyorBelt,
		...docs_json_ts_0_5_2_1_classes_FGBuildableConveyorBelt[],
	],
};

type FGBuildableConveyorLift = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableConveyorLift'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableConveyorLift,
		...docs_json_ts_0_5_2_1_classes_FGBuildableConveyorLift[],
	],
};

type FGBuildableCornerWall = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableCornerWall'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableCornerWall,
		...docs_json_ts_0_5_2_1_classes_FGBuildableCornerWall[],
	],
};

type FGBuildableDockingStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDockingStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableDockingStation,
		...docs_json_ts_0_5_2_1_classes_FGBuildableDockingStation[],
	],
};

type FGBuildableDoor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDoor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableDoor,
		...docs_json_ts_0_5_2_1_classes_FGBuildableDoor[],
	],
};

type FGBuildableDroneStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableDroneStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableDroneStation,
		...docs_json_ts_0_5_2_1_classes_FGBuildableDroneStation[],
	],
};

type FGBuildableFactory = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactory'}${'\''}`,
	Classes: [
		FGBuildableFactory_Classes_item,
		...FGBuildableFactory_Classes_item[],
	],
};

type FGBuildableFactory_Classes_item = docs_json_ts_0_5_2_1_classes_FGBuildableFactory_jump_pad | docs_json_ts_0_5_2_1_classes_FGBuildableFactory_landing_pad | docs_json_ts_0_5_2_1_classes_FGBuildableFactory_not_pad;

type FGBuildableFactoryBuilding = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactoryBuilding'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableFactoryBuilding,
		...docs_json_ts_0_5_2_1_classes_FGBuildableFactoryBuilding[],
	],
};

type FGBuildableFactorySimpleProducer = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFactorySimpleProducer'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableFactorySimpleProducer,
		...docs_json_ts_0_5_2_1_classes_FGBuildableFactorySimpleProducer[],
	],
};

type FGBuildableFloodlight = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFloodlight'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableFloodlight,
		...docs_json_ts_0_5_2_1_classes_FGBuildableFloodlight[],
	],
};

type FGBuildableFoundation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFoundation'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableFoundation,
		...docs_json_ts_0_5_2_1_classes_FGBuildableFoundation[],
	],
};

type FGBuildableFrackingActivator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFrackingActivator'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableFrackingActivator,
		...docs_json_ts_0_5_2_1_classes_FGBuildableFrackingActivator[],
	],
};

type FGBuildableFrackingExtractor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableFrackingExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableFrackingExtractor,
		...docs_json_ts_0_5_2_1_classes_FGBuildableFrackingExtractor[],
	],
};

type FGBuildableGeneratorFuel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorFuel_biomass,
		docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorFuel_coal,
		docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorFuel_fuel,
	],
};

type FGBuildableGeneratorGeoThermal = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorGeoThermal'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorGeoThermal,
		...docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorGeoThermal[],
	],
};

type FGBuildableGeneratorNuclear = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableGeneratorNuclear'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorNuclear,
		...docs_json_ts_0_5_2_1_classes_FGBuildableGeneratorNuclear[],
	],
};

type FGBuildableJumppad = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableJumppad'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableJumppad,
		...docs_json_ts_0_5_2_1_classes_FGBuildableJumppad[],
	],
};

type FGBuildableLadder = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLadder'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableLadder,
		...docs_json_ts_0_5_2_1_classes_FGBuildableLadder[],
	],
};

type FGBuildableLightsControlPanel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLightsControlPanel'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableLightsControlPanel,
		...docs_json_ts_0_5_2_1_classes_FGBuildableLightsControlPanel[],
	],
};

type FGBuildableLightSource = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableLightSource'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableLightSource_Build_CeilingLight_C,
		docs_json_ts_0_5_2_1_classes_FGBuildableLightSource_Build_StreetLight_C,
	],
};

type FGBuildableMAM = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableMAM'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableMAM,
		...docs_json_ts_0_5_2_1_classes_FGBuildableMAM[],
	],
};

type FGBuildableManufacturer = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableManufacturer'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_OilRefinery_C,
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_Packager_C,
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_Blender_C,
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	],
};

type FGBuildableManufacturerVariablePower = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableManufacturerVariablePower'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_HadronCollider_C,
		...docs_json_ts_0_5_2_1_classes_FGBuildableManufacturer_Build_HadronCollider_C[],
	],
};

type FGBuildablePassthrough = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePassthrough'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePassthrough,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePassthrough[],
	],
};

type FGBuildablePillar = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePillar'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePillar,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePillar[],
	],
};

type FGBuildablePipeHyper = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePipeHyper,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePipeHyper[],
	],
};

type FGBuildablePipeline = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeline'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePipeline,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePipeline[],
	],
};

type FGBuildablePipelineJunction = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelineJunction'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePipelineJunction,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePipelineJunction[],
	],
};

type FGBuildablePipelinePump = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelinePump'}${'\''}`,
	Classes: [
		FGBuildablePipelinePump_Classes_item,
		...FGBuildablePipelinePump_Classes_item[],
	],
};

type FGBuildablePipelinePump_Classes_item = docs_json_ts_0_5_2_1_classes_FGBuildablePipelinePump_valve | docs_json_ts_0_5_2_1_classes_FGBuildablePipelinePump_pump;

type FGBuildablePipelineSupport = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipelineSupport'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePipelineSupport,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePipelineSupport[],
	],
};

type FGBuildablePipeReservoir = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePipeReservoir'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePipeReservoir,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePipeReservoir[],
	],
};

type FGBuildablePole = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePole'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePole,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePole[],
	],
};

type FGBuildablePowerPole = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePowerPole'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePowerPole,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePowerPole[],
	],
};

type FGBuildablePowerStorage = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildablePowerStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildablePowerStorage,
		...docs_json_ts_0_5_2_1_classes_FGBuildablePowerStorage[],
	],
};

type FGBuildableRadarTower = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRadarTower'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableRadarTower,
		...docs_json_ts_0_5_2_1_classes_FGBuildableRadarTower[],
	],
};

type FGBuildableRailroadSignal = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadSignal'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableRailroadSignal_block,
		docs_json_ts_0_5_2_1_classes_FGBuildableRailroadSignal_path,
	],
};

type FGBuildableRailroadStation = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableRailroadStation,
		...docs_json_ts_0_5_2_1_classes_FGBuildableRailroadStation[],
	],
};

type FGBuildableRailroadTrack = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRailroadTrack'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableRailroadTrack,
		...docs_json_ts_0_5_2_1_classes_FGBuildableRailroadTrack[],
	],
};

type FGBuildableRamp = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableRamp'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableRamp,
		...docs_json_ts_0_5_2_1_classes_FGBuildableRamp[],
	],
};

type FGBuildableResourceExtractor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableResourceExtractor_miner_mk1,
		docs_json_ts_0_5_2_1_classes_FGBuildableResourceExtractor_oil,
		docs_json_ts_0_5_2_1_classes_FGBuildableResourceExtractor_miner_mk2,
		docs_json_ts_0_5_2_1_classes_FGBuildableResourceExtractor_miner_mk3,
	],
};

type FGBuildableResourceSink = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceSink'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableResourceSink,
		...docs_json_ts_0_5_2_1_classes_FGBuildableResourceSink[],
	],
};

type FGBuildableResourceSinkShop = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableResourceSinkShop'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableResourceSinkShop,
		...docs_json_ts_0_5_2_1_classes_FGBuildableResourceSinkShop[],
	],
};

type FGBuildableSnowDispenser = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSnowDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableSnowDispenser,
		...docs_json_ts_0_5_2_1_classes_FGBuildableSnowDispenser[],
	],
};

type FGBuildableSpaceElevator = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSpaceElevator'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableSpaceElevator,
		...docs_json_ts_0_5_2_1_classes_FGBuildableSpaceElevator[],
	],
};

type FGBuildableSplitterSmart = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableSplitterSmart'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableSplitterSmart,
		...docs_json_ts_0_5_2_1_classes_FGBuildableSplitterSmart[],
	],
};

type FGBuildableStair = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableStair'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableStair,
		...docs_json_ts_0_5_2_1_classes_FGBuildableStair[],
	],
};

type FGBuildableStorage = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableStorage,
		...docs_json_ts_0_5_2_1_classes_FGBuildableStorage[],
	],
};

type FGBuildableTradingPost = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTradingPost'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableTradingPost,
		...docs_json_ts_0_5_2_1_classes_FGBuildableTradingPost[],
	],
};

type FGBuildableTrainPlatformCargo = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTrainPlatformCargo'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableTrainPlatformCargo,
		...docs_json_ts_0_5_2_1_classes_FGBuildableTrainPlatformCargo[],
	],
};

type FGBuildableTrainPlatformEmpty = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableTrainPlatformEmpty'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableTrainPlatformEmpty,
		...docs_json_ts_0_5_2_1_classes_FGBuildableTrainPlatformEmpty[],
	],
};

type FGBuildableWalkway = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWalkway'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableWalkway,
		...docs_json_ts_0_5_2_1_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWall = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWall'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableWall,
		...docs_json_ts_0_5_2_1_classes_FGBuildableWall[],
	],
};

type FGBuildableWaterPump = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWaterPump'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableWaterPump,
		...docs_json_ts_0_5_2_1_classes_FGBuildableWaterPump[],
	],
};

type FGBuildableWidgetSign = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWidgetSign'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableWidgetSign,
		...docs_json_ts_0_5_2_1_classes_FGBuildableWidgetSign[],
	],
};

type FGBuildableWire = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildableWire'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildableWire,
		...docs_json_ts_0_5_2_1_classes_FGBuildableWire[],
	],
};

type FGBuildingDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGBuildingDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGBuildingDescriptor,
		...docs_json_ts_0_5_2_1_classes_FGBuildingDescriptor[],
	],
};

type FGChargedWeapon = {
	NativeClass: `Class'/Script/${'FactoryGame.FGChargedWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGChargedWeapon,
		...docs_json_ts_0_5_2_1_classes_FGChargedWeapon[],
	],
};

type FGConsumableDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConsumableDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGConsumableDescriptor,
		...docs_json_ts_0_5_2_1_classes_FGConsumableDescriptor[],
	],
};

type FGConveyorPoleStackable = {
	NativeClass: `Class'/Script/${'FactoryGame.FGConveyorPoleStackable'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGConveyorPoleStackable,
		...docs_json_ts_0_5_2_1_classes_FGConveyorPoleStackable[],
	],
};

type FGCustomizationRecipe = {
	NativeClass: `Class'/Script/${'FactoryGame.FGCustomizationRecipe'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_overridable_FGCustomizationRecipe,
		...docs_json_ts_0_5_2_1_classes_overridable_FGCustomizationRecipe[],
	],
};

type FGEquipmentDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGEquipmentDescriptor'}${'\''}`,
	Classes: [
		FGEquipmentDescriptor_Classes_item,
		...FGEquipmentDescriptor_Classes_item[],
	],
};

type FGEquipmentDescriptor_Classes_item = docs_json_ts_0_5_2_1_classes_FGEquipmentDescriptor | docs_json_ts_0_5_2_1_classes_FGEquipmentDescriptor_Desc_GolfCartGold_C;

type FGGolfCartDispenser = {
	NativeClass: `Class'/Script/${'FactoryGame.FGGolfCartDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGGolfCartDispenser,
		...docs_json_ts_0_5_2_1_classes_FGGolfCartDispenser[],
	],
};

type FGItemDescAmmoTypeColorCartridge = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescAmmoTypeColorCartridge'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeColorCartridge,
		...docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeColorCartridge[],
	],
};

type FGItemDescAmmoTypeInstantHit = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescAmmoTypeInstantHit'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeInstantHit,
		...docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeInstantHit[],
	],
};

type FGItemDescAmmoTypeProjectile = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescAmmoTypeProjectile'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_Desc_SpikedRebar_C,
		docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_explosive_firework,
		docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_explosive_firework,
		docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_explosive_firework,
		docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_Desc_SnowballProjectile_C,
		docs_json_ts_0_5_2_1_classes_FGItemDescAmmoTypeProjectile_Desc_NobeliskExplosive_C,
	],
};

type FGItemDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGItemDescriptor,
		...docs_json_ts_0_5_2_1_classes_FGItemDescriptor[],
	],
};

type FGItemDescriptorBiomass = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptorBiomass'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGItemDescriptorBiomass,
		...docs_json_ts_0_5_2_1_classes_FGItemDescriptorBiomass[],
	],
};

type FGItemDescriptorNuclearFuel = {
	NativeClass: `Class'/Script/${'FactoryGame.FGItemDescriptorNuclearFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGItemDescriptorNuclearFuel,
		...docs_json_ts_0_5_2_1_classes_FGItemDescriptorNuclearFuel[],
	],
};

type FGPipeHyperStart = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPipeHyperStart'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGPipeHyperStart,
		...docs_json_ts_0_5_2_1_classes_FGPipeHyperStart[],
	],
};

type FGPoleDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGPoleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGPoleDescriptor,
		...docs_json_ts_0_5_2_1_classes_FGPoleDescriptor[],
	],
};

type FGRecipe = {
	NativeClass: `Class'/Script/${'FactoryGame.FGRecipe'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_overridable_FGRecipe,
		...docs_json_ts_0_5_2_1_classes_overridable_FGRecipe[],
	],
};

type FGResourceDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGResourceDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGResourceDescriptor,
		...docs_json_ts_0_5_2_1_classes_FGResourceDescriptor[],
	],
};

type FGSchematic = {
	NativeClass: `Class'/Script/${'FactoryGame.FGSchematic'}${'\''}`,
	Classes: [
		FGSchematic_Classes_item,
		...FGSchematic_Classes_item[],
	],
};

type FGSchematic_Classes_item = docs_json_ts_0_5_2_1_classes_FGSchematic | docs_json_ts_0_5_2_1_classes_FGSchematic_with_described_unlocks;

type FGVehicleDescriptor = {
	NativeClass: `Class'/Script/${'FactoryGame.FGVehicleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_Truck_C,
		docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_DroneTransport_C,
		docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_Tractor_C,
		docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_FreightWagon_C,
		docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_Locomotive_C,
		docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_Explorer_C,
		docs_json_ts_0_5_2_1_classes_FGVehicleDescriptor_Desc_CyberWagon_C,
	],
};

type FGWeapon = {
	NativeClass: `Class'/Script/${'FactoryGame.FGWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_FGWeapon_Equip_RebarGun_Projectile_C,
		docs_json_ts_0_5_2_1_classes_FGWeapon_Equip_Rifle_C,
	],
};

export type update5_docs = [
	FGItemDescriptor,
	docs_json_ts_0_4_2_11_FGConsumableEquipment,
	FGSchematic,
	FGBuildableWall,
	FGBuildableDoor,
	FGRecipe,
	FGCustomizationRecipe,
	FGBuildingDescriptor,
	FGBuildableCornerWall,
	FGItemDescriptorBiomass,
	docs_json_ts_0_3_7_7_FGChainsaw,
	FGEquipmentDescriptor,
	FGGolfCartDispenser,
	docs_json_ts_0_3_7_7_FGSuitBase,
	docs_json_ts_0_3_7_7_FGJetPack,
	docs_json_ts_0_3_7_7_FGJumpingStilts,
	FGItemDescAmmoTypeProjectile,
	FGWeapon,
	FGItemDescAmmoTypeInstantHit,
	docs_json_ts_0_3_7_7_FGEquipmentStunSpear,
	FGBuildablePole,
	FGPoleDescriptor,
	FGBuildableConveyorBelt,
	FGBuildablePowerPole,
	FGBuildableWire,
	FGBuildableTradingPost,
	FGResourceDescriptor,
	FGItemDescAmmoTypeColorCartridge,
	docs_json_ts_0_3_7_7_FGGasMask,
	FGBuildableManufacturer,
	FGBuildableResourceExtractor,
	docs_json_ts_0_4_2_11_FGPortableMinerDispenser,
	FGBuildableStorage,
	FGBuildable,
	FGBuildableGeneratorFuel,
	FGBuildableSpaceElevator,
	FGConsumableDescriptor,
	FGItemDescriptorNuclearFuel,
	FGBuildableMAM,
	FGBuildableBeam,
	FGBuildablePillar,
	FGBuildableFactory,
	FGBuildableWalkway,
	FGBuildablePipelinePump,
	FGBuildablePipelineSupport,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipeReservoir,
	FGBuildableWaterPump,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGVehicleDescriptor,
	FGBuildableDroneStation,
	FGBuildableFrackingExtractor,
	FGBuildableFrackingActivator,
	FGBuildableManufacturerVariablePower,
	FGBuildableGeneratorNuclear,
	FGBuildableConveyorLift,
	FGBuildableFoundation,
	FGBuildableRamp,
	FGBuildableSplitterSmart,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	docs_json_ts_0_3_7_7_FGObjectScanner,
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
	FGBuildableRailroadTrack,
	docs_json_ts_0_4_2_11_FGHoverPack,
	docs_json_ts_0_4_2_11_FGEquipmentZipline,
	FGBuildableCircuitSwitch,
	FGBuildableGeneratorGeoThermal,
	docs_json_ts_0_4_2_11_FGParachute,
	FGBuildableRadarTower,
	FGChargedWeapon,
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
	FGBuildableBeam,
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
	FGBuildablePillar,
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
	FGBuildableWall,
	FGBuildableWaterPump,
	FGBuildableWidgetSign,
	FGBuildableWire,
	FGBuildingDescriptor,
	FGChargedWeapon,
	FGConsumableDescriptor,
	FGConveyorPoleStackable,
	FGCustomizationRecipe,
	FGEquipmentDescriptor,
	FGEquipmentDescriptor_Classes_item,
	FGGolfCartDispenser,
	FGItemDescAmmoTypeColorCartridge,
	FGItemDescAmmoTypeInstantHit,
	FGItemDescAmmoTypeProjectile,
	FGItemDescriptor,
	FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel,
	FGPipeHyperStart,
	FGPoleDescriptor,
	FGRecipe,
	FGResourceDescriptor,
	FGSchematic,
	FGSchematic_Classes_item,
	FGVehicleDescriptor,
	FGWeapon,
};
