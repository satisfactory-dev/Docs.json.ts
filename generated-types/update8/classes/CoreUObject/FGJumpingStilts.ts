import {FGEquipment__base__type} from './FGEquipment';

import {common_base__FGJumpingStilts__type} from '../../../common/classes/CoreUObject/FGJumpingStilts';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGJumpingStilts__type = FGJumpingStilts__merged__type;

export type FGJumpingStilts__merged__type =
	common_base__FGJumpingStilts__type & FGEquipment__base__type;

export type FGJumpingStilts__NativeClass = NativeClass__type & {
	Classes: [FGJumpingStilts__type];
};
