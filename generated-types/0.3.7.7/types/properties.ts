/* eslint-disable @stylistic/max-len */

import type {
	AnimMontage_quoted as docs_json_ts_0_3_7_7_overridable_AnimMontage_quoted,
	BlueprintGeneratedClass_quoted as docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
} from './overridable.ts';

import type {
	BGRA as docs_json_ts_common_types_BGRA,
	bool_string as docs_json_ts_common_types_bool_string,
	decimal_string as docs_json_ts_common_types_decimal_string,
	integer_string as docs_json_ts_common_types_integer_string,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
	XYZW_decimal_string as docs_json_ts_common_types_XYZW_decimal_string,
} from './../../common/types.ts';

import type {
	StringPassesRegex,
} from '@signpostmarv/json-schema-typescript-codegen';

type const_Miner = 'Miner';

type const_None = 'None';

type mAbbreviatedDisplayName = string;

type mAllowedResourceForms = [
	'RF_SOLID',
] | [
	'RF_LIQUID',
];

type mAnimData_item = {
	Montage_7_2E66F6A948A8606E71185682EA2AC4EC: docs_json_ts_0_3_7_7_overridable_AnimMontage_quoted,
	CameraAnim_8_AA01C2B248FF438D6C2816B2FA94F1BD: CameraAnim_quoted,
};

type mDefaultFuelClasses_item_coal = '/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C' | '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C' | '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C';

type mDefaultFuelClasses_item_fuel = '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C' | '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C' | '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C';

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

type mFluidNames_item = {
	WwiseSafeName: StringPassesRegex<'^[A-Z][A-Za-z_]+[a-z]$'>,
	ActualName?: StringPassesRegex<'^[A-Z][A-Za-z ]+[a-z]$'>,
};

type mForm = 'RF_SOLID' | 'RF_LIQUID' | 'RF_INVALID';

type mObjectDetails_item = {
	ScannableClass: docs_json_ts_0_3_7_7_overridable_BlueprintGeneratedClass_quoted,
	DisplayText: {
		NSLOCTEXT: [
			string,
			...string[],
		],
	},
	ScannerLightColor: docs_json_ts_common_types_BGRA,
	PreCacheAllOfType?: docs_json_ts_common_types_bool_string,
	ShouldOverrideDetectionRange?: docs_json_ts_common_types_bool_string,
	NewDetectionRange?: docs_json_ts_common_types_decimal_string,
	RequiredSchematic: RequiredSchematic,
};

type mProducedIn = mProducedIn_base | mProducedIn_pre_update6;

type mProducedIn_base = '' | [
    '/Game/FactoryGame/Equipment/BuildGun/BP_BuildGun.BP_BuildGun_C' | '/Script/FactoryGame.FGBuildGun' | '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C' | '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/Converter/Build_Converter.Build_Converter_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/OilRefinery/Build_OilRefinery.Build_OilRefinery_C' | '/Game/FactoryGame/Buildable/Factory/Packager/Build_Packager.Build_Packager_C' | '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C' | '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C',
] | [
    '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C' | '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C',
    '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C',
] | [
	'/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C',
    '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C',
] | [
    '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C' | '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C',
    '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C',
    '/Script/FactoryGame.FGBuildableAutomatedWorkBench',
] | [
	'/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C',
	'/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C',
	'/Game/FactoryGame/Buildable/Factory/AutomatedWorkBench/Build_AutomatedWorkBench.Build_AutomatedWorkBench_C',
];

type mProducedIn_pre_update6 = [
    '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C' | '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C' | '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C',
    '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkBenchComponent.BP_WorkBenchComponent_C',
    '/Game/FactoryGame/Buildable/-Shared/WorkBench/BP_WorkshopComponent.BP_WorkshopComponent_C',
];

type mRelevantEvents = [
	'EV_Christmas',
];

type mStackSize = 'SS_HUGE' | 'SS_MEDIUM' | 'SS_BIG' | 'SS_SMALL' | 'SS_ONE' | 'SS_FLUID';

type mType = 'EST_Custom' | 'EST_Tutorial' | 'EST_MAM' | 'EST_HardDrive' | 'EST_Milestone' | 'EST_Alternate' | 'EST_ResourceSink';

type mUnlocks_item_base = {
	Class: `BP_${string}${'_C'}`,
};

type mUnlocks_item_mNumArmEquipmentSlotsToUnlock = mUnlocks_item_base & {
	mNumArmEquipmentSlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type mUnlocks_item_mNumInventorySlotsToUnlock = mUnlocks_item_base & {
	mNumInventorySlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type transform_Rotation_Translation_Scale3D = {
	Rotation: docs_json_ts_common_types_XYZW_decimal_string,
	Translation: docs_json_ts_common_types_XYZ_decimal_string,
	Scale3D: docs_json_ts_common_types_XYZ_decimal_string,
};

type BlueprintGeneratedClass_non_quoted = `BlueprintGeneratedClass /Game/FactoryGame/${Exclude<string, ''>}${''}`;

type CameraAnim_quoted = `CameraAnim'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Class_quoted = `Class'"/Script/FactoryGame.${Exclude<string, ''>}${'"\''}`;

type FGTrainPlatformConnection_quoted = `FGTrainPlatformConnection'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Meshes_item = 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_1.Tradingpost_Stage_1"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_2.Tradingpost_Stage_2"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_3.Tradingpost_Stage_3"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_4.Tradingpost_Stage_4"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_5.Tradingpost_Stage_5"\'' | 'StaticMesh\'"/Game/FactoryGame/Buildable/Factory/TradingPost/Mesh/Tradingpost_Stage_6.Tradingpost_Stage_6"\'';

type RawResources = `/Game/FactoryGame/Resource/RawResources/${'Coal/Desc_Coal.Desc_Coal' | 'Stone/Desc_Stone.Desc_Stone' | 'OreIron/Desc_OreIron.Desc_OreIron' | 'OreBauxite/Desc_OreBauxite.Desc_OreBauxite' | 'OreCopper/Desc_OreCopper.Desc_OreCopper' | 'CrudeOil/Desc_LiquidOil.Desc_LiquidOil' | 'OreGold/Desc_OreGold.Desc_OreGold' | 'RawQuartz/Desc_RawQuartz.Desc_RawQuartz' | 'Sulfur/Desc_Sulfur.Desc_Sulfur' | 'OreUranium/Desc_OreUranium.Desc_OreUranium'}${'_C'}`;

type RequiredSchematic = `/Game/FactoryGame/Schematics/Research/${Exclude<string, ''>}${'/'}${Exclude<string, ''>}${'.'}${Exclude<string, ''>}${'_C'}`;

type Texture2D = `Texture2D'/Game/FactoryGame/${Exclude<string, ''>}${'\''}`;

type Texture2D_base = `Texture2D${Exclude<string, ''>}`;

type Tier = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

export type {
	const_Miner,
	const_None,
	mAbbreviatedDisplayName,
	mAllowedResourceForms,
	mAnimData_item,
	mDefaultFuelClasses_item_coal,
	mDefaultFuelClasses_item_fuel,
	mDisableSnapOn_front_bottom,
	mDisableSnapOn_front_left_top_bottom,
	mDisableSnapOn_front_top,
	mDisableSnapOn_front_top_bottom,
	mDisableSnapOn_right_left_top_bottom,
	mDisableSnapOn_top_bottom,
	mDisplayName,
	mFluidNames_item,
	mForm,
	mObjectDetails_item,
	mProducedIn,
	mProducedIn_base,
	mProducedIn_pre_update6,
	mRelevantEvents,
	mStackSize,
	mType,
	mUnlocks_item_base,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mNumInventorySlotsToUnlock,
	transform_Rotation_Translation_Scale3D,
	BlueprintGeneratedClass_non_quoted,
	CameraAnim_quoted,
	Class_quoted,
	FGTrainPlatformConnection_quoted,
	Meshes_item,
	RawResources,
	RequiredSchematic,
	Texture2D,
	Texture2D_base,
	Tier,
};
