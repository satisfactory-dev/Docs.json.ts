/* eslint-disable @stylistic/max-len */

import type {
	FGConsumableDescriptor as docs_json_ts_1_0_1_4_FGConsumableDescriptor,
	FGCustomizationRecipe as docs_json_ts_1_0_1_4_FGCustomizationRecipe,
	FGEquipmentDescriptor as docs_json_ts_1_0_1_4_FGEquipmentDescriptor,
	FGItemDescriptor as docs_json_ts_1_0_1_4_FGItemDescriptor,
	FGItemDescriptorBiomass as docs_json_ts_1_0_1_4_FGItemDescriptorBiomass,
	FGItemDescriptorNuclearFuel as docs_json_ts_1_0_1_4_FGItemDescriptorNuclearFuel,
	FGItemDescriptorPowerBoosterFuel as docs_json_ts_1_0_1_4_FGItemDescriptorPowerBoosterFuel,
	FGPowerShardDescriptor as docs_json_ts_1_0_1_4_FGPowerShardDescriptor,
	FGRecipe as docs_json_ts_1_0_1_4_FGRecipe,
	FGResourceDescriptor as docs_json_ts_1_0_1_4_FGResourceDescriptor,
	FGVehicleDescriptor as docs_json_ts_1_0_1_4_FGVehicleDescriptor,
} from './../1.0.1.4/types.ts';

import type {
	FGAmmoTypeInstantHit_Desc_CartridgeChaos_C as docs_json_ts_1_1_2_2_classes_FGAmmoTypeInstantHit_Desc_CartridgeChaos_C,
	FGAmmoTypeInstantHit_Desc_CartridgeStandard_C as docs_json_ts_1_1_2_2_classes_FGAmmoTypeInstantHit_Desc_CartridgeStandard_C,
	FGAmmoTypeProjectile as docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
	FGAmmoTypeSpreadshot as docs_json_ts_1_1_2_2_classes_FGAmmoTypeSpreadshot,
	FGBuildable_base as docs_json_ts_1_1_2_2_classes_FGBuildable_base,
	FGBuildable_occupied as docs_json_ts_1_1_2_2_classes_FGBuildable_occupied,
	FGBuildable_powered as docs_json_ts_1_1_2_2_classes_FGBuildable_powered,
	FGBuildable_tiered as docs_json_ts_1_1_2_2_classes_FGBuildable_tiered,
	FGBuildableAttachmentMerger as docs_json_ts_1_1_2_2_classes_FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter as docs_json_ts_1_1_2_2_classes_FGBuildableAttachmentSplitter,
	FGBuildableBarrierCorner as docs_json_ts_1_1_2_2_classes_FGBuildableBarrierCorner,
	FGBuildableBeam as docs_json_ts_1_1_2_2_classes_FGBuildableBeam,
	FGBuildableBlueprintDesigner as docs_json_ts_1_1_2_2_classes_FGBuildableBlueprintDesigner,
	FGBuildableCircuitSwitch as docs_json_ts_1_1_2_2_classes_FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt as docs_json_ts_1_1_2_2_classes_FGBuildableConveyorBelt,
	FGBuildableConveyorLift as docs_json_ts_1_1_2_2_classes_FGBuildableConveyorLift,
	FGBuildableConveyorMonitor as docs_json_ts_1_1_2_2_classes_FGBuildableConveyorMonitor,
	FGBuildableCornerWall as docs_json_ts_1_1_2_2_classes_FGBuildableCornerWall,
	FGBuildableDockingStation as docs_json_ts_1_1_2_2_classes_FGBuildableDockingStation,
	FGBuildableDoor_automated as docs_json_ts_1_1_2_2_classes_FGBuildableDoor_automated,
	FGBuildableDoor_big0 as docs_json_ts_1_1_2_2_classes_FGBuildableDoor_big0,
	FGBuildableDoor_manual as docs_json_ts_1_1_2_2_classes_FGBuildableDoor_manual,
	FGBuildableDroneStation as docs_json_ts_1_1_2_2_classes_FGBuildableDroneStation,
	FGBuildableElevator as docs_json_ts_1_1_2_2_classes_FGBuildableElevator,
	FGBuildableElevatorFloorStop as docs_json_ts_1_1_2_2_classes_FGBuildableElevatorFloorStop,
	FGBuildableFactory_jump_pad as docs_json_ts_1_1_2_2_classes_FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad as docs_json_ts_1_1_2_2_classes_FGBuildableFactory_landing_pad,
	FGBuildableFactorySimpleProducer as docs_json_ts_1_1_2_2_classes_FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight as docs_json_ts_1_1_2_2_classes_FGBuildableFloodlight,
	FGBuildableFoundationLightweight as docs_json_ts_1_1_2_2_classes_FGBuildableFoundationLightweight,
	FGBuildableFrackingActivator as docs_json_ts_1_1_2_2_classes_FGBuildableFrackingActivator,
	FGBuildableFrackingExtractor as docs_json_ts_1_1_2_2_classes_FGBuildableFrackingExtractor,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_1_1_2_2_classes_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_1_1_2_2_classes_FGBuildableLadder,
	FGBuildableLightsControlPanel as docs_json_ts_1_1_2_2_classes_FGBuildableLightsControlPanel,
	FGBuildableLightSource_Build_CeilingLight_C as docs_json_ts_1_1_2_2_classes_FGBuildableLightSource_Build_CeilingLight_C,
	FGBuildableLightSource_Build_StreetLight_C as docs_json_ts_1_1_2_2_classes_FGBuildableLightSource_Build_StreetLight_C,
	FGBuildableMAM as docs_json_ts_1_1_2_2_classes_FGBuildableMAM,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Blender_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_Blender_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_Converter_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_Converter_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_HadronCollider_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_HadronCollider_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_QuantumEncoder_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_QuantumEncoder_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildableMergerPriority as docs_json_ts_1_1_2_2_classes_FGBuildableMergerPriority,
	FGBuildablePassthrough as docs_json_ts_1_1_2_2_classes_FGBuildablePassthrough,
	FGBuildablePillarLightweight as docs_json_ts_1_1_2_2_classes_FGBuildablePillarLightweight,
	FGBuildablePipeHyper as docs_json_ts_1_1_2_2_classes_FGBuildablePipeHyper,
	FGBuildablePipeHyperJunction as docs_json_ts_1_1_2_2_classes_FGBuildablePipeHyperJunction,
	FGBuildablePipeline as docs_json_ts_1_1_2_2_classes_FGBuildablePipeline,
	FGBuildablePipelineJunction as docs_json_ts_1_1_2_2_classes_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_1_1_2_2_classes_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_1_1_2_2_classes_FGBuildablePipelinePump_valve,
	FGBuildablePipeReservoir as docs_json_ts_1_1_2_2_classes_FGBuildablePipeReservoir,
	FGBuildablePoleBase as docs_json_ts_1_1_2_2_classes_FGBuildablePoleBase,
	FGBuildablePoleConveyor as docs_json_ts_1_1_2_2_classes_FGBuildablePoleConveyor,
	FGBuildablePolePipe as docs_json_ts_1_1_2_2_classes_FGBuildablePolePipe,
	FGBuildablePoleStackable as docs_json_ts_1_1_2_2_classes_FGBuildablePoleStackable,
	FGBuildablePortal as docs_json_ts_1_1_2_2_classes_FGBuildablePortal,
	FGBuildablePortalSatellite as docs_json_ts_1_1_2_2_classes_FGBuildablePortalSatellite,
	FGBuildablePowerBooster as docs_json_ts_1_1_2_2_classes_FGBuildablePowerBooster,
	FGBuildablePowerPole as docs_json_ts_1_1_2_2_classes_FGBuildablePowerPole,
	FGBuildablePowerStorage as docs_json_ts_1_1_2_2_classes_FGBuildablePowerStorage,
	FGBuildablePriorityPowerSwitch as docs_json_ts_1_1_2_2_classes_FGBuildablePriorityPowerSwitch,
	FGBuildableRadarTower as docs_json_ts_1_1_2_2_classes_FGBuildableRadarTower,
	FGBuildableRailroadAttachment as docs_json_ts_1_1_2_2_classes_FGBuildableRailroadAttachment,
	FGBuildableRailroadSignal_block as docs_json_ts_1_1_2_2_classes_FGBuildableRailroadSignal_block,
	FGBuildableRailroadSignal_path as docs_json_ts_1_1_2_2_classes_FGBuildableRailroadSignal_path,
	FGBuildableRailroadStation as docs_json_ts_1_1_2_2_classes_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_1_1_2_2_classes_FGBuildableRailroadTrack,
	FGBuildableRampLightweight as docs_json_ts_1_1_2_2_classes_FGBuildableRampLightweight,
	FGBuildableResourceExtractor_miner_mk1 as docs_json_ts_1_1_2_2_classes_FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_1_1_2_2_classes_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_1_1_2_2_classes_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_1_1_2_2_classes_FGBuildableResourceExtractor_oil,
	FGBuildableResourceSink as docs_json_ts_1_1_2_2_classes_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_1_1_2_2_classes_FGBuildableResourceSinkShop,
	FGBuildableSnowCannon as docs_json_ts_1_1_2_2_classes_FGBuildableSnowCannon,
	FGBuildableSnowDispenser as docs_json_ts_1_1_2_2_classes_FGBuildableSnowDispenser,
	FGBuildableSpaceElevator as docs_json_ts_1_1_2_2_classes_FGBuildableSpaceElevator,
	FGBuildableSplitterSmart as docs_json_ts_1_1_2_2_classes_FGBuildableSplitterSmart,
	FGBuildableStackableShelf as docs_json_ts_1_1_2_2_classes_FGBuildableStackableShelf,
	FGBuildableStorage as docs_json_ts_1_1_2_2_classes_FGBuildableStorage,
	FGBuildableTradingPost as docs_json_ts_1_1_2_2_classes_FGBuildableTradingPost,
	FGBuildableTrainPlatformCargo as docs_json_ts_1_1_2_2_classes_FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty as docs_json_ts_1_1_2_2_classes_FGBuildableTrainPlatformEmpty,
	FGBuildableWalkway as docs_json_ts_1_1_2_2_classes_FGBuildableWalkway,
	FGBuildableWall as docs_json_ts_1_1_2_2_classes_FGBuildableWall,
	FGBuildableWaterPump as docs_json_ts_1_1_2_2_classes_FGBuildableWaterPump,
	FGBuildableWidgetSign as docs_json_ts_1_1_2_2_classes_FGBuildableWidgetSign,
	FGBuildableWire as docs_json_ts_1_1_2_2_classes_FGBuildableWire,
	FGBuildingDescriptor as docs_json_ts_1_1_2_2_classes_FGBuildingDescriptor,
	FGCentralStorageContainer as docs_json_ts_1_1_2_2_classes_FGCentralStorageContainer,
	FGChainsaw as docs_json_ts_1_1_2_2_classes_FGChainsaw,
	FGConsumableEquipment_base as docs_json_ts_1_1_2_2_classes_FGConsumableEquipment_base,
	FGConsumableEquipment_medkit as docs_json_ts_1_1_2_2_classes_FGConsumableEquipment_medkit,
	FGEquipmentStunSpear_xenobasher as docs_json_ts_1_1_2_2_classes_FGEquipmentStunSpear_xenobasher,
	FGEquipmentStunSpear_xenozapper as docs_json_ts_1_1_2_2_classes_FGEquipmentStunSpear_xenozapper,
	FGEquipmentZipline as docs_json_ts_1_1_2_2_classes_FGEquipmentZipline,
	FGGasMask as docs_json_ts_1_1_2_2_classes_FGGasMask,
	FGGolfCartDispenser as docs_json_ts_1_1_2_2_classes_FGGolfCartDispenser,
	FGHoverPack as docs_json_ts_1_1_2_2_classes_FGHoverPack,
	FGJetPack as docs_json_ts_1_1_2_2_classes_FGJetPack,
	FGJumpingStilts as docs_json_ts_1_1_2_2_classes_FGJumpingStilts,
	FGNobeliskDetonator as docs_json_ts_1_1_2_2_classes_FGNobeliskDetonator,
	FGObjectScanner as docs_json_ts_1_1_2_2_classes_FGObjectScanner,
	FGParachute as docs_json_ts_1_1_2_2_classes_FGParachute,
	FGPipeHyperStart as docs_json_ts_1_1_2_2_classes_FGPipeHyperStart,
	FGPortableMinerDispenser as docs_json_ts_1_1_2_2_classes_FGPortableMinerDispenser,
	FGSchematic_with_described_unlocks as docs_json_ts_1_1_2_2_classes_FGSchematic_with_described_unlocks,
	FGSchematic_without_described_unlocks as docs_json_ts_1_1_2_2_classes_FGSchematic_without_described_unlocks,
	FGSuitBase as docs_json_ts_1_1_2_2_classes_FGSuitBase,
	FGWeapon_Equip_RebarGun_Projectile_C as docs_json_ts_1_1_2_2_classes_FGWeapon_Equip_RebarGun_Projectile_C,
	FGWeapon_Equip_Rifle_C as docs_json_ts_1_1_2_2_classes_FGWeapon_Equip_Rifle_C,
} from './classes.ts';

type FGAmmoTypeInstantHit = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeInstantHit'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeInstantHit_Desc_CartridgeChaos_C,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeInstantHit_Desc_CartridgeStandard_C,
	],
};

type FGAmmoTypeProjectile = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeProjectile'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile,
		...docs_json_ts_1_1_2_2_classes_FGAmmoTypeProjectile[],
	],
};

type FGAmmoTypeSpreadshot = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGAmmoTypeSpreadshot'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGAmmoTypeSpreadshot,
		...docs_json_ts_1_1_2_2_classes_FGAmmoTypeSpreadshot[],
	],
};

type FGBuildable = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildable'}${'\''}`,
	Classes: [
		FGBuildable_Classes_item,
		...FGBuildable_Classes_item[],
	],
};

type FGBuildable_Classes_item = docs_json_ts_1_1_2_2_classes_FGBuildable_occupied | docs_json_ts_1_1_2_2_classes_FGBuildable_tiered | docs_json_ts_1_1_2_2_classes_FGBuildable_base;

type FGBuildableAttachmentMerger = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableAttachmentMerger'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableAttachmentMerger,
		...docs_json_ts_1_1_2_2_classes_FGBuildableAttachmentMerger[],
	],
};

type FGBuildableAttachmentSplitter = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableAttachmentSplitter'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableAttachmentSplitter,
		...docs_json_ts_1_1_2_2_classes_FGBuildableAttachmentSplitter[],
	],
};

type FGBuildableBarrierCorner = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableBarrierCorner'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableBarrierCorner,
		...docs_json_ts_1_1_2_2_classes_FGBuildableBarrierCorner[],
	],
};

type FGBuildableBeam = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableBeam'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableBeam,
		...docs_json_ts_1_1_2_2_classes_FGBuildableBeam[],
	],
};

type FGBuildableBlueprintDesigner = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableBlueprintDesigner'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableBlueprintDesigner,
		...docs_json_ts_1_1_2_2_classes_FGBuildableBlueprintDesigner[],
	],
};

type FGBuildableCircuitSwitch = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableCircuitSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableCircuitSwitch,
		...docs_json_ts_1_1_2_2_classes_FGBuildableCircuitSwitch[],
	],
};

type FGBuildableConveyorBelt = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableConveyorBelt'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableConveyorBelt,
		...docs_json_ts_1_1_2_2_classes_FGBuildableConveyorBelt[],
	],
};

type FGBuildableConveyorLift = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableConveyorLift'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableConveyorLift,
		...docs_json_ts_1_1_2_2_classes_FGBuildableConveyorLift[],
	],
};

type FGBuildableConveyorMonitor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableConveyorMonitor'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableConveyorMonitor,
		...docs_json_ts_1_1_2_2_classes_FGBuildableConveyorMonitor[],
	],
};

type FGBuildableCornerWall = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableCornerWall'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableCornerWall,
		...docs_json_ts_1_1_2_2_classes_FGBuildableCornerWall[],
	],
};

type FGBuildableCornerWallLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableCornerWallLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableCornerWall,
		...docs_json_ts_1_1_2_2_classes_FGBuildableCornerWall[],
	],
};

type FGBuildableDockingStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDockingStation'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableDockingStation,
		...docs_json_ts_1_1_2_2_classes_FGBuildableDockingStation[],
	],
};

type FGBuildableDoor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDoor'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_automated,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_big0,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_big0,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_manual,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_manual,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_manual,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_manual,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_manual,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_manual,
		docs_json_ts_1_1_2_2_classes_FGBuildableDoor_automated,
	],
};

type FGBuildableDroneStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableDroneStation'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableDroneStation,
		...docs_json_ts_1_1_2_2_classes_FGBuildableDroneStation[],
	],
};

type FGBuildableElevator = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableElevator'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableElevator,
		...docs_json_ts_1_1_2_2_classes_FGBuildableElevator[],
	],
};

type FGBuildableElevatorFloorStop = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableElevatorFloorStop'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableElevatorFloorStop,
		...docs_json_ts_1_1_2_2_classes_FGBuildableElevatorFloorStop[],
	],
};

type FGBuildableFactory = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactory'}${'\''}`,
	Classes: [
		FGBuildableFactory_Classes_item,
		...FGBuildableFactory_Classes_item[],
	],
};

type FGBuildableFactory_Classes_item = docs_json_ts_1_1_2_2_classes_FGBuildableFactory_jump_pad | docs_json_ts_1_1_2_2_classes_FGBuildableFactory_landing_pad | docs_json_ts_1_1_2_2_classes_FGBuildable_powered;

type FGBuildableFactoryBuilding = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactoryBuilding'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildable_base,
		...docs_json_ts_1_1_2_2_classes_FGBuildable_base[],
	],
};

type FGBuildableFactorySimpleProducer = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFactorySimpleProducer'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableFactorySimpleProducer,
		...docs_json_ts_1_1_2_2_classes_FGBuildableFactorySimpleProducer[],
	],
};

type FGBuildableFloodlight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFloodlight'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableFloodlight,
		...docs_json_ts_1_1_2_2_classes_FGBuildableFloodlight[],
	],
};

type FGBuildableFoundationLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFoundationLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableFoundationLightweight,
		...docs_json_ts_1_1_2_2_classes_FGBuildableFoundationLightweight[],
	],
};

type FGBuildableFrackingActivator = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFrackingActivator'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableFrackingActivator,
		...docs_json_ts_1_1_2_2_classes_FGBuildableFrackingActivator[],
	],
};

type FGBuildableFrackingExtractor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableFrackingExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableFrackingExtractor,
		...docs_json_ts_1_1_2_2_classes_FGBuildableFrackingExtractor[],
	],
};

type FGBuildableGeneratorFuel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorFuel'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorFuel_coal,
		docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorFuel_fuel,
		docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorFuel_biomass,
	],
};

type FGBuildableGeneratorGeoThermal = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorGeoThermal'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorGeoThermal,
		...docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorGeoThermal[],
	],
};

type FGBuildableGeneratorNuclear = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableGeneratorNuclear'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorNuclear,
		...docs_json_ts_1_1_2_2_classes_FGBuildableGeneratorNuclear[],
	],
};

type FGBuildableJumppad = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableJumppad'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableJumppad,
		...docs_json_ts_1_1_2_2_classes_FGBuildableJumppad[],
	],
};

type FGBuildableLadder = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLadder'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableLadder,
		...docs_json_ts_1_1_2_2_classes_FGBuildableLadder[],
	],
};

type FGBuildableLightsControlPanel = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLightsControlPanel'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableLightsControlPanel,
		...docs_json_ts_1_1_2_2_classes_FGBuildableLightsControlPanel[],
	],
};

type FGBuildableLightSource = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableLightSource'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableLightSource_Build_StreetLight_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableLightSource_Build_CeilingLight_C,
	],
};

type FGBuildableMAM = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableMAM'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableMAM,
		...docs_json_ts_1_1_2_2_classes_FGBuildableMAM[],
	],
};

type FGBuildableManufacturer = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableManufacturer'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_OilRefinery_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_FoundryMk1_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_Packager_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_ManufacturerMk1_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_AssemblerMk1_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_Blender_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_ConstructorMk1_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_SmelterMk1_C,
	],
};

type FGBuildableManufacturerVariablePower = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableManufacturerVariablePower'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_QuantumEncoder_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_Converter_C,
		docs_json_ts_1_1_2_2_classes_FGBuildableManufacturer_Build_HadronCollider_C,
	],
};

type FGBuildableMergerPriority = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableMergerPriority'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableMergerPriority,
		...docs_json_ts_1_1_2_2_classes_FGBuildableMergerPriority[],
	],
};

type FGBuildablePassthrough = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePassthrough'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePassthrough,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePassthrough[],
	],
};

type FGBuildablePassthroughPipeHyper = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePassthroughPipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePassthrough,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePassthrough[],
	],
};

type FGBuildablePillarLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePillarLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePillarLightweight,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePillarLightweight[],
	],
};

type FGBuildablePipeHyper = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeHyper'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePipeHyper,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePipeHyper[],
	],
};

type FGBuildablePipeHyperJunction = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeHyperJunction'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePipeHyperJunction,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePipeHyperJunction[],
	],
};

type FGBuildablePipeline = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeline'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePipeline,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePipeline[],
	],
};

type FGBuildablePipelineJunction = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipelineJunction'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePipelineJunction,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePipelineJunction[],
	],
};

type FGBuildablePipelinePump = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipelinePump'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePipelinePump_pump,
		docs_json_ts_1_1_2_2_classes_FGBuildablePipelinePump_valve,
		docs_json_ts_1_1_2_2_classes_FGBuildablePipelinePump_pump,
	],
};

type FGBuildablePipeReservoir = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePipeReservoir'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePipeReservoir,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePipeReservoir[],
	],
};

type FGBuildablePoleBase = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePoleBase'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePoleBase,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePoleBase[],
	],
};

type FGBuildablePoleConveyor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePoleConveyor'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePoleConveyor,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePoleConveyor[],
	],
};

type FGBuildablePolePipe = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePolePipe'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePolePipe,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePolePipe[],
	],
};

type FGBuildablePoleStackable = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePoleStackable'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePoleStackable,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePoleStackable[],
	],
};

type FGBuildablePortal = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePortal'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePortal,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePortal[],
	],
};

type FGBuildablePortalSatellite = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePortalSatellite'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePortalSatellite,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePortalSatellite[],
	],
};

type FGBuildablePowerBooster = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePowerBooster'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePowerBooster,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePowerBooster[],
	],
};

type FGBuildablePowerPole = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePowerPole'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePowerPole,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePowerPole[],
	],
};

type FGBuildablePowerStorage = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePowerStorage'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePowerStorage,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePowerStorage[],
	],
};

type FGBuildablePriorityPowerSwitch = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildablePriorityPowerSwitch'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildablePriorityPowerSwitch,
		...docs_json_ts_1_1_2_2_classes_FGBuildablePriorityPowerSwitch[],
	],
};

type FGBuildableRadarTower = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRadarTower'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableRadarTower,
		...docs_json_ts_1_1_2_2_classes_FGBuildableRadarTower[],
	],
};

type FGBuildableRailroadAttachment = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadAttachment'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableRailroadAttachment,
		...docs_json_ts_1_1_2_2_classes_FGBuildableRailroadAttachment[],
	],
};

type FGBuildableRailroadSignal = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadSignal'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableRailroadSignal_block,
		docs_json_ts_1_1_2_2_classes_FGBuildableRailroadSignal_path,
	],
};

type FGBuildableRailroadStation = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadStation'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableRailroadStation,
		...docs_json_ts_1_1_2_2_classes_FGBuildableRailroadStation[],
	],
};

type FGBuildableRailroadTrack = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRailroadTrack'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableRailroadTrack,
		...docs_json_ts_1_1_2_2_classes_FGBuildableRailroadTrack[],
	],
};

type FGBuildableRampLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableRampLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableRampLightweight,
		...docs_json_ts_1_1_2_2_classes_FGBuildableRampLightweight[],
	],
};

type FGBuildableResourceExtractor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceExtractor'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableResourceExtractor_oil,
		docs_json_ts_1_1_2_2_classes_FGBuildableResourceExtractor_miner_mk2,
		docs_json_ts_1_1_2_2_classes_FGBuildableResourceExtractor_miner_mk1,
		docs_json_ts_1_1_2_2_classes_FGBuildableResourceExtractor_miner_mk3,
	],
};

type FGBuildableResourceSink = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceSink'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableResourceSink,
		...docs_json_ts_1_1_2_2_classes_FGBuildableResourceSink[],
	],
};

type FGBuildableResourceSinkShop = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableResourceSinkShop'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableResourceSinkShop,
		...docs_json_ts_1_1_2_2_classes_FGBuildableResourceSinkShop[],
	],
};

type FGBuildableSnowCannon = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSnowCannon'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableSnowCannon,
		...docs_json_ts_1_1_2_2_classes_FGBuildableSnowCannon[],
	],
};

type FGBuildableSnowDispenser = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSnowDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableSnowDispenser,
		...docs_json_ts_1_1_2_2_classes_FGBuildableSnowDispenser[],
	],
};

type FGBuildableSpaceElevator = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSpaceElevator'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableSpaceElevator,
		...docs_json_ts_1_1_2_2_classes_FGBuildableSpaceElevator[],
	],
};

type FGBuildableSplitterSmart = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableSplitterSmart'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableSplitterSmart,
		...docs_json_ts_1_1_2_2_classes_FGBuildableSplitterSmart[],
	],
};

type FGBuildableStackableShelf = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableStackableShelf'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableStackableShelf,
		...docs_json_ts_1_1_2_2_classes_FGBuildableStackableShelf[],
	],
};

type FGBuildableStorage = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableStorage'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableStorage,
		...docs_json_ts_1_1_2_2_classes_FGBuildableStorage[],
	],
};

type FGBuildableTradingPost = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTradingPost'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableTradingPost,
		...docs_json_ts_1_1_2_2_classes_FGBuildableTradingPost[],
	],
};

type FGBuildableTrainPlatformCargo = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTrainPlatformCargo'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableTrainPlatformCargo,
		...docs_json_ts_1_1_2_2_classes_FGBuildableTrainPlatformCargo[],
	],
};

type FGBuildableTrainPlatformEmpty = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableTrainPlatformEmpty'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableTrainPlatformEmpty,
		...docs_json_ts_1_1_2_2_classes_FGBuildableTrainPlatformEmpty[],
	],
};

type FGBuildableWalkway = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWalkway'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableWalkway,
		...docs_json_ts_1_1_2_2_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWalkwayLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWalkwayLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableWalkway,
		...docs_json_ts_1_1_2_2_classes_FGBuildableWalkway[],
	],
};

type FGBuildableWall = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWall'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableWall,
		...docs_json_ts_1_1_2_2_classes_FGBuildableWall[],
	],
};

type FGBuildableWallLightweight = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWallLightweight'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableWall,
		...docs_json_ts_1_1_2_2_classes_FGBuildableWall[],
	],
};

type FGBuildableWaterPump = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWaterPump'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableWaterPump,
		...docs_json_ts_1_1_2_2_classes_FGBuildableWaterPump[],
	],
};

type FGBuildableWidgetSign = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWidgetSign'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableWidgetSign,
		...docs_json_ts_1_1_2_2_classes_FGBuildableWidgetSign[],
	],
};

type FGBuildableWire = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildableWire'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildableWire,
		...docs_json_ts_1_1_2_2_classes_FGBuildableWire[],
	],
};

type FGBuildingDescriptor = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGBuildingDescriptor'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGBuildingDescriptor,
		...docs_json_ts_1_1_2_2_classes_FGBuildingDescriptor[],
	],
};

type FGCentralStorageContainer = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGCentralStorageContainer'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGCentralStorageContainer,
		...docs_json_ts_1_1_2_2_classes_FGCentralStorageContainer[],
	],
};

type FGChainsaw = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGChainsaw'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGChainsaw,
		...docs_json_ts_1_1_2_2_classes_FGChainsaw[],
	],
};

type FGChargedWeapon = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGChargedWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGNobeliskDetonator,
		...docs_json_ts_1_1_2_2_classes_FGNobeliskDetonator[],
	],
};

type FGConsumableEquipment = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGConsumableEquipment'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGConsumableEquipment_base,
		docs_json_ts_1_1_2_2_classes_FGConsumableEquipment_medkit,
	],
};

type FGEquipmentStunSpear = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGEquipmentStunSpear'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGEquipmentStunSpear_xenozapper,
		docs_json_ts_1_1_2_2_classes_FGEquipmentStunSpear_xenobasher,
		docs_json_ts_1_1_2_2_classes_FGEquipmentStunSpear_xenobasher,
	],
};

type FGEquipmentZipline = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGEquipmentZipline'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGEquipmentZipline,
		...docs_json_ts_1_1_2_2_classes_FGEquipmentZipline[],
	],
};

type FGGasMask = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGGasMask'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGGasMask,
		...docs_json_ts_1_1_2_2_classes_FGGasMask[],
	],
};

type FGGolfCartDispenser = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGGolfCartDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGGolfCartDispenser,
		...docs_json_ts_1_1_2_2_classes_FGGolfCartDispenser[],
	],
};

type FGHoverPack = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGHoverPack'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGHoverPack,
		...docs_json_ts_1_1_2_2_classes_FGHoverPack[],
	],
};

type FGJetPack = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGJetPack'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGJetPack,
		...docs_json_ts_1_1_2_2_classes_FGJetPack[],
	],
};

type FGJumpingStilts = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGJumpingStilts'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGJumpingStilts,
		...docs_json_ts_1_1_2_2_classes_FGJumpingStilts[],
	],
};

type FGObjectScanner = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGObjectScanner'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGObjectScanner,
		...docs_json_ts_1_1_2_2_classes_FGObjectScanner[],
	],
};

type FGParachute = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGParachute'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGParachute,
		...docs_json_ts_1_1_2_2_classes_FGParachute[],
	],
};

type FGPipeHyperStart = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGPipeHyperStart'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGPipeHyperStart,
		...docs_json_ts_1_1_2_2_classes_FGPipeHyperStart[],
	],
};

type FGPortableMinerDispenser = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGPortableMinerDispenser'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGPortableMinerDispenser,
		...docs_json_ts_1_1_2_2_classes_FGPortableMinerDispenser[],
	],
};

type FGSchematic = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGSchematic'}${'\''}`,
	Classes: [
		FGSchematic_Classes_item,
		...FGSchematic_Classes_item[],
	],
};

type FGSchematic_Classes_item = docs_json_ts_1_1_2_2_classes_FGSchematic_without_described_unlocks | docs_json_ts_1_1_2_2_classes_FGSchematic_with_described_unlocks;

type FGSuitBase = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGSuitBase'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGSuitBase,
		...docs_json_ts_1_1_2_2_classes_FGSuitBase[],
	],
};

type FGWeapon = {
	NativeClass: `/Script/CoreUObject.Class'/Script/${'FactoryGame.FGWeapon'}${'\''}`,
	Classes: [
		docs_json_ts_1_1_2_2_classes_FGWeapon_Equip_RebarGun_Projectile_C,
		docs_json_ts_1_1_2_2_classes_FGWeapon_Equip_Rifle_C,
	],
};

export type foo = [
	FGBuildableRailroadTrack,
	FGBuildableBeam,
	FGBuildingDescriptor,
	docs_json_ts_1_0_1_4_FGItemDescriptor,
	FGAmmoTypeProjectile,
	docs_json_ts_1_0_1_4_FGEquipmentDescriptor,
	FGAmmoTypeSpreadshot,
	FGWeapon,
	FGAmmoTypeInstantHit,
	FGBuildableWallLightweight,
	FGSuitBase,
	FGConsumableEquipment,
	FGChargedWeapon,
	docs_json_ts_1_0_1_4_FGResourceDescriptor,
	docs_json_ts_1_0_1_4_FGCustomizationRecipe,
	docs_json_ts_1_0_1_4_FGItemDescriptorBiomass,
	FGBuildableTradingPost,
	docs_json_ts_1_0_1_4_FGRecipe,
	FGBuildable,
	FGEquipmentStunSpear,
	FGBuildablePoleBase,
	FGBuildablePoleConveyor,
	FGBuildableConveyorBelt,
	FGBuildableWire,
	FGBuildablePowerPole,
	FGSchematic,
	FGBuildablePillarLightweight,
	FGBuildableFactory,
	FGBuildableWalkwayLightweight,
	FGBuildableWalkway,
	FGBuildableWall,
	FGBuildableGeneratorFuel,
	FGBuildablePolePipe,
	FGBuildablePipeline,
	FGBuildablePipelineJunction,
	FGBuildablePipelinePump,
	FGBuildablePipeReservoir,
	FGBuildableWaterPump,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGObjectScanner,
	FGBuildableManufacturerVariablePower,
	docs_json_ts_1_0_1_4_FGPowerShardDescriptor,
	FGBuildableResourceExtractor,
	FGBuildableManufacturer,
	FGPortableMinerDispenser,
	docs_json_ts_1_0_1_4_FGItemDescriptorNuclearFuel,
	FGBuildableGeneratorNuclear,
	FGBuildableFrackingExtractor,
	FGBuildableFrackingActivator,
	FGBuildableDroneStation,
	docs_json_ts_1_0_1_4_FGVehicleDescriptor,
	FGBuildableConveyorLift,
	FGBuildablePortal,
	FGBuildablePortalSatellite,
	FGBuildableBlueprintDesigner,
	FGHoverPack,
	FGBuildableRailroadSignal,
	FGBuildableRailroadAttachment,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformEmpty,
	FGBuildableRailroadStation,
	FGJetPack,
	FGBuildablePoleStackable,
	FGBuildableStorage,
	FGPipeHyperStart,
	FGBuildablePipeHyperJunction,
	FGBuildablePipeHyper,
	FGBuildablePowerStorage,
	FGBuildableDockingStation,
	FGBuildableJumppad,
	FGChainsaw,
	docs_json_ts_1_0_1_4_FGConsumableDescriptor,
	FGBuildableMAM,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableFoundationLightweight,
	FGBuildableRampLightweight,
	FGBuildableDoor,
	FGBuildableCornerWall,
	FGBuildablePowerBooster,
	FGCentralStorageContainer,
	docs_json_ts_1_0_1_4_FGItemDescriptorPowerBoosterFuel,
	FGBuildableGeneratorGeoThermal,
	FGBuildableSplitterSmart,
	FGBuildablePriorityPowerSwitch,
	FGJumpingStilts,
	FGBuildableCircuitSwitch,
	FGEquipmentZipline,
	FGGasMask,
	FGParachute,
	FGBuildableMergerPriority,
	FGBuildableRadarTower,
	FGBuildableSnowDispenser,
	FGBuildableSnowCannon,
	FGBuildableFactorySimpleProducer,
	FGBuildableLadder,
	FGGolfCartDispenser,
	FGBuildablePassthrough,
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
	FGChainsaw,
	FGChargedWeapon,
	FGConsumableEquipment,
	FGEquipmentStunSpear,
	FGEquipmentZipline,
	FGGasMask,
	FGGolfCartDispenser,
	FGHoverPack,
	FGJetPack,
	FGJumpingStilts,
	FGObjectScanner,
	FGParachute,
	FGPipeHyperStart,
	FGPortableMinerDispenser,
	FGSchematic,
	FGSchematic_Classes_item,
	FGSuitBase,
	FGWeapon,
};
