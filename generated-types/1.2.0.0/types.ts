/* eslint-disable @stylistic/max-len */

import type {
	FGChainsaw as docs_json_ts_1_1_2_2_FGChainsaw,
	FGEquipmentZipline as docs_json_ts_1_1_2_2_FGEquipmentZipline,
	FGGasMask as docs_json_ts_1_1_2_2_FGGasMask,
	FGGolfCartDispenser as docs_json_ts_1_1_2_2_FGGolfCartDispenser,
	FGJetPack as docs_json_ts_1_1_2_2_FGJetPack,
	FGJumpingStilts as docs_json_ts_1_1_2_2_FGJumpingStilts,
	FGPortableMinerDispenser as docs_json_ts_1_1_2_2_FGPortableMinerDispenser,
	FGSuitBase as docs_json_ts_1_1_2_2_FGSuitBase,
} from './../1.1.2.2/types.ts';

import type {
	FGAmmoTypeInstantHit_Desc_CartridgeChaos_C as docs_json_ts_1_2_0_0_classes_FGAmmoTypeInstantHit_Desc_CartridgeChaos_C,
	FGAmmoTypeInstantHit_Desc_CartridgeStandard_C as docs_json_ts_1_2_0_0_classes_FGAmmoTypeInstantHit_Desc_CartridgeStandard_C,
	FGAmmoTypeProjectile as docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
	FGAmmoTypeSpreadshot as docs_json_ts_1_2_0_0_classes_FGAmmoTypeSpreadshot,
	FGBuildable_occupied as docs_json_ts_1_2_0_0_classes_FGBuildable_occupied,
	FGBuildable_tiered as docs_json_ts_1_2_0_0_classes_FGBuildable_tiered,
	FGBuildable_unoccupied_and_untiered as docs_json_ts_1_2_0_0_classes_FGBuildable_unoccupied_and_untiered,
	FGBuildableAttachmentMerger as docs_json_ts_1_2_0_0_classes_FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter as docs_json_ts_1_2_0_0_classes_FGBuildableAttachmentSplitter,
	FGBuildableBarrierCorner as docs_json_ts_1_2_0_0_classes_FGBuildableBarrierCorner,
	FGBuildableBeam as docs_json_ts_1_2_0_0_classes_FGBuildableBeam,
	FGBuildableBlueprintDesigner as docs_json_ts_1_2_0_0_classes_FGBuildableBlueprintDesigner,
	FGBuildableCircuitSwitch as docs_json_ts_1_2_0_0_classes_FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt as docs_json_ts_1_2_0_0_classes_FGBuildableConveyorBelt,
	FGBuildableConveyorLift as docs_json_ts_1_2_0_0_classes_FGBuildableConveyorLift,
	FGBuildableConveyorMonitor as docs_json_ts_1_2_0_0_classes_FGBuildableConveyorMonitor,
	FGBuildableCornerWall as docs_json_ts_1_2_0_0_classes_FGBuildableCornerWall,
	FGBuildableDockingStation_Build_FluidTruckStation_C as docs_json_ts_1_2_0_0_classes_FGBuildableDockingStation_Build_FluidTruckStation_C,
	FGBuildableDockingStation_Build_TruckStation_C as docs_json_ts_1_2_0_0_classes_FGBuildableDockingStation_Build_TruckStation_C,
	FGBuildableDoor_automated as docs_json_ts_1_2_0_0_classes_FGBuildableDoor_automated,
	FGBuildableDoor_big0 as docs_json_ts_1_2_0_0_classes_FGBuildableDoor_big0,
	FGBuildableDoor_manual as docs_json_ts_1_2_0_0_classes_FGBuildableDoor_manual,
	FGBuildableDroneStation as docs_json_ts_1_2_0_0_classes_FGBuildableDroneStation,
	FGBuildableElevator as docs_json_ts_1_2_0_0_classes_FGBuildableElevator,
	FGBuildableElevatorFloorStop as docs_json_ts_1_2_0_0_classes_FGBuildableElevatorFloorStop,
	FGBuildableFactory_jump_pad as docs_json_ts_1_2_0_0_classes_FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad as docs_json_ts_1_2_0_0_classes_FGBuildableFactory_landing_pad,
	FGBuildableFactory_not_pad as docs_json_ts_1_2_0_0_classes_FGBuildableFactory_not_pad,
	FGBuildableFactoryBuilding as docs_json_ts_1_2_0_0_classes_FGBuildableFactoryBuilding,
	FGBuildableFactorySimpleProducer as docs_json_ts_1_2_0_0_classes_FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight as docs_json_ts_1_2_0_0_classes_FGBuildableFloodlight,
	FGBuildableFoundationLightweight as docs_json_ts_1_2_0_0_classes_FGBuildableFoundationLightweight,
	FGBuildableFrackingActivator as docs_json_ts_1_2_0_0_classes_FGBuildableFrackingActivator,
	FGBuildableFrackingExtractor as docs_json_ts_1_2_0_0_classes_FGBuildableFrackingExtractor,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_1_2_0_0_classes_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_1_2_0_0_classes_FGBuildableLadder,
	FGBuildableLightsControlPanel as docs_json_ts_1_2_0_0_classes_FGBuildableLightsControlPanel,
	FGBuildableLightSource_Build_CeilingLight_C as docs_json_ts_1_2_0_0_classes_FGBuildableLightSource_Build_CeilingLight_C,
	FGBuildableLightSource_Build_StreetLight_C as docs_json_ts_1_2_0_0_classes_FGBuildableLightSource_Build_StreetLight_C,
	FGBuildableMAM as docs_json_ts_1_2_0_0_classes_FGBuildableMAM,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Blender_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_Blender_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_Converter_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_Converter_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_HadronCollider_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_HadronCollider_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_QuantumEncoder_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_QuantumEncoder_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildableMergerPriority as docs_json_ts_1_2_0_0_classes_FGBuildableMergerPriority,
	FGBuildablePassthrough as docs_json_ts_1_2_0_0_classes_FGBuildablePassthrough,
	FGBuildablePillarLightweight as docs_json_ts_1_2_0_0_classes_FGBuildablePillarLightweight,
	FGBuildablePipeHyper as docs_json_ts_1_2_0_0_classes_FGBuildablePipeHyper,
	FGBuildablePipeHyperJunction as docs_json_ts_1_2_0_0_classes_FGBuildablePipeHyperJunction,
	FGBuildablePipeline as docs_json_ts_1_2_0_0_classes_FGBuildablePipeline,
	FGBuildablePipelineJunction as docs_json_ts_1_2_0_0_classes_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_1_2_0_0_classes_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_1_2_0_0_classes_FGBuildablePipelinePump_valve,
	FGBuildablePipeReservoir as docs_json_ts_1_2_0_0_classes_FGBuildablePipeReservoir,
	FGBuildablePoleBase as docs_json_ts_1_2_0_0_classes_FGBuildablePoleBase,
	FGBuildablePoleConveyor as docs_json_ts_1_2_0_0_classes_FGBuildablePoleConveyor,
	FGBuildablePolePipe as docs_json_ts_1_2_0_0_classes_FGBuildablePolePipe,
	FGBuildablePoleStackable as docs_json_ts_1_2_0_0_classes_FGBuildablePoleStackable,
	FGBuildablePortal as docs_json_ts_1_2_0_0_classes_FGBuildablePortal,
	FGBuildablePortalSatellite as docs_json_ts_1_2_0_0_classes_FGBuildablePortalSatellite,
	FGBuildablePowerBooster as docs_json_ts_1_2_0_0_classes_FGBuildablePowerBooster,
	FGBuildablePowerPole as docs_json_ts_1_2_0_0_classes_FGBuildablePowerPole,
	FGBuildablePowerStorage as docs_json_ts_1_2_0_0_classes_FGBuildablePowerStorage,
	FGBuildablePriorityPowerSwitch as docs_json_ts_1_2_0_0_classes_FGBuildablePriorityPowerSwitch,
	FGBuildableRadarTower as docs_json_ts_1_2_0_0_classes_FGBuildableRadarTower,
	FGBuildableRailroadAttachment as docs_json_ts_1_2_0_0_classes_FGBuildableRailroadAttachment,
	FGBuildableRailroadSignal_block as docs_json_ts_1_2_0_0_classes_FGBuildableRailroadSignal_block,
	FGBuildableRailroadSignal_path as docs_json_ts_1_2_0_0_classes_FGBuildableRailroadSignal_path,
	FGBuildableRailroadStation as docs_json_ts_1_2_0_0_classes_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_1_2_0_0_classes_FGBuildableRailroadTrack,
	FGBuildableRampLightweight as docs_json_ts_1_2_0_0_classes_FGBuildableRampLightweight,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_1_2_0_0_classes_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_1_2_0_0_classes_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_1_2_0_0_classes_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_1_2_0_0_classes_FGBuildableResourceExtractor_oil,
	FGBuildableResourceSink as docs_json_ts_1_2_0_0_classes_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_1_2_0_0_classes_FGBuildableResourceSinkShop,
	FGBuildableSnowCannon as docs_json_ts_1_2_0_0_classes_FGBuildableSnowCannon,
	FGBuildableSnowDispenser as docs_json_ts_1_2_0_0_classes_FGBuildableSnowDispenser,
	FGBuildableSpaceElevator as docs_json_ts_1_2_0_0_classes_FGBuildableSpaceElevator,
	FGBuildableSplitterSmart as docs_json_ts_1_2_0_0_classes_FGBuildableSplitterSmart,
	FGBuildableStackableShelf as docs_json_ts_1_2_0_0_classes_FGBuildableStackableShelf,
	FGBuildableStair as docs_json_ts_1_2_0_0_classes_FGBuildableStair,
	FGBuildableStorage as docs_json_ts_1_2_0_0_classes_FGBuildableStorage,
	FGBuildableTradingPost as docs_json_ts_1_2_0_0_classes_FGBuildableTradingPost,
	FGBuildableTrainPlatformCargo as docs_json_ts_1_2_0_0_classes_FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty as docs_json_ts_1_2_0_0_classes_FGBuildableTrainPlatformEmpty,
	FGBuildableWalkway as docs_json_ts_1_2_0_0_classes_FGBuildableWalkway,
	FGBuildableWall as docs_json_ts_1_2_0_0_classes_FGBuildableWall,
	FGBuildableWallLightweight as docs_json_ts_1_2_0_0_classes_FGBuildableWallLightweight,
	FGBuildableWaterPump as docs_json_ts_1_2_0_0_classes_FGBuildableWaterPump,
	FGBuildableWidgetSign as docs_json_ts_1_2_0_0_classes_FGBuildableWidgetSign,
	FGBuildableWire as docs_json_ts_1_2_0_0_classes_FGBuildableWire,
	FGBuildingDescriptor as docs_json_ts_1_2_0_0_classes_FGBuildingDescriptor,
	FGCentralStorageContainer as docs_json_ts_1_2_0_0_classes_FGCentralStorageContainer,
	FGConsumableDescriptor as docs_json_ts_1_2_0_0_classes_FGConsumableDescriptor,
	FGConsumableEquipment_base as docs_json_ts_1_2_0_0_classes_FGConsumableEquipment_base,
	FGConsumableEquipment_medkit as docs_json_ts_1_2_0_0_classes_FGConsumableEquipment_medkit,
	FGCustomizationRecipe as docs_json_ts_1_2_0_0_classes_FGCustomizationRecipe,
	FGEquipmentDescriptor as docs_json_ts_1_2_0_0_classes_FGEquipmentDescriptor,
	FGEquipmentStunSpear_xenobasher as docs_json_ts_1_2_0_0_classes_FGEquipmentStunSpear_xenobasher,
	FGEquipmentStunSpear_xenozapper as docs_json_ts_1_2_0_0_classes_FGEquipmentStunSpear_xenozapper,
	FGHoverPack as docs_json_ts_1_2_0_0_classes_FGHoverPack,
	FGItemDescriptor_non_sinkable as docs_json_ts_1_2_0_0_classes_FGItemDescriptor_non_sinkable,
	FGItemDescriptor_sinkable as docs_json_ts_1_2_0_0_classes_FGItemDescriptor_sinkable,
	FGItemDescriptorBiomass as docs_json_ts_1_2_0_0_classes_FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel as docs_json_ts_1_2_0_0_classes_FGItemDescriptorNuclearFuel,
	FGItemDescriptorPowerBoosterFuel as docs_json_ts_1_2_0_0_classes_FGItemDescriptorPowerBoosterFuel,
	FGNobeliskDetonator as docs_json_ts_1_2_0_0_classes_FGNobeliskDetonator,
	FGObjectScanner as docs_json_ts_1_2_0_0_classes_FGObjectScanner,
	FGParachute as docs_json_ts_1_2_0_0_classes_FGParachute,
	FGPipeHyperStart as docs_json_ts_1_2_0_0_classes_FGPipeHyperStart,
	FGPowerShardDescriptor as docs_json_ts_1_2_0_0_classes_FGPowerShardDescriptor,
	FGRecipe as docs_json_ts_1_2_0_0_classes_FGRecipe,
	FGResourceDescriptor as docs_json_ts_1_2_0_0_classes_FGResourceDescriptor,
	FGSchematic_with_described_unlocks as docs_json_ts_1_2_0_0_classes_FGSchematic_with_described_unlocks,
	FGSchematic_without_described_unlocks as docs_json_ts_1_2_0_0_classes_FGSchematic_without_described_unlocks,
	FGVehicleDescriptor_Desc_CyberWagon_C as docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_CyberWagon_C,
	FGVehicleDescriptor_Desc_DroneTransport_C as docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_DroneTransport_C,
	FGVehicleDescriptor_Desc_Explorer_C as docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_Explorer_C,
	FGVehicleDescriptor_Desc_FluidTruck_C as docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_FluidTruck_C,
	FGVehicleDescriptor_Desc_FreightWagon_C as docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_FreightWagon_C,
	FGVehicleDescriptor_Desc_Locomotive_C as docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_Locomotive_C,
	FGVehicleDescriptor_Desc_Tractor_C as docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_Tractor_C,
	FGVehicleDescriptor_Desc_Truck_C as docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_Truck_C,
	FGVehiclePathSegment as docs_json_ts_1_2_0_0_classes_FGVehiclePathSegment,
	FGWeapon_Equip_RebarGun_Projectile_C as docs_json_ts_1_2_0_0_classes_FGWeapon_Equip_RebarGun_Projectile_C,
	FGWeapon_Equip_Rifle_C as docs_json_ts_1_2_0_0_classes_FGWeapon_Equip_Rifle_C,
} from './classes.ts';

type FGAmmoTypeInstantHit = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeInstantHit'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeInstantHit_Desc_CartridgeChaos_C,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeInstantHit_Desc_CartridgeStandard_C,
	],
};

type FGAmmoTypeProjectile = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeProjectile'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile,
		...docs_json_ts_1_2_0_0_classes_FGAmmoTypeProjectile[],
	],
};

type FGAmmoTypeSpreadshot = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeSpreadshot'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGAmmoTypeSpreadshot,
		...docs_json_ts_1_2_0_0_classes_FGAmmoTypeSpreadshot[],
	],
};

type FGBuildable = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildable'}${'\''}`,
	Classes: [
		FGBuildable_Classes_item,
		...FGBuildable_Classes_item[],
	],
};

type FGBuildable_Classes_item = docs_json_ts_1_2_0_0_classes_FGBuildable_occupied | docs_json_ts_1_2_0_0_classes_FGBuildable_tiered | docs_json_ts_1_2_0_0_classes_FGBuildable_unoccupied_and_untiered;

type FGBuildableAttachmentMerger = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableAttachmentMerger'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableAttachmentMerger,
		...docs_json_ts_1_2_0_0_classes_FGBuildableAttachmentMerger[],
	],
};

type FGBuildableAttachmentSplitter = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableAttachmentSplitter'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableAttachmentSplitter,
		...docs_json_ts_1_2_0_0_classes_FGBuildableAttachmentSplitter[],
	],
};

type FGBuildableBarrierCorner = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableBarrierCorner'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableBarrierCorner,
		...docs_json_ts_1_2_0_0_classes_FGBuildableBarrierCorner[],
	],
};

type FGBuildableBeam = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableBeam'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableBeam,
		...docs_json_ts_1_2_0_0_classes_FGBuildableBeam[],
	],
};

type FGBuildableBlueprintDesigner = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableBlueprintDesigner'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableBlueprintDesigner,
		...docs_json_ts_1_2_0_0_classes_FGBuildableBlueprintDesigner[],
	],
};

type FGBuildableCircuitSwitch = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableCircuitSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableCircuitSwitch,
		...docs_json_ts_1_2_0_0_classes_FGBuildableCircuitSwitch[],
	],
};

type FGBuildableConveyorBelt = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableConveyorBelt'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableConveyorBelt,
		...docs_json_ts_1_2_0_0_classes_FGBuildableConveyorBelt[],
	],
};

type FGBuildableConveyorLift = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableConveyorLift'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableConveyorLift,
		...docs_json_ts_1_2_0_0_classes_FGBuildableConveyorLift[],
	],
};

type FGBuildableConveyorMonitor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableConveyorMonitor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableConveyorMonitor,
		...docs_json_ts_1_2_0_0_classes_FGBuildableConveyorMonitor[],
	],
};

type FGBuildableCornerWall = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableCornerWall'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableCornerWall,
		...docs_json_ts_1_2_0_0_classes_FGBuildableCornerWall[],
	],
};

type FGBuildableCornerWallLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableCornerWallLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableCornerWall,
		...docs_json_ts_1_2_0_0_classes_FGBuildableCornerWall[],
	],
};

type FGBuildableDockingStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDockingStation'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableDockingStation_Build_FluidTruckStation_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableDockingStation_Build_TruckStation_C,
	],
};

type FGBuildableDoor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDoor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_automated,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_big0,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_big0,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_manual,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_manual,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_manual,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_manual,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_manual,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_manual,
		docs_json_ts_1_2_0_0_classes_FGBuildableDoor_automated,
	],
};

type FGBuildableDroneStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDroneStation'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableDroneStation,
		...docs_json_ts_1_2_0_0_classes_FGBuildableDroneStation[],
	],
};

type FGBuildableElevator = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableElevator'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableElevator,
		...docs_json_ts_1_2_0_0_classes_FGBuildableElevator[],
	],
};

type FGBuildableElevatorFloorStop = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableElevatorFloorStop'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableElevatorFloorStop,
		...docs_json_ts_1_2_0_0_classes_FGBuildableElevatorFloorStop[],
	],
};

type FGBuildableFactory = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactory'}${'\''}`,
	Classes: [
		FGBuildableFactory_Classes_item,
		...FGBuildableFactory_Classes_item[],
	],
};

type FGBuildableFactory_Classes_item = docs_json_ts_1_2_0_0_classes_FGBuildableFactory_jump_pad | docs_json_ts_1_2_0_0_classes_FGBuildableFactory_landing_pad | docs_json_ts_1_2_0_0_classes_FGBuildableFactory_not_pad;

type FGBuildableFactoryBuilding = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactoryBuilding'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableFactoryBuilding,
		...docs_json_ts_1_2_0_0_classes_FGBuildableFactoryBuilding[],
	],
};

type FGBuildableFactorySimpleProducer = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactorySimpleProducer'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableFactorySimpleProducer,
		...docs_json_ts_1_2_0_0_classes_FGBuildableFactorySimpleProducer[],
	],
};

type FGBuildableFloodlight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFloodlight'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableFloodlight,
		...docs_json_ts_1_2_0_0_classes_FGBuildableFloodlight[],
	],
};

type FGBuildableFoundationLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFoundationLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableFoundationLightweight,
		...docs_json_ts_1_2_0_0_classes_FGBuildableFoundationLightweight[],
	],
};

type FGBuildableFrackingActivator = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFrackingActivator'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableFrackingActivator,
		...docs_json_ts_1_2_0_0_classes_FGBuildableFrackingActivator[],
	],
};

type FGBuildableFrackingExtractor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFrackingExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableFrackingExtractor,
		...docs_json_ts_1_2_0_0_classes_FGBuildableFrackingExtractor[],
	],
};

type FGBuildableGeneratorFuel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorFuel'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorFuel_biomass,
		docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorFuel_coal,
		docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorFuel_fuel,
	],
};

type FGBuildableGeneratorGeoThermal = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorGeoThermal'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorGeoThermal,
		...docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorGeoThermal[],
	],
};

type FGBuildableGeneratorNuclear = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorNuclear'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorNuclear,
		...docs_json_ts_1_2_0_0_classes_FGBuildableGeneratorNuclear[],
	],
};

type FGBuildableJumppad = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableJumppad'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableJumppad,
		...docs_json_ts_1_2_0_0_classes_FGBuildableJumppad[],
	],
};

type FGBuildableLadder = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLadder'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableLadder,
		...docs_json_ts_1_2_0_0_classes_FGBuildableLadder[],
	],
};

type FGBuildableLightsControlPanel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLightsControlPanel'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableLightsControlPanel,
		...docs_json_ts_1_2_0_0_classes_FGBuildableLightsControlPanel[],
	],
};

type FGBuildableLightSource = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLightSource'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableLightSource_Build_StreetLight_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableLightSource_Build_CeilingLight_C,
	],
};

type FGBuildableMAM = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableMAM'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableMAM,
		...docs_json_ts_1_2_0_0_classes_FGBuildableMAM[],
	],
};

type FGBuildableManufacturer = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableManufacturer'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_OilRefinery_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_Packager_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_Blender_C,
	],
};

type FGBuildableManufacturerVariablePower = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableManufacturerVariablePower'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_HadronCollider_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_Converter_C,
		docs_json_ts_1_2_0_0_classes_FGBuildableManufacturer_Build_QuantumEncoder_C,
	],
};

type FGBuildableMergerPriority = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableMergerPriority'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableMergerPriority,
		...docs_json_ts_1_2_0_0_classes_FGBuildableMergerPriority[],
	],
};

type FGBuildablePassthrough = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePassthrough'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePassthrough,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePassthrough[],
	],
};

type FGBuildablePassthroughPipeHyper = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePassthroughPipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePassthrough,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePassthrough[],
	],
};

type FGBuildablePillarLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePillarLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePillarLightweight,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePillarLightweight[],
	],
};

type FGBuildablePipeHyper = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePipeHyper,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePipeHyper[],
	],
};

type FGBuildablePipeHyperJunction = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeHyperJunction'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePipeHyperJunction,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePipeHyperJunction[],
	],
};

type FGBuildablePipeline = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeline'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePipeline,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePipeline[],
	],
};

type FGBuildablePipelineJunction = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipelineJunction'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePipelineJunction,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePipelineJunction[],
	],
};

type FGBuildablePipelinePump = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipelinePump'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePipelinePump_valve,
		docs_json_ts_1_2_0_0_classes_FGBuildablePipelinePump_pump,
		docs_json_ts_1_2_0_0_classes_FGBuildablePipelinePump_pump,
	],
};

type FGBuildablePipeReservoir = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeReservoir'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePipeReservoir,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePipeReservoir[],
	],
};

type FGBuildablePoleBase = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePoleBase'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePoleBase,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePoleBase[],
	],
};

type FGBuildablePoleConveyor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePoleConveyor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePoleConveyor,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePoleConveyor[],
	],
};

type FGBuildablePolePipe = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePolePipe'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePolePipe,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePolePipe[],
	],
};

type FGBuildablePoleStackable = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePoleStackable'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePoleStackable,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePoleStackable[],
	],
};

type FGBuildablePortal = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePortal'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePortal,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePortal[],
	],
};

type FGBuildablePortalSatellite = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePortalSatellite'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePortalSatellite,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePortalSatellite[],
	],
};

type FGBuildablePowerBooster = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePowerBooster'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePowerBooster,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePowerBooster[],
	],
};

type FGBuildablePowerPole = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePowerPole'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePowerPole,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePowerPole[],
	],
};

type FGBuildablePowerStorage = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePowerStorage'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePowerStorage,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePowerStorage[],
	],
};

type FGBuildablePriorityPowerSwitch = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePriorityPowerSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildablePriorityPowerSwitch,
		...docs_json_ts_1_2_0_0_classes_FGBuildablePriorityPowerSwitch[],
	],
};

type FGBuildableRadarTower = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRadarTower'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableRadarTower,
		...docs_json_ts_1_2_0_0_classes_FGBuildableRadarTower[],
	],
};

type FGBuildableRailroadAttachment = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadAttachment'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableRailroadAttachment,
		...docs_json_ts_1_2_0_0_classes_FGBuildableRailroadAttachment[],
	],
};

type FGBuildableRailroadSignal = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadSignal'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableRailroadSignal_path,
		docs_json_ts_1_2_0_0_classes_FGBuildableRailroadSignal_block,
	],
};

type FGBuildableRailroadStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadStation'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableRailroadStation,
		...docs_json_ts_1_2_0_0_classes_FGBuildableRailroadStation[],
	],
};

type FGBuildableRailroadTrack = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadTrack'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableRailroadTrack,
		...docs_json_ts_1_2_0_0_classes_FGBuildableRailroadTrack[],
	],
};

type FGBuildableRampLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRampLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableRampLightweight,
		...docs_json_ts_1_2_0_0_classes_FGBuildableRampLightweight[],
	],
};

type FGBuildableResourceExtractor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableResourceExtractor_miner_mk1,
		docs_json_ts_1_2_0_0_classes_FGBuildableResourceExtractor_oil,
		docs_json_ts_1_2_0_0_classes_FGBuildableResourceExtractor_miner_mk2,
		docs_json_ts_1_2_0_0_classes_FGBuildableResourceExtractor_miner_mk3,
	],
};

type FGBuildableResourceSink = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceSink'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableResourceSink,
		...docs_json_ts_1_2_0_0_classes_FGBuildableResourceSink[],
	],
};

type FGBuildableResourceSinkShop = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceSinkShop'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableResourceSinkShop,
		...docs_json_ts_1_2_0_0_classes_FGBuildableResourceSinkShop[],
	],
};

type FGBuildableSnowCannon = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSnowCannon'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableSnowCannon,
		...docs_json_ts_1_2_0_0_classes_FGBuildableSnowCannon[],
	],
};

type FGBuildableSnowDispenser = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSnowDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableSnowDispenser,
		...docs_json_ts_1_2_0_0_classes_FGBuildableSnowDispenser[],
	],
};

type FGBuildableSpaceElevator = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSpaceElevator'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableSpaceElevator,
		...docs_json_ts_1_2_0_0_classes_FGBuildableSpaceElevator[],
	],
};

type FGBuildableSplitterSmart = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSplitterSmart'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableSplitterSmart,
		...docs_json_ts_1_2_0_0_classes_FGBuildableSplitterSmart[],
	],
};

type FGBuildableStackableShelf = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableStackableShelf'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableStackableShelf,
		...docs_json_ts_1_2_0_0_classes_FGBuildableStackableShelf[],
	],
};

type FGBuildableStair = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableStair'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableStair,
		...docs_json_ts_1_2_0_0_classes_FGBuildableStair[],
	],
};

type FGBuildableStorage = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableStorage'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableStorage,
		...docs_json_ts_1_2_0_0_classes_FGBuildableStorage[],
	],
};

type FGBuildableTradingPost = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTradingPost'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableTradingPost,
		...docs_json_ts_1_2_0_0_classes_FGBuildableTradingPost[],
	],
};

type FGBuildableTrainPlatformCargo = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTrainPlatformCargo'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableTrainPlatformCargo,
		...docs_json_ts_1_2_0_0_classes_FGBuildableTrainPlatformCargo[],
	],
};

type FGBuildableTrainPlatformEmpty = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTrainPlatformEmpty'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableTrainPlatformEmpty,
		...docs_json_ts_1_2_0_0_classes_FGBuildableTrainPlatformEmpty[],
	],
};

type FGBuildableWalkway = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWalkway'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableWalkway,
		...docs_json_ts_1_2_0_0_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWalkwayLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWalkwayLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableWalkway,
		...docs_json_ts_1_2_0_0_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWall = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWall'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableWall,
		...docs_json_ts_1_2_0_0_classes_FGBuildableWall[],
	],
};

type FGBuildableWallLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWallLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableWallLightweight,
		...docs_json_ts_1_2_0_0_classes_FGBuildableWallLightweight[],
	],
};

type FGBuildableWaterPump = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWaterPump'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableWaterPump,
		...docs_json_ts_1_2_0_0_classes_FGBuildableWaterPump[],
	],
};

type FGBuildableWidgetSign = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWidgetSign'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableWidgetSign,
		...docs_json_ts_1_2_0_0_classes_FGBuildableWidgetSign[],
	],
};

type FGBuildableWire = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWire'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildableWire,
		...docs_json_ts_1_2_0_0_classes_FGBuildableWire[],
	],
};

type FGBuildingDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildingDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGBuildingDescriptor,
		...docs_json_ts_1_2_0_0_classes_FGBuildingDescriptor[],
	],
};

type FGCentralStorageContainer = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGCentralStorageContainer'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGCentralStorageContainer,
		...docs_json_ts_1_2_0_0_classes_FGCentralStorageContainer[],
	],
};

type FGChargedWeapon = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGChargedWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGNobeliskDetonator,
		...docs_json_ts_1_2_0_0_classes_FGNobeliskDetonator[],
	],
};

type FGConsumableDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGConsumableDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGConsumableDescriptor,
		...docs_json_ts_1_2_0_0_classes_FGConsumableDescriptor[],
	],
};

type FGConsumableEquipment = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGConsumableEquipment'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGConsumableEquipment_base,
		docs_json_ts_1_2_0_0_classes_FGConsumableEquipment_medkit,
	],
};

type FGCustomizationRecipe = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGCustomizationRecipe'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGCustomizationRecipe,
		...docs_json_ts_1_2_0_0_classes_FGCustomizationRecipe[],
	],
};

type FGEquipmentDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGEquipmentDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGEquipmentDescriptor,
		...docs_json_ts_1_2_0_0_classes_FGEquipmentDescriptor[],
	],
};

type FGEquipmentStunSpear = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGEquipmentStunSpear'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGEquipmentStunSpear_xenozapper,
		docs_json_ts_1_2_0_0_classes_FGEquipmentStunSpear_xenobasher,
		docs_json_ts_1_2_0_0_classes_FGEquipmentStunSpear_xenobasher,
	],
};

type FGHoverPack = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGHoverPack'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGHoverPack,
		...docs_json_ts_1_2_0_0_classes_FGHoverPack[],
	],
};

type FGItemDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGItemDescriptor'}${'\''}`,
	Classes: [
		FGItemDescriptor_item,
		...FGItemDescriptor_item[],
	],
};

type FGItemDescriptor_item = docs_json_ts_1_2_0_0_classes_FGItemDescriptor_non_sinkable | docs_json_ts_1_2_0_0_classes_FGItemDescriptor_sinkable;

type FGItemDescriptorBiomass = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGItemDescriptorBiomass'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGItemDescriptorBiomass,
		...docs_json_ts_1_2_0_0_classes_FGItemDescriptorBiomass[],
	],
};

type FGItemDescriptorNuclearFuel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGItemDescriptorNuclearFuel'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGItemDescriptorNuclearFuel,
		...docs_json_ts_1_2_0_0_classes_FGItemDescriptorNuclearFuel[],
	],
};

type FGItemDescriptorPowerBoosterFuel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGItemDescriptorPowerBoosterFuel'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGItemDescriptorPowerBoosterFuel,
		...docs_json_ts_1_2_0_0_classes_FGItemDescriptorPowerBoosterFuel[],
	],
};

type FGObjectScanner = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGObjectScanner'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGObjectScanner,
		...docs_json_ts_1_2_0_0_classes_FGObjectScanner[],
	],
};

type FGParachute = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGParachute'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGParachute,
		...docs_json_ts_1_2_0_0_classes_FGParachute[],
	],
};

type FGPipeHyperStart = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGPipeHyperStart'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGPipeHyperStart,
		...docs_json_ts_1_2_0_0_classes_FGPipeHyperStart[],
	],
};

type FGPowerShardDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGPowerShardDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGPowerShardDescriptor,
		...docs_json_ts_1_2_0_0_classes_FGPowerShardDescriptor[],
	],
};

type FGRecipe = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGRecipe'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGRecipe,
		...docs_json_ts_1_2_0_0_classes_FGRecipe[],
	],
};

type FGResourceDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGResourceDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGResourceDescriptor,
		...docs_json_ts_1_2_0_0_classes_FGResourceDescriptor[],
	],
};

type FGSchematic = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGSchematic'}${'\''}`,
	Classes: [
		FGSchematic_Classes_item,
		...FGSchematic_Classes_item[],
	],
};

type FGSchematic_Classes_item = docs_json_ts_1_2_0_0_classes_FGSchematic_without_described_unlocks | docs_json_ts_1_2_0_0_classes_FGSchematic_with_described_unlocks;

type FGVehicleDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGVehicleDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_CyberWagon_C,
		docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_DroneTransport_C,
		docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_Explorer_C,
		docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_FreightWagon_C,
		docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_Locomotive_C,
		docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_FluidTruck_C,
		docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_Truck_C,
		docs_json_ts_1_2_0_0_classes_FGVehicleDescriptor_Desc_Tractor_C,
	],
};

type FGVehiclePathSegment = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGVehiclePathSegment'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGVehiclePathSegment,
		...docs_json_ts_1_2_0_0_classes_FGVehiclePathSegment[],
	],
};

type FGWeapon = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_1_2_0_0_classes_FGWeapon_Equip_RebarGun_Projectile_C,
		docs_json_ts_1_2_0_0_classes_FGWeapon_Equip_Rifle_C,
	],
};

export type release_1_2_docs = [
	FGItemDescriptor,
	FGResourceDescriptor,
	FGBuildableWallLightweight,
	FGRecipe,
	FGConsumableEquipment,
	FGEquipmentStunSpear,
	FGEquipmentDescriptor,
	FGCustomizationRecipe,
	FGObjectScanner,
	FGItemDescriptorBiomass,
	FGConsumableDescriptor,
	FGBuildable,
	FGBuildingDescriptor,
	FGVehiclePathSegment,
	FGAmmoTypeProjectile,
	FGBuildableRailroadTrack,
	FGBuildableBeam,
	FGWeapon,
	FGAmmoTypeSpreadshot,
	FGAmmoTypeInstantHit,
	docs_json_ts_1_1_2_2_FGGasMask,
	docs_json_ts_1_1_2_2_FGSuitBase,
	docs_json_ts_1_1_2_2_FGJetPack,
	FGChargedWeapon,
	FGBuildableTradingPost,
	FGBuildablePoleConveyor,
	FGBuildablePoleBase,
	FGBuildableConveyorBelt,
	FGBuildablePowerPole,
	FGBuildableWire,
	FGSchematic,
	FGBuildableStair,
	FGBuildableWalkwayLightweight,
	FGBuildableWalkway,
	FGBuildableWall,
	FGBuildablePillarLightweight,
	FGBuildableFactory,
	FGBuildableGeneratorFuel,
	FGBuildableStorage,
	FGBuildableResourceExtractor,
	docs_json_ts_1_1_2_2_FGPortableMinerDispenser,
	FGBuildableManufacturer,
	FGBuildableSpaceElevator,
	FGBuildableCornerWall,
	FGBuildableDoor,
	FGBuildableFoundationLightweight,
	FGBuildableRampLightweight,
	FGBuildableLadder,
	FGBuildablePipeReservoir,
	FGBuildablePipelinePump,
	FGBuildablePoleStackable,
	FGBuildablePolePipe,
	FGBuildablePassthrough,
	FGPipeHyperStart,
	FGBuildablePipeHyperJunction,
	FGBuildablePipeHyper,
	FGBuildablePipelineJunction,
	FGBuildableWaterPump,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGBuildablePipeline,
	FGItemDescriptorNuclearFuel,
	FGBuildableDroneStation,
	docs_json_ts_1_1_2_2_FGGolfCartDispenser,
	FGVehicleDescriptor,
	FGBuildableLightSource,
	FGBuildableFloodlight,
	FGBuildableStackableShelf,
	FGBuildableCornerWallLightweight,
	FGBuildableElevatorFloorStop,
	FGBuildableElevator,
	FGBuildableLightsControlPanel,
	FGBuildableWidgetSign,
	FGBuildablePassthroughPipeHyper,
	FGBuildableBarrierCorner,
	FGBuildableConveyorMonitor,
	FGBuildableFactoryBuilding,
	FGBuildableManufacturerVariablePower,
	FGBuildableConveyorLift,
	FGPowerShardDescriptor,
	FGBuildableFrackingExtractor,
	FGBuildableFrackingActivator,
	FGBuildableGeneratorNuclear,
	docs_json_ts_1_1_2_2_FGChainsaw,
	FGBuildableSnowDispenser,
	FGBuildableSnowCannon,
	FGBuildableFactorySimpleProducer,
	FGBuildableMergerPriority,
	FGBuildableRadarTower,
	FGParachute,
	FGBuildableGeneratorGeoThermal,
	FGBuildableSplitterSmart,
	FGBuildablePriorityPowerSwitch,
	docs_json_ts_1_1_2_2_FGJumpingStilts,
	FGBuildableCircuitSwitch,
	docs_json_ts_1_1_2_2_FGEquipmentZipline,
	FGBuildablePowerBooster,
	FGCentralStorageContainer,
	FGItemDescriptorPowerBoosterFuel,
	FGBuildablePortal,
	FGBuildablePortalSatellite,
	FGBuildableBlueprintDesigner,
	FGHoverPack,
	FGBuildableRailroadSignal,
	FGBuildableRailroadAttachment,
	FGBuildableRailroadStation,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty,
	FGBuildableDockingStation,
	FGBuildablePowerStorage,
	FGBuildableJumppad,
	FGBuildableMAM,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
];

export type {
	FGAmmoTypeInstantHit,
	FGAmmoTypeProjectile,
	FGAmmoTypeSpreadshot,
	FGBuildable,
	FGBuildable_Classes_item,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableBarrierCorner,
	FGBuildableBeam,
	FGBuildableBlueprintDesigner,
	FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt,
	FGBuildableConveyorLift,
	FGBuildableConveyorMonitor,
	FGBuildableCornerWall,
	FGBuildableCornerWallLightweight,
	FGBuildableDockingStation,
	FGBuildableDoor,
	FGBuildableDroneStation,
	FGBuildableElevator,
	FGBuildableElevatorFloorStop,
	FGBuildableFactory,
	FGBuildableFactory_Classes_item,
	FGBuildableFactoryBuilding,
	FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight,
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
	FGBuildableMergerPriority,
	FGBuildablePassthrough,
	FGBuildablePassthroughPipeHyper,
	FGBuildablePillarLightweight,
	FGBuildablePipeHyper,
	FGBuildablePipeHyperJunction,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipelinePump,
	FGBuildablePipeReservoir,
	FGBuildablePoleBase,
	FGBuildablePoleConveyor,
	FGBuildablePolePipe,
	FGBuildablePoleStackable,
	FGBuildablePortal,
	FGBuildablePortalSatellite,
	FGBuildablePowerBooster,
	FGBuildablePowerPole,
	FGBuildablePowerStorage,
	FGBuildablePriorityPowerSwitch,
	FGBuildableRadarTower,
	FGBuildableRailroadAttachment,
	FGBuildableRailroadSignal,
	FGBuildableRailroadStation,
	FGBuildableRailroadTrack,
	FGBuildableRampLightweight,
	FGBuildableResourceExtractor,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGBuildableSnowCannon,
	FGBuildableSnowDispenser,
	FGBuildableSpaceElevator,
	FGBuildableSplitterSmart,
	FGBuildableStackableShelf,
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
	FGBuildingDescriptor,
	FGCentralStorageContainer,
	FGChargedWeapon,
	FGConsumableDescriptor,
	FGConsumableEquipment,
	FGCustomizationRecipe,
	FGEquipmentDescriptor,
	FGEquipmentStunSpear,
	FGHoverPack,
	FGItemDescriptor,
	FGItemDescriptor_item,
	FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel,
	FGItemDescriptorPowerBoosterFuel,
	FGObjectScanner,
	FGParachute,
	FGPipeHyperStart,
	FGPowerShardDescriptor,
	FGRecipe,
	FGResourceDescriptor,
	FGSchematic,
	FGSchematic_Classes_item,
	FGVehicleDescriptor,
	FGVehiclePathSegment,
	FGWeapon,
};
