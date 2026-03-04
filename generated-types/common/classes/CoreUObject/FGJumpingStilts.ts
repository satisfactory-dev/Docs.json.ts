import type {
	decimal_string__type
} from '../../common/scalar.js';

import type {
	common_base__FGEquipment__base__type
} from './FGEquipment.js';

export type common_base__FGJumpingStilts__type
	= common_base__FGEquipment__base__type & {
		mSprintSpeedFactor: decimal_string__type,
		mJumpSpeedFactor: decimal_string__type,
	};
