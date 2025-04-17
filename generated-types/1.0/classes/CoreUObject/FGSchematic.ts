import {mStatisticGameplayTag__type} from '../../common/unassigned';

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

export type FGSchematic__type = FGSchematic__base__properties__type & {
	mStatisticGameplayTag:
		| empty_object__type
		| mStatisticGameplayTag__type;
};

export type FGSchematic__base__properties__type =
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
	common_base__FGSchematic__with_unlocks__type &
		FGSchematic__type;

export type FGSchematic__NativeClass = NativeClass__type & {
	Classes: [
		FGSchematic__type | FGSchematic__with_unlocks__type,
		...(FGSchematic__type | FGSchematic__with_unlocks__type)[],
	];
};
