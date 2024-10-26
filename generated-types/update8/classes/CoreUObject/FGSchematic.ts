import {StringPassedRegExp} from '../../utils/validators';

import {FGSchematic__mUnlocks_mSchematics__mSchematics__type} from '../../../common/classes/CoreUObject/FGSchematic';

import {boolean__type} from '../../../common/common/scalar';

import {
	common_base__FGSchematic__mUnlocks__type,
	common_base__FGSchematic__base__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

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
						mGamePhase: 'EGP_FoodCourt';
				}
			)[],
		];
	};

export type FGSchematic__mUnlocks_Class__type = {
	Class:
		| 'BP_UnlockInfoOnly_C'
		| 'BP_UnlockCheckmark_C'
		| 'BP_UnlockCustomizer_C'
		| 'BP_UnlockMap_C'
		| 'BP_UnlockBuildEfficiency_C'
		| 'BP_UnlockBuildOverclock_C';
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
