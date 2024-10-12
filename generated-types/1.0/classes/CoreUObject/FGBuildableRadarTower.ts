import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	UnrealEngineString__array__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableRadarTower__type =
	FGBuildable__consumes_power_base__type & {
		mMapText: 'Radar Tower';
		mRevealRadius: decimal_string__type;
		mScannableDescriptors: UnrealEngineString__array__type;
	};

export type FGBuildableRadarTower__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableRadarTower__type];
	};
