import {FGBuildable__pipeline_accessory__base__type} from './FGBuildable';

import {
	common_base__FGBuildablePipeReservoir__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildablePipeReservoir__type =
	FGBuildablePipeReservoir__merged__type;

export type FGBuildablePipeReservoir__merged__type =
	common_base__FGBuildablePipeReservoir__type &
		FGBuildable__pipeline_accessory__base__type;

export type FGBuildablePipeReservoir__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeReservoir__type, FGBuildablePipeReservoir__type];
	};
