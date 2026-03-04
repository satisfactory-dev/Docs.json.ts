import type {
	v1_0_base__FGBuildableFactorySimpleProducer__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableFactorySimpleProducer__type
	= v1_0_base__FGBuildableFactorySimpleProducer__type & FGBuildable__base__type;

export type FGBuildableFactorySimpleProducer__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableFactorySimpleProducer__type],
	};
