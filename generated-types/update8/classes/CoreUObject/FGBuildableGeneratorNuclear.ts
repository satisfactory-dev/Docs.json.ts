import {mOutputInventoryHandlerData__type} from '../../common/unassigned';

import {FGBuildableGeneratorFuel__base__type} from './FGBuildableGeneratorFuel';

import {
	common_base__FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type,
	common_base__FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type,
	common_base__FGBuildableGeneratorNuclear__type,
} from '../../../common/classes/CoreUObject/FGBuildableGeneratorNuclear';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableGeneratorNuclear__type =
	FGBuildableGeneratorNuclear__merged__type & {
		mOutputInventoryHandlerData: mOutputInventoryHandlerData__type;
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
			common_base__FGBuildableGeneratorNuclear__mFuel__NuclearFuelRod__type,
			common_base__FGBuildableGeneratorNuclear__mFuel__PlutoniumFuelRod__type,
		];
		mFuelResourceForm: 'RF_SOLID';
	};

export type FGBuildableGeneratorNuclear__merged__type =
	common_base__FGBuildableGeneratorNuclear__type &
		FGBuildableGeneratorFuel__base__type;

export type FGBuildableGeneratorNuclear__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableGeneratorNuclear__type];
	};
