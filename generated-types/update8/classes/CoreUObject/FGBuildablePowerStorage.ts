import {FGBuildable__consumes_power_base__type} from './FGBuildable.ts';

import {common_base__FGBuildablePowerStorage__type} from '../../../common/classes/CoreUObject/FGBuildablePowerStorage.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePowerStorage__type =
	FGBuildablePowerStorage__merged__type;

export type FGBuildablePowerStorage__merged__type =
	common_base__FGBuildablePowerStorage__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildablePowerStorage__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePowerStorage__type];
	};
