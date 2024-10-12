import {mOutputInventoryHandlerData__type} from '../../common/unassigned';

import {FGBuildableGeneratorFuel__base__type} from './FGBuildableGeneratorFuel';

import {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableGeneratorNuclear__type =
	FGBuildableGeneratorFuel__base__type & {
		mOutputInventoryHandlerData: mOutputInventoryHandlerData__type;
		mWasteLeftFromCurrentFuel: integer_string__type;
		mCurrentGeneratorNuclearWarning: 'GNW_None';
		mDefaultFuelClasses: [
			(
				| '/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C'
				| '/Game/FactoryGame/Resource/Parts/PlutoniumFuelRods/Desc_PlutoniumFuelRod.Desc_PlutoniumFuelRod_C'
			),
			...(
				| '/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C'
				| '/Game/FactoryGame/Resource/Parts/PlutoniumFuelRods/Desc_PlutoniumFuelRod.Desc_PlutoniumFuelRod_C'
			)[],
		];
		mFuel: [
			(
				| {
						mFuelClass: 'Desc_NuclearFuelRod_C';
						mSupplementalResourceClass: 'Desc_Water_C';
						mByproduct: 'Desc_NuclearWaste_C';
						mByproductAmount: integer_string__type;
				}
				| {
						mFuelClass: 'Desc_PlutoniumFuelRod_C';
						mSupplementalResourceClass: 'Desc_Water_C';
						mByproduct: 'Desc_PlutoniumWaste_C';
						mByproductAmount: integer_string__type;
				}
			),
			...(
				| {
						mFuelClass: 'Desc_NuclearFuelRod_C';
						mSupplementalResourceClass: 'Desc_Water_C';
						mByproduct: 'Desc_NuclearWaste_C';
						mByproductAmount: integer_string__type;
				}
				| {
						mFuelClass: 'Desc_PlutoniumFuelRod_C';
						mSupplementalResourceClass: 'Desc_Water_C';
						mByproduct: 'Desc_PlutoniumWaste_C';
						mByproductAmount: integer_string__type;
				}
			)[],
		];
		mFuelResourceForm: 'RF_SOLID';
		mCachedLoadPercentage: decimal_string__type;
	};

export type FGBuildableGeneratorNuclear__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableGeneratorNuclear__type];
	};
