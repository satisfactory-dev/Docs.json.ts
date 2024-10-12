import {boolean__type} from '../../common/scalar';

import {FGBuildableGenerator__base__type} from './FGBuildableGenerator';

import {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableGeneratorFuel__base__type =
	FGBuildableGenerator__base__type & {
		mFuelClasses: '';
		mFuelClassesInInventory: '';
		mAvailableFuelClasses: '';
		mFuelLoadAmount: integer_string__type;
		mRequiresSupplementalResource: boolean__type;
		mSupplementalLoadAmount: integer_string__type;
		mSupplementalToPowerRatio: decimal_string__type;
		mIsFullBlast: boolean__type;
		mCachedInputConnections: '';
		mCachedPipeInputConnections: '';
	};

export type FGBuildableGeneratorFuel__biogen__type =
	FGBuildableGeneratorFuel__base__type & {
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
		mCachedLoadPercentage: decimal_string__type;
	};

export type FGBuildableGeneratorFuel__liquid__type =
	FGBuildableGeneratorFuel__base__type & {
		m_SFXSockets: [
			'AudioSocket_Exhaust' | 'AudioSocket_Root',
			...('AudioSocket_Exhaust' | 'AudioSocket_Root')[],
		];
		m_CurrentPotential: integer_string__type;
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
		mFuel?: [
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
		mRTPCInterval: decimal_string__type;
		mCachedLoadPercentage: decimal_string__type;
	};

export type FGBuildableGeneratorFuel__solid__type =
	FGBuildableGeneratorFuel__base__type & {
		m_SFXSockets: [
			'AudioSocketTurbine' | 'CoalGeneratorPotential',
			...('AudioSocketTurbine' | 'CoalGeneratorPotential')[],
		];
		m_CurrentPotential: integer_string__type;
		mDefaultFuelClasses: [
			(
				| '/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C'
				| '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C'
				| '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C'
			),
			...(
				| '/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C'
				| '/Game/FactoryGame/Resource/Parts/CompactedCoal/Desc_CompactedCoal.Desc_CompactedCoal_C'
				| '/Game/FactoryGame/Resource/Parts/PetroleumCoke/Desc_PetroleumCoke.Desc_PetroleumCoke_C'
			)[],
		];
		mFuel: [
			{
				mFuelClass:
					| 'Desc_Coal_C'
					| 'Desc_CompactedCoal_C'
					| 'Desc_PetroleumCoke_C';
				mSupplementalResourceClass: 'Desc_Water_C';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass:
					| 'Desc_Coal_C'
					| 'Desc_CompactedCoal_C'
					| 'Desc_PetroleumCoke_C';
				mSupplementalResourceClass: 'Desc_Water_C';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
	};

export type FGBuildableGeneratorFuel__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableGeneratorFuel__solid__type,
			FGBuildableGeneratorFuel__liquid__type,
			FGBuildableGeneratorFuel__biogen__type,
		];
	};
