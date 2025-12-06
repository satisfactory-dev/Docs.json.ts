/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
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

import type {
	mUnlocks_item_mEmotes as docs_json_ts_0_5_2_1_properties_mUnlocks_item_mEmotes,
} from './../../0.5.2.1/types/properties.ts';

type mAllowedResourceForms = [
    'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT',
    ...('RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT')[],
];

type mDisableSnapOn_front_right = {
	Front: docs_json_ts_common_types_bool_string,
	Right: docs_json_ts_common_types_bool_string,
};

type mUnlocks_item = mUnlocks_item_mTapeUnlocks | mUnlocks_item_mScannableObjects | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_5_2_1_properties_mUnlocks_item_mEmotes | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics | docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive;

type mUnlocks_item_mScannableObjects = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mScannableObjects: [
		{
			ItemDescriptor: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
			ActorsAllowedToScan: [
				...`Class'"/Script/FactoryGame.${string}${'"\''}`[],
			],
		},
		...{
			ItemDescriptor: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
			ActorsAllowedToScan: [
				...`Class'"/Script/FactoryGame.${string}${'"\''}`[],
			],
		}[],
	],
};

type mUnlocks_item_mTapeUnlocks = {
	Class: 'FGUnlockTape',
	mTapeUnlocks: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type DamageTypes = [
	...`BP_PointDamageType_${string}${'_C\'"/Game/FactoryGame/'}${'Equipment' | 'Resource'}${'/'}${string}${'/Desc_' | '/Equip_'}${string}${'_C:BP_PointDamageType_'}${string}${'_C_0"\''}`[],
];

type DocsDotJson_AkAudioEvent_quoted_list = [
    `AkAudioEvent'"${'/Game/WwiseAudio/Events/Equipment/'}${string}${'/Play_'}${string}${'.Play_'}${string}${'"\''}`,
    ...`AkAudioEvent'"${'/Game/WwiseAudio/Events/Equipment/'}${string}${'/Play_'}${string}${'.Play_'}${string}${'"\''}`[],
];

type ItemClass_list = [
	{
		ItemClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
	},
	...{
		ItemClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
	}[],
];

type mPersistentBigIcon = `Texture2D /Game/FactoryGame/${Exclude<string, ''>}`;

type mSmallIcon = `Texture2D /Game/FactoryGame/${Exclude<string, ''>}`;

export type {
	mAllowedResourceForms,
	mDisableSnapOn_front_right,
	mUnlocks_item,
	mUnlocks_item_mScannableObjects,
	mUnlocks_item_mTapeUnlocks,
	DamageTypes,
	DocsDotJson_AkAudioEvent_quoted_list,
	ItemClass_list,
	mPersistentBigIcon,
	mSmallIcon,
};
