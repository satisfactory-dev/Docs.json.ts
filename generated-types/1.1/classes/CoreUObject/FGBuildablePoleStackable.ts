import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildable__pole__base__no_static__pre_1_1__type,
	NativeClass__type,
} from '../../../common/common/unassigned.js';

export type FGBuildablePoleStackable__type
	= common_base__FGBuildable__pole__base__no_static__pre_1_1__type
		& FGBuildable__base__type;

export type FGBuildablePoleStackable__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildablePoleStackable__type,
			...FGBuildablePoleStackable__type[],
		],
	};
