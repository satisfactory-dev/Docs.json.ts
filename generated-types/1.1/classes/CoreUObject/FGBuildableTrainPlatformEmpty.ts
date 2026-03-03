import {v1_0_base__FGBuildableTrainPlatformEmpty__type} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableTrainPlatformEmpty__type =
	FGBuildableTrainPlatformEmpty__merged__type;

export type FGBuildableTrainPlatformEmpty__merged__type =
	v1_0_base__FGBuildableTrainPlatformEmpty__type & FGBuildable__base__type;

export type FGBuildableTrainPlatformEmpty__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableTrainPlatformEmpty__type,
			...FGBuildableTrainPlatformEmpty__type[],
		];
	};
