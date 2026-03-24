/* eslint-disable @stylistic/max-len */

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	ItemClass_Amount_list as docs_json_ts_0_3_7_7_overridable_ItemClass_Amount_list,
	mParticleMap_item as docs_json_ts_0_3_7_7_overridable_mParticleMap_item,
	mSubCategories as docs_json_ts_0_3_7_7_overridable_mSubCategories,
	mSuit1PMeshMaterials_item as docs_json_ts_0_3_7_7_overridable_mSuit1PMeshMaterials_item,
} from './../types/overridable--1.2.0.0.ts';

import type {
	FGBuildableResourceExtractor_only_allow_certain_resources as docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_only_allow_certain_resources,
} from './Base.ts';

import type {
	const_None as docs_json_ts_0_3_7_7_properties_const_None,
} from './../types/properties.ts';

import type {
	decimal_string as docs_json_ts_common_types_decimal_string,
} from './../../common/types.ts';

type FGBuildableResourceExtractor_miner_base = {
	mParticleMap: [
		docs_json_ts_0_3_7_7_overridable_mParticleMap_item,
		...docs_json_ts_0_3_7_7_overridable_mParticleMap_item[],
	],
};

type FGBuildableResourceExtractor_only_allow_certain_resources = docs_json_ts_0_3_7_7_classes_base_FGBuildableResourceExtractor_only_allow_certain_resources & {
	mAllowedResources: docs_json_ts_0_3_7_7_overridable_DocsDotJson_BlueprintGeneratedClass_quoted_list | '',
};

type FGEquipment_version_specific = {
	mEquipmentSlot: `ES_${Exclude<string, ''>}`,
	mAttachSocket: Exclude<string, ''>,
	mCostToUse: '' | docs_json_ts_0_3_7_7_overridable_ItemClass_Amount_list,
	mArmAnimation: 'AE_Consumables' | 'AE_OneHandEquipment' | 'AE_ChainSaw' | 'AE_Generic2Hand' | 'AE_None' | 'AE_RebarGun' | 'AE_Rifle' | 'AE_ShockShank' | 'AE_StunSpear' | 'AE_PortableMiner' | 'AE_ObjectScanner' | 'AE_ColorGun' | 'AE_Nobelisk' | 'AE_Generic1Hand',
	mBackAnimation: 'BE_None' | 'BE_Jetpack',
};

type FGSchematic_version_specific = {
	mSubCategories: null | [
		docs_json_ts_0_3_7_7_properties_const_None,
	] | docs_json_ts_0_3_7_7_overridable_mSubCategories,
	mTimeToComplete: docs_json_ts_common_types_decimal_string,
	mIncludeInBuilds: 'IIB_PublicBuilds',
};

type FGSuitBase_pre_1_0 = {
	mSuit1PMeshMaterials: [
		docs_json_ts_0_3_7_7_overridable_mSuit1PMeshMaterials_item,
		...docs_json_ts_0_3_7_7_overridable_mSuit1PMeshMaterials_item[],
	],
};

export type {
	FGBuildableResourceExtractor_miner_base,
	FGBuildableResourceExtractor_only_allow_certain_resources,
	FGEquipment_version_specific,
	FGSchematic_version_specific,
	FGSuitBase_pre_1_0,
};
