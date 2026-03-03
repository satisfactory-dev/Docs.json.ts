import {
	v1_0_base__FGBuildablePipelinePump__type,
	v1_0_base__FGBuildablePipelinePump__valve__type,
} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePipelinePump__type =
	v1_0_base__FGBuildablePipelinePump__type & FGBuildable__base__type;

export type FGBuildablePipelinePump__valve__type =
	v1_0_base__FGBuildablePipelinePump__valve__type & FGBuildable__base__type;

export type FGBuildablePipelinePump__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildablePipelinePump__type,
			FGBuildablePipelinePump__valve__type,
			FGBuildablePipelinePump__type,
		];
	};
