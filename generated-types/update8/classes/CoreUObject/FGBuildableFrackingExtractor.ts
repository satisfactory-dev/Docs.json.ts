import type {
	FGBuildable__extractor_base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableFrackingExtractor__type
} from '../../../common/classes/CoreUObject/FGBuildableFrackingExtractor.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableFrackingExtractor__type
	= common_base__FGBuildableFrackingExtractor__type
		& FGBuildable__extractor_base__type;

export type FGBuildableFrackingExtractor__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableFrackingExtractor__type],
	};
