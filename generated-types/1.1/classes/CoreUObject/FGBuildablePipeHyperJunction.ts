import {v1_0_base__FGBuildable__consumes_power_base__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {integer_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipeHyperJunction__type =
	FGBuildablePipeHyperJunction__merged__type & {
		JunctionPaths: '';
		DefaultPaths: '';
		mBuiltWithPipelineCostMultiplier: integer_string__type;
	};

export type FGBuildablePipeHyperJunction__merged__type =
	v1_0_base__FGBuildable__consumes_power_base__type & FGBuildable__base__type;

export type FGBuildablePipeHyperJunction__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildablePipeHyperJunction__type,
			FGBuildablePipeHyperJunction__type,
		];
	};
