import {v1_0_base__FGBuildablePipeReservoir__type} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePipeReservoir__type =
	v1_0_base__FGBuildablePipeReservoir__type & FGBuildable__base__type;

export type FGBuildablePipeReservoir__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeReservoir__type, FGBuildablePipeReservoir__type];
	};
