import {decimal_string__type} from '../../common/scalar.ts';

import {UnrealEngineString__array__type} from '../../common/unassigned.ts';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable.ts';

export type common_base__FGBuildableRadarTower__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mMapText: 'Radar Tower';
		mRevealRadius: decimal_string__type;
		mScannableDescriptors: UnrealEngineString__array__type;
	};
