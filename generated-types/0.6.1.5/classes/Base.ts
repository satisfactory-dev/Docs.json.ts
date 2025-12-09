/* eslint-disable @stylistic/max-len */

import type {
	BGRA as docs_json_ts_common_types_BGRA,
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
	decimal_string_signed as docs_json_ts_common_types_decimal_string_signed,
	empty_object as docs_json_ts_common_types_empty_object,
	integer_string as docs_json_ts_common_types_integer_string,
	RGBA as docs_json_ts_common_types_RGBA,
	XY_decimal_string as docs_json_ts_common_types_XY_decimal_string,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
} from './../../common/types.ts';

import type {
	DamageTypes as docs_json_ts_0_6_1_5_properties_DamageTypes,
	DocsDotJson_AkAudioEvent_quoted_list as docs_json_ts_0_6_1_5_properties_DocsDotJson_AkAudioEvent_quoted_list,
	ItemClass_list as docs_json_ts_0_6_1_5_properties_ItemClass_list,
	mAllowedResourceForms as docs_json_ts_0_6_1_5_properties_mAllowedResourceForms,
	mDisableSnapOn_front_right as docs_json_ts_0_6_1_5_properties_mDisableSnapOn_front_right,
	mUnlocks_item as docs_json_ts_0_6_1_5_properties_mUnlocks_item,
} from './../types/properties.ts';

import type {
	FalloffCurve_EditorCurveData_only as docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_only,
	FalloffCurve_EditorCurveData_with_ExternalCurve as docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_with_ExternalCurve,
	mDisableSnapOn_bottom as docs_json_ts_0_5_2_1_properties_mDisableSnapOn_bottom,
	mDisableSnapOn_top as docs_json_ts_0_5_2_1_properties_mDisableSnapOn_top,
} from './../../0.5.2.1/types/properties.ts';

import type {
	FGBuildable_base as docs_json_ts_0_5_2_1_classes_base_FGBuildable_base,
	FGBuildable_isFrame as docs_json_ts_0_5_2_1_classes_base_FGBuildable_isFrame,
	FGBuildable_occupied as docs_json_ts_0_5_2_1_classes_base_FGBuildable_occupied,
	FGBuildable_powered as docs_json_ts_0_5_2_1_classes_base_FGBuildable_powered,
	FGBuildable_powered_base_base as docs_json_ts_0_5_2_1_classes_base_FGBuildable_powered_base_base,
	FGBuildable_tiered as docs_json_ts_0_5_2_1_classes_base_FGBuildable_tiered,
	FGBuildable_with_elevation as docs_json_ts_0_5_2_1_classes_base_FGBuildable_with_elevation,
	FGBuildable_with_size_and_elevation as docs_json_ts_0_5_2_1_classes_base_FGBuildable_with_size_and_elevation,
	FGBuildableAttachment_splitter as docs_json_ts_0_5_2_1_classes_base_FGBuildableAttachment_splitter,
	FGBuildableAttachmentMerger as docs_json_ts_0_5_2_1_classes_base_FGBuildableAttachmentMerger,
	FGBuildableBeam as docs_json_ts_0_5_2_1_classes_base_FGBuildableBeam,
	FGBuildableCircuitSwitch as docs_json_ts_0_5_2_1_classes_base_FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt_spline as docs_json_ts_0_5_2_1_classes_base_FGBuildableConveyorBelt_spline,
	FGBuildableConveyorLift as docs_json_ts_0_5_2_1_classes_base_FGBuildableConveyorLift,
	FGBuildableCornerWall as docs_json_ts_0_5_2_1_classes_base_FGBuildableCornerWall,
	FGBuildableDockingStation_base as docs_json_ts_0_5_2_1_classes_base_FGBuildableDockingStation_base,
	FGBuildableDoor_automated as docs_json_ts_0_5_2_1_classes_base_FGBuildableDoor_automated,
	FGBuildableDoor_manual as docs_json_ts_0_5_2_1_classes_base_FGBuildableDoor_manual,
	FGBuildableDroneStation as docs_json_ts_0_5_2_1_classes_base_FGBuildableDroneStation,
	FGBuildableFactory_jump_pad as docs_json_ts_0_5_2_1_classes_base_FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad as docs_json_ts_0_5_2_1_classes_base_FGBuildableFactory_landing_pad,
	FGBuildableFactorySimpleProducer as docs_json_ts_0_5_2_1_classes_base_FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight as docs_json_ts_0_5_2_1_classes_base_FGBuildableFloodlight,
	FGBuildableGeneratorFuel_biomass as docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal as docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel as docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal as docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear as docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorNuclear,
	FGBuildableJumppad as docs_json_ts_0_5_2_1_classes_base_FGBuildableJumppad,
	FGBuildableLadder as docs_json_ts_0_5_2_1_classes_base_FGBuildableLadder,
	FGBuildableLightsControlPanel as docs_json_ts_0_5_2_1_classes_base_FGBuildableLightsControlPanel,
	FGBuildableLightSource as docs_json_ts_0_5_2_1_classes_base_FGBuildableLightSource,
	FGBuildableLightSource_Build_StreetLight_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableLightSource_Build_StreetLight_C,
	FGBuildableMAM as docs_json_ts_0_5_2_1_classes_base_FGBuildableMAM,
	FGBuildableManufacturer_Build_AssemblerMk1_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Blender_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_Blender_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_HadronCollider_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_HadronCollider_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildableManufacturer_Build_SmelterMk1_C_base as docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_SmelterMk1_C_base,
	FGBuildablePassthrough as docs_json_ts_0_5_2_1_classes_base_FGBuildablePassthrough,
	FGBuildablePillar as docs_json_ts_0_5_2_1_classes_base_FGBuildablePillar,
	FGBuildablePipeHyper as docs_json_ts_0_5_2_1_classes_base_FGBuildablePipeHyper,
	FGBuildablePipeline_base_spline as docs_json_ts_0_5_2_1_classes_base_FGBuildablePipeline_base_spline,
	FGBuildablePipelineJunction as docs_json_ts_0_5_2_1_classes_base_FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump as docs_json_ts_0_5_2_1_classes_base_FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve as docs_json_ts_0_5_2_1_classes_base_FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport as docs_json_ts_0_5_2_1_classes_base_FGBuildablePipelineSupport,
	FGBuildablePipeReservoir as docs_json_ts_0_5_2_1_classes_base_FGBuildablePipeReservoir,
	FGBuildablePowerPole as docs_json_ts_0_5_2_1_classes_base_FGBuildablePowerPole,
	FGBuildablePowerStorage as docs_json_ts_0_5_2_1_classes_base_FGBuildablePowerStorage,
	FGBuildableRailroadSignal_base as docs_json_ts_0_5_2_1_classes_base_FGBuildableRailroadSignal_base,
	FGBuildableRailroadSignal_block as docs_json_ts_0_5_2_1_classes_base_FGBuildableRailroadSignal_block,
	FGBuildableRailroadStation as docs_json_ts_0_5_2_1_classes_base_FGBuildableRailroadStation,
	FGBuildableRailroadTrack as docs_json_ts_0_5_2_1_classes_base_FGBuildableRailroadTrack,
	FGBuildableRamp_base as docs_json_ts_0_5_2_1_classes_base_FGBuildableRamp_base,
	FGBuildableResourceExtractor_miner_mk2 as docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3 as docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil as docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceExtractor_oil,
	FGBuildableResourceExtractor_water as docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceExtractor_water,
	FGBuildableResourceSink as docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceSink,
	FGBuildableResourceSinkShop as docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceSinkShop,
	FGBuildableSplitterSmart as docs_json_ts_0_5_2_1_classes_base_FGBuildableSplitterSmart,
	FGBuildableStair as docs_json_ts_0_5_2_1_classes_base_FGBuildableStair,
	FGBuildableStorage as docs_json_ts_0_5_2_1_classes_base_FGBuildableStorage,
	FGBuildableTradingPost as docs_json_ts_0_5_2_1_classes_base_FGBuildableTradingPost,
	FGBuildableTrainPlatform as docs_json_ts_0_5_2_1_classes_base_FGBuildableTrainPlatform,
	FGBuildableTrainPlatformCargo as docs_json_ts_0_5_2_1_classes_base_FGBuildableTrainPlatformCargo,
	FGBuildableWall as docs_json_ts_0_5_2_1_classes_base_FGBuildableWall,
	FGBuildableWidgetSign as docs_json_ts_0_5_2_1_classes_base_FGBuildableWidgetSign,
	FGBuildableWire as docs_json_ts_0_5_2_1_classes_base_FGBuildableWire,
	FGGolfCartDispenser as docs_json_ts_0_5_2_1_classes_base_FGGolfCartDispenser,
	FGItemDescAmmoTypeProjectile_base_base as docs_json_ts_0_5_2_1_classes_base_FGItemDescAmmoTypeProjectile_base_base,
	FGNobeliskDetonator_base as docs_json_ts_0_5_2_1_classes_base_FGNobeliskDetonator_base,
	FGPipeHyperStart as docs_json_ts_0_5_2_1_classes_base_FGPipeHyperStart,
	FGSchematic_base_base_base as docs_json_ts_0_5_2_1_classes_base_FGSchematic_base_base_base,
	FGSchematic_with_described_unlocks_base_base as docs_json_ts_0_5_2_1_classes_base_FGSchematic_with_described_unlocks_base_base,
	FGWeapon_base_base as docs_json_ts_0_5_2_1_classes_base_FGWeapon_base_base,
	FGWeapon_Equip_Rifle_C_base as docs_json_ts_0_5_2_1_classes_base_FGWeapon_Equip_Rifle_C_base,
} from './../../0.5.2.1/classes/Base.ts';

import type {
	FGBuildable_powered_base_base as docs_json_ts_0_4_2_11_classes_base_FGBuildable_powered_base_base,
	FGBuildableFrackingActivator_base as docs_json_ts_0_4_2_11_classes_base_FGBuildableFrackingActivator_base,
	FGBuildableResourceExtractor_miner_mk1_base_base as docs_json_ts_0_4_2_11_classes_base_FGBuildableResourceExtractor_miner_mk1_base_base,
	FGConsumableEquipment_base as docs_json_ts_0_4_2_11_classes_base_FGConsumableEquipment_base,
	FGDescriptor_base as docs_json_ts_0_4_2_11_classes_base_FGDescriptor_base,
	FGDescriptor_sinkable as docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable,
	FGDescriptor_sinkable_base as docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable_base,
	FGEquipment_base as docs_json_ts_0_4_2_11_classes_base_FGEquipment_base,
	FGEquipmentZipline as docs_json_ts_0_4_2_11_classes_base_FGEquipmentZipline,
	FGHoverPack_base as docs_json_ts_0_4_2_11_classes_base_FGHoverPack_base,
	FGItemDescriptorNuclearFuel_base as docs_json_ts_0_4_2_11_classes_base_FGItemDescriptorNuclearFuel_base,
	FGParachute as docs_json_ts_0_4_2_11_classes_base_FGParachute,
	FGPortableMinerDispenser as docs_json_ts_0_4_2_11_classes_base_FGPortableMinerDispenser,
	FGSchematic_base_base_props_sans_mSchematicIcon as docs_json_ts_0_4_2_11_classes_base_FGSchematic_base_base_props_sans_mSchematicIcon,
	FGVehicleDescriptor_fueled_with_inventory_base as docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_fueled_with_inventory_base,
	FGVehicleDescriptor_powered_base as docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_powered_base,
	FGVehicleDescriptor_with_inventory_base as docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_with_inventory_base,
	FGWeaponProjectile_base_base as docs_json_ts_0_4_2_11_classes_base_FGWeaponProjectile_base_base,
	FGWeaponProjectileFire_base_base as docs_json_ts_0_4_2_11_classes_base_FGWeaponProjectileFire_base_base,
} from './../../0.4.2.11/classes/Base.ts';

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	ItemClass_Amount_list as docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list,
	mDisableSnapOn_front_bottom as docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_bottom,
	mDisableSnapOn_top_bottom as docs_json_ts_0_3_7_7_properties_mDisableSnapOn_top_bottom,
} from './../../0.3.7.7/types/properties.ts';

import type {
	FGBuildable_docking_station_base_base as docs_json_ts_0_3_7_7_classes_base_FGBuildable_docking_station_base_base,
	FGBuildable_powered_base_resources_base as docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered_base_resources_base,
	FGBuildable_with_height_base as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_base,
	FGBuildable_with_width_base as docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_width_base,
	FGBuildableDockingStation_with_mFuelTransferSpeed as docs_json_ts_0_3_7_7_classes_base_FGBuildableDockingStation_with_mFuelTransferSpeed,
	FGBuildablePipeline_base_root as docs_json_ts_0_3_7_7_classes_base_FGBuildablePipeline_base_root,
	FGBuildablePole_base as docs_json_ts_0_3_7_7_classes_base_FGBuildablePole_base,
	FGBuildableResourceExtractor_base_base_base as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_base,
	FGBuildableResourceExtractor_base_base_base_base as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_base_base,
	FGBuildableResourceExtractor_base_base_base_base_base as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_base_base_base,
	FGBuildableResourceExtractor_base_base_base_piped as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_base_piped,
	FGBuildableResourceExtractor_base_base_timed as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_timed,
	FGChainsaw as docs_json_ts_0_3_7_7_classes_base_FGChainsaw,
	FGConsumableDescriptor_base as docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor_base,
	FGEquipmentStunSpear_xenobasher_base as docs_json_ts_0_3_7_7_classes_base_FGEquipmentStunSpear_xenobasher_base,
	FGEquipmentStunSpear_xenozapper_base as docs_json_ts_0_3_7_7_classes_base_FGEquipmentStunSpear_xenozapper_base,
	FGGasMask_base as docs_json_ts_0_3_7_7_classes_base_FGGasMask_base,
	FGItemDescriptorNuclearFuel_base as docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_base,
	FGJetPack_base_base as docs_json_ts_0_3_7_7_classes_base_FGJetPack_base_base,
	FGJumpingStilts_base as docs_json_ts_0_3_7_7_classes_base_FGJumpingStilts_base,
	FGNobeliskDetonator_base as docs_json_ts_0_3_7_7_classes_base_FGNobeliskDetonator_base,
	FGObjectScanner_base as docs_json_ts_0_3_7_7_classes_base_FGObjectScanner_base,
	FGResourceDescriptor_base as docs_json_ts_0_3_7_7_classes_base_FGResourceDescriptor_base,
	FGSuitBase_base as docs_json_ts_0_3_7_7_classes_base_FGSuitBase_base,
	FGWeaponInstantFire_base_base_base as docs_json_ts_0_3_7_7_classes_base_FGWeaponInstantFire_base_base_base,
	FGWeaponProjectileFire_base_base as docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectileFire_base_base,
	FGWeaponProjectileFire_base_random_base as docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectileFire_base_random_base,
	isDescribed as docs_json_ts_0_3_7_7_classes_base_isDescribed,
} from './../../0.3.7.7/classes/Base.ts';

import type {
	Texture2D as docs_json_ts_0_4_2_11_properties_Texture2D,
	TintColor as docs_json_ts_0_4_2_11_properties_TintColor,
} from './../../0.4.2.11/types/properties.ts';

type FGAmmoType_base = FGAmmoType_base_base & {
	mFiringDirection: docs_json_ts_common_types_XYZ_decimal_string,
	mReloadTimeMultiplier: docs_json_ts_common_types_decimal_string,
	mFireRate: docs_json_ts_common_types_decimal_string,
	mFiringTransformIgnoresDispersion: docs_json_ts_common_types_bool_string,
	mDispersionFireRateMultiplier: docs_json_ts_common_types_decimal_string,
	mDispersionPerShot: docs_json_ts_common_types_decimal_string,
	mRestingDispersion: docs_json_ts_common_types_decimal_string,
	mFiringDispersion: docs_json_ts_common_types_decimal_string,
	mDispersionRecoveryTime?: docs_json_ts_common_types_decimal_string,
	mMagazineMeshMaterials: null | [
		{
			MaterialInterface: `MaterialInstanceConstant'"/Game/FactoryGame/Equipment/${'RebarGun' | 'Rifle' | 'Holiday/SnowballWeapon' | 'NobeliskDetonator'}${'/Material/'}${Exclude<string, ''>}${'.'}${Exclude<string, ''>}${'"\''}` | `MaterialInstanceConstant'"/Game/FactoryGame/Events/${Exclude<string, ''>}${'/Materials/'}${Exclude<string, ''>}${'.'}${Exclude<string, ''>}${'"\''}` | `Material'"/Game/FactoryGame/MasterMaterials/${Exclude<string, ''>}${'.'}${Exclude<string, ''>}${'"\''}`,
			MaterialSlotName: 'lambert1' | 'Rifle' | 'lambert9_001' | 'lambert10' | 'lambert2' | 'Material_003' | 'Material_002' | 'Rocket1' | 'Rocket2' | '01 - Default',
			ImportedMaterialSlotName: 'lambert1' | 'Rifle' | 'lambert9_001' | 'lambert10' | 'lambert2' | 'Material_003' | 'Material_002' | 'Rocket1' | 'Rocket2' | '01 - Default',
			UVChannelData: {
				bInitialized: docs_json_ts_common_types_bool_string,
				['LocalUVDensities[0]']: docs_json_ts_common_types_decimal_string,
				['LocalUVDensities[1]']?: docs_json_ts_common_types_decimal_string,
			},
		},
		...{
			MaterialInterface: `MaterialInstanceConstant'"/Game/FactoryGame/Equipment/${'RebarGun' | 'Rifle' | 'Holiday/SnowballWeapon' | 'NobeliskDetonator'}${'/Material/'}${Exclude<string, ''>}${'.'}${Exclude<string, ''>}${'"\''}` | `MaterialInstanceConstant'"/Game/FactoryGame/Events/${Exclude<string, ''>}${'/Materials/'}${Exclude<string, ''>}${'.'}${Exclude<string, ''>}${'"\''}` | `Material'"/Game/FactoryGame/MasterMaterials/${Exclude<string, ''>}${'.'}${Exclude<string, ''>}${'"\''}`,
			MaterialSlotName: 'lambert1' | 'Rifle' | 'lambert9_001' | 'lambert10' | 'lambert2' | 'Material_003' | 'Material_002' | 'Rocket1' | 'Rocket2' | '01 - Default',
			ImportedMaterialSlotName: 'lambert1' | 'Rifle' | 'lambert9_001' | 'lambert10' | 'lambert2' | 'Material_003' | 'Material_002' | 'Rocket1' | 'Rocket2' | '01 - Default',
			UVChannelData: {
				bInitialized: docs_json_ts_common_types_bool_string,
				['LocalUVDensities[0]']: docs_json_ts_common_types_decimal_string,
				['LocalUVDensities[1]']?: docs_json_ts_common_types_decimal_string,
			},
		}[],
	],
	mDamageTypesOnImpact: null | docs_json_ts_0_6_1_5_properties_DamageTypes,
	mMuzzleFlashScale: docs_json_ts_common_types_XYZ_decimal_string,
	mFiringSounds: null | docs_json_ts_0_6_1_5_properties_DocsDotJson_AkAudioEvent_quoted_list,
	mAmmoColor: docs_json_ts_common_types_RGBA,
	mAmmoScale: docs_json_ts_common_types_decimal_string,
	mAmmoTickFunction: {
		bCanEverTick: docs_json_ts_common_types_bool_string,
		bStartWithTickEnabled: docs_json_ts_common_types_bool_string,
		bAllowTickOnDedicatedServer: docs_json_ts_common_types_bool_string,
	},
	mAmmoDamageFalloff: docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_only | docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_with_ExternalCurve,
};

type FGAmmoType_base_base = docs_json_ts_0_5_2_1_classes_base_FGItemDescAmmoTypeProjectile_base_base & docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable & FGItemDescriptor_base;

type FGAmmoTypeInstantHit_base = FGAmmoType_base & {
	mPlayFireEffects: docs_json_ts_common_types_bool_string,
};

type FGAmmoTypeInstantHit_Desc_CartridgeChaos_C = FGAmmoTypeInstantHit_base & {
	Location: docs_json_ts_common_types_XYZ_decimal_string,
	Trail_Velocity: docs_json_ts_common_types_decimal_string,
};

type FGAmmoTypeProjectile = FGAmmoType_base & {
	mInitialProjectileSpeedOverride: docs_json_ts_common_types_decimal_string_signed,
	mProjectileMaxSpeedOverride: docs_json_ts_common_types_decimal_string_signed,
	mProjectileHealthOverride: docs_json_ts_common_types_decimal_string_signed,
	mProjectileLifespan: docs_json_ts_common_types_decimal_string_signed,
	mProjectileStickspan: docs_json_ts_common_types_decimal_string_signed,
	mCanTakeDamageBySameProjectileOrChild: docs_json_ts_common_types_bool_string,
	mDamageTypesAtEndOfLife: null | [
		...`BP_RadialDamageType_Explosive_C'"/Game/FactoryGame/${'Equipment' | 'Resource'}${'/'}${string}${'/Desc_'}${string}${'.Default__Desc_'}${string}${'_C:BP_RadialDamageType_Explosive_C_'}${'0' | '1'}${'"\''}`[],
	] | [
		...`BP_RadialDamageType_Gas_C'"/Game/FactoryGame/${'Equipment' | 'Resource'}${'/'}${string}${'/Desc_'}${string}${'.Default__Desc_'}${string}${'_C:BP_RadialDamageType_Gas_C_'}${'0' | '1'}${'"\''}`[],
	],
	mGravityScaleOverLifespan: docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_only,
	mHomingProjectile: docs_json_ts_common_types_bool_string,
	mHomingNeedsValidTarget: docs_json_ts_common_types_bool_string,
	mMaxHomingAccelerationMagnitudeOverride: docs_json_ts_common_types_decimal_string_signed,
	mHomingMagnitudeMultiplierOverLifespan: docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_only,
	mHomingMagnitudeMultiplierOverDistanceToTarget: docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_only,
	mHomingOverlapSize: docs_json_ts_common_types_decimal_string,
	mHomingAngleLimit: docs_json_ts_common_types_decimal_string,
	mHomingOverrideTargets: null | [
		{
			ActorClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
		},
		...{
			ActorClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
		}[],
	],
};

type FGAmmoTypeSpreadshot = FGAmmoType_base & {
	SpreadTrail_Velocity: docs_json_ts_common_types_decimal_string,
	mNumShots: {
		Min: docs_json_ts_common_types_integer_string,
		Max: docs_json_ts_common_types_integer_string,
	},
	mSpreadAngleDegrees: docs_json_ts_common_types_decimal_string,
};

type FGBuildable_base = FGBuildable_base_pre_update8 & FGBuildable_base_version_specific & docs_json_ts_0_5_2_1_classes_base_FGBuildable_base;

type FGBuildable_base_pre_update8 = {
	mAlternativeMaterialRecipes: null | [
		{
			mMaterial: `/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_${string}${'.MaterialDesc_Foundation_'}${string}`,
			mRecipe?: `/Game/FactoryGame/Buildable/Building/Foundation/${string}${'/Recipe_'}${string}${'.Recipe_'}${string}${'_C'}`,
		},
		...{
			mMaterial: `/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_${string}${'.MaterialDesc_Foundation_'}${string}`,
			mRecipe?: `/Game/FactoryGame/Buildable/Building/Foundation/${string}${'/Recipe_'}${string}${'.Recipe_'}${string}${'_C'}`,
		}[],
	],
	mAllowPatterning: docs_json_ts_common_types_bool_string,
	mAffectsOcclusion: docs_json_ts_common_types_bool_string,
	mOcclusionShape: 'ROCS_Box' | 'ROCS_Ramp' | 'ROCS_Box_Special' | 'ROCS_CornerRamp',
	mScaleCustomOffset: docs_json_ts_common_types_decimal_string,
	mCustomScaleType: 'ROCSS_Center' | 'ROCSS_Top' | 'ROCSS_Bot',
};

type FGBuildable_base_version_specific = {
	mOcclusionBoxInfo: null | [
		{
			Min: docs_json_ts_common_types_XYZ_decimal_string,
			Max: docs_json_ts_common_types_XYZ_decimal_string,
			IsValid?: '0',
		},
		...{
			Min: docs_json_ts_common_types_XYZ_decimal_string,
			Max: docs_json_ts_common_types_XYZ_decimal_string,
			IsValid?: '0',
		}[],
	],
};

type FGBuildable_foundation_mDisableSnapOn = FGBuildable_base & {
	mDisableSnapOn: docs_json_ts_common_types_empty_object | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_front_bottom | docs_json_ts_0_5_2_1_properties_mDisableSnapOn_top | docs_json_ts_0_5_2_1_properties_mDisableSnapOn_bottom | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_top_bottom,
};

type FGBuildable_occupied = docs_json_ts_0_5_2_1_classes_base_FGBuildable_occupied & FGBuildable_base;

type FGBuildable_powered = docs_json_ts_0_5_2_1_classes_base_FGBuildable_powered & FGBuildable_base;

type FGBuildable_powered_base = docs_json_ts_0_5_2_1_classes_base_FGBuildable_powered_base_base & docs_json_ts_0_4_2_11_classes_base_FGBuildable_powered_base_base & FGBuildable_base;

type FGBuildable_tiered = docs_json_ts_0_5_2_1_classes_base_FGBuildable_tiered & FGBuildable_base;

type FGBuildable_with_depth = FGBuildable_base & {
	mDepth: docs_json_ts_common_types_decimal_string,
};

type FGBuildableAttachmentMerger = docs_json_ts_0_5_2_1_classes_base_FGBuildableAttachmentMerger & FGBuildable_base;

type FGBuildableAttachmentSplitter = docs_json_ts_0_5_2_1_classes_base_FGBuildableAttachment_splitter & FGBuildable_base;

type FGBuildableBeam = docs_json_ts_0_5_2_1_classes_base_FGBuildableBeam & FGBuildable_base;

type FGBuildableCircuitSwitch = docs_json_ts_0_5_2_1_classes_base_FGBuildableCircuitSwitch & FGBuildable_base;

type FGBuildableConveyorBelt = docs_json_ts_0_5_2_1_classes_base_FGBuildableConveyorBelt_spline & FGBuildable_base;

type FGBuildableConveyorLift = docs_json_ts_0_5_2_1_classes_base_FGBuildableConveyorLift & FGBuildable_base;

type FGBuildableCornerWall = FGBuildableCornerWall_version_specific & FGBuildableCornerWall_base;

type FGBuildableCornerWall_version_specific = {
	mIsInverted: docs_json_ts_common_types_bool_string,
};

type FGBuildableCornerWall_base = docs_json_ts_0_5_2_1_classes_base_FGBuildableCornerWall & FGBuildable_base;

type FGBuildableDockingStation = docs_json_ts_0_5_2_1_classes_base_FGBuildableDockingStation_base & docs_json_ts_0_3_7_7_classes_base_FGBuildable_docking_station_base_base & docs_json_ts_0_3_7_7_classes_base_FGBuildableDockingStation_with_mFuelTransferSpeed & FGBuildable_powered;

type FGBuildableDoor = FGBuildableDoor_manual | FGBuildableDoor_automated;

type FGBuildableDoor_automated = docs_json_ts_0_5_2_1_classes_base_FGBuildableDoor_automated & FGBuildable_base;

type FGBuildableDoor_manual = docs_json_ts_0_5_2_1_classes_base_FGBuildableDoor_manual & FGBuildable_base;

type FGBuildableDroneStation = docs_json_ts_0_5_2_1_classes_base_FGBuildableDroneStation & FGBuildable_base;

type FGBuildableFactory_jump_pad = docs_json_ts_0_5_2_1_classes_base_FGBuildableFactory_jump_pad & FGBuildable_base;

type FGBuildableFactory_landing_pad = docs_json_ts_0_5_2_1_classes_base_FGBuildableFactory_landing_pad & FGBuildable_base;

type FGBuildableFactorySimpleProducer = docs_json_ts_0_5_2_1_classes_base_FGBuildableFactorySimpleProducer & FGBuildable_base;

type FGBuildableFloodlight = docs_json_ts_0_5_2_1_classes_base_FGBuildableFloodlight & FGBuildable_base;

type FGBuildableFoundation = FGBuildableFoundation_base & {
	mDisableAttachmentSnapOn: docs_json_ts_common_types_empty_object | docs_json_ts_0_6_1_5_properties_mDisableSnapOn_front_right | docs_json_ts_0_5_2_1_properties_mDisableSnapOn_top | docs_json_ts_0_5_2_1_properties_mDisableSnapOn_bottom,
};

type FGBuildableFoundation_base = docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_height_base & docs_json_ts_0_5_2_1_classes_base_FGBuildable_isFrame & FGBuildable_foundation_mDisableSnapOn & docs_json_ts_0_5_2_1_classes_base_FGBuildable_with_elevation & docs_json_ts_0_3_7_7_classes_base_FGBuildable_with_width_base & FGBuildable_with_depth;

type FGBuildableFrackingActivator = docs_json_ts_0_4_2_11_classes_base_FGBuildableFrackingActivator_base & FGBuildableResourceExtractor_base_version_specific;

type FGBuildableFrackingExtractor = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_timed & docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_base_piped & FGBuildableResourceExtractor_base_version_specific;

type FGBuildableGeneratorFuel_biomass = docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorFuel_biomass & FGBuildable_base;

type FGBuildableGeneratorFuel_coal = docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorFuel_coal & FGBuildable_base;

type FGBuildableGeneratorFuel_fuel = docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorFuel_fuel & FGBuildable_base;

type FGBuildableGeneratorGeoThermal = docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorGeoThermal & FGBuildable_base;

type FGBuildableGeneratorNuclear = docs_json_ts_0_5_2_1_classes_base_FGBuildableGeneratorNuclear & FGBuildable_base;

type FGBuildableJumppad = docs_json_ts_0_5_2_1_classes_base_FGBuildableJumppad & FGBuildable_base;

type FGBuildableLadder = docs_json_ts_0_5_2_1_classes_base_FGBuildableLadder & FGBuildable_base;

type FGBuildableLightsControlPanel = docs_json_ts_0_5_2_1_classes_base_FGBuildableLightsControlPanel & FGBuildable_base;

type FGBuildableLightSource_Build_CeilingLight_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableLightSource & FGBuildable_base;

type FGBuildableLightSource_Build_StreetLight_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableLightSource_Build_StreetLight_C & FGBuildable_base;

type FGBuildableMAM = docs_json_ts_0_5_2_1_classes_base_FGBuildableMAM & FGBuildable_base;

type FGBuildableManufacturer_Build_AssemblerMk1_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_AssemblerMk1_C & FGBuildable_base;

type FGBuildableManufacturer_Build_Blender_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_Blender_C & FGBuildable_base;

type FGBuildableManufacturer_Build_ConstructorMk1_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_ConstructorMk1_C & FGBuildable_base;

type FGBuildableManufacturer_Build_FoundryMk1_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_FoundryMk1_C & FGBuildable_base;

type FGBuildableManufacturer_Build_HadronCollider_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_HadronCollider_C & FGBuildable_base;

type FGBuildableManufacturer_Build_ManufacturerMk1_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_ManufacturerMk1_C & FGBuildable_base;

type FGBuildableManufacturer_Build_OilRefinery_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_OilRefinery_C & FGBuildable_base;

type FGBuildableManufacturer_Build_Packager_C = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_Packager_C & FGBuildable_base;

type FGBuildableManufacturer_Build_SmelterMk1_C = FGBuildableManufacturer_Build_SmelterMk1_C_base & docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_SmelterMk1_C & FGBuildable_base;

type FGBuildableManufacturer_Build_SmelterMk1_C_base = docs_json_ts_0_5_2_1_classes_base_FGBuildableManufacturer_Build_SmelterMk1_C_base & {
	mCachedCurrentPotential: docs_json_ts_common_types_integer_string,
};

type FGBuildablePassthrough = docs_json_ts_0_5_2_1_classes_base_FGBuildablePassthrough & FGBuildable_base;

type FGBuildablePillar = docs_json_ts_0_5_2_1_classes_base_FGBuildablePillar & FGBuildable_base;

type FGBuildablePipeHyper = docs_json_ts_0_5_2_1_classes_base_FGBuildablePipeHyper & FGBuildable_base;

type FGBuildablePipeline = FGBuildablePipeline_version_specific & FGBuildablePipeline_base;

type FGBuildablePipeline_version_specific = {
	mLastContentForSound: docs_json_ts_common_types_decimal_string,
	mLastFlowForSound: docs_json_ts_common_types_decimal_string,
	mUpdateSoundsHandle: docs_json_ts_common_types_empty_object,
};

type FGBuildablePipeline_base = docs_json_ts_0_3_7_7_classes_base_FGBuildablePipeline_base_root & docs_json_ts_0_5_2_1_classes_base_FGBuildablePipeline_base_spline & FGBuildable_base;

type FGBuildablePipelineJunction = docs_json_ts_0_5_2_1_classes_base_FGBuildablePipelineJunction & FGBuildable_base;

type FGBuildablePipelinePump_pump = docs_json_ts_0_5_2_1_classes_base_FGBuildablePipelinePump_pump & FGBuildable_base;

type FGBuildablePipelinePump_valve = docs_json_ts_0_5_2_1_classes_base_FGBuildablePipelinePump_valve & FGBuildable_base;

type FGBuildablePipelineSupport = docs_json_ts_0_5_2_1_classes_base_FGBuildablePipelineSupport & FGBuildable_base;

type FGBuildablePipeReservoir = docs_json_ts_0_5_2_1_classes_base_FGBuildablePipeReservoir & FGBuildable_base;

type FGBuildablePole = docs_json_ts_0_3_7_7_classes_base_FGBuildablePole_base & FGBuildable_base;

type FGBuildablePowerPole = docs_json_ts_0_5_2_1_classes_base_FGBuildablePowerPole & FGBuildable_base;

type FGBuildablePowerStorage = docs_json_ts_0_5_2_1_classes_base_FGBuildablePowerStorage & FGBuildable_base;

type FGBuildableRadarTower = FGBuildable_powered & FGBuildableRadarTower_base;

type FGBuildableRadarTower_base = FGBuildable_base & {
	mMapText: 'Radar Tower',
	mRevealRadius: docs_json_ts_common_types_decimal_string,
	mScannableDescriptors: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type FGBuildableRailroadSignal_base = docs_json_ts_0_5_2_1_classes_base_FGBuildableRailroadSignal_base & FGBuildable_base;

type FGBuildableRailroadSignal_block = docs_json_ts_0_5_2_1_classes_base_FGBuildableRailroadSignal_block & FGBuildable_base;

type FGBuildableRailroadStation = docs_json_ts_0_5_2_1_classes_base_FGBuildableRailroadStation & FGBuildable_base;

type FGBuildableRailroadTrack = docs_json_ts_0_5_2_1_classes_base_FGBuildableRailroadTrack & FGBuildable_base;

type FGBuildableRamp = FGBuildableRamp_base & {
	mDisableAttachmentSnapOn: docs_json_ts_common_types_empty_object | docs_json_ts_0_5_2_1_properties_mDisableSnapOn_top | docs_json_ts_0_3_7_7_properties_mDisableSnapOn_top_bottom | docs_json_ts_0_5_2_1_properties_mDisableSnapOn_bottom,
};

type FGBuildableRamp_base = FGBuildableFoundation_base & docs_json_ts_0_5_2_1_classes_base_FGBuildableRamp_base & FGBuildable_base;

type FGBuildableResourceExtractor_base = FGBuildableResourceExtractor_base_version_specific & FGBuildableResourceExtractor_base_base;

type FGBuildableResourceExtractor_base_base = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_base & docs_json_ts_0_3_7_7_classes_base_FGBuildable_powered_base_resources_base & FGBuildable_powered;

type FGBuildableResourceExtractor_base_untimed = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_base_base & FGBuildable_powered;

type FGBuildableResourceExtractor_base_untimed_base = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_base_base_base_base_base & FGBuildable_powered_base;

type FGBuildableResourceExtractor_base_version_specific = FGBuildableResourceExtractor_base_version_specific_base & FGBuildableResourceExtractor_base_untimed;

type FGBuildableResourceExtractor_base_version_specific_base = FGBuildableResourceExtractor_base_untimed_base & {
	mTryFindMissingResource: docs_json_ts_common_types_bool_string,
	mAllowedResourceForms: docs_json_ts_0_6_1_5_properties_mAllowedResourceForms,
};

type FGBuildableResourceExtractor_miner_mk1 = docs_json_ts_0_4_2_11_classes_base_FGBuildableResourceExtractor_miner_mk1_base_base & FGBuildableResourceExtractor_base;

type FGBuildableResourceExtractor_miner_mk2 = docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceExtractor_miner_mk2 & FGBuildableResourceExtractor_base;

type FGBuildableResourceExtractor_miner_mk3 = docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceExtractor_miner_mk3 & FGBuildableResourceExtractor_base;

type FGBuildableResourceExtractor_oil = docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceExtractor_oil & FGBuildableResourceExtractor_base;

type FGBuildableResourceExtractor_water = docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceExtractor_water & FGBuildableResourceExtractor_base;

type FGBuildableResourceSink = docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceSink & FGBuildable_base;

type FGBuildableResourceSinkShop = docs_json_ts_0_5_2_1_classes_base_FGBuildableResourceSinkShop & FGBuildable_base;

type FGBuildableSplitterSmart = docs_json_ts_0_5_2_1_classes_base_FGBuildableSplitterSmart & FGBuildable_base;

type FGBuildableStair = docs_json_ts_0_5_2_1_classes_base_FGBuildableStair & FGBuildable_base;

type FGBuildableStorage = docs_json_ts_0_5_2_1_classes_base_FGBuildableStorage & FGBuildable_base;

type FGBuildableTradingPost = docs_json_ts_0_5_2_1_classes_base_FGBuildableTradingPost & FGBuildable_base;

type FGBuildableTrainPlatform = docs_json_ts_0_5_2_1_classes_base_FGBuildableTrainPlatform & FGBuildable_base;

type FGBuildableTrainPlatformCargo = docs_json_ts_0_5_2_1_classes_base_FGBuildableTrainPlatformCargo & FGBuildableTrainPlatformCargo_base;

type FGBuildableTrainPlatformCargo_base = FGBuildable_base & {
	mHasAnyRelevantStacksToMove: docs_json_ts_common_types_bool_string,
	mAllowDepartureNoValidItemsToTransfer: docs_json_ts_common_types_bool_string,
};

type FGBuildableWalkway = docs_json_ts_0_5_2_1_classes_base_FGBuildable_with_size_and_elevation & FGBuildable_base;

type FGBuildableWall = docs_json_ts_0_5_2_1_classes_base_FGBuildableWall & FGBuildable_base;

type FGBuildableWidgetSign = docs_json_ts_0_5_2_1_classes_base_FGBuildableWidgetSign & FGBuildable_base;

type FGBuildableWire = docs_json_ts_0_5_2_1_classes_base_FGBuildableWire & FGBuildable_base;

type FGChainsaw = FGChainsaw_base & {
	mCurrentOutputDataSFX: docs_json_ts_common_types_decimal_string,
	mAkEventsArray: docs_json_ts_0_6_1_5_properties_DocsDotJson_AkAudioEvent_quoted_list,
	mEventIndexSFX: docs_json_ts_common_types_integer_string,
	mCurrentAkID: docs_json_ts_common_types_integer_string,
};

type FGChainsaw_base = docs_json_ts_0_3_7_7_classes_base_FGChainsaw & FGEquipment;

type FGConsumableDescriptor = docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor_base & docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable_base & FGItemDescriptor_base;

type FGConsumableEquipment = docs_json_ts_0_4_2_11_classes_base_FGConsumableEquipment_base & FGEquipment;

type FGDescriptor = docs_json_ts_0_4_2_11_classes_base_FGDescriptor_base & {
	mPersistentBigIcon: docs_json_ts_0_4_2_11_properties_Texture2D | 'None',
	mSmallIcon: docs_json_ts_0_4_2_11_properties_Texture2D | 'None',
};

type FGEquipment = docs_json_ts_0_4_2_11_classes_base_FGEquipment_base & FGEquipment_version_specific;

type FGEquipment_version_specific = {
	mOnlyVisibleToOwner: docs_json_ts_common_types_bool_string,
	mReceivedDamageModifiers: '',
	mEquipmentSlot: 'ES_ARMS' | 'ES_HEAD' | 'ES_BACK' | 'ES_BODY' | 'ES_LEGS',
};

type FGEquipment_noisy = FGEquipment & {
	mActiveNoiseFrequency: docs_json_ts_common_types_decimal_string,
};

type FGEquipmentStunSpear_base = FGEquipment & FGEquipmentStunSpear_base_mDamageTypes & FGEquipmentStunSpear_base_version_specific;

type FGEquipmentStunSpear_base_mDamageTypes = {
	mDamageTypes: docs_json_ts_0_6_1_5_properties_DamageTypes,
};

type FGEquipmentStunSpear_base_version_specific = {
	mAttackSweepRadius: docs_json_ts_common_types_decimal_string,
};

type FGEquipmentStunSpear_xenobasher = docs_json_ts_0_3_7_7_classes_base_FGEquipmentStunSpear_xenobasher_base & FGEquipmentStunSpear_base;

type FGEquipmentStunSpear_xenozapper = docs_json_ts_0_3_7_7_classes_base_FGEquipmentStunSpear_xenozapper_base & FGEquipmentStunSpear_base;

type FGEquipmentZipline = docs_json_ts_0_4_2_11_classes_base_FGEquipmentZipline & FGEquipment_noisy;

type FGGasMask = FGGasMask_base & {
	mIsInPoisonArea: docs_json_ts_common_types_bool_string,
};

type FGGasMask_base = docs_json_ts_0_3_7_7_classes_base_FGGasMask_base & FGEquipment;

type FGGolfCartDispenser = docs_json_ts_0_5_2_1_classes_base_FGGolfCartDispenser & FGEquipment;

type FGHoverPack = docs_json_ts_0_4_2_11_classes_base_FGHoverPack_base & FGEquipment_noisy;

type FGItemDescriptor = docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable_base & FGItemDescriptor_base;

type FGItemDescriptor_base = FGDescriptor & {
	mCrosshairMaterial: 'None' | `/Game/FactoryGame/Interface/UI/Material/Crosshairs/MI_UI_Crosshair_${string}${'.MI_UI_Crosshair_'}${string}`,
	mDescriptorStatBars: null | [
		{
			Value: docs_json_ts_common_types_integer_string,
		},
		...{
			Value: docs_json_ts_common_types_integer_string,
		}[],
	],
	mCompatibleItemDescriptors: null | [
		{
			CompatibleItemType: 'CIT_AMMO' | 'CIT_WEAPON',
			CompatibleItemDescriptors: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
		},
		...{
			CompatibleItemType: 'CIT_AMMO' | 'CIT_WEAPON',
			CompatibleItemDescriptors: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
		}[],
	],
	mClassToScanFor: 'None' | `/Game/FactoryGame/${'Resource/Environment/' | 'World/Benefit/'}${string}${'/BP_'}${string}${'.BP_'}${string}`,
	mScannableType: 'RTWOT_Default' | 'RTWOT_WeakSignal' | 'RTWOT_Flora',
	mShouldOverrideScannerDisplayText: docs_json_ts_common_types_bool_string,
	mScannerDisplayText: string,
	mScannerLightColor: docs_json_ts_common_types_BGRA,
	mMenuPriority: docs_json_ts_common_types_decimal_string,
	mSubCategories: null | docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type FGItemDescriptorNuclearFuel = docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_base & FGItemDescriptor_base & docs_json_ts_0_4_2_11_classes_base_FGItemDescriptorNuclearFuel_base;

type FGJetPack = FGJetPack_base & {
	mJumpTimeStamp: docs_json_ts_common_types_decimal_string_signed,
};

type FGJetPack_base = docs_json_ts_0_3_7_7_classes_base_FGJetPack_base_base & FGEquipment_noisy;

type FGJumpingStilts = FGJumpingStilts_base & {
	mEquipmentSlot: 'ES_LEGS',
};

type FGJumpingStilts_base = docs_json_ts_0_3_7_7_classes_base_FGJumpingStilts_base & FGEquipment;

type FGNobeliskDetonator = docs_json_ts_0_5_2_1_classes_base_FGNobeliskDetonator_base & docs_json_ts_0_4_2_11_classes_base_FGWeaponProjectile_base_base & docs_json_ts_0_3_7_7_classes_base_FGNobeliskDetonator_base & FGWeapon_base & FGEquipment;

type FGObjectScanner = FGObjectScanner_base & {
	mScannableDescriptors: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
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
			Icon: `/Game/FactoryGame/${'Resource' | 'Equipment'}${string}${'/'}${string}${'.'}${string}${'_'}${'64' | '64_new'}` | ('/Game/FactoryGame/Prototype/WAT/UI/T_WAT1.T_WAT1' | '/Game/FactoryGame/Prototype/WAT/UI/T_WAT2.T_WAT2'),
			RequiredSchematic: `/Game/FactoryGame/Schematics/Research/${string}${'/'}${string}${'.'}${string}${'_C'}`,
			PreCacheAllOfType?: docs_json_ts_common_types_bool_string,
			ShouldOverrideDetectionRange?: docs_json_ts_common_types_bool_string,
			NewDetectionRange?: docs_json_ts_common_types_decimal_string,
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
			Icon: `/Game/FactoryGame/${'Resource' | 'Equipment'}${string}${'/'}${string}${'.'}${string}${'_'}${'64' | '64_new'}` | ('/Game/FactoryGame/Prototype/WAT/UI/T_WAT1.T_WAT1' | '/Game/FactoryGame/Prototype/WAT/UI/T_WAT2.T_WAT2'),
			RequiredSchematic: `/Game/FactoryGame/Schematics/Research/${string}${'/'}${string}${'.'}${string}${'_C'}`,
			PreCacheAllOfType?: docs_json_ts_common_types_bool_string,
			ShouldOverrideDetectionRange?: docs_json_ts_common_types_bool_string,
			NewDetectionRange?: docs_json_ts_common_types_decimal_string,
		}[],
	],
};

type FGObjectScanner_base = docs_json_ts_0_3_7_7_classes_base_FGObjectScanner_base & FGEquipment;

type FGParachute = docs_json_ts_0_4_2_11_classes_base_FGParachute & FGEquipment;

type FGPipeHyperStart = docs_json_ts_0_5_2_1_classes_base_FGPipeHyperStart & FGBuildable_base;

type FGPortableMinerDispenser = docs_json_ts_0_4_2_11_classes_base_FGPortableMinerDispenser & FGEquipment;

type FGResourceDescriptor = docs_json_ts_0_3_7_7_classes_base_FGResourceDescriptor_base & docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable & FGItemDescriptor_base;

type FGSchematic_base = FGSchematic_base_base & FGSchematic_version_specific;

type FGSchematic_version_specific = {
	mHiddenUntilDependenciesMet: docs_json_ts_common_types_bool_string,
	mUnlocks: [
		...docs_json_ts_0_6_1_5_properties_mUnlocks_item[],
	],
	mCost: null | docs_json_ts_0_3_7_7_properties_ItemClass_Amount_list | docs_json_ts_0_6_1_5_properties_ItemClass_list,
};

type FGSchematic_base_base = docs_json_ts_0_4_2_11_classes_base_FGSchematic_base_base_props_sans_mSchematicIcon & docs_json_ts_0_5_2_1_classes_base_FGSchematic_base_base_base & FGSchematic_base_base_props_with_mSchematicIcon;

type FGSchematic_base_base_props_with_mSchematicIcon = {
	mSchematicIcon: {
		ImageSize: docs_json_ts_common_types_XY_decimal_string,
		Margin: docs_json_ts_common_types_empty_object,
		TintColor: docs_json_ts_0_4_2_11_properties_TintColor,
		ResourceObject?: `Texture2D'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`,
		UVRegion: {
			Min: docs_json_ts_common_types_XY_decimal_string,
			Max: docs_json_ts_common_types_XY_decimal_string,
			bIsValid: '0',
		},
		DrawAs: 'Image',
	},
};

type FGSchematic_with_described_unlocks = docs_json_ts_0_5_2_1_classes_base_FGSchematic_with_described_unlocks_base_base & FGSchematic_base;

type FGSuitBase = FGSuitBase_base & {
	mEquipmentSlot: 'ES_BODY',
	mIsBurningFuel: docs_json_ts_common_types_bool_string,
};

type FGSuitBase_base = docs_json_ts_0_3_7_7_classes_base_FGSuitBase_base & FGEquipment;

type FGVehicleDescriptor_Desc_CyberWagon_C = docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_fueled_with_inventory_base & docs_json_ts_0_3_7_7_classes_base_isDescribed & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_DroneTransport_C = docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_with_inventory_base & docs_json_ts_0_3_7_7_classes_base_isDescribed & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_Explorer_C = docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_fueled_with_inventory_base & docs_json_ts_0_3_7_7_classes_base_isDescribed & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_FreightWagon_C = docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_with_inventory_base & docs_json_ts_0_3_7_7_classes_base_isDescribed & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_Locomotive_C = docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_powered_base & docs_json_ts_0_3_7_7_classes_base_isDescribed & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_Tractor_C = docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_fueled_with_inventory_base & docs_json_ts_0_3_7_7_classes_base_isDescribed & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_Truck_C = docs_json_ts_0_4_2_11_classes_base_FGVehicleDescriptor_fueled_with_inventory_base & docs_json_ts_0_3_7_7_classes_base_isDescribed & FGItemDescriptor_base;

type FGWeapon_base = docs_json_ts_0_5_2_1_classes_base_FGWeapon_base_base & {
	mAttachMagazineToPlayer: docs_json_ts_common_types_bool_string,
	mMuzzleSocketName: 'muzzleSocket' | 'MuzzleSocket' | 'None',
	mCurrentMagazineBoneName: 'CurrentMagazine' | 'hand_rSocket',
	mEjectMagazineBoneName: 'EjectMagazine' | 'hand_rSocket',
	mDispersionOnNoMagazine: docs_json_ts_common_types_decimal_string,
	mReloadTime: docs_json_ts_common_types_decimal_string,
};

type FGWeapon_Equip_RebarGun_Projectile_C = FGWeapon_Equip_RebarGun_Projectile_C_base & {
	mRebarGunStingerID: docs_json_ts_common_types_integer_string,
	mRebarGunEquipID: docs_json_ts_common_types_integer_string,
};

type FGWeapon_Equip_RebarGun_Projectile_C_base = docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectileFire_base_base & docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectileFire_base_random_base & docs_json_ts_0_4_2_11_classes_base_FGWeaponProjectile_base_base & docs_json_ts_0_4_2_11_classes_base_FGWeaponProjectileFire_base_base & FGWeapon_base & FGEquipment;

type FGWeapon_Equip_Rifle_C = docs_json_ts_0_3_7_7_classes_base_FGWeaponProjectileFire_base_base & docs_json_ts_0_3_7_7_classes_base_FGWeaponInstantFire_base_base_base & docs_json_ts_0_4_2_11_classes_base_FGWeaponProjectile_base_base & docs_json_ts_0_5_2_1_classes_base_FGWeapon_Equip_Rifle_C_base & FGWeapon_base & FGEquipment;

export type {
	FGAmmoType_base,
	FGAmmoType_base_base,
	FGAmmoTypeInstantHit_base,
	FGAmmoTypeInstantHit_Desc_CartridgeChaos_C,
	FGAmmoTypeProjectile,
	FGAmmoTypeSpreadshot,
	FGBuildable_base,
	FGBuildable_base_pre_update8,
	FGBuildable_base_version_specific,
	FGBuildable_foundation_mDisableSnapOn,
	FGBuildable_occupied,
	FGBuildable_powered,
	FGBuildable_powered_base,
	FGBuildable_tiered,
	FGBuildable_with_depth,
	FGBuildableAttachmentMerger,
	FGBuildableAttachmentSplitter,
	FGBuildableBeam,
	FGBuildableCircuitSwitch,
	FGBuildableConveyorBelt,
	FGBuildableConveyorLift,
	FGBuildableCornerWall,
	FGBuildableCornerWall_version_specific,
	FGBuildableCornerWall_base,
	FGBuildableDockingStation,
	FGBuildableDoor,
	FGBuildableDoor_automated,
	FGBuildableDoor_manual,
	FGBuildableDroneStation,
	FGBuildableFactory_jump_pad,
	FGBuildableFactory_landing_pad,
	FGBuildableFactorySimpleProducer,
	FGBuildableFloodlight,
	FGBuildableFoundation,
	FGBuildableFoundation_base,
	FGBuildableFrackingActivator,
	FGBuildableFrackingExtractor,
	FGBuildableGeneratorFuel_biomass,
	FGBuildableGeneratorFuel_coal,
	FGBuildableGeneratorFuel_fuel,
	FGBuildableGeneratorGeoThermal,
	FGBuildableGeneratorNuclear,
	FGBuildableJumppad,
	FGBuildableLadder,
	FGBuildableLightsControlPanel,
	FGBuildableLightSource_Build_CeilingLight_C,
	FGBuildableLightSource_Build_StreetLight_C,
	FGBuildableMAM,
	FGBuildableManufacturer_Build_AssemblerMk1_C,
	FGBuildableManufacturer_Build_Blender_C,
	FGBuildableManufacturer_Build_ConstructorMk1_C,
	FGBuildableManufacturer_Build_FoundryMk1_C,
	FGBuildableManufacturer_Build_HadronCollider_C,
	FGBuildableManufacturer_Build_ManufacturerMk1_C,
	FGBuildableManufacturer_Build_OilRefinery_C,
	FGBuildableManufacturer_Build_Packager_C,
	FGBuildableManufacturer_Build_SmelterMk1_C,
	FGBuildableManufacturer_Build_SmelterMk1_C_base,
	FGBuildablePassthrough,
	FGBuildablePillar,
	FGBuildablePipeHyper,
	FGBuildablePipeline,
	FGBuildablePipeline_version_specific,
	FGBuildablePipeline_base,
	FGBuildablePipelineJunction,
	FGBuildablePipelinePump_pump,
	FGBuildablePipelinePump_valve,
	FGBuildablePipelineSupport,
	FGBuildablePipeReservoir,
	FGBuildablePole,
	FGBuildablePowerPole,
	FGBuildablePowerStorage,
	FGBuildableRadarTower,
	FGBuildableRadarTower_base,
	FGBuildableRailroadSignal_base,
	FGBuildableRailroadSignal_block,
	FGBuildableRailroadStation,
	FGBuildableRailroadTrack,
	FGBuildableRamp,
	FGBuildableRamp_base,
	FGBuildableResourceExtractor_base,
	FGBuildableResourceExtractor_base_base,
	FGBuildableResourceExtractor_base_untimed,
	FGBuildableResourceExtractor_base_untimed_base,
	FGBuildableResourceExtractor_base_version_specific,
	FGBuildableResourceExtractor_base_version_specific_base,
	FGBuildableResourceExtractor_miner_mk1,
	FGBuildableResourceExtractor_miner_mk2,
	FGBuildableResourceExtractor_miner_mk3,
	FGBuildableResourceExtractor_oil,
	FGBuildableResourceExtractor_water,
	FGBuildableResourceSink,
	FGBuildableResourceSinkShop,
	FGBuildableSplitterSmart,
	FGBuildableStair,
	FGBuildableStorage,
	FGBuildableTradingPost,
	FGBuildableTrainPlatform,
	FGBuildableTrainPlatformCargo,
	FGBuildableTrainPlatformCargo_base,
	FGBuildableWalkway,
	FGBuildableWall,
	FGBuildableWidgetSign,
	FGBuildableWire,
	FGChainsaw,
	FGChainsaw_base,
	FGConsumableDescriptor,
	FGConsumableEquipment,
	FGDescriptor,
	FGEquipment,
	FGEquipment_version_specific,
	FGEquipment_noisy,
	FGEquipmentStunSpear_base,
	FGEquipmentStunSpear_base_mDamageTypes,
	FGEquipmentStunSpear_base_version_specific,
	FGEquipmentStunSpear_xenobasher,
	FGEquipmentStunSpear_xenozapper,
	FGEquipmentZipline,
	FGGasMask,
	FGGasMask_base,
	FGGolfCartDispenser,
	FGHoverPack,
	FGItemDescriptor,
	FGItemDescriptor_base,
	FGItemDescriptorNuclearFuel,
	FGJetPack,
	FGJetPack_base,
	FGJumpingStilts,
	FGJumpingStilts_base,
	FGNobeliskDetonator,
	FGObjectScanner,
	FGObjectScanner_base,
	FGParachute,
	FGPipeHyperStart,
	FGPortableMinerDispenser,
	FGResourceDescriptor,
	FGSchematic_base,
	FGSchematic_version_specific,
	FGSchematic_base_base,
	FGSchematic_base_base_props_with_mSchematicIcon,
	FGSchematic_with_described_unlocks,
	FGSuitBase,
	FGSuitBase_base,
	FGVehicleDescriptor_Desc_CyberWagon_C,
	FGVehicleDescriptor_Desc_DroneTransport_C,
	FGVehicleDescriptor_Desc_Explorer_C,
	FGVehicleDescriptor_Desc_FreightWagon_C,
	FGVehicleDescriptor_Desc_Locomotive_C,
	FGVehicleDescriptor_Desc_Tractor_C,
	FGVehicleDescriptor_Desc_Truck_C,
	FGWeapon_base,
	FGWeapon_Equip_RebarGun_Projectile_C,
	FGWeapon_Equip_RebarGun_Projectile_C_base,
	FGWeapon_Equip_Rifle_C,
};
