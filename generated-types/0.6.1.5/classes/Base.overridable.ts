/* eslint-disable @stylistic/max-len */

import type {
	has_mSubCategories as docs_json_ts_0_6_1_5_overridable_has_mSubCategories,
	mAlternativeMaterialRecipes_item as docs_json_ts_0_6_1_5_overridable_mAlternativeMaterialRecipes_item,
	mCompatibleItemDescriptors_item as docs_json_ts_0_6_1_5_overridable_mCompatibleItemDescriptors_item,
	mHomingOverrideTargets_item as docs_json_ts_0_6_1_5_overridable_mHomingOverrideTargets_item,
	mMagazineMeshMaterials_item as docs_json_ts_0_6_1_5_overridable_mMagazineMeshMaterials_item,
	mUnlocks_item as docs_json_ts_0_6_1_5_overridable_mUnlocks_item,
} from './../types/overridable.ts';

import type {
	FalloffCurve_EditorCurveData_only as docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_only,
} from './../../0.5.2.1/types/properties.ts';

import type {
	FalloffCurve_EditorCurveData_with_ExternalCurve as docs_json_ts_0_5_2_1_overridable_FalloffCurve_EditorCurveData_with_ExternalCurve,
} from './../../0.5.2.1/types/overridable.ts';

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
} from './../../0.3.7.7/types/overridable.ts';

import type {
	FGBuildingDescriptor as docs_json_ts_common_classes_FGBuildingDescriptor,
	FGConsumableDescriptor as docs_json_ts_common_classes_FGConsumableDescriptor,
	FGEquipmentDescriptor as docs_json_ts_common_classes_FGEquipmentDescriptor,
	FGItemDescriptorNuclearFuel as docs_json_ts_common_classes_FGItemDescriptorNuclearFuel,
	FGPoleDescriptor as docs_json_ts_common_classes_FGPoleDescriptor,
	FGRecipe as docs_json_ts_common_classes_FGRecipe,
} from './../../common/classes.ts';

import type {
	FGConsumableDescriptor_base as docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor_base,
	FGItemDescriptorNuclearFuel_version_specific as docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_version_specific,
	FGRecipe_version_specific as docs_json_ts_0_3_7_7_classes_base_FGRecipe_version_specific,
	has_mResourceSinkPoints as docs_json_ts_0_3_7_7_classes_base_has_mResourceSinkPoints,
} from './../../0.3.7.7/classes/Base.ts';

import type {
	FGDescriptor_sinkable as docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable,
	FGRecipe_version_specific as docs_json_ts_0_4_2_11_classes_base_FGRecipe_version_specific,
} from './../../0.4.2.11/classes/Base.ts';

import type {
	FGDescriptor as docs_json_ts_0_6_1_5_classes_base_FGDescriptor,
	FGItemDescriptor_pre_1_0 as docs_json_ts_0_6_1_5_classes_base_FGItemDescriptor_pre_1_0,
	FGItemDescriptor_version_specific as docs_json_ts_0_6_1_5_classes_base_FGItemDescriptor_version_specific,
	FGRecipe_version_specific as docs_json_ts_0_6_1_5_classes_base_FGRecipe_version_specific,
	FGVehicleDescriptor_Desc_CyberWagon_C as docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_CyberWagon_C,
	FGVehicleDescriptor_Desc_DroneTransport_C as docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_DroneTransport_C,
	FGVehicleDescriptor_Desc_Explorer_C as docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_Explorer_C,
	FGVehicleDescriptor_Desc_FreightWagon_C as docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_FreightWagon_C,
	FGVehicleDescriptor_Desc_Locomotive_C as docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_Locomotive_C,
	FGVehicleDescriptor_Desc_Tractor_C as docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_Tractor_C,
	FGVehicleDescriptor_Desc_Truck_C as docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_Truck_C,
} from './Base.ts';

import type {
	FGItemDescriptorNuclearFuel_pre_1_0 as docs_json_ts_0_4_2_11_classes_base_overridable_FGItemDescriptorNuclearFuel_pre_1_0,
} from './../../0.4.2.11/classes/Base.overridable.ts';

import type {
	FGRecipe_version_specific as docs_json_ts_0_5_2_1_classes_base_overridable_FGRecipe_version_specific,
} from './../../0.5.2.1/classes/Base.overridable.ts';

type FGAmmoType_base = FGAmmoType_pre_1_0 & FGAmmoType_version_specific & FGItemDescriptor_base;

type FGAmmoType_pre_1_0 = {
	mMagazineMeshMaterials: null | [
		docs_json_ts_0_6_1_5_overridable_mMagazineMeshMaterials_item,
		...docs_json_ts_0_6_1_5_overridable_mMagazineMeshMaterials_item[],
	],
};

type FGAmmoType_version_specific = {
	mAmmoDamageFalloff: docs_json_ts_0_5_2_1_properties_FalloffCurve_EditorCurveData_only | docs_json_ts_0_5_2_1_overridable_FalloffCurve_EditorCurveData_with_ExternalCurve,
};

type FGAmmoTypeProjectile_version_specific = {
	mHomingOverrideTargets: null | [
		docs_json_ts_0_6_1_5_overridable_mHomingOverrideTargets_item,
		...docs_json_ts_0_6_1_5_overridable_mHomingOverrideTargets_item[],
	],
};

type FGBuildable_base_version_specific = {
	mAlternativeMaterialRecipes: null | [
		docs_json_ts_0_6_1_5_overridable_mAlternativeMaterialRecipes_item,
		...docs_json_ts_0_6_1_5_overridable_mAlternativeMaterialRecipes_item[],
	],
};

type FGBuildableRadarTower_version_specific = {
	mScannableDescriptors: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type FGBuildingDescriptor = docs_json_ts_common_classes_FGBuildingDescriptor & FGItemDescriptor_base;

type FGConsumableDescriptor = docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor_base & docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable & docs_json_ts_common_classes_FGConsumableDescriptor & FGItemDescriptor_base;

type FGEquipmentDescriptor = docs_json_ts_0_6_1_5_classes_base_FGDescriptor & docs_json_ts_0_6_1_5_classes_base_FGItemDescriptor_pre_1_0 & docs_json_ts_0_6_1_5_classes_base_FGItemDescriptor_version_specific & docs_json_ts_0_6_1_5_overridable_has_mSubCategories & docs_json_ts_common_classes_FGEquipmentDescriptor & FGItemDescriptor_version_specific;

type FGItemDescriptor_base = docs_json_ts_0_6_1_5_classes_base_FGDescriptor & docs_json_ts_0_6_1_5_classes_base_FGItemDescriptor_pre_1_0 & docs_json_ts_0_6_1_5_classes_base_FGItemDescriptor_version_specific & docs_json_ts_0_6_1_5_overridable_has_mSubCategories & FGItemDescriptor_version_specific;

type FGItemDescriptor_version_specific = {
	mCompatibleItemDescriptors: null | [
		docs_json_ts_0_6_1_5_overridable_mCompatibleItemDescriptors_item,
		...docs_json_ts_0_6_1_5_overridable_mCompatibleItemDescriptors_item[],
	],
};

type FGItemDescriptorNuclearFuel = docs_json_ts_0_4_2_11_classes_base_overridable_FGItemDescriptorNuclearFuel_pre_1_0 & docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_version_specific & docs_json_ts_0_3_7_7_classes_base_has_mResourceSinkPoints & docs_json_ts_common_classes_FGItemDescriptorNuclearFuel & FGItemDescriptor_base;

type FGObjectScanner_version_specific = {
	mScannableDescriptors: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type FGPoleDescriptor = docs_json_ts_common_classes_FGPoleDescriptor & FGItemDescriptor_base;

type FGRecipe = docs_json_ts_0_5_2_1_classes_base_overridable_FGRecipe_version_specific & docs_json_ts_0_3_7_7_classes_base_FGRecipe_version_specific & docs_json_ts_0_4_2_11_classes_base_FGRecipe_version_specific & docs_json_ts_0_6_1_5_classes_base_FGRecipe_version_specific & docs_json_ts_common_classes_FGRecipe;

type FGSchematic_version_specific_mUnlocks = {
	mUnlocks: [
		...docs_json_ts_0_6_1_5_overridable_mUnlocks_item[],
	],
};

type FGVehicleDescriptor_Desc_CyberWagon_C = docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_CyberWagon_C & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_DroneTransport_C = docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_DroneTransport_C & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_Explorer_C = docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_Explorer_C & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_FreightWagon_C = docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_FreightWagon_C & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_Locomotive_C = docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_Locomotive_C & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_Tractor_C = docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_Tractor_C & FGItemDescriptor_base;

type FGVehicleDescriptor_Desc_Truck_C = docs_json_ts_0_6_1_5_classes_base_FGVehicleDescriptor_Desc_Truck_C & FGItemDescriptor_base;

export type {
	FGAmmoType_base,
	FGAmmoType_pre_1_0,
	FGAmmoType_version_specific,
	FGAmmoTypeProjectile_version_specific,
	FGBuildable_base_version_specific,
	FGBuildableRadarTower_version_specific,
	FGBuildingDescriptor,
	FGConsumableDescriptor,
	FGEquipmentDescriptor,
	FGItemDescriptor_base,
	FGItemDescriptor_version_specific,
	FGItemDescriptorNuclearFuel,
	FGObjectScanner_version_specific,
	FGPoleDescriptor,
	FGRecipe,
	FGSchematic_version_specific_mUnlocks,
	FGVehicleDescriptor_Desc_CyberWagon_C,
	FGVehicleDescriptor_Desc_DroneTransport_C,
	FGVehicleDescriptor_Desc_Explorer_C,
	FGVehicleDescriptor_Desc_FreightWagon_C,
	FGVehicleDescriptor_Desc_Locomotive_C,
	FGVehicleDescriptor_Desc_Tractor_C,
	FGVehicleDescriptor_Desc_Truck_C,
};
