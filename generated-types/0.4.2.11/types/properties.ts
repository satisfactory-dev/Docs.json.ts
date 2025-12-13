/* eslint-disable @stylistic/max-len */

import type {
	integer_string as docs_json_ts_common_types_integer_string,
	RGBA as docs_json_ts_common_types_RGBA,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
	XYZW_decimal_string as docs_json_ts_common_types_XYZW_decimal_string,
} from './../../common/types.ts';

import type {
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mProducedIn as docs_json_ts_0_3_7_7_properties_mProducedIn,
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
	mUnlocks_item_mItemsToGive as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive,
	mUnlocks_item_mNumInventorySlotsToUnlock as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock,
	mUnlocks_item_mRecipes as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes,
	mUnlocks_item_mSchematics as docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics,
} from './../../0.3.7.7/types/properties.ts';

type mAllowedResourceForms = [
    'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT',
    ...('RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT')[],
];

type mFogPlaneTransforms_empty = null;

type mFogPlaneTransforms_list = [
	{
		Rotation?: docs_json_ts_common_types_XYZW_decimal_string,
		Translation: docs_json_ts_common_types_XYZ_decimal_string,
		Scale3D?: docs_json_ts_common_types_XYZ_decimal_string,
	},
	...{
		Rotation?: docs_json_ts_common_types_XYZW_decimal_string,
		Translation: docs_json_ts_common_types_XYZ_decimal_string,
		Scale3D?: docs_json_ts_common_types_XYZ_decimal_string,
	}[],
];

type mForm = 'RF_SOLID' | 'RF_LIQUID' | 'RF_INVALID' | 'RF_GAS';

type mFuel = [
    mFuel_item_no_byproduct | mFuel_item_has_byproduct,
    ...(mFuel_item_no_byproduct | mFuel_item_has_byproduct)[],
];

type mFuel_item_base = {
	mFuelClass: 'FGItemDescriptorBiomass' | `Desc_${string}${'_C'}`,
	mSupplementalResourceClass: '' | `Desc_${string}${'_C'}`,
};

type mFuel_item_has_byproduct = mFuel_item_base & {
	mByproduct: `Desc_${string}${'_C'}`,
	mByproductAmount: docs_json_ts_common_types_integer_string,
};

type mFuel_item_no_byproduct = mFuel_item_base & {
	mByproduct: '',
	mByproductAmount: '',
};

type mProducedIn = docs_json_ts_0_3_7_7_properties_mProducedIn | mProducedIn_version_specific;

type mProducedIn_version_specific = [
    '/Game/FactoryGame/Buildable/Factory/Blender/Build_Blender.Build_Blender_C' | '/Game/FactoryGame/Buildable/Factory/HadronCollider/Build_HadronCollider.Build_HadronCollider_C',
] | [
	'/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C',
	'/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C',
];

type mSchematicDependencies_item = {
	Class: `BP_${string}${'_C'}`,
	mGamePhase: 'EGP_FoodCourt',
};

type mUnlocks_item = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes | mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics | mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive;

type mUnlocks_item_mNumArmEquipmentSlotsToUnlock = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mNumArmEquipmentSlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type mUnlocks_item_mResourcePairsToAddToScanner = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mResourcesToAddToScanner: '' | docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mResourcePairsToAddToScanner: [
		{
			ResourceDescriptor: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
			ResourceNodeType?: 'Geyser' | 'FrackingCore',
		},
		...{
			ResourceDescriptor: docs_json_ts_0_3_7_7_properties_BlueprintGeneratedClass_quoted,
			ResourceNodeType?: 'Geyser' | 'FrackingCore',
		}[],
	],
};

type BlueprintGeneratedClass_single_quoted = `BlueprintGeneratedClass'/Game/FactoryGame/${Exclude<string, ''>}${'\''}`;

type FGRailroadTrackConnectionComponent_quoted = `FGRailroadTrackConnectionComponent'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Texture2D = `Texture2D /Game/FactoryGame/${Exclude<string, ''>}${''}`;

type Texture2D_quoted = `Texture2D'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Tier = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

type TintColor = {
	SpecifiedColor: docs_json_ts_common_types_RGBA,
};

export type {
	mAllowedResourceForms,
	mFogPlaneTransforms_empty,
	mFogPlaneTransforms_list,
	mForm,
	mFuel,
	mFuel_item_base,
	mFuel_item_has_byproduct,
	mFuel_item_no_byproduct,
	mProducedIn,
	mProducedIn_version_specific,
	mSchematicDependencies_item,
	mUnlocks_item,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mResourcePairsToAddToScanner,
	BlueprintGeneratedClass_single_quoted,
	FGRailroadTrackConnectionComponent_quoted,
	Texture2D,
	Texture2D_quoted,
	Tier,
	TintColor,
};
