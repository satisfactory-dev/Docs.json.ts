/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
} from './../../common/types.ts';

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	ItemClass_Amount_list as docs_json_ts_0_3_7_7_overridable_ItemClass_Amount_list,
} from './../../0.3.7.7/types/overridable--0.8.3.3.ts';

import type {
	FGItemDescriptorNuclearFuel_pre_1_0 as docs_json_ts_0_4_2_11_classes_base_overridable_FGItemDescriptorNuclearFuel_pre_1_0,
} from './../../0.4.2.11/classes/Base.overridable--0.8.3.3.ts';

import type {
	FGItemDescriptorNuclearFuel_version_specific as docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_version_specific,
	FGRecipe_version_specific as docs_json_ts_0_3_7_7_classes_base_FGRecipe_version_specific,
	instructive as docs_json_ts_0_3_7_7_classes_base_instructive,
} from './../../0.3.7.7/classes/Base.ts';

import type {
	FGItemDescriptor_base as docs_json_ts_0_5_2_1_classes_base_FGItemDescriptor_base,
} from './Base.ts';

import type {
	FGRecipe_pre_update6 as docs_json_ts_0_4_2_11_classes_base_FGRecipe_pre_update6,
	FGRecipe_version_specific as docs_json_ts_0_4_2_11_classes_base_FGRecipe_version_specific,
} from './../../0.4.2.11/classes/Base.ts';

import type {
	FGRecipe as docs_json_ts_common_classes_FGRecipe,
} from './../../common/classes.ts';

import type {
	Texture2D as docs_json_ts_0_4_2_11_properties_Texture2D,
} from './../../0.4.2.11/types/properties.ts';

import type {
	mRelevantShopSchematics as docs_json_ts_0_5_2_1_overridable_mRelevantShopSchematics,
} from './../types/overridable--0.8.3.3.ts';

type FGBuildable_is_wallish = {
	mAngularDepth: docs_json_ts_common_types_decimal_string,
	mWallType: 'BWT_Normal' | 'BWT_Glass' | 'BWT_DiagonalDown' | 'BWT_DiagonalUp' | 'BWT_Frame',
	mAngledVariants: null | docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type FGItemDescriptorNuclearFuel = docs_json_ts_0_4_2_11_classes_base_overridable_FGItemDescriptorNuclearFuel_pre_1_0 & docs_json_ts_0_3_7_7_classes_base_FGItemDescriptorNuclearFuel_version_specific & docs_json_ts_0_5_2_1_classes_base_FGItemDescriptor_base;

type FGRecipe = docs_json_ts_0_3_7_7_classes_base_FGRecipe_version_specific & docs_json_ts_0_3_7_7_classes_base_instructive & docs_json_ts_0_4_2_11_classes_base_FGRecipe_pre_update6 & docs_json_ts_0_4_2_11_classes_base_FGRecipe_version_specific & docs_json_ts_common_classes_FGRecipe & FGRecipe_version_specific;

type FGRecipe_version_specific = {
	mIngredients: docs_json_ts_0_3_7_7_overridable_ItemClass_Amount_list | null,
	mProduct: docs_json_ts_0_3_7_7_overridable_ItemClass_Amount_list | null,
};

type FGSchematic_version_specific = {
	mDependenciesBlocksSchematicAccess: docs_json_ts_common_types_bool_string,
	mSmallSchematicIcon: 'None' | docs_json_ts_0_4_2_11_properties_Texture2D,
	mRelevantShopSchematics: docs_json_ts_0_5_2_1_overridable_mRelevantShopSchematics,
};

type FGWeapon_version_specific = {
	mAllowedAmmoClasses: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

export type {
	FGBuildable_is_wallish,
	FGItemDescriptorNuclearFuel,
	FGRecipe,
	FGRecipe_version_specific,
	FGSchematic_version_specific,
	FGWeapon_version_specific,
};
