/* eslint-disable @stylistic/max-len */

import type {
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	RawResources as docs_json_ts_0_3_7_7_properties_RawResources,
} from './properties.ts';

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	integer_string as docs_json_ts_common_types_integer_string,
} from './../../common/types.ts';

type mParticleMap_item = {
	ResourceNode_16_2100B5C34EE8DF7958D78A974512F3C3: docs_json_ts_0_3_7_7_properties_RawResources,
	ParticleSystem1_9_F0CF81514E1E1C5007AC99B0C59C63CD: ParticleSystem_quoted,
};

type mSchematicDependencies_item = {
	Class: `BP_${string}${'_C'}`,
	mSchematics: DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mRequireAllSchematicsToBePurchased: docs_json_ts_common_types_bool_string,
};

type mSubCategories = [
	BlueprintGeneratedClass_quoted,
	...BlueprintGeneratedClass_quoted[],
];

type mSuit1PMeshMaterials_item = {
	SlotName: 'Body_Details' | 'Body_01' | 'Body_02' | 'Body_Hands' | 'Body_Backpack',
	Material: MaterialInstanceConstant_quoted,
};

type mUnlocks_item_mItemsToGive = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mItemsToGive: ItemClass_Amount_list,
};

type mUnlocks_item_mRecipes = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mRecipes: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mUnlocks_item_mResourcesToAddToScanner = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mResourcesToAddToScanner: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mUnlocks_item_mSchematics = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mSchematics: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type AnimMontage_quoted = `/Script/Engine.AnimMontage'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type BlueprintGeneratedClass_quoted = `/Script/Engine.BlueprintGeneratedClass'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type DocsDotJson_BlueprintGeneratedClass_quoted_list = [
	BlueprintGeneratedClass_quoted,
	...BlueprintGeneratedClass_quoted[],
];

type ItemClass_Amount_list = [
	ItemClass_Amount_list_item,
	...ItemClass_Amount_list_item[],
];

type ItemClass_Amount_list_item = {
	ItemClass: BlueprintGeneratedClass_quoted,
	Amount: docs_json_ts_common_types_integer_string,
};

type MaterialInstanceConstant_quoted = `/Script/Engine.MaterialInstanceConstant'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type ParticleSystem_quoted = `/Script/Engine.ParticleSystem'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

export type {
	mParticleMap_item,
	mSchematicDependencies_item,
	mSubCategories,
	mSuit1PMeshMaterials_item,
	mUnlocks_item_mItemsToGive,
	mUnlocks_item_mRecipes,
	mUnlocks_item_mResourcesToAddToScanner,
	mUnlocks_item_mSchematics,
	AnimMontage_quoted,
	BlueprintGeneratedClass_quoted,
	DocsDotJson_BlueprintGeneratedClass_quoted_list,
	ItemClass_Amount_list,
	ItemClass_Amount_list_item,
	MaterialInstanceConstant_quoted,
	ParticleSystem_quoted,
};
