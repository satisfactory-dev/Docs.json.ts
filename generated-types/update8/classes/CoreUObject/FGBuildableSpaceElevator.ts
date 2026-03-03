import {FGBuildable__consumes_power_base__type} from './FGBuildable.ts';

import {common_base__FGBuildableSpaceElevator__type} from '../../../common/classes/CoreUObject/FGBuildableSpaceElevator.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableSpaceElevator__type =
	common_base__FGBuildableSpaceElevator__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableSpaceElevator__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableSpaceElevator__type];
	};
