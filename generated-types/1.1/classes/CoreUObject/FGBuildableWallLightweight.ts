import {v1_0_base__FGBuildableWallLightweight__type} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableWallLightweight__type =
	v1_0_base__FGBuildableWallLightweight__type & FGBuildable__base__type;

export type FGBuildableWallLightweight__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableWallLightweight__type,
			...FGBuildableWallLightweight__type[],
		];
	};
