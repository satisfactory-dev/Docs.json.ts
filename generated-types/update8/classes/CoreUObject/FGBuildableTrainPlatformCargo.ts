import {FGBuildableTrainPlatform__base__type} from './FGBuildableTrainPlatform.ts';

import {
	common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type,
	common_base__FGBuildableTrainPlatformCargo__type,
} from '../../../common/classes/CoreUObject/FGBuildableTrainPlatformCargo.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableTrainPlatformCargo__type =
	FGBuildableTrainPlatformCargo__merged__type;

export type FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type =
	FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__merged__type;

export type FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__merged__type =
	common_base__FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type &
		FGBuildableTrainPlatform__base__type;

export type FGBuildableTrainPlatformCargo__merged__type =
	common_base__FGBuildableTrainPlatformCargo__type &
		FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type;

export type FGBuildableTrainPlatformCargo__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableTrainPlatformCargo__type,
			...FGBuildableTrainPlatformCargo__type[],
		];
	};
