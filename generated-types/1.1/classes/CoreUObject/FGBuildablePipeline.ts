import {FGBuildable__base__type} from './FGBuildable';

import {v1_0_base__FGBuildablePipeline__properties__type} from '../../common/unassigned';

import {
	common_base__FGBuildablePipeline__pre_1_1__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildablePipeline__type =
	common_base__FGBuildablePipeline__pre_1_1__type &
		FGBuildable__base__type &
		v1_0_base__FGBuildablePipeline__properties__type;

export type FGBuildablePipeline__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeline__type, ...FGBuildablePipeline__type[]];
	};
