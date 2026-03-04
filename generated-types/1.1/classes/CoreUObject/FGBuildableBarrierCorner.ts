import type {
	FGBuildablePillarLightweight__type
} from './FGBuildablePillarLightweight.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildablePillarLightweight__type
} from '../../../common/classes/CoreUObject/FGBuildablePillarLightweight.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableBarrierCorner__type = FGBuildable__base__type
	& common_base__FGBuildablePillarLightweight__type;

export type FGBuildableBarrierCorner__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildablePillarLightweight__type,
			...FGBuildablePillarLightweight__type[],
		],
	};
