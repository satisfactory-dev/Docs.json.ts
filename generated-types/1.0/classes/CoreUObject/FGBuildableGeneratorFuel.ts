import {FGBuildableGenerator__base__type} from './FGBuildableGenerator';

import {
	common_base__FGBuildableGeneratorFuel__base__type,
	common_base__FGBuildableGeneratorFuel__biogen__type,
	common_base__FGBuildableGeneratorFuel__liquid__type,
	common_base__FGBuildableGeneratorFuel__solid__type,
} from '../../../common/classes/CoreUObject/FGBuildableGeneratorFuel';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableGeneratorFuel__base__type =
	FGBuildableGeneratorFuel__base__merged__type & {
		mFuelClassesInInventory: '';
	};

export type FGBuildableGeneratorFuel__base__merged__type =
	common_base__FGBuildableGeneratorFuel__base__type &
		FGBuildableGenerator__base__type;

export type FGBuildableGeneratorFuel__biogen__type =
	FGBuildableGeneratorFuel__biogen__merged__type & {
		mDefaultFuelClasses: [
			(
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Leaves.Desc_Leaves_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Wood.Desc_Wood_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Mycelia.Desc_Mycelia_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_GenericBiomass.Desc_GenericBiomass_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_Biofuel.Desc_Biofuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_PackagedBiofuel.Desc_PackagedBiofuel_C'
			),
			...(
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Leaves.Desc_Leaves_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Wood.Desc_Wood_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_Mycelia.Desc_Mycelia_C'
				| '/Game/FactoryGame/Resource/Parts/GenericBiomass/Desc_GenericBiomass.Desc_GenericBiomass_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_Biofuel.Desc_Biofuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_PackagedBiofuel.Desc_PackagedBiofuel_C'
			)[],
		];
		mFuel: [
			{
				mFuelClass:
					| 'Desc_Leaves_C'
					| 'Desc_Wood_C'
					| 'Desc_Mycelia_C'
					| 'Desc_GenericBiomass_C'
					| 'Desc_Biofuel_C'
					| 'Desc_PackagedBiofuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass:
					| 'Desc_Leaves_C'
					| 'Desc_Wood_C'
					| 'Desc_Mycelia_C'
					| 'Desc_GenericBiomass_C'
					| 'Desc_Biofuel_C'
					| 'Desc_PackagedBiofuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
	};

export type FGBuildableGeneratorFuel__biogen__merged__type =
	common_base__FGBuildableGeneratorFuel__biogen__type &
		FGBuildableGeneratorFuel__base__type;

export type FGBuildableGeneratorFuel__liquid__type =
	FGBuildableGeneratorFuel__liquid__merged__type & {
		mDefaultFuelClasses: [
			(
				| '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C'
				| '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C'
				| '/Game/FactoryGame/Resource/Parts/RocketFuel/Desc_RocketFuel.Desc_RocketFuel_C'
				| '/Game/FactoryGame/Resource/Parts/IonizedFuel/Desc_IonizedFuel.Desc_IonizedFuel_C'
			),
			...(
				| '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C'
				| '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C'
				| '/Game/FactoryGame/Resource/Parts/RocketFuel/Desc_RocketFuel.Desc_RocketFuel_C'
				| '/Game/FactoryGame/Resource/Parts/IonizedFuel/Desc_IonizedFuel.Desc_IonizedFuel_C'
			)[],
		];
		mFuel: [
			{
				mFuelClass:
					| 'Desc_LiquidFuel_C'
					| 'Desc_LiquidTurboFuel_C'
					| 'Desc_LiquidBiofuel_C'
					| 'Desc_RocketFuel_C'
					| 'Desc_IonizedFuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass:
					| 'Desc_LiquidFuel_C'
					| 'Desc_LiquidTurboFuel_C'
					| 'Desc_LiquidBiofuel_C'
					| 'Desc_RocketFuel_C'
					| 'Desc_IonizedFuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
	};

export type FGBuildableGeneratorFuel__liquid__merged__type =
	common_base__FGBuildableGeneratorFuel__liquid__type &
		FGBuildableGeneratorFuel__base__type;

export type FGBuildableGeneratorFuel__solid__type =
	common_base__FGBuildableGeneratorFuel__solid__type &
		FGBuildableGeneratorFuel__base__type;

export type FGBuildableGeneratorFuel__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableGeneratorFuel__solid__type,
			FGBuildableGeneratorFuel__liquid__type,
			FGBuildableGeneratorFuel__biogen__type,
		];
	};
