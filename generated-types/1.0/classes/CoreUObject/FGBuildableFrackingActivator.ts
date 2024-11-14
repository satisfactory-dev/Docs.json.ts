import {FGBuildable__extractor_base__shared__type} from './FGBuildable';

import {common_base__FGBuildableFrackingActivator__type} from '../../../common/classes/CoreUObject/FGBuildableFrackingActivator';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableFrackingActivator__type =
	FGBuildableFrackingActivator__merged__type;

export type FGBuildableFrackingActivator__merged__type =
	common_base__FGBuildableFrackingActivator__type &
		FGBuildable__extractor_base__shared__type;

export type FGBuildableFrackingActivator__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableFrackingActivator__type];
	};
