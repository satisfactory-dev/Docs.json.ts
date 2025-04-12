import {FGBuildableWallLightweight__type} from './FGBuildableWallLightweight';

import {
	common_base__FGBuildableDoor__type,
	common_base__FGBuildableDoor__automated__type,
	common_base__FGBuildableDoor__base__type,
} from '../../../common/classes/CoreUObject/FGBuildableDoor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableDoor__type =
	common_base__FGBuildableDoor__type &
		FGBuildableDoor__base__type;

export type FGBuildableDoor__automated__type =
	common_base__FGBuildableDoor__automated__type &
		FGBuildableDoor__base__type;

export type FGBuildableDoor__base__type =
	common_base__FGBuildableDoor__base__type &
		FGBuildableWallLightweight__type;

export type FGBuildableDoor__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableDoor__type | FGBuildableDoor__automated__type,
		...(FGBuildableDoor__type | FGBuildableDoor__automated__type)[],
	];
};
