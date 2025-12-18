/* eslint-disable @stylistic/max-len */

import type {
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics,
} from './../../0.3.7.7/types/overridable--0.8.3.3.ts';

import type {
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
} from './../../0.3.7.7/types/properties.ts';

import type {
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock as docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
} from './properties.ts';

type has_mBatteryClasses = {
	mBatteryClasses: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mUnlocks_item = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes | mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive;

type mUnlocks_item_mResourcePairsToAddToScanner = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mResourcesToAddToScanner: '' | docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mResourcePairsToAddToScanner: [
		{
			ResourceDescriptor: docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
			ResourceNodeType?: 'Geyser' | 'FrackingCore',
		},
		...{
			ResourceDescriptor: docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
			ResourceNodeType?: 'Geyser' | 'FrackingCore',
		}[],
	],
};

type BlueprintGeneratedClass_single_quoted = `/Script/Engine.BlueprintGeneratedClass'/Game/FactoryGame/${Exclude<string, ''>}${'\''}`;

type Texture2D_quoted = `/Script/Engine.Texture2D'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

export type {
	has_mBatteryClasses,
	mUnlocks_item,
	mUnlocks_item_mResourcePairsToAddToScanner,
	BlueprintGeneratedClass_single_quoted,
	Texture2D_quoted,
};
