import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildablePillarLightweight__type
} from '../../../common/classes/CoreUObject/FGBuildablePillarLightweight.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePillarLightweight__type
	= common_base__FGBuildablePillarLightweight__type
		& FGBuildable__base__type;

export type FGBuildablePillarLightweight__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildablePillarLightweight__type,
			...FGBuildablePillarLightweight__type[],
		],
	};
