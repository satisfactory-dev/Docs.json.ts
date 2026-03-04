import type {
	v1_0_base__FGBuildableResourceSink__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableResourceSink__type
	= v1_0_base__FGBuildableResourceSink__type & FGBuildable__base__type;

export type FGBuildableResourceSink__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableResourceSink__type],
	};
