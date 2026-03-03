import {v1_0_base__FGBuildableCornerWall__type} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableCornerWall__type =
	v1_0_base__FGBuildableCornerWall__type & FGBuildable__base__type;

export type FGBuildableCornerWall__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableCornerWall__type, ...FGBuildableCornerWall__type[]];
	};
