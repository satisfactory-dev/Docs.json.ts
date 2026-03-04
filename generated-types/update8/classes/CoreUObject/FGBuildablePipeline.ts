import {FGBuildable__base__type} from './FGBuildable.js';

import {common_base__FGBuildablePipeline__type} from '../../../common/classes/CoreUObject/FGBuildablePipeline.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildablePipeline__type =
	common_base__FGBuildablePipeline__type &
		FGBuildable__base__type;

export type FGBuildablePipeline__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeline__type, ...FGBuildablePipeline__type[]];
	};
