import {FGBuildable__pipeline_accessory__base__type} from './FGBuildable';

import {common_base__FGBuildablePipeReservoir__type} from '../../../common/classes/CoreUObject/FGBuildablePipeReservoir';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipeReservoir__type =
	common_base__FGBuildablePipeReservoir__type &
		FGBuildable__pipeline_accessory__base__type;

export type FGBuildablePipeReservoir__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeReservoir__type, FGBuildablePipeReservoir__type];
	};
