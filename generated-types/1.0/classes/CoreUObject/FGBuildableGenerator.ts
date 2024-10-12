import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

export type FGBuildableGenerator__base__type =
	FGBuildable__consumes_power_base__type & {
		mPowerProduction: decimal_string__type;
		mLoadPercentage: decimal_string__type;
	};
