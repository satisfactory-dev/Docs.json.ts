import {
	integer_string__type,
	decimal_string__type,
	boolean__type,
} from '../../../common/common/scalar';

import {
	UnrealEngineString__array__type,
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	common_base__FGSchematic__mUnlocks__type,
	common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type,
	common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type,
	common_base__FGSchematic__base__type,
	common_base__FGSchematic__mUnlocks_Class__type,
	common_base__FGSchematic__with_unlocks__type,
} from '../../../common/classes/CoreUObject/FGSchematic';

export type FGSchematic__type = FGSchematic__base__type;

export type FGSchematic__base__type =
	common_base__FGSchematic__base__type & {
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
		mUnlocks: [
			...(
				| FGSchematic__mUnlocks_Class__type
				| common_base__FGSchematic__mUnlocks__type
				| FGSchematic__mUnlocks_mCustomizationUnlocks__type
				| FGSchematic__mUploadSpeedPercentageDecrease__type
				| FGSchematic__mItemStackLimitIncrease__type
				| FGSchematic__mNumSlotsToUnlock__type
			)[],
		];
		mSchematicDependencies: [
			...(
				| common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type
				| (common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type & {
						mGamePhase: 'EGP_Victory';
						mOnlyAllowInSelectedPhase: boolean__type;
				})
			)[],
		];
	};

export type FGSchematic__mItemStackLimitIncrease__type = {
	Class: 'BP_UnlockCentralStorageItemLimit_C';
	mItemStackLimitIncrease: integer_string__type;
};

export type FGSchematic__mNumSlotsToUnlock__type = {
	Class: 'BP_UnlockCentralStorageUploadSlots_C';
	mNumSlotsToUnlock: integer_string__type;
};

export type FGSchematic__mUnlocks_Class__type =
	common_base__FGSchematic__mUnlocks_Class__type & {
		Class:
			| 'BP_UnlockInfoOnly_C'
			| 'BP_UnlockCheckmark_C'
			| 'BP_UnlockCustomizer_C'
			| 'BP_UnlockMap_C'
			| 'BP_UnlockBuildEfficiency_C'
			| 'BP_UnlockBuildOverclock_C'
			| 'BP_UnlockBuildProductionBoost_C';
	};

export type FGSchematic__mUnlocks_mCustomizationUnlocks__type = {
	Class: 'FGUnlockCustomization';
	mCustomizationUnlocks: UnrealEngineString__array__type;
};

export type FGSchematic__mUploadSpeedPercentageDecrease__type = {
	Class: 'BP_UnlockCentralStorageUploadSpeed_C';
	mUploadSpeedPercentageDecrease: decimal_string__type;
};

export type FGSchematic__with_unlocks__type =
	FGSchematic__with_unlocks__merged__type;

export type FGSchematic__with_unlocks__merged__type =
	common_base__FGSchematic__with_unlocks__type &
		FGSchematic__base__type;

export type FGSchematic__NativeClass = NativeClass__type & {
	Classes: [
		FGSchematic__type | FGSchematic__with_unlocks__type,
		...(FGSchematic__type | FGSchematic__with_unlocks__type)[],
	];
};
