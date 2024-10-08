import {integer_string__type, decimal_string__type} from '../../common/scalar';

import {FGBuildableGeneratorFuel__base__type} from './FGBuildableGeneratorFuel';

import {NativeClass__type} from '../../common/unassigned';

export type FGBuildableGeneratorNuclear__type =
	FGBuildableGeneratorFuel__base__type & {
		mWasteLeftFromCurrentFuel: integer_string__type;
		mCurrentGeneratorNuclearWarning: 'GNW_None';
		mDefaultFuelClasses: [
			(
				| '/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C'
				| '/Game/FactoryGame/Resource/Parts/PlutoniumFuelRods/Desc_PlutoniumFuelRod.Desc_PlutoniumFuelRod_C'
				| '/Game/FactoryGame/Resource/Parts/FicsoniumFuelRod/Desc_FicsoniumFuelRod.Desc_FicsoniumFuelRod_C'
			),
			...(
				| '/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C'
				| '/Game/FactoryGame/Resource/Parts/PlutoniumFuelRods/Desc_PlutoniumFuelRod.Desc_PlutoniumFuelRod_C'
				| '/Game/FactoryGame/Resource/Parts/FicsoniumFuelRod/Desc_FicsoniumFuelRod.Desc_FicsoniumFuelRod_C'
			)[],
		];
		mFuel: [
			FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type,
			FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type,
			FGBuildableGeneratorNuclear__mFuel__FicsoniumFuelRod__type,
		];
		mCachedLoadPercentage: decimal_string__type;
	};

export type FGBuildableGeneratorNuclear__mFuel__FicsoniumFuelRod__type = {
	mFuelClass: 'Desc_FicsoniumFuelRod_C';
	mSupplementalResourceClass: 'Desc_Water_C';
	mByproduct: '';
	mByproductAmount: '';
};

export type FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type = {
	mFuelClass: 'Desc_NuclearFuelRod_C';
	mSupplementalResourceClass: 'Desc_Water_C';
	mByproduct: 'Desc_NuclearWaste_C';
	mByproductAmount: integer_string__type;
};

export type FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type = {
	mFuelClass: 'Desc_PlutoniumFuelRod_C';
	mSupplementalResourceClass: 'Desc_Water_C';
	mByproduct: 'Desc_PlutoniumWaste_C';
	mByproductAmount: integer_string__type;
};

export type FGBuildableGeneratorNuclear__NativeClass = NativeClass__type & {
	Classes: [FGBuildableGeneratorNuclear__type];
};
