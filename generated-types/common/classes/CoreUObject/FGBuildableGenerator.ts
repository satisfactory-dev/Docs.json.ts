import type {
	decimal_string__type
} from '../../common/scalar.js';

import type {
	common_base__FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

export type common_base__FGBuildableGenerator__base__type
	= common_base__FGBuildable__consumes_power_base__type & {
		mPowerProduction: decimal_string__type,
		mLoadPercentage: decimal_string__type,
	};
