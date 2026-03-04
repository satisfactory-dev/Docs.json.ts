import type {
	FGEquipment__base__type
} from './FGEquipment.js';

import type {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned.js';

import type {
	decimal_string__type
} from '../../../common/common/scalar.js';

import type {
	common_base__FGHoverPack__type
} from '../../../common/classes/CoreUObject/FGHoverPack.js';

export type FGHoverPack__type = FGHoverPack__merged__type & {
	mHoverPackActiveTimer: empty_object__type,
	mCurrentPlayerVelocity: decimal_string__type,
	mCurrentMouseDelta: decimal_string__type,
	mHoverpackJoystickTimer: empty_object__type,
	mCurrentBatteryPowerLevel: decimal_string__type,
	m_PreviousHoverMode: 'HPM_Inactive',
};

export type FGHoverPack__merged__type
	= common_base__FGHoverPack__type & FGEquipment__base__type;

export type FGHoverPack__NativeClass = NativeClass__type & {
	Classes: [FGHoverPack__type],
};
