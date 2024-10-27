import {
	UnrealEngineString,
	StringStartsWith,
	StringPassedRegExp,
} from '../utils/validators';

import {
	decimal_string__signed__type,
	integer_string__type,
	decimal_string__type,
	boolean__type,
	boolean_extended__type,
	integer_string__signed__type,
} from './scalar';

import {
	FGSchematic__mUnlocks_mSchematics__mSchematics__type,
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

export type common_base__FGBuildable__base__type = class__type & {
	MaxRenderDistance: decimal_string__signed__type;
	mAlternativeMaterialRecipes:
		| string
		| [
				{
					mMaterial: Exclude<string, ''>;
					mRecipe: Exclude<string, ''>;
				},
				...{
					mMaterial: Exclude<string, ''>;
					mRecipe: Exclude<string, ''>;
				}[],
		];
	mContainsComponents: boolean__type;
	mIsConsideredForBaseWeightValue: decimal_string__type;
	mBuildEffectSpeed: decimal_string__type;
	mAllowColoring: boolean__type;
	mAllowPatterning: boolean__type;
	mSkipBuildEffect: boolean__type;
	mForceNetUpdateOnRegisterPlayer: boolean__type;
	mToggleDormancyOnInteraction: boolean__type;
	mIsMultiSpawnedBuildable: boolean__type;
	mShouldShowAttachmentPointVisuals: boolean__type;
	mCanContainLightweightInstances: boolean__type;
	mAffectsOcclusion: boolean__type;
	mOcclusionShape:
		| 'ROCS_Box'
		| 'ROCS_Ramp'
		| 'ROCS_Box_Special'
		| 'ROCS_CornerRamp';
	mScaleCustomOffset: decimal_string__type;
	mCustomScaleType: 'ROCSS_Center' | 'ROCSS_Top' | 'ROCSS_Bot';
	mOcclusionBoxInfo:
		| ''
		| [
				{
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				},
				...{
					Min: xyz__type;
					Max: xyz__type;
					IsValid: boolean__type;
				}[],
		];
	mAttachmentPoints: '';
	mInteractingPlayers: '';
	mIsUseable: boolean__type;
	mHideOnBuildEffectStart: boolean__type;
	mShouldModifyWorldGrid: boolean__type;
	mBlueprintBuildEffectID?: integer_string__signed__type;
};

export type common_base__FGBuildingDescriptor__ClassName__type = Exclude<
	string,
	| ''
	| 'Desc_ConveyorPole_C'
	| 'Desc_PipelineSupport_C'
	| 'Desc_PipeSupportStackable_C'
	| 'Desc_HyperPoleStackable_C'
	| 'Desc_PipeHyperSupport_C'
	| 'Desc_ConveyorPoleStackable_C'
>;

export type common_base__FGBuildingDescriptor__mForm__type = 'RF_INVALID';

export type common_base__FGBuildingDescriptor__mSubCategories__type = [
	UnrealEngineString<
		'/Script/Engine.BlueprintGeneratedClass',
		StringStartsWith<
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Special/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Walls/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Power/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Production/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Organisation/'
		>
	>,
	...UnrealEngineString<
		'/Script/Engine.BlueprintGeneratedClass',
		StringStartsWith<
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Special/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Walls/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Transport/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Power/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Production/'
			| '/Game/FactoryGame/Interface/UI/InGame/BuildMenu/BuildCategories/Sub_Organisation/'
		>
	>[],
];

export type common_base__FGCustomizationRecipe__FGRecipe__type =
	class__no_description__type & {
		FullName: StringPassedRegExp<'^BlueprintGeneratedClass /Game/FactoryGame/(?:-?[A-Z][A-Za-z0-9_]+/)*(Recipe_[A-Za-z0-9_]+)\\.\\1_C$'>;
		mDisplayName: Exclude<string, ''>;
		mIngredients: '' | ItemClass__type;
		mProduct: '' | ItemClass__type;
		mManufacturingMenuPriority: decimal_string__type;
		mManufactoringDuration: decimal_string__type;
		mManualManufacturingMultiplier: decimal_string__type;
		mRelevantEvents: mEventType__optional_csv__type;
		mVariablePowerConsumptionConstant: decimal_string__type;
		mVariablePowerConsumptionFactor: decimal_string__type;
	};

export type common_base__FGEquipment__base__type =
	class__no_description_or_display_name__type & {
		mRandomAnim?: integer_string__type;
		mCanPress?: boolean__type;
		mAnimData?: [
			{
				Montage_7_2E66F6A948A8606E71185682EA2AC4EC: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_01_Montage.MedkitUse_01_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_02_Montage.MedkitUse_02_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_03_Montage.MedkitUse_03_Montage'
				>;
				CameraAnimationSequence_11_920C446448786C507704569A05006500: UnrealEngineString<
					'/Script/TemplateSequence.CameraAnimationSequence',
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_01_CameraAnimSequence.MedkitUse_01_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_02_CameraAnimSequence.MedkitUse_02_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_03_CameraAnimSequence.MedkitUse_03_CameraAnimSequence'
				>;
			},
			{
				Montage_7_2E66F6A948A8606E71185682EA2AC4EC: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_01_Montage.MedkitUse_01_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_02_Montage.MedkitUse_02_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_03_Montage.MedkitUse_03_Montage'
				>;
				CameraAnimationSequence_11_920C446448786C507704569A05006500: UnrealEngineString<
					'/Script/TemplateSequence.CameraAnimationSequence',
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_01_CameraAnimSequence.MedkitUse_01_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_02_CameraAnimSequence.MedkitUse_02_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_03_CameraAnimSequence.MedkitUse_03_CameraAnimSequence'
				>;
			},
			{
				Montage_7_2E66F6A948A8606E71185682EA2AC4EC: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_01_Montage.MedkitUse_01_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_02_Montage.MedkitUse_02_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_03_Montage.MedkitUse_03_Montage'
				>;
				CameraAnimationSequence_11_920C446448786C507704569A05006500: UnrealEngineString<
					'/Script/TemplateSequence.CameraAnimationSequence',
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_01_CameraAnimSequence.MedkitUse_01_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_02_CameraAnimSequence.MedkitUse_02_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_03_CameraAnimSequence.MedkitUse_03_CameraAnimSequence'
				>;
			},
		];
		mCurrentAnimData?: empty_object__type;
		mEquipmentSlot: 'ES_ARMS' | 'ES_BACK' | 'ES_BODY' | 'ES_HEAD' | 'ES_LEGS';
		mAttachSocket: Exclude<string, ''>;
		mNeedsDefaultEquipmentMappingContext: boolean__type;
		mCostToUse: '' | ItemClass__type;
		mArmAnimation:
			| 'AE_ShockShank'
			| 'AE_StunSpear'
			| 'AE_Generic2Hand'
			| 'AE_Generic1Hand'
			| 'AE_None'
			| 'AE_ChainSaw'
			| 'AE_RebarGun'
			| 'AE_Rifle'
			| 'AE_Nobelisk';
		mBackAnimation: 'BE_None' | 'BE_Jetpack';
		mDefaultEquipmentActions: integer_string__type;
		mReceivedDamageModifiers: '';
		mSwappedOutThirdPersonMaterials: empty_object__type;
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

export type common_base__FGSchematic__base__type = class__type & {
	FullName: StringPassedRegExp<'^BlueprintGeneratedClass /Game/FactoryGame/(Schematics|Events/Christmas)/'>;
	mType: Exclude<string, ''>;
	mSubCategories:
		| ''
		| [None__type, ...None__type[]]
		| [
				UnrealEngineString<
					'/Script/Engine.BlueprintGeneratedClass',
					StringStartsWith<'/Game/FactoryGame/Schematics/'>
				>,
				...UnrealEngineString<
					'/Script/Engine.BlueprintGeneratedClass',
					StringStartsWith<'/Game/FactoryGame/Schematics/'>
				>[],
		];
	mMenuPriority: decimal_string__signed__type;
	mTechTier: integer_string__type;
	mCost: '' | ItemClass__type;
	mTimeToComplete: decimal_string__type;
	mRelevantShopSchematics:
		| ''
		| [
				(
					| UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/Schematics/ResourceSink/'>
					>
					| None__type
				),
				...(
					| UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/Schematics/ResourceSink/'>
					>
					| None__type
				)[],
		];
	mIsPlayerSpecific: boolean__type;
	mUnlocks: [
		...{
			Class: Exclude<string, ''>;
		}[],
	];
	mSchematicIcon: {
		DrawAs: 'Image';
		ImageSize: xy__type;
		Margin: empty_object__type;
		TintColor: SpecifiedColor__type;
		OutlineSettings: {
			CornerRadii: quaternion__type;
			Color: SpecifiedColor__type;
			RoundingType: 'HalfHeightRadius';
		};
		ResourceObject?: Texture2D__type;
		UVRegion: {
			Min: xy__type;
			Max: xy__type;
			bIsValid: boolean__type;
		};
	};
	mSmallSchematicIcon: Texture2D__type;
	mSchematicDependencies: [
		...{
			Class: Exclude<string, ''>;
		}[],
	];
	mDependenciesBlocksSchematicAccess: boolean__type;
	mHiddenUntilDependenciesMet: boolean__type;
	mRelevantEvents: mEventType__optional_csv__type;
	mIncludeInBuilds: 'IIB_PublicBuilds';
};

export type common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type =
	{
		Class: 'BP_GamePhaseReachedDependency_C';
		mGamePhase: Exclude<string, ''>;
	};

export type common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type =
	{
		Class: StringPassedRegExp<'BP_[A-Z][A-z]+_C$'>;
		mSchematics: [
			FGSchematic__mUnlocks_mSchematics__mSchematics__type,
			...FGSchematic__mUnlocks_mSchematics__mSchematics__type[],
		];
		mRequireAllSchematicsToBePurchased: boolean__type;
	};

export type common_base__FGSchematic__mUnlocks__type =
	| FGSchematic__mUnlocks_mTapeUnlocks__type
	| FGSchematic__mUnlocks_mRecipes__type
	| FGSchematic__mUnlocks_resources_to_scan__type
	| FGSchematic__mUnlocks_mEmotes__type
	| FGSchematic__mUnlocks_mSchematics__type
	| FGSchematic__mUnlocks_inventory_slots__type
	| FGSchematic__mUnlocks_equipment_slots__type
	| FGSchematic__mUnlocks_mScannableObjects__type
	| FGSchematic__mUnlocks_mItemsToGive__type;

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

export type faux_9__type = class__type & {
	faux: 'FGItemDescriptor--FGResourceDescriptor--FGPoleDescriptor--mSubCategories';
	mSubCategories: common_base__FGItemDescriptor__FGResourceDescriptor__FGPoleDescriptor__mSubCategories__type;
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

export type mEventType__type = 'EV_Christmas';

export type mEventType__optional_csv__type =
	| ''
	| [mEventType__type, ...mEventType__type[]];

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
