import {empty_object__type} from '../../common/unassigned';

import {integer_string__type} from '../../common/scalar';

import {FGBuildable__power_switch__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePriorityPowerSwitch__type =
	FGBuildable__power_switch__base__type & {
		mOnPriorityChanged: empty_object__type;
		mPriority: integer_string__type;
	};

export type FGBuildablePriorityPowerSwitch__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePriorityPowerSwitch__type];
	};
