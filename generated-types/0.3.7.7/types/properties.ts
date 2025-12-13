/* eslint-disable @stylistic/max-len */

import type {
	bool_string as docs_json_ts_common_types_bool_string,
	integer_string as docs_json_ts_common_types_integer_string,
	XYZ_decimal_string as docs_json_ts_common_types_XYZ_decimal_string,
	XYZW_decimal_string as docs_json_ts_common_types_XYZW_decimal_string,
} from './../../common/types.ts';

type AnimMontage_quoted = `AnimMontage'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type BlueprintGeneratedClass_non_quoted = `BlueprintGeneratedClass /Game/FactoryGame/${Exclude<string, ''>}${''}`;

type BlueprintGeneratedClass_quoted = `BlueprintGeneratedClass'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type CameraAnim_quoted = `CameraAnim'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type Class_quoted = `Class'"/Script/FactoryGame.${Exclude<string, ''>}${'"\''}`;

type FGTrainPlatformConnection_quoted = `FGTrainPlatformConnection'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type ParticleSystem_quoted = `ParticleSystem'"/Game/FactoryGame/${Exclude<string, ''>}${'"\''}`;

type mAbbreviatedDisplayName = string;

type mAllowedResourceForms = [
	'RF_SOLID',
] | [
	'RF_LIQUID',
];

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

type mForm = 'RF_SOLID' | 'RF_LIQUID' | 'RF_INVALID';

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

type mSchematicDependencies_item = {
	Class: `BP_${string}${'_C'}`,
	mSchematics: DocsDotJson_BlueprintGeneratedClass_quoted_list,
	mRequireAllSchematicsToBePurchased: docs_json_ts_common_types_bool_string,
};

type mStackSize = 'SS_HUGE' | 'SS_MEDIUM' | 'SS_BIG' | 'SS_SMALL' | 'SS_ONE' | 'SS_FLUID';

type mSubCategories = [
	BlueprintGeneratedClass_quoted,
	...BlueprintGeneratedClass_quoted[],
];

type mType = 'EST_Custom' | 'EST_Tutorial' | 'EST_MAM' | 'EST_HardDrive' | 'EST_Milestone' | 'EST_Alternate' | 'EST_ResourceSink';

type mUnlocks_item_base = {
	Class: `BP_${string}${'_C'}`,
};

type mUnlocks_item_mItemsToGive = mUnlocks_item_base & {
	mItemsToGive: ItemClass_Amount_list,
};

type mUnlocks_item_mNumArmEquipmentSlotsToUnlock = mUnlocks_item_base & {
	mNumArmEquipmentSlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type mUnlocks_item_mNumInventorySlotsToUnlock = mUnlocks_item_base & {
	mNumInventorySlotsToUnlock: docs_json_ts_common_types_integer_string,
};

type mUnlocks_item_mRecipes = mUnlocks_item_base & {
	mRecipes: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mUnlocks_item_mResourcesToAddToScanner = mUnlocks_item_base & {
	mResourcesToAddToScanner: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type mUnlocks_item_mSchematics = mUnlocks_item_base & {
	mSchematics: DocsDotJson_BlueprintGeneratedClass_quoted_list,
};

type transform_Rotation_Translation_Scale3D = {
	Rotation: docs_json_ts_common_types_XYZW_decimal_string,
	Translation: docs_json_ts_common_types_XYZ_decimal_string,
	Scale3D: docs_json_ts_common_types_XYZ_decimal_string,
};

type DocsDotJson_BlueprintGeneratedClass_quoted_list = [
	BlueprintGeneratedClass_quoted,
	...BlueprintGeneratedClass_quoted[],
];

type ItemClass_Amount_list = [
	{
		ItemClass: BlueprintGeneratedClass_quoted,
		Amount: docs_json_ts_common_types_integer_string,
	},
	...{
		ItemClass: BlueprintGeneratedClass_quoted,
		Amount: docs_json_ts_common_types_integer_string,
	}[],
];

type Texture2D = `Texture2D'/Game/FactoryGame/${Exclude<string, ''>}${'\''}`;

type Tier = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

export type {
	AnimMontage_quoted,
	BlueprintGeneratedClass_non_quoted,
	BlueprintGeneratedClass_quoted,
	CameraAnim_quoted,
	Class_quoted,
	FGTrainPlatformConnection_quoted,
	ParticleSystem_quoted,
	mAbbreviatedDisplayName,
	mAllowedResourceForms,
	mDisableSnapOn_front_bottom,
	mDisableSnapOn_front_left_top_bottom,
	mDisableSnapOn_front_top,
	mDisableSnapOn_front_top_bottom,
	mDisableSnapOn_right_left_top_bottom,
	mDisableSnapOn_top_bottom,
	mDisplayName,
	mForm,
	mProducedIn,
	mProducedIn_base,
	mProducedIn_pre_update6,
	mRelevantEvents,
	mSchematicDependencies_item,
	mStackSize,
	mSubCategories,
	mType,
	mUnlocks_item_base,
	mUnlocks_item_mItemsToGive,
	mUnlocks_item_mNumArmEquipmentSlotsToUnlock,
	mUnlocks_item_mNumInventorySlotsToUnlock,
	mUnlocks_item_mRecipes,
	mUnlocks_item_mResourcesToAddToScanner,
	mUnlocks_item_mSchematics,
	transform_Rotation_Translation_Scale3D,
	DocsDotJson_BlueprintGeneratedClass_quoted_list,
	ItemClass_Amount_list,
	Texture2D,
	Tier,
};
