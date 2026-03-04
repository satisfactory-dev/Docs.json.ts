import {FGBuildable__consumes_power_base__type} from './FGBuildable.js';

import {common_base__FGBuildableFactorySimpleProducer__type} from '../../../common/classes/CoreUObject/FGBuildableFactorySimpleProducer.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableFactorySimpleProducer__type =
	common_base__FGBuildableFactorySimpleProducer__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableFactorySimpleProducer__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableFactorySimpleProducer__type];
	};
