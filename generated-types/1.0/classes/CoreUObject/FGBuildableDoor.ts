import type {
	FGBuildableWallLightweight__type
} from './FGBuildableWallLightweight.js';

import type {
	common_base__FGBuildableDoor__type,
	common_base__FGBuildableDoor__automated__type,
	common_base__FGBuildableDoor__base__type,
} from '../../../common/classes/CoreUObject/FGBuildableDoor.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableDoor__type
	= common_base__FGBuildableDoor__type
		& FGBuildableDoor__base__type;

export type FGBuildableDoor__automated__type
	= common_base__FGBuildableDoor__automated__type
		& FGBuildableDoor__base__type;

export type FGBuildableDoor__base__type
	= common_base__FGBuildableDoor__base__type
		& FGBuildableWallLightweight__type;

export type FGBuildableDoor__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableDoor__type | FGBuildableDoor__automated__type,
		...(FGBuildableDoor__type | FGBuildableDoor__automated__type)[],
	],
};
