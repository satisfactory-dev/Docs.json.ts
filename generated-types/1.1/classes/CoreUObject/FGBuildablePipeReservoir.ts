import {v1_0_base__FGBuildablePipeReservoir__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipeReservoir__type =
	v1_0_base__FGBuildablePipeReservoir__type & FGBuildable__base__type;

export type FGBuildablePipeReservoir__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeReservoir__type, FGBuildablePipeReservoir__type];
	};
