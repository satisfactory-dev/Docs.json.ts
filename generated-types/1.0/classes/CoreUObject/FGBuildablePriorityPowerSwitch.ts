import {empty_object__type, NativeClass__type} from '../../common/unassigned';

import {integer_string__type} from '../../common/scalar';

import {FGBuildable__power_switch__base__type} from './FGBuildable';

export type FGBuildablePriorityPowerSwitch__type =
	FGBuildable__power_switch__base__type & {
		mOnPriorityChanged: empty_object__type;
		mPriority: integer_string__type;
	};

export type FGBuildablePriorityPowerSwitch__NativeClass = NativeClass__type & {
	Classes: [FGBuildablePriorityPowerSwitch__type];
};
