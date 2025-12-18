/* eslint-disable @stylistic/max-len */

import type {
	AnimMontage_quoted as docs_json_ts_0_3_7_7_overridable_AnimMontage_quoted,
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
	MaterialInstanceConstant_quoted as docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics,
} from './../../0.3.7.7/types/overridable--0.8.3.3.ts';

import type {
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
} from './../../0.3.7.7/types/properties.ts';

import type {
	mUnlocks_item_mResourcePairsToAddToScanner as docs_json_ts_0_4_2_11_overridable_mUnlocks_item_mResourcePairsToAddToScanner,
} from './../../0.4.2.11/types/overridable--0.8.3.3.ts';

import type {
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock as docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
} from './../../0.4.2.11/types/properties.ts';

import type {
	mUnlocks_item_mEmotes as docs_json_ts_0_5_2_1_overridable_mUnlocks_item_mEmotes,
} from './../../0.5.2.1/types/overridable--0.8.3.3.ts';

import type {
	mUnlocks_item_mTapeUnlocks as docs_json_ts_0_6_1_5_overridable_mUnlocks_item_mTapeUnlocks,
} from './../../0.6.1.5/types/overridable--0.8.3.3.ts';

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
} from './../../common/types.ts';

type mAnimData_item = {
	Montage_7_2E66F6A948A8606E71185682EA2AC4EC: docs_json_ts_0_3_7_7_overridable_AnimMontage_quoted,
	CameraAnimationSequence_11_920C446448786C507704569A05006500: CameraAnimationSequence_quoted,
};

type mComponentNameToFirstPersonMaterials_item = [
	Exclude<string, ''>,
	{
		FirstPersonMaterials: [
			docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted,
			...docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted[],
		],
	},
];

type mDamageTypes = [
	mDamageTypes_item,
	...mDamageTypes_item[],
];

type mDamageTypes_item = `/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_${Exclude<string, ''>}${'DamageType_'}${Exclude<string, ''>}${'_C\'"/Game/FactoryGame/'}${'Equipment' | 'Resource'}${'/'}${Exclude<string, ''>}${'/Desc_' | '/Equip_'}${Exclude<string, ''>}${'_C:BP_'}${Exclude<string, ''>}${'DamageType_'}${Exclude<string, ''>}${'_C_'}${'0' | '1'}${'"\''}`;

type mUnlocks_item = docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive | docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics | docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_4_2_11_overridable_mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_5_2_1_overridable_mUnlocks_item_mEmotes | docs_json_ts_0_6_1_5_overridable_mUnlocks_item_mTapeUnlocks | mUnlocks_item_mScannableObjects;

type mUnlocks_item_mScannableObjects = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mScannableObjects: [
		mUnlocks_item_mScannableObjects_item,
		...mUnlocks_item_mScannableObjects_item[],
	],
};

type mUnlocks_item_mScannableObjects_item = {
	ItemDescriptor: docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
	ActorsAllowedToScan: [
		Class_quoted,
		...Class_quoted[],
	],
};

type CameraAnimationSequence_quoted = `/Script/TemplateSequence.CameraAnimationSequence'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Class_quoted = `/Script/CoreUObject.Class'"/Script/FactoryGame.${Exclude<string, ''>}${'"\''}`;

type DocsDotJson_AkAudioEvent_quoted_list = [
	DocsDotJson_AkAudioEvent_quoted_list_item,
	...DocsDotJson_AkAudioEvent_quoted_list_item[],
];

type DocsDotJson_AkAudioEvent_quoted_list_item = `/Script/AkAudio.AkAudioEvent'"/Game/WwiseAudio/${Exclude<string, ''>}${'"\''}`;

type FGBuildable_mOcclusionBoxInfo_item = {
	Min: docs_json_ts_common_types_XYZ_decimal_string,
	Max: docs_json_ts_common_types_XYZ_decimal_string,
	IsValid: docs_json_ts_common_types_bool_string,
};

type FGRailroadTrackConnectionComponent_quoted = `/Script/FactoryGame.FGRailroadTrackConnectionComponent'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type FGTrainPlatformConnection_quoted = `/Script/FactoryGame.FGTrainPlatformConnection'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Meshes_item = '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5"\'' | '/Script/Engine.StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6"\'';

export type {
	mAnimData_item,
	mComponentNameToFirstPersonMaterials_item,
	mDamageTypes,
	mDamageTypes_item,
	mUnlocks_item,
	mUnlocks_item_mScannableObjects,
	mUnlocks_item_mScannableObjects_item,
	CameraAnimationSequence_quoted,
	Class_quoted,
	DocsDotJson_AkAudioEvent_quoted_list,
	DocsDotJson_AkAudioEvent_quoted_list_item,
	FGBuildable_mOcclusionBoxInfo_item,
	FGRailroadTrackConnectionComponent_quoted,
	FGTrainPlatformConnection_quoted,
	Meshes_item,
};
