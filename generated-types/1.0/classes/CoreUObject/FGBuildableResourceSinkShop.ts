import {integer_string__type} from '../../common/scalar';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableResourceSinkShop__type =
	FGBuildable__consumes_power_base__type & {
		mShopInventoryDefaultSize: integer_string__type;
	};

export type FGBuildableResourceSinkShop__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableResourceSinkShop__type];
	};
