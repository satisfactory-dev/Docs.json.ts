import {decimal_string__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGJumpingStilts__type = FGEquipment__base__type & {
	mSprintSpeedFactor: decimal_string__type;
	mJumpSpeedFactor: decimal_string__type;
};

export type FGJumpingStilts__NativeClass = NativeClass__type & {
	Classes: [FGJumpingStilts__type];
};
