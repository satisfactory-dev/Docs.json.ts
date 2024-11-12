import {integer_string__type, decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildableGeneratorFuel__base__type} from './FGBuildableGeneratorFuel';

export type common_base__FGBuildableGeneratorNuclear__type =
	common_base__FGBuildableGeneratorFuel__base__type & {
		mWasteLeftFromCurrentFuel: integer_string__type;
		mCurrentGeneratorNuclearWarning: 'GNW_None';
		mFuel: [
			common_base__FGBuildableGeneratorNuclear__mFuel__base__type,
			common_base__FGBuildableGeneratorNuclear__mFuel__base__type,
			...common_base__FGBuildableGeneratorNuclear__mFuel__base__type[],
		];
		mCachedLoadPercentage: decimal_string__type;
	};

export type common_base__FGBuildableGeneratorNuclear__mFuel__base__type = {
	mFuelClass: Exclude<string, ''>;
	mSupplementalResourceClass: 'Desc_Water_C';
	mByproduct: string;
	mByproductAmount: integer_string__type | '';
};

export type common_base__FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type =
	common_base__FGBuildableGeneratorNuclear__mFuel__base__type & {
		mFuelClass: 'Desc_NuclearFuelRod_C';
		mByproduct: 'Desc_NuclearWaste_C';
		mByproductAmount: integer_string__type;
	};

export type common_base__FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type =
	common_base__FGBuildableGeneratorNuclear__mFuel__base__type & {
		mFuelClass: 'Desc_PlutoniumFuelRod_C';
		mByproduct: 'Desc_PlutoniumWaste_C';
		mByproductAmount: integer_string__type;
	};
