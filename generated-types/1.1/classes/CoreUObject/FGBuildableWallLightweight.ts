import {v1_0_base__FGBuildableWallLightweight__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWallLightweight__type =
	v1_0_base__FGBuildableWallLightweight__type & FGBuildable__base__type;

export type FGBuildableWallLightweight__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableWallLightweight__type,
			...FGBuildableWallLightweight__type[],
		];
	};
