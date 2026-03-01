/* eslint-disable @stylistic/max-len */

import type {
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	MaterialInstanceConstant_quoted as docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics,
} from './../../0.3.7.7/types/overridable--1.1.2.2.ts';

import type {
	mAlternativeMaterialRecipes_mMaterial as docs_json_ts_0_6_1_5_properties_mAlternativeMaterialRecipes_mMaterial,
	mAlternativeMaterialRecipes_mRecipe as docs_json_ts_0_6_1_5_properties_mAlternativeMaterialRecipes_mRecipe,
	mUnlocks_item_mScannableObjects as docs_json_ts_0_6_1_5_properties_mUnlocks_item_mScannableObjects,
} from './properties.ts';

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
} from './../../common/types.ts';

import type {
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
} from './../../0.3.7.7/types/properties.ts';

import type {
	mUnlocks_item_mResourcePairsToAddToScanner as docs_json_ts_0_4_2_11_overridable_mUnlocks_item_mResourcePairsToAddToScanner,
} from './../../0.4.2.11/types/overridable--1.1.2.2.ts';

import type {
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock as docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
} from './../../0.4.2.11/types/properties.ts';

import type {
	mUnlocks_item_mEmotes as docs_json_ts_0_5_2_1_overridable_mUnlocks_item_mEmotes,
} from './../../0.5.2.1/types/overridable--1.1.2.2.ts';

type has_mSubCategories = {
	mSubCategories: null | docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mAlternativeMaterialRecipes_item = {
	mMaterial: docs_json_ts_0_6_1_5_properties_mAlternativeMaterialRecipes_mMaterial,
	mRecipe?: docs_json_ts_0_6_1_5_properties_mAlternativeMaterialRecipes_mRecipe,
};

type mCompatibleItemDescriptors_item = {
	CompatibleItemType: 'CIT_AMMO' | 'CIT_WEAPON',
	CompatibleItemDescriptors: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mHomingOverrideTargets_item = {
	ActorClass: docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
};

type mMagazineMeshMaterials_item = {
	MaterialInterface: docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted | Material_quoted,
	MaterialSlotName: 'lambert1' | 'Rifle' | 'lambert9_001' | 'lambert10' | 'lambert2' | 'Material_003' | 'Material_002' | 'Rocket1' | 'Rocket2' | '01 - Default',
	ImportedMaterialSlotName: 'lambert1' | 'Rifle' | 'lambert9_001' | 'lambert10' | 'lambert2' | 'Material_003' | 'Material_002' | 'Rocket1' | 'Rocket2' | '01 - Default',
	UVChannelData: {
		bInitialized: docs_json_ts_common_types_bool_string,
		['LocalUVDensities[0]']: docs_json_ts_common_types_decimal_string,
	} | {
		bInitialized: docs_json_ts_common_types_bool_string,
		['LocalUVDensities[0]']: docs_json_ts_common_types_decimal_string,
		['LocalUVDensities[1]']: docs_json_ts_common_types_decimal_string,
	},
};

type mUnlocks_item = mUnlocks_item_mTapeUnlocks | docs_json_ts_0_6_1_5_properties_mUnlocks_item_mScannableObjects | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics | docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_4_2_11_overridable_mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_5_2_1_overridable_mUnlocks_item_mEmotes | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive;

type mUnlocks_item_mTapeUnlocks = {
	Class: 'FGUnlockTape',
	mTapeUnlocks: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type ItemClass_list = [
	ItemClass_list_item,
	...ItemClass_list_item[],
];

type ItemClass_list_item = {
	ItemClass: `/Script/Engine.BlueprintGeneratedClass'/Game/FactoryGame${Exclude<string, ''>}${'\''}`,
};

type Material_quoted = `/Script/Engine.Material'/Game/FactoryGame${Exclude<string, ''>}${'\''}`;

export type {
	has_mSubCategories,
	mAlternativeMaterialRecipes_item,
	mCompatibleItemDescriptors_item,
	mHomingOverrideTargets_item,
	mMagazineMeshMaterials_item,
	mUnlocks_item,
	mUnlocks_item_mTapeUnlocks,
	ItemClass_list,
	ItemClass_list_item,
	Material_quoted,
};
