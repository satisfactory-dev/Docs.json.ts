import type {
	decimal_string__type
} from '../../common/scalar.js';

import type {
	UnrealEngineString__array__type
} from '../../common/unassigned.js';

import type {
	common_base__FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

export type common_base__FGBuildableRadarTower__type
	= common_base__FGBuildable__consumes_power_base__type & {
		mMapText: 'Radar Tower',
		mRevealRadius: decimal_string__type,
		mScannableDescriptors: UnrealEngineString__array__type,
	};
