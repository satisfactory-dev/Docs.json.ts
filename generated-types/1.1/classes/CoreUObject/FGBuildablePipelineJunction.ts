import {v1_0_base__FGBuildablePipelineJunction__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipelineJunction__type =
	FGBuildablePipelineJunction__merged__type;

export type FGBuildablePipelineJunction__merged__type =
	v1_0_base__FGBuildablePipelineJunction__type & FGBuildable__base__type;

export type FGBuildablePipelineJunction__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipelineJunction__type];
	};
