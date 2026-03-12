/* eslint-disable @stylistic/max-len */

import type {
	FGBuildingDescriptor as docs_json_ts_0_6_1_5_FGBuildingDescriptor,
} from './../0.6.1.5/types.ts';

import type {
	FGAmmoTypeInstantHit_Desc_CartridgeChaos_C as docs_json_ts_0_8_3_3_classes_FGAmmoTypeInstantHit_Desc_CartridgeChaos_C,
	FGAmmoTypeInstantHit_Desc_CartridgeStandard_C as docs_json_ts_0_8_3_3_classes_FGAmmoTypeInstantHit_Desc_CartridgeStandard_C,
	FGAmmoTypeProjectile as docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
	FGAmmoTypeSpreadshot as docs_json_ts_0_8_3_3_classes_FGAmmoTypeSpreadshot,
	FGBuildable_base as docs_json_ts_0_8_3_3_classes_FGBuildable_base,
	FGBuildable_occupied as docs_json_ts_0_8_3_3_classes_FGBuildable_occupied,
	FGBuildable_powered as docs_json_ts_0_8_3_3_classes_FGBuildable_powered,
	FGBuildable_tiered as docs_json_ts_0_8_3_3_classes_FGBuildable_tiered,
	FGBuildableAttachmentMerger as docs_json_ts_0_8_3_3_classes_FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter as docs_json_ts_0_8_3_3_classes_FGBuildableAttachmentSplitter,
	FGBuildableBeamLightweight as docs_json_ts_0_8_3_3_classes_FGBuildableBeamLightweight,
	FGBuildableBlueprintDesigner as docs_json_ts_0_8_3_3_classes_FGBuildableBlueprintDesigner,
	FGBuildableCircuitSwitch as docs_json_ts_0_8_3_3_classes_FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt as docs_json_ts_0_8_3_3_classes_FGBuildableConveyorBelt,
	FGBuildableConveyorLift as docs_json_ts_0_8_3_3_classes_FGBuildableConveyorLift,
	FGBuildableCornerWall as docs_json_ts_0_8_3_3_classes_FGBuildableCornerWall,
	FGBuildableDockingStation as docs_json_ts_0_8_3_3_classes_FGBuildableDockingStation,
	FGBuildableDoor as docs_json_ts_0_8_3_3_classes_FGBuildableDoor,
	FGBuildableDroneStation as docs_json_ts_0_8_3_3_classes_FGBuildableDroneStation,
	FGBuildableFactory_jump_pad as docs_json_ts_0_8_3_3_classes_FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad as docs_json_ts_0_8_3_3_classes_FGBuildableFactory_landing_pad,
	FGBuildableFactoryBuilding as docs_json_ts_0_8_3_3_classes_FGBuildableFactoryBuilding,
	FGBuildableFactorySimpleProducer as docs_json_ts_0_8_3_3_classes_FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight as docs_json_ts_0_8_3_3_classes_FGBuildableFloodlight,
	FGBuildableFoundation as docs_json_ts_0_8_3_3_classes_FGBuildableFoundation,
	FGBuildableFoundationLightweight as docs_json_ts_0_8_3_3_classes_FGBuildableFoundationLightweight,
	FGBuildableFrackingActivator as docs_json_ts_0_8_3_3_classes_FGBuildableFrackingActivator,
	FGBuildableFrackingExtractor as docs_json_ts_0_8_3_3_classes_FGBuildableFrackingExtractor,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_0_8_3_3_classes_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_0_8_3_3_classes_FGBuildableLadder,
	FGBuildableLightsControlPanel as docs_json_ts_0_8_3_3_classes_FGBuildableLightsControlPanel,
	FGBuildableLightSource_Build_CeilingLight_C as docs_json_ts_0_8_3_3_classes_FGBuildableLightSource_Build_CeilingLight_C,
	FGBuildableLightSource_Build_StreetLight_C as docs_json_ts_0_8_3_3_classes_FGBuildableLightSource_Build_StreetLight_C,
	FGBuildableMAM as docs_json_ts_0_8_3_3_classes_FGBuildableMAM,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Blender_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_Blender_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_HadronCollider_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_HadronCollider_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildablePassthrough as docs_json_ts_0_8_3_3_classes_FGBuildablePassthrough,
	FGBuildablePillarLightweight as docs_json_ts_0_8_3_3_classes_FGBuildablePillarLightweight,
	FGBuildablePipeHyper as docs_json_ts_0_8_3_3_classes_FGBuildablePipeHyper,
	FGBuildablePipeline as docs_json_ts_0_8_3_3_classes_FGBuildablePipeline,
	FGBuildablePipelineJunction as docs_json_ts_0_8_3_3_classes_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_0_8_3_3_classes_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_0_8_3_3_classes_FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport as docs_json_ts_0_8_3_3_classes_FGBuildablePipelineSupport,
	FGBuildablePipeReservoir as docs_json_ts_0_8_3_3_classes_FGBuildablePipeReservoir,
	FGBuildablePoleLightweight as docs_json_ts_0_8_3_3_classes_FGBuildablePoleLightweight,
	FGBuildablePowerPole as docs_json_ts_0_8_3_3_classes_FGBuildablePowerPole,
	FGBuildablePowerStorage as docs_json_ts_0_8_3_3_classes_FGBuildablePowerStorage,
	FGBuildablePriorityPowerSwitch as docs_json_ts_0_8_3_3_classes_FGBuildablePriorityPowerSwitch,
	FGBuildableRadarTower as docs_json_ts_0_8_3_3_classes_FGBuildableRadarTower,
	FGBuildableRailroadSignal_block as docs_json_ts_0_8_3_3_classes_FGBuildableRailroadSignal_block,
	FGBuildableRailroadSignal_path as docs_json_ts_0_8_3_3_classes_FGBuildableRailroadSignal_path,
	FGBuildableRailroadStation as docs_json_ts_0_8_3_3_classes_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_0_8_3_3_classes_FGBuildableRailroadTrack,
	FGBuildableRamp as docs_json_ts_0_8_3_3_classes_FGBuildableRamp,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_0_8_3_3_classes_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_0_8_3_3_classes_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_0_8_3_3_classes_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_0_8_3_3_classes_FGBuildableResourceExtractor_oil,
	FGBuildableResourceSink as docs_json_ts_0_8_3_3_classes_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_0_8_3_3_classes_FGBuildableResourceSinkShop,
	FGBuildableSnowDispenser as docs_json_ts_0_8_3_3_classes_FGBuildableSnowDispenser,
	FGBuildableSplitterSmart as docs_json_ts_0_8_3_3_classes_FGBuildableSplitterSmart,
	FGBuildableStair as docs_json_ts_0_8_3_3_classes_FGBuildableStair,
	FGBuildableStorage as docs_json_ts_0_8_3_3_classes_FGBuildableStorage,
	FGBuildableTradingPost as docs_json_ts_0_8_3_3_classes_FGBuildableTradingPost,
	FGBuildableTrainPlatformCargo as docs_json_ts_0_8_3_3_classes_FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty as docs_json_ts_0_8_3_3_classes_FGBuildableTrainPlatformEmpty,
	FGBuildableWalkway as docs_json_ts_0_8_3_3_classes_FGBuildableWalkway,
	FGBuildableWalkwayLightweight as docs_json_ts_0_8_3_3_classes_FGBuildableWalkwayLightweight,
	FGBuildableWall as docs_json_ts_0_8_3_3_classes_FGBuildableWall,
	FGBuildableWaterPump as docs_json_ts_0_8_3_3_classes_FGBuildableWaterPump,
	FGBuildableWidgetSign as docs_json_ts_0_8_3_3_classes_FGBuildableWidgetSign,
	FGBuildableWire as docs_json_ts_0_8_3_3_classes_FGBuildableWire,
	FGChainsaw as docs_json_ts_0_8_3_3_classes_FGChainsaw,
	FGChargedWeapon as docs_json_ts_0_8_3_3_classes_FGChargedWeapon,
	FGConsumableEquipment as docs_json_ts_0_8_3_3_classes_FGConsumableEquipment,
	FGConveyorPoleStackable as docs_json_ts_0_8_3_3_classes_FGConveyorPoleStackable,
	FGEquipmentStunSpear_xenobasher as docs_json_ts_0_8_3_3_classes_FGEquipmentStunSpear_xenobasher,
	FGEquipmentStunSpear_xenozapper as docs_json_ts_0_8_3_3_classes_FGEquipmentStunSpear_xenozapper,
	FGEquipmentZipline as docs_json_ts_0_8_3_3_classes_FGEquipmentZipline,
	FGGasMask as docs_json_ts_0_8_3_3_classes_FGGasMask,
	FGGolfCartDispenser as docs_json_ts_0_8_3_3_classes_FGGolfCartDispenser,
	FGHoverPack as docs_json_ts_0_8_3_3_classes_FGHoverPack,
	FGItemDescriptorNuclearFuel as docs_json_ts_0_8_3_3_classes_FGItemDescriptorNuclearFuel,
	FGJetPack as docs_json_ts_0_8_3_3_classes_FGJetPack,
	FGJumpingStilts as docs_json_ts_0_8_3_3_classes_FGJumpingStilts,
	FGObjectScanner as docs_json_ts_0_8_3_3_classes_FGObjectScanner,
	FGParachute as docs_json_ts_0_8_3_3_classes_FGParachute,
	FGPipeHyperStart as docs_json_ts_0_8_3_3_classes_FGPipeHyperStart,
	FGPortableMinerDispenser as docs_json_ts_0_8_3_3_classes_FGPortableMinerDispenser,
	FGSchematic as docs_json_ts_0_8_3_3_classes_FGSchematic,
	FGSchematic_with_described_unlocks as docs_json_ts_0_8_3_3_classes_FGSchematic_with_described_unlocks,
	FGSuitBase as docs_json_ts_0_8_3_3_classes_FGSuitBase,
	FGWeapon_Equip_RebarGun_Projectile_C as docs_json_ts_0_8_3_3_classes_FGWeapon_Equip_RebarGun_Projectile_C,
	FGWeapon_Equip_Rifle_C as docs_json_ts_0_8_3_3_classes_FGWeapon_Equip_Rifle_C,
} from './classes.ts';

import type {
	FGConsumableDescriptor as docs_json_ts_0_6_1_5_classes_overridable_FGConsumableDescriptor,
	FGEquipmentDescriptor_Desc_GolfCartGold_C as docs_json_ts_0_6_1_5_classes_overridable_FGEquipmentDescriptor_Desc_GolfCartGold_C,
	FGPoleDescriptor as docs_json_ts_0_6_1_5_classes_overridable_FGPoleDescriptor,
	FGRecipe as docs_json_ts_0_6_1_5_classes_overridable_FGRecipe,
	FGVehicleDescriptor_Desc_CyberWagon_C as docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_CyberWagon_C,
	FGVehicleDescriptor_Desc_DroneTransport_C as docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_DroneTransport_C,
	FGVehicleDescriptor_Desc_Explorer_C as docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_Explorer_C,
	FGVehicleDescriptor_Desc_FreightWagon_C as docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_FreightWagon_C,
	FGVehicleDescriptor_Desc_Locomotive_C as docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_Locomotive_C,
	FGVehicleDescriptor_Desc_Tractor_C as docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_Tractor_C,
	FGVehicleDescriptor_Desc_Truck_C as docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_Truck_C,
} from './../0.6.1.5/classes/overridable--0.8.3.3.ts';

import type {
	FGCustomizationRecipe as docs_json_ts_0_5_2_1_classes_overridable_FGCustomizationRecipe,
} from './../0.5.2.1/classes/overridable--0.8.3.3.ts';

import type {
	FGItemDescriptor as docs_json_ts_0_6_1_5_classes_FGItemDescriptor,
	FGResourceDescriptor as docs_json_ts_0_6_1_5_classes_FGResourceDescriptor,
} from './../0.6.1.5/classes.ts';

type FGAmmoTypeInstantHit = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeInstantHit'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeInstantHit_Desc_CartridgeChaos_C,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeInstantHit_Desc_CartridgeStandard_C,
	],
};

type FGAmmoTypeProjectile = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeProjectile'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile,
		...docs_json_ts_0_8_3_3_classes_FGAmmoTypeProjectile[],
	],
};

type FGAmmoTypeSpreadshot = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeSpreadshot'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGAmmoTypeSpreadshot,
		...docs_json_ts_0_8_3_3_classes_FGAmmoTypeSpreadshot[],
	],
};

type FGBuildable = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildable'}${'\''}`,
	Classes: [
		FGBuildable_Classes_item,
		...FGBuildable_Classes_item[],
	],
};

type FGBuildable_Classes_item = docs_json_ts_0_8_3_3_classes_FGBuildable_occupied | docs_json_ts_0_8_3_3_classes_FGBuildable_tiered | docs_json_ts_0_8_3_3_classes_FGBuildable_base;

type FGBuildableAttachmentMerger = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableAttachmentMerger'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableAttachmentMerger,
		...docs_json_ts_0_8_3_3_classes_FGBuildableAttachmentMerger[],
	],
};

type FGBuildableAttachmentSplitter = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableAttachmentSplitter'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableAttachmentSplitter,
		...docs_json_ts_0_8_3_3_classes_FGBuildableAttachmentSplitter[],
	],
};

type FGBuildableBeamLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableBeamLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableBeamLightweight,
		...docs_json_ts_0_8_3_3_classes_FGBuildableBeamLightweight[],
	],
};

type FGBuildableBlueprintDesigner = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableBlueprintDesigner'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableBlueprintDesigner,
		...docs_json_ts_0_8_3_3_classes_FGBuildableBlueprintDesigner[],
	],
};

type FGBuildableCircuitSwitch = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableCircuitSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableCircuitSwitch,
		...docs_json_ts_0_8_3_3_classes_FGBuildableCircuitSwitch[],
	],
};

type FGBuildableConveyorBelt = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableConveyorBelt'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableConveyorBelt,
		...docs_json_ts_0_8_3_3_classes_FGBuildableConveyorBelt[],
	],
};

type FGBuildableConveyorLift = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableConveyorLift'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableConveyorLift,
		...docs_json_ts_0_8_3_3_classes_FGBuildableConveyorLift[],
	],
};

type FGBuildableCornerWall = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableCornerWall'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableCornerWall,
		...docs_json_ts_0_8_3_3_classes_FGBuildableCornerWall[],
	],
};

type FGBuildableDockingStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDockingStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableDockingStation,
		...docs_json_ts_0_8_3_3_classes_FGBuildableDockingStation[],
	],
};

type FGBuildableDoor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDoor'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableDoor,
		...docs_json_ts_0_8_3_3_classes_FGBuildableDoor[],
	],
};

type FGBuildableDroneStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDroneStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableDroneStation,
		...docs_json_ts_0_8_3_3_classes_FGBuildableDroneStation[],
	],
};

type FGBuildableFactory = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactory'}${'\''}`,
	Classes: [
		FGBuildableFactory_Classes_item,
		...FGBuildableFactory_Classes_item[],
	],
};

type FGBuildableFactory_Classes_item = docs_json_ts_0_8_3_3_classes_FGBuildableFactory_jump_pad | docs_json_ts_0_8_3_3_classes_FGBuildableFactory_landing_pad | docs_json_ts_0_8_3_3_classes_FGBuildable_powered;

type FGBuildableFactoryBuilding = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactoryBuilding'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableFactoryBuilding,
		...docs_json_ts_0_8_3_3_classes_FGBuildableFactoryBuilding[],
	],
};

type FGBuildableFactorySimpleProducer = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactorySimpleProducer'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableFactorySimpleProducer,
		...docs_json_ts_0_8_3_3_classes_FGBuildableFactorySimpleProducer[],
	],
};

type FGBuildableFloodlight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFloodlight'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableFloodlight,
		...docs_json_ts_0_8_3_3_classes_FGBuildableFloodlight[],
	],
};

type FGBuildableFoundation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFoundation'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableFoundation,
		...docs_json_ts_0_8_3_3_classes_FGBuildableFoundation[],
	],
};

type FGBuildableFoundationLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFoundationLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableFoundationLightweight,
		...docs_json_ts_0_8_3_3_classes_FGBuildableFoundationLightweight[],
	],
};

type FGBuildableFrackingActivator = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFrackingActivator'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableFrackingActivator,
		...docs_json_ts_0_8_3_3_classes_FGBuildableFrackingActivator[],
	],
};

type FGBuildableFrackingExtractor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFrackingExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableFrackingExtractor,
		...docs_json_ts_0_8_3_3_classes_FGBuildableFrackingExtractor[],
	],
};

type FGBuildableGeneratorFuel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorFuel_coal,
		docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorFuel_fuel,
		docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorFuel_biomass,
	],
};

type FGBuildableGeneratorGeoThermal = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorGeoThermal'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorGeoThermal,
		...docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorGeoThermal[],
	],
};

type FGBuildableGeneratorNuclear = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorNuclear'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorNuclear,
		...docs_json_ts_0_8_3_3_classes_FGBuildableGeneratorNuclear[],
	],
};

type FGBuildableJumppad = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableJumppad'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableJumppad,
		...docs_json_ts_0_8_3_3_classes_FGBuildableJumppad[],
	],
};

type FGBuildableLadder = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLadder'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableLadder,
		...docs_json_ts_0_8_3_3_classes_FGBuildableLadder[],
	],
};

type FGBuildableLightsControlPanel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLightsControlPanel'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableLightsControlPanel,
		...docs_json_ts_0_8_3_3_classes_FGBuildableLightsControlPanel[],
	],
};

type FGBuildableLightSource = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLightSource'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableLightSource_Build_StreetLight_C,
		docs_json_ts_0_8_3_3_classes_FGBuildableLightSource_Build_CeilingLight_C,
	],
};

type FGBuildableMAM = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableMAM'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableMAM,
		...docs_json_ts_0_8_3_3_classes_FGBuildableMAM[],
	],
};

type FGBuildableManufacturer = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableManufacturer'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_OilRefinery_C,
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_Packager_C,
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_Blender_C,
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
	],
};

type FGBuildableManufacturerVariablePower = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableManufacturerVariablePower'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_HadronCollider_C,
		...docs_json_ts_0_8_3_3_classes_FGBuildableManufacturer_Build_HadronCollider_C[],
	],
};

type FGBuildablePassthrough = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePassthrough'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePassthrough,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePassthrough[],
	],
};

type FGBuildablePassthroughPipeHyper = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePassthroughPipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePassthrough,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePassthrough[],
	],
};

type FGBuildablePillarLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePillarLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePillarLightweight,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePillarLightweight[],
	],
};

type FGBuildablePipeHyper = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePipeHyper,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePipeHyper[],
	],
};

type FGBuildablePipeline = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeline'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePipeline,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePipeline[],
	],
};

type FGBuildablePipelineJunction = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipelineJunction'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePipelineJunction,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePipelineJunction[],
	],
};

type FGBuildablePipelinePump = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipelinePump'}${'\''}`,
	Classes: [
		FGBuildablePipelinePump_Classes_item,
		...FGBuildablePipelinePump_Classes_item[],
	],
};

type FGBuildablePipelinePump_Classes_item = docs_json_ts_0_8_3_3_classes_FGBuildablePipelinePump_valve | docs_json_ts_0_8_3_3_classes_FGBuildablePipelinePump_pump;

type FGBuildablePipelineSupport = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipelineSupport'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePipelineSupport,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePipelineSupport[],
	],
};

type FGBuildablePipeReservoir = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeReservoir'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePipeReservoir,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePipeReservoir[],
	],
};

type FGBuildablePoleLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePoleLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePoleLightweight,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePoleLightweight[],
	],
};

type FGBuildablePowerPole = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePowerPole'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePowerPole,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePowerPole[],
	],
};

type FGBuildablePowerStorage = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePowerStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePowerStorage,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePowerStorage[],
	],
};

type FGBuildablePriorityPowerSwitch = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePriorityPowerSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildablePriorityPowerSwitch,
		...docs_json_ts_0_8_3_3_classes_FGBuildablePriorityPowerSwitch[],
	],
};

type FGBuildableRadarTower = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRadarTower'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableRadarTower,
		...docs_json_ts_0_8_3_3_classes_FGBuildableRadarTower[],
	],
};

type FGBuildableRailroadSignal = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadSignal'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableRailroadSignal_block,
		docs_json_ts_0_8_3_3_classes_FGBuildableRailroadSignal_path,
	],
};

type FGBuildableRailroadStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadStation'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableRailroadStation,
		...docs_json_ts_0_8_3_3_classes_FGBuildableRailroadStation[],
	],
};

type FGBuildableRailroadTrack = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadTrack'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableRailroadTrack,
		...docs_json_ts_0_8_3_3_classes_FGBuildableRailroadTrack[],
	],
};

type FGBuildableRamp = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRamp'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableRamp,
		...docs_json_ts_0_8_3_3_classes_FGBuildableRamp[],
	],
};

type FGBuildableResourceExtractor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableResourceExtractor_oil,
		docs_json_ts_0_8_3_3_classes_FGBuildableResourceExtractor_miner_mk2,
		docs_json_ts_0_8_3_3_classes_FGBuildableResourceExtractor_miner_mk3,
		docs_json_ts_0_8_3_3_classes_FGBuildableResourceExtractor_miner_mk1,
	],
};

type FGBuildableResourceSink = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceSink'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableResourceSink,
		...docs_json_ts_0_8_3_3_classes_FGBuildableResourceSink[],
	],
};

type FGBuildableResourceSinkShop = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceSinkShop'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableResourceSinkShop,
		...docs_json_ts_0_8_3_3_classes_FGBuildableResourceSinkShop[],
	],
};

type FGBuildableSnowDispenser = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSnowDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableSnowDispenser,
		...docs_json_ts_0_8_3_3_classes_FGBuildableSnowDispenser[],
	],
};

type FGBuildableSpaceElevator = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSpaceElevator'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildable_powered,
		...docs_json_ts_0_8_3_3_classes_FGBuildable_powered[],
	],
};

type FGBuildableSplitterSmart = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSplitterSmart'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableSplitterSmart,
		...docs_json_ts_0_8_3_3_classes_FGBuildableSplitterSmart[],
	],
};

type FGBuildableStair = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableStair'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableStair,
		...docs_json_ts_0_8_3_3_classes_FGBuildableStair[],
	],
};

type FGBuildableStorage = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableStorage'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableStorage,
		...docs_json_ts_0_8_3_3_classes_FGBuildableStorage[],
	],
};

type FGBuildableTradingPost = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTradingPost'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableTradingPost,
		...docs_json_ts_0_8_3_3_classes_FGBuildableTradingPost[],
	],
};

type FGBuildableTrainPlatformCargo = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTrainPlatformCargo'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableTrainPlatformCargo,
		...docs_json_ts_0_8_3_3_classes_FGBuildableTrainPlatformCargo[],
	],
};

type FGBuildableTrainPlatformEmpty = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTrainPlatformEmpty'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableTrainPlatformEmpty,
		...docs_json_ts_0_8_3_3_classes_FGBuildableTrainPlatformEmpty[],
	],
};

type FGBuildableWalkway = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWalkway'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableWalkway,
		...docs_json_ts_0_8_3_3_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWalkwayLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWalkwayLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableWalkwayLightweight,
		...docs_json_ts_0_8_3_3_classes_FGBuildableWalkwayLightweight[],
	],
};

type FGBuildableWall = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWall'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableWall,
		...docs_json_ts_0_8_3_3_classes_FGBuildableWall[],
	],
};

type FGBuildableWallLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWallLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableWall,
		...docs_json_ts_0_8_3_3_classes_FGBuildableWall[],
	],
};

type FGBuildableWaterPump = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWaterPump'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableWaterPump,
		...docs_json_ts_0_8_3_3_classes_FGBuildableWaterPump[],
	],
};

type FGBuildableWidgetSign = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWidgetSign'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableWidgetSign,
		...docs_json_ts_0_8_3_3_classes_FGBuildableWidgetSign[],
	],
};

type FGBuildableWire = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWire'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGBuildableWire,
		...docs_json_ts_0_8_3_3_classes_FGBuildableWire[],
	],
};

type FGChainsaw = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGChainsaw'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGChainsaw,
		...docs_json_ts_0_8_3_3_classes_FGChainsaw[],
	],
};

type FGChargedWeapon = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGChargedWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGChargedWeapon,
		...docs_json_ts_0_8_3_3_classes_FGChargedWeapon[],
	],
};

type FGConsumableDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGConsumableDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_6_1_5_classes_overridable_FGConsumableDescriptor,
		...docs_json_ts_0_6_1_5_classes_overridable_FGConsumableDescriptor[],
	],
};

type FGConsumableEquipment = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGConsumableEquipment'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGConsumableEquipment,
		...docs_json_ts_0_8_3_3_classes_FGConsumableEquipment[],
	],
};

type FGConveyorPoleStackable = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGConveyorPoleStackable'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGConveyorPoleStackable,
		...docs_json_ts_0_8_3_3_classes_FGConveyorPoleStackable[],
	],
};

type FGCustomizationRecipe = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGCustomizationRecipe'}${'\''}`,
	Classes: [
		docs_json_ts_0_5_2_1_classes_overridable_FGCustomizationRecipe,
		...docs_json_ts_0_5_2_1_classes_overridable_FGCustomizationRecipe[],
	],
};

type FGEquipmentDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGEquipmentDescriptor'}${'\''}`,
	Classes: [
		FGEquipmentDescriptor_Classes_item,
		...FGEquipmentDescriptor_Classes_item[],
	],
};

type FGEquipmentDescriptor_Classes_item = docs_json_ts_0_6_1_5_classes_FGItemDescriptor | docs_json_ts_0_6_1_5_classes_overridable_FGEquipmentDescriptor_Desc_GolfCartGold_C;

type FGEquipmentStunSpear = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGEquipmentStunSpear'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGEquipmentStunSpear_xenozapper,
		docs_json_ts_0_8_3_3_classes_FGEquipmentStunSpear_xenobasher,
		docs_json_ts_0_8_3_3_classes_FGEquipmentStunSpear_xenobasher,
	],
};

type FGEquipmentZipline = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGEquipmentZipline'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGEquipmentZipline,
		...docs_json_ts_0_8_3_3_classes_FGEquipmentZipline[],
	],
};

type FGGasMask = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGGasMask'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGGasMask,
		...docs_json_ts_0_8_3_3_classes_FGGasMask[],
	],
};

type FGGolfCartDispenser = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGGolfCartDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGGolfCartDispenser,
		...docs_json_ts_0_8_3_3_classes_FGGolfCartDispenser[],
	],
};

type FGHoverPack = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGHoverPack'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGHoverPack,
		...docs_json_ts_0_8_3_3_classes_FGHoverPack[],
	],
};

type FGItemDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGItemDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_6_1_5_classes_FGItemDescriptor,
		...docs_json_ts_0_6_1_5_classes_FGItemDescriptor[],
	],
};

type FGItemDescriptorBiomass = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGItemDescriptorBiomass'}${'\''}`,
	Classes: [
		docs_json_ts_0_6_1_5_classes_FGItemDescriptor,
		...docs_json_ts_0_6_1_5_classes_FGItemDescriptor[],
	],
};

type FGItemDescriptorNuclearFuel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGItemDescriptorNuclearFuel'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGItemDescriptorNuclearFuel,
		...docs_json_ts_0_8_3_3_classes_FGItemDescriptorNuclearFuel[],
	],
};

type FGJetPack = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGJetPack'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGJetPack,
		...docs_json_ts_0_8_3_3_classes_FGJetPack[],
	],
};

type FGJumpingStilts = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGJumpingStilts'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGJumpingStilts,
		...docs_json_ts_0_8_3_3_classes_FGJumpingStilts[],
	],
};

type FGObjectScanner = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGObjectScanner'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGObjectScanner,
		...docs_json_ts_0_8_3_3_classes_FGObjectScanner[],
	],
};

type FGParachute = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGParachute'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGParachute,
		...docs_json_ts_0_8_3_3_classes_FGParachute[],
	],
};

type FGPipeHyperStart = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGPipeHyperStart'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGPipeHyperStart,
		...docs_json_ts_0_8_3_3_classes_FGPipeHyperStart[],
	],
};

type FGPoleDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGPoleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_6_1_5_classes_overridable_FGPoleDescriptor,
		...docs_json_ts_0_6_1_5_classes_overridable_FGPoleDescriptor[],
	],
};

type FGPortableMinerDispenser = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGPortableMinerDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGPortableMinerDispenser,
		...docs_json_ts_0_8_3_3_classes_FGPortableMinerDispenser[],
	],
};

type FGRecipe = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGRecipe'}${'\''}`,
	Classes: [
		docs_json_ts_0_6_1_5_classes_overridable_FGRecipe,
		...docs_json_ts_0_6_1_5_classes_overridable_FGRecipe[],
	],
};

type FGResourceDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGResourceDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_6_1_5_classes_FGResourceDescriptor,
		...docs_json_ts_0_6_1_5_classes_FGResourceDescriptor[],
	],
};

type FGSchematic = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGSchematic'}${'\''}`,
	Classes: [
		FGSchematic_Classes_item,
		...FGSchematic_Classes_item[],
	],
};

type FGSchematic_Classes_item = docs_json_ts_0_8_3_3_classes_FGSchematic | docs_json_ts_0_8_3_3_classes_FGSchematic_with_described_unlocks;

type FGSuitBase = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGSuitBase'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGSuitBase,
		...docs_json_ts_0_8_3_3_classes_FGSuitBase[],
	],
};

type FGVehicleDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGVehicleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_Truck_C,
		docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_DroneTransport_C,
		docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_FreightWagon_C,
		docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_Locomotive_C,
		docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_Tractor_C,
		docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_Explorer_C,
		docs_json_ts_0_6_1_5_classes_overridable_FGVehicleDescriptor_Desc_CyberWagon_C,
	],
};

type FGWeapon = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_0_8_3_3_classes_FGWeapon_Equip_RebarGun_Projectile_C,
		docs_json_ts_0_8_3_3_classes_FGWeapon_Equip_Rifle_C,
	],
};

export type update8_docs = [
	FGItemDescriptor,
	FGBuildableDroneStation,
	FGCustomizationRecipe,
	FGBuildableBlueprintDesigner,
	docs_json_ts_0_6_1_5_FGBuildingDescriptor,
	FGRecipe,
	FGSchematic,
	FGBuildableWallLightweight,
	FGBuildableWall,
	FGBuildableDoor,
	FGBuildableCornerWall,
	FGResourceDescriptor,
	FGBuildableRailroadTrack,
	FGBuildable,
	FGBuildablePoleLightweight,
	FGPoleDescriptor,
	FGBuildableConveyorBelt,
	FGBuildableWire,
	FGBuildablePowerPole,
	FGBuildableTradingPost,
	FGEquipmentStunSpear,
	FGEquipmentDescriptor,
	FGBuildablePillarLightweight,
	FGBuildableFactory,
	FGBuildableWalkwayLightweight,
	FGBuildableWalkway,
	FGBuildableGeneratorFuel,
	FGBuildablePipelineSupport,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipelinePump,
	FGBuildablePipeReservoir,
	FGBuildableWaterPump,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGItemDescriptorBiomass,
	FGBuildableResourceExtractor,
	FGBuildableManufacturer,
	FGPortableMinerDispenser,
	FGItemDescriptorNuclearFuel,
	FGVehicleDescriptor,
	FGBuildableManufacturerVariablePower,
	FGBuildableGeneratorNuclear,
	FGBuildableFrackingExtractor,
	FGBuildableFrackingActivator,
	FGBuildableConveyorLift,
	FGConsumableEquipment,
	FGConsumableDescriptor,
	FGHoverPack,
	FGSuitBase,
	FGGasMask,
	FGBuildableRailroadSignal,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty,
	FGBuildableRailroadStation,
	FGJetPack,
	FGBuildableStorage,
	FGPipeHyperStart,
	FGBuildablePipeHyper,
	FGBuildablePowerStorage,
	FGBuildableDockingStation,
	FGConveyorPoleStackable,
	FGBuildableJumppad,
	FGChainsaw,
	FGObjectScanner,
	FGBuildableMAM,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableFoundation,
	FGBuildableFoundationLightweight,
	FGBuildableRamp,
	FGAmmoTypeProjectile,
	FGAmmoTypeSpreadshot,
	FGWeapon,
	FGBuildableGeneratorGeoThermal,
	FGBuildableSplitterSmart,
	FGAmmoTypeInstantHit,
	FGBuildablePriorityPowerSwitch,
	FGJumpingStilts,
	FGBuildableCircuitSwitch,
	FGEquipmentZipline,
	FGChargedWeapon,
	FGParachute,
	FGBuildableRadarTower,
	FGBuildableSnowDispenser,
	FGBuildableFactorySimpleProducer,
	FGBuildableLadder,
	FGBuildableStair,
	FGGolfCartDispenser,
	FGBuildablePassthrough,
	FGBuildableLightsControlPanel,
	FGBuildableLightSource,
	FGBuildableFloodlight,
	FGBuildableWidgetSign,
	FGBuildablePassthroughPipeHyper,
	FGBuildableBeamLightweight,
	FGBuildableFactoryBuilding,
	FGBuildableSpaceElevator,
];

export type {
	FGAmmoTypeInstantHit,
	FGAmmoTypeProjectile,
	FGAmmoTypeSpreadshot,
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
	FGBuildablePassthroughPipeHyper,
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
	FGBuildablePriorityPowerSwitch,
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
	FGChainsaw,
	FGChargedWeapon,
	FGConsumableDescriptor,
	FGConsumableEquipment,
	FGConveyorPoleStackable,
	FGCustomizationRecipe,
	FGEquipmentDescriptor,
	FGEquipmentDescriptor_Classes_item,
	FGEquipmentStunSpear,
	FGEquipmentZipline,
	FGGasMask,
	FGGolfCartDispenser,
	FGHoverPack,
	FGItemDescriptor,
	FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel,
	FGJetPack,
	FGJumpingStilts,
	FGObjectScanner,
	FGParachute,
	FGPipeHyperStart,
	FGPoleDescriptor,
	FGPortableMinerDispenser,
	FGRecipe,
	FGResourceDescriptor,
	FGSchematic,
	FGSchematic_Classes_item,
	FGSuitBase,
	FGVehicleDescriptor,
	FGWeapon,
};
