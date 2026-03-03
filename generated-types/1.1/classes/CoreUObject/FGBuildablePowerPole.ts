import {v1_0_base__FGBuildablePowerPole__type} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePowerPole__type =
	v1_0_base__FGBuildablePowerPole__type & FGBuildable__base__type;

export type FGBuildablePowerPole__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePowerPole__type, ...FGBuildablePowerPole__type[]];
	};
