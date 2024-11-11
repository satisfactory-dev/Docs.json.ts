import {boolean__type, decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildableGenerator__base__type} from './FGBuildableGenerator';

export type common_base__FGBuildableGeneratorGeoThermal__type =
	common_base__FGBuildableGenerator__base__type & {
		mProductionEffectsRunning: boolean__type;
		mVariablePowerProductionConstant: decimal_string__type;
		mVariablePowerProductionFactor: decimal_string__type;
		mVariablePowerProductionCycleLength: decimal_string__type;
		mMinPowerProduction: decimal_string__type;
		mMaxPowerProduction: decimal_string__type;
		mVariablePowerProductionCycleOffset: decimal_string__type;
	};
