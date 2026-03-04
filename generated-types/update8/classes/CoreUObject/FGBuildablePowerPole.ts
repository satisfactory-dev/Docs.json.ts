import {FGBuildable__base__type} from './FGBuildable.js';

import {common_base__FGBuildablePowerPole__type} from '../../../common/classes/CoreUObject/FGBuildablePowerPole.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildablePowerPole__type =
	common_base__FGBuildablePowerPole__type &
		FGBuildable__base__type;

export type FGBuildablePowerPole__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePowerPole__type, ...FGBuildablePowerPole__type[]];
	};
