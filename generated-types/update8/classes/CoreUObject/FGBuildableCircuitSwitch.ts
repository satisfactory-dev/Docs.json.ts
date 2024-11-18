import {FGBuildable__power_switch__base__type} from './FGBuildable';

import {common_base__FGBuildableCircuitSwitch__type} from '../../../common/classes/CoreUObject/FGBuildableCircuitSwitch';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableCircuitSwitch__type =
	FGBuildableCircuitSwitch__merged__type;

export type FGBuildableCircuitSwitch__merged__type =
	common_base__FGBuildableCircuitSwitch__type &
		FGBuildable__power_switch__base__type;

export type FGBuildableCircuitSwitch__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableCircuitSwitch__type];
	};
