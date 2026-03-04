import type {
	FGBuildable__pipeline_flow_accessory__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildablePipelinePump__type,
	common_base__FGBuildablePipelinePump__valve__type,
} from '../../../common/classes/CoreUObject/FGBuildablePipelinePump.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePipelinePump__type
	= common_base__FGBuildablePipelinePump__type
		& FGBuildable__pipeline_flow_accessory__type;

export type FGBuildablePipelinePump__valve__type
	= common_base__FGBuildablePipelinePump__valve__type
		& FGBuildable__pipeline_flow_accessory__type;

export type FGBuildablePipelinePump__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildablePipelinePump__valve__type | FGBuildablePipelinePump__type,
			FGBuildablePipelinePump__valve__type | FGBuildablePipelinePump__type,
			FGBuildablePipelinePump__valve__type | FGBuildablePipelinePump__type,
		],
	};
