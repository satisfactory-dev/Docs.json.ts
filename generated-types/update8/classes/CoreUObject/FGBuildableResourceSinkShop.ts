import type {
	FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableResourceSinkShop__type
} from '../../../common/classes/CoreUObject/FGBuildableResourceSinkShop.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableResourceSinkShop__type
	= common_base__FGBuildableResourceSinkShop__type
		& FGBuildable__consumes_power_base__type;

export type FGBuildableResourceSinkShop__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableResourceSinkShop__type],
	};
