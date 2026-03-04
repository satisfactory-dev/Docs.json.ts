import {empty_object__type} from '../../common/unassigned.js';

import {integer_string__type} from '../../common/scalar.js';

import {common_base__FGBuildable__power_switch__base__type} from './FGBuildable.js';

export type common_base__FGBuildablePriorityPowerSwitch__type =
	common_base__FGBuildable__power_switch__base__type & {
		mOnPriorityChanged: empty_object__type;
		mPriority: integer_string__type;
	};
