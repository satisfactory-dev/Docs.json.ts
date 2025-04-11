import {FGBuildable__pipeline_flow_accessory__type} from './FGBuildable';

import {
	common_base__FGBuildablePipelinePump__type,
	common_base__FGBuildablePipelinePump__valve__type,
} from '../../../common/classes/CoreUObject/FGBuildablePipelinePump';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipelinePump__type =
	FGBuildablePipelinePump__merged__type;

export type FGBuildablePipelinePump__merged__type =
	common_base__FGBuildablePipelinePump__type &
		FGBuildable__pipeline_flow_accessory__type;

export type FGBuildablePipelinePump__valve__type =
	FGBuildablePipelinePump__valve__merged__type;

export type FGBuildablePipelinePump__valve__merged__type =
	common_base__FGBuildablePipelinePump__valve__type &
		FGBuildable__pipeline_flow_accessory__type;

export type FGBuildablePipelinePump__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildablePipelinePump__type,
			FGBuildablePipelinePump__type,
			FGBuildablePipelinePump__valve__type,
		];
	};
