import {boolean__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {
	empty_object__type,
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {decimal_string__type} from '../../../common/common/scalar';

export type FGHoverPack__type = FGEquipment__base__type & {
	mHoverPackActiveTimer: empty_object__type;
	mCurrentPlayerVelocity: decimal_string__type;
	mCurrentMouseDelta: decimal_string__type;
	mHoverpackJoystickTimer: empty_object__type;
	mCurrentBatteryPowerLevel: decimal_string__type;
	m_PreviousHoverMode: 'HPM_Inactive';
	ConnectionLocationUpdatedDelegate: empty_object__type;
	ConnectionStatusUpdatedDelegate: empty_object__type;
	HoverModeChangedDelegate: empty_object__type;
	RangeWarningToggleDelegate: empty_object__type;
	mHoverSpeed: decimal_string__type;
	mHoverAccelerationSpeed: decimal_string__type;
	mHoverSprintMultiplier: decimal_string__type;
	mHoverFriction: decimal_string__type;
	mJumpKeyHoldActivationTime: decimal_string__type;
	mFallSpeedLimitWhenPowered: decimal_string__type;
	mPowerConnectionSearchRadius: decimal_string__type;
	mPowerConnectionSearchTickRate: decimal_string__type;
	mPowerConnectionDisconnectionTime: decimal_string__type;
	mPowerCapacity: decimal_string__type;
	mPowerDrainRate: decimal_string__type;
	mPowerConsumption: decimal_string__type;
	mCurrentPowerLevel: decimal_string__type;
	mRangeWarningNormalizedDistanceThreshold: decimal_string__type;
	mCurrentHoverMode: 'HPM_Inactive';
	mHasConnection: boolean__type;
	mShouldAutomaticallyHoverWhenConnected: boolean__type;
	mCrouchHoverCancelTime: decimal_string__type;
	mCharacterUseDistanceWhenActive: decimal_string__type;
	mActiveNoiseFrequency: decimal_string__type;
	mCurrentConnectionLocation: xyz__type;
};

export type FGHoverPack__NativeClass = NativeClass__type & {
	Classes: [FGHoverPack__type];
};
