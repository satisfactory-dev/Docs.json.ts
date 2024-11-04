import {
	UnrealEngineString,
	StringStartsWith,
	StringPassedRegExp,
} from '../../utils/validators';

import {
	decimal_string__signed__type,
	integer_string__type,
	decimal_string__type,
	boolean__type,
} from '../../common/scalar';

import {
	ItemClass__type,
	class__type,
	UnrealEngineString__array__type,
	quaternion__type,
	SpecifiedColor__type,
	xy__type,
	empty_object__type,
	Texture2D__type,
	mEventType__optional_csv__type,
	None__type,
} from '../../common/unassigned';

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

export type common_base__FGSchematic__mUnlocks_Class__type = {
	Class: Exclude<string, ''>;
};

export type FGSchematic__mUnlocks_equipment_slots__type = {
	Class: 'BP_UnlockArmEquipmentSlot_C';
	mNumArmEquipmentSlotsToUnlock: integer_string__type;
};

export type FGSchematic__mUnlocks_inventory_slots__type = {
	Class: 'BP_UnlockInventorySlot_C';
	mNumInventorySlotsToUnlock: integer_string__type;
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
