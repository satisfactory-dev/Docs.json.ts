/* eslint-disable @stylistic/max-len */

import type {
	integer_string as docs_json_ts_common_types_integer_string,
	RGBA as docs_json_ts_common_types_RGBA,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
	XYZW_decimal_string as docs_json_ts_common_types_XYZW_decimal_string,
} from './../../common/types.ts';

import type {
	mProducedIn as docs_json_ts_0_3_7_7_properties_mProducedIn,
	mUnlocks_item_base as docs_json_ts_0_3_7_7_properties_mUnlocks_item_base,
} from './../../0.3.7.7/types/properties.ts';

type m_SFXSockets_item_exhaust = 'AudioSocket_Exhaust' | 'AudioSocket_Root';

type m_SFXSockets_item_turbine = 'AudioSocketTurbine' | 'CoalGeneratorPotential';

type mAllowedResourceForms = [
	mAllowedResourceForms_item,
	...mAllowedResourceForms_item[],
];

type mAllowedResourceForms_item = 'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_HEAT';

type mDefaultFuelClasses_item_nuclear = '/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C' | '/Game/FactoryGame/Resource/Parts/PlutoniumFuelRods/Desc_PlutoniumFuelRod.Desc_PlutoniumFuelRod_C';

type mFogPlaneTransforms_empty = null;

type mFogPlaneTransforms_list = [
	mFogPlaneTransforms_list_item,
	...mFogPlaneTransforms_list_item[],
];

type mFogPlaneTransforms_list_item = {
	Rotation?: docs_json_ts_common_types_XYZW_decimal_string,
	Translation: docs_json_ts_common_types_XYZ_decimal_string,
	Scale3D?: docs_json_ts_common_types_XYZ_decimal_string,
};

type mForm = 'RF_SOLID' | 'RF_LIQUID' | 'RF_INVALID' | 'RF_GAS';

type mFuel = [
	mFuel_item,
	...mFuel_item[],
];

type mFuel_item = mFuel_item_no_byproduct | mFuel_item_has_byproduct;

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

type mMeshes_item = '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1' | '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2' | '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3' | '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4' | '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5' | '/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6';

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

type mUnlocks_item_mNumArmEquipmentSlotsToUnlock = docs_json_ts_0_3_7_7_properties_mUnlocks_item_base & {
	mNumArmEquipmentSlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type FGRailroadTrackConnectionComponent_quoted = `FGRailroadTrackConnectionComponent'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Texture2D = `Texture2D /Game/FactoryGame/${Exclude<string, ''>}${''}`;

type Tier = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

type TintColor = {
	SpecifiedColor: docs_json_ts_common_types_RGBA,
};

export type {
	m_SFXSockets_item_exhaust,
	m_SFXSockets_item_turbine,
	mAllowedResourceForms,
	mAllowedResourceForms_item,
	mDefaultFuelClasses_item_nuclear,
	mFogPlaneTransforms_empty,
	mFogPlaneTransforms_list,
	mFogPlaneTransforms_list_item,
	mForm,
	mFuel,
	mFuel_item,
	mFuel_item_base,
	mFuel_item_has_byproduct,
	mFuel_item_no_byproduct,
	mMeshes_item,
	mProducedIn,
	mProducedIn_version_specific,
	mSchematicDependencies_item,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	FGRailroadTrackConnectionComponent_quoted,
	Texture2D,
	Tier,
	TintColor,
};
