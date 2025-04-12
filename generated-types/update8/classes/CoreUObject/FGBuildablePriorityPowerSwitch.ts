import {FGBuildable__power_switch__base__type} from './FGBuildable';

import {common_base__FGBuildablePriorityPowerSwitch__type} from '../../../common/classes/CoreUObject/FGBuildablePriorityPowerSwitch';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePriorityPowerSwitch__type =
	common_base__FGBuildablePriorityPowerSwitch__type &
		FGBuildable__power_switch__base__type;

export type FGBuildablePriorityPowerSwitch__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePriorityPowerSwitch__type];
	};
