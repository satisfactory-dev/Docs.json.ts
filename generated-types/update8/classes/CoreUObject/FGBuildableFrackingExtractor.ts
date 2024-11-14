import {FGBuildable__extractor_base__type} from './FGBuildable';

import {common_base__FGBuildableFrackingExtractor__type} from '../../../common/classes/CoreUObject/FGBuildableFrackingExtractor';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableFrackingExtractor__type =
	FGBuildableFrackingExtractor__merged__type;

export type FGBuildableFrackingExtractor__merged__type =
	common_base__FGBuildableFrackingExtractor__type &
		FGBuildable__extractor_base__type;

export type FGBuildableFrackingExtractor__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableFrackingExtractor__type];
	};
