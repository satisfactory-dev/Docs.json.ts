import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	mEventType__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableFactorySimpleProducer__type =
	FGBuildable__consumes_power_base__type & {
		mTimeToProduceItem: decimal_string__type;
		mEventType: mEventType__type;
	};

export type FGBuildableFactorySimpleProducer__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableFactorySimpleProducer__type];
	};
