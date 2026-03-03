import {v1_0_base__FGBuildableTrainPlatformCargo__type} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableTrainPlatformCargo__type =
	FGBuildableTrainPlatformCargo__merged__type;

export type FGBuildableTrainPlatformCargo__merged__type =
	v1_0_base__FGBuildableTrainPlatformCargo__type & FGBuildable__base__type;

export type FGBuildableTrainPlatformCargo__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableTrainPlatformCargo__type,
			...FGBuildableTrainPlatformCargo__type[],
		];
	};
