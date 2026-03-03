import {decimal_string__type} from '../../common/scalar.ts';

import {common_base__FGEquipment__base__type} from './FGEquipment.ts';

export type common_base__FGJumpingStilts__type =
	common_base__FGEquipment__base__type & {
		mSprintSpeedFactor: decimal_string__type;
		mJumpSpeedFactor: decimal_string__type;
	};
