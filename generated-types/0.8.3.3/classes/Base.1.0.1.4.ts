/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string_signed as docs_json_ts_common_types_decimal_string_signed,
	empty_object as docs_json_ts_common_types_empty_object,
	integer_string as docs_json_ts_common_types_integer_string,
	XY_decimal_string as docs_json_ts_common_types_XY_decimal_string,
	XYZW_decimal_string as docs_json_ts_common_types_XYZW_decimal_string,
} from './../../common/types.ts';

import type {
	mDamageTypes as docs_json_ts_0_8_3_3_properties_mDamageTypes,
} from './../types/properties.ts';

import type {
	DocsDotJson_AkAudioEvent_quoted_list as docs_json_ts_0_8_3_3_properties_overridable_DocsDotJson_AkAudioEvent_quoted_list,
	FGRailroadTrackConnectionComponent_quoted as docs_json_ts_0_8_3_3_properties_overridable_FGRailroadTrackConnectionComponent_quoted,
	mAnimData_item as docs_json_ts_0_8_3_3_properties_overridable_mAnimData_item,
	mComponentNameToFirstPersonMaterials_item as docs_json_ts_0_8_3_3_properties_overridable_mComponentNameToFirstPersonMaterials_item,
	mUnlocks_item as docs_json_ts_0_8_3_3_properties_overridable_mUnlocks_item,
} from './../types/properties.1.0.1.4.ts';

import type {
	ItemClass_Amount_list as docs_json_ts_0_3_7_7_overridable_ItemClass_Amount_list,
	MaterialInstanceConstant_quoted as docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted,
} from './../../0.3.7.7/types/overridable--1.0.1.4.ts';

import type {
	TintColor as docs_json_ts_0_4_2_11_properties_TintColor,
} from './../../0.4.2.11/types/properties.ts';

import type {
	Texture2D_quoted as docs_json_ts_0_4_2_11_overridable_Texture2D_quoted,
} from './../../0.4.2.11/types/overridable--1.0.1.4.ts';

import type {
	ItemClass_list as docs_json_ts_0_6_1_5_overridable_ItemClass_list,
} from './../../0.6.1.5/types/overridable--1.0.1.4.ts';

type FGAmmoType_version_specific = {
	mAmmoTickFunction: {
		bAllowTickOnDedicatedServer: docs_json_ts_common_types_bool_string,
	},
	mDamageTypesOnImpact: null | docs_json_ts_0_8_3_3_properties_mDamageTypes,
	mFiringSounds: null | docs_json_ts_0_8_3_3_properties_overridable_DocsDotJson_AkAudioEvent_quoted_list,
	mFiringSounds1P: '',
	mMagazineMeshMaterials1p: [
		docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted,
		...docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted[],
	],
};

type FGBuildableRailroadTrack_version_specific = {
	mBlockVisualizationColorDataStartIndex: docs_json_ts_common_types_integer_string,
	mConnections: [
		docs_json_ts_0_8_3_3_properties_overridable_FGRailroadTrackConnectionComponent_quoted,
		...docs_json_ts_0_8_3_3_properties_overridable_FGRailroadTrackConnectionComponent_quoted[],
	],
};

type FGConsumableEquipment_version_specific = {
	mAnimData?: [
		docs_json_ts_0_8_3_3_properties_overridable_mAnimData_item,
		...docs_json_ts_0_8_3_3_properties_overridable_mAnimData_item[],
	],
};

type FGEquipment_version_specific = {
	mComponentNameToFirstPersonMaterials: docs_json_ts_common_types_empty_object | [
		docs_json_ts_0_8_3_3_properties_overridable_mComponentNameToFirstPersonMaterials_item,
		...docs_json_ts_0_8_3_3_properties_overridable_mComponentNameToFirstPersonMaterials_item[],
	],
	mNeedsDefaultEquipmentMappingContext: docs_json_ts_common_types_bool_string,
	mDefaultEquipmentActions: docs_json_ts_common_types_integer_string,
	mSwappedOutThirdPersonMaterials: docs_json_ts_common_types_empty_object,
};

type FGSchematic_has_mSchematicIcon = {
	mSchematicIcon: {
		DrawAs: 'Image',
		ImageSize: docs_json_ts_common_types_XY_decimal_string,
		Margin: docs_json_ts_common_types_empty_object,
		TintColor: docs_json_ts_0_4_2_11_properties_TintColor,
		OutlineSettings: {
			CornerRadii: docs_json_ts_common_types_XYZW_decimal_string,
			Color: docs_json_ts_0_4_2_11_properties_TintColor,
			RoundingType: 'HalfHeightRadius',
		},
		ResourceObject?: docs_json_ts_0_4_2_11_overridable_Texture2D_quoted,
		UVRegion: {
			Min: docs_json_ts_common_types_XY_decimal_string,
			Max: docs_json_ts_common_types_XY_decimal_string,
			bIsValid: docs_json_ts_common_types_bool_string,
		},
	},
};

type FGSchematic_pre_1_0 = {
	mUnlocks: [
		...docs_json_ts_0_8_3_3_properties_overridable_mUnlocks_item[],
	],
};

type FGSchematic_version_specific = {
	mCost: null | docs_json_ts_0_3_7_7_overridable_ItemClass_Amount_list | docs_json_ts_0_6_1_5_overridable_ItemClass_list,
	mIsPlayerSpecific: docs_json_ts_common_types_bool_string,
	mMenuPriority: docs_json_ts_common_types_decimal_string_signed,
};

export type {
	FGAmmoType_version_specific,
	FGBuildableRailroadTrack_version_specific,
	FGConsumableEquipment_version_specific,
	FGEquipment_version_specific,
	FGSchematic_has_mSchematicIcon,
	FGSchematic_pre_1_0,
	FGSchematic_version_specific,
};
