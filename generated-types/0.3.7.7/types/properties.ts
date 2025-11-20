/* eslint-disable @stylistic/max-len */

import type {
	integer_string as docs_json_ts_common_types_integer_string,
} from './../../common/types.ts';

type mAbbreviatedDisplayName = string;

type mAllowedResourceForms = [
    'RF_SOLID' | 'RF_LIQUID',
    ...('RF_SOLID' | 'RF_LIQUID')[],
];

type mDisplayName = string;

type mForm = 'RF_SOLID' | 'RF_LIQUID' | 'RF_INVALID';

type mPersistentBigIcon = `Texture2D'/Game/FactoryGame/${string}${'/IconDesc_' | '/' | ''}${string}${'_'}${'256' | '512' | '1b' | '256_New'}${'.'}${string}${'_'}${'256' | '512' | '1b' | '256_New'}${'\''}`;

type mRelevantEvents = [
	'EV_Christmas',
];

type mSmallIcon = `Texture2D'/Game/FactoryGame/${string}${'/IconDesc_' | '/' | ''}${string}${'_'}${'64' | '256' | '1b' | '64_new'}${'.'}${string}${'_'}${'64' | '256' | '1b' | '64_new'}${'\''}`;

type mStackSize = 'SS_HUGE' | 'SS_MEDIUM' | 'SS_BIG' | 'SS_SMALL' | 'SS_ONE' | 'SS_FLUID';

type mSubCategories = [
    `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
    ...`BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`[],
];

type mType = 'EST_Custom' | 'EST_Tutorial' | 'EST_MAM' | 'EST_HardDrive' | 'EST_Milestone' | 'EST_Alternate' | 'EST_ResourceSink';

type mUnlocks_item_base = {
	Class: `BP_${string}${'_C'}`,
};

type mUnlocks_item_mItemsToGive = mUnlocks_item_base & {
	mItemsToGive: ItemClass_Amount_list,
};

type mUnlocks_item_mNumArmEquipmentSlotsToUnlock = mUnlocks_item_base & {
	mNumArmEquipmentSlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type mUnlocks_item_mNumInventorySlotsToUnlock = mUnlocks_item_base & {
	mNumInventorySlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type mUnlocks_item_mRecipes = mUnlocks_item_base & {
	mRecipes: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mUnlocks_item_mResourcesToAddToScanner = mUnlocks_item_base & {
	mResourcesToAddToScanner: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mUnlocks_item_mSchematics = mUnlocks_item_base & {
	mSchematics: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type DocsDotJson_BlueprintGeneratedClass_quoted_list = [
    `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
    ...`BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`[],
];

type ItemClass_Amount_list = [
	{
		ItemClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
		Amount: docs_json_ts_common_types_integer_string,
	},
	...{
		ItemClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
		Amount: docs_json_ts_common_types_integer_string,
	}[],
];

type Tier = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

export type {
	mAbbreviatedDisplayName, mAllowedResourceForms, mDisplayName, mForm, mPersistentBigIcon, mRelevantEvents, mSmallIcon, mStackSize, mSubCategories, mType, mUnlocks_item_base, mUnlocks_item_mItemsToGive, mUnlocks_item_mNumArmEquipmentSlotsToUnlock, mUnlocks_item_mNumInventorySlotsToUnlock, mUnlocks_item_mRecipes, mUnlocks_item_mResourcesToAddToScanner, mUnlocks_item_mSchematics, DocsDotJson_BlueprintGeneratedClass_quoted_list, ItemClass_Amount_list, Tier,
};
