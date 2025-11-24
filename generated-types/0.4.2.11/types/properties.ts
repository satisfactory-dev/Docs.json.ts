/* eslint-disable @stylistic/max-len */

import type {
	integer_string as docs_json_ts_common_types_integer_string,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
	XYZW_decimal_string as docs_json_ts_common_types_XYZW_decimal_string,
} from './../../common/types.ts';

import type {
	DocsDotJson_BlueprintGeneratedClass_quoted_list as docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
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

type mPersistentBigIcon = `${'Texture2D /Game/FactoryGame/' | 'Texture2D\'/Game/FactoryGame/' | 'Texture2D\'"/Game/FactoryGame/'}${string}${'/IconDesc_' | '/' | ''}${string}${'_'}${'256' | '512' | '1b' | '256_New'}${'.'}${string}${'_'}${'256' | '512' | '1b' | '256_New'}${'"\'' | '\'' | ''}`;

type mSchematicDependencies_item = {
	Class: `BP_${string}${'_C'}`,
	mGamePhase: 'EGP_FoodCourt',
};

type mSmallIcon = `${'Texture2D /Game/FactoryGame/' | 'Texture2D\'/Game/FactoryGame/' | 'Texture2D\'"/Game/FactoryGame/'}${string}${'/IconDesc_' | '/' | ''}${string}${'_'}${'64' | '256' | '1b' | '64_new'}${'.'}${string}${'_'}${'64' | '256' | '1b' | '64_new'}${'"\'' | '\'' | ''}`;

type mUnlocks_item = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mRecipes | mUnlocks_item_mResourcePairsToAddToScanner | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mNumInventorySlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mSchematics | mUnlocks_item_mNumArmEquipmentSlotsToUnlock | docs_json_ts_0_3_7_7_properties_mUnlocks_item_mItemsToGive;

type mUnlocks_item_mNumArmEquipmentSlotsToUnlock = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mNumArmEquipmentSlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type mUnlocks_item_mResourcePairsToAddToScanner = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mResourcesToAddToScanner: '' | docs_json_ts_0_3_7_7_properties_DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mResourcePairsToAddToScanner: [
		{
			ResourceDescriptor: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
			ResourceNodeType?: 'Geyser' | 'FrackingCore',
		},
		...{
			ResourceDescriptor: `BlueprintGeneratedClass'"/Game/FactoryGame/${string}${'"\''}`,
			ResourceNodeType?: 'Geyser' | 'FrackingCore',
		}[],
	],
};

type DocsDotJson_FGRailroadTrackConnectionComponent_quoted_list = [
    `FGRailroadTrackConnectionComponent'"/Game/FactoryGame/${string}${'"\''}`,
    ...`FGRailroadTrackConnectionComponent'"/Game/FactoryGame/${string}${'"\''}`[],
];

type Tier = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type {
	mAllowedResourceForms,
	mFogPlaneTransforms_empty,
	mFogPlaneTransforms_list,
	mForm,
	mFuel,
	mFuel_item_base,
	mFuel_item_has_byproduct,
	mFuel_item_no_byproduct,
	mPersistentBigIcon,
	mSchematicDependencies_item,
	mSmallIcon,
	mUnlocks_item,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mResourcePairsToAddToScanner,
	DocsDotJson_FGRailroadTrackConnectionComponent_quoted_list,
	Tier,
};
