import {decimal_string__type, integer_string__type} from '../../common/scalar';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable';

export type common_base__FGBuildableStorage__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mStackingHeight: decimal_string__type;
		mInventorySizeX: integer_string__type;
		mInventorySizeY: integer_string__type;
	};
