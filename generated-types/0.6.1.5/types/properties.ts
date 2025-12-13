/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
} from './../../common/types.ts';

import type {
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
	Class_quoted as docs_json_ts_0_3_7_7_properties_Class_quoted,
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mProducedIn_base as docs_json_ts_0_3_7_7_properties_mProducedIn_base,
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
} from './../../0.3.7.7/types/properties.ts';

import type {
	mProducedIn_version_specific as docs_json_ts_0_4_2_11_properties_mProducedIn_version_specific,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock as docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mResourcePairsToAddToScanner as docs_json_ts_0_4_2_11_properties_mUnlocks_item_mResourcePairsToAddToScanner,
} from './../../0.4.2.11/types/properties.ts';

import type {
	mUnlocks_item_mEmotes as docs_json_ts_0_5_2_1_properties_mUnlocks_item_mEmotes,
} from './../../0.5.2.1/types/properties.ts';

type BP_RadialDamageType_Explosive_C_quoted = `BP_RadialDamageType_Explosive_C'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type BP_RadialDamageType_Gas_C_quoted = `BP_RadialDamageType_Gas_C'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Material_quoted = `Material'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type MaterialInstanceConstant_quoted = `MaterialInstanceConstant'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type mAllowedResourceForms = [
    'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT',
    ...('RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT')[],
];

type mDisableSnapOn_front_right = {
	Front: docs_json_ts_common_types_bool_string,
	Right: docs_json_ts_common_types_bool_string,
};

type mProducedIn = docs_json_ts_0_3_7_7_properties_mProducedIn_base | docs_json_ts_0_4_2_11_properties_mProducedIn_version_specific | mProducedIn_version_specific;

type mProducedIn_version_specific = [
    '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C',
    '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C',
];

type mUnlocks_item = mUnlocks_item_mTapeUnlocks | mUnlocks_item_mScannableObjects | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_5_2_1_properties_mUnlocks_item_mEmotes | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics | docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_4_2_11_properties_mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive;

type mUnlocks_item_mScannableObjects = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mScannableObjects: [
		{
			ItemDescriptor: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
			ActorsAllowedToScan: [
				docs_json_ts_0_3_7_7_properties_Class_quoted,
				...docs_json_ts_0_3_7_7_properties_Class_quoted[],
			],
		},
		...{
			ItemDescriptor: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
			ActorsAllowedToScan: [
				docs_json_ts_0_3_7_7_properties_Class_quoted,
				...docs_json_ts_0_3_7_7_properties_Class_quoted[],
			],
		}[],
	],
};

type mUnlocks_item_mTapeUnlocks = {
	Class: 'FGUnlockTape',
	mTapeUnlocks: docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type DamageTypes = [
    `BP_PointDamageType_${string}${'_C\'"/Game/FactoryGame/'}${'Equipment' | 'Resource'}${'/'}${string}${'/Desc_' | '/Equip_'}${string}${'_C:BP_PointDamageType_'}${string}${'_C_0"\''}`,
    ...`BP_PointDamageType_${string}${'_C\'"/Game/FactoryGame/'}${'Equipment' | 'Resource'}${'/'}${string}${'/Desc_' | '/Equip_'}${string}${'_C:BP_PointDamageType_'}${string}${'_C_0"\''}`[],
];

type DocsDotJson_AkAudioEvent_quoted_list = [
    `AkAudioEvent'"/Game/WwiseAudio/${Exclude<string, ''>}${'"\''}`,
    ...`AkAudioEvent'"/Game/WwiseAudio/${Exclude<string, ''>}${'"\''}`[],
];

type ItemClass_list = [
	{
		ItemClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`,
	},
	...{
		ItemClass: `BlueprintGeneratedClass'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`,
	}[],
];

export type {
	BP_RadialDamageType_Explosive_C_quoted,
	BP_RadialDamageType_Gas_C_quoted,
	Material_quoted,
	MaterialInstanceConstant_quoted,
	mAllowedResourceForms,
	mDisableSnapOn_front_right,
	mProducedIn,
	mProducedIn_version_specific,
	mUnlocks_item,
	mUnlocks_item_mScannableObjects,
	mUnlocks_item_mTapeUnlocks,
	DamageTypes,
	DocsDotJson_AkAudioEvent_quoted_list,
	ItemClass_list,
};
