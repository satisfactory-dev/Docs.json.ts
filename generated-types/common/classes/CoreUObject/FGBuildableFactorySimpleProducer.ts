import type {
	decimal_string__type
} from '../../common/scalar.js';

import type {
	mEventType__type
} from '../../common/unassigned.js';

import type {
	common_base__FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

export type common_base__FGBuildableFactorySimpleProducer__type
	= common_base__FGBuildable__consumes_power_base__type & {
		mTimeToProduceItem: decimal_string__type,
		mEventType: mEventType__type,
	};
