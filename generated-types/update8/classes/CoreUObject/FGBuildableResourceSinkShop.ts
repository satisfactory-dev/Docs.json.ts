import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {common_base__FGBuildableResourceSinkShop__type} from '../../../common/classes/CoreUObject/FGBuildableResourceSinkShop';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableResourceSinkShop__type =
	common_base__FGBuildableResourceSinkShop__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableResourceSinkShop__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableResourceSinkShop__type];
	};
