import {empty_object__type} from '../../common/unassigned.ts';

import {integer_string__type} from '../../common/scalar.ts';

import {common_base__FGBuildable__power_switch__base__type} from './FGBuildable.ts';

export type common_base__FGBuildablePriorityPowerSwitch__type =
	common_base__FGBuildable__power_switch__base__type & {
		mOnPriorityChanged: empty_object__type;
		mPriority: integer_string__type;
	};
