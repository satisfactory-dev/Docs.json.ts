import {decimal_string__type} from '../../common/scalar.ts';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable.ts';

export type common_base__FGBuildableGenerator__base__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mPowerProduction: decimal_string__type;
		mLoadPercentage: decimal_string__type;
	};
