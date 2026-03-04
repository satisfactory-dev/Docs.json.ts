import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildablePipeHyper__type
} from '../../../common/classes/CoreUObject/FGBuildablePipeHyper.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePipeHyper__type
	= common_base__FGBuildablePipeHyper__type
		& FGBuildable__base__type;

export type FGBuildablePipeHyper__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePipeHyper__type],
	};
