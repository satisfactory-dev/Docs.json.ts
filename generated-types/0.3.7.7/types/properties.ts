/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	integer_string as docs_json_ts_common_types_integer_string,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
	XYZW_decimal_string as docs_json_ts_common_types_XYZW_decimal_string,
} from './../../common/types.ts';

type mAbbreviatedDisplayName = string;

type mAllowedResourceForms = [
    'RF_SOLID' | 'RF_LIQUID',
    ...('RF_SOLID' | 'RF_LIQUID')[],
];

type mDisableSnapOn_front_bottom = {
	Front: docs_json_ts_common_types_bool_string,
	Bottom: docs_json_ts_common_types_bool_string,
};

type mDisableSnapOn_front_left_top_bottom = {
	Front: docs_json_ts_common_types_bool_string,
	Left: docs_json_ts_common_types_bool_string,
	Top: docs_json_ts_common_types_bool_string,
	Bottom: docs_json_ts_common_types_bool_string,
};

type mDisableSnapOn_front_top = {
	Front: docs_json_ts_common_types_bool_string,
	Top: docs_json_ts_common_types_bool_string,
};

type mDisableSnapOn_front_top_bottom = {
	Front: docs_json_ts_common_types_bool_string,
	Top: docs_json_ts_common_types_bool_string,
	Bottom: docs_json_ts_common_types_bool_string,
};

type mDisableSnapOn_right_left_top_bottom = {
	Right: docs_json_ts_common_types_bool_string,
	Left: docs_json_ts_common_types_bool_string,
	Top: docs_json_ts_common_types_bool_string,
	Bottom: docs_json_ts_common_types_bool_string,
};

type mDisableSnapOn_top_bottom = {
	Top: docs_json_ts_common_types_bool_string,
	Bottom: docs_json_ts_common_types_bool_string,
};

type mDisplayName = string;

type mForm = 'RF_SOLID' | 'RF_LIQUID' | 'RF_INVALID';

type mPersistentBigIcon = `Texture2D'/Game/FactoryGame/${string}${'/IconDesc_' | '/' | ''}${string}${'_'}${'256' | '512' | '1b' | '256_New'}${'.'}${string}${'_'}${'256' | '512' | '1b' | '256_New'}${'\''}`;

type mRelevantEvents = [
	'EV_Christmas',
];

type mSchematicDependencies_item = {
	Class: `BP_${string}${'_C'}`,
	mSchematics: DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mRequireAllSchematicsToBePurchased: docs_json_ts_common_types_bool_string,
};

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

type transform_Rotation_Translation_Scale3D = {
	Rotation: docs_json_ts_common_types_XYZW_decimal_string,
	Translation: docs_json_ts_common_types_XYZ_decimal_string,
	Scale3D: docs_json_ts_common_types_XYZ_decimal_string,
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
	mAbbreviatedDisplayName,
	mAllowedResourceForms,
	mDisableSnapOn_front_bottom,
	mDisableSnapOn_front_left_top_bottom,
	mDisableSnapOn_front_top,
	mDisableSnapOn_front_top_bottom,
	mDisableSnapOn_right_left_top_bottom,
	mDisableSnapOn_top_bottom,
	mDisplayName,
	mForm,
	mPersistentBigIcon,
	mRelevantEvents,
	mSchematicDependencies_item,
	mSmallIcon,
	mStackSize,
	mSubCategories,
	mType,
	mUnlocks_item_base,
	mUnlocks_item_mItemsToGive,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mNumInventorySlotsToUnlock,
	mUnlocks_item_mRecipes,
	mUnlocks_item_mResourcesToAddToScanner,
	mUnlocks_item_mSchematics,
	transform_Rotation_Translation_Scale3D,
	DocsDotJson_BlueprintGeneratedClass_quoted_list,
	ItemClass_Amount_list,
	Tier,
};
