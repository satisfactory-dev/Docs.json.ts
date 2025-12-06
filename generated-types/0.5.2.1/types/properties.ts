/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
} from './../../common/types.ts';

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
} from './../../0.3.7.7/types/properties.ts';

import type {
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock as docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mResourcePairsToAddToScanner as docs_json_ts_0_4_2_11_properties_mUnlocks_item_mResourcePairsToAddToScanner,
} from './../../0.4.2.11/types/properties.ts';

type mDisableSnapOn_bottom = {
	Bottom: docs_json_ts_common_types_bool_string,
};

type mDisableSnapOn_top = {
	Top: docs_json_ts_common_types_bool_string,
};

type mDockingRuleSet = {
	DockForDuration: docs_json_ts_common_types_decimal_string,
};

type mPersistentBigIcon = `${'Texture2D /Game/FactoryGame/' | 'Texture2D\'"/Game/FactoryGame/'}${string}${`${`${string}${'_'}${'256'}`}${'.'}${`${string}${'_'}${'256'}`}` | `${`${string}${'_'}${'512'}`}${'.'}${`${string}${'_'}${'512'}`}` | `${`${string}${'_'}${'256_New'}`}${'.'}${`${string}${'_'}${'256_New'}`}` | `${`${string}${'_'}${'White'}`}${'.'}${`${string}${'_'}${'White'}`}`}${'"\'' | '\'' | ''}`;

type mSmallIcon = `${'Texture2D /Game/FactoryGame/' | 'Texture2D\'"/Game/FactoryGame/'}${string}${`${`${string}${'_'}${'64'}`}${'.'}${`${string}${'_'}${'64'}`}` | `${`${string}${'_'}${'256'}`}${'.'}${`${string}${'_'}${'256'}`}` | `${`${string}${'_'}${'64_new'}`}${'.'}${`${string}${'_'}${'64_new'}`}` | `${`${string}${'_'}${'512'}`}${'.'}${`${string}${'_'}${'512'}`}` | `${`${string}${'_'}${'White'}`}${'.'}${`${string}${'_'}${'White'}`}`}${'"\'' | '\'' | ''}`;

type mUnlocks_item = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive | mUnlocks_item_mEmotes;

type mUnlocks_item_mEmotes = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mEmotes: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type FalloffCurve_EditorCurveData_only = {
	EditorCurveData: {
		DefaultValue: docs_json_ts_common_types_decimal_string,
		PreInfinityExtrap: 'RCCE_Constant',
		PostInfinityExtrap: 'RCCE_Constant',
	},
};

type FalloffCurve_EditorCurveData_with_ExternalCurve = {
	EditorCurveData: {
		DefaultValue: docs_json_ts_common_types_decimal_string,
		PreInfinityExtrap: 'RCCE_Constant',
		PostInfinityExtrap: 'RCCE_Constant',
	},
	ExternalCurve: `CurveFloat'"/Game/FactoryGame/${string}${'"\''}`,
};

export type {
	mDisableSnapOn_bottom,
	mDisableSnapOn_top,
	mDockingRuleSet,
	mPersistentBigIcon,
	mSmallIcon,
	mUnlocks_item,
	mUnlocks_item_mEmotes,
	FalloffCurve_EditorCurveData_only,
	FalloffCurve_EditorCurveData_with_ExternalCurve,
};
