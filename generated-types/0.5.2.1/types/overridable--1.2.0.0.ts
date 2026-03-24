/* eslint-disable @stylistic/max-len */

import type {
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics,
} from './../../0.3.7.7/types/overridable--1.2.0.0.ts';

import type {
	const_None as docs_json_ts_0_3_7_7_properties_const_None,
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
} from './../../0.3.7.7/types/properties.ts';

import type {
	mUnlocks_item_mResourcePairsToAddToScanner as docs_json_ts_0_4_2_11_overridable_mUnlocks_item_mResourcePairsToAddToScanner,
} from './../../0.4.2.11/types/overridable--1.2.0.0.ts';

import type {
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock as docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
} from './../../0.4.2.11/types/properties.ts';

import type {
	decimal_string as docs_json_ts_common_types_decimal_string,
} from './../../common/types.ts';

type mRelevantShopSchematics = '' | [
	mRelevantShopSchematics_item,
	...mRelevantShopSchematics_item[],
];

type mRelevantShopSchematics_item = docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted | docs_json_ts_0_3_7_7_properties_const_None;

type mUnlocks_item = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive | docs_json_ts_0_4_2_11_overridable_mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock | mUnlocks_item_mEmotes;

type mUnlocks_item_mEmotes = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mEmotes: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type FalloffCurve_EditorCurveData_with_ExternalCurve = {
	EditorCurveData: {
		DefaultValue: docs_json_ts_common_types_decimal_string,
		PreInfinityExtrap: 'RCCE_Constant',
		PostInfinityExtrap: 'RCCE_Constant',
	},
	ExternalCurve: `/Script/Engine.CurveFloat'/Game/FactoryGame${Exclude<string, ''>}${'\''}`,
};

export type {
	mRelevantShopSchematics,
	mRelevantShopSchematics_item,
	mUnlocks_item,
	mUnlocks_item_mEmotes,
	FalloffCurve_EditorCurveData_with_ExternalCurve,
};
