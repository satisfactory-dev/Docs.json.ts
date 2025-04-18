import {v1_0_base__FGBuildablePowerBooster__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePowerBooster__type =
	v1_0_base__FGBuildablePowerBooster__type & FGBuildable__base__type;

export type FGBuildablePowerBooster__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildablePowerBooster__type,
			...FGBuildablePowerBooster__type[],
		];
	};
