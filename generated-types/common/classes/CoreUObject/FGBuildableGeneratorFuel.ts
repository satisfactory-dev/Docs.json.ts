import {
	integer_string__type,
	boolean__type,
	decimal_string__type,
} from '../../common/scalar';

import {common_base__FGBuildableGenerator__base__type} from './FGBuildableGenerator';

export type common_base__FGBuildableGeneratorFuel__base__type =
	common_base__FGBuildableGenerator__base__type & {
		mFuelClasses: '';
		mAvailableFuelClasses: '';
		mFuelLoadAmount: integer_string__type;
		mRequiresSupplementalResource: boolean__type;
		mSupplementalLoadAmount: integer_string__type;
		mSupplementalToPowerRatio: decimal_string__type;
		mIsFullBlast: boolean__type;
		mCachedInputConnections: '';
		mCachedPipeInputConnections: '';
	};

export type common_base__FGBuildableGeneratorFuel__biogen__type =
	common_base__FGBuildableGeneratorFuel__base__type & {
		mFuel: [
			{
				mFuelClass: Exclude<string, ''>;
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass: Exclude<string, ''>;
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
		mCachedLoadPercentage: decimal_string__type;
	};

export type common_base__FGBuildableGeneratorFuel__liquid__type =
	common_base__FGBuildableGeneratorFuel__base__type & {
		m_SFXSockets: [
			'AudioSocket_Exhaust' | 'AudioSocket_Root',
			...('AudioSocket_Exhaust' | 'AudioSocket_Root')[],
		];
		m_CurrentPotential: integer_string__type;
		mFuel: [
			{
				mFuelClass: Exclude<string, ''>;
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			},
			...{
				mFuelClass: Exclude<string, ''>;
				mSupplementalResourceClass: '';
				mByproduct: '';
				mByproductAmount: '';
			}[],
		];
		mRTPCInterval: decimal_string__type;
		mCachedLoadPercentage: decimal_string__type;
	};

export type common_base__FGBuildableGeneratorFuel__solid__type =
	common_base__FGBuildableGeneratorFuel__base__type & {
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
