import type {
	v1_0_base__FGBuildable__consumes_power_base__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	integer_string__type
} from '../../../common/common/scalar.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePipeHyperJunction__type
	= FGBuildablePipeHyperJunction__merged__type & {
		JunctionPaths: '',
		DefaultPaths: '',
		mBuiltWithPipelineCostMultiplier: integer_string__type,
	};

export type FGBuildablePipeHyperJunction__merged__type
	= v1_0_base__FGBuildable__consumes_power_base__type & FGBuildable__base__type;

export type FGBuildablePipeHyperJunction__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildablePipeHyperJunction__type,
			FGBuildablePipeHyperJunction__type,
		],
	};
