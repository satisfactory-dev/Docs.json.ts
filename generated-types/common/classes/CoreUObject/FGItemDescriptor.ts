import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

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
	class__type,
} from '../../common/unassigned';

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

export type common_base__FGItemDescriptor__FGResourceDescriptor__type =
	common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type & {
		mResourceSinkPoints: integer_string__type;
	};

export type common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__type =
	common_base__FGItemDescriptor__FGBuildingDescriptor__FGResourceDescriptor__type & {
		mSubCategories: common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type;
		mForm: mForm__type;
	};

export type common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type =

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
