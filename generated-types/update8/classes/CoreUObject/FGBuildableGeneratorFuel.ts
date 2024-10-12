import {empty_object__type} from '../../common/unassigned';

import {integer_string__type, boolean__type} from '../../common/scalar';

import {FGBuildableGenerator__base__type} from './FGBuildableGenerator';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableGeneratorFuel__base__type =
	FGBuildableGenerator__base__type & {
		mFuelInventoryHandlerData: empty_object__type;
		mFuelClasses: '';
		mAvailableFuelClasses: '';
		mFuelResourceForm?: 'RF_SOLID' | 'RF_LIQUID';
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
		mFuelResourceForm: 'RF_SOLID';
	};

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
