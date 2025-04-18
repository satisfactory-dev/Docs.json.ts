import {
	v1_0_base__FGBuildableConveyorBelt__pre_1_1__type,
	has__mAttachedThroughputMonitors__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableConveyorBelt__type =
	FGBuildableConveyorBelt__merged__type;

export type FGBuildableConveyorBelt__merged__type =
	v1_0_base__FGBuildableConveyorBelt__pre_1_1__type &
		FGBuildable__base__type &
		has__mAttachedThroughputMonitors__type;

export type FGBuildableConveyorBelt__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableConveyorBelt__type,
			...FGBuildableConveyorBelt__type[],
		];
	};
