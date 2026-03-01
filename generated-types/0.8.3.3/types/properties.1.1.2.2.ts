/* eslint-disable @stylistic/max-len */

import type {
	AnimMontage_quoted as docs_json_ts_0_3_7_7_overridable_AnimMontage_quoted,
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
	MaterialInstanceConstant_quoted as docs_json_ts_0_3_7_7_overridable_MaterialInstanceConstant_quoted,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mRecipes,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_overridable_mUnlocks_item_mSchematics,
} from './../../0.3.7.7/types/overridable--1.1.2.2.ts';

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

import type {
	mUnlocks_item_mTapeUnlocks as docs_json_ts_0_6_1_5_overridable_mUnlocks_item_mTapeUnlocks,
} from './../../0.6.1.5/types/overridable--1.1.2.2.ts';

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

type CameraAnimationSequence_quoted = `/Script/TemplateSequence.CameraAnimationSequence'/Game/FactoryGame${Exclude<string, ''>}${'\''}`;

type Class_quoted = `/Script/CoreUObject.Class'/Script/FactoryGame${Exclude<string, ''>}${'\''}`;

type DocsDotJson_AkAudioEvent_quoted_list = [
	DocsDotJson_AkAudioEvent_quoted_list_item,
	...DocsDotJson_AkAudioEvent_quoted_list_item[],
];

type DocsDotJson_AkAudioEvent_quoted_list_item = `/Script/AkAudio.AkAudioEvent'/Game/WwiseAudio${Exclude<string, ''>}${'\''}`;

type FGRailroadTrackConnectionComponent_quoted = `/Script/FactoryGame.FGRailroadTrackConnectionComponent'/Game/FactoryGame${Exclude<string, ''>}${'\''}`;

export type {
	mAnimData_item,
	mComponentNameToFirstPersonMaterials_item,
	mUnlocks_item,
	mUnlocks_item_mScannableObjects,
	mUnlocks_item_mScannableObjects_item,
	CameraAnimationSequence_quoted,
	Class_quoted,
	DocsDotJson_AkAudioEvent_quoted_list,
	DocsDotJson_AkAudioEvent_quoted_list_item,
	FGRailroadTrackConnectionComponent_quoted,
};
