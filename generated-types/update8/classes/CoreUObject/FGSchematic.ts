import {
	common_base__FGSchematic__mUnlocks__type,
	common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type,
	common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type,
	common_base__FGSchematic__base__type,
	common_base__FGSchematic__mUnlocks_Class__type,
	common_base__FGSchematic__with_unlocks__type,
} from '../../../common/classes/CoreUObject/FGSchematic';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGSchematic__type = FGSchematic__base__type;

export type FGSchematic__base__type =
	common_base__FGSchematic__base__type & {
		mType:
			| 'EST_Custom'
			| 'EST_ResourceSink'
			| 'EST_Milestone'
			| 'EST_Alternate'
			| 'EST_MAM'
			| 'EST_HardDrive'
			| 'EST_Tutorial';
		mUnlocks: [
			...(
				| FGSchematic__mUnlocks_Class__type
				| common_base__FGSchematic__mUnlocks__type
			)[],
		];
		mSchematicDependencies: [
			...(
				| common_base__FGSchematic__base__mSchematicDependencies__mRequireAllSchematicsToBePurchased__type
				| (common_base__FGSchematic__base__mSchematicDependencies__mGamePhase__type & {
						mGamePhase: 'EGP_FoodCourt';
				})
			)[],
		];
	};

export type FGSchematic__mUnlocks_Class__type =
	common_base__FGSchematic__mUnlocks_Class__type & {
		Class:
			| 'BP_UnlockInfoOnly_C'
			| 'BP_UnlockCheckmark_C'
			| 'BP_UnlockCustomizer_C'
			| 'BP_UnlockMap_C'
			| 'BP_UnlockBuildEfficiency_C'
			| 'BP_UnlockBuildOverclock_C';
	};

export type FGSchematic__with_unlocks__type =
	common_base__FGSchematic__with_unlocks__type &
		FGSchematic__base__type;

export type FGSchematic__NativeClass = NativeClass__type & {
	Classes: [
		FGSchematic__type | FGSchematic__with_unlocks__type,
		...(FGSchematic__type | FGSchematic__with_unlocks__type)[],
	];
};
