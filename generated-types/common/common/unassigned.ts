import {UnrealEngineString, StringStartsWith} from '../utils/validators';

import {
	boolean__type,
	boolean_extended__type,
	decimal_string__type,
	decimal_string__signed__type,
	integer_string__type,
	integer_string__signed__type,
} from './scalar';

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

export type common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type =
	class__type & {
		mAbbreviatedDisplayName: string;
		mStackSize:
			| 'SS_ONE'
			| 'SS_FLUID'
			| 'SS_SMALL'
			| 'SS_MEDIUM'
			| 'SS_BIG'
			| 'SS_HUGE';
		mCanBeDiscarded: boolean__type;
		mRememberPickUp: boolean__type;
		mEnergyValue: decimal_string__type;
		mRadioactiveDecay: decimal_string__type;
		mSmallIcon: Texture2D__type;
		mPersistentBigIcon: Texture2D__type;
		mCrosshairMaterial:
			| ('' | 'None')
			| StringStartsWith<'/Game/FactoryGame/Interface/UI/Material/Crosshairs/'>;
		mDescriptorStatBars:
			| ''
			| [
					{
						Value: integer_string__type;
					},
					...{
						Value: integer_string__type;
					}[],
			];
		mMenuPriority: decimal_string__type;
		mFluidColor: color__type;
		mGasColor: color__type;
		mCompatibleItemDescriptors:
			| ''
			| [
					{
						CompatibleItemType: 'CIT_AMMO' | 'CIT_WEAPON';
						CompatibleItemDescriptors: UnrealEngineString__array__type;
					},
					...{
						CompatibleItemType: 'CIT_AMMO' | 'CIT_WEAPON';
						CompatibleItemDescriptors: UnrealEngineString__array__type;
					}[],
			];
		mScannableType: 'RTWOT_Default' | 'RTWOT_WeakSignal' | 'RTWOT_Flora';
		mShouldOverrideScannerDisplayText: boolean__type;
		mScannerDisplayText: string;
		mScannerLightColor: color__type;
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
		| transformation__type;
};

export type faux_2__type = class__type & {
	faux_bool: boolean__type;
};

export type faux_3__type = class__type & {
	faux_bool_extended: boolean_extended__type;
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

export type mForm__type = 'RF_SOLID' | 'RF_LIQUID' | 'RF_GAS' | 'RF_INVALID';

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
