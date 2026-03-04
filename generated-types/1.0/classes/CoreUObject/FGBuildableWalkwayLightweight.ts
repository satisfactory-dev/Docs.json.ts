import type {
	FGBuildableWalkway__base__type
} from './FGBuildableWalkway.js';

import type {
	common_base__FGBuildableWalkwayLightweight__type
} from '../../../common/classes/CoreUObject/FGBuildableWalkwayLightweight.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableWalkwayLightweight__type
	= common_base__FGBuildableWalkwayLightweight__type
		& FGBuildableWalkway__base__type;

export type FGBuildableWalkwayLightweight__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildableWalkwayLightweight__type,
			...FGBuildableWalkwayLightweight__type[],
		],
	};
