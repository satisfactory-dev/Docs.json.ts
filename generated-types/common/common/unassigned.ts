import {UnrealEngineString, StringStartsWith} from '../utils/validators';

import {
	common_base__FGBuildingDescriptor__ClassName__type,
	common_base__FGBuildingDescriptor__mForm__type,
	common_base__FGBuildingDescriptor__mSubCategories__type,
	common_base__FGBuildingDescriptor__type,
} from '../classes/CoreUObject/FGBuildingDescriptor';

import {
	common_base__FGBuildable__base__type,
	common_base__FGBuildable__consumes_power_base__type,
	common_base__FGBuildable__docking_station_base__type,
	common_base__FGBuildable__occupied__type,
	common_base__FGBuildable__tiered__type,
	common_base__FGBuildable__pipeline_accessory__base__type,
	common_base__FGBuildable__pipeline_accessory__type,
	common_base__FGBuildable__pipeline_flow_accessory__type,
	common_base__FGBuildable__pole__base__no_static__type,
	common_base__FGBuildable__pole__base__with_static__type,
} from '../classes/CoreUObject/FGBuildable';

import {
	FGSchematic__mUnlocks_mSchematics__mSchematics__type,
	common_base__FGSchematic__mUnlocks__type,
	common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type,
	common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type,
	common_base__FGSchematic__mUnlocks_Class__type,
	common_base__FGSchematic__base__type,
	FGSchematic__mUnlocks_mTapeUnlocks__type,
	FGSchematic__mUnlocks_mRecipes__type,
	FGSchematic__mUnlocks_resources_to_scan__type,
	FGSchematic__mUnlocks_mEmotes__type,
	FGSchematic__mUnlocks_mSchematics__type,
	FGSchematic__mUnlocks_inventory_slots__type,
	FGSchematic__mUnlocks_equipment_slots__type,
	FGSchematic__mUnlocks_mScannableObjects__type,
	FGSchematic__mUnlocks_mItemsToGive__type,
} from '../classes/CoreUObject/FGSchematic';

import {common_base__FGEquipment__base__type} from '../classes/CoreUObject/FGEquipment';

import {common_base__FGBuildableDroneStation__type} from '../classes/CoreUObject/FGBuildableDroneStation';

import {
	boolean__type,
	boolean_extended__type,
	decimal_string__type,
	decimal_string__signed__type,
	integer_string__type,
	integer_string__signed__type,
} from './scalar';

import {common_base__FGBuildableTradingPost__type} from '../classes/CoreUObject/FGBuildableTradingPost';

import {
	common_base__FGBuildableFactory__jump_pad__type,
	common_base__FGBuildableFactory__landing_pad__type,
} from '../classes/CoreUObject/FGBuildableFactory';

import {common_base__FGBuildableMAM__type} from '../classes/CoreUObject/FGBuildableMAM';

import {common_base__FGBuildablePipelineJunction__type} from '../classes/CoreUObject/FGBuildablePipelineJunction';

import {
	common_base__FGBuildablePipelinePump__type,
	common_base__FGBuildablePipelinePump__valve__type,
} from '../classes/CoreUObject/FGBuildablePipelinePump';

import {common_base__FGBuildablePipeReservoir__type} from '../classes/CoreUObject/FGBuildablePipeReservoir';

import {common_base__FGBuildablePoleLightweight__type} from '../classes/CoreUObject/FGBuildablePoleLightweight';

import {
	common_base__FGItemDescriptor__FGResourceDescriptor__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type,
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type,
} from '../classes/CoreUObject/FGItemDescriptor';

import {common_base__FGRecipe__type} from '../classes/CoreUObject/FGRecipe';

import {common_base__FGBuildableBlueprintDesigner__type} from '../classes/CoreUObject/FGBuildableBlueprintDesigner';

import {
	common_base__FGBuildableWall__base__type,
	common_base__FGBuildableWall__base__rectangle__type,
} from '../classes/CoreUObject/FGBuildableWall';

export type class__type = class__no_description__type & {
	mDescription: string;
};

export type class__no_description__type =
	class__no_description_or_display_name__type & {
		mDisplayName: string;
	};

export type class__no_description_or_display_name__type = {
	ClassName: Exclude<string, ''>;
};

export type color__type = {
	B: integer_string__type;
	G: integer_string__type;
	R: integer_string__type;
	A: integer_string__type;
};

export type color_decimal__type = {
	R: decimal_string__type;
	G: decimal_string__type;
	B: decimal_string__type;
	A: decimal_string__type;
};

export type empty_object__type = '()';

export type faux_1__type = class__type & {
	faux:
		| UnrealEngineString__array__type
		| decimal_string__type
		| decimal_string__signed__type
		| integer_string__type
		| integer_string__signed__type
		| color__type
		| color_decimal__type
		| empty_object__type
		| None__type
		| xyz__type
		| xy__type
		| xy__integer__type
		| quaternion__type
		| pitch_yaw_roll__type
		| xyz__integer__type
		| xyz_array__type
		| transformation__type
		| common_base__FGSchematic__base__type;
};

export type faux_10__type = class__type & {
	faux: 'FGBuildingDescriptor--properties';
	ClassName?: common_base__FGBuildingDescriptor__ClassName__type;
	mForm: common_base__FGBuildingDescriptor__mForm__type;
	mSubCategories: common_base__FGBuildingDescriptor__mSubCategories__type;
};

export type faux_10b__type = class__type & {
	faux: 'FGBuildingDescriptor';
	FGBuildingDescriptor: common_base__FGBuildingDescriptor__type;
};

export type faux_11__type = class__type & {
	faux: 'FGBuildable--base';
	FGBuildable: common_base__FGBuildable__base__type;
};

export type faux_12__type = class__type & {
	faux: 'mEventType--optional-csv';
	mEventType__optional_csv?: mEventType__optional_csv__type;
};

export type faux_13__type = class__type & {
	faux: 'FGSchematic--mUnlocks_mSchematics--mSchematics';
	FGSchematic__mUnlocks_mSchematics__mSchematics: FGSchematic__mUnlocks_mSchematics__mSchematics__type;
};

export type faux_14__type = class__type & {
	faux: 'common-base--FGSchematic--mUnlocks';
	common_base__FGSchematic__mUnlocks: common_base__FGSchematic__mUnlocks__type;
	optional?:
		| FGSchematic__mUnlocks_mTapeUnlocks__type
		| FGSchematic__mUnlocks_mRecipes__type
		| FGSchematic__mUnlocks_resources_to_scan__type
		| FGSchematic__mUnlocks_mEmotes__type
		| FGSchematic__mUnlocks_mSchematics__type
		| FGSchematic__mUnlocks_inventory_slots__type
		| FGSchematic__mUnlocks_equipment_slots__type
		| FGSchematic__mUnlocks_mScannableObjects__type
		| FGSchematic__mUnlocks_mItemsToGive__type;
	optional2?: common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type;
	optional3?: common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type;
};

export type faux_15__type = class__type & {
	faux: 'common-base--FGEquipment--base';
	FGSchematic__mUnlocks_mSchematics__mSchematics?: common_base__FGEquipment__base__type;
};

export type faux_16__type = class__type & {
	faux: 'faux-16';
	mAspect?: mAspect__type;
	mPlatformDockingStatus?: mPlatformDockingStatus__type;
	mDockingRuleSet?: mDockingRuleSet__type;
	mBatteryStatus?: mBatteryStatus__type;
	InfinityExtrap?: InfinityExtrap__type;
	mDamageTypes?: mDamageTypes__type;
};

export type faux_17__type = class__type & {
	faux?: 'common-base--FGBuildable--consumes-power-base';
	ref: common_base__FGBuildable__consumes_power_base__type;
};

export type faux_18__type = class__type & {
	faux?: 'common-base--FGBuildable--docking-station-base';
	ref: common_base__FGBuildable__docking_station_base__type;
};

export type faux_19__type = class__type & {
	faux?: 'common-base--FGBuildableDroneStation';
	ref: common_base__FGBuildableDroneStation__type;
};

export type faux_2__type = class__type & {
	faux_bool: boolean__type;
};

export type faux_20__type = class__type & {
	faux?: 'common-base--FGBuildableTradingPost';
	ref: common_base__FGBuildableTradingPost__type;
};

export type faux_21__type = class__type & {
	faux?: 'common-base--FGBuildableFactory--jump-pad';
	ref: common_base__FGBuildableFactory__jump_pad__type;
};

export type faux_22__type = class__type & {
	faux?: 'common-base--FGBuildableFactory--landing-pad';
	ref: common_base__FGBuildableFactory__landing_pad__type;
};

export type faux_23__type = class__type & {
	faux?: 'common-base--FGBuildable--occupied';
	ref: common_base__FGBuildable__occupied__type;
};

export type faux_24__type = class__type & {
	faux?: 'common-base--FGBuildable--tiered';
	ref: common_base__FGBuildable__tiered__type;
};

export type faux_25__type = class__type & {
	faux?: 'common-base--FGBuildableMAM';
	ref: common_base__FGBuildableMAM__type;
};

export type faux_26__type = class__type & {
	faux?: 'pipeline-stuff';
	ref: common_base__FGBuildable__pipeline_accessory__base__type;
	accessory?: common_base__FGBuildable__pipeline_accessory__type;
	junction?: common_base__FGBuildablePipelineJunction__type;
	flow_accessory?: common_base__FGBuildable__pipeline_flow_accessory__type;
	pump?: common_base__FGBuildablePipelinePump__type;
	valve?: common_base__FGBuildablePipelinePump__valve__type;
	reservoir?: common_base__FGBuildablePipeReservoir__type;
};

export type faux_27__type = class__type & {
	faux: 'pole-stuff';
	base_no_static: common_base__FGBuildable__pole__base__no_static__type;
	base_with_static: common_base__FGBuildable__pole__base__with_static__type;
	lightweight: common_base__FGBuildablePoleLightweight__type;
};

export type faux_28__type = class__type & {
	faux?: 'FGItemDescriptor--FGResourceDescriptor';
	ref: common_base__FGItemDescriptor__FGResourceDescriptor__type;
};

export type faux_29__type = class__type & {
	faux?: 'FGRecipe';
	ref: common_base__FGRecipe__type;
};

export type faux_3__type = class__type & {
	faux_bool_extended: boolean_extended__type;
};

export type faux_30__type = class__type & {
	faux?: 'FGBuildableBlueprintDesigner';
	ref: common_base__FGBuildableBlueprintDesigner__type;
};

export type faux_31__type = class__type & {
	faux?: 'FGSchematic--mUnlocks_Class';
	ref: common_base__FGSchematic__mUnlocks_Class__type;
};

export type faux_32__type = class__type & {
	faux?: 'FGBuildableWall--base';
	base: common_base__FGBuildableWall__base__type;
	rectangle?: common_base__FGBuildableWall__base__rectangle__type;
};

export type faux_4__type = class__type & {
	faux_texture: Texture2D__type;
};

export type faux_5__type = class__type & {
	faux_none: None__type;
};

export type faux_6__type = class__type & {
	mForm: mForm__type;
};

export type faux_7__type = class__type & {
	ItemClass_opt: ItemClass__type;
};

export type faux_8__type = class__type & {
	ItemClass: ItemClass__amount_required__type;
};

export type faux_9__type = class__type & {
	faux: 'FGItemDescriptor--FGResourceDescriptor--FGPoleDescriptor--mSubCategories';
	mSubCategories: common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type;
};

export type faux_9b__type = class__type & {
	faux: 'common-base--FGItemDescriptor--FGResourceDescriptor--FGPoleDescriptor';
	FGPoleDescriptor: common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type;
};

export type InfinityExtrap__type = 'RCCE_Constant';

export type ItemClass__type = [
	{
		ItemClass: UnrealEngineString;
		Amount?: integer_string__type;
	},
	...{
		ItemClass: UnrealEngineString;
		Amount?: integer_string__type;
	}[],
];

export type ItemClass__amount_required__type = [
	{
		ItemClass: UnrealEngineString;
		Amount: integer_string__type;
	},
	...{
		ItemClass: UnrealEngineString;
		Amount: integer_string__type;
	}[],
];

export type mAspect__type = 'RSA_None';

export type mBatteryStatus__type = 'BS_Idle';

export type mDamageTypes__type = [
	UnrealEngineString<
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Energy.BP_PointDamageType_Energy_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Gas.BP_PointDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Gas.BP_RadialDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Physical.BP_PointDamageType_Physical_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Explosive.BP_RadialDamageType_Explosive_C'
	>,
	...UnrealEngineString<
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Energy.BP_PointDamageType_Energy_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Gas.BP_PointDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Gas.BP_RadialDamageType_Gas_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_PointDamageType_Physical.BP_PointDamageType_Physical_C'
		| '/Game/FactoryGame/-Shared/Blueprint/DamageTypes/BP_RadialDamageType_Explosive.BP_RadialDamageType_Explosive_C'
	>[],
];

export type mDockingRuleSet__type = {
	DockForDuration: decimal_string__type;
};

export type mEventType__type = 'EV_Christmas';

export type mEventType__optional_csv__type =
	| ''
	| [mEventType__type, ...mEventType__type[]];

export type mForm__type = 'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_INVALID';

export type mPlatformDockingStatus__type = 'ETPDS_None';

export type NativeClass__type = {
	NativeClass: UnrealEngineString<
		'/Script/CoreUObject.Class',
		StringStartsWith<'/Script/FactoryGame.FG'>
	>;
};

export type None__type = 'None';

export type pitch_yaw_roll__type = {
	Pitch: decimal_string__signed__type;
	Yaw: decimal_string__signed__type;
	Roll: decimal_string__signed__type;
};

export type quaternion__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
	Z: decimal_string__signed__type;
	W: decimal_string__type;
};

export type SpecifiedColor__type = {
	SpecifiedColor: color_decimal__type;
};

export type Texture2D__type =
	| StringStartsWith<'Texture2D /Game/FactoryGame/'>
	| None__type
	| UnrealEngineString<'/Script/Engine.Texture2D'>;

export type transformation__type = {
	Rotation: quaternion__type;
	Translation: xyz__type;
	Scale3D: xyz__type;
};

export type UnrealEngineString__array__type = [
	UnrealEngineString,
	...UnrealEngineString[],
];

export type xy__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
};

export type xy__integer__type = {
	X: integer_string__type;
	Y: integer_string__type;
};

export type xyz__type = {
	X: decimal_string__signed__type;
	Y: decimal_string__signed__type;
	Z: decimal_string__signed__type;
};

export type xyz__integer__type = {
	X: integer_string__type;
	Y: integer_string__type;
	Z: integer_string__type;
};

export type xyz_array__type = [
	{
		X: decimal_string__type;
		Y: decimal_string__signed__type;
		Z: decimal_string__signed__type;
	},
	...{
		X: decimal_string__type;
		Y: decimal_string__signed__type;
		Z: decimal_string__signed__type;
	}[],
];
