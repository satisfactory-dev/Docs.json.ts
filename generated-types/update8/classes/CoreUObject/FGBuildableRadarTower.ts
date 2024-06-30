import {decimal_string__type} from '../../common/scalar';

import {
	UnrealEngineString__array__type,
	NativeClass__type,
} from '../../common/unassigned';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

export type FGBuildableRadarTower__type =
	FGBuildable__consumes_power_base__type & {
		mMapText: 'Radar Tower';
		mRevealRadius: decimal_string__type;
		mScannableDescriptors: UnrealEngineString__array__type;
	};

export type FGBuildableRadarTower__NativeClass = NativeClass__type & {
	Classes: [FGBuildableRadarTower__type];
};
