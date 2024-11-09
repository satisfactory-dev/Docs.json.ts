import {empty_object__type, xyz__type} from '../../common/unassigned';

import {decimal_string__type, boolean__type} from '../../common/scalar';

import {common_base__FGEquipment__base__type} from './FGEquipment';

export type common_base__FGHoverPack__type =
	common_base__FGEquipment__base__type & {
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
