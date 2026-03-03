import {decimal_string__type} from '../../common/scalar.ts';

import {mEventType__type} from '../../common/unassigned.ts';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable.ts';

export type common_base__FGBuildableFactorySimpleProducer__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mTimeToProduceItem: decimal_string__type;
		mEventType: mEventType__type;
	};
