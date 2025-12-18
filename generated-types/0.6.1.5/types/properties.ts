/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
} from './../../common/types.ts';

import type {
	Class_quoted as docs_json_ts_0_3_7_7_properties_Class_quoted,
	mProducedIn_base as docs_json_ts_0_3_7_7_properties_mProducedIn_base,
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
} from './../../0.3.7.7/types/properties.ts';

import type {
	mProducedIn_version_specific as docs_json_ts_0_4_2_11_properties_mProducedIn_version_specific,
} from './../../0.4.2.11/types/properties.ts';

import type {
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
} from './../../0.3.7.7/types/overridable.ts';

type mAllowedResourceForms = [
    'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT',
    ...('RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT')[],
];

type mAlternativeMaterialRecipes_mMaterial = `/Game/FactoryGame/Buildable/-Shared/Customization/Materials/MaterialDesc_Foundation_${Exclude<string, ''>}${'.MaterialDesc_Foundation_'}${Exclude<string, ''>}${'_C'}`;

type mAlternativeMaterialRecipes_mRecipe = `/Game/FactoryGame/Buildable/Building/Foundation/${string}${'/Recipe_'}${Exclude<string, ''>}${'.Recipe_'}${Exclude<string, ''>}${'_C'}`;

type mDisableSnapOn_front_right = {
	Front: docs_json_ts_common_types_bool_string,
	Right: docs_json_ts_common_types_bool_string,
};

type mObjectDetails_Icon = `/Game/FactoryGame/${'Resource' | 'Equipment'}${string}${'/'}${Exclude<string, ''>}${'.'}${Exclude<string, ''>}${'_'}${'64' | '64_new'}` | `/Game/FactoryGame/Prototype/WAT/UI/T_WAT${'1.T_WAT1' | '2.T_WAT2'}`;

type mProducedIn = docs_json_ts_0_3_7_7_properties_mProducedIn_base | docs_json_ts_0_4_2_11_properties_mProducedIn_version_specific | mProducedIn_version_specific;

type mProducedIn_version_specific = [
    '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C',
    '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C',
];

type mUnlocks_item_mScannableObjects = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mScannableObjects: [
		{
			ItemDescriptor: docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
			ActorsAllowedToScan: [
				docs_json_ts_0_3_7_7_properties_Class_quoted,
				...docs_json_ts_0_3_7_7_properties_Class_quoted[],
			],
		},
		...{
			ItemDescriptor: docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
			ActorsAllowedToScan: [
				docs_json_ts_0_3_7_7_properties_Class_quoted,
				...docs_json_ts_0_3_7_7_properties_Class_quoted[],
			],
		}[],
	],
};

type BP_RadialDamageType_Explosive_C_quoted = `BP_RadialDamageType_Explosive_C'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type BP_RadialDamageType_Gas_C_quoted = `BP_RadialDamageType_Gas_C'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type DamageTypes = [
    `BP_PointDamageType_${Exclude<string, ''>}${'_C\'"/Game/FactoryGame/'}${'Equipment' | 'Resource'}${'/'}${Exclude<string, ''>}${'/Desc_' | '/Equip_'}${Exclude<string, ''>}${'_C:BP_PointDamageType_'}${Exclude<string, ''>}${'_C_0"\''}`,
    ...`BP_PointDamageType_${Exclude<string, ''>}${'_C\'"/Game/FactoryGame/'}${'Equipment' | 'Resource'}${'/'}${Exclude<string, ''>}${'/Desc_' | '/Equip_'}${Exclude<string, ''>}${'_C:BP_PointDamageType_'}${Exclude<string, ''>}${'_C_0"\''}`[],
];

type DocsDotJson_AkAudioEvent_quoted_list = [
	DocsDotJson_AkAudioEvent_quoted_list_item,
	...DocsDotJson_AkAudioEvent_quoted_list_item[],
];

type DocsDotJson_AkAudioEvent_quoted_list_item = `AkAudioEvent'"/Game/WwiseAudio/${Exclude<string, ''>}${'"\''}`;

export type {
	mAllowedResourceForms,
	mAlternativeMaterialRecipes_mMaterial,
	mAlternativeMaterialRecipes_mRecipe,
	mDisableSnapOn_front_right,
	mObjectDetails_Icon,
	mProducedIn,
	mProducedIn_version_specific,
	mUnlocks_item_mScannableObjects,
	BP_RadialDamageType_Explosive_C_quoted,
	BP_RadialDamageType_Gas_C_quoted,
	DamageTypes,
	DocsDotJson_AkAudioEvent_quoted_list,
	DocsDotJson_AkAudioEvent_quoted_list_item,
};
