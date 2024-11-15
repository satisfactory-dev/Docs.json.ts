import {FGBuildable__base__type} from './FGBuildable';

import {common_base__FGBuildablePipeHyper__type} from '../../../common/classes/CoreUObject/FGBuildablePipeHyper';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipeHyper__type = FGBuildablePipeHyper__merged__type;

export type FGBuildablePipeHyper__merged__type =
	common_base__FGBuildablePipeHyper__type &
		FGBuildable__base__type;

export type FGBuildablePipeHyper__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeHyper__type];
	};
