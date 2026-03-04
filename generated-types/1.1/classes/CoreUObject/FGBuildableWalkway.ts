import type {
	FGBuildableWalkwayLightweight__type
} from './FGBuildableWalkwayLightweight.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableWalkway__type,
	common_base__FGBuildableWalkway__base__type,
} from '../../../common/classes/CoreUObject/FGBuildableWalkway.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableWalkway__type
	= common_base__FGBuildableWalkway__type
		& FGBuildableWalkway__base__type;

export type FGBuildableWalkway__base__type
	= common_base__FGBuildableWalkway__base__type
		& FGBuildable__base__type;

export type FGBuildableWalkway__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildableWalkwayLightweight__type,
			...FGBuildableWalkwayLightweight__type[],
		],
	};
