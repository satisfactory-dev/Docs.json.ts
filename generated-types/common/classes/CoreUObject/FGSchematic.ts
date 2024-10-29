import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {integer_string__type} from '../../common/scalar';

import {
	UnrealEngineString__array__type,
	ItemClass__type,
} from '../../common/unassigned';

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