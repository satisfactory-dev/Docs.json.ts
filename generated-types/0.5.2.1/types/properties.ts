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

type mPersistentBigIcon = `${'Texture2D /Game/FactoryGame/' | 'Texture2D\'"/Game/FactoryGame/'}${string}${string}${'_'}${'256' | '512' | '256_New' | 'White'}${'.'}${string}${'_'}${'256' | '512' | '256_New' | 'White'}${'"\'' | '\'' | ''}`;

type mSmallIcon = `${'Texture2D /Game/FactoryGame/' | 'Texture2D\'"/Game/FactoryGame/'}${string}${string}${'_'}${'64' | '256' | '64_new' | '512'}${'.'}${string}${'_'}${'64' | '256' | '64_new' | '512'}${'"\'' | '\'' | ''}`;

type mUnlocks_item = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive | mUnlocks_item_mEmotes;

type mUnlocks_item_mEmotes = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mEmotes: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

export type {
	mDisableSnapOn_bottom,
	mDisableSnapOn_top,
	mDockingRuleSet,
	mPersistentBigIcon,
	mSmallIcon,
	mUnlocks_item,
	mUnlocks_item_mEmotes,
};
