import {
	v1_0_base__FGBuildableTradingPost__version_1__type,
	v1_0_base__FGBuildable__consumes_power_base__type,
} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableTradingPost__type =
	v1_0_base__FGBuildableTradingPost__version_1__type &
		v1_0_base__FGBuildable__consumes_power_base__type &
		FGBuildable__base__type;

export type FGBuildableTradingPost__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableTradingPost__type];
	};
