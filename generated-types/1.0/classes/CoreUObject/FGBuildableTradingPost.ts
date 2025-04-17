import {FGBuildableTradingPost__version_1__type} from '../../common/unassigned';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableTradingPost__type =
	FGBuildableTradingPost__version_1__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableTradingPost__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableTradingPost__type];
	};
