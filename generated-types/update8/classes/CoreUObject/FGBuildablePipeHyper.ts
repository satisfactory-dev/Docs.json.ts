import {FGBuildable__base__type} from './FGBuildable.js';

import {common_base__FGBuildablePipeHyper__type} from '../../../common/classes/CoreUObject/FGBuildablePipeHyper.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePipeHyper__type = FGBuildablePipeHyper__merged__type;

export type FGBuildablePipeHyper__merged__type =
	common_base__FGBuildablePipeHyper__type &
		FGBuildable__base__type;

export type FGBuildablePipeHyper__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeHyper__type];
	};
