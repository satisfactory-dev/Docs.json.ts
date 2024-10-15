import {
	UnrealEngineString,
	StringStartsWith,
	StringPassedRegExp,
} from '../../utils/validators';

import {
	ItemClass__type,
	SpecifiedColor__type,
	mEventType__optional_csv__type,
} from '../../common/unassigned';

import {
	integer_string__type,
	decimal_string__type,
	boolean__type,
	decimal_string__signed__type,
} from '../../../common/common/scalar';

import {
	UnrealEngineString__array__type,
	quaternion__type,
	xy__type,
	empty_object__type,
	Texture2D__type,
	None__type,
	class__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGSchematic__type = FGSchematic__base__type;

export type FGSchematic__base__type = class__type & {
	FullName: StringPassedRegExp<'^BlueprintGeneratedClass /Game/FactoryGame/(Schematics|Events/Christmas)/'>;
	mType:
		| 'EST_Custom'
		| 'EST_Customization'
		| 'EST_ResourceSink'
		| 'EST_Milestone'
		| 'EST_Alternate'
		| 'EST_MAM'
		| 'EST_HardDrive'
		| 'EST_Tutorial';
	mStatisticGameplayTag:
		| empty_object__type
		| {
				TagName:
					| 'Stats.Gameplay.Schematics.Schematic2-5'
					| 'Stats.Gameplay.Schematics.Schematic3-1'
					| 'Stats.Gameplay.Schematics.Schematic9-2'
					| 'Stats.Gameplay.Schematics.Schematic9-1'
					| 'Stats.Gameplay.Schematics.Schematic5-1'
					| 'Stats.Gameplay.Schematics.Schematic3-4'
					| 'Stats.Gameplay.Schematics.Schematic5-4'
					| 'Stats.Gameplay.Schematics.Schematic7-1'
					| 'Stats.Gameplay.Schematics.Schematic4-1'
					| 'Stats.Gameplay.Schematics.Schematic5-2'
					| 'Stats.Gameplay.Schematics.Schematic2-1'
					| 'Stats.Gameplay.Schematics.Schematic8-5'
					| 'Stats.Gameplay.Schematics.Schematic7-5'
					| 'Stats.Gameplay.Schematics.Schematic8-1'
					| 'Stats.Gameplay.Schematics.Schematic8-2'
					| 'Stats.Gameplay.Schematics.Schematic7-4'
					| 'Stats.Gameplay.Schematics.Schematic7-2'
					| 'Stats.Gameplay.Schematics.Schematic8-4'
					| 'Stats.Gameplay.Schematics.Schematic9-5'
					| 'Stats.Gameplay.Schematics.Schematic9-4'
					| 'Stats.Gameplay.Schematics.Schematic9-3'
					| 'Stats.Gameplay.Schematics.Schematic8-3'
					| 'Stats.Gameplay.Schematics.Schematic7-3'
					| 'Stats.Gameplay.Schematics.Schematic6-7'
					| 'Stats.Gameplay.Schematics.Schematic6-6'
					| 'Stats.Gameplay.Schematics.Schematic6-5'
					| 'Stats.Gameplay.Schematics.Schematic6-3'
					| 'Stats.Gameplay.Schematics.Schematic6-2'
					| 'Stats.Gameplay.Schematics.Schematic6-1'
					| 'Stats.Gameplay.Schematics.Schematic5-5'
					| 'Stats.Gameplay.Schematics.Schematic5-3'
					| 'Stats.Gameplay.Schematics.Schematic4-5'
					| 'Stats.Gameplay.Schematics.Schematic4-4'
					| 'Stats.Gameplay.Schematics.Schematic4-3'
					| 'Stats.Gameplay.Schematics.Schematic4-2'
					| 'Stats.Gameplay.Schematics.Schematic3-3'
					| 'Stats.Gameplay.Schematics.Schematic3-2'
					| 'Stats.Gameplay.Schematics.Schematic2-3'
					| 'Stats.Gameplay.Schematics.Schematic2-2'
					| 'Stats.Gameplay.Schematics.Schematic1-3'
					| 'Stats.Gameplay.Schematics.Schematic1-2'
					| 'Stats.Gameplay.Schematics.Schematic1-1';
		};
	mSchematicUnlockTag:
		| empty_object__type
		| {
				TagName: 'Stats.Gameplay.UnlockedGoldenNut';
		};
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
		...(
			| FGSchematic__mUnlocks_Class__type
			| FGSchematic__mUnlocks_mTapeUnlocks__type
			| FGSchematic__mUnlocks_mRecipes__type
			| FGSchematic__mUnlocks_resources_to_scan__type
			| FGSchematic__mUnlocks_mEmotes__type
			| FGSchematic__mUnlocks_mSchematics__type
			| FGSchematic__mUnlocks_inventory_slots__type
			| FGSchematic__mUnlocks_equipment_slots__type
			| FGSchematic__mUnlocks_mScannableObjects__type
			| FGSchematic__mUnlocks_mItemsToGive__type
			| FGSchematic__mUnlocks_mCustomizationUnlocks__type
			| FGSchematic__mUploadSpeedPercentageDecrease__type
			| FGSchematic__mItemStackLimitIncrease__type
			| FGSchematic__mNumSlotsToUnlock__type
		)[],
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
		...(
			| {
					Class: StringPassedRegExp<'BP_[A-Z][A-z]+_C$'>;
					mSchematics: [
						FGSchematic__mUnlocks_mSchematics__mSchematics__type,
						...FGSchematic__mUnlocks_mSchematics__mSchematics__type[],
					];
					mRequireAllSchematicsToBePurchased: boolean__type;
			}
			| {
					Class: 'BP_GamePhaseReachedDependency_C';
					mGamePhase: 'EGP_Victory';
					mOnlyAllowInSelectedPhase: boolean__type;
			}
		)[],
	];
	mDependenciesBlocksSchematicAccess: boolean__type;
	mHiddenUntilDependenciesMet: boolean__type;
	mRelevantEvents: mEventType__optional_csv__type;
	mIncludeInBuilds: 'IIB_PublicBuilds';
};

export type FGSchematic__mItemStackLimitIncrease__type = {
	Class: 'BP_UnlockCentralStorageItemLimit_C';
	mItemStackLimitIncrease: integer_string__type;
};

export type FGSchematic__mNumSlotsToUnlock__type = {
	Class: 'BP_UnlockCentralStorageUploadSlots_C';
	mNumSlotsToUnlock: integer_string__type;
};

export type FGSchematic__mUnlocks_Class__type = {
	Class:
		| 'BP_UnlockInfoOnly_C'
		| 'BP_UnlockCheckmark_C'
		| 'BP_UnlockCustomizer_C'
		| 'BP_UnlockMap_C'
		| 'BP_UnlockBuildEfficiency_C'
		| 'BP_UnlockBuildOverclock_C'
		| 'BP_UnlockBuildProductionBoost_C';
};

export type FGSchematic__mUnlocks_equipment_slots__type = {
	Class: 'BP_UnlockArmEquipmentSlot_C';
	mNumArmEquipmentSlotsToUnlock: integer_string__type;
};

export type FGSchematic__mUnlocks_inventory_slots__type = {
	Class: 'BP_UnlockInventorySlot_C';
	mNumInventorySlotsToUnlock: integer_string__type;
};

export type FGSchematic__mUnlocks_mCustomizationUnlocks__type = {
	Class: 'FGUnlockCustomization';
	mCustomizationUnlocks: UnrealEngineString__array__type;
};

export type FGSchematic__mUnlocks_mEmotes__type = {
	Class: 'BP_UnlockEmote_C';
	mEmotes: UnrealEngineString__array__type;
};

export type FGSchematic__mUnlocks_mItemsToGive__type = {
	Class: 'BP_UnlockGiveItem_C';
	mItemsToGive: ItemClass__type;
};

export type FGSchematic__mUnlocks_mRecipes__type = {
	Class: 'BP_UnlockRecipe_C' | 'BP_UnlockBlueprints_C';
	mRecipes: UnrealEngineString__array__type;
};

export type FGSchematic__mUnlocks_mScannableObjects__type = {
	Class: 'BP_UnlockScannableObject_C';
	mScannableObjects: [
		{
			ItemDescriptor: UnrealEngineString;
			ActorsAllowedToScan: [
				UnrealEngineString<'/Script/CoreUObject.Class'>,
				...UnrealEngineString<'/Script/CoreUObject.Class'>[],
			];
		},
		...{
			ItemDescriptor: UnrealEngineString;
			ActorsAllowedToScan: [
				UnrealEngineString<'/Script/CoreUObject.Class'>,
				...UnrealEngineString<'/Script/CoreUObject.Class'>[],
			];
		}[],
	];
};

export type FGSchematic__mUnlocks_mSchematics__type = {
	Class: 'BP_UnlockSchematic_C';
	mSchematics: [
		FGSchematic__mUnlocks_mSchematics__mSchematics__type,
		...FGSchematic__mUnlocks_mSchematics__mSchematics__type[],
	];
};

export type FGSchematic__mUnlocks_mSchematics__mSchematics__type =
	UnrealEngineString<
		'/Script/Engine.BlueprintGeneratedClass',
		StringStartsWith<
			'/Game/FactoryGame/Schematics/' | '/Game/FactoryGame/Events/Christmas/'
		>
	>;

export type FGSchematic__mUnlocks_mTapeUnlocks__type = {
	Class: 'FGUnlockTape';
	mTapeUnlocks: [
		UnrealEngineString<
			'/Script/Engine.BlueprintGeneratedClass',
			StringStartsWith<'/Game/FactoryGame/Resource/Tape/'>
		>,
		...UnrealEngineString<
			'/Script/Engine.BlueprintGeneratedClass',
			StringStartsWith<'/Game/FactoryGame/Resource/Tape/'>
		>[],
	];
};

export type FGSchematic__mUnlocks_resources_to_scan__type = {
	Class: 'BP_UnlockScannableResource_C';
	mResourcesToAddToScanner:
		| ''
		| [
				UnrealEngineString<
					'/Script/Engine.BlueprintGeneratedClass',
					StringStartsWith<'/Game/FactoryGame/Resource/'>
				>,
				...UnrealEngineString<
					'/Script/Engine.BlueprintGeneratedClass',
					StringStartsWith<'/Game/FactoryGame/Resource/'>
				>[],
		];
	mResourcePairsToAddToScanner: [
		{
			ResourceDescriptor: UnrealEngineString;
			ResourceNodeType?: 'FrackingCore' | 'Geyser';
		},
		...{
			ResourceDescriptor: UnrealEngineString;
			ResourceNodeType?: 'FrackingCore' | 'Geyser';
		}[],
	];
};

export type FGSchematic__mUploadSpeedPercentageDecrease__type = {
	Class: 'BP_UnlockCentralStorageUploadSpeed_C';
	mUploadSpeedPercentageDecrease: decimal_string__type;
};

export type FGSchematic__with_unlocks__type = FGSchematic__base__type & {
	mUnlockName: Exclude<string, ''>;
	mUnlockDescription: string;
	mUnlockIconBig: 'Unsupported texture. Contact developer for support';
	mUnlockIconSmall: 'Unsupported texture. Contact developer for support';
	mUnlockIconCategory: 'Unsupported texture. Contact developer for support';
};

export type FGSchematic__NativeClass = NativeClass__type & {
	Classes: [
		FGSchematic__type | FGSchematic__with_unlocks__type,
		...(FGSchematic__type | FGSchematic__with_unlocks__type)[],
	];
};
