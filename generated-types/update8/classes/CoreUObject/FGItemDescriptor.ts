import {
	boolean__type,
	decimal_string__type,
	integer_string__type,
} from '../../common/scalar';

import {
	Texture2D__type,
	color__type,
	mForm__type,
	UnrealEngineString__array__type,
	None__type,
	class__type,
	NativeClass__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

export type FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type =
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
		mClassToScanFor:
			| None__type
			| StringStartsWith<'/Game/FactoryGame/Resource/Environment/'>
			| StringStartsWith<'/Game/FactoryGame/World/Benefit/'>;
		mScannableType: 'RTWOT_Default' | 'RTWOT_WeakSignal' | 'RTWOT_Flora';
		mShouldOverrideScannerDisplayText: boolean__type;
		mScannerDisplayText: string;
		mScannerLightColor: color__type;
	};

export type FGItemDescriptor__FGResourceDescriptor__type =
	FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mResourceSinkPoints: integer_string__type;
	};

export type FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type =
	FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		mSubCategories:
			| ''
			| [
					UnrealEngineString<
						'/Script/Engine.BlueprintGeneratedClass',
						StringStartsWith<'/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/'>
					>,
					...UnrealEngineString<
						'/Script/Engine.BlueprintGeneratedClass',
						StringStartsWith<'/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/'>
					>[],
			];
		mForm: mForm__type;
	};

export type FGItemDescriptor__NativeClass = NativeClass__type & {
	Classes: [
		FGItemDescriptor__FGResourceDescriptor__type,
		...FGItemDescriptor__FGResourceDescriptor__type[],
	];
};
