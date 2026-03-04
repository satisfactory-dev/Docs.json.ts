import type {
	FGBuildable__extractor_base__shared__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableFrackingActivator__type
} from '../../../common/classes/CoreUObject/FGBuildableFrackingActivator.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableFrackingActivator__type
	= common_base__FGBuildableFrackingActivator__type
		& FGBuildable__extractor_base__shared__type;

export type FGBuildableFrackingActivator__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableFrackingActivator__type],
	};
