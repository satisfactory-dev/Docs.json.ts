import {FGBuildableGenerator__base__type} from './FGBuildableGenerator';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	common_base__FGBuildableGeneratorFuel__base__type,
	common_base__FGBuildableGeneratorFuel__biogen__type,
	common_base__FGBuildableGeneratorFuel__liquid__type,
	common_base__FGBuildableGeneratorFuel__solid__type,
} from '../../../common/classes/CoreUObject/FGBuildableGeneratorFuel';

export type FGBuildableGeneratorFuel__base__type =
	FGBuildableGeneratorFuel__base__merged__type & {
		mFuelInventoryHandlerData: empty_object__type;
		mFuelResourceForm: 'RF_SOLID' | 'RF_LIQUID';
	};

export type FGBuildableGeneratorFuel__base__merged__type =
	common_base__FGBuildableGeneratorFuel__base__type &
		FGBuildableGenerator__base__type;

export type FGBuildableGeneratorFuel__biogen__type =
	FGBuildableGeneratorFuel__biogen__merged__type & {
		mDefaultFuelClasses: [
			'/Script/FactoryGame.FGItemDescriptorBiomass',
			...'/Script/FactoryGame.FGItemDescriptorBiomass'[],
		];
		mFuel: [
			{
				mFuelClass: 'FGItemDescriptorBiomass';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass: 'FGItemDescriptorBiomass';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
		mFuelResourceForm: 'RF_SOLID';
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
			),
			...(
				| '/Game/FactoryGame/Resource/Parts/Fuel/Desc_LiquidFuel.Desc_LiquidFuel_C'
				| '/Game/FactoryGame/Resource/Parts/Turbofuel/Desc_LiquidTurboFuel.Desc_LiquidTurboFuel_C'
				| '/Game/FactoryGame/Resource/Parts/BioFuel/Desc_LiquidBiofuel.Desc_LiquidBiofuel_C'
			)[],
		];
		mFuel: [
			{
				mFuelClass:
					| 'Desc_LiquidFuel_C'
					| 'Desc_LiquidTurboFuel_C'
					| 'Desc_LiquidBiofuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass:
					| 'Desc_LiquidFuel_C'
					| 'Desc_LiquidTurboFuel_C'
					| 'Desc_LiquidBiofuel_C';
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
		mFuelResourceForm: 'RF_LIQUID';
	};

export type FGBuildableGeneratorFuel__liquid__merged__type =
	common_base__FGBuildableGeneratorFuel__liquid__type &
		FGBuildableGeneratorFuel__base__type;

export type FGBuildableGeneratorFuel__solid__type =
	FGBuildableGeneratorFuel__solid__merged__type & {
		mFuelResourceForm: 'RF_SOLID';
	};

export type FGBuildableGeneratorFuel__solid__merged__type =
	common_base__FGBuildableGeneratorFuel__solid__type &
		FGBuildableGeneratorFuel__base__type;

export type FGBuildableGeneratorFuel__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| FGBuildableGeneratorFuel__solid__type
				| FGBuildableGeneratorFuel__liquid__type
				| FGBuildableGeneratorFuel__biogen__type
			),
			(
				| FGBuildableGeneratorFuel__solid__type
				| FGBuildableGeneratorFuel__liquid__type
				| FGBuildableGeneratorFuel__biogen__type
			),
			(
				| FGBuildableGeneratorFuel__solid__type
				| FGBuildableGeneratorFuel__liquid__type
				| FGBuildableGeneratorFuel__biogen__type
			),
		];
	};
