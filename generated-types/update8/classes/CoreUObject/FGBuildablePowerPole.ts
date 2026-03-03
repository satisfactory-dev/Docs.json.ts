import {FGBuildable__base__type} from './FGBuildable.ts';

import {common_base__FGBuildablePowerPole__type} from '../../../common/classes/CoreUObject/FGBuildablePowerPole.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePowerPole__type =
	common_base__FGBuildablePowerPole__type &
		FGBuildable__base__type;

export type FGBuildablePowerPole__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePowerPole__type, ...FGBuildablePowerPole__type[]];
	};
