import type {
	integer_string__type
} from '../../common/scalar.js';

import type {
	common_base__FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

export type common_base__FGBuildableResourceSinkShop__type
	= common_base__FGBuildable__consumes_power_base__type & {
		mShopInventoryDefaultSize: integer_string__type,
	};
