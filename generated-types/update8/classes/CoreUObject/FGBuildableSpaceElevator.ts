import {FGBuildable__consumes_power_base__type} from './FGBuildable.js';

import {common_base__FGBuildableSpaceElevator__type} from '../../../common/classes/CoreUObject/FGBuildableSpaceElevator.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableSpaceElevator__type =
	common_base__FGBuildableSpaceElevator__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableSpaceElevator__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableSpaceElevator__type];
	};
