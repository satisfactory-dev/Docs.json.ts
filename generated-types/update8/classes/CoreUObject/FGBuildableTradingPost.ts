import {FGBuildableTradingPost__update8__type} from '../../common/unassigned.ts';

import {FGBuildable__consumes_power_base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableTradingPost__type =
	FGBuildableTradingPost__update8__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableTradingPost__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableTradingPost__type];
	};
