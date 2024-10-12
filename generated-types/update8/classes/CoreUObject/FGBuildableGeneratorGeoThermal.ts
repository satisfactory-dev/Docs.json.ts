import {boolean__type, decimal_string__type} from '../../common/scalar';

import {FGBuildableGenerator__base__type} from './FGBuildableGenerator';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableGeneratorGeoThermal__type =
	FGBuildableGenerator__base__type & {
		mProductionEffectsRunning: boolean__type;
		mVariablePowerProductionConstant: decimal_string__type;
		mVariablePowerProductionFactor: decimal_string__type;
		mVariablePowerProductionCycleLength: decimal_string__type;
		mMinPowerProduction: decimal_string__type;
		mMaxPowerProduction: decimal_string__type;
		mVariablePowerProductionCycleOffset: decimal_string__type;
	};

export type FGBuildableGeneratorGeoThermal__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableGeneratorGeoThermal__type];
	};
