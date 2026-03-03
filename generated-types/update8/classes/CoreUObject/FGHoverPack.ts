import {FGEquipment__base__type} from './FGEquipment.ts';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned.ts';

import {decimal_string__type} from '../../../common/common/scalar.ts';

import {common_base__FGHoverPack__type} from '../../../common/classes/CoreUObject/FGHoverPack.ts';

export type FGHoverPack__type = FGHoverPack__merged__type & {
	mHoverPackActiveTimer: empty_object__type;
	mCurrentPlayerVelocity: decimal_string__type;
	mCurrentMouseDelta: decimal_string__type;
	mHoverpackJoystickTimer: empty_object__type;
	mCurrentBatteryPowerLevel: decimal_string__type;
	m_PreviousHoverMode: 'HPM_Inactive';
};

export type FGHoverPack__merged__type =
	common_base__FGHoverPack__type & FGEquipment__base__type;

export type FGHoverPack__NativeClass = NativeClass__type & {
	Classes: [FGHoverPack__type];
};
