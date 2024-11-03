import {FGBuildable__pipeline_accessory__type} from './FGBuildable';

import {
	common_base__FGBuildablePipelineJunction__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildablePipelineJunction__type =
	FGBuildablePipelineJunction__merged__type;

export type FGBuildablePipelineJunction__merged__type =
	common_base__FGBuildablePipelineJunction__type &
		FGBuildable__pipeline_accessory__type;

export type FGBuildablePipelineJunction__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipelineJunction__type];
	};
