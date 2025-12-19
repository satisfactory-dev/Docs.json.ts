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
	FGConsumableDescriptor_base as docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor_base,
	FGItemDescriptorNuclearFuel_base as docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_base,
	FGRecipe_base as docs_json_ts_0_3_7_7_classes_base_FGRecipe_base,
} from './../../0.3.7.7/classes/Base.ts';

import type {
	FGDescriptor_sinkable_base as docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable_base,
	FGRecipe_base_base as docs_json_ts_0_4_2_11_classes_base_FGRecipe_base_base,
} from './../../0.4.2.11/classes/Base.ts';

import type {
	FGDescriptor as docs_json_ts_0_6_1_5_classes_base_FGDescriptor,
	FGItemDescriptor_pre_1_0 as docs_json_ts_0_6_1_5_classes_base_FGItemDescriptor_pre_1_0,
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
	FGItemDescriptor_version_specific_mDescriptorStatBars_item as docs_json_ts_0_6_1_5_properties_FGItemDescriptor_version_specific_mDescriptorStatBars_item,
} from './../types/properties.ts';

import type {
	BGRA as docs_json_ts_common_types_BGRA,
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
} from './../../common/types.ts';

import type {
	FGItemDescriptorNuclearFuel_base as docs_json_ts_0_4_2_11_classes_base_overridable_FGItemDescriptorNuclearFuel_base,
} from './../../0.4.2.11/classes/Base.overridable.ts';

import type {
	FGRecipe_version_specific as docs_json_ts_0_5_2_1_classes_base_overridable_FGRecipe_version_specific,
} from './../../0.5.2.1/classes/Base.overridable.ts';

type FGAmmoType_base = FGAmmoType_version_specific & FGItemDescriptor_base;

type FGAmmoType_version_specific = {
	mMagazineMeshMaterials: null | [
		docs_json_ts_0_6_1_5_overridable_mMagazineMeshMaterials_item,
		...docs_json_ts_0_6_1_5_overridable_mMagazineMeshMaterials_item[],
	],
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

type FGConsumableDescriptor = docs_json_ts_0_3_7_7_classes_base_FGConsumableDescriptor_base & docs_json_ts_0_4_2_11_classes_base_FGDescriptor_sinkable_base & FGItemDescriptor_base;

type FGItemDescriptor_base = docs_json_ts_0_6_1_5_classes_base_FGDescriptor & docs_json_ts_0_6_1_5_classes_base_FGItemDescriptor_pre_1_0 & docs_json_ts_0_6_1_5_overridable_has_mSubCategories & FGItemDescriptor_version_specific;

type FGItemDescriptor_version_specific = {
	mCrosshairMaterial: 'None' | `/Game/FactoryGame/Interface/UI/Material/Crosshairs/MI_UI_Crosshair_${Exclude<string, ''>}${'.MI_UI_Crosshair_'}${Exclude<string, ''>}`,
	mDescriptorStatBars: null | [
		docs_json_ts_0_6_1_5_properties_FGItemDescriptor_version_specific_mDescriptorStatBars_item,
		...docs_json_ts_0_6_1_5_properties_FGItemDescriptor_version_specific_mDescriptorStatBars_item[],
	],
	mCompatibleItemDescriptors: null | [
		docs_json_ts_0_6_1_5_overridable_mCompatibleItemDescriptors_item,
		...docs_json_ts_0_6_1_5_overridable_mCompatibleItemDescriptors_item[],
	],
	mScannableType: 'RTWOT_Default' | 'RTWOT_WeakSignal' | 'RTWOT_Flora',
	mShouldOverrideScannerDisplayText: docs_json_ts_common_types_bool_string,
	mScannerDisplayText: string,
	mScannerLightColor: docs_json_ts_common_types_BGRA,
	mMenuPriority: docs_json_ts_common_types_decimal_string,
};

type FGItemDescriptorNuclearFuel = docs_json_ts_0_4_2_11_classes_base_overridable_FGItemDescriptorNuclearFuel_base & docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_base & FGItemDescriptor_base;

type FGObjectScanner_version_specific = {
	mScannableDescriptors: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type FGRecipe = docs_json_ts_0_5_2_1_classes_base_overridable_FGRecipe_version_specific & docs_json_ts_0_3_7_7_classes_base_FGRecipe_base & docs_json_ts_0_4_2_11_classes_base_FGRecipe_base_base & docs_json_ts_0_6_1_5_classes_base_FGRecipe_version_specific;

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
	FGAmmoType_version_specific,
	FGAmmoTypeProjectile_version_specific,
	FGBuildable_base_version_specific,
	FGBuildableRadarTower_version_specific,
	FGConsumableDescriptor,
	FGItemDescriptor_base,
	FGItemDescriptor_version_specific,
	FGItemDescriptorNuclearFuel,
	FGObjectScanner_version_specific,
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
