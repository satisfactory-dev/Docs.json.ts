import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildablePowerBooster__type =
	FGBuildable__consumes_power_base__type & {
		IsInProducingAnimState: boolean__type;
		LaserSocketNames: [
			(
				| 'LeftArmLaser01_Vfx_Socket'
				| 'LeftArmLaser02_Vfx_Socket'
				| 'RightArmLaser01_Vfx_Socket'
				| 'RightArmLaser02_Vfx_Socket'
			),
			...(
				| 'LeftArmLaser01_Vfx_Socket'
				| 'LeftArmLaser02_Vfx_Socket'
				| 'RightArmLaser01_Vfx_Socket'
				| 'RightArmLaser02_Vfx_Socket'
			)[],
		];
		mVFX_LaserSubtract: decimal_string__type;
		mVFX_SummerSloop_Loc_Offset: xyz__type;
		mVFX_SubVector: xyz__type;
		m_Beam_TargetLoc: xyz__type;
		mShrine_location: xyz__type;
		bFirstRun: boolean__type;
		mBasePowerProduction: decimal_string__type;
		mBaseBoostPercentage: decimal_string__type;
		mCurrentFuelBoostPercentage: decimal_string__type;
		mDefaultFuelClasses: [
			'/Game/FactoryGame/Resource/Parts/AlienPowerFuel/Desc_AlienPowerFuel.Desc_AlienPowerFuel_C',
			...'/Game/FactoryGame/Resource/Parts/AlienPowerFuel/Desc_AlienPowerFuel.Desc_AlienPowerFuel_C'[],
		];
		mAvailableFuelClasses: '';
		mCachedInputConnections: '';
		mCurrentFuelDuration: decimal_string__type;
		mCurrentFuelDurationLeft: decimal_string__type;
	};

export type FGBuildablePowerBooster__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildablePowerBooster__type,
			...FGBuildablePowerBooster__type[],
		];
	};
