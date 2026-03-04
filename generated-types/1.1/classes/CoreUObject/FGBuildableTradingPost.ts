import {
	v1_0_base__FGBuildableTradingPost__version_1__type,
	v1_0_base__FGBuildable__consumes_power_base__type,
} from '../../common/unassigned.js';

import {FGBuildable__base__type} from './FGBuildable.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableTradingPost__type =
	v1_0_base__FGBuildableTradingPost__version_1__type &
		v1_0_base__FGBuildable__consumes_power_base__type &
		FGBuildable__base__type;

export type FGBuildableTradingPost__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableTradingPost__type];
	};
